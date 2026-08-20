---
sidebar_position: 19
title: Player
hide_title: true
sidebar-label: 'Player'
---

## Player

**Associated namespace:** [sm.player](../Static-Functions/sm.player)

A userdata object representing a **player** in the game.

**Values:**

- `character` [** character **]  

	- `Get`: The player's character.


- `clientPublicData` [** table **]  

	- `Get`: (Client-Only) The player's client public data.
	- `Get`: (Client-Only) Sets the player's client public data.


- `id` [** int **]  

	- `Get`: The player's id.


- `name` [** string **]  

	- `Get`: The player's username.


- `publicData` [** int **]  

	- `Get`: (Server-Only) The player's server public data.
	- `Get`: (Server-Only) Sets the player's server public data.


**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `Player` == `Player` | Checks if two instances of `Player` refer to the same `Player`. |

## functions

### getCarry

```lua
player:getCarry()
```

Returns the carry container of the player.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.

**Returns:**
- ([Container](../Userdata/Container)): The player's carry container.

---

### getCarryColor

```lua
player:getCarryColor()
```
`Server-Only`  

Returns the color of the shape the player is carrying.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.

**Returns:**
- ([Color](/Shared-Features/Userdata/Color)): The color of the carried shape.

---

### getCharacter

```lua
player:getCharacter()
```

Returns the player's character.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.

**Returns:**
- ([Character](../Userdata/Character)): The player's character.

---

### getClientPublicData

```lua
player:getClientPublicData()
```
`Client-Only`  

Returns the player's client public data.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.

**Returns:**
- (table): The player's client public data.

---

### getHotbar

```lua
player:getHotbar()
```

Returns the player's hotbar container.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.

**Returns:**
- ([Container](../Userdata/Container)): The player's hotbar.

---

### getId

```lua
player:getId()
```

Returns the player's id.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.

**Returns:**
- (int): The player's id.

---

### getInventory

```lua
player:getInventory()
```

Returns the player's inventory container.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.

**Returns:**
- ([Container](../Userdata/Container)): The player's inventory.

---

### getName

```lua
player:getName()
```

Returns the player's username.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.

**Returns:**
- (string): The player's username.

---

### getPublicData

```lua
player:getPublicData()
```
`Server-Only`  

Returns the player's server public data.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.

**Returns:**
- (table): The player's server public data.

---

### isFemale

```lua
player:isFemale()
```

Returns whether the player is female.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.

**Returns:**
- (boolean): Whether the player is female or not.

---

### isMale

```lua
player:isMale()
```

Returns whether the player is male.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.

**Returns:**
- (boolean): Whether the player is male or not.

---

### placeLift

```lua
player:placeLift( creation, position, level, rotation )
```
`Server-Only`  

Places the player's lift.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.
- `creation` (table): The bodies to place on the lift.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The lift's world position.
- `level` (int): The lift's level.
- `rotation` (int): The rotation of the lifted creation.

---

### removeLift

```lua
player:removeLift()
```
`Server-Only`  

Removes the player's lift, if it exists.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.

---

### sendCharacterEvent

```lua
player:sendCharacterEvent( event )
```
`Server-Only`  

Sends an event to the player's character script.

The event is received by the [client_onEvent](../Script-Classes/CharacterClass#onevent) callback in the character script.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.
- `event` (string): The event.

---

### setCharacter

```lua
player:setCharacter( character )
```
`Server-Only`  

Sets the player's character.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.
- `character` ([Character](../Userdata/Character)): The character.

---

### setClientPublicData

```lua
player:setClientPublicData( data )
```
`Client-Only`  

Sets the player's client public data.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.
- `data` (table): The data to set.

---

### setPublicData

```lua
player:setPublicData( data )
```
`Server-Only`  

Sets the player's server public data.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.
- `data` (table): The data to set.

---

