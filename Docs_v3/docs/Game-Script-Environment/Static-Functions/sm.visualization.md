---
sidebar_position: 51
title: sm.visualization
hide_title: true
sidebar-label: 'sm.visualization'
---

## sm.visualization

**Associated object type:** [BlueprintVisualization](../Userdata/BlueprintVisualization)

The visualization library allows for visualizing game objects.

### Functions

#### createBlueprint

```lua
local blueprint = sm.visualization.createBlueprint(blueprint)
```
`Client-Only`  

Creates a [Blueprint Visualization](../Userdata/BlueprintVisualization) from blueprint data.

**Parameters:**
- `blueprint` (string/table): The path to the blueprint file OR the table containing blueprint data.

**Returns:**
- `blueprint` ([BlueprintVisualization](../Userdata/BlueprintVisualization)): The blueprint visualization.

---

#### createBuilderGuide

```lua
local blueprint = sm.visualization.createBuilderGuide(path, shape, ignoreBlockUuid, completeEffectName)
```
`Client-Only`  

Creates a [BuilderGuide](../Userdata/BuilderGuide) [BlueprintVisualization](../Userdata/BlueprintVisualization), comparing the creation from the root [Shape](../Userdata/Shape) to the given blueprint.

The builder guide blueprint contains stage indices based on shape color, stage color order is the same as the color order in the PaintTool color picker.

**Parameters:**
- `path` (string): The file path to the builder guide blueprint.
- `shape` ([Shape](../Userdata/Shape)): The root Shape for comparing the creation from.
- `ignoreBlockUuid` (boolean, optional): Whether the block UUID should be evaluated for stage completion. Defaults to false.
- `completeEffectName` (string, optional): The name of the effect to play when the guide is completed. Defaults to none.

**Returns:**
- `blueprint` ([BlueprintVisualization](../Userdata/BlueprintVisualization)): The builder guide blueprint visualization.

---

#### setBlockVisualization

```lua
sm.visualization.setBlockVisualization(position, illegal, target)
```
`Client-Only`  

Visualizes a block.

**Parameters:**
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The world position of the block. Local position if using a target.
- `illegal` (boolean): Whether the visualization should render as illegal.
- `target` (table/[Joint](../Userdata/Joint)/nil): The target shape or joint. Defaults to none (visualizes in world space).

---

#### getShapePlacementVisualization

```lua
local visualization = sm.visualization.getShapePlacementVisualization()
```
`Client-Only`  

Returns a table containing the current state of the shape placement visualization.

**Returns:**
- `visualization` (table): The visualization data.

---

#### setCreationBodies

```lua
sm.visualization.setCreationBodies(bodies)
```
`Client-Only`  

Sets an array of [Bodies](../Userdata/Body) to visualize.

**Parameters:**
- `bodies` (table): The array of bodies to visualize.

---

#### setCreationFreePlacement

```lua
sm.visualization.setCreationFreePlacement(valid)
```
`Client-Only`  

Controls the transform of the creation visualization.  
If true, the visualization will render using `setFreePlacementPosition`/`setFreePlacementRotation` functions.

If false, the visualization will render on top of the creation.

**Parameters:**
- `valid` (boolean): The transform state.

---

#### setCreationFreePlacementPosition

```lua
sm.visualization.setCreationFreePlacementPosition(pos)
```
`Client-Only`  

Set the world position of the creation visualization.  
Only works if `setFreePlacement` is true.

**Parameters:**
- `pos` ([Vec3](/Shared-Features/Userdata/Vec3)): The visualization position.

---

#### setCreationFreePlacementRotation

```lua
sm.visualization.setCreationFreePlacementRotation(index)
```
`Client-Only`  

Set the rotation index of the creation visualization.  
Only works if `setFreePlacement` is true.

**Parameters:**
- `index` (int): The rotation index.

---

#### setCreationValid

```lua
sm.visualization.setCreationValid(valid, lift)
```
`Client-Only`  

Controls the rendering of the creation visualization.

**Parameters:**
- `valid` (boolean): Whether the visualization should be rendered as valid or invalid.
- `lift` (boolean): Whether the visualization should render a lift.

---

#### setCreationVisible

```lua
sm.visualization.setCreationVisible(visible)
```
`Client-Only`  

Controls the visibility of the creation visualization.

**Parameters:**
- `visible` (boolean): Whether the visualization should be visible or not.

---

#### setLiftLevel

```lua
sm.visualization.setLiftLevel(level)
```
`Client-Only`  

Sets the lift level of the lift visualization.

**Parameters:**
- `level` (int): The level of the lift.

---

#### setLiftPosition

```lua
sm.visualization.setLiftPosition(pos)
```
`Client-Only`  

Sets the lift position of the lift visualization.

**Parameters:**
- `pos` ([Vec3](/Shared-Features/Userdata/Vec3)): The position of the lift.

---

#### setLiftValid

```lua
sm.visualization.setLiftValid(valid)
```
`Client-Only`  

Controls the rendering of the lift visualization.

**Parameters:**
- `valid` (boolean): Whether the lift renders as valid or invalid.

---

#### setLiftVisible

```lua
sm.visualization.setLiftVisible(visible)
```
`Client-Only`  

Controls the visibility of the lift visualization.

**Parameters:**
- `visible` (boolean): Whether the lift is visible or not.

---
