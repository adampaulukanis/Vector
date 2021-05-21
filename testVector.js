"use strict";

import Vector from "./index.js";
import { strict as assert } from "assert";

describe("Vector class", function () {
    describe("constructor", function () {
        it("new Vector() works", function () {
            assert(new Vector() instanceof Vector);
        });
        it("gets x", () => {
            assert(new Vector(11, 12).x === 11);
            assert(new Vector(11, 12).get(0) === 11);
        });
        it("gets y", () => {
            assert(new Vector(11, 12).y === 12);
            assert(new Vector(11, 12).get(1) === 12);
        });
        it("gets z", () => {
            assert(new Vector(11, 12, 13).z === 13);
            assert(new Vector(13, 19).z == undefined);
            assert(new Vector(11, 12).get(2) === undefined);
            assert(new Vector(11, 12, 13).get(2) === 13);
        });
        it("fails to set x directly", () => {
            assert.throws(() => {
                new Vector(1, 2).x = 3;
            }, /^TypeError: Cannot set property x of/);
        });
        it("fails to set y directly", () => {
            assert.throws(() => {
                new Vector(1, 2).y = 3;
            }, /^TypeError: Cannot set property y of/);
        });
    });

    describe("adding vectors", function () {
        it("static version", function () {
            const a = new Vector(8, 13);
            const b = new Vector(26, 7);
            const c = Vector.add(a, b);
            assert(c.x === 34 && c.y === 20);
        });
        it("add up two vectors", function () {
            const a = new Vector(8, 13);
            a.add(new Vector(3, 7, 98));
            assert(a.get(0) === 11);
            assert(a.get(1) === 20);
            assert(a.get(2) === 98);
        });
    });

    describe("subtracting vectors", function () {
        it("subtract two independent vectors", function () {
            const k = new Vector(4, 5);
            const v = new Vector(12, 2);
            const c = Vector.sub(v, k);
            assert(c.x === 8 && c.y === -3);
        });
        it("subtract one vector from another", function () {
            const k = new Vector(4, 5);
            const v = new Vector(12, 2);
            const c = v.sub(k);
            assert(c.x === 8 && c.y === -3);
        });
    });

    describe("magnitude of a vector", function () {
        it("what is the magnitude of the vector b = (6, 8)", function () {
            const b = new Vector(6, 8);
            assert(b.mag === Math.sqrt(6 * 6 + 8 * 8)); // = √100 = 10
        });
    });

    describe("multiplying a vector by a scalar", function () {
        it("multiply the vector m = (7, 3) by the scalar 3", function () {
            const m = new Vector(7, 3);
            m.mult(3);
            assert(m.x === 21);
            assert(m.y === 9);
        });
    });
});
