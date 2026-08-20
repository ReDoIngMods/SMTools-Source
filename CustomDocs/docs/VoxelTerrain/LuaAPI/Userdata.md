---
sidebar_position: 5
title: Userdata
hide_title: true
---

<br></br>

The VoxelTerrain DLL re-enables a hidden [VoxelTerrain](#voxelterrain) userdata used by some vanilla Lua callbacks  
and also implements an extra, custom [RestrictionArea](#restrictionarea) userdata to control voxel terrain interactions.

The APIs for these userdata objects are documented here.

## VoxelTerrain

The `VoxelTerrain` userdata exists in the game script environment in vanilla SM.  
It is used in only two places to pass a terrain material ID to Lua, with these places being  
the [WorldClass:server_onProjectile](https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass#onprojectile) and [WorldClass:server_onMelee](https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass#onmelee) callbacks.  
In these callbacks, the `target` parameter will be set to a `VoxelTerrain` object containing  
the material ID of the voxel closest to the hit point.

There is no other purpose or use for this object.

### Supported Operations

`print(terrain)`: Prints the object to the developer console.  
`type(terrain)`: Gets the object type name string (`"VoxelTerrain"`).

### Member Variables

- `.materialId` (number)
  - **Get:** Gets the material id integer out of the object.

### Functions

#### getMaterialId

```lua
local material = terrain:getMaterialId()
```

Gets the material ID out of the object.

**Parameters:**
- `terrain` ([VoxelTerrain](#voxelterrain)): The VoxelTerrain object.

**Returns:**
- `material` (integer): The voxel terrain material ID.

---



## RestrictionArea

A RestrictionArea is a custom, unofficial object implemented by the VoxelTerrain DLL.  
It represents an invisible AABB in the world, inside of which any interactions with  
voxel terrain (adding, removing, etc.) may be limited using [restriction flags](/VoxelTerrain/LuaAPI/sm_voxelTerrain#restrictionflags).

This can be useful for protecting specific parts of the world, for example preventing  
the player from digging out a cave entrance elevator.

A RestrictionArea is created using the [sm.voxelTerrain.createRestrictionArea](/VoxelTerrain/LuaAPI/sm_voxelTerrain#createrestrictionarea) function.

:::info notes
As it is an **axis-aligned** box, a RestrictionArea cannot be arbitrarily rotated.

Not all API functions respect the restrictions, such as `createShape` or `importChunk`.

In addition to this, the restrictions only apply if the action's *origin* is inside of the area.  
For example, if [createBoxAt](/VoxelTerrain/LuaAPI/sm_voxelTerrain#createboxat) is used and the center point is outside of the restricted area  
while the actual box bounds reach into it, the restrictions will **not** be respected there.

Similarly, if shape construction is restricted, the player may begin block placement outside of  
the area and then drag the placement into it, which will also bypass the restriction.

These issues can be mostly worked around by simply increasing the size of the RestrictionArea.
:::

### Supported Operations

`print(area)`: Prints the area to the developer console.  
`sm.exists(area)`: Checks if the given area is valid (exists) or not.  
`tostring(area)`: Converts the area to a string representation.  
`type(terrain)`: Gets the object type name string (`"RestrictionArea"`).

### Member Variables

- `.world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World))
  - **Get:** Gets the world that the area is in.
- `.flags` ([RestrictionFlags](/VoxelTerrain/LuaAPI/sm_voxelTerrain#restrictionflags))
  - **Get:** Gets the terrain restriction flags of this area.
  - **Set:** Sets the terrain restriction flags for this area.
- `.active` (boolean)
  - **Get:** Gets whether this area is currently active/enabled or not.
  - **Set:** Sets whether this area is active/enabled or not.

### Functions

#### getBounds

```lua
local min, max = area:getBounds()
```

Gets the bounding box of the area.

**Parameters:**
- `area` ([RestrictionArea](#restrictionarea)): The RestrictionArea.

**Returns:**
- `min` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The AABB min.
- `max` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The AABB max.

---



#### getWorld

```lua
local world = area:getWorld()
```

Gets the world that the area is in.

**Parameters:**
- `area` ([RestrictionArea](#restrictionarea)): The RestrictionArea.

**Returns:**
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world.

---



#### getFlags

```lua
local flags = area:getFlags()
```

Gets the restriction flags of the area.

**Parameters:**
- `area` ([RestrictionArea](#restrictionarea)): The RestrictionArea.

**Returns:**
- `flags` ([RestrictionFlags](/VoxelTerrain/LuaAPI/sm_voxelTerrain#restrictionflags)): The flags.

---



#### getActive

```lua
local active = area:getActive()
```

Same as the `.active` [member variable](#member-variables-1).

Returns whether this area is currently active (meaning its restrictions apply) or not (meaning its restrictions do not apply).

**Parameters:**
- `area` ([RestrictionArea](#restrictionarea)): The RestrictionArea.

**Returns:**
- `active` (boolean): Whether this area is active or not.

---



#### setBounds

```lua
area:setBounds(min, max)
```

Sets the new bounding box of the area.

**Parameters:**
- `area` ([RestrictionArea](#restrictionarea)): The RestrictionArea.
- `min` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The AABB min.
- `max` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The AABB max.

---



#### setFlags

```lua
area:setFlags(flags)
```

Sets new restriction flags for the area.

**Parameters:**
- `area` ([RestrictionArea](#restrictionarea)): The RestrictionArea.
- `flags` ([RestrictionFlags](/VoxelTerrain/LuaAPI/sm_voxelTerrain#restrictionflags)): The flags.

---



#### setActive

```lua
area:setActive(active)
```

Same as the `.active` [member variable](#member-variables-1).

Sets whether this area is considered 'active' or not.  
If a RestrictionArea is **inactive**, its restriction flags do not apply, essentially behaving as if the area did not exist.  
If the area is set as **active**, its flags will apply as per the logic explained in [createRestrictionArea](/VoxelTerrain/LuaAPI/sm_voxelTerrain#createrestrictionarea).

:::info note
The change is **instant**, not queued, meaning the new state applies immediately  
after this function returns, not just in the next game tick.
:::

**Parameters:**
- `area` ([RestrictionArea](#restrictionarea)): The RestrictionArea.
- `active` (boolean): Whether this area is active or not.
