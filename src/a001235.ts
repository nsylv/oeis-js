import { DEFAULT_LIMIT } from './constants';

/**
 * Taxicab Numbers: sums of 2 cubes in n ways
 *
 * http://oeis.org/A001235
 */
export function a001235(
  offset: number = 0,
  limit: number = DEFAULT_LIMIT,
): number[] {
  if (offset < 0) {
    throw Error('Cannot specify offset <0');
  }
  if (limit < 0) {
    throw Error('Cannot specify limit <0');
  }
  if (limit === 0) return [];
  var result = [-666];
  var i = 1;
  var count = 0;
  var N = Math.min(offset + limit, 20);
  while (count < N) {
    var int_count = 0;

    for (var j = 1; j <= Math.pow(i, 1 / 3); j++) {
      for (var k = j + 1; k <= Math.pow(i, 1 / 3); k++) {
        if (j * j * j + k * k * k === i) {
          int_count = int_count + 1;
        }
      }
    }

    if (int_count === 2) {
      count = count + 1;
      result.push(i);
    }

    i = i + 1;
  }
  return result.slice(offset + 1, offset + limit + 1);
}
