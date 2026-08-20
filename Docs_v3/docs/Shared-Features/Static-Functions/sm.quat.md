---
sidebar_position: 6
title: sm.quat
hide_title: true
sidebar-label: 'sm.quat'
---

## sm.quat

**Associated object type:** [Quat](../Userdata/Quat)

A quaternion is used to represent rotation as a [generalization of complex numbers](https://en.wikipedia.org/wiki/Quaternion).

To create one, use [sm.quat.new](#new).

:::caution warning
It is uncommon to modify individual X, Y, Z, W components directly.  
To create a new quaternion, consider using [sm.vec3.getRotation](sm.vec3#getrotation).
:::

### Functions

#### angleAxis

```lua
local quat = sm.quat.angleAxis(angle, axis)
```

Creates a new quaternion from an angle and an axis.

:::info note
The angle is counterclockwise.
:::

**Parameters:**
- `angle` (number): The angle, in radians.
- `axis` ([Vec3](/Shared-Features/Userdata/Vec3)): The axis to rotate around.

**Returns:**
- `quat` ([Quat](../Userdata/Quat)): The rotation quaternion.

---

#### fromEuler

```lua
local quat = sm.quat.fromEuler(euler)
```

Creates a new quaternion from euler angles.

**Parameters:**
- `euler` ([Vec3](/Shared-Features/Userdata/Vec3)): The euler angles vector.

**Returns:**
- `quat` ([Quat](../Userdata/Quat)): The rotation quaternion.

---

#### getAt

```lua
local at = sm.quat.getAt(quat)
```

Returns the quaternion's at (forward) vector.

This is equal to doing `quat * sm.vec3.new(0, 0, 1)`.

:::info note
Due to a bug in the API, the output of `getAt` and [getUp](#getup) are switched!
:::

**Parameters:**
- `quat` ([Quat](../Userdata/Quat)): The quaternion.

**Returns:**
- `at` ([Vec3](/Shared-Features/Userdata/Vec3)): The at (forward) vector.

---

#### getRight

```lua
local right = sm.quat.getRight(quat)
```

Returns the quaternion's right vector.

This is equal to doing `quat * sm.vec3.new(1, 0, 0)`.

**Parameters:**
- `quat` ([Quat](../Userdata/Quat)): The quaternion.

**Returns:**
- `right` ([Vec3](/Shared-Features/Userdata/Vec3)): The right vector.

---

#### getUp

```lua
local up = sm.quat.getUp(quat)
```

Returns the quaternion's up vector.

This is equal to doing `quat * sm.vec3.new(0, 1, 0)`.

:::info note
Due to a bug in the API, the output of `getUp` and [getAt](#getat) are switched!
:::

**Parameters:**
- `quat` ([Quat](../Userdata/Quat)): The quaternion.

**Returns:**
- `up` ([Vec3](/Shared-Features/Userdata/Vec3)): The up vector.

---

#### getW

```lua
local w = sm.quat.getW(quat)
```

Returns the W component of the given quaternion.  
This does the same as accessing [Quat.w](../Userdata/Quat#w), but can have better performance in certain cases.

**Parameters:**
- `quat` ([Quat](../Userdata/Quat)): The quaternion.

**Returns:**
- `w` (number): The W component value.

---

#### getX

```lua
local x = sm.quat.getX(quat)
```

Returns the X component of the given quaternion.  
This does the same as accessing [Quat.x](../Userdata/Quat#x), but can have better performance in certain cases.

**Parameters:**
- `quat` ([Quat](../Userdata/Quat)): The quaternion.

**Returns:**
- `x` (number): The X component value.

---

#### getY

```lua
local y = sm.quat.getY(quat)
```

Returns the Y component of the given quaternion.  
This does the same as accessing [Quat.y](../Userdata/Quat#y), but can have better performance in certain cases.

**Parameters:**
- `quat` ([Quat](../Userdata/Quat)): The quaternion.

**Returns:**
- `y` (number): The Y component value.

---

#### getZ

```lua
local z = sm.quat.getZ(quat)
```

Returns the Z component of the given quaternion.  
This does the same as accessing [Quat.z](../Userdata/Quat#z), but can have better performance in certain cases.

**Parameters:**
- `quat` ([Quat](../Userdata/Quat)): The quaternion.

**Returns:**
- `z` (number): The Z component value.

---

#### identity

```lua
local identity = sm.quat.identity()
```

Creates a new identity quaternion.

**Returns:**
- `identity` ([Quat](../Userdata/Quat)): The identity quaternion.

---

#### inverse

```lua
local inverse = sm.quat.inverse(quat)
```

Inverts the quaternion.

**Parameters:**
- `quat` ([Quat](../Userdata/Quat)): The quaternion.

**Returns:**
- `inverse` ([Quat](../Userdata/Quat)): The inverted quaternion.

---

#### lookRotation

```lua
local quat = sm.quat.lookRotation(at, up)
```

:::caution warning
This function is deprecated.
:::

Creates a new quaternion from direction vectors.

**Parameters:**
- `at` ([Vec3](/Shared-Features/Userdata/Vec3)): The at (forward) direction.
- `up` ([Vec3](/Shared-Features/Userdata/Vec3)): The up direction.

**Returns:**
- `quat` ([Quat](../Userdata/Quat)): The rotation quaternion.

---

#### new

```lua
local quat = sm.quat.new(x, y, z, w)
```

Creates a new quaternion.

**Parameters:**
- `x` (number): The X value.
- `y` (number): The Y value.
- `z` (number): The Z value.
- `w` (number): The W value.

**Returns:**
- `quat` ([Quat](../Userdata/Quat)): The rotation quaternion.

---

#### round90

```lua
local rounded = sm.quat.round90(quat)
```

Rounds the quaternion rotation into 90 degree steps.

**Parameters:**
- `quat` ([Quat](../Userdata/Quat)): The quaternion.

**Returns:**
- `rounded` ([Quat](../Userdata/Quat)): The rounded quaternion.

---

#### slerp

```lua
local interpolated = sm.quat.slerp(from, to, t)
```

Performs a [Spherical Linear Interpolation](https://en.wikipedia.org/wiki/Spherical_linear_interpolation) between two quaternions.

**Parameters:**
- `from` ([Quat](../Userdata/Quat)): The quaternion to interpolate from.
- `to` ([Quat](../Userdata/Quat)): The quaternion to interpolate to.
- `t` (number): The interpolation fraction.

**Returns:**
- `interpolated` ([Quat](../Userdata/Quat)): The interpolated quaternion.

---

#### setW

```lua
sm.quat.setW(quat, w)
```

Sets the W component of the given quaternion.  
This does the same as setting [Quat.w](../Userdata/Quat#w), but can have better performance in certain cases.

**Parameters:**
- `quat` ([Quat](../Userdata/Quat)): The quaternion.
- `w` (number): The W component value.

---

#### setX

```lua
sm.quat.setX(quat, x)
```

Sets the X component of the given quaternion.  
This does the same as setting [Quat.x](../Userdata/Quat#x), but can have better performance in certain cases.

**Parameters:**
- `quat` ([Quat](../Userdata/Quat)): The quaternion.
- `x` (number): The X component value.

---

#### setY

```lua
sm.quat.setY(quat, y)
```

Sets the Y component of the given quaternion.  
This does the same as setting [Quat.y](../Userdata/Quat#y), but can have better performance in certain cases.

**Parameters:**
- `quat` ([Quat](../Userdata/Quat)): The quaternion.
- `y` (number): The Y component value.

---

#### setZ

```lua
sm.quat.setZ(quat, z)
```

Sets the Z component of the given quaternion.  
This does the same as setting [Quat.z](../Userdata/Quat#z), but can have better performance in certain cases.

**Parameters:**
- `quat` ([Quat](../Userdata/Quat)): The quaternion.
- `z` (number): The Z component value.

---
