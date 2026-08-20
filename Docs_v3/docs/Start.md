---
sidebar_position: 1
title: Introduction
hide_title: true
sidebar-label: 'Introduction'
slug: /
---

### Introduction

Welcome!

This is an improved version of the Scrap Mechanic Lua API Reference at https://scrapmechanic.com/api/index.html.

In this documentation, you will find details specific to Scrap Mechanic's Lua scripting features.  
For more general information on how the Lua scripting language works, you can review the official Lua documentation.  

Scrap Mechanic uses [LuaJIT](https://github.com/LuaJIT/LuaJIT) version **2.1.0-beta3**.  
The features of this version mostly match those of Lua 5.1, which are described in the [Lua 5.1 Manual](https://www.lua.org/manual/5.1/).  
However, it also contains a few features from newer Lua versions and some [LuaJIT-specific features](http://luajit.org/extensions.html).

:::info note
This documentation is for Scrap Mechanic Version **0.7.4**.

The documentation is also available as a [Lua documentation file](https://github.com/Vajdani/SM-Documentation/blob/master/sm.lua) for use in code editors such as VS Code.  
Note that this Lua file is maintained by different people, so its contents may not match that of this website.
**Note that the linked sm.lua file is currently for a newer version of the game.**

The archived documentations for previous game versions were unfortunately lost during the transfer of the ScrapMechanicTools website to GitHub.
:::

### Developer Console

It is recommended to set the `-dev` launch option in Steam, as this enables a developer console and hot-reload for Lua scripts.  
The developer console displays useful information, such as Lua call stacks and error messages if a script error occurs.  
The [print](Globals#print) and [log](Shared-Features/Static-Functions/sm.log) functions can be used to print custom text and data to the console.

### Sandboxes

When Lua code is run by the game, they are run in a **sandbox**.  
This sandbox ensures that a script can only call functions which are allowed in the current script context.  
One example of this is enforcing a [server](#server)/[client](#client) structure, e.g. preventing server-side scripts from calling client-side functions and vice versa.  
The sandbox also prevents the execution of harmful or malicious Lua code by restricting file access and the ability to run executables.

### Server

The **server** side simulates the game world and communicates with all clients that are currently playing, including the host itself.  
Server-side functions are only executed on the hosting player's computer.

In a [script class](#script-classes), a function who's name begins with `server_` is implied to execute in server mode and can only call API functions
which are either unmarked or marked as `Server-Only`.  
To check if a Lua function is currently executing in server context, the [sm.isServerMode](/Shared-Features/Static-Functions/sm#isservermode) function can be used.

### Client

The **client** is the part of the engine that a player sees and interacts with, such as graphics, audio, input, etc.  
A client runs on every player's computer, including the host.

In a [script class](#script-classes), a function who's name begins with `client_` is implied to execute in client mode and can only call API functions
which are either unmarked or marked as `Client-Only`.

### Lua Instances & Environments

In addition to the sandbox, the engine creates multiple instances of Lua, which are used in very different ways.

The main instance loads the [Game Script Environment](/Game-Script-Environment/Info) libraries.  
This instance is where things such as game logic, script classes and scripted object's scripts are loaded and executed.

The other instance(s) load the [Terrain Script Environment](/Terrain-Script-Environment/Info) libraries.  
In this environment, several [callback functions](/Terrain-Script-Environment/Callbacks) are called by the engine as the game world is loaded.  
These callbacks are used to fetch information about the terrain, such as terrain height, terrain asset placement, cell features, etc.

Note that these Lua instances are completely separate - A script loaded in a game environment instance **cannot** directly access
variables and functions from a terrain environment, and vice versa.  
There are API functions for basic communication between the game and terrain Lua instances.

In addition to this, all scripts inside a mod are loaded into a separate **environment** specific to that mod.  
This is done to prevent issues such as variable/class naming conflicts between different mods and/or the game's own scripts.  
There exists basic separation between these environments - scripts in mod A cannot directly access variables in mod B and vice versa.  
However, note that global **tables** such as the [sm](/Shared-Features/Static-Functions/sm) table are still shared across all environments
of a given Lua instance - this can be used to share data with, and execute code in, other environments, though doing this should be avoided.

### Script Classes

In the game script environment, **script classes** act as the entry point from the game's engine to the world of Lua.

A script class is a global Lua table containing callback functions (such as [server_onCreate](/Game-Script-Environment/Script-Classes/SharedServerCallbacks#server_oncreate)) which are called by the engine when certain events happen.  
The class may also define certain **constants**, which are read by the engine and affect certain behavior (e.g. [defaultInventorySize](/Game-Script-Environment/Script-Classes/GameClass#defaultinventorysize) in the game script class).  
This table must be created using the [class](Globals#class) function, as it applies a metatable which is used by the engine when instantiating the class.

:::info warning
**Only on the hosting player's computer**, the server-side and client-side callbacks are executed on **the same class instance**.  
This can lead to member variable naming conflicts and unwanted behavior in multiplayer.  
To avoid this, it is recommended that any custom data stored in the class is **not** be stored directly into `self`, but
rather separate `self.sv` and `self.cl` tables should be created in `server_onCreate` and `client_onCreate` and the data stored into those.  
Also, care should be taken to properly separate client-side and server-side script logic and code flow, to avoid accidentally modifying server state
from a client callback.
:::

Below is an example script class definition for a simple scripted interactive part:

```lua
-- MyShape.lua - Interactable part example script

-- Creates a new class
-- Note that this must *not* be a 'local' variable, else the engine cannot find it
MyShape = class()

-- Sets ShapeClass constants
MyShape.maxParentCount = 1
MyShape.maxChildCount = 0
MyShape.connectionInput = sm.interactable.connectionType.none
MyShape.connectionOutput = sm.interactable.connectionType.logic
MyShape.colorNormal = sm.color.new("#777777ff")
MyShape.colorHighlight = sm.color.new("#888888ff")

-- Called on creation on the server
function MyShape.server_onCreate(self)
	print("Hello World")
end

-- Called on creation on the client
function MyShape.client_onCreate(self)
	self.cl = {}
	self.cl.time = 0
end

-- Called every physics tick
function MyShape.client_onFixedUpdate(self, timeStep)
	self.cl.time = self.cl.time + timeStep
end

-- Called when the player interacts with the shape
function MyShape.client_onInteract(self, character, state)
	if state then
		print("Began Interacting")
		self.network:sendToServer("sv_n_toggle")
	else
		print("Stopped Interacting")
	end
	print("Shape has existed for", self.cl.time, "seconds")
end

-- Called on the server over the network by onInteract
function MyShape.sv_n_toggle() 
	-- Toggle on and off - logical parts such as lamps and logic gates use this to operate
	self.interactable.active = not self.interactable.active
end
```

To make a part interactive using this script, the `scripted` key in the shapeset JSON must be used:

```json
"scripted": {
	"filename": "$CONTENT_DATA/Scripts/MyShape.lua",
	"classname": "MyShape"
},
```

:::info note
The given `classname` **must** match the global variable name (`MyClass`) of the class table in the Lua script!
:::

### Static Functions

Static functions are globally accessible and can be called from Lua to interact with the game's engine, for example [spawning physics objects](/Game-Script-Environment/Static-Functions/sm.shape#createblock) in the game world.

Some functions, such as the linked example, return a [userdata](#userdata) object, which represents a reference to the created shape.  
In case of the given example, this reference will remain valid as long as the shape exists in the world.

### Userdata

Userdata is a Lua concept to define custom objects.

In Scrap Mechanic, userdata objects are commonly used as either a **reference** to an object such as a [Shape](/Game-Script-Environment/Userdata/Shape),
or as **data/utility**, such as [Vec3](/Shared-Features/Userdata/Vec3), [Uuid](/Shared-Features/Userdata/Uuid), etc.

These objects also provide their own API functions, which can only be used by calling them directly on an instance of such an object.  
An example of this is the [Vec3's cross function](/Shared-Features/Userdata/Vec3#cross), which can only be used by calling it through an instance of a [Vec3](/Shared-Features/Userdata/Vec3), using the colon operator: `vec:cross(otherVec)`.

Note that, while **data** objects are always valid and usable, **reference** objects behave slightly differently.  
In case of a **reference**, the userdata is only valid as long as its underlying engine object (e.g. the referenced shape) exists in the game.  
When this underlying object is destroyed, the userdata becomes **invalid**.  
Attempting to use the API of a destroyed object, in most cases, will throw an `object does not exist` Lua error and stop script execution.  
To avoid this, the [sm.exists](/Shared-Features/Static-Functions/sm#exists) function can be used to check if a userdata is valid.

Below is an example where the member function [getColor](/Game-Script-Environment/Userdata/Shape#getcolor) is called on the [Shape](/Game-Script-Environment/Userdata/Shape) userdata:

```lua
local color = myShape.getColor(myShape) -- All userdata functions require the object itself as first parameter.
```

Or with `:` syntactic sugar which automatically adds the userdata itself as the first parameter:

```lua
local color = myShape:getColor()
```

Userdata can also be used as parameters to other functions.  
The color returned by [getColor](/Game-Script-Environment/Userdata/Shape#getcolor) is another userdata type, a [Color](/Shared-Features/Userdata/Color).  
That color can be used as a parameter to e.g. [setColor](/Game-Script-Environment/Userdata/Shape#setcolor):

```lua
local color = myShape:getColor()
myOtherShape:setColor(color) -- Copy the color from myShape to myOtherShape
```

Most userdata also have member values which can be read/written directly, as a convenience for calling get/set member functions.  
This does exactly the same as the examples above:

```lua
local color = myShape.color
myOtherShape.color = color -- Copy the color from myShape to myOtherShape
```

Another way to get a [Color](/Shared-Features/Userdata/Color) userdata is to call [sm.color.new](/Shared-Features/Static-Functions/sm.color#new).  
This example sets the shape's color to red:

```lua
myShape.color = sm.color.new("#ff0000")
```
