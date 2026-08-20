---
sidebar_position: 42
title: sm.render
hide_title: true
sidebar-label: 'sm.render'
---

## sm.render

The render library provides functions for querying the game's render system.

### Functions

#### getDrawDistance

```lua
local drawDistance = sm.render.getDrawDistance()
```
`Client-Only`  

Gets the draw distance.

**Returns:**
- `drawDistance` (number): The draw distance.

---

#### getOutdoorLighting

```lua
local lighting = sm.render.getOutdoorLighting()
```
`Client-Only`  

Gets the lighting cycle fraction.

**Returns:**
- `lighting` (number): The fraction of the day cycle lighting.

---

#### getScreenCoordinatesFromWorldPosition

```lua
local x, y = sm.render.getScreenCoordinatesFromWorldPosition(position, width, height)
```
`Client-Only`  

Return the screen coordinates that align with the given world position.  
This may return negative values if the position falls outside of the screen.

**Parameters:**
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The world position.
- `width` (int): The screen width.
- `height` (int): The screen height.

**Returns:**
- `x` (number): The X coordinate on the screen.
- `y` (number): The Y coordinate on the screen.

---

#### isOutdoor

```lua
local isOutdoors = sm.render.isOutdoor()
```
`Client-Only`  

Checks if the local client is outdoors.

**Returns:**
- `isOutdoors` (boolean): Whether the local client is outdoors or not.

---

#### setOutdoorLighting

```lua
sm.render.setOutdoorLighting(value)
```
`Client-Only`  

Sets the lighting cycle fraction.

**Parameters:**
- `value` (number): The day cycle fraction.

---
