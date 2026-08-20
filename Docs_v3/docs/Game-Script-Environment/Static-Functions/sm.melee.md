---
sidebar_position: 31
title: sm.melee
hide_title: true
sidebar-label: 'sm.melee'
---

## sm.melee

A melee attack represents a physical close-range attack performed by a [Player](../Userdata/Player) or [Unit](../Userdata/Unit).  
An example of this is hitting something with the standard Sledgehammer tool that is available to the player by default.

### Functions

#### meleeAttack

```lua
sm.melee.meleeAttack(name, damage, origin, directionRange, source, delay, power)
```

Launches a melee attack.

**Parameters:**
- `name` (string/[Uuid](/Shared-Features/Userdata/Uuid)): The name or UUID of the attack. (`name` is deprecated, use uuid instead)
- `damage` (int): The damage the attack will inflict.
- `origin` ([Vec3](/Shared-Features/Userdata/Vec3)): The position of the attack.
- `directionRange` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction and range of the attack.
- `source` ([Player](../Userdata/Player)/[Unit](../Userdata/Unit)): The source of the attack.
- `delay` (int): The number of ticks before launching the attack.
- `power` (number): The knockback power.

---
