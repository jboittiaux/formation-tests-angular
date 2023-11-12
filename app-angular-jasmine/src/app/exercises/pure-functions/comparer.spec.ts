import { comparer } from "./comparer";

describe('comparer function', () => {
  it('should return "Trop petit" when nb1 < nb2', () => {
    expect(comparer(1, 2)).toBe('Trop petit');
  });
  it('should return "Trop grand" when nb1 > nb2', () => {
    expect(comparer(2, 1)).toBe('Trop grand');
  });
  it('should return "Gagné" when nb1 === nb2', () => {
    expect(comparer(1, 1)).toBe('Gagné');
  });
});
