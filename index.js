'use strict'

/**
 * Represents a multi-dimensional vector.
 * @module Vector
 * @class
 * @param {(number|Array)} dimensions the value of n-th dimension, e.g.: x, y, ...
 * @returns {Vector}
 *
 * @example
 * new Vector(1, 2)
 * // means x=1, y=2, n=2
 */
module.exports = class Vector {
  constructor (...dimensions) {
    /** @private */
    this._dimensions = dimensions
    this.length = Vector.getLength(this)
  }

  /*
   * Returns distance from where you are to point 0
   *
   * Question: What do I want to see when vector is empty? I mean new Vector()
   */
  static getLength (vector) {
    let length = 0
    if (vector._dimensions.length === 0) return 0
    if (vector._dimensions.length === 1) return vector._dimensions[0]

    vector._dimensions.forEach((el) => {
      length += ((0 - el) * (0 - el))
    })
    return Math.sqrt(length)
  }

  /**
   * Adds vectors
   * @param {vector}
   * @returns {vector} The sum of two vectors
   */
  plus (vector) {
    let dthis = this._dimensions.length
    let dvector = vector._dimensions.length
    let length = dthis > dvector ? dthis : dvector
    let sum = Array(length).fill(0)
    sum.forEach((i, index) => {
      sum[index] = ~~this._dimensions[index] + ~~vector._dimensions[index]
    })
    return new Vector(sum)
  }

  /**
   * Subtracts vectors
   * @param {vector}
   * @returns {vector} The difference of two vectors
   */
  minus (vector) {
    let dthis = this._dimensions.length
    let dvector = vector._dimensions.length
    let length = dthis > dvector ? dthis : dvector
    let diff = Array(length).fill(0)
    diff.forEach((i, index) => {
      diff[index] = ~~this._dimensions[index] - ~~vector._dimensions[index]
    })
    return new Vector(diff)
  }

  /**
   * The times method scales a vector by a given amount
   * @param {number}
   * @returns {vector}
   */
  times (number) {
    const returnVector = []
    this._dimensions.forEach((el) => {
      returnVector.push(el * number)
    })
    return new Vector(returnVector)
  }
}
