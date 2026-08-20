---
sidebar_position: 9
title: sm.cell
hide_title: true
sidebar-label: 'sm.cell'
---

## sm.cell

The cell library provides methods to fetch information from terrain cells during the world loading process.  
These methods are usually used in the [cell load callbacks](../Script-Classes/WorldClass#server_oncellcreated) in the [World Script Class](../Script-Classes/WorldClass).

### Functions

#### getHarvestables

```lua
local harvestables = sm.cell.getHarvestables(x, y, size)
```
`Server-Only`  

Returns an array of harvestables in the cell at the given index that match the given size.

Sizes are:  
0: Tiny - plants and crops.  
1: Small - small trees and rocks.  
2: Medium - medium trees, visible at a long distance.  
3: Large - large trees, visible at a very long distance.

**Parameters:**
- `x` (int): The X index.
- `y` (int): The Y index.
- `size` (int): The harvestable size (defaults to all).

**Returns:**
- `harvestables` (table): The array of harvestables matching the given size.

---

#### getInteractablesByAnyUuid

```lua
local interactables = sm.cell.getInteractablesByAnyUuid(x, y, uuids)
```
`Server-Only`  

Returns an array of [Interactable](../Userdata/Interactable)s in the cell at the given index that match any of the given [Uuid](/Shared-Features/Userdata/Uuid)s.

:::info note
This is only usable in a [server_onCellLoaded](../Script-Classes/WorldClass#server_oncellloaded) callback.
:::

**Parameters:**
- `x` (int): The X index.
- `y` (int): The Y index.
- `uuids` (table): The array of UUIDs to match interactables against.

**Returns:**
- `interactables` (table): The array of interactables matching any of the given UUIDs.

---

#### getInteractablesByTag

```lua
local interactables = sm.cell.getInteractablesByTag(x, y, tag)
```
`Server-Only`  

Returns an array of [Interactables](../Userdata/Interactable) in the cell at the given index that contain the given tag.

:::info note
This is only usable in a [server_onCellLoaded](../Script-Classes/WorldClass#server_oncellloaded) callback.
:::

**Parameters:**
- `x` (int): The X index.
- `y` (int): The Y index.
- `tag` (string): The tag to match with.

**Returns:**
- `interactables` (table): The array of interactables matching the given tag.

---

#### getInteractablesByTags

```lua
local interactables = sm.cell.getInteractablesByTags(x, y, tags)
```
`Server-Only`  

Returns an array of [Interactable](../Userdata/Interactable)s in the cell at the given index that contain all of the given tags.

:::info note
This is only usable in a [server_onCellLoaded](../Script-Classes/WorldClass#server_oncellloaded) callback.
:::

**Parameters:**
- `x` (int): The X index.
- `y` (int): The Y index.
- `tags` (table): The array of tags to match with.

**Returns:**
- `interactables` (table): The array of interactables matching the given tags.

---

#### getInteractablesByUuid

```lua
local interactables = sm.cell.getInteractablesByUuid(x, y, uuid)
```
`Server-Only`  

Returns an array of [Interactable](../Userdata/Interactable)s in the cell at the given index that match the given [Uuid](/Shared-Features/Userdata/Uuid).

:::info note
This is only usable in a [server_onCellLoaded](../Script-Classes/WorldClass#server_oncellloaded) callback.
:::

**Parameters:**
- `x` (int): The X index.
- `y` (int): The Y index.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The interactable shape UUID.

**Returns:**
- (table): The array of interactables matching the given UUID.

---

#### getNodesByTag

```lua
local nodes = sm.cell.getNodesByTag(x, y, tag)
```
`Server-Only`  

Returns an array of node data tables in the cell at the given index that contain the given tag.

**Parameters:**
- `x` (int): The X index.
- `y` (int): The Y index.
- `tag` (string): The tag to match with.

**Returns:**
- `nodes` (table): The array containing node data for each node (see structure below).

```lua title="Table Structure"
{
	{
		position = Vec3,
		rotation = Quat,
		scale = Vec3,
		tags = {string, ...},
		params = {...}
	}
}
```

---

#### getNodesByTags

```lua
sm.cell.getNodesByTags(x, y, tags)
```
`Server-Only`  

Returns an array of node data tables in the cell at the given index that contain all of the given tags.

**Parameters:**
- `x` (int): The X index.
- `y` (int): The Y index.
- `tags` (table): The array of tags to match with.

**Returns:**
- (table): The array containing node data for each node (see structure below).

```lua title="Table Structure"
{
	{
		position = Vec3,
		rotation = Quat,
		scale = Vec3,
		tags = {string, ...},
		params = {...}
	}
}
```

---

#### getTags

```lua
local tags = sm.cell.getTags(x, y)
```
`Server-Only`  

Returns an array of tags in the cell at the given index.

**Parameters:**
- `x` (int): The X index.
- `y` (int): The Y index.

**Returns:**
- `tags` (table): The array of tags.

---
