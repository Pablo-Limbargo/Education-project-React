import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/validators/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TODDLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TODDLE_IS_FOLLOWING_PROGRESS = 'TODDLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://schoolsw3.com/tryit/avatar.png',
        //     followed: false,
        //     fullName: 'Oleg',
        //     status: 'I want to eat',
        //     location: {country: 'Ukraine', city: 'Odesa'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://html5css.ru/howto/img_avatar2.png',
        //     followed: true,
        //     fullName: 'Alla',
        //     status: 'Teaching is my passion',
        //     location: {country: 'Ukraine', city: 'Korosten'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://schoolsw3.com/tryit/avatar.png',
        //     followed: false,
        //     fullName: 'Alex',
        //     status: 'Like to read books',
        //     location: {country: 'United Kingdom', city: 'London'}
        // }
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                // state.users.map((u) => {
                // if (u.id === action.userId) {
                //     return {...u, followed: true}
                // }
                // return u;
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.count}
        case TODDLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TODDLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};


export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TODDLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TODDLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page))

    let data = await userAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));

    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccess);
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), unfollowSuccess)
    }
}

export default usersReducer;