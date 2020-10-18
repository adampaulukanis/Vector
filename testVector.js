'use strict';

import Vector from './index.js';
import { strict as assert } from 'assert';

describe('Vector class', function () {
  describe('constructor', function () {
    it('new Vector() works', function () {
      assert(new Vector() instanceof Vector);
    });
  });
});
