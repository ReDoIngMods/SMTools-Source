---
sidebar_position: 2
title: Quat
hide_title: true
sidebar-label: 'Quat'
---

## Quat

**Associated namespace:** [sm.quat](../Static-Functions/sm.quat)

A userdata object representing a [quaternion](https://en.wikipedia.org/wiki/Quaternion).

### Member Values

#### x

`Quat.x` (number): The X component value.

#### y

`Quat.y` (number): The Y component value.

#### z

`Quat.z` (number): The Z component value.

#### w

`Quat.w` (number): The W component value.

### Operators

| Operator    | Description |
| ----------- | ----------- |
| [Quat](Quat) * [Quat](Quat) | Returns the [Hamilton product](https://en.wikipedia.org/wiki/Quaternion#Hamilton_product) of two quaternions. |
| [Quat](Quat) * [Vec3](Vec3) | Applies rotation to a vector. |
| [Quat](Quat) == [Quat](Quat) | Checks if two quaternions are equal. |

:::info note
This information might be useful when multiplying a quaternion with another.

The wikipedia page linked above uses the `w, xi, yj, zk` representation, while the game uses `xi, yj, zk, w`.

`Quat1 &#42; Quat2` is equal to:

```lua
sm.quat.new(
    Quat1.w * Quat2.x + Quat1.x * Quat2.w + Quat1.y * Quat2.z - Quat1.z * Quat2.y,
    Quat1.w * Quat2.y - Quat1.x * Quat2.z + Quat1.y * Quat2.w + Quat1.z * Quat2.x,
    Quat1.w * Quat2.z + Quat1.x * Quat2.y - Quat1.y * Quat2.x + Quat1.z * Quat2.w,
    Quat1.w * Quat2.w - Quat1.x * Quat2.x - Quat1.y * Quat2.y - Quat1.z * Quat2.z
)
```

Also, `(Quat1 * Quat2) * Vec3` is equal to `Quat1 * (Quat2 * Vec3)`

:::
