import { localStorageToUpper } from "./localStorageToUpper";

describe('localStorageToUpper function', () => {
  it('should return localStorage value to upper case', () => {
    spyOn(localStorage, 'getItem').and.returnValue('test');
    expect(localStorageToUpper('test')).toBe('TEST');
  });
  it('should return null if not value in the storage', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    expect(localStorageToUpper('test')).toBeUndefined();
  });
});
