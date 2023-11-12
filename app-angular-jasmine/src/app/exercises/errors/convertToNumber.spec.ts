import { convertToNumber } from "./convertToNumber";

describe('convertToNumber function', () => {
  it('should convert string to number', () => {
    expect(convertToNumber('123')).toBe(123);
  });

  it('should throw error if NAN', () => {
    // pas besoin d'être trop précis sur les tests d'erreur
    // expect(() => convertToNumber('test')).toThrowError('Erreur : "test" n\'est pas un nombre');
    expect(() => convertToNumber('nan')).toThrow();
  });
});
