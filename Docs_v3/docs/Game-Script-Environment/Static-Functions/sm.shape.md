---
sidebar_position: 44
title: sm.shape
hide_title: true
sidebar-label: 'sm.shape'
---

## sm.shape

**Associated object type:** [Shape](../Userdata/Shape)

A [Shape](../Userdata/Shape) is any block, part or basic material that can be built by a player.  
Shapes are always in a [Body](../Userdata/Body), which is a collection of [Shape](../Userdata/Shape)s.

For more information about creating custom scripted shapes, see [ShapeClass](../Script-Classes/ShapeClass).

### Functions

#### createBlock

```lua
local shape = sm.shape.createBlock(uuid, size, position, rotation, dynamic, forceSpawn)
```
`Server-Only`  

Creates a new block shape.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The block UUID.
- `size` ([Vec3](/Shared-Features/Userdata/Vec3)): The block size.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The world position.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat), optional): The world rotation. Defaults to identity.
- `dynamic` (boolean, optional): Whether the shape is dynamic or static. Defaults to true (dynamic).
- `forceSpawn` (boolean, optional): Whether to force spawn the shape or not. Defaults to false.

**Returns:**
- `shape` ([Shape](../Userdata/Shape)): The created shape.

---

#### createPart

```lua
local shape = sm.shape.createPart(uuid, position, rotation, dynamic, forceSpawn)
```
`Server-Only`  

Creates a new part.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The part uuid.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The the world position.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat), optional): The world rotation. Defaults to identity.
- `dynamic` (boolean, optional): Whether the shape is dynamic or static. Defaults to true (dynamic).
- `forceSpawn` (boolean, optional): Whether to force spawn the shape or not.

**Returns:**
- `shape` ([Shape](../Userdata/Shape)): The created shape.

---

#### getShapeDescription

```lua
local description = sm.shape.getShapeDescription(uuid)
```

Returns the item description for the given UUID.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.

**Returns:**
- `description` (string): The description.

---

#### getShapeIcon

```lua
sm.shape.getShapeIcon(uuid)
```

Not implemented.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.

---

#### getShapeTitle

```lua
local title = sm.shape.getShapeTitle(uuid)
```

Returns the item's name for the given UUID.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.

**Returns:**
- `title` (string): The shape's name.

---

#### getShapeTypeColor

```lua
local color = sm.shape.getShapeTypeColor(uuid)
```

Returns the color of the UUID's shape type.  
This is the category color in the player inventory.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.

**Returns:**
- `color` ([Color](/Shared-Features/Userdata/Color)): The color of the shape type.

---

#### uuidExists

```lua
local exists = sm.shape.uuidExists(uuid)
```

Returns whether a shape with the given UUID exists.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The shape UUID.

**Returns:**
- `exists` (boolean): Whether a shape with this UUID exists or not.

---
