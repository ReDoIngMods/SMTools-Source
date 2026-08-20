---
sidebar_position: 45
title: sm.storage
hide_title: true
sidebar-label: 'sm.storage'
---

## sm.storage

**Associated object type:** [Storage](../Userdata/Storage)

A data storage interface is used for saving and loading any Lua data in the world's database.  
This allows for data to be retrieved after closing and reloading the world.

Storage can only be used on the [server](/#server).

:::caution warning
Storage allows for data to be saved immediately into the world's database.  
This is a **very slow** process and should be done as sparsely as possible.

If some data needs to be shared globally and updated often, consider using global variables instead.  
Ideally, storage should only be used to save data upon closing the world, or when saving a creation on the Lift.
:::

### Functions

#### load

```lua
local data = sm.storage.load(key)
```

Loads Lua data stored at the given key. The key can be any Lua object.

If no data is stored at the given key, this returns nil.

When used on the client, this function will return data saved with [saveAndSync](#saveandsync)

**Parameters:**
- `key` (any): The key.

**Returns:**
- `data` (any): The stored data.

---

#### save

```lua
sm.storage.save(key, data)
```
`Server-Only`  

Saves any Lua data at a given key.  
The key can be any lua data as well.

The data will remain stored after closing the world, and is retrieved using [load](#load), provided the same key.

:::info note
The data is stored globally **within the current mod**.  
As of such, keys will not collide with external mods and scripts.
:::

**Parameters:**
- `key` (any): The key to store the data at.
- `data` (any): The data to be stored.

---

#### saveAndSync

```lua
sm.storage.saveAndSync(key, data)
```
`Server-Only`  

Saves any Lua data at a given key and synchronizes it to all clients.  
The key can be any lua data as well.

The data will remain stored after closing the world, and is retrieved using [load](#load), provided the same key.

:::info note
The data is stored globally **within the current mod**.  
As of such, keys will not collide with external mods and scripts.
:::

**Parameters:**
- `key` (any): The key to store the data with.
- `data` (any): The data to be stored.

---
