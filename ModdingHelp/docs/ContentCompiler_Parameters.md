---
sidebar_position: 9
title: Content Compiler Parameters
hide_title: true
sidebar-label: 'Content Compiler Parameters'
---

### Content Compiler Parameters

The Scrap Mechanic Content Compiler is a program found in the Scrap Mechanic Release folder. <br></br>
It is used by the mod tool to generate part icons for mods, but it can do a bit more than that! <br></br>
These extra functions can be used by starting the compiler from a terminal and adding certain <br></br>
launch parameters, e.g. <code>ContentCompiler.exe --highres</code>. These parameters are documented below. <br></br>

---

### --ugc

``` title="Usage Example"
ContentCompiler.exe --ugc="C:/path/to/Your Mod"
```
By default, the content compiler generates icons from the game's own files. <br></br>
Using this parameter, the compiler can be directed to a mod instead (the mod tool does this when generating icons). <br></br>
The given file path points to the root folder of the target mod.

---

### --cache
``` title="Usage Example"
ContentCompiler.exe --cache
```
Regenerates the texture cache files in the <code>Cache/Textures</code> folder. <br></br>
This parameter is used by the mod tool when the <code>Upload to Steam</code> button is clicked.

---

### --voxelmesh

``` title="Usage Example"
ContentCompiler.exe --voxelmesh
```
Currently this parameter seems to do nothing. <br></br>
It is a valid parameter though, as the compiler recognizes it and behaves different. <br></br>
This parameter is probably related to Chapter 2's Voxel Terrain.

---

### --prefab

``` title="Usage Example"
ContentCompiler.exe --prefab
ContentCompiler.exe --prefab --ugc="C:/path/to/Your Mod"
```
Generates prefab icons. <br></br>
The icons are saved to <code>Gui/PrefabIcons/</code>.

