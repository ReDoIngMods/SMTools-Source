---
sidebar_position: 4
title: Body
hide_title: true
sidebar-label: 'Body'
---

## Body

**Associated namespace:** [sm.body](../Static-Functions/sm.body)

A userdata object representing a **body** in the game.

**Values:**

- `angularVelocity` [** vec3 **]  

	- `Get`: The angular velocity of the body.


- `buildable` [** bool **]  

	- `Get`: Whether the body is buildable or not.
	- `Set`: (Server-Only) Controls whether a body is buildable.


- `centerOfMassPosition ` [** vec3 **]  

	- `Get`: The center of mass world position of a body.


- `connectable` [** bool **]  

	- `Get`: Whether the body is connectable or not.
	- `Set`: (Server-Only) Controls whether a body is connectable.


- `convertableToDynamic` [** bool **]  

	- `Get`: Whether the body is convertible to dynamic or not.
	- `Set`: (Server-Only) Controls whether a body is convertible to dynamic.


- `destructable` [** bool **]  

	- `Get`: Whether the body is destructable or not.
	- `Set`: (Server-Only) Controls whether a body is destructable.


- `erasable` [** bool **]  

	- `Get`: Whether the body is erasable or not.
	- `Set`: (Server-Only) Controls whether a body is erasable.


- `id` [** int **]  

	- `Get`: The id of the body.


- `liftable` [** bool **]  

	- `Get`: Whether the body is liftable or not.
	- `Set`: (Server-Only) Controls whether a body is liftable.


- `mass` [** number **]  

	- `Get`: The mass of the body.


- `paintable` [** bool **]  

	- `Get`: Whether the body is paintable or not.
	- `Set`: (Server-Only) Controls whether a body is paintable.


- `usable` [** bool **]  

	- `Get`: Whether the body is interactable or not.
	- `Set`: (Server-Only) Controls whether a body is interactable.


- `velocity` [** vec3 **]  

	- `Get`: The linear velocity of the body.


- `worldPosition` [** vec3 **]  

	- `Get`: The world position of the body.


- `worldRotation` [** quat **]  

	- `Get`: The world rotation of the body.


**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `Body` == `Body` | Checks if two instances of `Body` refer to the same `Body`. |

## Functions

### createBlock

```lua
body:createBlock( uuid, size, position, forceAccept )
```
`Server-Only`  

Creates a block on the body.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): 	The uuid of the shape.
- `size` ([Vec3](/Shared-Features/Userdata/Vec3)): The shape's size.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The shape's local position.
- `forceAccept` (boolean): Set true to force the body to accept the shape. (Defaults to true)

**Returns:**
- ([Shape](../Userdata/Shape)): The created shape.

---

### createPart

```lua
body:createPart( uuid, position, z-axis, x-axis, forceAccept )
```
`Server-Only`  

Creates a part on the body.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): 	The uuid of the shape.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The shape's local position.
- `z-axis` ([Vec3](/Shared-Features/Userdata/Vec3)): The shape's local z direction.
- `x-axis` ([Vec3](/Shared-Features/Userdata/Vec3)): The shape's local x direction.
- `forceAccept` (boolean): Set true to force the body to accept the shape. (Defaults to true)

**Returns:**
- ([Shape](../Userdata/Shape)): The created shape.


---

### getAllSeatedCharacter

```lua
body:getAllSeatedCharacter()
```
`Server-Only`  

Returns a table with all seated characters in this body.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (table): The table of all seated characters.

---

### getAngularVelocity

```lua
body:getAngularVelocity()
```
`Server + Client`  

Returns the angular velocity of the body.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The body's angular velocity.

---

### getCenterOfMassPosition

```lua
body:getCenterOfMassPosition()
```
`Server + Client`  

Returns the center of mass world position of the body.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The body's center of mass position.

---

### getCreationBodies

```lua
body:getCreationBodies()
```
`Server + Client`  

Returns a table of all bodies in the creation.

A creation includes all bodies connected by [joints](../Userdata/Joint), etc.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (table): The table of all bodies in the creation. 

---

### getCreationId

```lua
body:getCreationId()
```
`Server-Only`  

Returns the id of the creation.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (int): The id of the creation. 

---

### getCreationJoints

```lua
body:getCreationJoints()
```
`Server + Client`  

Returns a table of all [joints](../Userdata/Joint) that are part of the creation.

A creation includes all bodies connected by [joints](../Userdata/Joint), etc.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (table): The table of joints in the creation.

---

### getCreationShapes

```lua
body:getCreationShapes()
```
`Server + Client`  

Returns a table of all [shapes](../Userdata/Shape) that are part of the creation.

A creation includes all bodies connected by [joints](../Userdata/Joint), etc.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (table): The table of shapes in the creation.

---

### getId

```lua
body:getId()
```
`Server + Client`  

Returns the id of the body.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (int): The id of the body.

---

### getInteractables

```lua
body:getInteractables()
```
`Server + Client`  

Returns a table of all [interactables](../Userdata/Interactable) that are part of a body.

This will **not** return interactables in neighbouring bodies connected by [joints](../Userdata/Joint), etc.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (table): The table of interactables in the body.

---

### getJoints

```lua
body:getJoints()
```
`Server + Client`  

Returns a table of all [joints](../Userdata/Joint) that are part of a body.

This will **not** return joints in neighbouring bodies.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (table): The table of joints in the body.

