---
sidebar_position: 15
title: sm.creation
hide_title: true
sidebar-label: 'sm.creation'
---

## sm.creation

A creation represents a collection of [Bodies](../Userdata/Body) linked together by [Joint](../Userdata/Joint)s.

### Functions

#### exportToString

```lua
local json = sm.creation.exportToString(body, exportTransforms, forceDynamic)
```
`Server-Only`  

Exports a creation to a blueprint formatted JSON string.

**Parameters:**
- `body` ([Body](../Userdata/Body)): Any body in the creation.
- `exportTransforms` (boolean, optional): Export the current world transform of bodies. Defaults to false.
- `forceDynamic` (boolean, optional): Force export to dynamic bodies. Defaults to false.

**Returns:**
- `json` (string): The blueprint json string.

---

#### exportToTable

```lua
local creation = sm.creation.exportToTable(body, exportTransforms, forceDynamic)
```
`Server-Only`  

Exports a creation to a blueprint Lua table.

**Parameters:**
- `body` ([Body](../Userdata/Body)): Any body in the creation.
- `exportTransforms` (boolean, optional): Export the current world transform of bodies. Defaults to false.
- `forceDynamic` (boolean, optional): Force export to dynamic bodies. Defaults to false.

**Returns:**
- `creation` (table): The blueprint Lua table.

---

#### importFromFile

```lua
local bodies = sm.creation.importFromFile(world, path, worldPosition, worldRotation, importTransforms, indestructible)
```
`Server-Only`  

Imports a blueprint JSON file into the world.

If `importTransforms` is enabled, the world position and rotation are applied to the imported transform.

:::caution warning
If the blueprint was not exported with transforms, the importer will treat it as if `importTransforms` was disabled.
:::

**Parameters:**
- `world` ([World](../Userdata/World)): The world to import to.
- `path` (string): The path to the blueprint file.
- `worldPosition` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The world position of the creation. Defaults to `sm.vec3.zero()`
- `worldRotation` ([Quat](/Shared-Features/Userdata/Quat), optional): The world rotation of the creation. Defaults to `sm.quat.identity()`
- `importTransforms` (boolean, optional): Import world transforms from bodies. Defaults to false.
- `indestructible` (boolean, optional): (DEPRECATED, use `setDestructable` on each body in the creation.)

**Returns:**
- `bodies` (table): An array of bodies created from the blueprint.

---

#### importFromString

```lua
local bodies = sm.creation.importFromString(world, jsonString, worldPosition, worldRotation, importTransforms, forceInactive)
```
`Server-Only`  

Imports a blueprint json string into the world.

If `importTransforms` is enabled, the world position and rotation are applied to the imported transform.

:::caution warning
If the blueprint was not exported with transforms, the importer will treat it as if `importTransforms` was disabled.
:::

**Parameters:**
- `world` ([World](../Userdata/World)): The world to import to.
- `jsonString` (string): The blueprint json string.
- `worldPosition` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The world position of the creation. Defaults to `sm.vec3.zero()`
- `worldRotation` ([Quat](/Shared-Features/Userdata/Quat), optional): The world rotation of the creation. Defaults to `sm.quat.identity()`
- `importTransforms` (boolean, optional): Import world transforms from bodies. Defaults to false.
- `forceInactive` (boolean, optional): Sets whether interactables are forced inactive when imported or not. Defaults to false.

**Returns:**
- `bodies` (table): An array of bodies created from the blueprint.

---
