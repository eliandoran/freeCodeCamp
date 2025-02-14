import { blockNameify } from './block-nameify';

describe('blockNameify', () => {
  it('should return a preformatted name when it exists', () => {
    const result = blockNameify('back-end-development-and-apis');
    expect(result).toBe('Back End Development and APIs');
  });

  it('should use preformatted words when they exist', () => {
    const result = blockNameify('html-css-javascript-fcc-freecodecamp');
    expect(result).toBe('HTML CSS JavaScript fCC freeCodeCamp');
  });

  it('should not format prepositions', () => {
    const result = blockNameify('and-for-of-the-up-with-by-a');
    expect(result).toBe('and for of the up with by a');
  });

  it('should format javascript to JavaScript', () => {
    const result = blockNameify('javascript');
    expect(result).toBe('JavaScript');
  });

  it('should transform "-" to " " and uppercase each word', () => {
    const result = blockNameify('hello-world');
    expect(result).toBe('Hello World');
  });
});
