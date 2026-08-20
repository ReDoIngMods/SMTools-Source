---
sidebar_position: 13
title: Interactable
hide_title: true
sidebar-label: 'Interactable'
---

## Interactable

**Associated namespace:** [sm.interactable](../Static-Functions/sm.interactable)

A userdata object representing an **interactable shape** in the game.

**Values:**

- `active` [** bool **]  

	- `Get`: The interactable's logic output signal.
	- `Set`: (Server-Only) Sets the interactable's logic output signal.


- `body` [** body **]  

	- `Get`: The interactable shape's body.


- `id` [** int **]  

	- `Get`: The interactable's id.


- `power` [** number **]  

	- `Get`: The interactable's power output signal.
	- `Set`: (Server-Only) Sets the interactable's power output signal.


- `publicData` [** table **]  

	- `Get`: (Server-only) The interactable's server public data.
	- `Set`: (Server-Only) Sets the interactable's server public data.


- `shape` [** shape **]  

	- `Get`: The interactable's shape.


- `type` [** string **]  

	- `Get`: The interactable's type.

	
**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `Interactable` == `Interactable` | Checks if two instances of `Interactable` refer to the same `Interactable`. |

## Functions

### addContainer

```lua
interactable:addContainer( index, size, stackSize )
```
`Server-Only`  

Creates and stores a container in the given index inside the controller.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `index` (int): The index of the container (0 - 15).
- `size` (int): The number of slots in the container.
- `stackSize` (int): The stack size. Defaults to max stack size (65535).

**Returns:**
- ([Container](../Userdata/Container)): The created container.

---

### connect

```lua
interactable:connect( child )
```
`Server-Only`  

Connects the interactable to another compatible interactable. Similar to using the Connect Tool.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `child` ([Interactable](../Userdata/Interactable)): The child (receiving) interactable.

**Returns:**
- (boolean): Whether the connection was successful or not.

---

### connectToJoint

```lua
interactable:connectToJoint( child )
```
`Server-Only`  

Connects the interactable to a compatible joint.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `child` ([Joint](../Userdata/Joint)): The child (receiving) joint.

---

### disconnect

```lua
interactable:disconnect( child )
```
`Server-Only`  

Disconnects the interactable from another interactable. Similar to using the Connect Tool.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `child` ([Interactable](../Userdata/Interactable)): The child interactable.

**Returns:**
- (boolean): Whether the disconnection was successful or not.

---

### getAnimDuration

```lua
interactable:getAnimDuration( name )
```
`Client-Only`  

Returns animation duration in seconds.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `name` (string): The name of the animation.

**Returns:**
- (number): The animation duration.

---

### getBearings

```lua
interactable:getBearings()
```

Returns a table of [bearings](../Userdata/Joint) that the interactable is connected to.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (table): The table of connected bearings.

---

### getBody

```lua
interactable:getBody()
```

Returns the [body](../Userdata/Body) of the interactable's [shape](../Userdata/Shape).

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- ([Body](../Userdata/Body)): The body.

---

### getChildren

```lua
interactable:getChildren( connectionType )
```

Returns a table of child interactables that the interactable is connected to.  
The children listen to the interactable's output.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `connectionType` (int): Connection type filter. Defaults to all types except `bearing` (for backwards compatibility). 

**Returns:**
- (table): The table of connected child interactables.

---

### getColorHighlight

```lua
interactable:getColorHighlight()
```

Returns the connection-point highlight color of the interactable.  
This point color is shown when aiming at the shape with the Connect Tool.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- ([Color](/Shared-Features/Userdata/Color)): The highlight color.

---

### getColorNormal

```lua
interactable:getColorNormal()
```

Returns the connection-point color of the interactable.  
This point color is shown when the Connect Tool is equipped.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- ([Color](/Shared-Features/Userdata/Color)): The color.

---

### getConnectionInputType

```lua
interactable:getConnectionInputType()
```

Returns the interactable's input connection type.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (int): The connection type.

---

### getConnectionOutputType

```lua
interactable:getConnectionOutputType()
```

Returns the interactable's output connection type.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (int): The connection type.

---

### getContainer

```lua
interactable:getContainer( index )
```

Returns the container stored at the given index inside the controller.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `index` (int): The index (default 0).

**Returns:**
- ([Container](../Userdata/Container)): The container.

---

### getGlowMultiplier

```lua
interactable:getGlowMultiplier()
```
`Client-Only`  

Returns the interactable's glow multiplier.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (number): The glow multiplier (0.0 - 1.0).

