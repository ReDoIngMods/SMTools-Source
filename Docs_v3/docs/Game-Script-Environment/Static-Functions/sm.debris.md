---
sidebar_position: 17
title: sm.debris
hide_title: true
sidebar-label: 'sm.debris'
---

## sm.debris

Debris is a visual-only object that is itself affected by physics, but does not affect other objects it touches.  
It is intended to visualize an object visually breaking into pieces, which will disappear after some amount of time.

### Functions

#### createDebris

```lua
sm.debris.createDebris(uuid, position, rotation, velocity, angularVelocity, color, time)
```
`Client-Only`  

Create visual debris of a [Shape](../Userdata/Shape) from its [Uuid](/Shared-Features/Userdata/Uuid).  
The debris collides with and is affected by world objects, but does not have an impact on them.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The shape UUID.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The position.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat)): The rotation.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The linear velocity. Defaults to zero.
- `angularVelocity` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The angular velocity in radians per second around the axes (x,y,z). Defaults to zero.
- `color` ([Color](/Shared-Features/Userdata/Color)): The color. Defaults to the shape's default color.
- `time` (number): The time after which the debris disappears. Defaults to 10 seconds.

---
