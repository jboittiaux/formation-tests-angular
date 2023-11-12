import { genererAlea } from "./genererAlea";

describe('genererAlea function', () => {
  it('should generate random value', () => {
    spyOn(Math, 'random').and.returnValue(0.5);
    expect(genererAlea(0, 100)).toBe(50);
  });
});
