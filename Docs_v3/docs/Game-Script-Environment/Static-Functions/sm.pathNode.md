---
sidebar_position: 35
title: sm.pathNode
hide_title: true
sidebar-label: 'sm.pathNode'
---

## sm.pathNode

**Associated object type:** [PathNode](../Userdata/PathNode)

[PathNode](../Userdata/PathNode)s are used by AI [Unit](../Userdata/Unit)s for pathfinding purposes.

### Functions

#### createPathNode

```lua
local node = sm.pathNode.createPathNode(position, radius)
```
`Server-Only`  

Creates a path node.

**Parameters:**
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The position.
- `radius` (number): The radius.

**Returns:**
- `node` ([PathNode](../Userdata/PathNode)): The path node.

---
