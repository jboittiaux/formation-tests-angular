import { dejaSaisis } from "./dejaSaisis";

describe('dejaSaisis function', () => {
  it('should have nothing', () => {
    expect(dejaSaisis([])).toBeUndefined();
  });

  it('should have one digit', () => {
    expect(dejaSaisis([1])).toBe('Vous avez déjà saisi : 1');
  });

  it('should have three digits', () => {
    expect(dejaSaisis([1, 2, 3])).toBe('Vous avez déjà saisi : 1 | 2 | 3');
  });
});
