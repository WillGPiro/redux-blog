import { addPost } from "./postActions";

describe('posts actions', () => {
  it('creates an ADD_POST action', () => {
    const action = addPost({
      title: 'My Lost Ocean - A Haiku',
      body: 'Spring, the days grow long, the ebb and your ebb and flow call my name, alas I am home.'
    })
//expect and object with the post we want to create.
    expect(action).toEqual({
      type: 'ADD_POST',
      payload: {
        title: 'My Lost Ocean - A Haiku',
        body: 'Spring, the days grow long, the ebb and your ebb and flow call my name, alas I am home.'
      }
    })
  });
});