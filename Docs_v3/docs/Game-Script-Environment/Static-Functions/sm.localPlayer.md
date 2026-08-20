---
sidebar_position: 29
title: sm.localPlayer
hide_title: true
sidebar-label: 'sm.localPlayer'
---

## sm.localPlayer

The local player represents the current character being controlled on the client's computer.  
This library can only be used on the [client](/lua/#client).

For more information about other players in the world, see [sm.player](../Static-Functions/sm.player).

### Functions

#### addRenderable

```lua
sm.localPlayer.addRenderable(file)
```
`Client-Only`  

Adds a renderable (file containing model data) to be used for the local player in first person view.

**Parameters:**
- `file` (string): The path to the renderable file.

---

#### getActiveItem

```lua
local item = sm.localPlayer.getActiveItem()
```
`Client-Only`  

Returns the UUID of the item currently held by the local player.

**Returns:**
- `item` ([Uuid](/Shared-Features/Userdata/Uuid)): The uuid of the held item.

---

#### getAimSensitivity

```lua
local sensitivity = sm.localPlayer.getAimSensitivity()
```
`Client-Only`  

Returns the local player's mouse aim sensitivity.

**Returns:**
- `sensitivity` (number): The aim sensitivity.

---

#### getCarry

```lua
local carry = sm.localPlayer.getCarry()
```
`Client-Only`  

Returns the local player's carry [Container](../Userdata/Container).

**Returns:**
- `carry` ([Container](../Userdata/Container)): The player's carry container.

---

#### getCarryColor

```lua
local color = sm.localPlayer.getCarryColor()
```
`Client-Only`  

Returns the color of the shape that the local player is carrying.

**Returns:**
- `color` ([Color](/Shared-Features/Userdata/Color)): The player's carry color.

---

#### getDirection

```lua
local direction = sm.localPlayer.getDirection()
```
`Client-Only`  

Returns the direction in which the local player is looking.

**Returns:**
- `direction` ([Vec3](/Shared-Features/Userdata/Vec3)): The player's aim direction.

---

#### getFpAnimationInfo

```lua
local info = sm.localPlayer.getFpAnimationInfo(name)
```
`Client-Only`  

Returns general information for a first person view animation.

**Parameters:**
- `name` (string): The animation name.

**Returns:**
- `info` (table): A table containing `name`, `duration` and `looping` information of the animation.

---

#### getFpBonePos

```lua
local position = sm.localPlayer.getFpBonePos(name)
```
`Client-Only`  

Returns the world position for a bone in the first person view animation skeleton.

**Parameters:**
- `name` (string): The bone name.

**Returns:**
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The bone position.

---

#### getHotbar

```lua
local hotbar = sm.localPlayer.getHotbar()
```
`Client-Only`  

Returns the local player's hotbar container.

**Returns:**
- `hotbar` ([Container](../Userdata/Container)): The hotbar container.

---

#### getId

```lua
local id = sm.localPlayer.getId()
```
`Client-Only`  

Returns the local player's [Player](../Userdata/Player) id.

**Returns:**
- `id` (int): The player id.

---

#### getInventory

```lua
local inventory = sm.localPlayer.getInventory()
```
`Client-Only`  

Returns the local player's inventory container.

**Returns:**
- `inventory` ([Container](../Userdata/Container)): The inventory container.

---

#### getMouseDelta

```lua
local x, y = sm.localPlayer.getMouseDelta()
```
`Client-Only`  

Returns the delta position of the mouse.

:::info note
This function does not work while a [GUI](../Userdata/GuiInterface) is open.
:::

**Returns:**
- `x` (number): Mouse Delta X.
- `y` (number): Mouse Delta Y.

---

#### getOwnedLift

```lua
local lift = sm.localPlayer.getOwnedLift()
```
`Client-Only`  

Returns the local player's [Lift](../Userdata/Lift).

**Returns:**
- `lift` ([Lift](../Userdata/Lift)): The lift.

---

#### getPlayer

```lua
local player = sm.localPlayer.getPlayer()
```
`Client-Only`  

Returns the local player's [Player](../Userdata/Player).

**Returns:**
- `player` ([Player](../Userdata/Player)): The local player.

---

#### getPosition

```lua
local position = sm.localPlayer.getPosition()
```

:::caution warning
This function is deprecated.

Use `sm.localPlayer.getPlayer().character.worldPosition` instead.
:::

---

#### getRaycast

```lua
local hit, result = sm.localPlayer.getRaycast(range, origin, direction)
```
`Client-Only`  

Performs a [raycast](https://en.wikipedia.org/wiki/Ray_casting) relative to the local player's perspective, with interaction raycast filters pre-applied.

**Parameters:**
- `range` (number): The maximum range.
- `origin` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The start position. Defaults to `sm.localPlayer.getRaycastStart()`
- `direction` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The direction. Defaults to `sm.localPlayer.getDirection()`

**Returns:**
- `hit` (boolean): Whether the raycast hit something or not.
- `result` ([RaycastResult](../Userdata/RaycastResult)): The raycast result data.

---

#### getRaycastStart

```lua
local start = sm.localPlayer.getRaycastStart()
```
`Client-Only`  

Returns the start position of the local player's raycast.  
The position depends on the [camera](../Static-Functions/sm.camera)'s position, and whether it's in first - or third-person.

**Returns:**
- `start` ([Vec3](/Shared-Features/Userdata/Vec3)): The start position of the raycast.

---

#### getRight

```lua
local right = sm.localPlayer.getRight()
```
`Client-Only`  

Returns the right-vector perpendicular to the local player's aim.

**Returns:**
- `right` ([Vec3](/Shared-Features/Userdata/Vec3)): The right-vector of the local player's aim.

---

#### getSelectedHotbarSlot

```lua
local slot = sm.localPlayer.getSelectedHotbarSlot()
```
`Client-Only`  

Returns the selected hotbar slot.

**Returns:**
- `slot` (int): The selected slot.

---

#### getUp

```lua
local up = sm.localPlayer.getUp()
```
`Client-Only`  

Returns the up-vector perpendicular to the local player's aim.

**Returns:**
- `up` ([Vec3](/Shared-Features/Userdata/Vec3)): The up-vector of the local player's aim.

---

#### isGarmentUnlocked

```lua
local isUnlocked = sm.localPlayer.isGarmentUnlocked(uuid)
```
`Client-Only`  

Checks if the garment has been granted to the local player.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The garment UUID.

**Returns:**
- `isUnlocked` (boolean): Whether the garment is unlocked or not.

---

#### isInFirstPersonView

```lua
local isFP = sm.localPlayer.isInFirstPersonView()
```
`Client-Only`  

Returns whether the player is in first person view where the viewpoint is rendered from the player's perspective.  
Otherwise, the player is in third person view where the camera is behind the player.

**Returns:**
- `isFP` (boolean): Whether the player is in first-person view or not.

---

#### removeRenderable

```lua
sm.localPlayer.removeRenderable(renderable)
```
`Client-Only`  

Removes a renderable (file containing model data) that was used for the local player in first person view.

**Parameters:**
- `renderable` (string): The path to the renderable file.

---

#### setBlockSprinting

```lua
sm.localPlayer.setBlockSprinting(state)
```
`Client-Only`  

Stops the local player from sprinting.

**Parameters:**
- `state` (boolean): Whether sprinting is blocked or not.

---

#### setDirection

```lua
sm.localPlayer.setDirection(dir)
```
`Client-Only`  

Sets the direction of where the player is viewing or aiming.  
Intended to be used when the controls have been locked (See [sm.localPlayer.setLockedControls](#setlockedcontrols)).

**Parameters:**
- `dir` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction.

---

#### setLockedControls

```lua
sm.localPlayer.setLockedControls(state)
```
`Client-Only`  

Locks the player's controls.

A player with locked controls **can:**  
- Open the game menu by pressing ESC
- Open the in-game chat

A player with locked controls **cannot:**  
- Interact with parts
- Open their inventory
- Move in any way
- Look around
- Change the selected hotbar item
- Use any tools
- Place or remove any parts

:::info note
This function takes one game tick to apply.
:::

**Parameters:**
- `state` (boolean): The lock state.

---

#### updateFpAnimation

```lua
sm.localPlayer.updateFpAnimation(name, time, weight, looping)
```
`Client-Only`  

Updates a first person view animation.

**Parameters:**
- `name` (string): The animation name.
- `time` (number): The time.
- `weight` (number): The weight. Defaults to `-1.0`
- `looping` (boolean): Whether the animation is looping or not. Defaults to false.

---
