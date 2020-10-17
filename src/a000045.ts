import { DEFAULT_LIMIT } from './constants';

function fibonacci(n: number): number {
  if (n < 0) {
    throw Error('Cannot compute for value < 0');
  } else if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

/**
 * Fibonacci numbers: F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1
 *
 * http://oeis.org/A000045
 */
export function a000045(
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
  var result = Array(limit).fill(0);
  result[0] = fibonacci(offset);
  result[1] = fibonacci(offset + 1);
  for (var i = 2; i < limit; i++) {
    result[i] = result[i - 2] + result[i - 1];
  }
  return result;
}
