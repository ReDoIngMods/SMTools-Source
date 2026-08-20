---
sidebar_position: 9
title: sm.vec3
hide_title: true
sidebar-label: 'sm.vec3'
---

## sm.vec3

**Associated object type:** [Vec3](/Shared-Features/Userdata/Vec3)

A 3D vector is used to represent positions, rotations or directions in 3D space, using X, Y and Z coordinates.

To create one, use [sm.vec3.new](#new).

### Functions

#### bezier2

```lua
local value = sm.vec3.bezier2(start, control, _end, t)
```

Performs quadratic bézier interpolation using a three dimensional [bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve).

**Parameters:**
- `start` ([Vec3](/Shared-Features/Userdata/Vec3)): The start value.
- `control` ([Vec3](/Shared-Features/Userdata/Vec3)): The control point.
- `_end` ([Vec3](/Shared-Features/Userdata/Vec3)): The end value.
- `t` (number): The interpolation fraction.

**Returns:**
- `value` ([Vec3](/Shared-Features/Userdata/Vec3)): The interpolated vector.

---

#### bezier3

```lua
local value = sm.vec3.bezier3(start, control0, control1, _end, t)
```

Performs cubic bézier interpolation using a three dimensional [bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve).

**Parameters:**
- `start` ([Vec3](/Shared-Features/Userdata/Vec3)): The start value.
- `control0` ([Vec3](/Shared-Features/Userdata/Vec3)): The first control point.
- `control1` ([Vec3](/Shared-Features/Userdata/Vec3)): The second control point.
- `_end` ([Vec3](/Shared-Features/Userdata/Vec3)): The end value.
- `t` (number): The interpolation fraction.

**Returns:**
- `value` ([Vec3](/Shared-Features/Userdata/Vec3)): The interpolated vector.

---

#### closestAxis

```lua
local axis = sm.vec3.closestAxis(vec)
```

Finds the closest axis-aligned vector from the given vector.

**Parameters:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector.

**Returns:**
- `axis` ([Vec3](/Shared-Features/Userdata/Vec3)): The closest axis-aligned vector.

---

#### cross

```lua
local cross = sm.vec3.cross(a, b)
```

Computes the [Cross Product](https://en.wikipedia.org/wiki/Cross_product) of two vectors.  
This does the same as calling [Vec3:cross()](/Shared-Features/Userdata/Vec3#cross), but can have better performance in certain cases.

**Parameters:**
- `a` ([Vec3](/Shared-Features/Userdata/Vec3)): The first vector.
- `b` ([Vec3](/Shared-Features/Userdata/Vec3)): The second vector.

**Returns:**
- `cross` (number): The cross product.

---

#### dot

```lua
local dot = sm.vec3.dot(a, b)
```

Computes the [Dot Product](https://en.wikipedia.org/wiki/Dot_product) of two vectors.  
This does the same as calling [Vec3:dot()](/Shared-Features/Userdata/Vec3#dot), but can have better performance in certain cases.

**Parameters:**
- `a` ([Vec3](/Shared-Features/Userdata/Vec3)): The first vector.
- `b` ([Vec3](/Shared-Features/Userdata/Vec3)): The second vector.

**Returns:**
- `dot` (number): The dot product.

---

#### getRotation

```lua
local quat = sm.vec3.getRotation(from, to)
```

Returns a [Quaternion](../Userdata/Quat) representing the rotation from one vector to another.

The quaternion can then be multiplied with any vector to rotate it in the same fashion.

```lua title="Example"
v1 = sm.vec3.new(1,0,0)
v2 = sm.vec3.new(0,1,0)

trans = sm.vec3.getRotation(v1, v2)
-- `trans` now rotates a vector 90 degrees

print(trans * v2)
-- { x = -1, y = 0, z = 0 }
```

**Parameters:**
- `from` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector to rotate from.
- `to` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector to rotate to.

**Returns:**
- `quat` ([Quat](../Userdata/Quat)): The quaternion representing the rotation.

---

#### getX

```lua
local x = sm.vec3.getX(vec)
```

Returns the X component of the given vector.  
This does the same as accessing [Vec3.x](/Shared-Features/Userdata/Vec3#x), but can have better performance in certain cases.

**Parameters:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector.

**Returns:**
- `x` (number): The X component value.

---

#### getY

```lua
local y = sm.vec3.getY(vec)
```

Returns the Y component of the given vector.  
This does the same as accessing [Vec3.y](/Shared-Features/Userdata/Vec3#y), but can have better performance in certain cases.

**Parameters:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector.

**Returns:**
- `y` (number): The Y component value.

---

#### getZ

```lua
local z = sm.vec3.getZ(vec)
```

Returns the Z component of the given vector.  
This does the same as accessing [Vec3.z](/Shared-Features/Userdata/Vec3#z), but can have better performance in certain cases.

**Parameters:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector.

**Returns:**
- `z` (number): The Z component value.

---

#### lerp

```lua
local vec = sm.vec3.lerp(from, to, t)
```

Performs a [Linear Interpolation](https://en.wikipedia.org/wiki/Linear_interpolation) between two vectors.

**Parameters:**
- `from` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector to interpolate from.
- `to` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector to interpolate to.
- `t` (number): The interpolation fraction.

**Returns:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The interpolated vector.

---

#### length

```lua
local length = sm.vec3.length(vec)
```

Computes the length of the vector.  
To get the squared length, using [length2](#length2) is faster than squaring the result of this function.  
This does the same as calling [Vec3:length()](/Shared-Features/Userdata/Vec3#length), but can have better performance in certain cases.

**Parameters:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector.

**Returns:**
- `length` (number): The length.

---

#### length2

```lua
local length2 = sm.vec3.length2(vec)
```

Computes the squared length of the vector.  
This does the same as calling [Vec3:length2()](/Shared-Features/Userdata/Vec3#length2), but can have better performance in certain cases.

**Parameters:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector.

**Returns:**
- `length2` (number): The squared length.

---

#### max

```lua
local max = sm.vec3.max(a, b)
```

Computes the component-wise maximum between two vectors.  
This does the same as calling [Vec3:max()](/Shared-Features/Userdata/Vec3#max), but can have better performance in certain cases.

**Parameters:**
- `a` ([Vec3](/Shared-Features/Userdata/Vec3)): The first vector.
- `b` ([Vec3](/Shared-Features/Userdata/Vec3)): The second vector.

**Returns:**
- `max` ([Vec3](/Shared-Features/Userdata/Vec3)): The component-wise maximum vector.

---

#### min

```lua
local min = sm.vec3.min(a, b)
```

Computes the component-wise minimum between two vectors.  
This does the same as calling [Vec3:min()](/Shared-Features/Userdata/Vec3#min), but can have better performance in certain cases.

**Parameters:**
- `a` ([Vec3](/Shared-Features/Userdata/Vec3)): The first vector.
- `b` ([Vec3](/Shared-Features/Userdata/Vec3)): The second vector.

**Returns:**
- `min` ([Vec3](/Shared-Features/Userdata/Vec3)): The component-wise minimum vector.

---

#### new

```lua
local vec = sm.vec3.new(x, y, z)
```

Creates a new vector.

**Parameters:**
- `x` (number): The X component value.
- `y` (number): The Y component value.
- `z` (number): The Z component value.

**Returns:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector.

---

#### normalize

```lua
local normalized = sm.vec3.normalize(vec)
```

Normalizes the given vector, ie. converts it to a unit vector of length 1.  
This does the same as calling [Vec3:normalize()](/Shared-Features/Userdata/Vec3#normalize), but can have better performance in certain cases.

:::caution warning
The given vector must not be of length 0, else a script error is thrown.
:::

**Parameters:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector.

**Returns:**
- `normalized` ([Vec3](/Shared-Features/Userdata/Vec3)): The normalized vector.

---

#### one

```lua
local vec = sm.vec3.one()
```

Creates a new vector with `1.0` in X, Y and Z.

**Returns:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector.

---

#### rotate

```lua
local rotated = sm.vec3.rotate(vec, angle, axis)
```

Rotates a vector around the given axis.  
This does the same as calling [Vec3:rotate()](/Shared-Features/Userdata/Vec3#rotate), but can have better performance in certain cases.

**Parameters:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector to be rotated.
- `angle` (number): The angle, in radians.
- `axis` ([Vec3](/Shared-Features/Userdata/Vec3)): The axis to rotate around.

**Returns:**
- `rotated` ([Vec3](/Shared-Features/Userdata/Vec3)): The rotated vector.

---

#### rotateX

```lua
local rotated = sm.vec3.rotateX(vec, angle)
```

Rotates a vector around the X axis.  
This does the same as calling [Vec3:rotateX()](/Shared-Features/Userdata/Vec3#rotatex), but can have better performance in certain cases.

**Parameters:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector to be rotated.
- `angle` (number): The angle, in radians.

**Returns:**
- `rotated` ([Vec3](/Shared-Features/Userdata/Vec3)): The rotated vector.

---

#### rotateY

```lua
local rotated = sm.vec3.rotateY(vec, angle)
```

Rotates a vector around the Y axis.  
This does the same as calling [Vec3:rotateY()](/Shared-Features/Userdata/Vec3#rotatey), but can have better performance in certain cases.

**Parameters:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector to be rotated.
- `angle` (number): The angle, in radians.

**Returns:**
- `rotated` ([Vec3](/Shared-Features/Userdata/Vec3)): The rotated vector.

---

#### rotateZ

```lua
local rotated = sm.vec3.rotateZ(vec, angle)
```

Rotates a vector around the Z axis.  
This does the same as calling [Vec3:rotateZ()](/Shared-Features/Userdata/Vec3#rotatez), but can have better performance in certain cases.

**Parameters:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector to be rotated.
- `angle` (number): The angle, in radians.

**Returns:**
- `rotated` ([Vec3](/Shared-Features/Userdata/Vec3)): The rotated vector.

---

#### safeNormalize

```lua
local normalized = sm.vec3.normalize(vec, fallback)
```

Normalizes the given vector, ie. converts it to a unit vector of length 1.  
If normalization fails (e.g. due to the vector being too small), `fallback` is returned.
This does the same as calling [Vec3:safeNormalize()](/Shared-Features/Userdata/Vec3#normalize), but can have better performance in certain cases.

**Parameters:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector.
- `fallback` ([Vec3](/Shared-Features/Userdata/Vec3)): The fallback vector in case normalization fails.

**Returns:**
- `normalized` ([Vec3](/Shared-Features/Userdata/Vec3)): The normalized vector.

---

#### setX

```lua
sm.vec3.setX(vec, x)
```

Sets the X component of the given vector.  
This does the same as setting [Vec3.x](/Shared-Features/Userdata/Vec3#x), but can have better performance in certain cases.

**Parameters:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector.
- `x` (number): The X component value.

---

#### setY

```lua
sm.vec3.setY(vec, y)
```

Sets the Y component of the given vector.  
This does the same as setting [Vec3.y](/Shared-Features/Userdata/Vec3#y), but can have better performance in certain cases.

**Parameters:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector.
- `y` (number): The Y component value.

---

#### setZ

```lua
sm.vec3.setZ(vec, z)
```

Sets the Z component of the given vector.  
This does the same as setting [Vec3.z](/Shared-Features/Userdata/Vec3#z), but can have better performance in certain cases.

**Parameters:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector.
- `z` (number): The Z component value.

---

#### zero

```lua
local vec = sm.vec3.zero()
```

Creates a new vector with 0 in X, Y and Z.

**Returns:**
- `vec` ([Vec3](/Shared-Features/Userdata/Vec3)): The vector.

---