---

### getLocalAabb

```lua
body:getLocalAabb()
```
`Server + Client`  

Returns the local aabb of the body.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The aabb min.
- ([Vec3](/Shared-Features/Userdata/Vec3)): The aabb max.

---

### getMass

```lua
body:getMass()
```
`Server + Client`  

Returns the mass of the body.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (number): The mass of the body.

---

### getShapes

```lua
body:getShapes()
```
`Server + Client`  

Returns a table of all [shapes](../Userdata/Shape) that are part of the body.

This will **not** return shapes in neighbouring bodies connected by [joints](../Userdata/Joint), etc.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (table): The table of shapes in the body.

---

### getVelocity

```lua
body:getVelocity()
```
`Server + Client`  

Returns the linear velocity of the body.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The linear velocity of the body.

---

### getWorld

```lua
body:getWorld()
```
`Server + Client`  

Returns the world that the body exists in.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- ([World](../Userdata/World)): The world of the body.

---

### getWorldAabb

```lua
body:getWorldAabb()
```
`Server + Client`  

Returns the world aabb of the body.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The aabb min.
- ([Vec3](/Shared-Features/Userdata/Vec3)): The aabb max.

---

### getWorldPosition

```lua
body:getWorldPosition()
```
`Server + Client`  

Returns the world position of the body.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The body's world position.

---

### hasChanged

```lua
body:hasChanged( tick )
```
`Server + Client`  

Returns true if the given tick is lower than the tick the body was last changed.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.
- `tick` (int): The tick.

**Returns:**
- (boolean): True if the body has changed.

---

### isBuildable

```lua
body:isBuildable()
```
`Server + Client`  

Returns whether the body is buildable or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (boolean): Whether the body is buildable or not.

---

### isConnectable

```lua
body:isConnectable()
```
`Server + Client`  

Returns whether the body is connectable or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (boolean): Whether the body is connectable or not.

---

### isConvertibleToDynamic

```lua
body:isConvertibleToDynamic()
```
`Server + Client`  

Returns whether the body is convertable to dynamic or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (boolean): Whether the body is convertable to dynamic or not.

---

### isDestructable

```lua
body:isDestructable()
```
`Server + Client`  

Returns whether the body is destructable or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (boolean): Whether the body is destructable or not.

---

### isDynamic

```lua
body:isDynamic()
```
`Server + Client`  

Returns whether the body is dynamic or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (boolean): Whether the body is dynamic or not.

---

### isErasable

```lua
body:isErasable()
```
`Server + Client`  

Returns whether the body is erasable or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (boolean): Whether the body is erasable or not.

---

### isLiftable

```lua
body:isLiftable()
```
`Server + Client`  

Returns whether the body is liftable or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (boolean): Whether the body is liftable or not.

---

### isOnLift

```lua
body:isOnLift()
```
`Server + Client`  

Returns whether the body is on a lift or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (boolean): Whether the body is on a lift or not.

---

### isPaintable

```lua
body:isPaintable()
```
`Server + Client`  

Returns whether the body is paintable or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (boolean): Whether the body is paintable or not.

---

### isStatic

```lua
body:isStatic()
```
`Server + Client`  

Returns whether the body is static or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (boolean): Whether the body is static or not.

---

### isUsable

```lua
body:isUsable()
```
`Server + Client`  

Returns whether the body is interactable or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.

**Returns:**
- (boolean): Whether the body is interactable or not.

---

### setBuildable

```lua
body:setBuildable( state )
```
`Server-Only`  

Controls whether the body is buildable or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.
- `state` (boolean): Whether the body is buildable or not.

---

### setConnectable

```lua
body:setConnectable( state )
```
`Server-Only`  

Controls whether the body is connectable or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.
- `state` (boolean): Whether the body is connectable or not.

---

### setConvertibleToDynamic

```lua
body:setConvertibleToDynamic( state )
```
`Server-Only`  

Controls whether the body is convertible to dynamic or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.
- `state` (boolean): Whether the body is convertible to dynamic or not.

---

### setDestructable

```lua
body:setDestructable( state )
```
`Server-Only`  

Controls whether the body is destructable or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.
- `state` (boolean): Whether the body is destructable or not.

---

### setErasable

```lua
body:setErasable( state )
```
`Server-Only`  

Controls whether the body is erasable or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.
- `state` (boolean): Whether the body is erasable or not.

---

### setLiftable

```lua
body:setLiftable( state )
```
`Server-Only`  

Controls whether the body is liftable or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.
- `state` (boolean): Whether the body is liftable or not.

---

### setPaintable

```lua
body:setPaintable( state )
```
`Server-Only`  

Controls whether the body is paintable or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.
- `state` (boolean): Whether the body is paintable or not.

---

### setUsable

```lua
body:setUsable( state )
```
`Server-Only`  

Controls whether the body is interactable or not.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.
- `state` (boolean): Whether the body is interactable or not.

---

### transformPoint

```lua
body:transformPoint( point )
```
`Server + Client`  

Transforms a point from local space to world space.

**Parameters:**
- `body` ([Body](../Userdata/Body)): The body.
- `point` ([Vec3](/Shared-Features/Userdata/Vec3)): The point in local space.

**Parameters:**
- `body` ([Vec3](/Shared-Features/Userdata/Vec3)): The point in world space.

---




















