---
sidebar_position: 26
title: Tool
hide_title: true
sidebar-label: 'Tool'
---

## Tool

**Associated namespace:** [sm.tool](../Static-Functions/sm.tool)

A userdata object representing a **handheld tool** in the game.

**Values:**

- `id` [** int **]  

	- `Get`: The tool's id.

## functions

### getAnimationInfo

```lua
tool:getAnimationInfo( name )
```
`Client-Only`  

Returns general information for a third person view animation.

The `name` and `looping` properties are extracted from the animation JSON data:

```json
{
	"name": "my_animation",	//the 'name' in the returned table
	"file": "$CONTENT_DATA/Tools/Animations/my_animation.dae",
	"looping": true	//the 'looping' property in the returned table
}
```
The `duration` property is extracted from the animation.dae file specified in the animation JSON.

This function may return `nil` if it fails to get the animation info.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `name` (string): The animation name.

**Returns:**
- (table): A table containing information about the animation (see below).

**Table Content:**  

- `name` (string): The animation's name.
- `duration` (number): The animation's duration
- `looping` (boolean): Whether the animation is looping or not.

---

### getCameraWeights

```lua
tool:getCameraWeights()
```
`Client-Only`  

Returns the current weights for the tool's local camera settings.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

**Returns:**
- (number): The third-person weight.
- (number): The first-person weight.

---

### getDirection

```lua
tool:getDirection()
```
`Client-Only`  

Returns the player's view/aim direction.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The aim direction.

---

### getFpAnimationInfo

```lua
tool:getFpAnimationInfo( name )
```
`Client-Only`  

Returns general information for a first person view animation.

The `name` and `looping` properties are extracted from the animation JSON data:

```json
{
	"name": "my_animation",	//the 'name' in the returned table
	"file": "$CONTENT_DATA/Tools/Animations/my_animation.dae",
	"looping": true	//the 'looping' property in the returned table
}
```
The `duration` property is extracted from the animation.dae file specified in the animation JSON.

This function may return `nil` if it fails to get the animation info.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `name` (string): The animation name.

**Returns:**
- (table): A table containing information about the animation (see below).

**Table Content:**  

- `name` (string): The animation's name.
- `duration` (number): The animation's duration
- `looping` (boolean): Whether the animation is looping or not.

---

### getFpBonePos

```lua
tool:getFpBonePos( joint )
```
`Client-Only`  

Returns the world position for a bone in the first person view animation skeleton.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `joint` (string): The name of the joint.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The joint position.

---

### getId

```lua
tool:getId()
```

Returns the tool's id.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

**Returns:**
- (int): The tool's id.

---

### getMovementSpeedFraction

```lua
tool:getMovementSpeedFraction()
```
`Client-Only`  

Returns the fraction of the player's movement speed in proportion to its maximum.  
This is affected by sprinting, crouching, blocking, aiming, etc.

`sprinting` = 1.0  
`blocking` = 0.5  
`crouching` = 0.375  
`aiming` = 0.3125  

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

**Returns:**
- (number): The movement speed fraction.

---

### getMovementVelocity

```lua
tool:getMovementVelocity()
```
`Client-Only`  

Returns the movement velocity of the player.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The player's velocity.

---

### getOwner

```lua
tool:getOwner()
```

Returns the player that owns the tool.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

**Returns:**
- ([Player](../Userdata/Player)): The tool's owner.

---

### getPosition

```lua
tool:getPosition()
```
`Client-Only`  

Returns the world position of the tool's owner.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The owner's world position.

---

### getRelativeMoveDirection

```lua
tool:getRelativeMoveDirection()
```
`Client-Only`  

Returns the relative movement direction of the player.  
This is the direction the player wants to move based on movement input.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The player's relative movement direction.

---

### getSmoothDirection

```lua
tool:getSmoothDirection()
```
`Client-Only`  

Provides a smoother way of getting the direction of the player  
holding the tool while playing in multiplayer.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The player's direction.

---

### getTpBoneDir

```lua
tool:getTpBoneDir( bone )
```
`Client-Only`  

Returns the world direction for a bone in the third person view animation skeleton.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `bone` (string): The bone name.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The bone direction.

---

### getTpBonePos

```lua
tool:getTpBonePos( bone )
```
`Client-Only`  

Returns the world position for a bone in the third person view animation skeleton.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `bone` (string): The bone name.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The bone position.

---

### isCrouching

```lua
tool:isCrouching()
```
`Client-Only`  

Returns whether the tool's owner is currently crouching.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

**Returns:**
- (boolean): Whether the owner is crouching or not.

---

### isEquipped

```lua
tool:isEquipped()
```
`Client-Only`  

Returns whether the tool is equipped.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

**Returns:**
- (boolean): Whether the tool is equipped or not.

---

### isInFirstPersonView

```lua
tool:isInFirstPersonView()
```
`Client-Only`  

Returns whether the player is in first person view where the viewpoint is rendered from the player's perspective.  
Otherwise, the player is in third person view where the camera is behind the player.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

**Returns:**
- (boolean): Whether the tool in first person view or not.

---

### isLocal

