---
sidebar_position: 40
title: sm.projectile
hide_title: true
sidebar-label: 'sm.projectile'
---

## sm.projectile

A projectile is a special physics object that is usually spawned at high velocity, such as a bullet from a gun.  
Projectiles are usually destroyed upon hitting another object or shortly thereafter.  
The impact may damage or destroy the hit object, or trigger some custom functionality through a [Shape](../Userdata/Shape)'s [server_onProjectile](../Script-Classes/ShapeClass#server_onprojectile) callback.

### Functions

#### customProjectileAttack

```lua
sm.projectile.customProjectileAttack(userdata, name_or_uuid, damage, position, velocity, source, fakePosThird, fakePosFirst, delay)
```
`Server-Only`  

Fires a projectile from a [Player](../Userdata/Player) or [Unit](../Userdata/Unit), with custom data attached that may be received by `onProjectile` script callbacks.

**Parameters:**
- `userdata` (table): A table of custom user data.
- `name_or_uuid` (string/[Uuid](/Shared-Features/Userdata/Uuid)): The projectile's name or UUID (name is deprecated, use UUID instead).
- `damage` (int): The damage that the projectile will inflict.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The fire position.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction and velocity.
- `source` ([Player](../Userdata/Player)/[Unit](../Userdata/Unit)): The source of the projectile.
- `fakePosThird` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The visual start position in third-person. Defaults to position.
- `fakePosFirst` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The visual start position in first-person. Defaults to position.
- `delay` (int, optional): The number of ticks to wait before firing. Defaults to 0.

---

#### getProjectileMass

```lua
local mass = sm.projectile.getProjectileMass(name_or_uuid)
```

Returns the mass of a projectile.

**Parameters:**
- `name_or_uuid` (string/[Uuid](/Shared-Features/Userdata/Uuid)): The projectile's name or UUID (name is deprecated, use UUID instead).

**Returns:**
- `mass` (number): The projectile's mass.

---

#### harvestableCustomProjectileAttack

```lua
sm.projectile.harvestableCustomProjectileAttack(userdata, name_or_uuid, damage, position, velocity, source, delay)
```
`Server-Only`  

Fires a projectile from a [Harvestable](../Userdata/Harvestable), with custom data attached that may be received by `onProjectile` script callbacks.

**Parameters:**
- `userdata` (table): A table of custom user data.
- `name_or_uuid` (string/[Uuid](/Shared-Features/Userdata/Uuid)): The projectile's name or UUID (name is deprecated, use UUID instead).
- `damage` (int): The damage that the projectile will inflict.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The fire position.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction and velocity.
- `source` ([Harvestable](../Userdata/Harvestable)): The source of the projectile.
- `delay` (int, optional): The number of ticks to wait before firing. Defaults to 0.

---

#### harvestableProjectileAttack

```lua
sm.projectile.harvestableProjectileAttack(name_or_uuid, damage, position, velocity, source, delay)
```

Fires a projectile from a [Harvestable](../Userdata/Harvestable).

**Parameters:**
- `name_or_uuid` (string/[Uuid](/Shared-Features/Userdata/Uuid)): The projectile's name or UUID (name is deprecated, use UUID instead).
- `damage` (int): The damage that the projectile will inflict.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The fire position.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction and velocity.
- `source` ([Harvestable](../Userdata/Harvestable)): The source of the projectile.
- `delay` (int, optional): The number of ticks to wait before firing. Defaults to 0.

---

#### playerFire

```lua
sm.projectile.playerFire(name_or_uuid, position, velocity, fakePosThird, fakePosFirst, delay)
```
`Client-Only`  

Fires a projectile from a [Player](../Userdata/Player).

The projectile is normally fired from the player's position, but due to the weapon being held off-center it may require a fake position for where the projectile appears to be fired from.

**Parameters:**
- `name_or_uuid` (string/[Uuid](/Shared-Features/Userdata/Uuid)): The projectile's name or UUID (name is deprecated, use UUID instead).
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The fire position.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction and velocity.
- `fakePosThird` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The visual start position in third-person. Defaults to position.
- `fakePosFirst` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The visual start position in first-person. Defaults to position.
- `delay` (int, optional): The number of ticks to wait before firing. Defaults to 0.

