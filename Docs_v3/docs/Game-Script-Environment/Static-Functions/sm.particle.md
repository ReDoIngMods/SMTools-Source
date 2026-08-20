---
sidebar_position: 34
title: sm.particle
hide_title: true
sidebar-label: 'sm.particle'
---

## sm.particle

The particle library allows for creating particle effects at a position.

If more control or complexity is required, please see the [Effect](../Userdata/Effect) library.

### Functions

#### createParticle

```lua
sm.particle.createParticle(name, position, rotation, color)
```
`Client-Only`  

Creates a particle effect at a given position and rotation.

:::info note
If a looping particle effect is started using this method, the only way to get rid of it is by reloading the save.
:::

**Parameters:**
- `name` (string): The particle name.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The position.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat), optional): The rotation. Defaults to identity.
- `color` ([Color](/Shared-Features/Userdata/Color), optional): The color. Defaults to white.

---
