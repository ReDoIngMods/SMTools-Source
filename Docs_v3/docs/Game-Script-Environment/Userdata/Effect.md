---
sidebar_position: 10
title: Effect
hide_title: true
sidebar-label: 'Effect'
---

## Effect

**Associated namespace:** [sm.effect](../Static-Functions/sm.effect)

A userdata object representing an **effect**.

**Values:**

- `id` [** int **]  

	- `Get`: The id of the effect.


**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `Effect` == `Effect` | Checks if two instances of `Effect` refer to the same `Effect`. |

## Functions

### bindEventCallback

```lua
effect:bindEventCallback( methodName, params, reference )
```
`Client-Only`  

Bind a Lua callback to be triggered by the effect.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.
- `methodName` (string): The name of the callback function.
- `params` (any): Parameter object passed to the callback (Optional).
- `reference` (table): Table to receive the callback (Optional).

---

### clearEventCallbacks

```lua
effect:clearEventCallbacks()
```
`Client-Only`  

Clears all Lua effect callbacks.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.

---

### destroy

```lua
effect:destroy()
```

Stops and destroys the effect.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.

---

### getCameraFov

```lua
effect:getCameraFov()
```
`Client-Only`  

Get the desired camera FOV.

Will return nil if the effect is not playing.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.

**Returns:**
- (number): The FOV.

---

### getCameraPosition

```lua
effect:getCameraPosition()
```
`Client-Only`  

Get the desired camera position.

Will return nil if the effect is not playing.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The position.

---

### getCameraRotation

```lua
effect:getCameraRotation()
```
`Client-Only`  

Get the desired camera rotation.

Will return nil if the effect is not playing.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.

**Returns:**
- ([Quat](/Shared-Features/Userdata/Quat)): The rotation.

---

### getId

```lua
effect:getId()
```

Returns the id of the effect.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.

**Returns:**
- (int): The id.

---

### hasActiveCamera

```lua
effect:hasActiveCamera()
```
`Client-Only`  

Returns whether the effect has an active camera effect.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.

**Returns:**
- (boolean): Whether the effect has an active camera effect or not.

---

### isDone

```lua
effect:isDone()
```
`Client-Only`  

Returns whether the effect is done, meaning that all effect instances have finished.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.

**Returns:**
- (boolean): Whether the effect is done or not.

---

### isPlaying

```lua
effect:isPlaying()
```
`Client-Only`  

Returns whether the effect is currently playing.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.

**Returns:**
- (boolean): Whether the effect is playing or not.

---

### setAutoPlay

```lua
effect:setAutoPlay( enabled )
```
`Client-Only`  

Sets the effect to start playing and repeating automatically.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.
- `enabled` (boolean): Whether the effect repeats automatically or not.

---

### setOffsetPosition

```lua
effect:setOffsetPosition( position )
```
`Client-Only`  

Offsets the position of the effect relative to the host interactable.

:::info note
This does not work if the effect was created without a host interactable.
:::

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The offset position.

---

### setOffsetRotation

```lua
effect:setOffsetRotation( rotation )
```
`Client-Only`  

Offsets the rotation of the effect relative to the host interactable.

:::info note
This does not work if the effect was created without a host interactable.
:::

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat)): The offset rotation.

---

### setParameter

```lua
effect:setParameter( name, value )
```
`Client-Only`  

Sets a named parameter value on the effect.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.
- `name` (string): The parameter name.
- `value` (any): The parameter value.

The list below contains *some* of the possible parameter names.  
Note that some of these may only work for specific effects.

```
Velocity_max_50
minColor 
maxColor
minColor2
maxColor2
valid
progress
char
Material
velocity_tree
craftbot
size
impact
load
rpm
gas
pitch
health
fire_intensity
visualization
amb_day_night
music
```

---

### setPosition

```lua
effect:setPosition( position )
```
`Client-Only`  

Sets the position of the effect.

:::info note
This does not work if the effect was created with a host interactable.
:::

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The position.

---

### setRotation

```lua
effect:setRotation( rotation )
```
`Client-Only`  

Sets the rotation of the effect.

:::info note
This does not work if the effect was created with a host interactable.
:::

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat)): The rotation.

---

### setScale

```lua
effect:setScale( scale )
```
`Client-Only`  

Sets the scale of the effect.

:::info note
Only applies to effect renderables.
:::

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.
- `scale` ([Vec3](/Shared-Features/Userdata/Vec3)): The scale.

---

### setTimeOfDay

```lua
effect:setTimeOfDay( enabled, startTime, endTime, inversed )
```
`Client-Only`  

Sets the effect to be active during specific period of the day / night cycle.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.
- `enabled` (boolean): Whether this feature is enabled or not.
- `startTime` (number): The normalized start time.
- `endTime` (number): The normalized end time.
- `inversed` (boolean): If true, period between start/end becomes inactive time.

---

### setVelocity

```lua
effect:setVelocity( velocity )
```
`Client-Only`  

Sets the velocity of the effect.  
The effect will move along at the set velocity until it receives a new position.

:::info note
This does not work if the effect was created with a host interactable.
:::

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The velocity.

---

### setWorld

```lua
effect:setWorld( world )
```
`Client-Only`  

Sets the effect's world.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.
- `world` ([World](../Userdata/World)): The world. Defaults to world from script context.

---

### start

```lua
effect:start()
```
`Client-Only`  

Starts playing the effect.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.

---

### stop

```lua
effect:stop()
```
`Client-Only`  

Stops playing the effect.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.

---

### stopBreakSustain

```lua
effect:stopBreakSustain()
```
`Client-Only`  

Stops playing the effect, letting sound finish before destroying the effect.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.

---

### stopImmediate

```lua
effect:stopImmediate()
```
`Client-Only`  

Immediately stops playing the effect. Any playing sound effects will stop immediately.

**Parameters:**
- `effect` ([Effect](../Userdata/Effect)): The effect.

---



