---
sidebar_position: 6
title: Character
hide_title: true
sidebar-label: 'Character'
---

## Character

**Associated namespace:** [sm.character](../Static-Functions/sm.character)

A userdata object representing a **character** in the game.

**Values:**

- `clientPublicData` [** table **]  

	- `Get`: (Client-Only) The character's client public data.
	- `Set`: (Client-Only) Sets the character's client public data.


- `color` [** color **]  

	- `Get`: The character's color.
	- `Set`: (Server-Only) Sets the character's color.


- `direction` [** Vec3 **]  

	- `Get`: The character's view/aim direction.
	

- `smoothDirection` [** Vec3 **]  

	- `Get`: The view/aim direction, smoother in multiplayer.


- `id` [** int **]  

	- `Get`: The id of the character.


- `mass` [** number **]  

	- `Get`: The mass of the character.


- `movementSpeedFraction` [** number **]  

	- `Get`: The character's current movement speed fraction.
	- `Set`: (Server-Only) Sets the character's movement speed fraction.


- `publicData` [** table **]  

	- `Get`: (Server-Only) The character's server public data.
	- `Set`: (Server-Only) Sets the character's server public data.


- `velocity` [** vec3 **]  

	- `Get`: The velocity of the character.


- `worldPosition` [** vec3 **]  

	- `Get`: The world position of the character.


**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `Character` == `Character` | Checks if two instances of `Character` refer to the same `Character`. |

## Functions

### addRenderable

```lua
character:addRenderable( renderable )
```
`Client-Only`  

Adds a renderable (file containing model data) to be used for the character in third person view.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `renderable` (string): Path to the renderable file.

---

### applyTumblingImpulse

```lua
character:applyTumblingImpulse( impulse )
```

Applies an impulse to the character's tumbling shape.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `impulse` ([Vec3](/Shared-Features/Userdata/Vec3)): The impulse.

---

### bindAnimationCallback

```lua
character:bindAnimationCallback( animationName, triggerTime, callback )
```

Binds the character's animation to a callback function.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `animationName` (string): The name of the animation.
- `triggerTime` (number): The required time that will have elapsed in the animation when the callback is triggered.
- `callback` (string): The name of the Lua function to bind.

---

### getActiveAnimations

```lua
character:getActiveAnimations()
```

Returns the set of active animations.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (table): The set of active animations.

---

### getAnimationInfo

```lua
character:getAnimationInfo( name )
```
`Client-Only`  

[Missing Description]

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `name` (string): The name.

**Returns:**
- (table): The animation info.

---

### getCanSwim

```lua
character:getCanSwim()
```

Returns whether the character will float or sink in liquid.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (boolean): True if the character floats, false if the character sinks.

---

### getCharacterType

```lua
character:getCharacterType()
```

Returns the uuid of the character.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- ([Uuid](/Shared-Features/Userdata/Uuid)): The character's UUID.

---

### getClientPublicData

```lua
character:getClientPublicData()
```
`Client-Only`  

Returns client public data from the character.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (table): The character's client public data.

---

### getColor

```lua
character:getColor()
```

Returns the base color of the character.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- ([Color](/Shared-Features/Userdata/Color)): The character's color.

---

### getCurrentMovementNoiseRadius

```lua
character:getCurrentMovementNoiseRadius()
```

Returns the radius around the character where it can be heard.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (number): The character's noise radius.

---

### getCurrentMovementSpeed

```lua
character:getCurrentMovementSpeed()
```

Returns the current movement speed of the character depending on state and multiplier.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (number): The character's movement speed.

---

### getDirection

```lua
character:getDirection()
```

Returns the direction in which the character is viewing or aiming.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The character's view direction.

---

### getSmoothViewDirection

```lua
character:getSmoothViewDirection()
```

Returns the direction in which the character is viewing or aiming, in a smoother  
way when playing in multiplayer.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The character's view direction.

---

### getGlowMultiplier

```lua
character:getGlowMultiplier()
```
`Client-Only`  

Returns the character's glow multiplier.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (number): The character's glow multiplier (0.0 - 1.0).

---

### getHeight

```lua
character:getHeight()
```

Returns the height of the character.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (number): The character's height.

---

### getId

```lua
character:getId()
```

Returns the id of the character.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (int): The character's id.

---

### getLockingInteractable

```lua
character:getLockingInteractable()
```

