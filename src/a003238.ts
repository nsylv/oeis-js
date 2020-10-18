import { DEFAULT_LIMIT } from './constants';

/**
 * Number of rooted trees with n vertices in which vertices at the same level have the same degree
 *
 * http://oeis.org/A003238
 */
export function a003238(
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
  var result = new Array(offset + limit + 1).fill(1);
  for (var i = 3; i < offset + limit + 1; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j === 1) result[i] += result[j];
    }
  }
  return result.slice(offset + 1, offset + limit + 1);
}
