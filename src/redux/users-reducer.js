import { useCallback } from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // { id: 1, photoUrl: 'https://get.wallhere.com/photo/3840x2160-px-BMW-car-sports-car-1110247.jpg', followed: true, fullName: 'Oleg', status: 'I am a junior developer', location: { sity: 'Pinsk', country: 'Belarus' } },
        // { id: 2, photoUrl: 'https://get.wallhere.com/photo/3840x2160-px-BMW-car-sports-car-1110247.jpg', followed: true, fullName: 'Sasha', status: 'I am a senior developer', location: { sity: 'Moscow', country: 'Russia' } },
        // { id: 3, photoUrl: 'https://get.wallhere.com/photo/3840x2160-px-BMW-car-sports-car-1110247.jpg', followed: false, fullName: 'Andrew', status: 'I am a middle developer', location: { sity: 'Kiev', country: 'Ukraine' } },
    ],
    newPostText: 'Hello!'
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}


export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;