---
sidebar_position: 46
title: sm.tool
hide_title: true
sidebar-label: 'sm.tool'
---

## sm.tool

**Associated object type:** [Tool](../Userdata/Tool)

A [Tool](../Userdata/Tool) is a scripted item that a player holds in their hand.  
The [Tool](../Userdata/Tool) object is focused on handling animations for first and third person view.

For more information about creating custom scripted tools, see [ToolClass](../Script-Classes/ToolClass).

### Constants

#### interactState

The tool's input interaction state.

```lua
sm.tool.interactState = {
    null = 0,   --No interaction.
    start = 1,  --The key was just pressed.
    hold = 2,   --The key is held down.
    stop = 3    --The key was just released.
}
```

### Functions

#### checkLiftCollision

```lua
local collides, level = sm.tool.checkLiftCollision(creation, position, rotation)
```

Used to check collisions between a lift creation and the world.

**Parameters:**
- `creation` (table): A table of all the bodies belonging to the creation placed on the lift.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The lift position.
- `rotation` (int): The rotation of the creation on the lift.

**Returns:**
- `collides` (boolean): Whether the lift collides with the world or not.
- `level` (int): The lift level.

---

#### forceTool

```lua
sm.tool.forceTool(tool)
```
`Client-Only`  

Force-equips a tool for the local player.  
Pass nil to unforce an already forced tool.  
This cannot be used to force-*un*equip a tool.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

---

#### preloadRenderables

```lua
sm.tool.preloadRenderables(renderables)
```
`Client-Only`  

Pre-loads renderable data to be used by the tool.  
This eliminates excessive loading during run time.

**Parameters:**
- `renderables` (table): The table of renderable file paths.

---

#### uuidExists

```lua
local exists = sm.tool.uuidExists(uuid)
```

Returns whether a tool with the given UUID exists.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The UUID.

**Returns:**
- `exists` (boolean): Whether the uuid exists or not.

---
