const classNames = require('./src/classNames').classNames;
const randomId = require('./src/randomId').randomId;
const fakeUuid = require('./src/randomId').fakeUuid;

describe('classNames', () => {
  it('should return an empty string for empty args', () => expect(classNames()).toBe(''));
  it('should return an empty string for empty string arg', () => expect(classNames('')).toBe(''));
  it('should return two classes separated by space for three string arguments, one doubling', () =>
    expect(classNames('test', 'test2', 'test')).toBe('test test2'));
  it('should trim spaces from classnames', () => expect(classNames('test  ', 'test2  ')).toBe('test test2'));
  it('should work with objects', () => expect(classNames('test', { test2: true, test3: false })).toBe('test test2'));
  it('should work with arrays of strings', () =>
    expect(classNames('test', ['test2'], ['test3', ['test4']])).toBe('test test2 test3 test4'));
  it('should allow empty arguments', () => expect(classNames('a', undefined, 'b')).toBe('a b'));
});

const isArrayUnique = (arr) => Array.isArray(arr) && new Set(arr).size === arr.length;
const getArrayOfRandomIds = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(randomId());
  }
  return arr;
};

const n = 1000;

describe('randomId', () => {
  it(`should generate ${n} random ids`, () => expect(isArrayUnique(getArrayOfRandomIds(n))).toBeTruthy());
  it('should generate random id of length 100', () => expect(randomId(100).length).toBe(100));
  it('should generate random id of length 2', () => expect(randomId(2).length).toBe(2));
  it('should generate random id of length 6 for length <= 0', () => expect(randomId(-10).length).toBe(6));
  it('should generate random id of length 6 for undefined length', () => expect(randomId().length).toBe(6));
});

describe('fakeUuid', () => {
  it('should match UUID groups shape (without checking for compliance)', () =>
    expect(fakeUuid()).toMatch(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/));
});
