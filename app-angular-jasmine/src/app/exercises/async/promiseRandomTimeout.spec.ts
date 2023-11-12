import { promiseRandomTimeout } from "./promiseRandomTimeout";

describe('promiseRandomTimeout function', () => {
  beforeEach(() => {
    jasmine.clock().install(); // créer des fonctions setTimeout et setInterval synchrones
  });
  afterEach(() => {
    jasmine.clock().uninstall(); // remet en place les fonctions d'origine
  });

  it('should run promise', async () => {
    const promise = promiseRandomTimeout('test');

    // on exécute tous les callbacks entre 0 et 1500ms
    jasmine.clock().tick(1500);

    const value = await promise;
    expect(value).toBe('test');
  });
});
