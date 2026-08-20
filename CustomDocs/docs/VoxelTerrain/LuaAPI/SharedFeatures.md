---
sidebar_position: 3
title: Shared Features
hide_title: true
---

<br></br>

## Shared Features

The API features documented here are **shared between environments** - this means that these features are  
**present in the exact same way in both `sm.voxelTerrain` (game env) and `sm.voxelTerrainGrid` (terrain env).**

For example, the `constants` table can be accessed in both environments through their associated libraries,  
e.g. `sm.voxelTerrain.constants` in the game environment and `sm.voxelTerrainGrid.constants` in the terrain environment.

These features are documented here to avoid having to maintain duplicated documentation.

Also note that, even though the tables and values are the same, they are not truly *shared* - e.g. inserting  
a value into the `constants` table in the game env will **not** transfer it into the terrain env.



### createVoxelArray

```lua
-- Game Environment
local array = sm.voxelTerrain.createVoxelArray([material], [density])
-- Terrain Environment
local array = sm.voxelTerrainGrid.createVoxelArray([material], [density])
```

Allocates a [raw chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#raw-data) array, pre-filled with given data.  
Using this array when generating voxel data on-the-fly has better performance as it avoids the dynamic resizing of a normal array.

**Parameters:**
- `material` (integer): The material ID to set to all voxels in the array. Defaults to 0.
- `density` (integer): The density to set to all voxels in the array. Defaults to 0.

**Returns:**
- `array` (table): The created voxel array table.

---



### serializeChunkData

```lua
-- Game Environment
local serializedData = sm.voxelTerrain.serializeChunkData(rawData)
-- Terrain Environment
local serializedData = sm.voxelTerrainGrid.serializeChunkData(rawData)
```

Serializes a [raw chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#raw-data) array into a [serialized chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#serialized-data) string.

**Parameters:**
- `rawData` (table): The [raw chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#raw-data) array.

**Returns:**
- `serializedData` (string): The [serialized chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#serialized-data) string.

---



### deserializeChunkData

```lua
-- Game Environment
local rawData = sm.voxelTerrain.deserializeChunkData(serializedData)
-- Terrain Environment
local rawData = sm.voxelTerrainGrid.deserializeChunkData(serializedData)
```

Does the opposite of [serializeChunkData](#serializechunkdata), that is,  
it deserializes a [serialized chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#serialized-data) string into a [raw chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#raw-data) array.

**Parameters:**
- `serializedData` (string): The [serialized chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#serialized-data) string.

**Returns:**
- `rawData` (table): The [raw chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#raw-data) array.

---

### constants

```lua
constants = {
	worldBoundsMinZ = -2048.0,
	worldBoundsMaxZ = 2048.0,
	chunkIndexMinZ = -125,
	chunkIndexMaxZ = 63,
	metersPerChunkAxis = 16,
	voxelsPerChunkAxis = 17,
	chunksPerCellXY = 4,
	maxVoxelDensity = 63
}

-- Game Environment
sm.voxelTerrain.constants = constants
-- Terrain Environment
sm.voxelTerrainGrid.constants = constants
```

Table of constant values that are fixed across the entire voxel terrain system.

`worldBoundsMinZ`: The lower positional limit in world space, in meters, in the Z axis. Any object below this gets deleted by the game.  
`worldBoundsMaxZ`: Opposite of `worldBoundsMinZ`.  
`chunkIndexMinZ`: The lowest valid voxel chunk index in the Z axis. Below this, no chunks can be spawned.  
`chunkIndexMaxZ`: Opposite of `chunkIndexMinZ`. Above this is the world ceiling, spawning chunks there would not serve any purpose.  
`metersPerChunkAxis`: Size of a voxel terrain chunk in meters. Chunks are symmetrical, this size is valid for all axes.  
`voxelsPerChunkAxis`: Number of voxels in one axis of a voxel chunk (1 voxel per meter).  
`chunksPerCellXY`: Number of voxel terrain chunks that fit into a standard terrain cell in the X and Y axes.  
`maxVoxelDensity`: Maximum density value for voxels.

