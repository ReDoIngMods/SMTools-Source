---
sidebar_position: 7
title: HarvestableClass
hide_title: true
sidebar-label: 'HarvestableClass'
---

## HarvestableClass

A harvestable class is instanced for every [Harvestable](../Userdata/Harvestable) in the game.

A tree or a plant that can be harvested is a typical case of a harvestable.

The class can receive events sent with [sm.event.sendToHarvestable](../Static-Functions/sm.event#sendtoharvestable).

### Instance Members

These members are set by the engine when instantiating the script class and are unique to each new instance of it.

#### harvestable

`self.harvestable` ([Harvestable](../Userdata/Harvestable)):  
The harvestable that owns this script instance.

---

#### network

`self.network` ([Network](../Userdata/Network)):  
A network interface, for client/server instance communication.

---

#### storage

`self.storage` ([Storage](../Userdata/Storage)):  
A data storage interface, used to store persistent data into the save file.

---

#### data

`self.data` (nil/boolean/number/string/table):  
JSON data parsed from the `data` key in the harvestable's JSON file entry.

---

#### params

`self.params` (any):  
Parameter passed to [sm.harvestable.createHarvestable](../Static-Functions/sm.harvestable#createharvestable) or set in the terrain generation script.

---

### Class Constants

These constants may be set in the global script class table to configure certain parts of the class.  
Note that changing these on an already-existing script instance will **not** update the settings.

#### poseWeightCount

`HarvestableClass.poseWeightCount` (int):  
Sets the number of animation poses the harvestable's model is able to use.  
Value are integers 0-3 (defaults to 0, no poses).  
A value greater that 0 indicates that the renderable's mesh is set up to blend into `pose0`, `pose1`, `pose2`.

---

### Server Callbacks

These callbacks are executed in [server context](/#server).

#### server_onProjectile

```lua
function HarvestableClass.server_onProjectile(self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid)
end
```

Called when the [Harvestable](../Userdata/Harvestable) is hit by a [projectile](../Static-Functions/sm.projectile).

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

#### server_onCollision

```lua
function HarvestableClass.server_onCollision(self, other, position, selfPointVelocity, otherPointVelocity, normal)
end
```

Called when the [Harvestable](../Userdata/Harvestable) collides with another object.

**Parameters:**
- `self` (table): The script class instance.
- `other` ([Shape](../Userdata/Shape)/[Character](../Userdata/Character)/[Harvestable](../Userdata/Harvestable)/[Lift](../Userdata/Lift)/nil): The other object. Nil if terrain.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit world position.
- `selfPointVelocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The harvestable's velocity at the collision hit point.
- `otherPointVelocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The other object's velocity at the collision hit point.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The collision normal between the two objects.

---

#### server_onMelee

```lua
function HarvestableClass.server_onMelee(self, position, attacker, damage, power, direction, normal)
end
```

Called when the [Harvestable](../Userdata/Harvestable) is hit by a [melee attack](../Static-Functions/sm.melee).

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

#### server_canErase

```lua
function HarvestableClass.server_canErase(self)
	return true -- or false
end
```

Called to check if the [Harvestable](../Userdata/Harvestable) can be erased by players at this moment.  
This defaults to the `removable` JSON value in the harvestableset, which defaults to `false`.

**Parameters:**
- `self` (table): The script class instance.

**Returns:**
- boolean: Whether the harvestable can be erased or not.

---

#### server_onUnload

```lua
function HarvestableClass.server_onUnload(self)
end
```

Called when the [Harvestable](../Userdata/Harvestable) is unloaded from the world due to its surrounding terrain being unloaded.  
This happens when no [Player](../Userdata/Player)'s [Character](../Userdata/Character) is close enough to it.

**Parameters:**
- `self` (table): The script class instance.

---

#### server_onReceiveUpdate

```lua
function HarvestableClass.server_onReceiveUpdate(self)
end
```

Called in random intervals on all loaded [Harvestable](../Userdata/Harvestable)s to indicate some time has passed.  
This interval is random, and random across different harvestables.  
Multiple harvestables may receive an update at the same time and interval, but this is not guaranteed.  
After each update, a new random time is chosen, after which the next update will be triggered.

For performance reasons, it is recommended to use this instead of [server_onFixedUpdate](SharedServerCallbacks#server_onfixedupdate), if the update does not need to happen frequently.

[sm.game.getCurrentTick](../Static-Functions/sm.game#getcurrenttick) can be used to determine the time between updates.

**Parameters:**
- `self` (table): The script class instance.

---

#### server_onExplosion

```lua
function HarvestableClass.server_onExplosion(self, center, destructionLevel)
end
```

Called when the [Harvestable](../Userdata/Harvestable) is hit by an [explosion](../Static-Functions/sm.physics#explode).

**Parameters:**
- `self` (table): The script class instance.
- `center` ([Vec3](/Shared-Features/Userdata/Vec3)): The center position of the explosion.
- `destructionLevel` (int): The destruction level of the explosion. Corresponds to the `durability` rating of a shape.

---

#### server_onRemoved

```lua
function HarvestableClass.server_onRemoved(self, player)
end
```

Called when a [Player](../Userdata/Player) attempts to remove the [Harvestable](../Userdata/Harvestable).

:::info note
The harvestable script is responsible for the actual removal, using [Harvestable:destroy()](../Userdata/Harvestable#destroy).
:::

**Parameters:**
- `self` (table): The script class instance.
- `player` ([Player](../Userdata/Player)): The player that attempted to remove the harvestable.

---

### Client Callbacks

These callbacks are executed in [client context](/#client).

#### client_onProjectile

```lua
function HarvestableClass.client_onProjectile(self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid)
end
```

Called when the [Harvestable](../Userdata/Harvestable) is hit by a [projectile](../Static-Functions/sm.projectile).

:::info note
If the shooter is destroyed before the projectile hits, the shooter value will be nil.
:::

**Parameters:**
- `self` (table): The script class instance.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The projectile hit world position.
- `airTime` (number): The time, in seconds, that the projectile spent flying before the hit.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The impact velocity of the projectile.
- `projectileName` (string): The name of the projectile (legacy, use uuid instead).
- `shooter` ([Player](../Userdata/Player)/[Shape](../Userdata/Shape)/[Harvestable](../Userdata/Harvestable)/nil): The source/owner of the projectile.
- `damage` (int): The projectile's damage value.
- `customData` (any): Custom data defined with the `custom*` functions in [sm.projectile](../Static-Functions/sm.projectile).
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit point normal vector.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The UUID of the projectile.

---

#### client_onCollision

```lua
function HarvestableClass.client_onCollision(self, other, position, selfPointVelocity, otherPointVelocity, normal)
end
```

Called when the [Harvestable](../Userdata/Harvestable) collides with another object.

**Parameters:**
- `self` (table): The script class instance.
- `other` ([Shape](../Userdata/Shape)/[Character](../Userdata/Character)/[Harvestable](../Userdata/Harvestable)/[Lift](../Userdata/Lift)/nil): The other object. Nil if terrain.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit world position.
- `selfPointVelocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The harvestable's velocity at the collision hit point.
- `otherPointVelocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The other object's velocity at the collision hit point.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The collision normal between the two objects.

---

#### client_onMelee

```lua
function HarvestableClass.client_onMelee(self, position, attacker, damage, power, direction, normal)
end
```

Called when the [Harvestable](../Userdata/Harvestable) is hit by a [melee attack](../Static-Functions/sm.melee).

:::info note
If the attacker is destroyed before the hit lands, the attacker value will be nil.
:::

**Parameters:**
- `self` (table): The script class instance.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit world position.
- `attacker` ([Player](../Userdata/Player)/nil): The source/owner of the attack.
- `damage` (int): The attack's damage value.
- `power` (number): The physical impact strength of the hit.
- `direction` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction of the attack.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit point normal vector.

---

#### client_canErase

```lua
function HarvestableClass.client_canErase(self)
	return true -- or false
end
```

Called to check if the [Harvestable](../Userdata/Harvestable) can be erased by players at this moment.

**Parameters:**
- `self` (table): The script class instance.

**Returns:**
- boolean: Whether the harvestable can be erased or not.

---

#### client_canInteract

```lua
function HarvestableClass.client_canInteract( self, character )
	return true -- or false
end
```

Called to check whether the [Harvestable](../Userdata/Harvestable) can be interacted with at this moment.

:::info note
This callback is also responsible for updating the interaction text shown to the player using [sm.gui.setInteractionText()](../Static-Functions/sm.gui#setinteractiontext).
:::

**Parameters:**
- `self` (table): The script class instance.
- `character` ([Character](../Userdata/Character)): The character of the player that is looking at the shape.

**Returns:**
- boolean: Whether the harvestable can be interacted with or not.

---

#### client_onInteract

```lua
function HarvestableClass.client_onInteract(self, character, state)
end
```

Called when a [Player](../Userdata/Player) is interacting with the [Harvestable](../Userdata/Harvestable) by pressing the `Use` input (default: `E`).

**Parameters:**
- `self` (table): The script class instance.
- `character` ([Character](../Userdata/Character)): The interacting player's character.
- `state` (boolean): The interaction state (`true` = pressed, `false` = released).

---

#### client_onAction

```lua
function HarvestableClass.client_onAction(self, action, state)
end
```

Called when the [Harvestable](../Userdata/Harvestable) receives input from a [Player](../Userdata/Player) with the [Character](../Userdata/Character) locked to the [Harvestable](../Userdata/Harvestable).

Details about the `action` value are in [sm.interactable.actions](../Static-Functions/sm.interactable#actions).

**Parameters:**
- `self` (table): The script class instance.
- `action` (int): The action ID.
- `state` (boolean): The action state (`true` = begin, `false` = end).

---
