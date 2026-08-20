---
sidebar_position: 8
title: sm.camera
hide_title: true
sidebar-label: 'sm.camera'
---

## sm.camera

The camera library contains methods related to the [localPlayer](../Static-Functions/sm.localPlayer)'s camera view.

In first-person view the camera is located inside the player character's head, whereas in third-person view it floats behind them.

This library can only be used on the [client](/lua/#client).

### Constants

#### state

Camera states are used to specify how the camera will view the world.  
`default` is the standard state used for normal gameplay.  
`cutsceneFP` and `cutsceneTP` are intended for cutscene playback.  
`forcedTP`, as the name implies, forces the camera into third-person perspective.  
`gyroSeatFP` and `gyroSeatTP` are used for first/third-person perspective when seated in a gyro seat (not available yet).

```lua
sm.camera.state = {   
    default = 1,
    cutsceneFP = 2,
    cutsceneTP = 3,
    forcedTP = 4,
    gyroSeatFP = 5,
    gyroSeatTP = 6
}
```

---

### Functions

#### cameraSphereCast

```lua
local hitFraction = sm.camera.cameraSphereCast(radius, start, direction)
```
`Client-Only`  

Performs a distance convex sweep with the shape of a sphere, from a position with a given direction and range.

**Parameters:**
- `radius` (number): The radius of the cast sphere.
- `start` ([Vec3](/Shared-Features/Userdata/Vec3)): The start position.
- `direction` ([Vec3](/Shared-Features/Userdata/Vec3)): The cast direction and range.

**Returns:**
- `hitFraction` (number): The fraction of the distance reached until collision.

---

#### getCameraPullback

```lua
local standingPullback, seatedPullback = sm.camera.getCameraPullback()
```
`Client-Only`  

Returns the camera's zoom step.

**Returns:**
- `standingPullback` (number): How far away the camera is from the player while standing.
- `seatedPullback` (number): How far away the camera is from the player while seated.

---

#### getCameraState

```lua
local state = sm.camera.getCameraState()
```
`Client-Only`  

Returns the camera's control state, see [sm.camera.state](#state).

**Returns:**
- `state` (int): The camera state.

---

#### getDefaultFov

```lua
local fov = sm.camera.getDefaultFov()
```
`Client-Only`  

Returns the camera's default FOV angle.

**Returns:**
- `fov` (number): The default FOV.

---

#### getDefaultPosition

```lua
local position = sm.camera.getDefaultPosition()
```
`Client-Only`  

Returns the world postition where the camera should be by default.

**Returns:**
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The position.

---

#### getDefaultRotation

```lua
local rotation = sm.camera.getDefaultRotation()
```
`Client-Only`  

Returns the world rotation where the camera should be by default.

**Returns:**
- `rotation` ([Quat](/Shared-Features/Userdata/Quat)): The rotation.

---

#### getDirection

```lua
local direction = sm.camera.getDirection()
```
`Client-Only`  

Returns the direction the camera is aiming.

**Returns:**
- `direction` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction.

---

#### getFov

```lua
local fov = sm.camera.getFov()
```
`Client-Only`  

Returns the camera's FOV.

**Returns:**
- `fov` (number): The FOV.

---

#### getPosition

```lua
local position = sm.camera.getPosition()
```
`Client-Only`  

Returns the camera's world position.

**Returns:**
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The position.

---

#### getRight

```lua
local right = sm.camera.getRight()
```
`Client-Only`  

Returns the right-vector perpendicular to the camera's aim.

**Returns:**
- `right` ([Vec3](/Shared-Features/Userdata/Vec3)): The camera's right-vector.

---

#### getRotation

```lua
local rotation = sm.camera.getRotation()
```
`Client-Only`  

Returns the camera's world rotation.

**Returns:**
- `rotation` ([Quat](/Shared-Features/Userdata/Quat)): The camera's rotation.

---

#### getUp

```lua
local up = sm.camera.getUp()
```
`Client-Only`  

Returns the up-vector perpendicular to the camera's aim.

**Returns:**
- `up` ([Vec3](/Shared-Features/Userdata/Vec3)): The camera's up-vector.

---

#### setCameraPullback

```lua
sm.camera.setCameraPullback(standing, seated)
```
`Client-Only`  

Sets the camera's zoom step.

**Parameters:**
- `standing` (number): How far away the camera is from the player while standing.
- `seated` (number): How far away the camera is from the player while seated.

---

#### setCameraState

```lua
sm.camera.setCameraState(state)
```
`Client-Only`  

Sets the camera's control state, see [sm.camera.state](#state).

**Parameters:**
- `state` (int): The camera state.

---

#### setDirection

```lua
sm.camera.setDirection(dir)
```
`Client-Only`  

Sets the camera's aim direction.

**Parameters:**
- `dir` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction.

---

#### setFov

```lua
sm.camera.setFov(fov)
```
`Client-Only`  

Sets the camera's FOV.

**Parameters:**
- `fov` (number): The FOV.

---

#### setPosition

```lua
sm.camera.setPosition(position)
```
`Client-Only`  

Sets the camera's world position.

**Parameters:**
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The position.

---

#### setRotation

```lua
sm.camera.setRotation(rotation)
```
`Client-Only`  

Sets the camera's world rotation.

**Parameters:**
- `rotation` ([Quat](/Shared-Features/Userdata/Quat)): The rotation.

---

#### setShake

```lua
sm.camera.setShake(strength)
```
`Client-Only`  

Shakes the camera with the given shake strength.

**Parameters:**
- `strength` (number): The shake level.

---
