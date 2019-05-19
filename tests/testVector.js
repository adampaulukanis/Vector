// TODO: n-dimension
'use strict'

const assert = require('assert')
const Vector = require('../')

describe('Vector class, constructor', function () {
  describe('new Vector()', function () {
    const tests = new Map()
    tests.set(() => new Vector() instanceof Vector, true)
    tests.set(() => Array.isArray(new Vector()._dimensions), true)
    tests.set(() => new Vector()._dimensions.length, 0)
    tests.set(() => new Vector().length, Math.sqrt(0))

    for (const t of tests) {
      it(`${t[0].toString().slice(6)}`, function () {
        assert.deepStrictEqual(t[0](), t[1])
      })
    }
  })

  describe('Vector(1, 1)', function () {
    const tests = new Map()
    const vector = new Vector(1, 1)
    tests.set(() => vector._dimensions.length, 2)
    tests.set(() => vector.length, Math.sqrt(2))

    for (const t of tests) {
      it(`${t[0].toString().slice(6)} === ${t[1]}`, function () {
        assert.deepStrictEqual(t[0](), t[1])
      })
    }
  })

  describe('Vector(1, 1, 1)', function () {
    const tests = new Map()
    const vector = new Vector(1, 1, 1)
    tests.set(() => vector._dimensions.length, 3)
    tests.set(() => vector.length, Math.sqrt(3))

    for (const t of tests) {
      it(`${t[0].toString().slice(6)} === ${t[1]}`, function () {
        assert.deepStrictEqual(t[0](), t[1])
      })
    }
  })

  describe('length: should return the distance of the point from the origin (0)', function () {
    const tests = new Map()
    tests.set(() => (new Vector().length), 0)
    tests.set(() => (new Vector(0).length), 0)
    tests.set(() => (new Vector(0, 0).length), 0)
    tests.set(() => (new Vector(1).length), 1)
    tests.set(() => (new Vector(1, 1).length), Math.sqrt(2))
    tests.set(() => (new Vector(3, 4).length), Math.sqrt(25))
    tests.set(() => (new Vector(1, 1, 1).length), Math.sqrt(3))
    tests.set(() => (new Vector(1, 1, 1, 1).length), Math.sqrt(4))
    tests.set(() => (new Vector(1, 1, 1, 1, 1).length), Math.sqrt(5))
    tests.set(() => (new Vector(1, 1, 1, 1, 1, 1).length), Math.sqrt(6))
    tests.set(() => (new Vector(1, 1, 1, 1, 1, 1, 1).length), Math.sqrt(7))

    for (const t of tests) {
      it(`${t[0].toString().slice(6)} === ${t[1]}`, function () {
        assert.deepStrictEqual(t[0](), t[1])
      })
    }
  })

  describe('plus: returns a new vector that has the sum/difference of the two vectors', function () {
    const tests = new Map()
    tests.set(() => (new Vector(1)).plus(new Vector(5)), [6])
    tests.set(() => (new Vector(1, 1)).plus(new Vector(1, 1)), [2, 2])
    tests.set(() => (new Vector(1, 1, 1)).plus(new Vector(2, 3, 4)), [3, 4, 5])
    tests.set(() => (new Vector(1)).plus(new Vector(1, 1)), [2, 1])
    tests.set(() => (new Vector(0)).plus(new Vector(10)), [10])
    tests.set(() => (new Vector(1, 1, 1, 1)).plus(new Vector(1, 2, 3, 4, 5)), [2, 3, 4, 5, 5])
    tests.set(() => (new Vector()).plus(new Vector()), [])
    tests.set(() => (new Vector(1)).plus(new Vector()), [1])
    tests.set(() => (new Vector()).plus(new Vector(1)), [1])

    for (const t of tests) {
      it(`${t[0].toString().slice(6)} === [${t[1]}]`, function () {
        assert.deepStrictEqual(t[0](), t[1])
      })
    }
  })

  describe('minus: returns a new vector that has the difference of the two vectors', function () {
    const tests = new Map()
    tests.set(() => (new Vector(1)).minus(new Vector(5)), [-4])
    tests.set(() => (new Vector(1, 1)).minus(new Vector(1, 1)), [0, 0])
    tests.set(() => (new Vector(2, 3, 4)).minus(new Vector(1, 1, 1)), [1, 2, 3])
    tests.set(() => (new Vector(1, 0)).minus(new Vector(1)), [0, 0])
    tests.set(() => (new Vector(0)).minus(new Vector(10)), [-10])
    tests.set(() => (new Vector(1, 2, 3, 4, 5)).minus(new Vector(1, 1, 1, 1, 1)), [0, 1, 2, 3, 4])
    tests.set(() => (new Vector()).minus(new Vector()), [])
    tests.set(() => (new Vector(1)).minus(new Vector()), [1])
    tests.set(() => (new Vector()).minus(new Vector(1)), [-1])
    tests.set(() => (new Vector(3, 2)).minus(new Vector(-1, 3)), [4, -1])

    for (const t of tests) {
      it(`${t[0].toString().slice(6)} === [${t[1]}]`, function () {
        assert.deepStrictEqual(t[0](), t[1])
      })
    }
  })
})
