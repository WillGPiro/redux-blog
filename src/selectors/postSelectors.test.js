import { getPosts, getPostsByIndex } from "./postSelectors";


describe('post selectors', () => {
  it('gets all (list) of posts', () => {
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

  it('gets a post by index', () => {
    const state = {
      post: [
      {
        title: 'My Lost Ocean - A Haiku',
        body: 'Spring, the days grow long, your ebb and flow call my name, alas I am home.'
      },
      {
        title: 'My Lost Mountain - A Haiku',
        body: 'Winter, the days grow short, your cold and snow call my name, alas I write code.'
      },
      {
        title: 'My Lost Friends - A Haiku',
        body: 'Summer, the days are long, your sun and warmth call my name, Im still home.'
      }
    ]};

    const post = getPostsByIndex(state, 0)

    expect(post).toEqual({
      title: 'My Lost Ocean - A Haiku',
      body: 'Spring, the days grow long, your ebb and flow call my name, alas I am home.'
    })
  })
});
