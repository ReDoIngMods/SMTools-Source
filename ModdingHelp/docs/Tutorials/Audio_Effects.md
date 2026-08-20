---
sidebar_position: 2
title: How to play Audio Events in a Lua script
hide_title: true
sidebar-label: 'How to play Audio Events in a Lua script'
---

### How to play Audio Events in a Lua script

Here you can see how to setup and play the audio events from the [Audio Events](/Audio_Events) list.

Note that this tutorial assumes that you already know some things about <br></br>
modding SM, the JSON files and their structure and Lua scripting.

### Table of Contents

 - [Required Resources](#required-resources) - Things you need to follow this tutorial
 - [Finding an audio event](#finding-an-audio-event) - Finding the even you want to play
 - [Creating an audio effect](#creating-an-audio-effect) - Creating an effect to play the sound
 - [The Lua script](#the-lua-script) - Playing the sound effect with Lua

### Required Resources

 - [Scrap Mechanic](https://store.steampowered.com/app/387990/)
 - [VS Code](https://code.visualstudio.com/) or any other code editor that can handle JSON and Lua files.
 - The [Audio Events List](/Audio_Events).
 - Knowledge of modding SM, JSON files structure and Lua Scripting.

### Finding an audio event

This tutorial skips the "mod creation" part entirely, as it assumes you already know how to do that. <br></br>

First, we need to find the event data of the sound we want to play. <br></br>
For that, we can simply go to the [Audio Events List](/Audio_Events), press CTRL + F to search and try searching for <br></br>
a name that might result in the sound we want (e.g. an engine sound might be called "gasengine", etc.). <br></br>

In this example we'll use the gas engine sound. <br></br>
To find it, we open the events list, press CTRL + F and type in "gas" or "gasengine". <br></br>

Some of the results should look like this:
```json
	"event:/vehicle/gasengines/gasengine01": {
        "Parameters": {
            "gas": {
                "default": 0.0,
                "maximum": 1.0,
                "minimum": 0.0
            },
            "load": {
                "default": 0.50,
                "maximum": 1.0,
                "minimum": 0.0
            },
            "rpm": {
                "default": 0.0,
                "maximum": 1.0,
                "minimum": 0.0
            }
        }
    },
```

I'll explain what this data means:

The `event:/....` path at the top is the **event path** of the sound - this is what's <br></br>
used to tell the game's audio system which sound it should play.

The `Parameters: ...` entry contains parameter data for this sound. <br></br>
A parameter is a value in the sound that can be controlled from Lua and will affect some property <br></br>
of the sound (e.g. speed, pitch, etc.). <br></br>
Listed are each parameter's **name** (e.g. `gas`) and its default, maximum and minimum supported values. <br></br>
Note that each sound has its own, separate parameters - not all parameters work for all sounds.

### Creating an audio effect

Now that we've found the sound we want to play, we need to create an **audio effect** to play it.

In our mod, we need to open the **effect set** file. <br></br>
By default, this file is found at `MOD/Effects/Database/EffectSets/example.effectset` or `example.json`. <br></br>

Open it in any JSON-capable code editor and replace its contents with the following:

```json
{
	"MySoundEffect": {
		"effectList": [
			{
				"name": "event:/vehicle/gasengines/gasengine01",
				"type": "audio",
				"parameters": [ "gas", "load", "rpm" ]
			}
		],
		"parameterList": {
			"gas": 0.0,
			"load": 0.5,
			"rpm": 0.0
		}
	}
}
```

I'll explain this JSON as well:

`MySoundEffect` is the **name** of the audio effect - this is used by the Lua script to actually <br></br>
create the effect. <br></br>

`effectList` is a list of effects that this effect contains - since we're only playing a sound, <br></br>
we only have the sound effect in this list. <br></br>

`name` is the name/event path of the sound we want to play - see the event path we found [above](#finding-an-audio-event). <br></br>
`type` is the type of this effect - setting it to `audio` tells the game that it's an *audio* effect. <br></br>
`parameters` is a list of audio parameters for the sound. We need to enter the parameter names from the <br></br>
event data we found [above](#finding-an-audio-event) into this list, else we can't control them in our Lua script. <br></br>

`parameterList` is used to set **default values** for each effect parameter. If you're not sure what <br></br>
to set them to, setting them to the default values from the events list is a good choice. <br></br>

Note that, if you already have a custom effect set, you can of course simply add this effect to that <br></br>
instead of setting up an entire new effect set.

### The Lua script

In our Lua script, we can use the [sm.effect.createEffect](https://scrapmechanictools.com/lua/Game-Script-Environment/Static-Functions/sm.effect#createeffect) function to create the audio effect and play it. <br></br>

After creating the effect, we can use [effect:setParameter](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Effect#setparameter) to control the audio parameters <br></br>
we found in the events list and [effect:start](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Effect#start) and [effect:stop](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Effect#stop) to start and stop the sound.

```lua title="Example Script"
MyPart = class()

function MyPart.client_onCreate( self )
	--Create the sound effect
	self.soundEffect = sm.effect.createEffect( "MySoundEffect" )
end

--When the player presses E on the part
function MyPart.client_onInteract( self, char, lookAt )
	if lookAt then
		--If the sound is already playing
		if self.soundEffect:isPlaying() then
			--Stop playing is
			self.soundEffect:stop()
		else
			--Start playing it
			self.soundEffect:start()
		end
	end
end

--When the player presses U on the part
function MyPart.client_onTinker( self, char, lookAt )
	if lookAt then
		--Set some parameters
		self.soundEffect:setParameter( "gas", 0.5 )
		self.soundEffect:setParameter( "load", 0.2 )
		self.soundEffect:setParameter( "rpm", 0.4 )
	end
end

function MyPart.client_onDestroy( self )
	--Destroy the effect when the part is gone
	self.soundEffect:destroy()
end
```
