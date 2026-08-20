---
sidebar_position: 6
title: PlayerClass
hide_title: true
sidebar-label: 'PlayerClass'
---

## PlayerClass

A player class is instanced for every active [Player](../Userdata/Player) in the game.

A player represents a user controlling a [Character](../Userdata/Character).

The player script handles actions made by the user.

The class can receive events sent with [sm.event.sendToPlayer](../Static-Functions/sm.event#sendtoplayer).

### Instance Members

These members are set by the engine when instantiating the script class and are unique to each new instance of it.

#### player

`self.player` ([Player](../Userdata/Player)):  
The player that owns this script instance.

---

#### network

`self.network` ([Network](../Userdata/Network)):  
A network interface, for client/server instance communication.

---

#### storage

`self.storage` ([Storage](../Userdata/Storage)):  
A data storage interface, used to store persistent data into the save file.

---

### Server Callbacks

These callbacks are executed in [server context](/#server).

#### server_onProjectile

```lua
function PlayerClass.server_onProjectile(self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid)
end
```

Called when the [Player](../Userdata/Player)'s [Character](../Userdata/Character) is hit by a projectile.

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
function PlayerClass.server_onExplosion(self, center, destructionLevel)
end
```

Called when the [Player](../Userdata/Player)'s [Character](../Userdata/Character) is hit by an explosion.

**Parameters:**
- `self` (table): The script class instance.
- `center` ([Vec3](/Shared-Features/Userdata/Vec3)): The center position of the explosion.
- `destructionLevel` (int): The destruction level of the explosion. Corresponds to the `durability` rating of a shape.

---

#### server_onMelee

```lua
function PlayerClass.server_onMelee(self, position, attacker, damage, power, direction, normal)
end
```

Called when the [Player](../Userdata/Player)'s [Character](../Userdata/Character) is hit by a melee attack.

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
function PlayerClass.server_onCollision(self, other, position, selfPointVelocity, otherPointVelocity, normal)
end
```

Called when the [Player](../Userdata/Player)'s [Character](../Userdata/Character) collides with another object.

**Parameters:**
- `self` (table): The script class instance.
- `other` ([Shape](../Userdata/Shape)/[Character](../Userdata/Character)/[Harvestable](../Userdata/Harvestable)/[Lift](../Userdata/Lift)/nil): The other object. Nil if terrain.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit world position.
- `selfPointVelocity` ([Vec3](/Shared-Features/Userdata/Vec3)): This player's character's velocity at the collision hit point.
- `otherPointVelocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The other object's velocity at the collision hit point.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The collision normal between the two objects.

---

#### server_onCollisionCrush

```lua
function PlayerClass.server_onCollisionCrush(self)
end
```

Called when the [Player](../Userdata/Player)'s [Character](../Userdata/Character) is being crushed.

**Parameters:**
- `self` (table): The script class instance.

---

#### server_onShapeRemoved

```lua
function PlayerClass.server_onShapeRemoved(self, items)
	-- items = { { uuid = uuid, amount = integer, type = string }, .. }
end
```

Called when the [Player](../Userdata/Player) removed a [Shape](../Userdata/Shape) from the [World](../Userdata/World).  
Receives a table of tables listing the items removed by this action.

:::info note
This only works for joints if the joint's parent block/part is removed.  
If a joint is removed directly, the callback is not called.
:::

**Parameters:**
- `self` (table): The script class instance.
- `items` (table): The table containing the removed items. See format below.

**Table Format:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item's shape UUID.
- `amount` (int): The amount of the item.
- `type` (string): The item's type name. Can be `block`, `part`, `slant` or `joint`.

---

#### server_onInventoryChanges

```lua
function PlayerClass.server_onInventoryChanges(self, inventory, changes)
	-- changes = { { uuid = Uuid, difference = integer, tool = Tool }, .. }
end
```

Called when the [Player](../Userdata/Player) has changes in the inventory [Container](../Userdata/Container).  
Receives a table listing the changes.

**Parameters:**
- `self` (table): The script class instance.
- `inventory` ([Container](../Userdata/Container)): The inventory container.
- `changes` (table): The table of changes. See format below.

**Table Format:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.
- `difference` (int): The difference in the item amount. Positive = items added, negative = items removed.
- `tool` ([Tool](../Userdata/Tool)/nil): If the item is a tool, this is the tool, otherwise it is nil.

---

### Client Callbacks

These callbacks are executed in [client context](/#client).

#### client_onInteract

```lua
function PlayerClass.client_onInteract(self, character, state)
end
```

Called when the player presses or releases the `Use` input (default: `E`).

**Parameters:**
- `self` (table): The script class instance.
- `character` ([Character](../Userdata/Character)): The player's character.
- `state` (boolean): The interaction state (`true` = pressed, `false` = released).

---

#### client_onCancel

```lua
function PlayerClass.client_onCancel(self)
end
```

Called when the player presses the `Canel` input (default `ESC`).

**Parameters:**
- `self` (table): The script class instance.

---

#### client_onReload

```lua
function PlayerClass.client_onReload(self)
end
```

Called when the player presses the `Reload` input (default `R`).

**Parameters:**
- `self` (table): The script class instance.

---
