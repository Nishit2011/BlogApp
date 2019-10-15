import jsonplaceholder from './jsonplaceholder';
import _ from 'lodash';
export const getPosts = () => {
    return async function (dispatch) {
        const res = await jsonplaceholder.get('/posts')
        dispatch({
            type: 'GET_POSTS',
            payload: res.data
        })
    }

}


export const getUser = (id) =>(dispatch) => {
        _getUser(id, dispatch)
};


const _getUser = _.memoize(async(id, dispatch) =>{
    const res = await jsonplaceholder.get(`/users/${id}`) 
    dispatch({
        type: 'GET_USER',
        payload: res.data
    });
})