import { DEFAULT_LIMIT } from '../src/constants';

export function testSuite(
  fn: (offset?: number, limit?: number) => number[],
  firstTenValues: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ],
  rangeTest: { offset: number; limit: number; expected: number[] },
) {
  describe('default behavior', () => {
    const result = fn();
    test(`Returns ${DEFAULT_LIMIT} values`, () => {
      expect(result.length).toEqual(DEFAULT_LIMIT);
    });
    test('first 10 digits are correct', () => {
      expect(result.slice(0, 10)).toEqual(firstTenValues);
    });
  });
  describe(`range test: ${rangeTest.offset} - ${
    rangeTest.offset + rangeTest.limit
  }`, () => {
    const result = fn(rangeTest.offset, rangeTest.limit);
    test(`returns ${rangeTest.limit} values`, () => {
      expect(result.length).toEqual(rangeTest.limit);
    });
    test('returns expected values', () => {
      expect(result).toEqual(rangeTest.expected);
    });
  });
  describe('edge cases', () => {
    test('cannot specify offset <0', () => {
      expect(() => fn(-10, 1)).toThrow();
    });
    test('cannot specify limit <0', () => {
      expect(() => fn(0, -10)).toThrow();
    });
    test('limit of 0 returns empty set', () => {
      expect(fn(0, 0)).toEqual([]);
    });
  });
}
