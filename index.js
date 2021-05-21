"use strict";

/**
 * Represents a vector.
 *
 * Thanks to https://www.mathsisfun.com/algebra/vectors.html
 */
export default class Vector {
    #data = [];
    constructor(...dimensions) {
        dimensions.forEach((d) => {
            this.#data.push(d);
        });
    }
    //{ For convenience, I provide well-known 3 dimensions as x, y and z
    get x() {
        return this.#data[0];
    }
    get y() {
        return this.#data[1];
    }
    get z() {
        return this.#data[2];
    }
    //}
    static add(a, b) {
        return new Vector(a.x + b.x, a.y + b.y);
    }
    static sub(a, b) {
        /* perhaps this will be a problem. We say, in English, subtract b from a or subtract a from b? We could say both actually ;^) */
        return new Vector(a.x - b.x, a.y - b.y);
    }
    sub(other) {
        this.#data[0] -= other.x;
        this.#data[1] -= other.y;
        return this;
        this.#data.forEach((_, i) => (this.#data[i] -= other[i]));
    }
    get mag() {
        return Math.sqrt(
            this.#data[0] * this.#data[0] + this.#data[1] * this.#data[1]
        );
    }
    toString() {
        // Do I need it?
        return `V#[${this.#data}]`;
    }
    mult(scalar) {
        this.#data.forEach((_, i) => (this.#data[i] *= scalar));
        return this;
    }
    add(v) {
        // FIX IT
        for (let i = 0; i < v.nodims; i++) {
            this.#data[i] = this.#data[i] || 0;
            this.#data[i] += v.get(i);
        }
        return this;
    }
    //{ Get any dimension
    get(d) {
        return this.#data[d];
    }
    //}
    //{ Is it really needed? NumberOfDimensions
    get nodims() {
        return this.#data.length;
    }
    //}
}
