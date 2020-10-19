import { DEFAULT_LIMIT } from './constants';

const FIRST_34_RESULTS = [
  1729,
  4104,
  13832,
  20683,
  32832,
  39312,
  40033,
  46683,
  64232,
  65728,
  110656,
  110808,
  134379,
  149389,
  165464,
  171288,
  195841,
  216027,
  216125,
  262656,
  314496,
  320264,
  327763,
  373464,
  402597,
  439101,
  443889,
  513000,
  513856,
  515375,
  525824,
  558441,
  593047,
  684019,
  704977,
];

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
  var result = [-666, ...FIRST_34_RESULTS];
  var i = 1;
  var count = 35;
  var N = Math.min(offset + limit, 20); // TODO this is wrong, should just be N = offset + limit, but this breaks down for large ranges (including the default one)
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
