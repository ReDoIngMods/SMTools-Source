---
sidebar_position: 15
title: Lift
hide_title: true
sidebar-label: 'Lift'
---

## Lift

A userdata object representing a **lift** in the game.

**Values:**

- `id` [** int **]  

	- `Get`: The lift's id.


- `level` [** int **]  

	- `Get`: The lift's level.


- `worldPosition` [** vec3 **]  

	- `Get`: The lift's world position.


**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `Lift` == `Lift` | Checks if two instances of `Lift` refer to the same `Lift`. |

## Functions

### destroy

```lua
lift:destroy()
```
`Server-Only`  

Destroys the lift.

**Parameters:**
- `lift` ([Lift](../Userdata/Lift)): The lift.

---

### getId

```lua
lift:getId()
```

Returns the lift's id.

**Parameters:**
- `lift` ([Lift](../Userdata/Lift)): The lift.

**Returns:**
- (int): The lift's id.

---

### getLevel

```lua
lift:getLevel()
```

Returns the lift's level.

**Parameters:**
- `lift` ([Lift](../Userdata/Lift)): The lift.

**Returns:**
- (int): The lift's level.

---

### getWorldPosition

```lua
lift:getWorldPosition()
```

Returns the lift's world position.

**Parameters:**
- `lift` ([Lift](../Userdata/Lift)): The lift.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The lift's world position.

---

### hasBodies

```lua
lift:hasBodies()
```

Returns whether there is a body on the lift.

**Parameters:**
- `lift` ([Lift](../Userdata/Lift)): The lift.

**Returns:**
- (boolean): Whether the lift has bodies or not.

---















