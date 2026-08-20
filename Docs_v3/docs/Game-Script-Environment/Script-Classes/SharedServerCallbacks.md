---
sidebar_position: 1
title: Shared Server Callbacks
hide_title: true
sidebar-label: 'Shared Server Callbacks'
---

## Shared Server Callbacks

The callback functions listed below are available in **all** *server-side* script class types, **in addition** to each class type's own fields and callbacks.

### Server Callbacks

These callbacks are executed in [server context](/#server).

#### server_onCreate

```lua
function Class.server_onCreate(self)
end
```

Called when the scripted object is created.  
This occurs when e.g. a scripted object is placed in the world, spawned or loaded from the save file.

**Parameters:**
- `self` (table): The script class instance.

---

#### server_onRefresh

```lua
function Class.server_onRefresh(self)
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

#### server_onFixedUpdate

```lua
function Class.server_onFixedUpdate(self, timeStep)
end
```

Called every physics tick - 40 times per second.  
If the game's framerate is below 40 FPS, this may be called twice.  
During a fixed update, physics and logic between interactables are updated.

**Parameters:**
- `self` (table): The script class instance.
- `timeStep` (number): The physics time step, in seconds. (1.0 / 40 = 0.025)

---

#### server_onDestroy

```lua
function Class.server_onDestroy(self)
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
