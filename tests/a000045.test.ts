import { testSuite } from './utils';
import { a000045 } from '../src';

testSuite(a000045, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], {
  offset: 30,
  limit: 10,
  expected: [
    832040,
    1346269,
    2178309,
    3524578,
    5702887,
    9227465,
    14930352,
    24157817,
    39088169,
    63245986,
  ],
});
