---
sidebar_position: 4
title: CharacterClass
hide_title: true
sidebar-label: 'CharacterClass'
---

## CharacterClass

A character class is instanced for every [Character](../Userdata/Character) in the game.

A [Character](../Userdata/Character) is a temporary vessel controlled by a [Player](../Userdata/Player) or [Unit](../Userdata/Unit).

The class can receive events sent with [sm.event.sendToCharacter](../Static-Functions/sm.event#sendtocharacter).

### Instance Members

These members are set by the engine when instantiating the script class and are unique to each new instance of it.

#### character

`self.character` ([Character](../Userdata/Character)):  
The character that owns this script instance.

---

#### network

`self.network` ([Network](../Userdata/Network)):  
A network interface, for client/server instance communication.

---

### Client Callbacks

These callbacks are executed in [client context](/#client).

#### client_onProjectile

```lua
function CharacterClass.client_onProjectile(self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid)
end
```

Called when the [Character](../Userdata/Character) is hit by a projectile.

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

#### client_onMelee

```lua
function CharacterClass.client_onMelee(self, position, attacker, damage, power, direction, normal)
end
```

Called when the [Character](../Userdata/Character) is hit by a melee attack.

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

#### client_onCollision

```lua
function CharacterClass.client_onCollision(self, other, position, selfPointVelocity, otherPointVelocity, normal)
end
```

Called when the [Character](../Userdata/Character) collides with another object.

**Parameters:**
- `self` (table): The script class instance.
- `other` ([Shape](../Userdata/Shape)/[Character](../Userdata/Character)/[Harvestable](../Userdata/Harvestable)/[Lift](../Userdata/Lift)/nil): The other object. Nil if terrain.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit world position.
- `selfPointVelocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The character's velocity at the collision hit point.
- `otherPointVelocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The other object's velocity at the collision hit point.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The collision normal between the two objects.

---

#### client_onGraphicsLoaded

```lua
function CharacterClass.client_onGraphicsLoaded(self)
end
```

Called when graphics are loaded for the [Character](../Userdata/Character).

After this, graphics related functions can be called, like accessing animations.

**Parameters:**
- `self` (table): The script class instance.

---

#### client_onGraphicsUnloaded

```lua
function CharacterClass.client_onGraphicsUnloaded(self)
end
```

Called when graphics are unloaded for the [Character](../Userdata/Character).

After this, graphics related functions no longer have any effect or will fail.

**Parameters:**
- `self` (table): The script class instance.

---

#### client_onInteract

```lua
function CharacterClass.client_onInteract(self, character, state)
end
```

Called when a [Player](../Userdata/Player) is interacting with the [Character](../Userdata/Character) by pressing the `Use` input (default: `E`).

**Parameters:**
- `self` (table): The script class instance.
- `character` ([Character](../Userdata/Character)): The interacting player's character.
- `state` (boolean): The interaction state. Always `true` here.

---

#### client_canInteract

```lua
function CharacterClass.client_canInteract(self, character)
	return true -- or false
end
```

Called to check whether the [Character](../Userdata/Character) can be interacted with at this moment.

:::info note
This callback can also be used to change the interaction text shown to the player using [sm.gui.setInteractionText](../Static-Functions/sm.gui#setinteractiontext).
:::

**Parameters:**
- `self` (table): The script class instance.
- `character` ([Character](../Userdata/Character)): The character of the player that is looking at this character.

**Returns:**
- boolean: Whether the character can be interacted with or not (default: `true`).

---

#### client_onEvent

```lua
function CharacterClass.client_onEvent(self, event)
end
```

Called when the [Character](../Userdata/Character) receives an event from [Player:sendCharacterEvent](../Userdata/Player#sendcharacterevent) or [Unit:sendCharacterEvent](../Userdata/Unit#sendcharacterevent).

This is usually used for triggering animations on the character.

For more extensive events, see [sm.event.sendToCharacter](../Static-Functions/sm.event#sendtocharacter).

**Parameters:**
- `self` (table): The script class instance.
- `event` (string): The event name string given to `sendCharacterEvent`.

---
