# Vector

Simple JavaScript class representing a vector in two-dimensional space.

It has one parameter: *number* representing dimensions, two methods: *plus* and *minus* (which take another vector as a parameter and return a new vector that has the sum or difference of the two vectors) and a property *length* that computes the distance of the point (x, y) from the origin (0, 0).

If you provide just one number, e.g.:

```javascript
let v1 = new Vector(11)
// OR
let v1 = new Vector([11])
```

Than the vector is suppose to represent 1-dimensional space. Providing more arguments (*n*) will mean n-dimensional space.
