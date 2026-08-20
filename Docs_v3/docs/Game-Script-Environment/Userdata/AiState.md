---
sidebar_position: 1
title: AiState
hide_title: true
sidebar-label: 'AiState'
---

## AiState

A userdata object representing an **AI state** belonging to a [Unit](../Userdata/Unit).

This library can only be used on the **server**.

**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `AiState` == `AiState` | Checks if two instances of `AiState` refer to the same `AiState`. |

## functions

### getFacingDirection

```lua
AiState:getFacingDirection()
```
`Server-Only`  

Returns the state's facing direction.

**Parameters:**
- `AiState` ([AiState](../Userdata/AiState)): The state.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The direction.

---

### getMovementDirection

```lua
AiState:getMovementDirection()
```
`Server-Only`  

Returns the state's movement direction.

**Parameters:**
- `AiState` ([AiState](../Userdata/AiState)): The state.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The direction.

---

### getMovementType

```lua
AiState:getMovementType()
```
`Server-Only`  

Returns a string describing the state's movement type.

Movement type can be "stand", "walk", "sprint" or "crouch".

**Parameters:**
- `AiState` ([AiState](../Userdata/AiState)): The state.

**Returns:**
- (string): The movement type.

---

### getWantsJump

```lua
AiState:getWantsJump()
```
`Server-Only`  

Check if the state wants to jump.

**Parameters:**
- `AiState` ([AiState](../Userdata/AiState)): The state.

**Returns:**
- (boolean): True when the state wants to jump.

---

### isDone

```lua
AiState:isDone()
```
`Server-Only`  

Checks if the AI state is done.

Returns true when the state is done, and a string describing the state's current situation.

Can be used to determine if another state is allowed to be started.

**Parameters:**
- `AiState` ([AiState](../Userdata/AiState)): The state.

**Returns:**
- (boolean): True if the state is done.
- (string): The state's current situation.

---

### onFixedUpdate

```lua
AiState:onFixedUpdate( dt )
```
`Server-Only`  

Updates the state by adding delta time progression.

Should be called once every game tick while the state is active.

**Parameters:**
- `AiState` ([AiState](../Userdata/AiState)): The state.
- `dt` (number): The delta time.

---

### onUnitUpdate

```lua
AiState:onUnitUpdate( dt )
```
`Server-Only`  

Updates the state by adding delta time progression.

Should be called once every unit update, by the unit that owns the state, while the state is active.

**Parameters:**
- `AiState` ([AiState](../Userdata/AiState)): The state.
- `dt` (number): The delta time.

---

### start

```lua
AiState:start()
```
`Server-Only`  

Starts the state.

**Parameters:**
- `AiState` ([AiState](../Userdata/AiState)): The state.

---

### stop

```lua
AiState:stop()
```
`Server-Only`  

Stops the state.

**Parameters:**
- `AiState` ([AiState](../Userdata/AiState)): The state.

---