---
sidebar_position: 26
title: sm.item
hide_title: true
sidebar-label: 'sm.item'
---

## sm.item

The item library allows for fetching static information about items.

### Functions

#### getCharacterShape

```lua
local characterData = sm.item.getCharacterShape(uuid)
```

Returns character and placement information for the given character shape.  
A character shape is a hidden shape used for placing a character in the player's carry container.  
This is, for example, used for carrying the glow worm NPC.  
It is registered through the use of the `characterShape` key in the characterset JSON.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The shape UUID.

**Returns:**
- `characterData` (table): A table containing the character UUID and placement sphere radius for the character.

---

#### getEdible

```lua
local edibleData = sm.item.getEdible(uuid)
```

Returns data parsed from the `edible` key in the shape's shapeset JSON entry.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The shape UUID.

**Returns:**
- `edibleData` (table): The table containing the edible shape data.

---

#### getFeatureData

```lua
local featureData = sm.item.getFeatureData(uuid)
```

Returns the shape's feature data.  
This is parsed from the shape's interactable type key in the shapeset JSON entry.  

For example, if the shape is a `spring`, this may return:
```lua title="Example Output"
{
	length = 3,
	defaultStiffnessLevel = 2,
	stiffnessLevels = {
		{
			"stiffness": 0
		},
		{
			"stiffness": 7500
		},
		{
			"stiffness": 20000
		}
	}
}
```

If the shape is `scripted`, this returns the script file/name information, a seat returns seat information, etc., etc.

Note that this does **not** include the actual JSON key.  
As such, this can (should) not be used to determine an item's interactable type.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The shape UUID.

**Returns:**
- `featureData` (table): The feature data.

---

#### getInteractablesUuidsOfType

```lua
local uuids = sm.item.getInteractablesUuidsOfType(interactableType)
```

Returns an array of all interactable shape UUIDs matching the given [interactable type](sm.interactable#types).  
If the given type name is not in the types list, the returned array will contain the UUIDs of all blocks, parts and wedges
that do **not** have an interactive type or who's type is **not** in the interactable types list.

**Parameters:**
- `interactableType` (string): The interactable type name.

**Returns:**
- `uuids` (table): The array of shape UUIDs matching the given type.

---

#### getPlantable

```lua
local plantData = sm.item.getPlantable(uuid)
```

Returns data parsed from the `plantable` key in the shape's shapeset JSON entry.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The shape UUID.

**Returns:**
- `plantData` (table): The table containing the plantable shape data.

---

#### getPlantableUuids

```lua
local plantableUuids = sm.item.getPlantableUuids()
```

Returns an array of all plantable shape UUIDs.

**Returns:**
- `plantableUuids` (table): The array of plantable shape UUIDs.

---

#### getQualityLevel

```lua
local quality = sm.item.getQualityLevel(uuid)
```

Returns the quality level of the shape.  
This determines how easily things such as attacks or explosions can destroy the shape.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The shape UUID.

**Returns:**
- `quality` (int): The quality level.

---

#### getShapeDefaultColor

```lua
local defaultColor = sm.item.getShapeDefaultColor(uuid)
```

Returns the default color of the shape.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The shape UUID.

**Returns:**
- `defaultColor` ([Color](/Shared-Features/Userdata/Color)): The color.

---

#### getShapeOffset

```lua
local offset = sm.item.getShapeOffset(uuid)
```

Returns the shape placement offset.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The shape UUID.

**Returns:**
- `offset` ([Vec3](/Shared-Features/Userdata/Vec3)): The placement offset.

---

#### getShapeSize

```lua
local size = sm.item.getShapeSize(uuid)
```

Returns the block dimensions of a shape.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The shape UUID.

**Returns:**
- `size` ([Vec3](/Shared-Features/Userdata/Vec3)): The shape size.

---

#### isBlock

```lua
local isBlock = sm.item.isBlock(uuid)
```

Returns whether an item is a block shape or not.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.

**Returns:**
- `isBlock` (boolean): Whether the item is a block or not.

---

#### isHarvestablePart

```lua
local isHvs = sm.item.isHarvestablePart(uuid)
```

Returns whether the given UUID belongs to a harvestable shape.

This is the case when the tested shape UUID belongs to a part that has the `"harvestablePart"` property  
set to `true` in its shapeset JSON entry.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.

**Returns:**
- `isHvs` (boolean): Whether the UUID belongs to a harvestable shape or not.

---

#### isJoint

```lua
local isJoint = sm.item.isJoint(uuid)
```

Returns whether an item is a joint or not.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.

**Returns:**
- `isJoint` (boolean): Whether the item is a joint or not.

---

#### isPart

```lua
local isPart = sm.item.isPart(uuid)
```

Returns whether an item is a part shape or not.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.

**Returns:**
- `isPart` (boolean): Whether the item is a part or not.

---

#### isTool

```lua
local isTool = sm.item.isTool(uuid)
```

Returns whether an item is a tool or not.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.

**Returns:**
- `isTool` (boolean): Whether the item is a tool or not.

---

#### isBlueprintShape

```lua
local isBlueprint = sm.item.isBlueprintShape(uuid)
```

Returns whether an item is a blueprint shape or not.

:::info note
Blueprint shapes are not fully supported yet.
:::

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.

**Returns:**
- `isBlueprint` (boolean): Whether the item is a blueprint shape or not.

---
