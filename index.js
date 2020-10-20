'use strict'

/**
 * Represents a 2D vector.
 *
 * Thanks to https://www.mathsisfun.com/algebra/vectors.html
 */
export default class Vector {
	#data = [];
	constructor (x, y) {
		this.#data[0] = x;
		this.#data[1] = y;
	}

	get x(){
		return this.#data[0];
	}

	get y(){
		return this.#data[1];
	}

	static add(a, b){
		return new Vector(a.x + b.x, a.y + b.y);
	}

	static sub(a, b){
		/* perhaps this will be a problem. We say, in English, subtract b from a or subtract a from b? We could say both actually ;^) */
		return new Vector(a.x - b.x, a.y - b.y);
	}

	sub(other){
		this.#data[0] -= other.x;
		this.#data[1] -= other.y;
		return this;
		this.#data.forEach((_, i) => this.#data[i] -= other[i]);
	}

	get mag(){
		return Math.sqrt(this.#data[0] * this.#data[0] + this.#data[1] * this.#data[1]);
	}

	toString(){
		let output = [];
		output.push('{');
		[...'xy'].forEach((l, i) => output.push(`${l}: ${this.#data[i]}, `));
		output.push('}');
		return output.join('');
	}

	mult(scalar){
		this.#data.forEach((_, i) => this.#data[i] *= scalar);
		return this;
	}
}
