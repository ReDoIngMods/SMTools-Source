---
sidebar_position: 3
title: How to setup custom audio using the DLM API Extension
hide_title: true
sidebar-label: 'How to setup custom audio using the DLM API Extension'
---

### How to setup custom audio using the DLM API Extension

Written below is a tutorial explaining how to setup custom audio in a workshop mod using the [DLM API Extension](https://scrapmechanictools.com/modapis/DLM/Info).

In this example we will go through the process of creating a workshop mod that adds a <br></br>
custom radio part which loads a custom FMOD audio bank and plays sounds from it.

**Note that this tutorial assumes that you already know various basic things about creating mods.**

**Also note that 3D FMOD features are currently NOT implemented in the DLM Audio API, but will <br></br>
be added in a later DLM update.**

An example setup similar to the one shown here can be found in the [DLM Code Examples mod](https://steamcommunity.com/sharedfiles/filedetails/?id=2888172201).

### Table of Contents

 - [Required Resources](#required-resources)
 - [Initial Setup](#initial-setup)
 - [Creating & Preparing required files and folders](#creating--preparing-required-files-and-folders)
 - [Creating & Setting up the audio files](#creating--setting-up-the-audio-files)
	- [The recommended way](#the-recommended-way)
	- [The Lua script](#the-lua-script)
		- [Setting up the content path](#setting-up-the-content-path)
		- [Variables & Utility function](#variables--utility-function)
		- [Class creation & Bank loading](#class-creation--bank-loading)
		- [Updating the sound](#updating-the-sound)
		- [Interaction](#interaction)
		- [Destroying & Unloading the bank](#destroying--unloading-the-bank)
		- [Other functions](#other-functions)
	- [The finished script](#the-finished-script)
	- [The non-recommended way](#the-non-recommended-way)
- [Issues](#issues)
	- [I'm getting an error in FMOD Studio](#im-getting-an-error-in-fmod-studio)
	- [I'm getting fmod_result 28 or FMOD_ERR_INTERNAL when loading my audio bank](#im-getting-an-fmod_error_internal-when-loading-my-custom-bank-file)
	- [I'm getting 'File not found' or other Content Path errors](#im-getting-file-not-found-or-other-content-path-errors)
	- [I'm getting fmod_result 74 or FMOD_ERR_EVENT_NOTFOUND in the 'createEvent' function](#im-getting-an-event-not-found-error-in-the-createevent-function)
	- [My mod is working for me but not for other players](#the-mod-is-working-for-me-but-not-for-other-players)
	- [I'm getting an 'FMOD API is not loaded!' error](#im-getting-an-fmod-api-is-not-loaded-error)
	- [I'm seeing a 'No user steam ID!' error in the 'loadBank' function](#im-seeing-a-no-user-steam-id-error-in-the-loadbank-function)
	- [An API function is returning fmod_result 30 or FMOD_ERR_INVALID_HANDLE](#an-api-function-is-returning-fmod_result-30-or-fmod_err_invalid_handle)
	- [An API function is returning api_result 3 or 'INVALID_ID'](#an-api-function-is-returning-api_result-3-or-invalid_id)
	- [Other issues not in this list](#other-errors-not-in-this-list)
	


### Required Resources

 - Software
	- [Scrap Mechanic](https://store.steampowered.com/app/387990/)
	- Scrap Mechanic Mod Tool
	- [Visual Studio](https://visualstudio.microsoft.com/), [VS Code](https://code.visualstudio.com/) or any other program that can edit JSON and Lua files.
	- [FMOD Studio Version 1.10.05](https://www.fmod.com/download) - **Note that other versions will NOT work!**
 - Files
	- [Custom Audio FMOD Project](/files/Custom_Audio.zip)
 - Knowledge
	- Basic knowledge of JSON files
	- Basic knowledge of Scrap Mechanic Lua scripting
	- Basic knowledge of where game and mod files are located and how to find them
	- Knowing how to add a part to a mod
 - Other
	- [Documentation](https://scrapmechanictools.com/modapis/DLM/Info) for the DLM API Extension

### Initial Setup

First, we need to install the [DLM API Extension](https://scrapmechanictools.com/modapis/DLM/Info). <br></br>
**Note that the people using your mod will also need to have the extension installed!** <br></br>
**Because of this, you should place a notice and link to the extension in the mod's workshop description.**

First, we need to create our mod. <br></br>
You can do so in the Mod Tool. <br></br>
You probably already know how to do this, so this step is not explained here. <br></br>
If you do need an explanation, there is one [here](/modding_help/Tutorials/Tool_Models#creating-an-example-mod). <br></br>

**The next step is very important**

After creating the mod, we need to upload it to steam right away! <br></br>
This is not a problem, as a newly uploaded mod is set to private by default.

The reason we need to upload it to steam immediately is that this way, we're immediately <br></br>
assigning a steam ID to the mod, which we will need later to set some things up. <br></br>
It also removes the need for an extra mod update to set this up after the mod is done.

### Creating & preparing required Files and Folders

Now we need to add some folders and files to the mod:

First, create a folder called <code>Scripts</code> in the mod. <br></br>
In this folder, create a new file called <code>Radio.lua</code>.

Then, create a folder called <code>Audio</code> inside the main mod folder. <br></br>
This folder will later contain our custom audio files.

Next, we need to add our custom radio part to the mod. <br></br>
We can do so by copying and modifying the radio from the game. <br></br>

The radio shapeset entry can be found in: <code>Scrap Mechanic/Data/Objects/Database/ShapeSets/interactive.json</code>. <br></br>
We can find the radio's entry by searching for <code>obj_interactive_radio</code> in this file.

To add this to the mod, all we need to do is add a <code>partList</code> to our mod's shapeset,
copy the radio's shapeset entry into said part list, replace its UUID, remove the <code>legacyId</code> entry
and replace the <code>"radio": {},</code> property with the following JSON:

```json
"scripted": {
	"filename": "$CONTENT_DATA/Scripts/Radio.lua",
	"classname": "Radio"
},
```

After doing this, the mod's shapeset should now look something like this:

```json
{
	"partList": [
		{
			"uuid": "00000000-0000-0000-0000-000000000000",
			"name": "obj_interactive_radio",
			"renderable": "$GAME_DATA/Objects/Renderable/Interactive/obj_interactive_radio.rend",
			"color": "df7f01",
			"box": {
				"x": 2,
				"y": 2,
				"z": 1
			},
			"scripted": {
				"filename": "$CONTENT_DATA/Scripts/Radio.lua",
				"classname": "Radio"
			},
			"rotationSet": "PropYZ",
			"physicsMaterial": "Mechanical",
			"ratings": {
				"density": 2,
				"durability": 3,
				"friction": 5,
				"buoyancy": 6
			},
			"flammable": true
		}
	]
}
```

If it does, we can save the file and move on to creating & setting up the actual audio files.

## Creating & Setting up the audio files

First, we need to download [FMOD Studio Version 1.10.05](https://www.fmod.com/download) and the [Custom Audio FMOD Project](/files/Custom_Audio.zip). <br></br>
We need FMOD Studio to generate audio bank files and the Custom Audio project to make said files compatible with DLM. <br></br>
**Note - FMOD Studio versions other than 1.10.05 will NOT work and may cause errors or unexpected behavior!**

After installing FMOD Studio, locate the downloaded Custom Audio Project (<code>Custom_Audio_xxxx.zip</code>). <br></br>
Un-zip this project into any folder, then open the <code>Custom Audio</code> folder in it. <br></br>

It should look like this: <br></br>
![Image of folder contents](/img/CustomAudio_folder.png)

Next, we open FMOD Studio, click <code>Open Project</code> and select the <code>Custom Audio.fspro</code> file <br></br>
in the un-zipped <code>Custom Audio</code> folder.

**Note - It is extremely important that we use this FMOD project for our custom audio!** <br></br>
**If you make a new project, your audio banks will NOT work in the game!**

It should look like this (note the name at the top left): <br></br>
![Image of FMOD Studio with Custom Audio Project loaded](/img/FMOD_Studio_1.png)

Now we simply take our audio files (e.g. sound.mp3) and drag&drop them into the events list on the left.

:::info note
If there is a popup asking for an Event type and Additional options, make sure to set: <br></br>
- <code>Event type</code> to <code>3D Event</code> and <br></br>
- <code>Additional options</code> to <code>Create a new event for each audio file</code>.
:::

The list should now look something like this: <br></br>
![Image of FMOD Studio Event list with audio events](/img/FMOD_Studio_2.png)

If we want to, we can rename the events by double-clicking them.

We open the <code>Banks</code> tab, right-click and create a new bank with the name "MyBank". <br></br>
![Image of Banks tab with a custom audio bank](/img/FMOD_Studio_3.png)

Now we go back to the <code>Events</code> tab, select all events in the list, <br></br>
right-click, select <code>Assign to Bank</code> and select <code>MyBank</code>.

![Image of events being assigned](/img/FMOD_Studio_4.png)

:::info note
**It is extremely important that you assign the events to the new bank - NOT the Master Bank!** <br></br>
**If you assign them to the Master Bank, you will not be able to load them in the game.**
:::

Now, there are two ways to continue:

- **The recommended way**, creating the bank **and** a GUIDs.txt file to go with it, so we <br></br>
	can use paths like <code>event:/xyz</code> to play our custom sounds later OR
- creating the bank **without** a GUIDs.txt file (**not recommended** as this prevents us from using event paths)

First we'll go through the **recommended** way, though the non-recommended way is also explained [afterwards](#the-non-recommended-way).

### The recommended way

The recommended way to continue now is to build our custom audio bank, <br></br>
then generate a GUIDs.txt file for it and write our Lua script accordingly.

We switch to the <code>Banks</code> tab, right-click on <code>MyBank</code> and click <code>Build...</code>. <br></br>
Then we click on <code>File</code> at the top left and <code>Export GUIDs...</code>.

Now we can close FMOD Studio and open the <code>Audio</code> folder in our [mod folder](#creating--preparing-the-required-files-and-folders) and
the [Custom Audio Project folder](#creating--setting-up-the-audio-files).

Inside the Custom Audio Project folder should be a folder called <code>Build</code>. <br></br>
Inside this folder should be a folder called <code>Desktop</code> and a file called <code>GUIDs.txt</code>. <br></br>
We copy the GUIDs.txt file into our mod's <code>Audio</code> folder, then open the <code>Desktop</code> folder. <br></br>
Inside the <code>Desktop</code> folder should be 3 files:

- A <code>Master Bank.bank</code> file
- A <code>Master Bank.strings.bank</code> file and
- A <code>MyBank.bank</code> file

We copy **only** the <code>MyBank.bank</code> file into our mod's <code>Audio</code> folder. <br></br>
We do **not** copy the other files, as we can't load them anyways due to a limit of the audio engine.

Now we can start writing the Lua script to load our custom audio bank and play sounds from it.

### The Lua Script

We need a Lua script in order to load the audio bank, the GUIDs.txt file and to actually play custom sounds.

First, we open the <code>Radio.lua</code> file we [created at the beginning](#creating--preparing-required-files-and-folders). <br></br>
It should still be empty.

#### Setting up the content path

In order for DLM to be able to load any files, we need to setup our mod's content path first. <br></br>
**If the content path is not setup, the script will be unable to load the audio bank and GUIDs.txt file.**

To do so, we'll make use of the [dlm.setupContentPath](https://scrapmechanictools.com/modapis/DLM/Static-Functions/dlm#setupcontentpath) function.

```lua
local mod_name = "DLM Code Examples"
local mod_uuid = sm.uuid.new( "00000000-0000-0000-0000-000000000000" )
local mod_steamid = 2888172201

dlm.setupContentPath( mod_name, mod_uuid, mod_steamid )	
```

As written in the [documentation](https://scrapmechanictools.com/modapis/DLM/Static-Functions/dlm#setupcontentpath) for the function, the variables mean:

- <code>mod_name</code>: The name of our mod's folder (NOT the name in its <code>description.json</code> file - they might be different!).
- <code>mod_uuid</code>: Our mod's <code>localId</code> from its <code>description.json</code>, as a Uuid object.
- <code>mod_steamid</code>: Our mod's steam file id. It can be found in <code>description.json</code> <strong>after uploading it to steam once</strong>. <br></br>
	By immediately uploading our mod after creating it, we made sure that this value exists already.

:::info note
If you did not upload the mod to the steam workshop yet, it will not have a steam file id assigned. <br></br>
If you want to test your script without a steam id, you can use <code>0</code> as a placeholder - however, <br></br>
**you absolutely MUST replace this with the mod's *actual* steam file id after uploading the mod!** <br></br>

**If the steam file id is not properly set, your script will NOT work when your subscribers try using it!**
:::

#### Variables & Utility function

Next, we create some variables which will later hold our audio bank and audio events representing the sounds in the bank. <br></br>
We also define a table that keeps track of all instances of our custom radio so when the last radio is destroyed, <br></br>
we can detect this and un-load the audio bank and events to free some memory (important if the bank is very large).

We also set up a utility function that we'll need later.

```lua
local bank		--will later contain an audio bank object

local event_1	--these will later contain audio event objects
local event_2

local radios = {}	--keeps track of the radio instances

function invert_clamp_scale( min, max, value )	--inverts a value in a number range, clamps it and converts it to another number range
	local val = max - value
	return ( val < min and min or ( val > max and max or val ) ) / max
end
```

#### Class creation & Bank loading

Then we define the radio class and the <code>client_onCreate</code> function. <br></br>
In this function, we first add the radio instance to the <code>radios</code> table, then we check <br></br>
if the audio bank is already loaded. <br></br>
If the bank is **not** loaded yet, we use the [dlm.audio.loadBank](https://scrapmechanictools.com/modapis/DLM/Static-Functions/dlm.audio#loadbank) and [dlm.audio.createEvent](https://scrapmechanictools.com/modapis/DLM/Static-Functions/dlm.audio#createevent) functions <br></br>
to load the bank and GUIDs.txt file and create audio events from it.

Note that, as written in the [documentation](https://scrapmechanictools.com/modapis/DLM/Static-Functions/dlm.audio#createevent), because we loaded our bank together with a GUIDs.txt file, we need <br></br>
to pass the created AudioBank object to the [createEvent](https://scrapmechanictools.com/modapis/DLM/Static-Functions/dlm.audio#createevent) function, else it won't be able to find the event.

After loading (or not, if it is already loaded) the bank, we create an [EventInstance](https://scrapmechanictools.com/modapis/DLM/Objects/EventInstance) of each audio event.

```lua
Radio = class()	--create the class

Radio.poseWeightCount = 1	--pose weight for on/off animation, unrelated to audio

function Radio.client_onCreate( self )  --when a radio instance is created
    radios[#radios + 1] = self.interactable --add this instance to the list
    if not bank then    --if the audio bank doesn't exist/isn't loaded yet, load it and its events
        local api_result, fmod_result, audioBank = dlm.audio.loadBank( "$CONTENT_00000000-0000-0000-0000-000000000000/Audio/MyBank.bank", false, "$CONTENT_00000000-0000-0000-0000-000000000000/Audio/GUIDs.txt" )
        assert( api_result == 0 and fmod_result == 0, "Failed to load MyBank!" )

        local api_result, fmod_result, event1 = dlm.audio.createEvent( "event:/sound1", audioBank )
        assert( api_result == 0 and fmod_result == 0, "Failed to load event:/sound1!" )

        local api_result, fmod_result, event2 = dlm.audio.createEvent( "event:/sound2", audioBank )
        assert( api_result == 0 and fmod_result == 0, "Failed to load event:/sound2!" )

        --assign the variables
        bank = audioBank
        event_1 = event1
        event_2 = event2
    end

    local api_result, fmod_result, instance_1 = event_1:createInstance()    --create an instance of the first event
    assert( api_result == 0 and fmod_result == 0, "Failed to create first instance!" )

    local api_result, fmod_result, instance_2 = event_2:createInstance()    --create an instance of the second event
    assert( api_result == 0 and fmod_result == 0, "Failed to create second instance!" )

    self.sound_1 = instance_1           --load the event instances into self
    self.sound_2 = instance_2
    self.currentSound = self.sound_1    --select a default sound

    self.active = false --not playing by default
end
```

#### Updating the sound

We use the <code>client_onFixedUpdate</code> function to update the audio system, play/stop <br></br>
the sound and update the animation of the part depending on its active state.

Note that we need to update the audio system at least every tick if we're using it.

We'll also add some very basic distance/volume scaling, so if the player moves away from the radio, <br></br>
the sound gets quieter the larger the distance between them is.

```lua
function Radio.client_onFixedUpdate( self, dt )
	dlm.audio.updateSystem()	--update the audio system - important!

	local api_result, fmod_result, play_state = self.currentSound:getPlaybackState()
	if self.active then	--if the radio is on
		if play_state == 2 then	--if the selected sound is currently stopped
			self.currentSound:start()	--start the sound
		end

		if play_state == 0 then	--distance volume scaling - the further away, the quieter it gets
			local player = sm.localPlayer.getPlayer()
			local playerPos = player.character.worldPosition
			local selfPos = self.shape.worldPosition

			local distance = ( playerPos - selfPos ):length() * 4
			local volume = invert_clamp_scale( 0, 200, distance - 4 )	--calculate the volume scale, within 4 blocks of radio = volume 1, further than 200 blocks away = volume 0

			self.currentSound:setVolume( volume )	--set the volume according to the distance
		end

		self.interactable:setPoseWeight( 0, 1 )	--on/off animation

	else	--if the radio is off
		if play_state == 0 then	--if the selected sound is currently playing
			self.currentSound:stop( true )	--stop the sound, immediately
		end
		self.interactable:setPoseWeight( 0, 0 )	--on/off animation
	end
end
```

#### Interaction

Now we need to add a way to interact with the radio - turning it on/off and changing the sound. <br></br>
We use <code>client_onInteract</code> to turn it on or off and <code>client_onTinker</code> to change the sound.

We also use the network to sync the on/off change to other players, see [other functions](#other-functions).

```lua
function Radio.client_onInteract( self, char, lookAt )
	if lookAt then
		self.active = not self.active
		self.network:sendToServer( "sv_n_changeActive", self.active )	--sync the change to other players
	end
end

function Radio.client_onTinker( self, char, lookAt )
	if lookAt then
		self.currentSound:stop( true )	--make sure the current sound is stopped before switching
		if self.currentSound == self.sound_1 then
			self.currentSound = self.sound_2
		elseif self.currentSound == self.sound_2 then
			self.currentSound = self.sound_1
		end
		if self.active then	--if the radio is on, immediately start the newly selected sound
			self.currentSound:start()
		end
		--we don't sync the sound change, each player can select a sound for themselves
	end
end
```

#### Destroying & Unloading the bank

When a radio is destroyed in some way, we obviously want it to stop playing its music. <br></br>
However, if the radio being destroyed is *the last one*, we *also* want to use that radio <br></br>
to un-load the audio bank to free some memory since it isn't being used anymore. <br></br>
The next radio that is placed will notice that the bank is no longer loaded and <br></br>
will thus load it again.

Note the manual call to <code>updateSystem</code> at the bottom of the function - this is important! <br></br>
The reason is, if the destroyed instance was the *last* instance, <code>client_onFixedUpdate</code> will **not** <br></br>
get called anymore, which means the audio system would not update after this function, which means <br></br>
the sound may not stop properly. A manual call to <code>updateSystem</code> fixes this.

```lua
function Radio.client_onDestroy( self )
	for k, radio in pairs( radios ) do
		if radio == self.interactable then	--remove this radio from the list since it doesn't exist anymore
			table.remove( radios, k )
		end
	end
	self.sound_1:destroy()	--destroy the sound event instances of this radio
	self.sound_2:destroy()

	if #radios == 0 then	--this was the last one, no more radios exist in the game world
		event_1:destroy()	--unload/destroy the events and audio bank
		event_2:destroy()
		bank:destroy()
		event_1 = nil	--set the variables to nil so that a new radio can properly see that they were unloaded
		event_2 = nil
		bank = nil
	end
	dlm.audio.updateSystem()
	--important! If this was the last radio, onFixedUpdate does not get called after this.
	--This means that we have to manually update the system once here so it actually stops & destroys the sounds.
end
```

#### Other functions

Below are some other functions that are unrelated to the actual audio, <br></br>
like on/off syncing and setting a fancy interaction text.

```lua
function Radio.client_canInteract( self )	--set the interaction text
	local use = sm.gui.getKeyBinding( "Use", true )
	local tinker = sm.gui.getKeyBinding( "Tinker", true )

	if not self.parent then
		sm.gui.setInteractionText( "", use, "Turn " .. ( self.active and "off" or "on" ) )
	end
	sm.gui.setInteractionText( "", tinker, "Change Sound" )

	return true, true
end

--on/off state sync
function Radio.sv_n_changeActive( self, state, player )
	self.network:sendToClients( "cl_n_changeActive", state )
end

function Radio.cl_n_changeActive( self, state )
	self.active = state
end
```

### The finished script

If we combine all of this, we should end up with a script that looks like this:

```lua
local mod_name = "DLM Code Examples"
local mod_uuid = sm.uuid.new( "00000000-0000-0000-0000-000000000000" )
local mod_steamid = 2888172201

dlm.setupContentPath( mod_name, mod_uuid, mod_steamid )

local bank		--will later contain an audio bank object

local event_1	--these will later contain audio event objects
local event_2

local radios = {}	--keeps track of the radio instances

function invert_clamp_scale( min, max, value )	--inverts a value in a number range, clamps it and converts it to another number range
	local val = max - value
	return ( val < min and min or ( val > max and max or val ) ) / max
end

Radio = class()	--create the class

Radio.poseWeightCount = 1	--pose weight for on/off animation, unrelated to audio

function Radio.client_onCreate( self )	--when a radio instance is created
	radios[#radios + 1] = self.interactable	--add this instance to the list
	if not bank then	--if the audio bank doesn't exist/isn't loaded yet, load it and its events
		local api_result, fmod_result, audioBank = dlm.audio.loadBank( "$CONTENT_00000000-0000-0000-0000-000000000000/Audio/MyBank.bank", false, "$CONTENT_00000000-0000-0000-0000-000000000000/Audio/GUIDs.txt" )
		assert( api_result == 0 and fmod_result == 0, "Failed to load MyBank! api_result was:", dlm.constants.audio.api_results[api_result], ", fmod_result was:", dlm.constants.audio.fmod_results[fmod_result] )

		local api_result, fmod_result, event1 = dlm.audio.createEvent( "event:/sound1", audioBank )
		assert( api_result == 0 and fmod_result == 0, "Failed to load event:/sound1! api_result was:", dlm.constants.audio.api_results[api_result], ", fmod_result was:", dlm.constants.audio.fmod_results[fmod_result] )

		local api_result, fmod_result, event2 = dlm.audio.createEvent( "event:/sound2", audioBank )
		assert( api_result == 0 and fmod_result == 0, "Failed to load event:/sound2! api_result was:", dlm.constants.audio.api_results[api_result], ", fmod_result was:", dlm.constants.audio.fmod_results[fmod_result] )

		--assign the variables
		bank = audioBank
		event_1 = event1
		event_2 = event2
	end

	local api_result, fmod_result, instance_1 = event_1:createInstance()	--create an instance of the first event
	assert( api_result == 0 and fmod_result == 0, "Failed to create first instance! api_result was:", dlm.constants.audio.api_results[api_result], ", fmod_result was:", dlm.constants.audio.fmod_results[fmod_result] )

	local api_result, fmod_result, instance_2 = event_2:createInstance()	--create an instance of the second event
	assert( api_result == 0 and fmod_result == 0, "Failed to create second instance! api_result was:", dlm.constants.audio.api_results[api_result], ", fmod_result was:", dlm.constants.audio.fmod_results[fmod_result] )

	self.sound_1 = instance_1			--load the event instances into self
	self.sound_2 = instance_2
	self.currentSound = self.sound_1	--select a default sound

	self.active = false	--not playing by default
end

function Radio.client_onFixedUpdate( self, dt )
	dlm.audio.updateSystem()	--update the audio system - important!

	local api_result, fmod_result, play_state = self.currentSound:getPlaybackState()
	if self.active then	--if the radio is on
		if play_state == 2 then	--if the selected sound is currently stopped
			self.currentSound:start()	--start the sound
		end

		if play_state == 0 then	--distance volume scaling - the further away, the quieter it gets
			local player = sm.localPlayer.getPlayer()
			local playerPos = player.character.worldPosition
			local selfPos = self.shape.worldPosition

			local distance = ( playerPos - selfPos ):length() * 4
			local volume = invert_clamp_scale( 0, 200, distance - 4 )	--calculate the volume scale, within 4 blocks of radio = volume 1, further than 200 blocks away = volume 0

			self.currentSound:setVolume( volume )	--set the volume according to the distance
		end

		self.interactable:setPoseWeight( 0, 1 )	--on/off animation

	else	--if the radio is off
		if play_state == 0 then	--if the selected sound is currently playing
			self.currentSound:stop( true )	--stop the sound, immediately
		end
		self.interactable:setPoseWeight( 0, 0 )	--on/off animation
	end
end

function Radio.client_onInteract( self, char, lookAt )
	if lookAt then
		self.active = not self.active
		self.network:sendToServer( "sv_n_changeActive", self.active )	--sync the change to other players
	end
end

function Radio.client_onTinker( self, char, lookAt )
	if lookAt then
		self.currentSound:stop( true )	--make sure the current sound is stopped before switching
		if self.currentSound == self.sound_1 then
			self.currentSound = self.sound_2
		elseif self.currentSound == self.sound_2 then
			self.currentSound = self.sound_1
		end
		if self.active then	--if the radio is on, immediately start the newly selected sound
			self.currentSound:start()
		end
		--we don't sync the sound change, each player can select a sound for themselves
	end
end

function Radio.client_onDestroy( self )
	for k, radio in pairs( radios ) do
		if radio == self.interactable then	--remove this radio from the list since it doesn't exist anymore
			table.remove( radios, k )
		end
	end
	self.sound_1:destroy()	--destroy the sound event instances of this radio
	self.sound_2:destroy()

	if #radios == 0 then	--this was the last one, no more radios exist in the game world
		event_1:destroy()	--unload/destroy the events and audio bank
		event_2:destroy()
		bank:destroy()
		event_1 = nil	--set the variables to nil so that a new radio can properly see that they were unloaded
		event_2 = nil
		bank = nil
	end
	dlm.audio.updateSystem()
	--important! If this was the last radio, onFixedUpdate does not get called after this.
	--This means that we have to manually update the system once here so it actually stops & destroys the sounds.
end

function Radio.client_canInteract( self )	--set the interaction text
	local use = sm.gui.getKeyBinding( "Use", true )
	local tinker = sm.gui.getKeyBinding( "Tinker", true )

	if not self.parent then
		sm.gui.setInteractionText( "", use, "Turn " .. ( self.active and "off" or "on" ) )
	end
	sm.gui.setInteractionText( "", tinker, "Change Sound" )

	return true, true
end

--on/off state sync
function Radio.sv_n_changeActive( self, state, player )
	self.network:sendToClients( "cl_n_changeActive", state )
end

function Radio.cl_n_changeActive( self, state )
	self.active = state
end
```

If we did everything right, when we place the radio in-game and interact with it, our custom <br></br>
audio should start playing. When we tinker (U) with it, it should change the selected sound.

### The non-recommended way

:::info note
**If you followed the <code>The recommended way</code> section above, you can skip ahead to [(Issues)](#issues).**
:::

We can *also* generate *only* our audio bank and not use a GUIDs.txt file. <br></br>
This way is **not recommended** as it is not as easy to use and (due to event names being missing) <br></br>
makes the Lua script a bit harder to read/understand for others.

There are only a few differences between the recommended version and the non-recommended one, so I will only <br></br>
list the changed parts and not an entire, separate explanation.

When building the audio bank in FMOD Studio, we do **not** export a GUIDs.txt file.

In the Lua script, when we define the Radio class and <code>client_onCreate</code> function, we do some things slightly different:

We do **not** pass a GUIDs.txt file to the [dlm.audio.loadBank](https://scrapmechanictools.com/modapis/DLM/Static-Functions/dlm.audio#loadbank) function and the [dlm.audio.createEvent](https://scrapmechanictools.com/modapis/DLM/Static-Functions/dlm.audio#createevent) function <br></br>
receives the event's GUID as a string (written as <code>{00000000-0000-0000-0000-000000000000}</code>) instead of the event's path name. <br></br>
We also do **not** pass the audio bank object to <code>createEvent</code>.

```lua
Radio = class() --create the class

Radio.poseWeightCount = 1   --pose weight for on/off animation, unrelated to audio

function Radio_1.client_onCreate( self )	--when a radio instance is created
	radios[#radios + 1] = self.interactable	--add this instance to the list
	if not bank then	--if the audio bank doesn't exist/isn't loaded yet, load it and its events
		local api_result, fmod_result, audioBank = dlm.audio.loadBank( "$CONTENT_00000000-0000-0000-0000-000000000000/Audio/MyBank.bank", false )
		assert( api_result == 0 and fmod_result == 0, "Failed to load MyBank!" )

		local api_result, fmod_result, event1 = dlm.audio.createEvent( "{bea84618-2959-43ce-8a7d-719d5eb29f15}" )
		assert( api_result == 0 and fmod_result == 0, "Failed to load event:/sound1!" )

		local api_result, fmod_result, event2 = dlm.audio.createEvent( "{36231491-3575-4053-b69b-41e9d804b549}" )
		assert( api_result == 0 and fmod_result == 0, "Failed to load event:/sound2!" )

		--assign the variables
		bank = audioBank
		event_1 = event1
		event_2 = event2
	end

	local api_result, fmod_result, instance_1 = event_1:createInstance()	--create an instance of the first event
	assert( api_result == 0 and fmod_result == 0, "Failed to create first instance!" )

	local api_result, fmod_result, instance_2 = event_2:createInstance()	--create an instance of the second event
	assert( api_result == 0 and fmod_result == 0, "Failed to create second instance!" )

	self.sound_1 = instance_1			--load the event instances into self
	self.sound_2 = instance_2
	self.currentSound = self.sound_1	--select a default sound

	self.active = false	--not playing by default
end
```

The rest of the script stays the same.

## Issues

Listed below are some issues that may occur and what you can try to fix them.

### I'm getting an error in FMOD Studio

Unfortunately I can't help with that, as I don't have enough experience with FMOD Studio. <br></br>
You can try googling the error or asking other modders about it. <br></br>
Also, make sure you're using the correct FMOD Studio version - it **must** be version **1.10.05**!

### I'm getting an FMOD_ERROR_INTERNAL when loading my custom bank file

Make sure you used the correct FMOD Studio version to create the file - versions <br></br>
other than **1.10.05** will **not** work!

### I'm getting 'File not Found' or other Content Path errors

Make sure you [set up the content path](#setting-up-the-content-path) correctly. <br></br>
Also, make sure the path to file you're trying to load is valid. <br></br>
If you believe you did everything correctly, you can [contact me](https://scrapmechanictools.com/report_issues.html) and ask for help.

### I'm getting an 'Event not found' error in the 'createEvent' function

Make sure you're using the function correctly - if you loaded your audio bank **with** a GUIDs.txt file and want to <br></br>
use an event path name to create the event, you need to pass the AudioBank object into the <code>createEvent</code> function.

If you loaded your audio bank **without** a GUIDs.txt file, you **cannot** use an event path name to create an event. <br></br>
You have to use the event's GUID string as the name and **must NOT** pass the AudioBank object to the function.

If you can't figure it out, feel free to [ask for help](https://scrapmechanictools.com/report_issues.html).

### The mod is working for me but not for other players

You probably set the mod's steam file id in the [setupContentPath](#setting-up-the-content-path) function incorrectly. <br></br>
Make sure the steam file id is correct. <br></br>
Also, know that the other players need to have the [DLM API Extension](https://scrapmechanictools.com/modapis/DLM/Info) installed in order to use the mod.

### I'm getting an 'FMOD API is not loaded!' error

The internal FMOD API in DLM failed to load for some reason. <br></br>
**Please [report this immediately](https://scrapmechanictools.com/report_issues.html)**.

### I'm seeing a 'No user steam ID!' error in the 'loadBank' function

For some reason, DLM failed to find your steam ID. <br></br>
The steam ID is needed to resolve mod file paths properly.

Make sure that a <code>steam_appid.txt</code> file exists next to your <code>ScrapMechanic.exe</code> and <br></br>
that said file contains the text: <code>387990</code> (and nothing else).

If the file is there and the error still appears, please **[report this issue](https://scrapmechanictools.com/report_issues.html)**.

### An API function is returning fmod_result 30 or FMOD_ERR_INVALID_HANDLE

This is an internal error in the API - something that I (the DLM developer) have to fix myself. <br></br>
If this happens, please **[report it immediately](https://scrapmechanictools.com/report_issues.html)**!

### An API function is returning api_result 3 or 'INVALID_ID'

Just like the error above, this should not happen and I have to fix it myself. <br></br>
If this happens, please **[report it immediately](https://scrapmechanictools.com/report_issues.html)**!

### Other errors not in this list

If you're getting other errors, unexpected behavior, etc., there are [four ways to ask about them](https://scrapmechanictools.com/report_issues.html).










