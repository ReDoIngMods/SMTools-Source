---
sidebar_position: 24
title: Shape
hide_title: true
sidebar-label: 'Shape'
---

## Shape

**Associated namespace:** [sm.shape](../Static-Functions/sm.shape)

A userdata object representing a **shape** in the game.

**Values:**

- `at` [** vec3 **]  

	- `Get`: The direction of the shape's front side.


- `body` [** body **]  

	- `Get`: The body that the shape is part of.


- `buildable` [** bool **]  

	- `Get`: Whether the shape is buildable or not.


- `buoyancy` [** number **]  

	- `Get`: The buoyancy multiplier of the shape.


- `color` [** color **]  

	- `Get`: The color of the shape.
	- `Set`: (Server-Only) Sets the color of the shape.


- `connectable` [** bool **]  

	- `Get`: Whether the shape is connectable or not.


- `convertableToDynamic` [** bool **]  

	- `Get`: Whether the shape is convertable to dynamic or not.


- `destructable` [** bool **]  

	- `Get`: Whether the shape is destructable or not.


- `erasable` [** bool **]  

	- `Get`: Whether the shape is erasable or not.


- `id` [** id **]  

	- `Get`: The shape's id.


- `interactable` [** interactable **]  

	- `Get`: The interactable of the shape, if it exists.


- `isBlock` [** bool **]  

	- `Get`: Whether the shape is a block or not.


- `isWedge` [** bool **]  

	- `Get`: Whether the shape is a scalable wedge or not.


- `liftable` [** bool **]  

	- `Get`: Whether the shape is liftable or not.


- `localPosition` [** vec3 **]  

	- `Get`: The local grid position of the shape.


- `localRotation` [** quat **]  

	- `Get`: The local rotation of the shape.


- `mass` [** number **]  

	- `Get`: The shape's mass.


- `material` [** string **]  

	- `Get`: The shape's material.


- `materialId` [** int **]  

	- `Get`: the shape's material id.


- `paintable` [** bool **]  

	- `Get`: Whether the shape is paintable or not.


- `right` [** vec3 **]  

	- `Get`: The direction of the shape's right side.


- `stackedAmount` [** int **]  

	- `Get`: The item amount that is stacked in the shape.
	- `Set`: (Server-Only) Sets the item amount that is stacked in the shape.


- `stackedItem` [** uuid **]  

	- `Get`: The item uuid that is stacked in the shape.
	- `Set`: (Server-Only) Sets the item uuid that is stacked in the shape.


- `up` [** vec3 **]  

	- `Get`: The direction of the shape's top side.


- `usable` [** bool **]  

	- `Get`: Whether the shape is interactable or not.


- `shapeUuid` [** uuid **]  

	- `Get`: The shape's uuid.


- `uuid` [** uuid **]  

	- `Get`: The shape's uuid.


- `velocity` [** vec3 **]  

	- `Get`: The shape's linear velocity.


- `worldPosition` [** vec3 **]  

	- `Get`: The world position of the shape.


- `worldRotation` [** quat **]  

	- `Get`: The world rotation of the shape.


- `xAxis` [** vec3 **]  

	- `Get`: The local x-axis vector of the shape.


- `yAxis` [** vec3 **]  

	- `Get`: The local y-axis vector of the shape.


- `zAxis` [** vec3 **]  

	- `Get`: The local z-axis vector of the shape.


**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `Shape` == `Shape` | Checks if two instances of `Shape` refer to the same `Shape`. |

## Functions

### createJoint

```lua
shape:createJoint( uuid, position, direction )
```
`Server-Only`  

Creates a joint on the shape.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The joint's uuid.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The joint's position.
- `direction` ([Vec3](/Shared-Features/Userdata/Vec3)): The joint's normal direction.

**Returns:**
- ([Joint](../Userdata/Joint)): The created joint.

---

### destroyBlock

```lua
shape:destroyBlock( position, size, attackLevel )
```
`Server-Only`  

Destroys a block in the shape.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The local position of the removal box corner.
- `size` ([Vec3](/Shared-Features/Userdata/Vec3)): The size of the removal box (defaults to 1x1x1).
- `attackLevel` (int): Determines which quality level of block the attack can destroy. Setting it to 0 (default) will destroy any block.

---

### destroyPart

```lua
shape:destroyPart( attackLevel )
```
`Server-Only`  

Destroys the part.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.
- `attackLevel` (int): Determines which quality level of block the attack can destroy. Setting it to 0 (default) will destroy any block.

