---
sidebar_position: 20
title: sm.event
hide_title: true
sidebar-label: 'sm.event'
---

## sm.event

The event library is used to trigger Lua events across different script class instances.

:::info note
Most built-in script class callbacks (see the `Script Class Types` documentation) are blacklisted.  
As such, methods such as `server_onFixedUpdate` and similar ones cannot be called using this library.
:::

### Functions

#### sendToCharacter

```lua
local found = sm.event.sendToCharacter(character, callback, data)
```

Sends an event to the specified [Character](../Userdata/Character)'s [script class instance](../Script-Classes/CharacterClass).  
The callback function is executed in the next Lua tick.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `callback` (string): The name of the callback function in the character script.
- `data` (any, optional): Extra data to send to the callback function.

**Returns:**
- `found` (boolean): Whether the callback function was found or not.

---

#### sendToGame

```lua
local found = sm.event.sendToGame(callback, data)
```

Sends an event to the game [script class instance](../Script-Classes/GameClass).  
The callback function is executed in the next Lua tick.

:::caution warning
If this function is used too early in the game's loading process (such as from the root of an AutoTool script), the game script does not exist yet, causing a game crash.
:::

**Parameters:**
- `callback` (string): The name of the callback function in the game script.
- `data` (any, optional): Extra data to send to the callback function.

**Returns:**
- `found` (boolean): Whether the callback function was found or not.

---

#### sendToHarvestable

```lua
local found = sm.event.sendToHarvestable(harvestable, callback, data)
```

Sends an event to the specified [Harvestable](../Userdata/Harvestable)'s [script class instance](../Script-Classes/HarvestableClass).  
The callback function is executed in the next Lua tick.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.
- `callback` (string): The name of the callback function in the harvestable script.
- `data` (any, optional): Extra data to send to the callback function.

**Returns:**
- `found` (boolean): Whether the callback function was found or not.

---

#### sendToInteractable

```lua
local found = sm.event.sendToInteractable(interactable, callback, data)
```

Sends an event to the specified [Interactable](../Userdata/Interactable)'s [script class instance](../Script-Classes/ShapeClass).  
The callback function is executed in the next Lua tick.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `callback` (string): The name of the callback function in the interactable script.
- `data` (any, optional): Extra data to send to the callback function.

**Returns:**
- `found` (boolean): Whether the callback function was found or not.

---

#### sendToPlayer

```lua
local found = sm.event.sendToPlayer(player, callback, data)
```

Sends an event to the specified [Player](../Userdata/Player)'s [script class instance](../Script-Classes/PlayerClass).  
The callback function is executed in the next Lua tick.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player.
- `callback` (string): The name of the callback function in the player script.
- `data` (any, optional): Extra data to send to the callback function.

**Returns:**
- `found` (boolean): Whether the callback function was found or not.

---

#### sendToScriptableObject

```lua
local found = sm.event.sendToScriptableObject(scriptableObject, callback, data)
```

Sends an event to the specified [ScriptableObject](../Userdata/ScriptableObject)'s [script class instance](../Script-Classes/ScriptableObjectClass).  
The callback function is executed in the next Lua tick.

**Parameters:**
- `scriptableObject` ([ScriptableObject](../Userdata/ScriptableObject)): The scriptable object.
- `callback` (string): The name of the callback function in the scriptableObject's script.
- `data` (any, optional): Extra data to send to the callback function.

**Returns:**
- `found` (boolean): Whether the callback function was found or not.

---

#### sendToTool

```lua
local found = sm.event.sendToTool(tool, callback, data)
```

Sends an event to the specified [Tool](../Userdata/Tool)'s [script class instance](../Script-Classes/ToolClass).  
The callback function is executed in the next Lua tick.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `callback` (string): The name of the callback function in the tool script.
- `data` (any, optional): Extra data to send to the callback function.

**Returns:**
- `found` (boolean): Whether the callback function was found or not.

---

#### sendToUnit

```lua
local found = sm.event.sendToUnit(unit, callback, data)
```

Sends an event to the specified [Unit](../Userdata/Unit)'s [script class instance](../Script-Classes/UnitClass).  
The callback function is executed in the next Lua tick.

**Parameters:**
- `unit` ([Unit](../Userdata/Unit)): The unit.
- `callback` (string): The name of the callback function in the unit script.
- `data` (any, optional): Extra data to send to the callback function.

**Returns:**
- `found` (boolean): Whether the callback function was found or not.

---

#### sendToWorld

```lua
local found = sm.event.sendToWorld(world, callback, data)
```

Sends an event to the specified [World](../Userdata/World)'s [script class instance](../Script-Classes/WorldClass).  
The callback function is executed in the next Lua tick.

**Parameters:**
- `world` ([World](../Userdata/World)): The world.
- `callback` (string): The name of the callback function in the world script.
- `data` (any, optional): Extra data to send to the callback function.

**Returns:**
- `found` (boolean): Whether the callback function was found or not.

---
