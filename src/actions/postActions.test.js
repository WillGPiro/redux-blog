import { addPost, ADD_POST, updatePost, UPDATE_POST, deletePost, DELETE_POST } from "./postActions";

describe('posts actions', () => {
  it('creates an ADD_POST action', () => {
    const action = addPost({
      title: 'My Lost Ocean - A Haiku',
      body: 'Spring, the days grow long, your ebb and flow call my name, alas I am home.'
    })
//expect and object with the post we want to create.
    expect(action).toEqual({
      type: ADD_POST,
      payload: {
        title: 'My Lost Ocean - A Haiku',
        body: 'Spring, the days grow long, your ebb and flow call my name, alas I am home.'
      }
    });
  });

  it('creates an UPDATE_POST action', () => {
    const action = updatePost(0, {
      title: 'My Lost Ocean - A Haiku',
      body: 'Spring, the days grow long, your ebb and flow call my name, alas I am home.'
    });
//the index of the post we want to update and how the new post should look.
    expect(action).toEqual({
      type: UPDATE_POST,
      payload: {
        index: 0,
        post: {
          title: 'My Lost Ocean - A Haiku',
          body: 'Spring, the days grow long, your ebb and flow call my name, alas I am home.'
        }
      }
    });
  });

  it('creates a DELETE_POST action', () => {
    const action = deletePost(2);

    expect(action).toEqual({
      type: DELETE_POST,
      payload: 2
    });
  });
});
//This action will eventually be sent to our reducer.