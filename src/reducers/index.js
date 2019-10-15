import { combineReducers } from "redux";

export const postsReducer = (state=[], action) =>{
    switch (action.type){
        case 'GET_POSTS':
            return action.payload
        default:
            return state
    }
   
}
export const userReducer = (state=[], action) =>{
    switch (action.type){
        case 'GET_USER':
            
            return [...state, action.payload]
        default:
            return state
    }
   
}
export default combineReducers({
    posts: postsReducer,
    user: userReducer
})