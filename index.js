'use strict'

module.exports = class Vector {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.length = Math.sqrt(x * x + y * y) // Pythagorean theorem
  }

  plus (vector) {
    return new Vector(this.x + vector.x, this.y + vector.y)
  }

  minus (vector) {
    return new Vector(this.x - vector.x, this.y - vector.y)
  }
}
