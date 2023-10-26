import { Post } from './post';

describe('Post', () => {
  it('should create an instance', () => {
    expect(new Post("", "", "", new Date(), 0, 0, [])).toBeTruthy();
  });
});
