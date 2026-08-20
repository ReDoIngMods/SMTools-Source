---
sidebar_position: 2
title: Voxel Chunk Data Formats
hide_title: true
---

<br></br>

Some Lua functions in the VoxelTerrain API directly interact with and/or pass to/from Lua, **raw voxel chunk data**.

This data may come in two possible formats, which are documented below.

### Raw Data

Whenever this documentation refers to something as "raw chunk data", this is probably what is being talked about.  
"Raw" chunk data is simply voxel data stored in a Lua table in a specific way.  

This type is usually returned by functions such as [exportChunk](/VoxelTerrain/LuaAPI/sm_voxelTerrain#exportchunk).

This makes it extremely easy to interact with said data directly from Lua, as material and density  
are just stored directly as normal Lua numbers. This format can even be *generated* from Lua!  

**However**, this format is also **very** inefficient in terms of memory usage and as such, should not be used  
for e.g. storing data to a file or sending it over the network. [Serialized data](#serialized-data) is much better suited for these cases.  

The table in question follows very specific rules:
- It **must** be an **array** of **number values**.
- It **must** contain **exactly 9826** sequential elements (17x17x17 voxels, 2 values per voxel), starting at index 1.
- The values in the table are simply alternating (material, density), in this order, for each voxel.

```lua title="Example Raw Data Table"
--               | voxel #1 | voxel #2 | voxel #3 | voxel #4 |
local rawData = {   0, 23,     0, 54,     0, 32,     0, 48, ... --[[continues until 9826 total elements]]}
```

This table can be very easily indexed using a 3D voxel index (0 - 16) (17 voxels per chunk axis, zero-indexed,  
see [voxelsPerChunkAxis](/VoxelTerrain/LuaAPI/SharedFeatures#constants)) using the helper function below.  
**Note:** The 3D voxel index **is zero-indexed**, which the function below already accounts for.

```lua
-- Fetch constants depending on environment (terrain vs game)
-- The actual table is the same but the library name is different
local constants = sm.voxelTerrain and sm.voxelTerrain.constants or sm.voxelTerrainGrid.constants
local VoxelsPerChunkAxis = constants.voxelsPerChunkAxis
function IndexRawChunkData(chunkData, vx, vy, vz)
	-- Convert the 3D, zero-indexed voxel index into 1D, 1-indexed Lua array index to get to the voxel
	-- We multiply by 2 as there is two values per voxel and add 1 to work around the zero-index
	local base = ((vz + (VoxelsPerChunkAxis * vy) + ((VoxelsPerChunkAxis * VoxelsPerChunkAxis) * vx)) * 2) + 1
	-- First value is the material, next value is the density
	local material = chunkData[base]
	local density = chunkData[base + 1]
	return material, density
end
```

---

### Serialized Data

Apart from [Raw Data](#raw-data), there are also functions that generate/output/accept **Serialized Data**.

This type is usually used with functions containing the word "serialized" in their name, e.g. [exportSerializedChunk](/VoxelTerrain/LuaAPI/sm_voxelTerrain#exportserializedchunk).

As the name implies, this is a **binary, serialized and compressed data format**.  
This data cannot be easily interacted with/modified directly from Lua - but it is **very** memory-efficient,  
which makes this type **perfect for storing to a file or transmitting over the network**.  

The format of this data is relatively simple - it starts with **raw binary voxel data**.  

#### Binary Data

The binary voxel data consists of **one byte per voxel**, which is split up to store both material and density.  
The two left-most bits are used to store the material ID, while the remaining 6 bits store the density.

```title="Voxel Byte Format"
// 8 bits per byte
| 2 Bits Material ID | 6 Bits Density |
|         00         |     000000     |
```

In a low-level language such as C++, the density and material can be easily extracted using bit shifts and masks:

```cpp
uint8_t vox = ...; // Get a voxel byte from somewhere
// Get material ID (0 - 2)
uint8_t material = vox >> 6;
// Get density (0 - 63)
uint8_t density = vox & 0b00111111;
```

:::info note
While two bits would technically allow for four material IDs, setting both bits to 1 is treated by the game the same way as if both bits were 0.
:::

To index such a binary data array in e.g. C++, a 3D voxel index can be converted into 1D, just like the Lua version:

```cpp
uint32 VoxelIndex3To1(const i32Vec3& vChunkIndex) {
	constexpr int VoxelsPerAxis = SM::VoxelConstants::VoxelsPerChunkAxis;	// 17
	return (vChunkIndex.z + (VoxelsPerAxis * vChunkIndex.y) + ((VoxelsPerAxis * VoxelsPerAxis) * vChunkIndex.x));
}
```

#### Compression/Encoding

The next step is compression - the raw binary voxel data is simply compressed using the [LZ4](https://github.com/lz4/lz4) compression library.  
Then, the compressed data is encoded using [Base64](https://en.wikipedia.org/wiki/Base64), which is then given to Lua as a standard Lua string value.