---

### getId

```lua
interactable:getId()
```

Returns the interactable's id.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (int): The id.

---

### getJoints

```lua
interactable:getJoints()
```

Returns a table of all [joints](../Userdata/Joint) that an interactable is connected to.  
Joints include **bearings** and **pistons**.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (table): The table of connected joints.

---

### getLocalBonePosition

```lua
interactable:getLocalBonePosition( name )
```

Returns the local position of a bone.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `name` (string): The bone name.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The position.

---

### getMaxChildCount

```lua
interactable:getMaxChildCount()
```

Returns the maximum number of allowed child connections of the interactable - the number of outgoing connections.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (int): The max child connection count.

---

### getMaxParentCount

```lua
interactable:getMaxParentCount()
```

Returns the maximum number of allowed parent connections of the interactable - the number of incoming connections.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (int): The max parent connection count.

---

### getParents

```lua
interactable:getParents( connectionType )
```

Returns a table of parent interactables that are connected to the interactable.  
The parents act as the interactable's input.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `connectionType` (int): Connection type filter. Defaults to all types.

**Returns:**
- (table): The table of connected parent interactables.

---

### getPistons

```lua
interactable:getPistons()
```

Returns a table of [pistons](../Userdata/Joint) that the interactable is connected to.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (table): The table of connected pistons.

---

### getPoseWeight

```lua
interactable:getPoseWeight( index )
```
`Client-Only`  

Returns the pose weight of the pose in the given index.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `index` (int): The index.

**Returns:**
- (number): The pose weight.

---

### getPower

```lua
interactable:getPower()
```

Returns the power output signal of the interactable.  
This signal is usually a number between -1 to 1, where 1 is forward and -1 backward.  
However, it can also be used for other numbers.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (number): The power output signal.

---

### getPublicData

```lua
interactable:getPublicData()
```
`Server-Only`  

Returns the interactable's server public data.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (table): The public data.

---

### getSeatCharacter

```lua
interactable:getSeatCharacter()
```

Returns the [Character](../Userdata/Character) that is currently seated in the interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- ([Character](../Userdata/Character)): The seated character.

---

### getSeatInteractables

```lua
interactable:getSeatInteractables()
```

Returns a table of interactables that are connected to the seat.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (table): The table of seat interactables.

---

### getShape

```lua
interactable:getShape()
```

Returns the interactable's [Shape](../Userdata/Shape).

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- ([Shape](../Userdata/Shape)): The interactable's host shape.

---

### getSingleParent

```lua
interactable:getSingleParent()
```

Returns the interactable's parent interactable.  
The parent act as the interactable's input.

:::caution warning
This method is **not** allowed for an interactable that allows more than one parent connection.
:::

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- ([Interactable](../Userdata/Interactable)): The parent interactable.

---

### getSteeringAngle

```lua
interactable:getSteeringAngle()
```

Returns the steering angle of the steering interactable.

The value ranges from -1 to +1, where -1 represents steering right  
and +1 represents steering left.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (number): The steering angle.

---

### getSteeringJointLeftAngleLimit

```lua
interactable:getSteeringJointLeftAngleLimit( joint )
```

Returns the left angle limit of a [Joint](../Userdata/Joint) connected to the steering Interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- (number): The left angle limit.

---

### getSteeringJointLeftAngleSpeed

```lua
interactable:getSteeringJointLeftAngleSpeed( joint )
```

Returns the left angle speed of a [Joint](../Userdata/Joint) connected to the steering Interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- (number): The left angle speed.

---

### getSteeringJointRightAngleLimit

```lua
interactable:getSteeringJointRightAngleLimit( joint )
```

Returns the right angle limit of a [Joint](../Userdata/Joint) connected to the steering Interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- (number): The right angle limit.

---

### getSteeringJointRightAngleSpeed

```lua
interactable:getSteeringJointRightAngleSpeed( joint )
```

Returns the right angle speed of a [Joint](../Userdata/Joint) connected to the steering Interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- (number): The right angle speed.

---

### getSteeringJointSettings

```lua
interactable:getSteeringJointSettings( joint )
```

Returns the settings of a [Joint](../Userdata/Joint) connected to the steering Interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- (number): The left angle speed.
- (number): The right angle speed.
- (number): The left angle limit.
- (number): The right angle limit.
- (boolean): Whether the joint is unlocked or not.

---

### getSteeringJointUnlocked

```lua
interactable:getSteeringJointUnlocked( joint )
```

