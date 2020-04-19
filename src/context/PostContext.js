import createDataContext from './createDataContext';
import api from '../api';

//
const postReducer = (state, action) => {

  //
  switch (action.type) {

    //
    case 'get_posts': return action.payload;
    case 'edit_post': return state.map(post => { return post.id === action.payload.id ? action.payload : post; });
    case 'delete_post': return state.filter(post => post.id !== action.payload);

    default:

      return state;
  
  }

};

// Posts GET
const getPosts = dispatch => {

//
return async () => {

    //
    let path = '/posts?';
    path += '&token='+'tkn_thentrlco';
    path += '&app='+'app_thentrlco';
    path += '&profile='+'per_adolphusnolan';
    //path += '&id='+`${id}`;
    //path += '&body='+`${body}`;
    //path += '&closed='+`${closed}`;
    //path += '&deleted='+`${deleted}`;
    //path += '&access='+`${access}`;

    //
    const response = await api.get(path);

    dispatch({ type: 'get_posts', payload: response.data.data });
};
};

// Posts ADD
const addPost = dispatch => {

//
return async (host, body, closed, deleted, access, callback) => {

    //
    let path = '/posts?';
    path += '&token='+'tkn_thentrlco';
    path += '&app='+'app_thentrlco';
    path += '&profile='+'per_adolphusnolan';
    path += '&host='+`${host}`;
    //path += '&id='+`${id}`;
    path += '&body='+`${body}`;
    path += '&closed='+`${closed}`;
    path += '&deleted='+`${deleted}`;
    path += '&access='+`${access}`;

    //
    const response = await api.post(path);

    //console.log(response);

    if (callback) {
    callback();
    }
};
};

// Posts DELETE
const deletePost = dispatch => {

//
return async id => {

    //
    let path = '/posts?';
    path += '&token='+'tkn_thentrlco';
    path += '&app='+'app_thentrlco';
    path += '&profile='+'per_adolphusnolan';
    path += '&host='+'per_adolphusnolan';
    path += '&id='+`${id}`;
    //path += '&body='+`${body}`;
    //path += '&closed='+`${closed}`;
    //path += '&deleted='+`${deleted}`;
    //path += '&access='+`${access}`;

    const response = await api.delete(path);

    //console.log(response.data.data);

    dispatch({ type: 'delete_post', payload: id });
};
};

// Posts EDIT
const editPost = dispatch => {

//
return async (id,host,body,closed,deleted,access,callback) => {

    //
    let path = '/posts?';
    path += '&token='+'tkn_thentrlco';
    path += '&app='+'app_thentrlco';
    path += '&profile='+'per_adolphusnolan';
    path += '&host='+'per_adolphusnolan';
    path += '&id='+`${id}`;
    path += '&body='+`${body}`;
    path += '&closed='+`${closed}`;
    path += '&deleted='+`${deleted}`;
    path += '&access='+`${access}`;

    //
    const response = await api.put(path);

    //console.log(response);
    //console.log(id,body,closed,deleted,access);

    dispatch({
    type: 'edit_post',
    payload: { id, host, body, closed, deleted, access }
    });
    if (callback) {
    callback();
    }
};
};

//
export const { Context, Provider } = createDataContext(
  postReducer, {
    addPost,
    deletePost,
    editPost,
    getPosts,
  },[]
);
