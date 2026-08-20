---
sidebar_position: 1
title: WorldClass Members
hide_title: true
---

<br></br>

The VoxelTerrain DLL re-enables some hidden constants in the [WorldClass](https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass) script class.  
These are documented below.

### WorldClass Constants

- `World.renderMode` (string)  
Sets the render mode of the world.  
By default, only `"outdoor"`, `"challenge"` and `"warehouse"` are available.  
However, there is a hidden extra mode - as this mode removes the sun/skybox,  
the assumption is that it is intended for an underground cave world,  
so the VoxelTerrain DLL exposes this mode as `"underground"`.

- `World.enableVoxelTerrain` (boolean)  
Sets whether voxel terrain features are enabled for this world or not.  
This decides whether or not the [terrain script callback](/VoxelTerrain/LuaAPI/GetVoxelTerrainForCell) to generate terrain chunks is  
called and also affects the functionality of the various [voxel spawning functions](/VoxelTerrain/LuaAPI/sm_voxelTerrain#createsphereat).  
**This defaults to `true`.**

- `World.voxelMaterialSet` (string)  
Sets the file path to the ground material set to be used by the voxel terrain.  
Defaults to `"$CONTENT_1cf785ff-18e3-40f9-89b5-d7816bf835f4/VoxelMeshes/Materials/voxel_materialset_standard.json"`
([VoxelTerrain Helper](https://steamcommunity.com/sharedfiles/filedetails/?id=3575302032) mod).  
If the helper mod is not available, it will instead default to a very obvious error material.


:::caution warning
**`World.enableVoxelTerrain` is incompatible with `World.isStatic` and `World.isIndoor`!**  
To use voxel terrain, both `World.isStatic` **and** `World.isIndoor` **must** be `false`.  
If voxel terrain is enabled together with either one of these, voxel terrain features may  
not function properly and a warning message will be logged to the developer console.  
This was necessary to avoid some technical issues in the voxel terrain implementation.
:::
