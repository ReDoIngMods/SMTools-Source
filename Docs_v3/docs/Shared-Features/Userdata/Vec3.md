---
sidebar_position: 4
title: Vec3
hide_title: true
sidebar-label: 'Vec3'
---

## Vec3

**Associated namespace:** [sm.vec3](../Static-Functions/sm.vec3)

A userdata object representing a 3D vector.

### Member Values

#### x

`Vec3.x` (number): The X component value.

#### y

`Vec3.y` (number): The Y component value.

#### z

`Vec3.z` (number): The Z component value.

### Operators

| Operator    | Description |
| ----------- | ----------- |
| -[Vec3](Vec3) | Returns the negated vector. |
| [Vec3](Vec3) + [Vec3](Vec3) | Returns the component-wise sum of two vectors. |
| [Vec3](Vec3) - [Vec3](Vec3) | Returns the component-wise difference of two vectors. |
| [Vec3](Vec3) / [Vec3](Vec3) | Returns the component-wise quotient of two vectors. |
| [Vec3](Vec3) / number | Returns the component-wise quotient of a vector and a scalar. |
| [Vec3](Vec3) * [Vec3](Vec3) | Returns the component-wise product of two vectors. |
| [Vec3](Vec3) * number | Returns the component-wise product of a vector and a scalar. |
| [Vec3](Vec3) < [Vec3](Vec3) | Returns `(isNaN(a.x) or isNaN(b.x)) or (a.x < b.x) or (a.y < b.y) or (a.z < b.z)`. |
| [Vec3](Vec3) == [Vec3](Vec3) | Checks if two vectors are equal. |
| tostring([Vec3](Vec3)) | Converts the vector to a string representation. |

### Member Functions

#### cross

```lua
local cross = vec:cross(x)
```

Computes the [Cross Product](https://en.wikipedia.org/wiki/Cross_product) of two vectors.

**Parameters:**
- `vec` ([Vec3](Vec3)): The first vector.
- `x` ([Vec3](Vec3)): The second vector.

**Returns:**
- `cross` (number): The cross product.

---

#### dot

```lua
local dot = vec:dot(x)
```

Computes the [Dot Product](https://en.wikipedia.org/wiki/Dot_product) of two vectors.

**Parameters:**
- `vec` ([Vec3](Vec3)): The first vector.
- `x` ([Vec3](Vec3)): The second vector.

**Returns:**
- `dot` (number): The dot product.

---

#### length

```lua
local length = vec:length()
```

Computes the length of the vector.  
To get the squared length, using [length2](#length2) is faster than squaring the result of this function.

**Parameters:**
- `vec` ([Vec3](Vec3)): The vector.

**Returns:**
- `length` (number): The length.

---

#### length2

```lua
local length2 = vec:length2()
```

Computes the squared length of the vector.

**Parameters:**
- `vec` ([Vec3](Vec3)): The vector.

**Returns:**
- `length2` (number): The squared length.

---

#### max

```lua
local max = vec:max(x)
```

Computes the component-wise maximum between two vectors.

**Parameters:**
- `vec` ([Vec3](Vec3)): The first vector.
- `x` ([Vec3](Vec3)): The second vector.

**Returns:**
- `max` ([Vec3](Vec3)): The component-wise maximum vector.

---

#### min

```lua
local min = vec:min(x)
```

Computes the component-wise minimum between two vectors.

**Parameters:**
- `vec` ([Vec3](Vec3)): The first vector.
- `x` ([Vec3](Vec3)): The second vector.

**Returns:**
- `min` ([Vec3](Vec3)): The component-wise minimum vector.

---

#### normalize

```lua
local normalized = vec:normalize()
```

Normalizes the given vector, ie. converts it to a unit vector of length 1.

:::caution warning
The given vector must not be of length 0, else a script error is thrown.
:::

**Parameters:**
- `vec` ([Vec3](Vec3)): The vector.

**Returns:**
- `normalized` ([Vec3](Vec3)): The normalized vector.

---

#### rotate

```lua
local rotated = vec:rotate(angle, axis)
```

Rotates a vector around the given axis.

**Parameters:**
- `vec` ([Vec3](Vec3)): The vector to be rotated.
- `angle` (number): The angle, in radians.
- `axis` ([Vec3](Vec3)): The axis to rotate around.

**Returns:**
- `rotated` ([Vec3](Vec3)): The rotated vector.

---

#### rotateX

```lua
local rotated = vec:rotateX(angle)
```

Rotates a vector around the X axis.

**Parameters:**
- `vec` ([Vec3](Vec3)): The vector to be rotated.
- `angle` (number): The angle, in radians.

**Returns:**
- `rotated` ([Vec3](Vec3)): The rotated vector.

---

#### rotateY

```lua
local rotated = vec:rotateY(angle)
```

Rotates a vector around the Y axis.

**Parameters:**
- `vec` ([Vec3](Vec3)): The vector to be rotated.
- `angle` (number): The angle, in radians.

**Returns:**
- `rotated` ([Vec3](Vec3)): The rotated vector.

---

#### rotateZ

```lua
local rotated = vec:rotateZ(angle)
```

Rotates a vector around the Z axis.

**Parameters:**
- `vec` ([Vec3](Vec3)): The vector to be rotated.
- `angle` (number): The angle, in radians.

**Returns:**
- `rotated` ([Vec3](Vec3)): The rotated vector.

---

#### safeNormalize

```lua
local normalized = vec:normalize(fallback)
```

Normalizes the given vector, ie. converts it to a unit vector of length 1.  
If normalization fails (e.g. due to the vector being too small), `fallback` is returned.

**Parameters:**
- `vec` ([Vec3](Vec3)): The vector.
- `fallback` ([Vec3](Vec3)): The fallback vector in case normalization fails.

**Returns:**
- `normalized` ([Vec3](Vec3)): The normalized vector.

---
