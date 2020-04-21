import createDataContext from './createDataContext';
import api from '../api';

//
const threadReducer = (state, action) => {

  //
  switch (action.type) {

    //
    case 'get_threads': return action.payload;
    case 'edit_thread': return state.map(thread => { return thread.id === action.payload.id ? action.payload : thread; });
    case 'delete_thread': return state.filter(thread => thread.id !== action.payload);

    default:

      return state;
  
  }

};

// Thread GET
const getThreads = dispatch => {

  //
  return async () => {
  
      //
      let path = '/threads?';
      path += '&token='+'tok_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&thread='+'prf_adolphusnolan';
      //path += '&id='+`${id}`;
      //path += '&title='+`${title}`;
      //path += '&participants='+`${participants}`;
      //path += '&preview='+`${preview}`;
      //path += '&profile='+`${profile}`;
  
      //
      const response = await api.get(path);

      console.log(response.data.data);
  
      dispatch({ type: 'get_threads', payload: response.data.data });
  };
};
  
// Thread ADD
const addThread = dispatch => {
  
  //
  return async (title,participants,profile,preview,callback) => {
  
      //
      let path = '/threads?';
      path += '&token='+'tkn_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&thread='+'prf_adolphusnolan';
      //path += '&id='+`${id}`;
      path += '&title='+`${title}`;
      path += '&participants='+`${participants}`;
      path += '&preview='+`${preview}`;
      path += '&profile='+`${profile}`;
  
      //
      const response = await api.post(path);
  
      //console.log(response);
  
      if (callback) {
      callback();
      }
  };
};
  
// Thread DELETE
const deleteThread = dispatch => {
  
  //
  return async id => {
  
      //
      let path = '/threads?';
      path += '&token='+'tkn_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&thread='+'prf_adolphusnolan';
      path += '&id='+`${id}`;
      //path += '&title='+`${title}`;
      //path += '&participants='+`${participants}`;
      //path += '&preview='+`${preview}`;
      //path += '&profile='+`${profile}`;
  
      const response = await api.delete(path);
  
      //console.log(response.data.data);
  
      dispatch({ type: 'delete_thread', payload: id });
  };
};
  
// Thread EDIT
const editThread = dispatch => {
  
  //
  return async (id,title,participants,profile,preview,callback) => {
  
      //
      let path = '/threads?';
      path += '&token='+'tkn_thentrlco';
      path += '&app='+'app_thentrlco';
      path += '&thread='+'prf_adolphusnolan';
      path += '&id='+`${id}`;
      path += '&title='+`${title}`;
      path += '&participants='+`${participants}`;
      path += '&preview='+`${preview}`;
      path += '&profile='+`${profile}`;
  
      //
      const response = await api.put(path);
  
      //console.log(response);
  
      dispatch({
      type: 'edit_thread',
      payload: { id, title, participants, profile, preview }
      });
      if (callback) {
      callback();
      }
  };
  };

//
export const { Context, Provider } = createDataContext(
  threadReducer, {
    addThread,
    deleteThread,
    editThread,
    getThreads,
  },[]
);
