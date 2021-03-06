import { combineReducers } from 'redux';
import { postList, postListHasErrored, postListIsLoading } from './postList';
import { post, postHasErrored, postIsLoading } from './post';
import { loggedIn } from './session';

export default combineReducers({
  postList,
  postListHasErrored,
  postListIsLoading,
  post,
  postHasErrored,
  postIsLoading,
    loggedIn
});
