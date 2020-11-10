import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';


export const fetchPostsAndUsers = () => async dispatch => {
  // await fetch posts before dispatch list
 await dispatch(fetchPosts());
}

export const fetchPosts = () => {

  return async (dispatch) => {
    const responce = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: responce.data})
  };
};


//lodash momize helper funtion to stop user fetch running multipul times when alredy fethced

export const fetchUser = (id) => dispatch => {
  _fetchUser(id, dispatch);
  };

const _fetchUser = _.memoize( async (id,dispatch) => {
    const reponce = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: reponce.data})
});


