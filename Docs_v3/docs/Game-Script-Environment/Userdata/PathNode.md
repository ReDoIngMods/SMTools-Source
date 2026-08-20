---
sidebar_position: 18
title: PathNode
hide_title: true
sidebar-label: 'PathNode'
---

## PathNode

**Associated namespace:** [sm.pathNode](../Static-Functions/sm.pathNode)

A userdata object representing a **path node** in the game.

**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `PathNode` == `PathNode` | Checks if two instances of `PathNode` refer to the same `PathNode`. |

## functions

### connect

```lua
pathNode:connect( target )
```
`Server-Only`  

Creates a PathNode connection.

**Parameters:**
- `pathNode` ([PathNode](../Userdata/PathNode)): The pathNode.
- `target` ([PathNode](../Userdata/PathNode)): The pathNode to connect to.

---

### destroy

```lua
pathNode:destroy()
```
`Server-Only`  

Destroys the PathNode.

**Parameters:**
- `pathNode` ([PathNode](../Userdata/PathNode)): The pathNode.

---

### getPosition

```lua
pathNode:getPosition()
```
`Server-Only`  

Returns the pathNode's world position.

**Parameters:**
- `pathNode` ([PathNode](../Userdata/PathNode)): The pathNode.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The pathNode's world position.

---

