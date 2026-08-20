---
sidebar_position: 27
title: Unit
hide_title: true
sidebar-label: 'Unit'
---

## Unit

**Associated namespace:** [sm.unit](../Static-Functions/sm.unit)

A userdata object representing a **unit** in the game.

**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `Unit` == `Unit` | Checks if two instances of `Unit` refer to the same `Unit`. |

**Values:**

- `character` [** character **]  

	- `Get`: (Server-Only) The unit's character.


- `eyeHeight` [** number **]  

	- `Set`: (Server-Only) Sets the unit's eye height.


- `id` [** int **]  

	- `Get`: (Server-Only) The unit's id.


- `publicData` [** table **]  

	- `Get`: (Server-Only) The unit's server public data.
	- `Set`: (Server-Only) Sets the unit's server public data.


- `visionFrustum` [** table **]  

	- `Set`: (Server-Only) Sets the unit's vision frustum.
	```lua
	self.unit.visionFrustum = {
		{ 3.0, math.rad( 80.0 ),  math.rad( 80.0 ) },
		{ 20.0, math.rad( 40.0 ), math.rad( 35.0 ) },
		{ 40.0, math.rad( 20.0 ), math.rad( 20.0 ) }
	}
	```

## functions

### createState

```lua
unit:createState( name )
```
`Server-Only`  

Creates an AI state from a name (See [AiState](../Userdata/AiState)).

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.
- `name` (string): The name of the state.

**Returns:**
- ([AiState](../Userdata/AiState)): The created AI state.

---

### destroy

```lua
unit:destroy()
```
`Server-Only`  

Destroys the unit.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.

---

### getCharacter

```lua
unit:getCharacter()
```
`Server-Only`  

Returns the unit's character.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.

**Returns**  
- ([Character](../Userdata/Character)): The unit's character.

---

### getCurrentFacingDirection

```lua
unit:getCurrentFacingDirection()
```
`Server-Only`  

Returns the unit's current facing direction.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.

**Returns**  
- ([Vec3](/Shared-Features/Userdata/Vec3)): The unit's facing direction.

---

### getCurrentMovementDirection

```lua
unit:getCurrentMovementDirection()
```
`Server-Only`  

Returns the unit's current movement direction.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.

**Returns**  
- ([Vec3](/Shared-Features/Userdata/Vec3)): The unit's movement direction.

---

### getId

```lua
unit:getId()
```
`Server-Only`  

Returns the unit's id.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.

**Returns**  
- (int): The unit's id.

---

### getPublicData

```lua
unit:getPublicData()
```
`Server-Only`  

Returns the unit's server public data.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.

**Returns**  
- (table): The unit's server public data.

---

### sendCharacterEvent

```lua
unit:sendCharacterEvent( event )
```
`Server-Only`  

Sends an event to the unit's character script.

The event is received by the [client_onEvent](../Script-Classes/CharacterClass#onevent) callback in the character script.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.
- `event` (string): The event.

---

### setFacingDirection

```lua
unit:setFacingDirection( dir )
```
`Server-Only`  

Sets the unit's facing direction.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.
- `dir` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction.

---

### setHearingData

```lua
unit:setHearingData( noiseScale )
```
`Server-Only`  

Notifies the unit that it heard a sound.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.
- `noiseScale` (number): The noise amount.

---

### setMovementDirection

```lua
unit:setMovementDirection( dir )
```
`Server-Only`  

Sets the unit's movement direction.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.
- `dir` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction.

---

### setMovementType

```lua
unit:setMovementType( type )
```
`Server-Only`  

Sets the unit's movement type.

Valid types are "stand", "walk", "sprint" and "crouch"

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.
- `type` (string): The movement type.

---

### setPublicData

```lua
unit:setPublicData( data )
```
`Server-Only`  

Sets the unit's server public data.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.
- `data` (table): The data to set.

---

### setWantsJump

```lua
unit:setWantsJump( state )
```
`Server-Only`  

Sets the unit to jump.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.
- `state` (boolean): Whether the unit should jump or not.

---

### setWhiskerData

```lua
unit:setWhiskerData( whiskerCount, maxAngle, startLength, endLength )
```
`Server-Only`  

Sets the whisker data for obstacle avoidance.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.
- `whiskerCount` (int): The whisker count.
- `maxAngle` (number): The max angle.
- `startLength` (number): The start length.
- `endLength` (number): The end length.

---

























