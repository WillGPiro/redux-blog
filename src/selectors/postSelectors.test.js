import { getPosts } from "./postSelectors";

describe('post selectors', () => {
  it('gets all (list) of dogs', () => {
    const state = [
      {
        title: 'My Lost Ocean - A Haiku',
        body: 'Spring, the days grow long, your ebb and flow call my name, alas I am home.'
      }
    ];

    const posts = getPosts(state);

    expect(posts).toEqual([
      {
        title: 'My Lost Ocean - A Haiku',
        body: 'Spring, the days grow long, your ebb and flow call my name, alas I am home.'
      }
    ]);
  });
});