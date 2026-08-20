---
sidebar_position: 1
title: sm.ai
hide_title: true
sidebar-label: 'sm.ai'
---

## sm.ai

Utility functions for NPC [Unit](../Userdata/Unit) AI behavior.  
Note that these are **not** restricted to [UnitClass](../Script-Classes/UnitClass) scripts and can be used anywhere.  
Functions which do not require a [Unit](../Userdata/Unit) object are usable in [client](/#client) context as well.

### Functions

#### directPathAvailable

```lua
local isReachable = sm.ai.directPathAvailable(unit, position, maxDistance)
```

Checks if the given [Unit](../Userdata/Unit) can reach the target position by moving straight.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The target position.
- `maxDistance` (number, optional): The maximum distance to allow.

**Returns:**
- `isReachable` (boolean): Whether the position is directly reachable or not.

---

#### getAimPosition

```lua
local canFire, aimPosition = sm.ai.getAimPosition(character, target, range, width)
```

Returns true if the given character can fire a projectile at the target within a given fire lane.  
Also returns the aim position that allows the character to succeed.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The firing character.
- `target` ([Character](../Userdata/Character)/[Harvestable](../Userdata/Harvestable)): The target.
- `range` (number): The maximum firing distance.
- `width` (number): The width of the firing lane.

**Returns:**
- `canFire` (boolean): Whether the character can fire at the target or not.
- `aimPosition` ([Vec3](/Shared-Features/Userdata/Vec3)/nil): The aim position, if available.

---

#### getBreachablePosition

```lua
local breachable, attackPosition, target = sm.ai.getBreachablePosition(unit, position, range, attackLevel)
```

Checks if there is an attackable object between the given unit and a position.  
Returns true if a breachable object or no object was found.  
Returns false if an unbreachable object was found.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The target position.
- `range` (number): The raycast length.
- `attackLevel` (int): The attacker's possible attack level.

**Returns:**
- `breachable` (boolean): Whether the given position is breachable or not.
- `attackPosition` ([Vec3](/Shared-Features/Userdata/Vec3)): The attack position.
- `target` ([Shape](../Userdata/Shape)/[Harvestable](../Userdata/Harvestable)/[Lift](../Userdata/Lift)/nil): The object to attack, if found.

---

#### getClosestTree

```lua
local tree = sm.ai.getClosestTree(position, world)
```

Find the closest "tree" harvestable to the given position in the current or given world.

**Parameters:**
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The position to check.
- `world` ([World](../Userdata/World), optional): The world. Defaults to script world context.

---

#### getClosestVisibleCharacterType

```lua
local character = sm.ai.getClosestVisibleCharacterType(unit, uuid)
```

Returns the closest visible character with matching UUID.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The character type UUID to look for.

**Returns:**
- `character` ([Character](../Userdata/Character)): The closest visible character.

---

#### getClosestVisibleCrop

```lua
local crop = sm.ai.getClosestVisibleCrop(unit)
```

Returns the closest visible farming harvestable.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.

**Returns:**
- `crop` ([Harvestable](../Userdata/Harvestable)): The closest visible farming harvestable.

---

#### getClosestVisiblePlayerCharacter

```lua
local playerCharacter = sm.ai.getClosestVisiblePlayerCharacter(unit)
```

Returns the closest visible player character.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.

**Returns:**
- `playerCharacter` ([Character](../Userdata/Character)): The closest visible farming harvestable.

---

#### getClosestVisibleTeamOpponent

```lua
local opponent = sm.ai.getClosestVisibleTeamOpponent(unit, color)
```

Returns the closest visible character that does not have the given color.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.
- `color` ([Color](/Shared-Features/Userdata/Color)): The color.

**Returns:**
- `opponent` ([Character](../Userdata/Character)): The closest visible team opponent.

---

#### getRandomCreationPosition

```lua
local position = sm.ai.getRandomCreationPosition(body)
```

Returns a random position on the given body.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The random position.

---

#### isReachable

```lua
local isReachable sm.ai.isReachable(unit, position)
```

Check if the unit can reach the target position by moving along a path.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The target position.

**Returns:**
- `isReachable` (boolean): Whether the target position is reachable or not.

---
