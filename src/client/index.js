import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import PostList from './components/PostList/PostList';
import Post from './components/Post/Post';
import './app.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/posts/:post_id" component={Post} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
