---
sidebar_position: 22
title: RaycastResult
hide_title: true
sidebar-label: 'RaycastResult'
---

## RaycastResult

A userdata object representing a **raycast result**.

A raycast result is a collection of data received from a raycast.  
The result contains information about where the raycast travelled and what objects it eventually hit.

Raycast results are the result of functions such as [sm.physics.raycast](../Static-Functions/sm.physics#raycast), [sm.physics.distanceRaycast](../Static-Functions/sm.physics#distanceRaycast) and [sm.localPlayer.getRaycast](../Static-Functions/sm.localPlayer#getRaycast).

**Values:**

- `directionWorld` [** vec3 **]  

	- `Get`: The raycast's direction vector.


- `fraction` [** number **]  

	- `Get`: The fraction (0 - 1) of the distance reached until collision, divided by the ray's length.


- `normalLocal` [** vec3 **]  

	- `Get`: The normal vector of the hit surface, relative to the target's rotation.


- `normalWorld` [** vec3 **]  

	- `Get`: The normal vector of the hit surface.


- `originWorld` [** vec3 **]  

	- `Get`: The raycast's start position.


- `pointLocal` [** vec3 **]  

	- `Get`: The world position of the hit point, relative to the target's position.


- `pointWorld` [** vec3 **]  

	- `Get`: The world position of the hit point.


- `type` [** string **]  

	- `Get`: The physics type of the shape that was hit.


- `valid` [** bool **]  

	- `Get`: Whether the raycast hit a target or not.



## functions

### getAreaTrigger

```lua
raycastResult:getAreaTrigger()
```

Returns the [AreaTrigger](../Userdata/AreaTrigger) hit by the raycast, if the result type is `areaTrigger`.

**Parameters:**
- `raycastResult` ([RaycastResult](../Userdata/RaycastResult)): The raycastResult.

**Returns:**
- ([AreaTrigger](../Userdata/AreaTrigger)): The areaTrigger.

---

### getBody

```lua
raycastResult:getBody()
```

Returns the [Body](../Userdata/Body) hit by the raycast, if the result type is `body`.

**Parameters:**
- `raycastResult` ([RaycastResult](../Userdata/RaycastResult)): The raycastResult.

**Returns:**
- ([Body](../Userdata/Body)): The body.

---

### getCharacter

```lua
raycastResult:getCharacter()
```

Returns the [Character](../Userdata/Character) hit by the raycast, if the result type is `character`.

**Parameters:**
- `raycastResult` ([RaycastResult](../Userdata/RaycastResult)): The raycastResult.

**Returns:**
- ([Character](../Userdata/Character)): The character.

---

### getHarvestable

```lua
raycastResult:getHarvestable()
```

Returns the [Harvestable](../Userdata/Harvestable) hit by the raycast, if the result type is `harvestable`.

**Parameters:**
- `raycastResult` ([RaycastResult](../Userdata/RaycastResult)): The raycastResult.

**Returns:**
- ([Harvestable](../Userdata/Harvestable)): The harvestable.

---

### getJoint

```lua
raycastResult:getJoint()
```

Returns the [Joint](../Userdata/Joint) hit by the raycast, if the result type is `joint`.

**Parameters:**
- `raycastResult` ([RaycastResult](../Userdata/RaycastResult)): The raycastResult.

**Returns:**
- ([Joint](../Userdata/Joint)): The joint.

---

### getLiftData

```lua
raycastResult:getLiftData()
```

Returns the [Lift](../Userdata/Lift) hit by the raycast, if the result type is `lift`.

**Parameters:**
- `raycastResult` ([RaycastResult](../Userdata/RaycastResult)): The raycastResult.

**Returns:**
- ([Lift](../Userdata/Lift)): The lift.
- (boolean): Whether the lift is top(?) or not.

---


### getShape

```lua
raycastResult:getShape()
```

Returns the [Shape](../Userdata/Shape) hit by the raycast, if the result type is `shape`.

**Parameters:**
- `raycastResult` ([RaycastResult](../Userdata/RaycastResult)): The raycastResult.

**Returns:**
- ([Shape](../Userdata/Shape)): The shape.

---