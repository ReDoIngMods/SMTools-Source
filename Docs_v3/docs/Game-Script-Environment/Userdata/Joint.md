---
sidebar_position: 14
title: Joint
hide_title: true
sidebar-label: 'Joint'
---

## Joint

**Associated namespace:** [sm.joint](../Static-Functions/sm.joint)

A userdata object representing a **joint** (bearing, piston, etc.) in the game.

**Values:**

- `angle` [** number **]  

	- `Get`: The bearing's angle.


- `angularVelocity` [** number **]  

	- `Get`: The bearing's angular velocity.


- `appliedImpulse` [** number **]  

	- `Get`: The bearing's applied impulse.


- `color` [** color **]  

	- `Get`: The joint's color.


- `id` [** int **]  

	- `Get`: The joint's id.


- `length` [** number **]  

	- `Get`: The piston's current length in blocks.


- `localPosition` [** vec3 **]  

	- `Get`: The joint's local position.


- `localRotation` [** quat **]  

	- `Get`: The joint's local rotation.


- `reversed` [** bool **]  

	- `Get`: Whether the bearing is reversed (counterclockwise) or not.


- `shapeA` [** shape **]  

	- `Get`: The joint's parent shape. This shape always exists.


- `shapeB` [** shape **]  

	- `Get`: The joint's child shape or nil if no shape is attached.


- `type` [** string **]  

	- `Get`: The joint's type.


- `uuid` [** uuid **]  

	- `Get`: The joint's uuid.


- `worldPosition` [** vec3 **]  

	- `Get`: The joint's world position.


- `xAxis` [** vec3 **]  

	- `Get`: The joint's local x-axis vector.


- `yAxis` [** vec3 **]  

	- `Get`: The joint's local y-axis vector.


- `zAxis` [** vec3 **]  

	- `Get`: The joint's local z-axis vector.


**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `Joint` == `Joint` | Checks if two instances of `Joint` refer to the same `Joint`. |

## Functions

### createBlock

```lua
joint:createBlock( uuid, size, position, forceCreate )
```
`Server-Only`  

Creates a block on the joint.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The shape uuid.
- `size` ([Vec3](/Shared-Features/Userdata/Vec3)): The shape size.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The shape's local position.
- `forceCreate` (boolean): Whether to force creating the shape or not. Defaults to true.

---

### createPart

```lua
joint:createPart( uuid, position, zAxis, xAxis, forceCreate )
```
`Server-Only`  

Creates a part on the joint.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The shape uuid.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The shape's local position.
- `zAxis` ([Vec3](/Shared-Features/Userdata/Vec3)): The shape's local z direction.
- `xAxis` ([Vec3](/Shared-Features/Userdata/Vec3)): The shape's local x direction.
- `forceCreate` (boolean): Whether to force creating the shape or not. Defaults to true.

---

### getAngle

```lua
bearing:getAngle()
```

Returns the bearing's angle.

**Parameters:**
- `bearing` ([Joint](../Userdata/Joint)): The bearing.

**Returns:**
- (number): The bearing's angle (-math.pi - +math.pi).

---

### getAngularVelocity

```lua
bearing:getAngularVelocity()
```

Returns the bearing's angular velocity.

