import { totalPairs } from "./totalPairs";

describe('totalPairs function', () => {
  it('should return total of even numbers', () => {
    expect(totalPairs([1, 3, 5])).toBe(0);
    expect(totalPairs([1, 2, 3, 4, 5])).toBe(2);
  });
});
