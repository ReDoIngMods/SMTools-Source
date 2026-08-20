---
sidebar_position: 7
title: sm.util
hide_title: true
sidebar-label: 'sm.util'
---

## sm.util

The utility library offers various math-related helper functions.

### Functions

#### axesToQuat

```lua
local quat = sm.util.axesToQuat(xAxis, zAxis)
```

Constructs a quaternion from an X and Z axis.

**Parameters:**
- `xAxis` ([Vec3](/Shared-Features/Userdata/Vec3)): The X axis.
- `zAxis` ([Vec3](/Shared-Features/Userdata/Vec3)): The Z axis.

**Returns:**
- `quat` ([Quat](../Userdata/Quat)): The quaternion.

---

#### bezier2

```lua
local value = sm.util.bezier2(start, control, _end, t)
```

Performs quadratic bézier interpolation using a one dimensional [bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve).

**Parameters:**
- `start` (number): The start value.
- `control` (number): The control point.
- `_end` (number): The end value.
- `t` (number): The interpolation fraction.

**Returns:**
- `value` (number): The interpolated value.

---

#### bezier3

```lua
local value = sm.util.bezier3(start, control0, control1, _end, t)
```
Performs cubic bézier interpolation using a one dimensional [bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve).

**Parameters:**
- `start` (number): The start value.
- `control0` (number): The first control point.
- `control1` (number): The second control point.
- `_end` (number): The end value.
- `t` (number): The interpolation fraction.

**Returns:**
- `value` (number): The interpolated value.

---

#### clamp

```lua
local clamped = sm.util.clamp(value, min, max)
```

Restricts a value to a given range.  
This is equivalent to doing `local clamped = math.max(min, math.min(value, max))`.

**Parameters:**
- `value` (number): The value.
- `min` (number): The lower bound.
- `max` (number): The upper bound.

**Returns:**
- `value` (number): The clamped value.

---

#### easing

```lua
local value = sm.util.easing(easing, t)
```

Applies an [Easing Function](https://easings.net/) to a given input.

| Easing Function Names |
| -----------		|
| linear			|
| easeInQuad		|
| easeOutQuad		|
| easeInOutQuad		|
| easeInCubic		|
| easeOutCubic		|
| easeInOutCubic	|
| easeInQuart		|
| easeOutQuart		|
| easeInOutQuart	|
| easeInQuint		|
| easeOutQuint		|
| easeInOutQuint	|
| easeInSine		|
| easeOutSine		|
| easeInOutSine		|
| easeInCirc		|
| easeOutCirc		|
| easeInOutCirc		|
| easeInExpo		|
| easeOutExpo		|
| easeInOutExpo		|
| easeInElastic		|
| easeOutElastic	|
| easeInOutElastic	|
| easeInBack		|
| easeOutBack		|
| easeInOutBack		|
| easeInBounce		|
| easeOutBounce		|
| easeInOutBounce	|

**Parameters:**
- `easing` (string): The easing function name.
- `t` (number): The input value (usually between 0.0 and 1.0).

**Returns:**
- `value` (number): The eased value.

---

#### lerp

```lua
local interpolated = sm.util.lerp(from, to, t)
```

Performs [Linear Interpolation](https://en.wikipedia.org/wiki/Linear_interpolation) between two values. This is known as a lerp.

**Parameters:**
- `from` (number): The value to interpolate from.
- `to` (number): The value to interpolate to.
- `t` (number): The interpolation fraction.

**Returns:**
- `interpolated` (number): The interpolated value.

---

#### positiveModulo

```lua
local p = sm.util.positiveModulo(x, n)
```

Returns the positive remainder after division of `x` by `n`.

:::caution warning
This function is inaccurate and not protected against division-by-zero errors (`n = 0`).  
It is recommended to implement it yourself instead.
:::

**Parameters:**
- `x` (number): The number.
- `n` (number): The modulo value.

**Returns:**
- `p` (number): The positive remainder value.

---

#### smootherstep

```lua
local value = sm.util.smootherstep(edge0, edge1, x)
```

An improved version of the [smoothstep](#smoothstep) function which has zero 1st and 2nd order derivatives at `x = edge0` and `x = edge1`.

**Parameters:**
- `edge0` (number): The value of the lower edge of the [Hermite](https://en.wikipedia.org/wiki/Hermite_interpolation) function.
- `edge1` (number): The value of the upper edge of the [Hermite](https://en.wikipedia.org/wiki/Hermite_interpolation) function.
- `x` (number): The interpolation fraction.

**Returns:**
- `value` (number): The interpolated value.

---

#### smoothstep

```lua
local value = sm.util.smoothstep(edge0, edge1, x)
```

Performs smooth [Hermite Interpolation](https://en.wikipedia.org/wiki/Hermite_interpolation) between 0 and 1 when `edge0 < x < edge1`.  
This is useful in cases where a threshold function with a smooth transition is desired.

**Parameters:**
- `edge0` (number): The value of the lower edge of the [Hermite](https://en.wikipedia.org/wiki/Hermite_interpolation) function.
- `edge1` (number): The value of the upper edge of the [Hermite](https://en.wikipedia.org/wiki/Hermite_interpolation) function.
- `x` (number): The interpolation fraction.

**Returns:**
- `value` (number): The interpolated value.

---
