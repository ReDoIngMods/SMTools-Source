---
sidebar_position: 23
title: ScriptableObject
hide_title: true
sidebar-label: 'ScriptableObject'
---

## ScriptableObject

**Associated namespace:** [sm.scriptableObject](../Static-Functions/sm.scriptableObject)

A userdata object representing a **scriptable object**.

**Values:**

- `clientPublicData` [** table **]  

	- `Get`: (Client-Only) The objects's client public data.
	- `Set`: (Client-Only) Sets the objects's client public data.


- `id` [** int **]  

	- `Get`: The object's id.


- `publicData` [** table **]  

	- `Get`: (Server-Only) The object's server public data.
	- `Set`: (Server-Only) Sets the object's server public data.


- `world` [** world **]  

	- `Get`: The object's world.


**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `ScriptableObject` == `ScriptableObject` | Checks if two instances of `ScriptableObject` refer to the same `ScriptableObject`. |

## Functions

### destroy

```lua
scriptableObject:destroy()
```
`Server-Only`  

Destroys the object.

**Parameters:**
- `scriptableObject` ([ScriptableObject](../Userdata/ScriptableObject)): The scriptable object.

---

### getClientPublicData

```lua
scriptableObject:getClientPublicData()
```
`Client-Only`  

Returns the object's client public data.

**Parameters:**
- `scriptableObject` ([ScriptableObject](../Userdata/ScriptableObject)): The scriptable object.

**Returns:**
- (table): The objects's client public data.

---

### getId

```lua
scriptableObject:getId()
```

Returns the object's id.

**Parameters:**
- `scriptableObject` ([ScriptableObject](../Userdata/ScriptableObject)): The scriptable object.

**Returns:**
- (int): The objects's id.

---

### getPublicData

```lua
scriptableObject:getPublicData()
```
`Server-Only`  

Returns the object's server public data.

**Parameters:**
- `scriptableObject` ([ScriptableObject](../Userdata/ScriptableObject)): The scriptable object.

**Returns:**
- (table): The objects's server public data.

---

### getWorld

```lua
scriptableObject:getWorld()
```

Returns the object's world.

**Parameters:**
- `scriptableObject` ([ScriptableObject](../Userdata/ScriptableObject)): The scriptable object.

**Returns:**
- ([World](../Userdata/World)): The objects's world.

---

### setClientPublicData

```lua
scriptableObject:setClientPublicData( data )
```
`Client-Only`  

Sets the object's client public data.

**Parameters:**
- `scriptableObject` ([ScriptableObject](../Userdata/ScriptableObject)): The scriptable object.
- `data` (table): The data to set.

---

### setPublicData

```lua
scriptableObject:setPublicData( data )
```
`Server-Only`  

Sets the object's server public data.

**Parameters:**
- `scriptableObject` ([ScriptableObject](../Userdata/ScriptableObject)): The scriptable object.
- `data` (table): The data to set.

---


