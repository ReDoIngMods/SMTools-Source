---
sidebar_position: 19
title: sm.effect
hide_title: true
sidebar-label: 'sm.effect'
---

## sm.effect

**Associated object type:** [Effect](../Userdata/Effect)

The effect API handles the creation and playing of audio and visual effects.

Effects can consist of multiple components each being of separate types and with unique offsets, rotations and delays.

For more information on how to setup effects, please take a look in the `Effects/Database/EffectSets` folder in the game data directory.

:::info note
To avoid naming conflicts, effect sets are "sandboxed" per each loaded mod.  
To access an effect that is registered in a different mod, the target mod's local content UUID (`localId` in `description.json`)
can be prepended to the effect name, e.g. `a898c2c4-de95-4899-9442-697ced66b832Pistol_shoot`.  
Note that the target mod must be loaded for this to work.
:::

### Functions

#### createEffect

```lua
local effect = sm.effect.createEffect(name, host, bone)
```
`Client-Only`  

Creates an [Effect](../Userdata/Effect).

If you provide a host object to the effect, it will fetch position, velocity and orientation data from the object instead of relying on this information being fed to it.  
This results in far more accurate positioning of effects that are supposed to stay attached to an object.

**Parameters:**
- `name` (string): The effect name.
- `host` ([Interactable](../Userdata/Interactable)/[Harvestable](../Userdata/Harvestable)/[Character](../Userdata/Character)/nil): The object that the effect is attached to.
- `bone` (string): The bone name, if attaching to an [Interactable](../Userdata/Interactable) or [Character](../Userdata/Character). Defaults to none.

**Returns:**
- `effect` ([Effect](../Userdata/Effect)): The created effect.

---

#### createEffect2D

```lua
local effect = sm.effect.createEffect2D(name)
```
`Client-Only`  

Creates a 2D [Effect](../Userdata/Effect).  
This type of effect is rendered directly to the screen, similar to GUI elements.  

The coordinate system of 2D effects is special - it ranges from 0 - 16 in the X axis (screen width) and 0 - 9 in the Z axis (screen height),
where `0` in X represents the bottom of the game window (0%), `16` represents the top (100%), `0` in Z represents the left (0%) and `9` represents the right (100%).  

In addition to this, the layering of multiple 2D effects can be controlled using the Y axis, where positive Y is further away and negative Y is closer.  
This value is clipped at +500/-500. 2D effects with a Y coordinate outside this range are not rendered.

2D effects are also rendered on top of all GUI elements, with the only exception being the mouse cursor when a menu is open.

**Parameters:**
- `name` (string): The effect name.

**Returns:**
- `effect` ([Effect](../Userdata/Effect)): The created effect.

---

#### estimateSize

```lua
local size = sm.effect.estimateSize(name, params)
```
`Client-Only`  

Estimates the radius of influence of an [Effect](../Userdata/Effect) and instance parameters.

**Parameters:**
- `name` (string): The effect name.
- `params` (table): The parameters.

**Returns:**
- `size` (number): The range.

---

#### playEffect

```lua
sm.effect.playEffect(name, position, velocity, rotation, scale, parameters)
```

Plays an effect once.  
If this function is called on the server, the effect will be broadcast to all clients.

:::info note
If a looping effect is started using this function, it cannot be stopped.  
Please use [createEffect](#createeffect) for looping effects.
:::

**Parameters:**
- `name` (string): The effect name.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The position.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The velocity. Defaults to none.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat), optional): The rotation. Defaults to none.
- `scale` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The scale, if using a renderable. Defaults to none.
- `parameters` (table, optional): The table containing effect parameters. Defaults to none.

---

#### playHostedEffect

```lua
sm.effect.playHostedEffect(name, host, boneName, parameters)
```
`Client-Only`  

Plays an effect once.  
It will fetch position, velocity and orientation data from the host object.

:::info note
If a looping effect is started using this function, it cannot be stopped.  
Please use [createEffect](#createeffect) for looping effects.
:::

**Parameters:**
- `name` (string): The effect name.
- `host` ([Interactable](../Userdata/Interactable)/[Harvestable](../Userdata/Harvestable)/[Character](../Userdata/Character)): The object that the effect is attached to.
- `bone` (string, optional): The bone name, if attaching to an interactable or character. Defaults to none.
- `parameters` (table, optional): The table containing effect parameters. Defaults to none.

---