Returns the [Interactable](../Userdata/Interactable) that the Character is locked to.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- ([Interactable](../Userdata/Interactable)): The interactable.

---

### getMass

```lua
character:getMass()
```

Returns the mass of the character.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (number): The character's mass.

---

### getMovementSpeedFraction

```lua
character:getMovementSpeedFraction()
```

Returns the current fraction multiplier applied on the character's movement speed.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (number): The movement speed fraction.

---

### getPlayer

```lua
character:getPlayer()
```

Returns the player controlling the character.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- ([Player](../Userdata/Player)): The character's player.

---

### getPublicData

```lua
character:getPublicData()
```
`Server-Only`  

Returns character's server public data.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (table): The character's server public data.

---

### getRadius

```lua
character:getRadius()
```

Returns the radius of the character.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (number): The character's radius.

---

### getSurfaceNormal

```lua
character:getSurfaceNormal()
```

Returns the normal of the character's contact with a surface.  
Defaults to a zero vector when no contact is found.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The character's surface normal.

---

### getTpBonePos

```lua
character:getTpBonePos( jointName )
```

Returns the world position for a bone in the third person view animation skeleton.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `jointName` (string): The joint name.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The joint position.

---

### getTpBoneRot

```lua
character:getTpBoneRot( jointName )
```

Returns the world rotation for a bone in the third person view animation skeleton.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `jointName` (string): The joint name.

**Returns:**
- ([Quat](/Shared-Features/Userdata/Quat)): The joint rotation.

---

### getTumblingExtent

```lua
character:getTumblingExtent()
```

Returns the extent of the characters tumbling shape.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The tumbling shape's extent.

---

### getTumblingLinearVelocity

```lua
character:getTumblingLinearVelocity()
```

Returns the linear velocity of the characters tumbling shape.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The tumbling shape's linear velocity.

---

### getTumblingWorldPosition

```lua
character:getTumblingWorldPosition()
```

Returns the world position of the characters tumbling shape.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The tumbling shape's world position.

---

### getTumblingWorldRotation

```lua
character:getTumblingWorldRotation()
```

Returns the world rotation of the characters tumbling shape.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- ([Quat](/Shared-Features/Userdata/Quat)): The tumbling shape's world rotation.

---

### getUnit

```lua
character:getUnit()
```

Returns the unit controlling the character.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- ([Unit](../Userdata/Unit)): The unit controlling the character.

---

### getVelocity

```lua
character:getVelocity()
```

Returns the velocity of the character.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The character's velocity.

---

### getWorld

```lua
character:getWorld()
```

Returns the world the character exists in.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- ([World](../Userdata/World)): The character's world.

---

### getWorldPosition

```lua
character:getWorldPosition()
```

Returns the world position of the character.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The character's world position.

---

### isAiming

```lua
character:isAiming()
```

Returns whether the character is currently aiming with a weapon.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (boolean): Whether the character is aiming or not.

---

### isClimbing

```lua
character:isClimbing()
```

Returns whether the character is currently climbing.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (boolean): Whether the character is climbing or not.

---

### isCrouching

```lua
character:isCrouching()
```

Returns whether the character is currently crouching.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (boolean): Whether the character is crouching or not.

---

### isDefaultColor

```lua
character:isDefaultColor()
```

Returns true if the character color has its default color.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (boolean): Whether the character has its default color.

---

### isDiving

```lua
character:isDiving()
```

Returns whether the character is currently diving.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (boolean): Whether the character is diving or not.

---

### isDowned

```lua
character:isDowned()
```

Returns whether the character is currently downed.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (boolean): Whether the character is downed or not.

---

### isOnGround

```lua
character:isOnGround()
```

Returns whether the character is currently standing on the ground.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (boolean): Whether the character is on the ground or not.

---

### isPlayer

```lua
character:isPlayer()
```

Returns whether the character belongs to a player.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (boolean): Whether the character belongs to a player or not.

---

### isSprinting

```lua
character:isSprinting()
```

Returns whether the character is currently sprinting.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (boolean): Whether the character is sprinting or not.

---

### isSwimming

```lua
character:isSwimming()
```

Returns whether the character is currently swimming.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (boolean): Whether the character is swimming or not.

---

### isTumbling

```lua
character:isTumbling()
```

Returns whether the character is currently tumbling.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

**Returns:**
- (boolean): Whether the character is tumbling or not.

---

### removeAnimationCallbacks

