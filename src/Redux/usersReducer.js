const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


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
    ]
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
        return {...state, users: [...state.users, ...action.users]}

        default:
            return state;
    }
};


    export const followAC = (userId) => ({type: FOLLOW, userId});
    export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
    export const setUsersAC = (users) => ({type: SET_USERS, users});

    export default usersReducer;