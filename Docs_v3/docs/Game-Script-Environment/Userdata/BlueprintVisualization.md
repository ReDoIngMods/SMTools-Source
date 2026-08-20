---
sidebar_position: 3
title: BlueprintVisualization
hide_title: true
sidebar-label: 'BlueprintVisualization'
---

## BlueprintVisualization

**Associated namespace:** [sm.visualization](../Static-Functions/sm.visualization)

A userdata object representing a **blueprint visualization**.

**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `BlueprintVisualization` == `BlueprintVisualization` | Checks if two instances of `BlueprintVisualization` refer to the same `BlueprintVisualization`. |

## Functions

### destroy

```lua
blueprintVisualization:destroy()
```
`Client-Only`  

Destroys a blueprint visualization.

**Parameters:**
- `blueprintVisualization` ([BlueprintVisualization](../Userdata/BlueprintVisualization)): The blueprint visualization.

---

### setPosition

```lua
blueprintVisualization:setPosition( position )
```
`Client-Only`  

Sets the world position of a blueprint visualization.

**Parameters:**
- `blueprintVisualization` ([BlueprintVisualization](../Userdata/BlueprintVisualization)): The blueprint visualization.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The world position.

---

### setRotation

```lua
blueprintVisualization:setRotation( rotation )
```
`Client-Only`  

Sets the rotation of a blueprint visualization.

**Parameters:**
- `blueprintVisualization` ([BlueprintVisualization](../Userdata/BlueprintVisualization)): The blueprint visualization.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat)): The rotation.

---

### setScale

```lua
blueprintVisualization:setScale( scale )
```
`Client-Only`  

Sets the scale of a blueprint visualization.

**Parameters:**
- `blueprintVisualization` ([BlueprintVisualization](../Userdata/BlueprintVisualization)): The blueprint visualization.
- `scale` ([Vec3](/Shared-Features/Userdata/Vec3)): The scale.

---

### updateBuilderGuide

```lua
blueprintVisualization:updateBuilderGuide()
```
`Client-Only`  

Updates the state of a builder guide `BlueprintVisualization`.  
Should be called whenever the root [Shape](../Userdata/Shape) of the builder guide has changed.

For performance reasons, this should not be called every tick.

**Parameters:**
- `blueprintVisualization` ([BlueprintVisualization](../Userdata/BlueprintVisualization)): The blueprint visualization.

---









