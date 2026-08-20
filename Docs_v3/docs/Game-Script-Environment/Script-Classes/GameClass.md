---
sidebar_position: 8
title: GameClass
hide_title: true
sidebar-label: 'GameClass'
---

## GameClass

A game class defines the game mode. Only one instance of this class is made.

This is the first script that will be run.

The game script is responsible for creating and managing [World](../Userdata/World)s.

The class can receive events sent with [sm.event.sendToGame](../Static-Functions/sm.event#sendtogame).

### Instance Members

These members are set by the engine when instantiating the script class and are unique to each new instance of it.

#### network

`self.network` ([Network](../Userdata/Network)):  
A network interface, for client/server instance communication.

---

#### storage

`self.storage` ([Storage](../Userdata/Storage)):  
A data storage interface, used to store persistent data into the save file.

---

#### data

`self.data` (nil/boolean/number/string/table):  
In Challenge Mode, this is a table containing level data, e.g. blueprints.  
In Creative and Survival mode, it contains the world seed.  
In a Custom Game, it contains the world seed and a flag indicating whether [developer mode](/#developer-console) is enabled or not.

---

### Class Constants

These constants may be set in the global script class table to configure certain parts of the class.  
Note that changing these on an already-existing script instance will **not** update the settings.

#### defaultInventorySize

`GameClass.defaultInventorySize` (int):  
Sets the default player inventory size, excluding the hotbar.  
Defaults to `40`.

---

#### enableAggro

`GameClass.enableAggro` (boolean):  
Sets whether enemy aggression is enabled.  
Defaults to `true`.

---

#### enableAmmoConsumption

`GameClass.enableAmmoConsumption` (boolean):  
Sets whether ammo consumption is enabled.  
Defaults to `false`.

---

#### enableFuelConsumption

`GameClass.enableFuelConsumption` (boolean):  
Sets whether fuel consumption is enabled.  
Defaults to `false`.

---

#### enableLimitedInventory

`GameClass.enableLimitedInventory` (boolean):  
Sets whether the player inventory is limited.  
When the inventory is limited, items have a limited amount.  
When not limited, the player has access to all items (except ones with `"showInInventory": false` in their JSON data).  
Defaults to `false`.

---

#### enableRestrictions

`GameClass.enableRestrictions` (boolean):  
Sets whether player build restrictions are enabled.  
If enabled, players cannot place blocks or parts in the world.  
Defaults to `false`.

---

#### enableUpgrade

`GameClass.enableUpgrade` (boolean):  
Sets whether interactive part upgrading is enabled or not.  
Defaults to `false`.

---

### Server Callbacks

These callbacks are executed in [server context](/#server).

#### server_onPlayerJoined

```lua
function GameClass.server_onPlayerJoined(self, player, isNewPlayer)
end
```

Called when a [Player](../Userdata/Player) joins the game.

**Parameters:**
- `self` (table): The script class instance.
- `player` ([Player](../Userdata/Player)): The joining player.
- `isNewPlayer` (boolean): Whether the player is new to this savegame or not.

---

#### server_onPlayerLeft

```lua
function GameClass.server_onPlayerLeft(self, player)
end
```

Called when a [Player](../Userdata/Player) leaves the game.

**Parameters:**
- `self` (table): The script class instance.
- `player` ([Player](../Userdata/Player)): The leaving player.

---

#### server_onReset

```lua
function GameClass.server_onReset(self)
end
```

Called when the user requests a level reset.

:::info note
Only works in Challenge Mode!
:::

**Parameters:**
- `self` (table): The script class instance.

---

#### server_onRestart

```lua
function GameClass.server_onRestart(self)
end
```

Called when the user requests a level restart.

:::info note
Only works in Challenge Mode!
:::

**Parameters:**
- `self` (table): The script class instance.

---

#### server_onSaveLevel

```lua
function GameClass.server_onSaveLevel(self)
end
```

Called when the user requests a level save.

:::info note
Only works in the Challenge Builder!
:::

**Parameters:**
- `self` (table): The script class instance.

---

#### server_onTestLevel

```lua
function GameClass.server_onTestLevel(self)
end
```

Called when the user requests to save and test the challenge level.

:::info note
Only works in the Challenge Builder!
:::

**Parameters:**
- `self` (table): The script class instance.

---

#### server_onStopTest

```lua
function GameClass.server_onStopTest(self)
end
```
Called when the user requests to stop the challenge level test.

:::info note
Only works in the Challenge Builder!
:::

**Parameters:**
- `self` (table): The script class instance.

---

### Client Callbacks

These callbacks are executed in [client context](/#client).

#### client_onLoadingScreenLifted

```lua
function GameClass.client_onLoadingScreenLifted(self)
end
```

Called when the loading screen is lifted when entering a game.

**Parameters:**
- `self` (table): The script class instance.

---

#### client_onLanguageChange

```lua
function GameClass.client_onLanguageChange(self, language)
end
```

Called when the user changes the language in the in-game menu.

Valid languages are:  
`Brazilian`, `Chinese`, `English`, `French`,  
`German`, `Italian`, `Japanese`, `Korean`,  
`Polish`, `Russian`, `Spanish`

**Parameters:**
- `self` (table): The script class instance.
- `language` (string): The new game language.

---
