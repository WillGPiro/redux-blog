import { addPost } from "../actions/postActions";
import reducer from "./postReducer";

describe('posts reducer', () => {
  it('handles the ADD_POST action', () => {
    const state =[];
    const action = addPost({
      title: 'My Lost Ocean - A Haiku',
      body: 'Spring, the days grow long, your ebb and flow call my name, alas I am home.'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        title: 'My Lost Ocean - A Haiku',
        body: 'Spring, the days grow long, your ebb and flow call my name, alas I am home.'
      }
    ])
  });
});