:::info note
This parameter can be combined with the [--ugc](#--ugc) parameter to generate prefab icons for mods. <br></br>
When generating prefab icons for a mod, the icons are saved in the mod's <code>Gui/PrefabIcons/</code> folder, not in the game files.
:::
---

### --blueprint

``` title="Usage Example"
ContentCompiler.exe --blueprint
ContentCompiler.exe --blueprint --ugc="C:/path/to/Your Mod"
```
Generates blueprint icons, for blueprints in the <code>Survival/LocalBlueprints/</code> folder. <br></br>
The icons are saved to <code>Gui/BlueprintIcons/</code>. <br></br>
This parameter might be combine-able with the [--ugc](#--ugc) parameter to generate blueprint icons for mods, though this was not tested.

---

### --create-atlas

``` title="Usage Example"
ContentCompiler.exe --create-atlas --input="../...." --output="../...."
```
Generates an icon atlas. <br></br>
This parameter requires the [--input](#--input) and [--output](#--output) parameters to be present. <br></br>
Further details on what exactly this does are not available as the compiler kept crashing <br></br>
while trying to test out the parameter and no proper result was generated. <br></br>

During testing, pointing the [--input](#--input) parameter to <code>--input="../Data/Gui/"</code> and the [--output](#--output) parameter <br></br>
to <code>--output="../test.png"</code> generated the most activity before crashing with an access violation error.

---

### --highres

``` title="Usage Example"
ContentCompiler.exe --highres
ContentCompiler.exe --highres --ugc="C:/path/to/Your Mod"
```
Generates a high-resolution icon image of each block, part and tool in the game's files. <br></br>
Each icon is saved as a separate 1024x1024p image in the <code>Scrap Mechanic/Cache/IconExport/</code> folder. <br></br>

:::info note
This parameter can be combined with the [--ugc](#--ugc) parameter to generate high-resolution icons for mods.

When generating high-resolution icons for a mod, the generated icons are still saved in the <code>Scrap Mechanic/Cache/IconExport/</code> folder, *not* in the mod's folder.
:::

---

### --dont-overwrite-icons

``` title="Usage Example"
ContentCompiler.exe --dont-overwrite-icons
```
Skips icons that were already generated. <br></br>
It is not confirmed whether this actually works, though it did seem to speed up the process a bit when testing.

---

### --input

``` title="Usage Example"
ContentCompiler.exe --(other parameter) --input="../...."
```
The input file or folder parameter. <br></br>
This parameter is required when using the [--create-atlas](#--create-atlas) parameter. <br></br>
**The file path is relative to the ContentCompiler.exe.**

---

### --output

``` title="Usage Example"
ContentCompiler.exe --(other parameter) --output="../...."
```
The output file or folder parameter. <br></br>
This parameter is required when using the [--create-atlas](#--create-atlas) or [--customization](#--customization) parameter. <br></br>
**The file path is relative to the ContentCompiler.exe.**

---

### --customization

``` title="Usage Example"
ContentCompiler.exe --customization --output="../...."
```
This parameter is likely used to create character customization (outfit) icons. <br></br>
It requires a <code>customization-icon-settings.json</code> file to be present in the <code>Scrap Mechanic</code> folder and <br></br>
the [--output](#--output) parameter to point to a folder **relative to the ContentCompiler.exe**. <br></br>

The <code>customization-icon-settings.json</code> may contain the following settings:
```json title="Settings"
{
	"options": {
		//"Face" = the outfit category name in Data/Character/customization_options.json
		"Face": {
			//A cubemap, but for what? Also not sure if the path is correct.
			"cubemap": "$SURVIVAL_DATA/Lighting/CubeMaps/Cubemap_outfits/cubemap_outfits_up.tga",
			//The FOV used for the icon.
			"fov": 50,
			//The center of the icon(?)
			"center": {
				"x": 0,
				"y": 0,
				"z": 0
			},
			//Settings for a light source
			"lightDir0": {
				"x": 0,
				"y": 0,
				"z": 0
			},
			"lightIntensity0": 100,
			"lightColor0": {
				"r": 0.5,
				"g": 0.5,
				"b": 0.5
			},
			//Settings for a second light source
			"lightDir1": {
				"x": 0,
				"y": 0,
				"z": 0
			},
			"lightIntensity1": 100,
			"lightColor1": {
				"r": 0.5,
				"g": 0.5,
				"b": 0.5
			},
			//A preview for something, not sure what. Also not sure what this parameter is supposed to be.
			"preview": "?",
			//An effect for something? Not sure what this parameter is supposed to be.
			"effect": "CustomizationRenderable",
			//Maybe the camera position or direction
			"eye": {
				"x": 0,
				"y": 0,
				"z": 0
			},
			//Very likely a pose name from Data/Character/Char_Male/Animations/char_male_outfitposes.rend
			"pose": "Facepose"
		}
	}
}
```

:::info note
How exactly the settings work is currently not fully known. <br></br>
When used as above or with various changes applies, the compiler only generates a completely <br></br>
empty, fully transparent image with all pixels set to black (#00000000) for each outfit. <br></br>
:::

---

### --asset

``` title="Usage Example"
ContentCompiler.exe --asset
ContentCompiler.exe --asset --ugc="C:/path/to/Your Mod"
```
Generates terrain asset icons. <br></br>
The icons are saved to <code>Gui/AssetIcons/</code>.

:::info note
This parameter can be combined with the [--ugc](#--ugc) parameter to generate asset icons for mods. <br></br>
When generating asset icons for a mod, the icons are saved in the mod's <code>Gui/AssetIcons/</code> folder, not in the game files.
:::

### --harvestable

``` title="Usage Example"
ContentCompiler.exe --harvestable
ContentCompiler.exe --harvestable --ugc="C:/path/to/Your Mod"
```
Generates harvestable icons. <br></br>
The icons are saved to <code>Gui/HarvestableIcons/</code>.

:::info note
This parameter can be combined with the [--ugc](#--ugc) parameter to generate harvestable icons for mods. <br></br>
When generating harvestable icons for a mod, the icons are saved in the mod's <code>Gui/HarvestableIcons/</code> folder, not in the game files.
:::

### --node

``` title="Usage Example"
ContentCompiler.exe --node
ContentCompiler.exe --node --ugc="C:/path/to/Your Mod"
```
Generates node icons. <br></br>
The icons are saved to <code>Gui/NodeIcons/</code>.

:::info note
This parameter can be combined with the [--ugc](#--ugc) parameter to generate node icons for mods. <br></br>
When generating node icons for a mod, the icons are saved in the mod's <code>Gui/NodeIcons/</code> folder, not in the game files.
:::


