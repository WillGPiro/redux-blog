import { createStore } from 'redux';
import reducer from './reducers/postReducer.js';
import { addPost } from './actions/postActions.js';

const store = createStore(reducer);

console.log(store.getState());

store.dispatch(addPost({
      title: 'My Lost Ocean - A Haiku',
      body: 'Spring, the days grow long, your ebb and flow call my name, alas I am home.'
}));

console.log(store.getState());





