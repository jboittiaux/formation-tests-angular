import { beforeNow } from './before-now';

describe('beforeNow function', () => {
  // it('should fail depending of the actual time', () => {
  //   const date = new Date(2023, 9, 30, 14, 56, 0);
  //   expect(beforeNow(date)).toBeFalse();
  // });

  it('should pass with spyOn', () => {
    // 30 octobre 2023 à 12h
    const fakeNow = new Date(2023, 9, 30, 12, 0, 0).getTime();

    spyOn(Date, 'now').and.returnValue(fakeNow);

    const date = new Date(2023, 9, 30, 14, 56, 0);
    expect(beforeNow(date)).toBeFalse();
  });

  it('should pass with spyOn (jasmin.timer().mockDate)', () => {
    // 30 octobre 2023 à 12h
    jasmine.clock().mockDate(new Date(2023, 9, 30, 12, 0, 0));

    // 30 octobre 2023 à 14h56
    expect(beforeNow(new Date(2023, 9, 30, 14, 56, 0))).toBeFalse();


    // 30 octobre 2023 à 15h
    jasmine.clock().mockDate(new Date(2023, 9, 30, 15, 0, 0));

    // 30 octobre 2023 à 14h56
    expect(beforeNow(new Date(2023, 9, 30, 14, 56, 0))).toBeTrue();

    jasmine.clock().uninstall(); // restaure la classe Date d'origine
  });

  it('should be real date', () => {
    console.log(new Date().toLocaleString()); // doit être la vraie date
    expect().nothing();
  });
});
