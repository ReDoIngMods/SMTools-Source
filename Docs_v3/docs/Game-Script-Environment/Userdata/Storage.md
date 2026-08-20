---
sidebar_position: 25
title: Storage
hide_title: true
sidebar-label: 'Storage'
---

## Storage

**Associated namespace:** [sm.storage](../Userdata/Storage)

A userdata object representing a **storage** object.

:::info note
The storage object is only accessible via `self.storage` in scripted objects (see [self.storage](../Script-Classes/ShapeClass#storage)).

The storage object also allows for data to be saved in creations saved on the Lift.
:::

## Functions

### load

```lua
storage:load()
```
`Server-Only`  

Returns the data stored in the storage object.  
Returns nil if the object contains no data.

**Parameters:**
- `storage` ([Storage](../Userdata/Storage)): The storage.

**Returns:**
- (any): The data.

---

### save

```lua
storage:save( data )
```
`Server-Only`  

Saves any Lua data into the storage object.

The data will remain stored after closing the world, and is retrieved using [load](#load).

**Parameters:**
- `storage` ([Storage](../Userdata/Storage)): The storage.
- `data` (any): The data.

---