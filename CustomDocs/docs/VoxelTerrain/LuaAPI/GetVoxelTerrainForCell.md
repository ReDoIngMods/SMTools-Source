---
sidebar_position: 7
title: GetVoxelTerrainForCell
hide_title: true
---

<br></br>

While the custom [sm.voxelTerrain](/VoxelTerrain/LuaAPI/sm_voxelTerrain) library allows for spawning voxel terrain at runtime,  
the **official** way is through a callback in the **terrain script**.

This callback is called `GetVoxelTerrainForCell` and is actually available in vanilla SM!  
However, as the voxel libraries are empty in vanilla, the callback cannot perform any useful action by default.

With the VoxelTerrain DLL though, the [sm.voxelTerrainGrid](/VoxelTerrain/LuaAPI/sm_voxelTerrainGrid) library *does* contain functions  
which exist specifically to generate voxel terrain chunks using `GetVoxelTerrainForCell`.

---

### GetVoxelTerrainForCell

```lua
function GetVoxelTerrainForCell(cellX, cellY)
	-- code here
end
```

Called by the terrain generator to generate voxel terrain chunks for the terrain cell at the given cell index.

[sm.voxelTerrainGrid](/VoxelTerrain/LuaAPI/sm_voxelTerrainGrid) API functions can only be used in the context of this callback.

Unlike other terrain callbacks, this one **does not use a return value** to receive the chunk data.  
Instead, the [createChunk](/VoxelTerrain/LuaAPI/sm_voxelTerrainGrid#createchunk) and/or [createSerializedChunk](/VoxelTerrain/LuaAPI/sm_voxelTerrainGrid#createserializedchunk) functions must be used.

Note that any chunks generated here **must** be located inside the [cell chunk index bounds](/VoxelTerrain/LuaAPI/sm_voxelTerrainGrid#getchunkindexbounds) for this cell.  
Creating a chunk outside of these bounds is considered to be an error.

As for generating the actual voxel data in the chunks,  
consider researching **noise-based procedural voxel terrain generation**.  
Some alternative methods also include, but are not limited to:
- Pre-generating raw voxel chunk data using external software and importing it through e.g. sm.json
- Manually designing a world using the [sm.voxelTerrain](/VoxelTerrain/LuaAPI/sm_voxelTerrain) APIs, exporting its chunks and re-importing them

:::info note
This is a one-shot callback - it is only ever called **one single time** for each terrain cell in the world,  
when that cell is generated for the very first time.  
**It is never called more than once for any given unique cell index**, even if the cell is reloaded,  
the save file is reloaded or even the entire game restarted.  
Once any given cell has been generated, the terrain script cannot make any further changes to the chunks in that cell.
:::

