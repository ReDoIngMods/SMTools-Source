---
sidebar_position: 31
title: World
hide_title: true
sidebar-label: 'World'
---

## World

**Associated namespace:** [sm.world](/lua/Game-Script-Environment/Static-Functions/sm.world)

A userdata object representing a **world** in the game.

**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `World` == `World` | Checks if two instances of `World` refer to the same `World`. |

**Values:**

- `id` [** int **]  

	- `Get`: The world's id.

## functions

### destroy

```lua
world:destroy()
```
`Server-Only`  

Destroys the world.
Only available in the game script environment.

**Parameters:**
- `world` ([World](../Userdata/World)): The world.

---

### getId

```lua
world:getId()
```

Returns the world's id.

**Parameters:**
- `world` ([World](../Userdata/World)): The world.

**Returns:**
- (int): The id.

---

### isIndoor

```lua
world:isIndoor()
```

Returns whether the world is an indoor world.

**Parameters:**
- `world` ([World](../Userdata/World)): The world.

**Returns:**
- (boolean): Whether the world is an indoor world or not.

---

### loadCell

```lua
world:loadCell( x, y, player, callback, params, ref )
```
`Server-Only`  

Load a cell for player.  
The cell will stay loaded until the player steps into the cell,  
or the cell is released with `releaseCell` (and no player is close enough to load the cell).

The callback parameters are ( world, x, y, player, params, handle )

**The callback receives:**
- `world` ([World](../Userdata/World)): The world.
- `x` (int): The cell's X position.
- `y` (int): The cell's Y position.
- `player` ([Player](../Userdata/Player)): The player that was loaded for.
- `params` (any): Params passed to `loadCell`.
- `handle` ([LoadCellHandle](../Userdata/LoadCellHandle)): The cell's `LoadCellHandle`, for releasing the cell.

**Parameters:**
- `world` ([World](../Userdata/World)): The world.
- `x` (int): The cell's X position.
- `y` (int): The cell's Y position.
- `player` ([Player](../Userdata/Player)): The player to load for. Optional.
- `callback` (string): The Lua function to call when the cell is loaded. Optional.
- `params` (any): A parameter object passed to the callback function. Optional.
- `ref` (table): The ScriptRef for the callback object. Optional.

**Returns:**
- (int): The handle to use when explicitly releasing the cell.

---

### reloadCell

```lua
world:reloadCell( x, y, callback, ref )
```

Reloads a cell.

**The callback receives:**
- `world` ([World](../Userdata/World)): The world.
- `x` (int): The cell's X position.
- `y` (int): The cell's Y position.
- `result` (int): The result. 0 = Not reloaded due to cell being inactive. 1 = Successfully reloaded.

**Parameters:**
- `world` ([World](../Userdata/World)): The world.
- `x` (int): The cell's X position.
- `y` (int): The cell's Y position.
- `callback` (string): The Lua function to call when the cell is reloaded. Optional.
- `ref` (table): The ScriptRef for the callback object. Optional.

---

### setTerrainScriptData

```lua
world:setTerrainScriptData( data )
```

Set data to pass on to the terrain generation script.  
If no data is set, the terrain generation script receives the same data as the world script.

**Parameters:**
- `world` ([World](../Userdata/World)): The world.
- `data` (any): Any data, available in the terrain script as parameter 6 in the create callback.

---

### terrainSphereModification

```lua
world:terrainSphereModification( position, radius, strength )
```

Modifies destructable terrain with a sphere shape.

**Parameters:**
- `world` ([World](../Userdata/World)): The world.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The world position of the sphere.
- `radius` (number): The radius of the sphere.
- `strength` (number): The strength of the modification (Optional).

---








