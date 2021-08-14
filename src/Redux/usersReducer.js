const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

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
    currentPage: 2
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.count}

        default:
            return state;
    }
};


export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount});

export default usersReducer;