---

#### projectileAttack

```lua
sm.projectile.projectileAttack(name_or_uuid, damage, position, velocity, source, fakePosThird, fakePosFirst)
```

Fires a projectile from a [Player](../Userdata/Player) or [Unit](../Userdata/Unit).

**Parameters:**
- `name_or_uuid` (string/[Uuid](/Shared-Features/Userdata/Uuid)): The projectile's name or UUID (name is deprecated, use UUID instead).
- `damage` (int): The damage that the projectile will inflict.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The fire position.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction and velocity.
- `source` ([Player](../Userdata/Player)/[Unit](../Userdata/Unit)): The source of the projectile.
- `fakePosThird` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The visual start position in third-person. Defaults to position.
- `fakePosFirst` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The visual start position in first-person. Defaults to position.

---

#### shapeCustomProjectileAttack

```lua
sm.projectile.shapeCustomProjectileAttack(userdata, name_or_uuid, damage, position, velocity, source, delay)
```
`Server-Only`  

Fires a projectile from a [Shape](../Userdata/Shape), with custom data attached that may be received by `onProjectile` script callbacks.

**Parameters:**
- `userdata` (table): A table of custom user data.
- `name_or_uuid` (string/[Uuid](/Shared-Features/Userdata/Uuid)): The projectile's name or UUID (name is deprecated, use UUID instead).
- `damage` (int): The damage that the projectile will inflict.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The fire position.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction and velocity.
- `source` ([Shape](../Userdata/Shape)): The source of the projectile.
- `delay` (int, optional): The number of ticks to wait before firing. Defaults to 0.

---

#### shapeFire

```lua
sm.projectile.shapeFire(source, name_or_uuid, damage, position, velocity, delay)
```
`Server-Only`  

Fires a projectile from a [Shape](../Userdata/Shape).

**Parameters:**
- `source` ([Shape](../Userdata/Shape)): The source of the projectile.
- `name_or_uuid` (string/[Uuid](/Shared-Features/Userdata/Uuid)): The projectile's name or UUID (name is deprecated, use UUID instead).
- `damage` (int): The damage that the projectile will inflict.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The fire position.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction and velocity.
- `delay` (int, optional): The number of ticks to wait before firing. Defaults to 0.

---

#### shapeProjectileAttack

```lua
sm.projectile.shapeProjectileAttack(name_or_uuid, damage, position, velocity, source, delay)
```

Fires a projectile from a [Shape](../Userdata/Shape).

:::info note
The fire position is **local to the given shape**.
:::

**Parameters:**
- `name_or_uuid` (string/[Uuid](/Shared-Features/Userdata/Uuid)): The projectile's name or UUID (name is deprecated, use UUID instead).
- `damage` (int): The damage that the projectile will inflict.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The fire position.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction and velocity.
- `source` ([Shape](../Userdata/Shape)): The source of the projectile.
- `delay` (int, optional): The number of ticks to wait before firing. Defaults to 0.

---

#### solveBallisticArc

```lua
local low, high = sm.projectile.solveBallisticArc(firePos, targetPos, velocity, gravity)
```

Calculates the ballistic arc required for a projectile to hit a given position.  
There are two potential solutions to the problem, one with a low fire angle and one with a high fire angle.  
Solutions can be `nil` if none is found.

**Parameters:**
- `firePos` ([Vec3](/Shared-Features/Userdata/Vec3)): The projectile's fire position.
- `targetPos` ([Vec3](/Shared-Features/Userdata/Vec3)): The position the projectile should hit.
- `velocity` (number): The projectile's fire velocity.
- `gravity` (number): The gravity (positive down).

**Returns:**
- `low` ([Vec3](/Shared-Features/Userdata/Vec3)): The low angle solution.
- `high` ([Vec3](/Shared-Features/Userdata/Vec3)): The high angle solution.

---
