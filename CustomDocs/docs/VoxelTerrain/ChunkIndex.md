---
sidebar_position: 3
title: Chunk Index
hide_title: true
---

<br></br>

In the Lua API documentation for this library, the words `chunk index` or `3D chunk index` will very often be used.

This page describes what such an index is and how to work with it, including some Lua examples.

A **voxel chunk index** is simply a standard 3-component integer vector (Vec3) describing a voxel terrain chunk's  
unique 3D index in the invisible 3D chunk grid present in the game world.

#### Constants

To work with this, the [terrain system constants](/VoxelTerrain/LuaAPI/SharedFeatures#constants) have to be taken into account:

- A **terrain cell** is exactly **64x64** meters in size.
- A **voxel terrain chunk** is exactly **16x16x16** meters in size (64x64x64 blocks).
- A chunk contains **17x17x17** voxels, with indexing starting at `0` in each axis.
- A voxel chunk's **world position** is always at the cube corner that is closest to `-inf` in X/Y/Z.
- Chunk index (0, 0, 0) equals world position (0, 0, 0).

With this information, several calculations can be done to work with the chunk index.  
These are documented with the utility functions provided below.

:::info note
All parameters/returns in the functions below are considered to be [Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3) objects.

Also note that the functions are not optimized for execution speed;  
if performance is a valid concern, they should be re-implemented in a more optimized way.
:::

#### WorldPositionToChunkIndex

An arbitrary world position can be easily converted into the 3D grid index of the chunk that  
it is in by simply flooring the result of dividing the position by the size of the chunk.

```lua
function WorldPositionToChunkIndex(pos)
	local metersPerChunkAxis = sm.voxelTerrain.constants.metersPerChunkAxis
	return sm.vec3.new(
		math.floor(pos.x / metersPerChunkAxis),
		math.floor(pos.y / metersPerChunkAxis),
		math.floor(pos.z / metersPerChunkAxis)
	)
end
```

---



#### ChunkIndexToWorldPosition

A 3D chunk grid index is easily converted to the chunk's world position by simply multiplying the index by the chunk size.

```lua
function ChunkIndexToWorldPosition(index)
	local metersPerChunkAxis = sm.voxelTerrain.constants.metersPerChunkAxis
	return sm.vec3.new(
		index.x * metersPerChunkAxis,
		index.y * metersPerChunkAxis,
		index.z * metersPerChunkAxis
	)
end
```

---



#### VoxelIndexToWorldPosition

Conveniently, there is exactly one voxel per meter.  
Thus, a chunk-local 3D voxel index can be easily converted to the voxel's world position  
by first computing the chunk's position, then adding the voxel index directly to it.

```lua
function VoxelIndexToWorldPosition(chunkIndex, voxelIndex)
	return ChunkIndexToWorldPosition(chunkIndex) + voxelIndex
end
```

---



#### WorldPositionToChunkAndVoxelIndex

It is also possible to calculate the closest chunk-local 3D voxel index given a world position,  
though the math is a bit more complex here.

First, the size of a chunk is stored in a [Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3) for ease of use.

Then, the world position is converted into **chunk grid space**, where one unit = 16 meters (one chunk).

This grid-space position then has a floored version of itself subtracted from it,  
effectively **extracting the fractional (decimal) part of the number**.

If any component of this fraction is negative, this means the chunk is in **negative coordinate space** on that axis.  
If this is the case, the fraction must be inverted (e.g. -0.1 -> +0.9) by adding it to 1.0 (as the fraction is negative,  
this is equal to `1.0 - abs(fraction)`), as the fraction would otherwise be relative to the top of the chunk  
instead of the bottom, which would lead to incorrect results.

Next, the fraction is converted into a position in **chunk-local space**, where one unit = one voxel (one voxel per meter).

This chunk-local position is then rounded in order to obtain the **closest chunk-local 3D voxel index**.

Lastly, the 3D index of the chunk itself is obtained using the same method shown in [WorldPositionToChunkIndex](#worldpositiontochunkindex).

```lua
function WorldPositionToChunkAndVoxelIndex(vPos)
	local metersPerChunkAxis = sm.voxelTerrain.constants.metersPerChunkAxis
	local vMetersPerChunk = sm.vec3.new(metersPerChunkAxis, metersPerChunkAxis, metersPerChunkAxis)
	
	local vGridPosition = vPos / vMetersPerChunk
	local local vChunkFraction = sm.vec3.new(
		vGridPosition.x - math.floor(vGridPosition.x),
		vGridPosition.y - math.floor(vGridPosition.y),
		vGridPosition.z - math.floor(vGridPosition.z)
	)
	if vChunkFraction.x < 0.0 then
		vChunkFraction.x = 1.0 + vChunkFraction.x
	end
	if vChunkFraction.y < 0.0 then
		vChunkFraction.y = 1.0 + vChunkFraction.y
	end
	if vChunkFraction.z < 0.0 then
		vChunkFraction.z = 1.0 + vChunkFraction.z
	end

	local vPosLocalToChunk = vChunkFraction * vecMetersPerChunk

	local vClosestVoxelIndex = sm.vec3.new(
		math.floor(vPosLocalToChunk.x + 0.5),
		math.floor(vPosLocalToChunk.y + 0.5),
		math.floor(vPosLocalToChunk.z + 0.5)
	)
	local vChunkIndex = sm.vec3.new(
		math.floor(vGridPosition.x),
		math.floor(vGridPosition.y),
		math.floor(vGridPosition.z)
	)

	return vChunkIndex, vClosestVoxelIndex
end
```

---
