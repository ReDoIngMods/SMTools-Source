---
sidebar_position: 21
title: sm.game
hide_title: true
sidebar-label: 'sm.game'
---

## sm.game

The game library mostly provides methods to control [game logic constants](../Script-Classes/GameClass#class-constants) at runtime.

### Functions

#### bindChatCommand

```lua
sm.game.bindChatCommand(command, params, callback, help)
```

Binds a chat command to a callback function.  
The callback function receives an array of parameters.  
The first object in it is the name of the command itself, the others are the extra parameters defined when registering the command.

**Parameters:**
- `command` (string): The name of the command. Must start with a `/`.
- `params` (table): The array with extra command parameters. See the table structure below.
- `callback` (string): The name of the callback function.
- `help` (string): Text to be displayed when using the built-in `/help` on the command.

```lua title="'params' Table Structure"
{
	--First parameter
	{
		"int",			--The parameter type. Can be "bool", "int", "number" and "string"
		"firstCommand",	--The command name shown when using /help on the command. Defaults to automatic naming ("p1", "p2", ...)
		false			--Whether the parameter is optional or not. Defaults to false (is optional).
	},

	--Second parameter
	{
		"number",
		"secondCommand",
		true
	}

	--etc.
}
```

---

#### getCurrentTick

```lua
local tick = sm.game.getCurrentTick()
```

Returns the current game tick.

**Returns:**
- `tick` (int): The tick.

---

#### getDifficulty

```lua
local difficulty = sm.game.getDifficulty()
```

Returns the current game difficulty level.

**Returns:**
- `difficulty` (int): The difficulty.

---

#### getEnableAggro

```lua
local enabled = sm.game.getEnableAggro()
```

Returns whether aggro is enabled.

**Returns:**
- `enabled` (boolean): The aggro state (true = enabled, false = disabled).

---

#### getEnableAmmoConsumption

```lua
local enabled = sm.game.getEnableAmmoConsumption()
```

Returns whether ammo consumption is enabled.

**Returns:**
- `enabled` (boolean): The ammo consumption state (true = enabled, false = disabled).

---

#### getEnableFuelConsumption

```lua
local enabled = sm.game.getEnableFuelConsumption()
```

Returns whether fuel consumption is enabled.

**Returns:**
- `enabled` (boolean): The fuel consumption state (true = enabled, false = disabled).

---

#### getEnableRestrictions

```lua
local enabled = sm.game.getEnableRestrictions()
```

Returns whether creation restrictions are enabled.

**Returns:**
- `enabled` (boolean): The restriction state (true = enabled, false = disabled).

---

#### getEnableUpgrade

```lua
local enabled = sm.game.getEnableUpgrade()
```

Returns whether interactive part upgrading is enabled.

**Returns:**
- `enabled` (boolean): The upgrading state (true = enabled, false = disabled).

---

#### getLimitedInventory

```lua
local enabled = sm.game.getLimitedInventory()
```

Returns whether limited inventory is enabled.

**Returns:**
- `enabled` (boolean): The inventory state (true = limited, false = unlimited).

---

#### getServerTick

```lua
local tick = sm.game.getServerTick()
```

Returns the estimated game tick on the server.

**Returns:**
- `tick` (int): The estimated server tick.

---

#### getTimeOfDay

```lua
local time = sm.game.getTimeOfDay()
```

Return the fraction value of how far the current day has progressed

**Returns:**
- `time` (number): The fraction of the day cycle.

---

#### setEnableAggro

```lua
sm.game.setEnableAggro(state)
```
`Server-Only`  

Sets the enemy aggro state. If true, players will be detected as targets by enemies.

**Parameters:**
- `state` (boolean): The aggro state.

---

#### setEnableAmmoConsumption

```lua
sm.game.setEnableAmmoConsumption(state)
```
`Server-Only`  

Sets the ammo consumption state. If true, guns require ammo to shoot.

**Parameters:**
- `state` (boolean): The ammo consumption state.

---

#### setEnableFuelConsumption

```lua
sm.game.setEnableFuelConsumption(state)
```
`Server-Only`  

Sets the fuel consumption state. If true, engines require fuel to run.

**Parameters:**
- `state` (boolean): The fuel consumption state.

---

#### setEnableRestrictions

```lua
sm.game.setEnableRestrictions(state)
```
`Server-Only`  

Sets the state of creation restrictions.  
If true, restrictions (such as [Body:setBuildable](../Userdata/Body#setbuildable)) will apply.  
If false, all restrictions will default to disabled.

**Parameters:**
- `state` (boolean): The restriction state.

---

#### setEnableUpgrade

```lua
sm.game.setEnableUpgrade(state)
```
`Server-Only`  

Sets the upgrading state. If true, interactables can be upgraded using component kits.

**Parameters:**
- `state` (boolean): The upgrading state.

---

#### setLimitedInventory

```lua
sm.game.setLimitedInventory(state)
```
`Server-Only`  

Sets the inventory state. If true, the inventory is limited.

**Parameters:**
- `state` (boolean): The inventory state.

---

#### setTimeOfDay

```lua
sm.game.setTimeOfDay(time)
```
`Client-Only`  

Sets the fraction value of how far the current in-game day has progressed.

**Parameters:**
- `time` (number): The fraction of the day cycle.

---
