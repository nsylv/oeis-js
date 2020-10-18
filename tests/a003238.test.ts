import { testSuite } from './utils';
import { a003238 } from '../src';

testSuite(a003238, [1, 1, 2, 3, 5, 6, 10, 11, 16, 19], {
  offset: 38,
  limit: 10,
  expected: [881, 924, 1069, 1070, 1265, 1266, 1444, 1521, 1698, 1699],
});