This velocity can be set using [setMotorVelocity](#setMotorVelocity) or [setTargetAngle](#setTargetAngle).

**Parameters:**
- `bearing` ([Joint](../Userdata/Joint)): The bearing.

**Returns:**
- (number): The bearing's angular velocity.

---

### getAppliedImpulse

```lua
bearing:getAppliedImpulse()
```

Returns the bearing's applied impulse.

The applied impulse can be set using [setMotorVelocity](#setMotorVelocity) or [setTargetAngle](#setTargetAngle).

**Parameters:**
- `bearing` ([Joint](../Userdata/Joint)): The bearing.

**Returns:**
- (number): The bearing's applied impulse.

---

### getBoundingBox

```lua
joint:getBoundingBox()
```

Returns the joint's bounding box - the dimensions that it occupies when building.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The joint's bounding box.

---

### getColor

```lua
joint:getColor()
```

Returns the joint's color.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- ([Color](/Shared-Features/Userdata/Color)): The joint's color.

---

### setColor

```lua
joint:setColor( color )
```
`Server-Only`  

Sets the joint's color.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.
- `color` ([Color](/Shared-Features/Userdata/Color)): The color.

---

### getId

```lua
joint:getId()
```

Returns the joint's id.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- (int): The joint's id.

---

### getLength

```lua
piston:getLength()
```

Returns the piston's current length in blocks.

**Parameters:**
- `piston` ([Joint](../Userdata/Joint)): The piston.

**Returns:**
- (number): The joint's id.

---

### getLocalPosition

```lua
joint:getLocalPosition()
```

Returns the joint's local position.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The joint's local position.

---

### getLocalRotation

```lua
joint:getLocalRotation()
```

Returns the joint's local rotation.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- ([Quat](/Shared-Features/Userdata/Quat)): The joint's local rotation.

---

### getShapeA

```lua
joint:getShapeA()
```

Returns the joint's parent shape.  
This is the shape that the joint is attached to.  
This shape always exists.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- ([Shape](../Userdata/Shape)): The joint's parent shape.

---


### getShapeB

```lua
joint:getShapeB()
```

Returns the joint's child shape.  
This is the shape that is attached to the joint.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- ([Shape](../Userdata/Shape)): The joint's child shape.

---

### getShapeUuid

```lua
joint:getShapeUuid()
```

Returns the joint's uuid.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- ([Uuid](/Shared-Features/Userdata/Uuid)): The joint's uuid.

---

### getSticky

```lua
joint:getSticky()
```

Returns the sticky directions of the joint for positive xyz and negative xyz.

A value of 1 means that the direction is sticky and a value of 0 means that the direction is not sticky.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The negative sticky directions.
- ([Vec3](/Shared-Features/Userdata/Vec3)): The positive sticky directions.

---

### getType

```lua
joint:getType()
```

Returns the joint's type.

For details, see [sm.joint.types](../Static-Functions/sm.joint#types).

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- (string): The joint's type.

---

### getWorldPosition

```lua
joint:getWorldPosition()
```

Returns the joint's world position.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The joint's world position.

---

### getWorldRotation

```lua
joint:getWorldRotation()
```

Returns the joint's world rotation.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- ([Quat](/Shared-Features/Userdata/Quat)): The joint's world rotation.

---

### getXAxis

```lua
joint:getXAxis()
```

Returns the joint's local x-axis vector.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The joint's x-axis vector.

---

### getYAxis

```lua
joint:getYAxis()
```

Returns the joint's local y-axis vector.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The joint's y-axis vector.

---

### getZAxis

```lua
joint:getZAxis()
```

Returns the joint's local z-axis vector.

**Parameters:**
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The joint's z-axis vector.

---

### isReversed

```lua
bearing:isReversed()
```

Returns whether the bearing has been reversed using the Connect Tool.  
A reversed bearing rotates counterclockwise.

**Parameters:**
- `bearing` ([Joint](../Userdata/Joint)): The bearing.

**Returns:**
- (boolean): Whether the bearing was reversed or not.

---

### setMotorVelocity

```lua
bearing:setMotorVelocity( targetVelocity, maxImpulse )
```

Sets the motor velocity for a bearing. The bearing will try to maintain the target velocity with the given amount of impulse/strength.

In Scrap Mechanic, the Gas Engine increases both velocity and impulse with every gear.  
The Electric Engine increases velocity, but maintains the same impulse for every gear, making it sturdier.

This method cancels the effects of [setTargetAngle](#setTargetAngle).

**Parameters:**
- `bearing` ([Joint](../Userdata/Joint)): The bearing.
- `targetVelocity` (number): The target velocity.
- `maxImpulse` (number): The max impulse.

---

### setTargetAngle

```lua
bearing:setTargetAngle( targetAngle, targetVelocity, maxImpulse )
```

Sets the target angle for a bearing. The bearing will try to reach the target angle with the target velocity and the given amount of impulse/strength.

The target angle is set to range between `-math.pi` and `+math.pi`.  
The bearing will always try to rotate in the direction closest to the target angle.

This method cancels the effects of [setMotorVelocity](#setMotorVelocity).

**Parameters:**
- `bearing` ([Joint](../Userdata/Joint)): The bearing.
- `targetAngle` (number): The target angle.
- `targetVelocity` (number): The target velocity.
- `maxImpulse` (number): The max impulse.

---

### setTargetLength

```lua
piston:setTargetLength( targetLength, targetVelocity, maxImpulse )
```

Sets the target length for a piston. The piston will try to reach the target length with the target velocity and the given amount of impulse/strength.

The target length is measured in blocks.

This method cancels the effects of setMotorVelocity.

**Parameters:**
- `piston` ([Joint](../Userdata/Joint)): The piston.
- `targetLength` (number): The target length.
- `targetVelocity` (number): The target velocity.
- `maxImpulse` (number): The max impulse.

---