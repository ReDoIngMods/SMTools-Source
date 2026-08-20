---
sidebar_position: 6
title: sm.voxelTerrainGrid
hide_title: true
---

<br></br>

## sm.voxelTerrainGrid

The **voxelTerrainGrid** library contains functions to be used in the **terrain script environment** in order  
to **generate initial voxel terrain chunks** for a world.  
As such, this library is only available in the **terrain script environment**.

This library exists in vanilla SM, but is empty.  
The VoxelTerrain DLL populates it with custom functions to allow the library to be used.

**For shared constants and functions, make sure to check the [Shared Features](/VoxelTerrain/LuaAPI/SharedFeatures) documentation!**

## Functions

### createChunk

```lua
sm.voxelTerrainGrid.createChunk(cx, cy, cz, data)
```

Creates a voxel terrain chunk in the current terrain cell using a [raw chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#raw-data) array.  
Such an array is usually allocated using the [createVoxelArray](/VoxelTerrain/LuaAPI/SharedFeatures#createvoxelarray) helper function for performance reasons.

Note that the given chunk index X, Y and Z must be within the current [cell chunk index bounds](#getchunkindexbounds).  
Creating a chunk out of these bounds will result in a script error.

This function may only be used from within a [GetVoxelTerrainForCell](/VoxelTerrain/LuaAPI/GetVoxelTerrainForCell) callback.

**Parameters:**
- `cx` (integer): The chunk index X.
- `cy` (integer): The chunk index Y.
- `cz` (integer): The chunk index Z.
- `data` (table): The raw chunk data table.

---



### createSerializedChunk

```lua
sm.voxelTerrainGrid.createSerializedChunk(cx, cy, cz, data, [rotationID], [axisID], [clearX], [clearY], [clearZ])
```

Creates a voxel terrain chunk in the current terrain cell using a [serialized chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#serialized-data) string.  
Such a data string is usually returned by the [exportSerializedChunk](/VoxelTerrain/LuaAPI/sm_voxelTerrain#exportserializedchunk) function.

Note that the given chunk index X, Y and Z must be within the current [cell chunk index bounds](#getchunkindexbounds).  
Creating a chunk out of these bounds will result in a script error.

The `clear*` parameters can be used to select up to three faces of the chunk cube to have the  
surface voxels cleared (set to zero density & material) in that face.  
This can be used to prevent e.g. an open terrain mesh at the world border.  
In each of these axes:  
`-1` refers to the *lower* face (the one pointing in the negative axis direction),  
`0` refers to no face (no voxels cleared in that axis) and  
`+1` refers to the *upper* face (the one pointing in the positive axis direction).

This function may only be used from within a [GetVoxelTerrainForCell](/VoxelTerrain/LuaAPI/GetVoxelTerrainForCell) callback.

**Parameters:**
- `cx` (integer): The chunk index X.
- `cy` (integer): The chunk index Y.
- `cz` (integer): The chunk index Z.
- `data` (string): The serialized chunk data string.
- `rotationID` (integer): Rotation index around given `axisID`. 0 = 0°, 1 = 90°, 2 = 180°, 3 = 270°. Defaults to 0.
- `axisID` (integer): Selects around which axis `rotationID` rotates the chunk. 0 = X, 1 = Y, 2 = Z. Defaults to 0.
- `clearX` (integer): Which chunk face's voxels to clear in the X axis. Defaults to 0.
- `clearY` (integer): Which chunk face's voxels to clear in the Y axis. Defaults to 0.
- `clearZ` (integer): Which chunk face's voxels to clear in the Z axis. Defaults to 0.

---



### getChunkIndexBounds

```lua
local min, max = sm.voxelTerrainGrid.getChunkIndexBounds()
```

Gets the bounds of valid 3D chunk indices for the terrain cell that is currently being generated.  
Attempting to create a voxel terrain chunk at an index outside of these bounds is an error.

:::info note
The returned min/max bounds in the **Z** axis is **always the minimum/maximum valid [Z-axis chunk index](/VoxelTerrain/LuaAPI/SharedFeatures#constants) for the world!**

Because of this, it is **not recommended** to simply loop over all three axes and generate a chunk for every  
single available valid index, as doing so will not only generate millions of (likely unnecessary) chunks,  
but also take a very long time to load and use up a large amount of computer memory and disk space.

Also, generating this many chunks can trigger an issue in the game's networking code, preventing clients from joining.

To work around this, the min/max Z axis values can simply be clamped to some reasonable range, e.g. -10/+10.
:::

This function may only be used from within a [GetVoxelTerrainForCell](/VoxelTerrain/LuaAPI/GetVoxelTerrainForCell) callback.

**Returns:**
- `min` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The minimum valid 3D chunk index for the current cell.
- `max` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The maximum valid 3D chunk index for the current cell.

---
