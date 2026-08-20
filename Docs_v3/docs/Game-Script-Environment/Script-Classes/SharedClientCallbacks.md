---
sidebar_position: 2
title: Shared Client Callbacks
hide_title: true
sidebar-label: 'Shared Client Callbacks'
---

## Shared Client Callbacks

The callback functions listed below are available in **all** *client-side* script class types, **in addition** to each class type's own fields and callbacks.  
These are listed separately because the [UnitClass](UnitClass) only exists on the server.

### Client Callbacks

These callbacks are executed in [client context](/#client).

#### client_onCreate

```lua
function Class.client_onCreate(self)
end
```

Called when the scripted object is created.  
This occurs when e.g. a scripted object is placed in the world, spawned or loaded from the save file.

**Parameters:**
- `self` (table): The script class instance.

---

#### client_onRefresh

```lua
function Class.client_onRefresh(self)
end
```

Called when the Lua script file of the script class is modified while the game is running.

:::info note
This event requires Scrap Mechanic to be running with the `-dev` launch option.  
This will allow scripts to automatically refresh upon changes.
:::

**Parameters:**
- `self` (table): The script class instance.

---

#### client_onFixedUpdate

```lua
function Class.client_onFixedUpdate(self, timeStep)
end
```

Called every physics tick - 40 times per second.  
If the game's framerate is below 40 FPS, this may be called twice.  
During a fixed update, physics and logic between interactables are updated.

**Parameters:**
- `self` (table): The script class instance.
- `timeStep` (number): The physics time step, in seconds. (1.0 / 40 = 0.025)

---

#### client_onUpdate

```lua
function Class.client_onUpdate(self, delta)
end
```

Called every render frame.  
During a frame update, graphics, animations and effects are updated.

:::caution warning
Because of how frequent this event is called, the game's frame rate is greatly affected by the amount of code executed here.  
For any non-graphics related code, consider using client_onFixedUpdate instead.  
If the event is not in use, consider removing it from the script (event callbacks that are not implemented will not be called).
:::

**Parameters:**
- `self` (table): The script class instance.
- `delta` (number): The delta time since the last frame.

---

#### client_onClientDataUpdate

```lua
function Class.client_onClientDataUpdate(self, data, channel)
end
```

Called when the client instance receives new data from the server set with [Network:setClientData()](../Userdata/Network#setclientdata).  
Data set in this way is persistent and the latest data will automatically be sent to new clients.  
The data will arrive after client_onCreate during the same tick.  
Channel 1 will be received before channel 2 if both are updated.

**Parameters:**
- `self` (table): The script class instance.
- `data` (any): The Lua data set with [Network:setClientData()](../Userdata/Network#setclientdata).
- `channel` (int): The data channel, either 1 or 2 (default: 1).

---

#### client_onDestroy

```lua
function Class.client_onDestroy(self)
end
```

Called when the scripted object is destroyed.  
This occurs when e.g. a scripted object is erased, destroyed by an explosion or attack, deleted, etc.

:::info note
This function is called **after** the class's associated object (e.g. shape, player, etc.) is already destroyed.  
Any attempt at accessing it (through e.g. `self.shape`, `self.player`, etc.) from this callback will throw a script error.
:::

**Parameters:**
- `self` (table): The script class instance.

---
