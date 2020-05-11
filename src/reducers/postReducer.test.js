import { addPost, updatePost, deletePost } from "../actions/postActions";
import reducer from "./postReducer";

describe('posts reducer', () => {
  it('handles the ADD_POST action', () => {
    const state =[];
    const action = addPost({
      title: 'My Lost Ocean - A Haiku',
      body: 'Spring, the days grow long, your ebb and flow call my name, alas I am home.'
    });

    //initial state is empty see postReducer.js
    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        title: 'My Lost Ocean - A Haiku',
        body: 'Spring, the days grow long, your ebb and flow call my name, alas I am home.'
      }
    ])
  });
  
  it('handles the UPDATE_POST action', () => {
    const state = [
      {
        title: 'My Lost Friends - A Haiku',
        body: 'Summer, the days are long, your sun and warmth call my name, Im still home.'
      }
    ];

    const action = updatePost(0, 
      {
        title: 'My Lost Mountain - A Haiku',
        body: 'Winter, the days grow short, your cold and snow call my name, alas I write code.'
      }
    );

    const newState = reducer(state, action);
    expect(newState).toEqual([
      {
        title:'My Lost Mountain - A Haiku',
        body: 'Winter, the days grow short, your cold and snow call my name, alas I write code.'
      }
    ]);
  });

  it('handles a DELETE_POST action', () => {
    const state = [
      {
      title: 'My Lost Mountain - A Haiku',
      body: 'Winter, the days grow short, your cold and snow call my name, alas I write code.'
    }
   ];

   const action = deletePost(0)
   const newState = reducer(state, action);
   
   expect(newState).toEqual([]);
 })
});