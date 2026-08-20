---
sidebar_position: 2
title: Voxel Material Set
hide_title: true
---

<br></br>

In order to give the voxel terrain a texture, you need to define a **Voxel Material Set**.  

This is very similar to the normal terrain material set (e.g. `SM/Data/Terrain/Materials/gnd_flat_materialset.json`)  
and defines the materials for the terrain and the textures that each material will use.  

**However**, *unlike* the normal terrain, a *voxel* material set only allows exactly 3 (three) materials.  
This is mainly due to a limitation in the game's rendering code, which is hardcoded to three material textures.

:::info note
If no voxel material set is defined in the Lua world script, the DLL will default to a standard  
material set found in the [VoxelTerrain Helper](https://steamcommunity.com/sharedfiles/filedetails/?id=3575302032) workshop mod.  
If this mod is not loaded, the DLL will fallback to an 'error' material using the game's own error texture.  
If this fallback fails as well, the terrain will render completely black.
:::

### File Locations

Voxel material set files should be placed in the `VoxelMeshes/Materials/` directory in custom content.  
Example: `$CONTENT_DATA/VoxelMeshes/Materials/voxel_materialset_dirt.json`

Additionally, a `voxel_materialset_list.json` file should be placed in the same directory with the format shown below.  
This file is not used by the DLL but, based on hints found in the game, might be used in a future game update,  
so adding it will likely reduce the amount of work needed to port mods using this DLL over to the official  
voxel terrain implementation whenever it releases.

### File Formats

#### Material Set List

```json title=voxel_materialset_list.json
{
	// Array of material sets to register
	"materialSetList": [
		{
			// Name of this material set in the tile editor (not yet supported in the DLL)
			"name": "Grass",
			// File name/path to the materialset file. May be relative to the list file.
			"materialSet": "voxel_materialset_grass.json"
		},
		{
			"name": "Stone",
			"materialSet": "voxel_materialset_stone.json"
		}
		// Add more material sets here...
	]
}
```

---



#### Material Set

```json title=voxel_materialset_grass.json
{
	"groundMaterials": {
		// Width/Height of the textures. The textures should all match this size.
		"width": 1024,
		"height": 1024,
		// Array of materials
		"textures": [
			{
				// Name of the material in the tile editor (not yet supported in the DLL)
				"name": "Weeds",
				// Diffuse (color) texture path
				"diffuse": "$GAME_DATA/Terrain/Textures/Ground/gnd_4_dif.tga",
				// ASG (Alpha/Spec/Glow) texture path
				"asgMap": "$GAME_DATA/Terrain/Textures/Ground/gnd_4_asg.tga",
				// Normal map texture path
				"normalMap": "$GAME_DATA/Terrain/Textures/Ground/gnd_4_nor.tga"
			},
			{
				"name": "Bright grass",
				"diffuse": "$GAME_DATA/Terrain/Textures/Ground/gnd_7_dif.tga",
				"asgMap": "$GAME_DATA/Terrain/Textures/Ground/gnd_7_asg.tga",
				"normalMap": "$GAME_DATA/Terrain/Textures/Ground/gnd_7_nor.tga"
			},
			{
				"name": "Grass",
				"diffuse": "$GAME_DATA/Terrain/Textures/Ground/gnd_grass_dif.tga",
				"asgMap": "$GAME_DATA/Terrain/Textures/Ground/gnd_grass_asg.tga",
				"normalMap": "$GAME_DATA/Terrain/Textures/Ground/gnd_grass_nor.tga"
			}
			// Must have exactly three materials - not more, not less!
		]
	}
}
```
