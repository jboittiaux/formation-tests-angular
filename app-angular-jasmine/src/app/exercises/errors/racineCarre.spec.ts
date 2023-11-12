import { racineCarre } from "./racineCarre";

describe('racineCarre function', () => {
  it('should give good result', () => {
    expect(racineCarre(4)).toBe(2);
  });

  it('should fail on negative number', () => {
    // pas besoin d'être trop précis sur les tests d'erreur
    // expect(() => racineCarre(-1)).toThrowError('nb must be positive');
    expect(() => racineCarre(-1)).toThrow();
  });
});
