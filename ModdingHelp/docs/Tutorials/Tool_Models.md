---
sidebar_position: 1
title: How to make Custom Tool Models
hide_title: true
sidebar-label: 'How to make Custom Tool Models'
---

import ReactPlayer from 'react-player/youtube'

### How to make Custom Tool Models

This page provides a detailed walkthrough on how to create a mod with <br></br>
a custom handheld tool model by modifying an existing one.

In this example we will create a modified version of the gatling gun <br></br>
and add a duck statue to one of its barrels.

Now, even though this example only shows one specific thing (the gatling gun), <br></br>
the knowledge from this can be applied to most other tool models without any problems.

An example mod that was created for this tutorial is linked at the bottom. <br></br>
If you did everything right, at the end your mod should have the same content as the example mod.

### Table of Contents

 - [Required Resources](#required-resources) - Things you need to follow this tutorial
 - [Creating an example Mod](#creating-an-example-mod) - Creating the mod that will contain the custom tool
 - [Creating the required Files](#creating-the-required-files) - Copying/creating important files and folders
 - [Preparing the files](#creating-the-required-files) - Preparing the created files
    - [The Lua Script](#the-lua-script) - Preparing the tool's Lua script
    - [The renderables](#the-renderables) - Preparing the renderable files
 - [Editing the model](#editing-the-model) - Making changes to the gatling gun's barrel model
    - [Converting to FBX](#converting-to-fbx) - Converting the DAE model to FBX
    - [Loading and editing it in Blender](#converting-to-fbx) - Loading it in Blender and making changes to it
        - [Importing the model](#importing-the-gun-barrel) - Importing the model
        - [Adding the duck](#adding-the-duck) - Adding the duck to the barrel
        - [The important part](#the-important-part) - What comes next is very important
            - [Checking the UV Map(s)](#checking-the-uv-maps) - Making sure the UV Map is correct
            - [Joining the models](#joining-the-models) - **Properly** joining the duck and barrel together
 - [Exporting the model and fixing the DAE](#exporting-the-model-and-fixing-the-dae) - Exporting the model properly
    - [Converting it again](#converting-it-again) - Converting it back to DAE
    - [Fixing the DAE](#fixing-the-dae) - Editing the converted DAE to make it work
 - [Setting up the renderables](#setting-up-the-renderables) - Setting up the gun's renderable files
 - [Creating a preview model and renderable](#creating-a-preview-model-and-renderable) - Creating the inventory preview
    - [Creating the preview model](#creating-the-preview-model) - Creating the model for the preview
 - [Setting up the preview renderable](#setting-up-the-preview-renderable) - Setting up the inventory preview renderable
 - [Adding a name, description and icon](#adding-a-name-description-and-icon) - Creating the inventory description and icon
    - [The name and description](#the-name-and-description) - Adding the name and description
    - [The icon](#the-icon) - Creating the icon
 - [Some problems and their causes](#some-problems-and-their-causes) - Some problems and possible causes for them


### Required Resources

 - [Scrap Mechanic](https://store.steampowered.com/app/387990/)
 - Scrap Mechanic Mod Tool
 - [Blender](https://www.blender.org/)
 - [Visual Studio](https://visualstudio.microsoft.com/), [VS Code](https://code.visualstudio.com/) or any other program that can edit **and format** XML files. <br></br>
	NOTE - Do **NOT** try to use an "online XML formatter" website, it *will* cause problems.
 - [Autodesk FBX Converter](https://www.autodesk.com/developer-network/platform-technologies/fbx-converter-archives)
 - Basic knowledge of JSON and XML files/data structure

| Game Files |
| ----------- |
| Scrap Mechanic/Data/Character/Char_Tools/char_spudgun_spinner_preview.rend |
| Scrap Mechanic/Data/Character/Char_Tools/Char_spudgun/char_spudgun_spinner_preview.fbx |
| Scrap Mechanic/Data/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner.rend |
| Scrap Mechanic/Data/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner_geo.dae |
| Scrap Mechanic/Data/Objects/Mesh/decor/obj_decor_babyduck.fbx |
| Scrap Mechanic/Survival/Scripts/game/tools/PotatoGatling.lua |

### Creating an example Mod

The first thing we need to do to add a custom tool is, create a mod that will contain the tool.

In this example we're creating a <code>Blocks & Parts</code> mod but the process is basically the same for custom games.

To do this, launch the Scrap Mechanic Mod Tool and, at the top left, click on <code>File</code>, <code>New Mod</code>, <code>Blocks & Parts</code>.

![Image of Mod Tool](/img/ModTool_createMod.png)

After creating the mod, open its folder by clicking on <code>File</code> on the left, then <code>Open Folder</code>.

![Image of Mod Tool](/img/ModTool_openMod.png)

The opened folder should look like this:

![Image of Mod](/img/Mod_files.png)

### Creating the required Files

In this folder, we now need to add some folders and files:

First, create a folder called <code>Scripts</code> and copy <br></br>
this file from the game: <code>Scrap Mechanic/Survival/Scripts/game/tools/PotatoGatling.lua</code> <br></br>
into that folder. <br></br>

Then, create a folder called <code>Tools</code> inside the main mod folder. <br></br>
Inside the <code>Tools</code> folder, create two new folders called <code>Database</code> and <code>ExampleGun</code>.

Open the <code>Database</code> folder and inside it, create a folder <br></br>
called <code>ToolSets</code> and a file called <code>toolsets.tooldb</code>.

Open the <code>toolsets.tooldb</code> file in any editor that can work with JSON and <br></br>
copy/paste the following data into it:

```json
{
  "toolSetList": [ "$CONTENT_DATA/Tools/Database/ToolSets/tools.json" ]
}
```

After that, open the <code>ToolSets</code> folder you created and inside it, create <br></br>
a file called <code>tools.json</code>. <br></br>
Then, open the created file and copy/paste this data into it:

```json
{
	"toolList": [
		{
			"uuid": "00000000-0000-0000-0000-000000000000",
			"previewRenderable": "$CONTENT_DATA/Tools/ExampleGun/ExampleGun_preview.rend",
			"previewRotation": [ 1, 0, 0, 0, -1, 0, 0, 0, -1 ],
			"script": {
				"file": "$CONTENT_DATA/Scripts/ExampleGun.lua",
				"class": "ExampleGun"
			}
		}
	]
}
```

:::info note
The UUID above is a nil UUID and you need to replace it with a new one before continuing. <br></br>
A new UUID can be generated in the mod tool or on https://uuidgenerator.net.
:::

Now, go back to the <code>Tools</code> folder and open the <code>ExampleGun</code> folder you created in it.

Copy the following files from the game into the <code>ExampleGun</code> folder:

 - <code>Scrap Mechanic/Data/Character/Char_Tools/char_spudgun_spinner_preview.rend</code>
 - <code>Scrap Mechanic/Data/Character/Char_Tools/Char_spudgun/char_spudgun_spinner_preview.fbx</code>
 - <code>Scrap Mechanic/Data/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner.rend</code>
 - <code>Scrap Mechanic/Data/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner_geo.dae</code>

### Preparing the files

Now we have to prepare some of the created files so they work properly later.

#### The Lua script

Let's prepare the Lua script first:

Open the <code>Scripts</code> folder in your mod, rename the <code>PotatoGatling.lua</code> file
inside it to <code>ExampleGun.lua</code> and open it in any text/code editor.

Replace **all instances** of <code>PotatoGatling</code> in the file with <code>ExampleGun</code>.

At the top of the file there should be a table setting the gun's renderables, like this:

```lua
local renderables = {
	"$GAME_DATA/Character/Char_Tools/Char_spudgun/Base/char_spudgun_base_basic.rend",
	"$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner.rend",
	"$GAME_DATA/Character/Char_Tools/Char_spudgun/Sight/Sight_spinner/char_spudgun_sight_spinner.rend",
	"$GAME_DATA/Character/Char_Tools/Char_spudgun/Stock/Stock_broom/char_spudgun_stock_broom.rend",
	"$GAME_DATA/Character/Char_Tools/Char_spudgun/Tank/Tank_basic/char_spudgun_tank_basic.rend"
}
```

Since we only want to modify the barrel of the gun, we only replace the barrel renderable: <br></br>
<code>"$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner.rend",</code> <br></br>

with our own renderable: <br></br>
<code>"$CONTENT_DATA/Tools/ExampleGun/ExampleGun_barrel.rend",</code>

It should now look like this:

```lua
local renderables = {
	"$GAME_DATA/Character/Char_Tools/Char_spudgun/Base/char_spudgun_base_basic.rend",
	"$CONTENT_DATA/Tools/ExampleGun/ExampleGun_barrel.rend",
	"$GAME_DATA/Character/Char_Tools/Char_spudgun/Sight/Sight_spinner/char_spudgun_sight_spinner.rend",
	"$GAME_DATA/Character/Char_Tools/Char_spudgun/Stock/Stock_broom/char_spudgun_stock_broom.rend",
	"$GAME_DATA/Character/Char_Tools/Char_spudgun/Tank/Tank_basic/char_spudgun_tank_basic.rend"
}
```

#### The renderables

Now we need to prepare the renderable files that we set up in our <code>tools.json</code> and <code>ExampleGun.lua</code>.

Open the <code>Tools/ExampleGun/</code> folder in your mod folder.

In there, rename the following files:

 - <code>char_spudgun_spinner_preview.rend</code>
 - <code>char_spudgun_spinner_preview.fbx</code>
 - <code>char_spudgun_barrel_spinner.rend</code>

to these, in the same order (leave <code>char_spudgun_barrel_spinner_geo.dae</code> the way it is):

 - <code>ExampleGun_preview.rend</code>
 - <code>ExampleGun_preview.fbx</code>
 - <code>ExampleGun_barrel.rend</code>

We'll go about setting up those renderable files *later*, as we first have to actually <br></br>
make our changes to the barrel model before we can add them to the renderable.

### Editing the model

Preparing the files was the *easy* part - Editing the actual model is a little bit harder.

#### Converting to FBX

To change the gun's barrel, we need to edit the model in the <code>char_spudgun_barrel_spinner_geo.dae</code> file.

However, we can't import this file in blender as-is, as it will not load/render properly. <br></br>
To load the model in blender, we first have to convert it to FBX using the **Autodesk FBX Converter** tool.

To do this, launch FBX Converter, drag + drop the <code>char_spudgun_barrel_spinner_geo.dae</code> file into the <br></br>
left ("Source files") box, make sure the output format is set to FBX in "Binary" Save Mode (as shown below) <br></br>
and click on <code>Convert</code>.

![Image of FBX Converter](/img/FBXConverter_1.png)

This should generate a <code>char_spudgun_barrel_spinner_geo.fbx</code> file in the same folder.

#### Loading and editing it in Blender

First, launch blender and delete the default objects that are there.

#### Importing the gun barrel

Then, click on <code>File</code> (at the top left), then <code>Import</code>, then <code>FBX</code>. <br></br>
Open the <code>Tools/ExampleGun/</code> folder in Blender and import the generated <code>char_spudgun_barrel_spinner_geo.fbx</code> file.

![Image of Blender](/img/Blender_1.png)

Next, on the right side, expand all objects at the top (this will help later) and, <br></br>
in the middle, set the <code>Scale</code> for all 3 axis to <code>1.000</code>. <br></br>
You might have to zoom out quite a bit after this.

![Image of Blender](/img/Blender_2.png)

Now we can edit the barrel in any way we want (just be careful not to mess up the bones or armature).

#### Adding the duck

In this example, we're going to add a duck statue to the barrel:

First, import the duck's model (<code>Scrap Mechanic/Data/Objects/Mesh/decor/obj_decor_babyduck.fbx</code>)
the same way you imported the gun barrel (File - Import - FBX, select model file, import).

After importing, the list at the top right should look like this:

![Image of Blender](/img/Blender_3.png)

You can now do anything you want with the duck's model, in this example we'll place it on the barrel.

Select the duck in the top right list, then set it's <code>Scale</code> to <code>0.5</code> in all 3 axis. <br></br>
The duck should now become visible at the center:

![Image of Blender](/img/Blender_4.png)

We can now move the duck up and onto the barrel, like this:

![Image of Blender](/img/Blender_5.png)

#### The important part

Now comes the most important part - **properly** joining the duck to the barrel! <br></br>
If you do this wrong, the game may crash when loading the mod or the barrel will simply <br></br>
disappear from the gun while spamming your dev console with hundreds of (useless!) error messages.

#### Checking the UV Map(s)

Before we can join anything together, we first have to make sure the UV maps are <br></br>
named correctly. If they are not named correctly, they will get lost when joining <br></br>
the models, which will cause the textures to not work.

First, click on the barrel to select it, then open the <code>Object Data Properties</code> on the right.

In there, open the <code>UV Maps</code> tab, double click the active UV map and copy its name.

![Image of Blender](/img/Blender_13.png)

Now we do the same thing with the duck, except instead of copying its UV map name, <br></br>
we **replace** the name with the name of the *barrel's* UV map (which we copied in the previous step). <br></br>
The UV map of the duck **must** have the **exact same name** as the UV map of the barrel!

![Image of Blender](/img/Blender_14.png)

If the UV maps have the same name, we can continue with joining the models together.

#### Joining the models

We have to join the duck's model to the barrel's model and assign the duck's vertices <br></br>
to the barrel's vertex group (jnt_barrel).

First, let's join the duck's model to the barrel's model.

To do so, first make sure blender is in <code>Object Mode</code> (at the top left).

Then, hold <code>Shift</code> and while holding it, **first** select the duck (left click on it), **then** the barrel.

:::warning
The **order** in which you select the objects is **extremely important**! <br></br>
You have to **first** select your added object(s) (the duck in this case) and select the barrel **last**!

If you do this wrong, the objects will not join properly and the model won't work in the game.
:::

The duck's model should now have a red outline, while the barrel's outline is orange:

![Image of Blender](/img/Blender_6.png)

Now, release <code>Shift</code>, right-click and click on <code>Join</code>. <br></br>
The list at the top right should now update to look like this:

![Image of Blender](/img/Blender_7_1.png)

:::caution warning
If it looks like this, that is WRONG and will NOT WORK! <br></br>
You probably joined the models wrong. Un-do with ctrl + z and try again.

![Image of Blender](/img/Blender_7_2.png)
:::

Next, we have to assign the duck's vertices to the barrel's vertex group.

For this, first switch into <code>Edit Mode</code>. <br></br>
Then, open the vertex group menu by either clicking the icon in the list at the top right <br></br>
or by clicking the <code>Object Data Properties</code> button below.

![Image of Blender](/img/Blender_8.png)

Now, select all vertices by clicking on <code>Select</code>, then <code>All</code> at the top left (or by pressing <code>A</code>).

With all vertices selected, click the <code>Assign</code> button in the vertex group menu.

![Image of Blender](/img/Blender_9.png)

If you now un-select all vertices (click anywhere) and click the <code>Select</code> button <br></br>
in the vertex group menu, everything should become selected.


Last but not least, we should check the material names to make sure they all have a proper name.

You can do this by simply looking in the list at the top right. <br></br>
In this case, we have <code>barrel_spinner_mat.001</code> and <code>blinn1</code>:

![Image of Blender](/img/Blender_11.png)

Let's rename those to something a bit better, in this case <code>barrel</code> and <code>duck</code>. <br></br>
You can rename a material by simply double-clicking on it. <br></br>
NOTE - You should write these names down somewhere - we need them for the renderables later.

![Image of Blender](/img/Blender_12.png)

### Exporting the model and fixing the DAE

Now that we've edited the barrel the way we want it to be, we have to export the new model.

At the top right, click on <code>File</code>, then <code>Export</code>, then <code>FBX</code>. <br></br>
In this window, once again open the <code>Tools/ExampleGun/</code> folder.

Set the file name to <code>ExampleGun_barrel.fbx</code>.

Now, set the export settings as shown below - In the <code>Transform</code> tab, set <code>Scale</code> to <code>0.010</code> <br></br>
and **enable** <code>Apply Transform</code>. In the <code>Armature</code> tab, make sure that <code>Add Leaf Bones</code> is **disabled**.

![Image of Blender](/img/Blender_10.png)

After exporting, we should have an <code>ExampleGun_barrel.fbx</code> file in our <code>Tools/ExampleGun/</code> folder.

#### Converting it again

To load this file in the game, we have to convert it again using FBX Converter.

Launch FBX Converter and drag/drop the <code>ExampleGun_barrel.fbx</code> file into the left box.

This time, we need to set the output format to <code>DAE Collada</code> before converting:

![Image of FBX Converter](/img/FBXConverter_2.png)

After converting, we should have an <code>ExampleGun_barrel.dae</code> file in our <code>Tools/ExampleGun/</code> folder.

#### Fixing the DAE

We now need to slightly edit this file in order to make the game load it properly.

For that, we have to open it in Visual Studio, VS Code or any editor that supports **formatting XML files**. <br></br>
In this example, Visual Studio is used.

After opening the file, at the top left, click on <code>Edit</code>, then <code>Advanced</code>, then <code>Format Document</code>.

![Image of VS](/img/VS_1.png)

After formatting the file, scroll all the way down, then slightly up again. <br></br>
You should eventually see some <code>node</code> tags in the data.

In those nodes, there is one called <code>Armature</code>. <br></br>
We need to *delete* this node and its closing tag, else the game will not load the model correctly.

The image below shows what to look for and what you need to delete:

![Image of VS](/img/VS_2.png)

Now, we can save the file and start working on the renderables.

### Setting up the renderables

Open the file: <code>Mod/Tools/ExampleGun/ExampleGun_barrel.rend</code>.

It should look like this:

```json
{
  "lodList": [{
    "mesh": "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner_geo.dae",
    "subMeshList" : [
      {
        "textureList": [
          "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner_dif.tga",
          "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner_asg.tga",
          "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner_nor.tga"
        ],
        "color": "ffffff",
        "material": "DifAsgNor"
      }
    ],
    "animationList": [
      { "name" : "spudgun_spinner_shoot_fp", "file" : "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/ani_char_spudgun_barrel_spinner_rotation.dae", "looping" : true },
      { "name" : "spudgun_spinner_shoot_tp", "file" : "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/ani_char_spudgun_barrel_spinner_rotation.dae", "looping" : true }
    ],

    "maxViewDistance": 1000.0
  }]
}
```

We change the <code>mesh</code> entry to point to our modified model file and change <br></br>
the <code>subMeshList</code> into a <code>subMeshMap</code>.

Then, we add a subMesh entry for each object in the model - The **gun barrel** and the **duck statue**.

We have to give each subMesh entry **the same name** that we gave each object in blender. <br></br>
In this example, those are <code>barrel</code> and <code>duck</code>:

```json
{
  "lodList": [{
    "mesh": "$CONTENT_DATA/Tools/ExampleGun/ExampleGun_barrel.dae",
    "subMeshMap": {
      "barrel": {
        "textureList": [
          "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner_dif.tga",
          "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner_asg.tga",
          "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner_nor.tga"
        ],
        "color": "ffffff",
        "material": "DifAsgNor"
      },
      "duck": {
        "textureList": [
          "$GAME_DATA/Objects/Textures/decor/obj_decor_babyduck_dif.tga",
          "$GAME_DATA/Objects/Textures/decor/obj_decor_babyduck_asg.tga",
          "$GAME_DATA/Objects/Textures/decor/obj_decor_babyduck_nor.tga"
        ],
        "material": "DifAsgNor"
      }
    },
    "animationList": [
      { "name" : "spudgun_spinner_shoot_fp", "file" : "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/ani_char_spudgun_barrel_spinner_rotation.dae", "looping" : true },
      { "name" : "spudgun_spinner_shoot_tp", "file" : "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/ani_char_spudgun_barrel_spinner_rotation.dae", "looping" : true }
    ],

    "maxViewDistance": 1000.0
  }]
}
```

Then, save the file.
You can now launch the game and load a world with the mod enabled. <br></br>
If you did everything right, there should be a new tool with no icon in your inventory. <br></br>
Equip it and you should have a gatling gun with a duck on the end of the barrel!

![Image of successfully modified gun in-game](/img/SM_1.png)

Note that, in the game, the duck will be white instead of yellow. <br></br>
**This is expected** and has nothing to do with the model. <br></br>
It can be changed by simply editing the texture file for the duck.

### Creating a preview model and renderable

Now that our custom gun is in the game, we should also create a preview model and renderable <br></br>
so that the preview in the inventory shows the actual gun with the duck on it.

#### Creating the preview model

To create the preview model, we can simply modify the existing gatling gun preview that we copied at the beginning.

First, launch Blender and import the <code>Mod/Tools/ExampleGun/ExampleGun_preview.fbx</code> file <br></br>
in the same way as the model before (<code>File</code>, <code>Import</code>, <code>FBX</code>, select the file, import, set scale to 1.000).

It should look like this:

![Image of Blender](/img/Blender_15.png)

We now have 2 ways of editing this model:

 - Delete the barrel and copy the modified one from the gun model OR
 - Make the same changes to this model as we did to the gun's model

In this case, we'll go with the second option, as we made very little changes to the model <br></br>
which won't take long to apply to this model as well.

Once again, after importing the preview model and setting the scale to <code>1</code>, <br></br>
we import the duck's model and set its scale to <code>0.5</code>.

Then we move the duck to the same position on the barrel as we did before, like this:

![Image of Blender](/img/Blender_16.png)

Now, we [make sure that the UV maps have the same name](#checking-the-uv-maps), <br></br>
then we join the duck to the preview model (Hold <code>Shift</code>, select duck, select gun model, right click, click <code>join</code>). <br></br>
Keep in mind that the object selection order is important - **first** the custom object (duck), **then** the gun barrel.

The list at the top right should now look like this:

![Image of Blender](/img/Blender_17.png)

In this list, <code>blinn1</code> is the duck - let's rename it to something better. <br></br>
Double-click the <code>blinn1</code> material to rename it and change its name to <code>duck</code>.

It should now look like this:

![Image of Blender](/img/Blender_18.png)

We can now export this edited model - open the export window, open the <code>Mod/Tools/ExampleGun/</code> <br></br>
folder in it, set the export settings to the ones in the image below and export it.

![Image of Blender](/img/Blender_19.png)

### Setting up the preview renderable

Now we need to set up the renderable so the game will load our custom preview model.

Open the file <code>Mod/Tools/ExampleGun/ExampleGun_preview.rend</code> in any text/code editor.

It should look like this:

```json
{
  "lodList": [
    {
      "subMeshMap": {
        "char_spudgun_base_mat": {
          "textureList": [
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Base/char_spudgun_base_dif.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Base/char_spudgun_base_asg.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Base/char_spudgun_base_nor.tga"
          ],
          "color": "c98605",
          "material": "DifAsgNor"
        },
        "char_spudgun_grip_mat": {
          "textureList": [
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Base/char_spudgun_grip_dif.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Base/char_spudgun_grip_asg.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Base/char_spudgun_grip_nor.tga"
          ],
          "color": "c98605",
          "material": "DifAsgNor"
        },
        "barrel_spinner_mat": {
          "textureList": [
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner_dif.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner_asg.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner_nor.tga"
          ],
          "color": "78211f",
          "material": "DifAsgNor"
        },
        "sight_basic_mat": {
          "textureList": [
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Sight/Sight_basic/char_spudgun_sight_basic_dif.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Sight/Sight_basic/char_spudgun_sight_basic_asg.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Sight/Sight_basic/char_spudgun_sight_basic_nor.tga"
          ],
          "color": "78211f",
          "material": "DifAsgNor"
        },
        "stock_mat": {
          "textureList": [
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Stock/Stock_broom/char_spudgun_stock_broom_dif.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Stock/Stock_broom/char_spudgun_stock_broom_asg.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Stock/Stock_broom/char_spudgun_stock_broom_nor.tga"
          ],
          "color": "b9a263",
          "material": "DifAsgNor"
        },
        "tank_mat": {
          "textureList": [
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Tank/Tank_basic/char_spudgun_tank_basic_dif.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Tank/Tank_basic/char_spudgun_tank_basic_asg.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Tank/Tank_basic/char_spudgun_tank_basic_nor.tga"
          ],
          "color": "c98605",
          "material": "DifAsgNor"
        }
      },
      "mesh": "$GAME_DATA/Character/Char_Tools/Char_spudgun/char_spudgun_spinner_preview.fbx"
    }
  ]
}
```

Here, we have to edit the <code>mesh</code> entry to point to our modified model, <br></br>
then we add an extra <code>subMesh</code> entry for the duck that we added to the model.

Now, the file should look like this:

```json
{
  "lodList": [
    {
      "subMeshMap": {
        "char_spudgun_base_mat": {
          "textureList": [
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Base/char_spudgun_base_dif.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Base/char_spudgun_base_asg.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Base/char_spudgun_base_nor.tga"
          ],
          "color": "c98605",
          "material": "DifAsgNor"
        },
        "char_spudgun_grip_mat": {
          "textureList": [
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Base/char_spudgun_grip_dif.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Base/char_spudgun_grip_asg.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Base/char_spudgun_grip_nor.tga"
          ],
          "color": "c98605",
          "material": "DifAsgNor"
        },
        "barrel_spinner_mat": {
          "textureList": [
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner_dif.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner_asg.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Barrel/Barrel_spinner/char_spudgun_barrel_spinner_nor.tga"
          ],
          "color": "78211f",
          "material": "DifAsgNor"
        },
        "sight_basic_mat": {
          "textureList": [
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Sight/Sight_basic/char_spudgun_sight_basic_dif.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Sight/Sight_basic/char_spudgun_sight_basic_asg.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Sight/Sight_basic/char_spudgun_sight_basic_nor.tga"
          ],
          "color": "78211f",
          "material": "DifAsgNor"
        },
        "stock_mat": {
          "textureList": [
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Stock/Stock_broom/char_spudgun_stock_broom_dif.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Stock/Stock_broom/char_spudgun_stock_broom_asg.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Stock/Stock_broom/char_spudgun_stock_broom_nor.tga"
          ],
          "color": "b9a263",
          "material": "DifAsgNor"
        },
        "tank_mat": {
          "textureList": [
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Tank/Tank_basic/char_spudgun_tank_basic_dif.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Tank/Tank_basic/char_spudgun_tank_basic_asg.tga",
            "$GAME_DATA/Character/Char_Tools/Char_spudgun/Tank/Tank_basic/char_spudgun_tank_basic_nor.tga"
          ],
          "color": "c98605",
          "material": "DifAsgNor"
        },

        "duck": {
          "textureList": [
            "$GAME_DATA/Objects/Textures/decor/obj_decor_babyduck_dif.tga",
            "$GAME_DATA/Objects/Textures/decor/obj_decor_babyduck_asg.tga",
            "$GAME_DATA/Objects/Textures/decor/obj_decor_babyduck_nor.tga"
          ],
          "color": "ffd504",
          "material": "DifAsgNor"
        }
      },
      "mesh": "$CONTENT_DATA/Tools/ExampleGun/ExampleGun_preview_edited.fbx"
    }
  ]
}
```

You can save the file like this and launch the game again. <br></br>
If you did it right, when you hover over the tool in the inventory, it should now show the duck on the gun.

![Image of SM](/img/SM_2.png)

### Adding a name, description and icon

Last but not least, we should add a name, description and inventory icon to our custom gun <br></br>
so it's no longer invisible in the inventory and has a proper name/description.

#### The name and description

Let's first add the inventory description.

Open the file: <code>Mod/Gui/Language/English/inventoryDescriptions.json</code> in any text/code editor.

If you created a new mod, it should only contain a simple <code>{}</code>.

Lets assume we want to give our gun the following information:

 - Name: <code>Example Gun</code>
 - Description: <code>A gatling gun with a duck on the barrel, created as an example for the custom tool models tutorial.</code>

Adding this is very easy. All we need is the UUID that we gave the gun in the beginning, the name and the description.

Add them to the file like this:

```json
{
  "00000000-0000-0000-0000-000000000000": {
    "title": "Example Gun",
    "description": "A gatling gun with a duck on the barrel, created as an example for the custom tool models tutorial."
  }
}
```

<code>title</code> = The name of the gun that is shown in the inventory. <br></br>
<code>description</code> = The description of the gun in the inventory.

:::info note
The UUID above is a nil UUID, you need to replace it with the UUID you gave the gun at the beginning.
:::

#### The icon

To generate the inventory icon, we need to launch the mod tool and open our mod in it.

Then, at the top left, click on <code>Share</code>. <br></br>
In the share menu, open the <code>ICONS</code> tab and click on <code>Create Icons</code>. <br></br>
Make sure that the <code>Custom Icons</code> box is **not** checked.

![Image of Mod Tool](/img/ModTool_createIcons.png)

Now, we should check a last time that everything is working and being displayed properly in the game.

Launch the game, equip the gun, look at it in the inventory, etc.

It should look like this:

![Image of SM](/img/SM_3.png)
![Image of SM](/img/SM_5.png)
![Image of SM](/img/SM_4.png)

If this is the case, you have successfully created a custom tool model! <br></br>
You can now apply the things you learned in this tutorial to any other tool model(s), <br></br>
they should work the same or very similar to what was shown here.

### Some problems and their causes

Below are some specific issues that may occur and possible causes for them.

Most of these issues are usually accompanied by the modified part of the model or the <br></br>
entire model simply not appearing in the game, while the dev console logs some errors.

#### The game crashes when I load the mod!

You probably [edited/joined the model(s)](#loading-and-editing-it-in-blender) wrong or [deleted the](#fixing-the-dae) <code>Armature</code> [node in the DAE](#fixing-the-dae) incorrectly.

#### ERROR: ...\Skeleton.cpp:177 Could not find root bone: 'Armature' in previously loaded bones

You [deleted the](#fixing-the-dae) <code>Armature</code> [node in the DAE](#fixing-the-dae) incorrectly.

#### ERROR: ...Can't find joint: pejnt_barrel (being spammed)

You probably [deleted the](#fixing-the-dae) <code>Armature</code> [node in the DAE](#fixing-the-dae) incorrectly or [edited/joined the model(s)](#loading-and-editing-it-in-blender) wrong.

#### The duck is just brown/The texture of my added part isn't loading properly

You probably didn't [rename the UV Map(s)](#checking-the-uv-maps) properly.

#### The new model loads fine, but the added part (e.g. duck) is missing

You probably forgot/failed to [add the subMesh entry to the renderable](#setting-up-the-renderables) properly.

### Example Mod Download

Here you can download the example mod that was used to explain everything above. <br></br>
It contains all required and edited files, exactly the way it's written above. <br></br>
Feel free to use any part of this mod for your own mod(s).

You can download the mod as ZIP or subscribe to it on the Steam workshop.

[Download ZIP](/files/Custom_Tool_Models_Example.zip)

[Steam Workshop (Browser)](https://steamcommunity.com/sharedfiles/filedetails/?id=2826720813) <br></br>
[Steam Workshop (Steam Client)](steam://openurl/https://steamcommunity.com/sharedfiles/filedetails/?id=2826720813)

### Special thanks

Special thanks to <code>Holesmak</code> for creating this tutorial video - it <br></br>
was very helpful while creating this explanation!

<ReactPlayer controls url='https://www.youtube.com/watch?v=C6pzQFC8ANw' />
