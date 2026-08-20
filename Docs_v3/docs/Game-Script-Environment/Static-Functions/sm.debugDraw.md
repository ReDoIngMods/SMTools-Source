---
sidebar_position: 18
title: sm.debugDraw
hide_title: true
sidebar-label: 'sm.debugDraw'
---

## sm.debugDraw

The **Debug Draw** api can be used for drawing geometric primitives for debug purposes.

:::info note
By default, the functions in this library do nothing.  
However, their functionality can be restored by installing the [DebugDraw](https://github.com/crackx02/DebugDraw) DLL mod.
:::

### Functions

#### addArrow

```lua
sm.debugDraw.addArrow(name, startPos, endPos, color)
```

Creates a named debug draw arrow.  
The arrow's parameters can be updated by calling the function again with the same name.

**Parameters:**
- `name` (string): The debug arrow name.
- `startPos` ([Vec3](/Shared-Features/Userdata/Vec3)): The start position.
- `endPos` ([Vec3](/Shared-Features/Userdata/Vec3)): The end position. Defaults to `startPos` plus 1 on the Z axis.
- `color` ([Color](/Shared-Features/Userdata/Color)): The color. Defaults to white.

---

#### addSphere

```lua
sm.debugDraw.addSphere(name, center, radius, color)
```

Creates a named debug draw sphere.  
The sphere's parameters can be updated by calling the function again with the same name.

**Parameters:**
- `name` (string): The debug sphere name.
- `center` ([Vec3](/Shared-Features/Userdata/Vec3)): The center position.
- `radius` ([Vec3](/Shared-Features/Userdata/Vec3)): The radius. Defaults to 0.125.
- `color` ([Color](/Shared-Features/Userdata/Color)): The color. Defaults to white.

---

#### addTransform

```lua
sm.debugDraw.addTransform(name, origin, rotation, scale)
```

Creates a named debug draw transform.  
This consists of three debug [arrows](#addarrow) pointing in the X, Y and Z axis, colored red, green and blue respectively, rotated by the given rotation and scaled by the given scale.  
The transform's parameters can be updated by calling the function again with the same name.

**Parameters:**
- `name` (string): The debug transform name.
- `origin` ([Vec3](/Shared-Features/Userdata/Vec3)): The transform origin.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat)): The transform rotation.
- `scale` (number): The transform scale. Defaults to 1.0.

---

#### clear

```lua
sm.debugDraw.clear(name)
```

Removes all debug draws who's name begins with the given string.

**Parameters:**
- `name` (string): The name. Defaults to `""`, matching all debug draws.

---

#### removeArrow

```lua
sm.debugDraw.removeArrow(name)
```

Removes a debug draw arrow. 

**Parameters:**
- `name` (string): The name.

---

#### removeSphere

```lua
sm.debugDraw.removeSphere(name)
```

Removes a debug draw sphere. 

**Parameters:**
- `name` (string): The name.

---

#### removeTransform

```lua
sm.debugDraw.removeTransform(name)
```

Removes a debug draw transform. 

**Parameters:**
- `name` (string): The name.

---
