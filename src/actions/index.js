import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {

  return async (dispatch) => {
    const responce = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: responce.data})
  };
};


export const fetchUser = (id) => {
  return async (dispatch) => {
    const reponce = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: reponce.data})
  }
};


