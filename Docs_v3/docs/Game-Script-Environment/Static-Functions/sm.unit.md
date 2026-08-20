---
sidebar_position: 47
title: sm.unit
hide_title: true
sidebar-label: 'sm.unit'
---

## sm.unit

**Associated object type:** [Unit](../Userdata/Unit)

An AI [Unit](../Userdata/Unit) performs the AI, pathfinding and logic needed for NPC behavior.  
A [Unit](../Userdata/Unit) controls a [Character](../Userdata/Character) in the world.  
This library exists only on the [server](/#server).

### Functions

#### createUnit

```lua
local unit = sm.unit.createUnit(uuid, feetPos, yaw, data, pitch)
```
`Server-Only`  

Creates a new [Unit](../Userdata/Unit).

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The character type uuid.
- `feetPos` ([Vec3](/Shared-Features/Userdata/Vec3)): The feet position of the unit, at the spawn position.
- `yaw` (number, optional): The initial yaw. Defaults to 0.
- `data` (any, optional): Extra parameters passed to the unit script.
- `pitch` (number, optional): The initial pitch. Defaults to 0.

**Returns:**
- `unit` ([Unit](../Userdata/Unit)): The created unit.

---

#### getAllUnits

```lua
local units = sm.unit.getAllUnits()
```
`Server-Only`  

Returns an array of all [Unit](../Userdata/Unit)s in the world.

**Returns:**
- `units` (table): The array of units.

---
