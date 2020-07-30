

import jsonplaceholder from '../apis/jsonPlaceholder'



// export const fetchPosts =  () => {
//     return async function(dispatch) {    
//     const response = await jsonplaceholder.get('/posts');
//     dispatch({type:'FETCH_POST', payload:response.data})
// };
// };

//above commented code can be tranformed in below code 

export const fetchPosts =  () => async  dispatch => {    
    const response = await jsonplaceholder.get('/posts');
    dispatch({type:'FETCH_POST', payload:response.data})
};

export const fetchUser =  (id) => async  dispatch => {    
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({type:'FETCH_USER', payload:response.data})
};

