---
sidebar_position: 5
title: UnitClass
hide_title: true
sidebar-label: 'UnitClass'
---

## UnitClass

A unit class is instanced for every [Unit](../Userdata/Unit) in the game.

A [Unit](../Userdata/Unit) represents an AI controlling a [Character](../Userdata/Character).

The unit script exists only on the [server](/#server).

The class can receive events sent with [sm.event.sendToUnit](../Static-Functions/sm.event#sendtounit).

### Instance Members

These members are set by the engine when instantiating the script class and are unique to each new instance of it.

#### unit

`self.unit` ([Unit](../Userdata/Unit)):  
The unit that owns this script instance.

---

#### storage

`self.storage` ([Storage](../Userdata/Storage)):  
A data storage interface, used to store persistent data into the save file.

---

#### data

`self.data` (nil/boolean/number/string/table):  
JSON data parsed from the `data` key in the unit character's characterset entry.

---

#### params

`self.params` (any):  
Parameter passed to [sm.unit.createUnit](../Static-Functions/sm.unit#createunit).

---

### Class Constants

These constants may be set in the global script class table to configure certain parts of the class.  
Note that changing these on an already-existing script instance will **not** update the settings.

#### isSaveObject

`UnitClass.isSaveObject` (boolean):  
Sets whether this [Unit](../Userdata/Unit) is saved to the save file database or not (default: `true`).  
If enabled, the [Unit](../Userdata/Unit) is recreated when loading a world.  
If disabled, the [Unit](../Userdata/Unit) is temporary and must be explicitly recreated upon a world reload.

:::info note
If disabled, [self.storage](#storage) cannot be used.
:::

---

### Server Callbacks

These callbacks are executed in [server context](/#server).

#### server_onProjectile

```lua
function UnitClass.server_onProjectile(self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid)
end
```

Called when the [Unit](../Userdata/Unit)'s [Character](../Userdata/Character) is hit by a projectile.

:::info note
If the shooter is destroyed before the projectile hits, the shooter value will be nil.
:::

**Parameters:**
- `self` (table): The script class instance.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The projectile hit world position.
- `airTime` (number): The time, in seconds, that the projectile spent flying before the hit.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The impact velocity of the projectile.
- `projectileName` (string): The name of the projectile (legacy, use uuid instead).
- `shooter` ([Player](../Userdata/Player)/[Unit](../Userdata/Unit)/[Shape](../Userdata/Shape)/[Harvestable](../Userdata/Harvestable)/nil): The source/owner of the projectile.
- `damage` (int): The projectile's damage value.
- `customData` (any): Custom data defined with the `custom*` functions in [sm.projectile](../Static-Functions/sm.projectile).
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit point normal vector.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The UUID of the projectile.

---

#### server_onExplosion

```lua
function UnitClass.server_onExplosion(self, center, destructionLevel)
end
```

Called when the [Unit](../Userdata/Unit)'s [Character](../Userdata/Character) is hit by an explosion.

**Parameters:**
- `self` (table): The script class instance.
- `center` ([Vec3](/Shared-Features/Userdata/Vec3)): The center position of the explosion.
- `destructionLevel` (int): The destruction level of the explosion. Corresponds to the `durability` rating of a shape.

---

#### server_onMelee

```lua
function UnitClass.server_onMelee(self, position, attacker, damage, power, direction, normal)
end
```

Called when the [Unit](../Userdata/Unit)'s [Character](../Userdata/Character) is hit by a melee attack.

:::info note
If the attacker is destroyed before the hit lands, the attacker value will be nil.
:::

**Parameters:**
- `self` (table): The script class instance.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit world position.
- `attacker` ([Player](../Userdata/Player)/[Unit](../Userdata/Unit)/nil): The source/owner of the attack.
- `damage` (int): The attack's damage value.
- `power` (number): The physical impact strength of the hit.
- `direction` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction of the attack.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit point normal vector.

---

#### server_onCollision

```lua
function UnitClass.server_onCollision(self, other, position, selfPointVelocity, otherPointVelocity, normal)
end
```

Called when the [Unit](../Userdata/Unit)'s [Character](../Userdata/Character) collides with another object.

**Parameters:**
- `self` (table): The script class instance.
- `other` ([Shape](../Userdata/Shape)/[Character](../Userdata/Character)/[Harvestable](../Userdata/Harvestable)/[Lift](../Userdata/Lift)/nil): The other object. Nil if terrain.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit world position.
- `selfPointVelocity` ([Vec3](/Shared-Features/Userdata/Vec3)): This unit's character's velocity at the collision hit point.
- `otherPointVelocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The other object's velocity at the collision hit point.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The collision normal between the two objects.

---

#### server_onCollisionCrush

```lua
function UnitClass.server_onCollisionCrush(self)
end
```

Called when the [Unit](../Userdata/Unit)'s [Character](../Userdata/Character) is being crushed.  
This happens, for example, when the character is being squashed into the terrain by a heavy creation falling onto it.

**Parameters:**
- `self` (table): The script class instance.

---

#### server_onUnitUpdate

```lua
function UnitClass.server_onUnitUpdate(self, timeStep)
end
```

Called on every unit update - 8 times per second.  
A unit update is intended to run heavy logic such as AI decisions and pathfinding, rather than using [server_onFixedUpdate](SharedServerCallbacks#server_onfixedupdate).

**Parameters:**
- `self` (table): The script class instance.
- `timeStep` (number): The time step between updates, in seconds. (1.0 / 8 = 0.125)

---

#### server_onCharacterChangedColor

```lua
function UnitClass.server_onCharacterChangedColor(self, color)
end
```

Called when the [Unit](../Userdata/Unit)'s [Character](../Userdata/Character)'s color changes.  
The color can be changed by painting, set using [Character:setColor](../Userdata/Character#setcolor) or by modifying [Character.color](../Userdata/Character#color).

**Parameters:**
- `self` (table): The script class instance.
- `color` ([Color](/Shared-Features/Userdata/Color)): The new color of the unit's character.

---
