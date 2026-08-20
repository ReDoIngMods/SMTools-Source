---
sidebar_position: 36
title: sm.pathfinder
hide_title: true
sidebar-label: 'sm.pathfinder'
---

## sm.pathfinder

The pathfinder library provides path finding functions, intended for AI [Unit](../Userdata/Unit) pathfinding.

### Constants

#### conditionProperty

A table of path node link conditions.

```lua
sm.pathfinder.conditionProperty = {
    height = 0,
    target = 1,
    none = 2
}
```

---

### Functions

#### getPath

```lua
local path = sm.pathfinder.getPath( character, destination, groundPos, linkConditions )
```
`Server-Only`  

Finds a path.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character to find a path for.
- `destination` ([Vec3](/Shared-Features/Userdata/Vec3)): The path destination.
- `groundPos` (boolean, optional): Whether the destination is ground level or not. Defaults to `true`.
- `linkConditions` (table, optional): A table of link conditions.

**Returns:**
- `path` (table): The found path, as an array of tables, each containing one [PathNode](../Userdata/PathNode) along the path.

---

#### getSortedNodes

```lua
local nodes = sm.pathfinder.getSortedNodes(worldPosition, minDist, maxDist)
```
`Server-Only`  

Finds all nearby path nodes.

**Parameters:**
- `worldPosition` ([Vec3](/Shared-Features/Userdata/Vec3)): The position to check.
- `minDist` (number): The minimum distance around the position.
- `maxDist` (number): The maximum distance around the position.

**Returns:**
- `nodes` (table): The array of found [PathNode](../Userdata/PathNode)s, sorted closest to farthest.

---
