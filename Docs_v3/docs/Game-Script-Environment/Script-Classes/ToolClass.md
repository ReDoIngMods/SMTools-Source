---
sidebar_position: 3
title: ToolClass
hide_title: true
sidebar-label: 'ToolClass'
---

## ToolClass

A tool class is instanced for every active [Tool](../Userdata/Tool) in the game.

A tool is something that a [Player](../Userdata/Player) can equip by selecting it in the hotbar, for example the Sledgehammer.

The class can receive events sent with [sm.event.sendToTool](../Static-Functions/sm.event#sendtotool).

### Instance Members

These members are set by the engine when instantiating the script class and are unique to each new instance of it.

#### tool

`self.tool` ([Tool](../Userdata/Tool)):  
The tool that owns this script instance.

---

#### network

`self.network` ([Network](../Userdata/Network)):  
A network interface, for client/server instance communication.

---

#### storage

`self.storage` ([Storage](../Userdata/Storage)):  
A data storage interface, used to store persistent data into the save file.

---

### Client Callbacks

These callbacks are executed in [client context](/#client).

#### client_onEquip

```lua
function ToolClass.client_onEquip(self, animate)
end
```

Called when the [Player](../Userdata/Player) equips the [Tool](../Userdata/Tool).  
This happens when the [Tool](../Userdata/Tool)'s hotbar slot is selected.

**Parameters:**
- `self` (table): The script class instance.
- `animate` (boolean): Whether the event should be animated or not.

---

#### client_onUnequip

```lua
function ToolClass.client_onUnequip(self, animate)
end
```

Called when the [Player](../Userdata/Player) unequips the [Tool](../Userdata/Tool).  
This happens when the [Tool](../Userdata/Tool)'s hotbar slot is de-selected.

**Parameters:**
- `self` (table): The script class instance.
- `animate` (boolean): Whether the event should be animated or not.

---

#### client_onEquippedUpdate

```lua
function ToolClass.client_onEquippedUpdate(self, primaryState, secondaryState, forceBuild)
	return true, true -- first blocks primary actions, second blocks secondary actions
end
```

Called every frame for the currently equipped [Tool](../Userdata/Tool).  
See [sm.tool.interactState](../Static-Functions/sm.tool#interactstate) for details about the primary and secondary state.

:::info note
Swinging the sledgehammer is a typical example where you want to block other primary input.  
Force building is an example where the primary input action is not blocked.  
Not blocking secondary input allows shape removal while the tool is equipped.
:::

**Parameters:**
- `self` (table): The script class instance.
- `primaryState` (int): The [interactState](../Static-Functions/sm.tool#interactstate) of the primary action (default: LMB).
- `secondaryState` (int): The [interactState](../Static-Functions/sm.tool#interactstate) of the secondary action (default: RMB).
- `forceBuild` (boolean): The state of the `Force Build` input (default: `F`).

**Returns:**
- boolean: Whether the primary input should be blocked or not (default: false).
- boolean: Whether the secondary input should be blocked or not (default: false).

---

#### client_onToggle

```lua
function ToolClass.client_onToggle(self, backwards)
	return true -- or false
end
```

Called when the [Player](../Userdata/Player) presses a `Toggle` input with the [Tool](../Userdata/Tool) equipped (default: `Q` and `Shift + Q`).

If the player turns the mouse wheel while holding shift, this function will be called and  
the `backwards` parameter represents the direction the wheel was rotated.

:::info note
The `backwards` parameter is currently broken, it is always `true`.
:::

**Parameters:**
- `self` (table): The script class instance.
- `backwards` (boolean): Whether the mouse wheel was turned backwards or not.

**Returns:**
- boolean: Whether other toggle actions (e.g. rotating shapes) should be blocked (default: false).

---

#### client_onReload

```lua
function ToolClass.client_onReload(self)
	return true -- or false
end
```

Called when the [Player](../Userdata/Player) presses the `Reload` input with the [Tool](../Userdata/Tool) equipped (default: `R`).

**Parameters:**
- `self` (table): The script class instance.

**Returns:**
- boolean: Whether other reload actions (e.g. [PlayerClass.client_onReload](PlayerClass#client_onreload)) should be blocked (default: false).

---

#### client_onForceTool

```lua
function ToolClass.client_onForceTool(self)
end
```

Called when the [Tool](../Userdata/Tool) is force-equipped using [sm.tool.forceTool](../Static-Functions/sm.tool#forcetool).

:::info note
This is untested and may not work.  
Please report if that is the case.
:::

**Parameters:**
- `self` (table): The script class instance.

---

#### client_canEquip

```lua
function ToolClass.client_canEquip(self)
	return true --true or false, default false
end
```

This event is called to check whether the [Tool](../Userdata/Tool) can be equipped.

**Parameters:**
- `self` (table): The script class instance.

**Returns:**
- boolean: Whether the tool can currently be equipped or not (default: `true`).

---

#### client_equipWhileSeated

```lua
function ToolClass.client_equipWhileSeated(self)
end
```

Called when the [Tool](../Userdata/Tool) is equipped while the [Player](../Userdata/Player) is in a seat.  
This only works for the Logbook tool and not for normal tools (even when [sm.tool.forceTool](../Static-Functions/sm.tool#forcetool) is used).

**Parameters:**
- `self` (table): The script class instance.

---