---

### destroyShape

```lua
shape:destroyShape( attackLevel )
```
`Server-Only`  

Destroys the shape.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.
- `attackLevel` (int): Determines which quality level of block the attack can destroy. Setting it to 0 (default) will destroy any block.

---

### getAt

```lua
shape:getAt()
```

Returns the direction of the shape's front side.

The direction is affected by the shape's rotation in the world.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The direction.

---

### getBody

```lua
shape:getBody()
```

Returns the body that the shape is part of.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Body](../Userdata/Body)): The body.

---

### getBoundingBox

```lua
shape:getBoundingBox()
```

Returns the bounding box of the shape - the dimensions that the shape occupies.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The bounding box.

---

### getBuoyancy

```lua
shape:getBuoyancy()
```


Returns the buoyancy multiplier of the shape.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- (number): The buoyancy multiplier.

---

### getClosestBlockLocalPosition

```lua
shape:getClosestBlockLocalPosition( position )
```

Transform a world position to the closest block's local position in a shape.

:::info note
The given shape must be a `block` type, not `part`.
:::

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The world position.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The closest local block position.

---

### getColor

```lua
shape:getColor()
```


Returns the shape's color.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Color](/Shared-Features/Userdata/Color)): The color.

---

### getId

```lua
shape:getId()
```


Returns the shape's id.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- (int): The id.

---

### getInteractable

```lua
shape:getInteractable()
```


Returns the [Interactable](../Userdata/Interactable) of the shape, if it exists.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Interactable](../Userdata/Interactable)): The shape's interactable.

---

### getInterpolatedAt

```lua
shape:getInterpolatedAt()
```


Returns the interpolated direction of the shape's front side.

The direction is affected by the shape's rotation in the world.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The interpolated direction.

---

### getInterpolatedRight

```lua
shape:getInterpolatedRight()
```


Returns the interpolated direction of a shape's right side.

The direction is affected by the shape's rotation in the world.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The interpolated direction.

---

### getInterpolatedUp

```lua
shape:getInterpolatedUp()
```


Returns the interpolated direction of a shape's top side.

The direction is affected by the shape's rotation in the world.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The interpolated direction.

---

### getInterpolatedWorldPosition

```lua
shape:getInterpolatedWorldPosition()
```


Returns the interpolated world position of a shape.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The interpolated position.

---

### getIsHarvest

```lua
shape:getIsHarvest(uuid)
```


Returns whether the uuid belongs to a harvestable.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The uuid.

**Returns:**
- (boolean): Whether the uuid belongs to a harvestable or not.

---

### getIsStackable

```lua
shape:getIsStackable( uuid )
```


Returns whether the uuid belongs to a stackable shape.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The uuid.

**Returns:**
- (boolean): Whether the uuid belongs to a stackable shape or not.

---

### getJoints

```lua
shape:getJoints( onlyChildJoints, onlySubshapes )
```


Returns a table of all [joints](../Userdata/Joint) that are attached to the shape.

Will return all attached joints when `onlyChildJoints` is set to false.

Will only get the joints which are subshapes to the shape when `onlySubshapes` is set to true.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.
- `onlyChildJoints` (boolean): Filters what joints to return (Optional, defaults to true).
- `onlySubshapes` (boolean): Only get joints which are subshapes to the shape (Optional, defaults to false).

**Returns:**
- (table): The table of attached joints.

---

### getLocalPosition

```lua
shape:getLocalPosition()
```


Returns the local grid position of the shape.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The shape's local position.

---

### getLocalRotation

```lua
shape:getLocalRotation()
```


Returns the local grid rotation of the shape.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Quat](/Shared-Features/Userdata/Quat)): The shape's local rotation.

---

### getMass

```lua
shape:getMass()
```


Returns the shape's mass.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- (number): The shape's mass.

---

### getMaterial

```lua
shape:getMaterial()
```


Returns the shape's material.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- (string): The material.

---

### getMaterialId

```lua
shape:getMaterialId()
```


Returns the shape's material id.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- (int): The material id.

---

### getNeighbours

```lua
shape:getNeighbours()
```
`Server-Only`  

Returns a table of "neighbor" shapes that are attached to the shape.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- (table): The table of attached neighbor shapes.

---

### getPipedNeighbours

```lua
shape:getPipedNeighbours()
```
`Server-Only`  

