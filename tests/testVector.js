'use strict'

const assert = require('assert')
const Vector = require('../')

let vector = null

beforeEach(function () {
  vector = new Vector(1, 2)
})

describe('Vector class', function () {
  describe('Constructor', function () {
    it('should create a right object', function () {
      assert(vector instanceof Vector)
      assert.deepStrictEqual(vector.x, 1)
      assert.deepStrictEqual(vector.y, 2)
      assert.deepStrictEqual(vector.length, Math.sqrt(5))
    })
  })

  describe('plus', function () {
    it('should return a new vector that has the sum of the two vectors', function () {
      let testVector = new Vector(2, 3)
      let result = vector.plus(testVector)
      assert.deepStrictEqual(result instanceof Vector, true, 'should be an instance of Vector class')
      assert.deepStrictEqual(result.x, 3)
      assert.deepStrictEqual(result.y, 5)
    })
  })

  describe('minus', function () {
    it('should return a new vector that has the difference of the two vectors', function () {
      let testVector = new Vector(2, 3)
      let result = vector.minus(testVector)
      assert.deepStrictEqual(result instanceof Vector, true)
      assert.deepStrictEqual(result.x, -1)
      assert.deepStrictEqual(result.y, -1)
    })
  })

  describe('property length', function () {
    it('should return the distance of the point (3, 4) from the origin (0, 0)', function () {
      assert.deepStrictEqual(new Vector(3, 4).length, 5)
    })
    it('should return the distance of the point (0, 0) from the origin (0, 0)', function () {
      assert.deepStrictEqual(new Vector(0, 0).length, 0)
    })
  })
})
