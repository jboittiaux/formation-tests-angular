import { hello } from "./hello";

describe('hello function', () => {
  it('should say "hello" to Robert', () => {
    expect(hello('Robert')).toBe(`Hello Robert`);
  });

  it('should say "hello" to Robert with AAA', () => {
    // Arrange Act Assert
    // Design pattern de test
    // Synonyme : Given When Then (en BDD)

    // Arrange
    const name: string = 'Robert';
    // Act
    const result = hello(name);
    // Assert
    expect(result).toBe(`Hello ${name}`);
  });
});