Returns a table of piped "neighbor" shapes that are attached to the shape through pipes.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- (table): The table of piped neighbor shapes.

---

### getRight

```lua
shape:getRight()
```


Returns the direction of the shape's right side.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The direction.

---

### getShapeUuid

```lua
shape:getShapeUuid()
```


Returns the shape's uuid.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Uuid](/Shared-Features/Userdata/Uuid)): The shape's uuid.

---

### getSticky

```lua
shape:getSticky()
```


Returns the sticky directions of the shape for positive xyz and negative xyz.

A value of 1 means that the direction is sticky and a value of 0 means that the direction is not sticky.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The negative sticky directions.
- ([Vec3](/Shared-Features/Userdata/Vec3)): The positive sticky directions.

---

### getUp

```lua
shape:getUp()
```


Returns the direction of the shape's top side.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The direction.

---

### getVelocity

```lua
shape:getVelocity()
```


Returns the shape's linear velocity.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The velocity.

---

### getWorldPosition

```lua
shape:getWorldPosition()
```


Returns the shape's world position.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The position.

---

### getWorldRotation

```lua
shape:getWorldRotation()
```


Returns the shape's world rotation.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Quat](/Shared-Features/Userdata/Quat)): The rotation.

---

### getXAxis

```lua
shape:getXAxis()
```


Returns the local x-axis vector of the shape.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The x-axis vector.

---

### getYAxis

```lua
shape:getYAxis()
```


Returns the local y-axis vector of the shape.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The y-axis vector.

---

### getZAxis

```lua
shape:getZAxis()
```


Returns the local z-axis vector of the shape.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The z-axis vector.

---

### replaceShape

```lua
shape:replaceShape( uuid )
```
`Server-Only`  

Replaces a shape with another.

:::info note
The replacement shape must have the exact same size/bounding box and shape type (e.g. scripted/logic/timer/etc.) as the current shape.

If the shape is a Lua scripted shape, the shape's script is **not** reloaded/recreated after replacement (e.g. its `*_onCreate` callback is **not** called).
:::

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The uuid of the replacement shape.

---

### setColor

```lua
shape:setColor( color )
```
`Server-Only`  

Sets the shape's color.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.
- `color` ([Color](/Shared-Features/Userdata/Color)): The color.

---

### shapeExists

```lua
shape:shapeExists()
```


:::caution warning
This function is deprecated!  
Use [sm.exists](/Shared-Features/Static-Functions/sm#exists) instead.
:::

Returns true if the shape exists.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.

**Returns:**
- (boolean): Whether the shape exists or not.

---

### shapesInSphere

```lua
shape.shapesInSphere( center, radius )
```

:::info note
Due to a bug in the game, this function needs to be called with `.` instead of `:`.
:::

Returns a table of shapes that are inside the sphere.

**Parameters:**
- `center` ([Vec3](/Shared-Features/Userdata/Vec3)): The sphere center position.
- `radius` (number): The sphere radius.

**Returns:**
- (table): The table of shapes in the sphere.

---

### transformDirection

```lua
shape:transformDirection( vector )
```


Transform a world direction to the local shape transform.

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.
- `vector` ([Vec3](/Shared-Features/Userdata/Vec3)): The untransformed direction.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The transformed direction.

---

### transformLocalPoint

```lua
shape:transformLocalPoint( vector )
```


Transforms a local point to world space.

`local worldPos = self.shape:transformLocalPoint( localPos )`  

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.
- `vector` ([Vec3](/Shared-Features/Userdata/Vec3)): The local point.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The world point.

---

### transformPoint

```lua
shape:transformPoint( vector )
```


Transforms a world point to the local shape transform.

`local localpos = self.shape:transformPoint( worldPos )`  

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.
- `vector` ([Vec3](/Shared-Features/Userdata/Vec3)): The world point.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The local point.

---

### transformRotation

```lua
shape:transformRotation( quat )
```


Transforms a world rotation to the local shape transform.

```lua
local worldUp = sm.vec3.new( 0, 0, 1 )
local worldRot = sm.vec3.getRotation( worldUp, worldDir )
local localRot = self.shape:transformRotation( worldRot )
```

**Parameters:**
- `shape` ([Shape](../Userdata/Shape)): The shape.
- `quat` ([Quat](/Shared-Features/Userdata/Quat)): The untransformed quaternion.

**Returns:**
- ([Quat](/Shared-Features/Userdata/Quat)): The transformed quaternion.

---

