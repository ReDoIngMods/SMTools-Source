---
sidebar_position: 13
title: sm.construction
hide_title: true
sidebar-label: 'sm.construction'
---

## sm.construction

The construction library provides methods for interacting with the shape construction system.

### Constants

#### constants

Constants used by the construction system.

`subdivideRatio`: The physical size of one block.  
`subdivideRatio_2`: Half the size of one block.  
`subdivisions`: Number of blocks per meter (`1 / subdivideRatio`).  
`shapeSpacing`: Spacing distance between different shapes in the same body.

```lua
sm.construction.constants = {   
    subdivideRatio = 0.25,
    subdivideRatio_2 = 0.125,
    subdivisions = 4,
    shapeSpacing = 0.004 
}
```
---

### Functions

#### buildBlock

```lua
sm.construction.buildBlock(uuid, position, target)
```
`Server-Only`  

Builds a block.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The block UUID.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The block position. Local position if building on a target, global if building on terrain.
- `target` ([Shape](../Userdata/Shape)/[Joint](../Userdata/Joint)/[Lift](../Userdata/Lift)/nil): The target object to build the block on. Use nil to build on terrain.

---

#### validateLocalPosition

```lua
local valid = sm.construction.validateLocalPosition(uuid, position, normal, target)
```

Validates whether a block can be built at the target position.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The block UUID.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The block position. Local position if building on a target, global if building on terrain.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The normal of the surface to validate placement.
- `target` ([Shape](../Userdata/Shape)/[Joint](../Userdata/Joint)/[Lift](../Userdata/Lift)/nil): The target object to validate on. Use nil to validate on terrain.

**Parameters:**
- `valid` (boolean): Whether the position is valid or not.

---