Returns the lock state of a [Joint](../Userdata/Joint) connected to the steering Interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `joint` ([Joint](../Userdata/Joint)): The joint.

**Returns:**
- (boolean): Whether the joint is unlocked or not.

---

### getSteeringPower

```lua
interactable:getSteeringPower()
```

Returns the steering power of the steering interactable.

The value ranges from -1 to +1, where +1 represents pressing "forward"  
and -1 represents pressing "backwards".

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (number): The steering power.

---

### getType

```lua
interactable:getType()
```

Returns the interactable's type.

See [sm.interactable.types](../Static-Functions/sm.interactable#constants) for details.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (string): The type.

---

### getUvFrameIndex

```lua
interactable:getUvFrameIndex()
```
`Client-Only`  

Returns the index of the current UV animation frame.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (int): The UV frame.

---

### getWorldBonePosition

```lua
interactable:getWorldBonePosition( name )
```

Returns the world position of a bone.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `name` (string): The bone name.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The world position.

---

### hasAnim

```lua
interactable:hasAnim( name )
```
`Client-Only`  

Returns whether an animation exists.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `name` (string): The animation name.

**Returns:**
- (boolean): Whether the animation exists or not.

---

### hasOutputType

```lua
interactable:hasOutputType( type )
```

Returns whether the interactable has the specified output connection type.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `type` (int): The connection type.

**Returns:**
- (boolean): Whether the interactable has the connection type or not.

---

### hasSeat

```lua
interactable:hasSeat()
```

Returns whether the interactable has a seat component.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (boolean): Whether the interactable has a seat component or not.

---

### hasSteering

```lua
interactable:hasSteering()
```

Returns whether the interactable has a steering component.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (boolean): Whether the interactable has a steering component or not.

---


### isActive

```lua
interactable:isActive()
```

Returns the interactable's logic output signal.  
This signal is a boolean, **on** or **off**.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (boolean): The logic output signal.

---

### pressSeatInteractable

```lua
interactable:pressSeatInteractable( index )
```

Triggers a **press** interaction on an interactable connected to the seat.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `index` (int): The index of the interactable.

**Returns:**
- (boolean): Whether the action was successful or not.

---

### releaseSeatInteractable

```lua
interactable:releaseSeatInteractable( index )
```

Triggers a **release** interaction on an interactable connected to the seat.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `index` (int): The index of the interactable.

**Returns:**
- (boolean): Whether the action was successful or not.

---

### removeContainer

```lua
interactable:removeContainer( index )
```
`Server-Only`  

Removes the container stored in the given index inside the controller.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `index` (int): The index of the container.

---

### setActive

```lua
interactable:setActive( signal )
```
`Server-Only`  

Sets the logic output signal of an interactable.  
This signal is a boolean, **on** or **off**.

:::caution warning
Every time an interactable's logic output signal ("active state") changes,  
this change is transmitted over the network to every connected client.

This means, if a large amount of interactables update their states too often, this can have  
a significant impact on multiplayer performance, to the point of becoming almost unplayable.

To avoid causing such problems, change the interactable's "active state" only  
if neccessary (and make sure to **not** set it every tick, if possible).
:::

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `signal` (boolean): The logic output signal.

---

### setAnimEnabled

```lua
interactable:setAnimEnabled( name, enabled )
```
`Client-Only`  

Sets whether the animation with the given name should be applied to the mesh.  
True enables the animation and false disables it.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `name` (string): The animation name.
- `enabled` (boolean): Whether the animation is enabled or not.

---

### setAnimProgress

```lua
interactable:setAnimProgress( name, progress )
```
`Client-Only`  

Sets the progress on the animation with the given name.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `name` (string): The animation name.
- `progress` (number): The progress (between 0 and 1).

---

### setGlowMultiplier

```lua
interactable:setGlowMultiplier( value )
```
`Client-Only`  

Sets a value to multiply the glow from asg texture with.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `value` (number): The glow multiplier.

---

### setGyroDirection

```lua
interactable:setGyroDirection( direction )
```
`Client-Only`  

Sets the direction of the gyro.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `direction` ([Vec3](/Shared-Features/Userdata/Vec3)): The gyro direction.

---

### setParams

```lua
interactable:setParams( data )
```

Sets the interactable's script param data.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `data` (any): The param data.

---

### setPoseWeight

```lua
interactable:setPoseWeight( index, value )
```
`Client-Only`  

Set the pose weight of the pose in the given index.

:::info note
This function will not work if the script's [poseWeightCount](../Script-Classes/ShapeClass#poseweightcount) is not set properly.
:::

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `index` (int): The index.
- `value` (number): The pose weight.

---

### setPower

```lua
interactable:setPower( signal )
```
`Server-Only`  

Returns the power output signal of the interactable.  
This signal is usually a number between -1 to 1, where 1 is forward and -1 backward.  
However, it can also be used for other numbers.

:::caution warning
Every time an interactable's power output signal ("power") changes,  
this change is transmitted over the network to every connected client.

This means, if a large amount of interactables update their "power" too often, this can have  
a significant impact on multiplayer performance, to the point of becoming almost unplayable.

To avoid causing such problems, change the interactable's "power" only  
if neccessary (and make sure to **not** set it every tick, if possible).
:::

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `signal` (number): The power output signal.

---

### setPublicData

```lua
interactable:setPublicData( data )
```
`Server-Only`  

Set the interactable's server public data.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `data` (table): The data to set.

---

### setSeatCharacter

```lua
interactable:setSeatCharacter( character )
```

Requests to seat a [Character](../Userdata/Character) in the Interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `character` ([Character](../Userdata/Character)): The character.

---

### setSteeringFlag

```lua
interactable:setSteeringFlag( flag )
```

Sets the steering flag for the steering interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `flag` (int): The steering flag.

---

### setSteeringJointLeftAngleLimit

```lua
interactable:setSteeringJointLeftAngleLimit( joint, value )
```
`Client-Only`  

Sets the left angle limit settings of a [Joint](../Userdata/Joint) connected to the steering Interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `joint` ([Joint](../Userdata/Joint)): The joint.
- `value` (number): The left angle limit.

---

### setSteeringJointLeftAngleSpeed

```lua
interactable:setSteeringJointLeftAngleSpeed( joint, value )
```
`Client-Only`  

Sets the left angle speed settings of a [Joint](../Userdata/Joint) connected to the steering Interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `joint` ([Joint](../Userdata/Joint)): The joint.
- `value` (number): The left angle speed.

---

### setSteeringJointRightAngleLimit

```lua
interactable:setSteeringJointRightAngleLimit( joint, value )
```
`Client-Only`  

Sets the right angle limit settings of a [Joint](../Userdata/Joint) connected to the steering Interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `joint` ([Joint](../Userdata/Joint)): The joint.
- `value` (number): The right angle limit.

---

### setSteeringJointRightAngleSpeed

```lua
interactable:setSteeringJointRightAngleSpeed( joint, value )
```
`Client-Only`  

Sets the right angle speed settings of a [Joint](../Userdata/Joint) connected to the steering Interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `joint` ([Joint](../Userdata/Joint)): The joint.
- `value` (number): The right angle speed.

---

### setSteeringJointSettings

```lua
interactable:setSteeringJointSettings( joint, leftSpeed, rightSpeed, leftLimit, rightLimit, unlocked )
```
`Client-Only`  

Sets the right angle speed settings of a [Joint](../Userdata/Joint) connected to the steering Interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `joint` ([Joint](../Userdata/Joint)): The joint.
- `leftSpeed` (number): The left angle speed.
- `rightSpeed` (number): The right angle speed.
- `leftLimit` (number): The left angle limit.
- `rightLimit` (number): The right angle limit.
- `unlocked` (boolean): Whether the joint is unlocked or not.

---

### setSteeringJointUnlocked

```lua
interactable:setSteeringJointUnlocked( joint, value )
```
`Client-Only`  

Sets the lock state of a [Joint](../Userdata/Joint) connected to the steering Interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `joint` ([Joint](../Userdata/Joint)): The joint.
- `value` (boolean): Whether the joint is unlocked or not.

---

### setSubMeshVisible

```lua
interactable:setSubMeshVisible( name, visible )
```
`Client-Only`  

Sets the visibility of a submesh.

:::info note
The maximum amount of submeshes for an interactable is **32**.  
For this function to work, the shape must use the `subMeshMap` definition, **not** `subMeshList`.
:::

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `name` (string): The submesh name.
- `visible` (boolean): Whether the submesh is visible or not.

---

### setUvFrameIndex

```lua
interactable:setUvFrameIndex( index )
```
`Client-Only`  

Sets the UV animation frame with the given index.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `index` (int): The index.

---

### unsetSteeringFlag

```lua
interactable:unsetSteeringFlag( flag )
```

Unsets the steering flag for a steering interactable.

**Parameters:**
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.
- `flag` (int): The steering flag.

---