```lua
tool:isLocal()
```
`Client-Only`  

Returns whether the player holding the tool is the same as the [Local Player](../Static-Functions/sm.localPlayer)

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

**Returns:**
- (boolean): Whether tool is local or not.

---

### isOnGround

```lua
tool:isOnGround()
```
`Client-Only`  

Returns whether the tool's owner is currently standing on the ground.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

**Returns:**
- (boolean): Whether the owner is on the ground or not.

---

### isSprinting

```lua
tool:isSprinting()
```
`Client-Only`  

Returns whether the tool's owner is currently sprinting.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.

**Returns:**
- (boolean): Whether the owner is sprinting or not.

---

### setBlockSprint

```lua
tool:setBlockSprint( state )
```
`Client-Only`  

Sets whether the player is unable to sprint.  
Sprinting is normally blocked when the player is attacking, blocking, aiming, etc.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `state` (boolean): Whether sprinting is blocked or not.

---

### setCrossHairAlpha

```lua
tool:setCrossHairAlpha( alpha )
```
`Client-Only`  

Sets the opacity of the crosshair.  
An alpha value of 0 makes the crosshair transparent.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `alpha` (number): The alpha value.

---

### setDispersionFraction

```lua
tool:setDispersionFraction( fraction )
```
`Client-Only`  

Sets the tool's dispersion fraction.  
This represents the accuracy of the tool, and affects the size of the player's crosshair.

A dispersion value of 0 is perfect accuracy, whereas 1 is the worst.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `fraction` (number): The dispersion fraction.

---

### setFpColor

```lua
tool:setFpColor( color )
```
`Client-Only`  

Sets the tool's color in first person view.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `color` ([Color](/Shared-Features/Userdata/Color)): The color.

---

### setFpRenderables

```lua
tool:setFpRenderables( renderables )
```
`Client-Only`  

Sets the renderables (files containing model data) to be used for the character in first person view.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `renderables` (table): The table containing the renderable filepaths.

---

### setInteractionTextSuppressed

```lua
tool:setInteractionTextSuppressed( state )
```
`Client-Only`  

Sets whether interaction texts are suppressed for the player.  
This means the player won't be able to see `Press E to use` and similar texts when looking at an interactable.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `state` (boolean): Whether the text is suppressed or not.

---

### setMovementAnimation

```lua
tool:setMovementAnimation( name, animation )
```
`Client-Only`  

Sets the current third person view movement animation to be used by the tool.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `name` (string): The name.
- `animation` (string): The animation.

---

### setMovementSlowDown

```lua
tool:setMovementSlowDown( slowdown )
```
`Client-Only`  

Sets whether the player is slowed down.  
This is similar to crouching and normally occurs when the player is aiming.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `slowdown` (boolean): Whether the player is slowed down or not.

---

### setTpColor

```lua
tool:setTpColor( color )
```
`Client-Only`  

Sets the tool's color in third person view.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `color` ([Color](/Shared-Features/Userdata/Color)): The color.

---

### setTpRenderables

```lua
tool:setTpRenderables( renderables )
```
`Client-Only`  

Sets the renderables (files containing model data) to be used for the character in third person view.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `renderables` (table): The table containing the renderable filepaths.

---

### updateAnimation

```lua
tool:updateAnimation( name, time, weight )
```
`Client-Only`  

Updates a third person view animation.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `name` (string): The animation name.
- `time` (number): The time.
- `weight` (number): The weight.

---

### updateCamera

```lua
tool:updateCamera( distance, fov, offset, weight )
```
`Client-Only`  

Updates the third person view camera for the tool.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `distance` (number): The distance.
- `fov` (number): The FOV.
- `offset` ([Vec3](/Shared-Features/Userdata/Vec3)): The offset position.
- `weight` (number): The weight.

---

### updateFpAnimation

```lua
tool:updateFpAnimation( name, time, weight=-1.0, looping )
```
`Client-Only`  

Updates a first person view animation.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `name` (string): The animation name.
- `time` (number): The time.
- `weight` (number): The weight.
- `looping` [** looping **]: Whether the animation is looping or not.

---

### updateFpCamera

```lua
tool:updateFpCamera( fov, offset, weight, bobbing )
```
`Client-Only`  

Updates the first person view camera for the tool.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `fov` (number): The FOV.
- `offset` ([Vec3](/Shared-Features/Userdata/Vec3)): The offset position.
- `weight` (number): The weight.
- `bobbing` (number): The bobbing.

---

### updateJoint

```lua
tool:updateJoint( name, rotation, weight )
```
`Client-Only`  

Sets the rotation and weight for a bone in the animation skeleton.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `name` (string): The name.
- `rotation` ([Vec3](/Shared-Features/Userdata/Vec3)): The rotation.
- `weight` (number): The weight.

---

### updateMovementAnimation

```lua
tool:updateMovementAnimation( time, weight )
```
`Client-Only`  

Updates the currently set third person view movement animation for the tool.

**Parameters:**
- `tool` ([Tool](../Userdata/Tool)): The tool.
- `time` (number): The time.
- `weight` (number): The weight.

---

