---
sidebar_position: 43
title: sm.scriptableObject
hide_title: true
sidebar-label: 'sm.scriptableObject'
---

## sm.scriptableObject

**Associated object type:** [ScriptableObject](../Userdata/ScriptableObject)

A [ScriptableObject](../Userdata/ScriptableObject) is a virtual object which has no visual appearance and does not interact with physics.  
It exists purely to execute a Lua script in the background, which will be synchronized to clients similar to other game objects.

### Functions

#### createScriptableObject

```lua
local sob = sm.scriptableObject.createScriptableObject(uuid, params, world)
```
`Server-Only`  

Creates a new [ScriptableObject](../Userdata/ScriptableObject).

:::info note
If no `world` is given, the object's [script class](../Script-Classes/ScriptableObjectClass) cannot use world-dependent APIs such as [sm.physics](sm.physics).
:::

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The object's UUID.
- `params` (any): Extra data. Available as `self.params` in the object's script. Optional.
- `world` ([World](../Userdata/World), optional): The world which the object belongs to, for world dependent API calls. Defaults to `sm.world.ids.noWorld`.

**Returns:**
- `sob` ([ScriptableObject](../Userdata/ScriptableObject)): The created object.

---
