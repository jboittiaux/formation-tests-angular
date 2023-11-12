import { timeoutUpper } from "./timeoutUpper";

describe('timeoutUpper function', () => {
  beforeEach(() => {
    jasmine.clock().install(); // créer des fonctions setTimeout et setInterval synchrones
  });
  afterEach(() => {
    jasmine.clock().uninstall(); // remet en place les fonctions d'origine
  });

  it('should return upper case value', (done) => {
    timeoutUpper('abc', (val) => {
      expect(val).toBe('ABC');
      done();
    });

    // on exécute tous les callbacks entre 0 et 1500ms
    jasmine.clock().tick(1000);
  });

  it('should return upper case value', async () => {
    const spy = jasmine.createSpy();
    timeoutUpper('test', spy);

    // on exécute tous les callbacks entre 0 et 500ms
    jasmine.clock().tick(500);
    expect(spy).not.toHaveBeenCalled();
    // on exécute tous les callbacks entre 500 et 1000ms
    jasmine.clock().tick(500);
    expect(spy).toHaveBeenCalledOnceWith('TEST');
  });
});