```lua
character:removeAnimationCallbacks()
```

Removes all of the character's animation callbacks.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.

---

### removeRenderable

```lua
character:removeRenderable( renderable )
```
`Client-Only`  

Removes a renderable (file containing model data) that was used for the character in third person view.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `renderable` (string): Path to the renderable file.

---

### setAllowTumbleAnimations

```lua
character:setAllowTumbleAnimations( allow )
```
`Client-Only`  

Enables or disables event animations.

When set to false no animations can play while tumble is active,  
when set to true the animations will play while tumbling.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `allow` (boolean): Whether animations are allowed or not.

---

### setClientPublicData

```lua
character:setClientPublicData( data )
```
`Client-Only`  

Sets the character's client public data.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `data` (table): The client public data.

---

### setClimbing

```lua
character:setClimbing( state )
```
`Server-Only`  

Sets whether the character is climbing.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `state` (boolean): Whether the character is climbing or not.

---

### setColor

```lua
character:setColor( color )
```
`Server-Only`  

Sets the character's color.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `color` ([Color](/Shared-Features/Userdata/Color)): The color.

---

### setDiving

```lua
character:setDiving( state )
```
`Server-Only`  

Sets whether the character is diving.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `state` (boolean): Whether the character is diving or not.

---

### setDowned

```lua
character:setDowned( state )
```
`Server-Only`  

Sets whether the character is downed.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `state` (boolean): Whether the character is downed or not.

---

### setGlowMultiplier

```lua
character:setGlowMultiplier( value )
```
`Client-Only`  

Sets a value to multiply the glow from asg texture with.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `value` (number): The glow multiplier (0.0 - 1.0).

---

### setLockingInteractable

```lua
character:setLockingInteractable( interactable )
```

Set the [Interactable](../Userdata/Interactable) that the character is locked to.  
Set it to `nil` to unlock.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable.

**Returns:**
- (boolean): Whether the locking/unlocking was successful.

---

### setMovementEffects

```lua
character:setMovementEffects( filepath )
```

Sets the movement effect set.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `filepath` (string): The effectset file path.

---

### setMovementSpeedFraction

```lua
character:setMovementSpeedFraction( fraction )
```

Sets a fraction multiplier to the character's movement speed.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `fraction` (number): The movement speed fraction.

---

### setMovementWeights

```lua
character:setMovementWeights( lower, upper )
```
`Client-Only`  

Sets the weights for movement animations on the character's upper and lower body.

For a value of 0 no movement animations will play, for a value of 1 the movement animations will fully play unless otherwise overridden.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `lower` (number): The lower weight.
- `upper` (number): The upper weight.

---

### setPublicData

```lua
character:setPublicData( data )
```
`Server-Only`  

Sets the character's server public data.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `data` (table): The server public data.

---

### setSwimming

```lua
character:setSwimming( state )
```
`Server-Only`  

Sets whether the character is swimming.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `state` (boolean): Whether the character is swimming or not.

---

### setTumbling

```lua
character:setTumbling( state )
```
`Server-Only`  

Sets whether the character is tumbling.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `state` (boolean): Whether the character is tumbling or not.

---

### setUpDirection

```lua
character:setUpDirection( up )
```
`Client-Only`  

Sets the upward direction of the character's graphics.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `up` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction.

---

### updateAnimation

```lua
character:updateAnimation( name, time, weight, additive )
```
`Client-Only`  

Updates the character animation.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `name` (string): The animation name.
- `time` (number): The time.
- `weight` (number): The weight. Defaults to `-1.0`. (Optional)
- `additive` (boolean): Whether the animation will be added to the default animation. Defaults to `false`. (Optional)

---

### setNameTag

```lua
character:setNameTag( name, color, requiresLoS, renderDistance, fadeDistance )
```
`Client-Only`  

Sets the name tag display value for the character.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `name` (string): The name tag text.
- `color` ([Color](/Shared-Features/Userdata/Color)): The the text color. Defaults to white.
- `requiresLoS` (boolean): Whether the tag requires line of sight to be visible or not. Defaults to false.
- `renderDistance` (number): The max distance the tag will be rendered in. Defaults to 10000.
- `fadeDistance` (number): The distance above which the tag starts to fade out. Defaults to 9500.

---

### setWorldPosition

```lua
character:setWorldPosition( position )
```
`Server-Only`  

Sets the world position of the character.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The world position.

---





