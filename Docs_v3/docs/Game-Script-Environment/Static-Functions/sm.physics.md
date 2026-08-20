---
sidebar_position: 37
title: sm.physics
hide_title: true
sidebar-label: 'sm.physics'
---

## sm.physics

The physics library contains functions to query and interact with the game's physics engine.

### Constants

#### filter

Filter flags used for things such as [raycasts](#raycast).

```lua
sm.physics.filter = {
    all = -1,
    dynamicBody = 1,
    staticBody = 2,
    character = 4,
    areaTrigger = 8,
    terrainSurface = 128,
    terrainAsset = 256,
    harvestable = 512,
    joints = 4096,
    static = 34690,
    default = 38791,
    voxelTerrain = 32768,
}
```

---

#### types

Physics types are used to define an object's properties in the physics world.  
Upon a raycast or collision detection, these types are used to find what type of object was intersected.

```lua
sm.physics.types = {
	"limiter",			-- The world border.
	"terrainSurface",	-- The terrain surface.
	"terrainAsset",		-- Trees, boulders, etc.
	"body",				-- Part of a creation.
	"joint",			-- A joint.
	"lift",				-- A Lift.
	"character",		-- A Character.
	"harvestable",		-- A Harvestable.
	"ragdoll",			-- A ragdolled character.
	"areaTrigger",		-- An AreaTrigger.
	"vision",			-- A special collision area used by sensors.
	"voxelTerrain",		-- Voxel terrain. Not available yet.
	"tunnelCatcher"		-- A special trigger below the Creative Mode world to catch objects falling out of the map.
}
```

---

### Functions

#### applyImpulse

```lua
sm.physics.applyImpulse(target, impulse, worldSpace, offset)
```

Applies an impulse to an object, changing its velocity immediately.  
The impulse is applied to the object's center point with an optional offset.

:::info note
This impulse is **not** synchronized over the network.  
In order to avoid jitter for multiplayer clients, it is recommended to run the same math and logic
and apply the same impulse on both the server **and** client **independently**.  
**Do not attempt to synchronize frequent impulses over the network**, as doing so can easily cause multiplayer to be unplayable for the client(s) due to network overload.
:::

**Parameters:**
- `target` ([Shape](../Userdata/Shape)/[Body](../Userdata/Body)/[Character](../Userdata/Character)): The target that the impulse is applied to.
- `impulse` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction and strength of the impulse.
- `worldSpace` (boolean, optional): Whether the impulse is applied in world space (global) coordinates. Defaults to local.
- `offset` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The offset from the center point. Defaults to none.

---

#### applyTorque

```lua
sm.physics.applyTorque(target, torque, worldSpace)
```

Applies a torque impulse to a [Body](../Userdata/Body), changing its angular velocity immediately.  
The torque is applied along the body's center of mass, making it rotate.

:::info note
This torque is **not** synchronized over the network.  
In order to avoid jitter for multiplayer clients, it is recommended to run the same math and logic
and apply the same torque on both the server **and** client **independently**.  
**Do not attempt to synchronize frequent torque impulses over the network**, as doing so can easily cause multiplayer to be unplayable for the client(s) due to network overload.
:::

**Parameters:**
- `target` ([Body](../Userdata/Body)): The body that the torque is applied to.
- `torque` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction and strength of the torque.
- `worldSpace` (boolean): Whether the torque is applied in world space (global) coordinates. Defaults to local.

---

#### distanceRaycast

```lua
local hit, fraction = sm.physics.distanceRaycast(start, direction)
```

Performs a distance [ray cast](https://en.wikipedia.org/wiki/Ray_casting) from a position in a given direction.

**Parameters:**
- `start` ([Vec3](/Shared-Features/Userdata/Vec3)): The start position.
- `direction` ([Vec3](/Shared-Features/Userdata/Vec3)): The ray's direction and length.

**Returns:**
- `hit` (boolean): Whether the raycast was successful or not.
- `fraction` (number): The fraction (0.0 - 1.0) of the distance reached until collision.

---

#### explode

```lua
sm.physics.explode(position, level, destructionRadius, impulseRadius, magnitude, effectName, ignore, parameters)
```
`Server-Only`  

Creates an explosion at given position.  
The explosion creates a shockwave that is capable of destroying blocks and pushing characters and creations away.

Scripted shapes that are within the explosion's destruction radius may receive the [server_onExplosion](../Script-Classes/ShapeClass#server_onexplosion) event.

:::info note
The destruction level is the damage effect on blocks and parts, determining how likely it is that they are destroyed.  
This is related to the `qualityLevel` found in parts json-files.

Any quality level equal to or less than the destruction level may be destroyed.  
The effect fades one level every half travelled of the remaining destruction radius.

A quality level of 0 means a block or part is indestructible.
:::

**Parameters:**
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The center point of the explosion.
- `level` (int): The destruction level affecting nearby objects.
- `destructionRadius` (number): The destruction radius. Objects inside this sphere may be destroyed.
- `impulseRadius` (number): The impulse radius. Objects inside this sphere are affected by an impulse.
- `magnitude` (number): The impulse strength of the explosion. The strength diminishes with distance.
- `effectName` (string): The name of the effect to be played upon explosion. Optional.
- `ignore` ([Shape](../Userdata/Shape)): The shape to be ignored. Optional.
- `parameters` (table): A table containing parameters for the effect. Optional.

---

#### getGravity

```lua
local gravity = sm.physics.getGravity()
```
`Server-Only`  

Returns the gravitational acceleration affecting [Shape](../Userdata/Shape)s and [Bodies](../Userdata/Body).  
Note that this does **not** affect [Character](../Userdata/Character)s.

**Returns:**
- `gravity` (number): The gravitational value.

---

#### getGroundMaterial

```lua
local material = sm.physics.getGroundMaterial(position)
```

Returns the terrain material at the given position.

**Parameters:**
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The position.

**Returns:**
- `material` (string): The terrain material at the position.

---

#### getSphereContacts

```lua
local contacts = sm.physics.getSphereContacts(position, radius)
```
`Server-Only`  

Returns a table of objects that were found inside the given sphere.

**Parameters:**
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The position of the sphere.
- `radius` (number): The radius of the sphere.

**Returns:**
- `contacts` (table): A table containing arrays of objects found inside the sphere. See structure below.

```lua title="Table Structure"
{
	bodies = {
		Body1,
		Body2,
		...
	},
	characters = {
		Character1,
		Character2,
		...
	},
	harvestables = {
		Harvestable1,
		Harvestable2,
		...
	},
	lifts = {
		Lift1,
		Lift2,
		...
	}
}
```

---

#### multicast

```lua
local results = sm.physics.multicast(casts)
```

Performs multiple sphere and/or raycasts given a table of parameters.

`type` can be `"sphere"` or `"ray"`. Radius is ignored for rays.  

`ignoreObject` can be a [Body](../Userdata/Body), [Harvestable](../Userdata/Harvestable), [Character](../Userdata/Character), [Shape](../Userdata/Shape) or [AreaTrigger](../Userdata/AreaTrigger).    

:::caution warning
Due to a bug in the game, the `ignoreObject` parameter does currently **not** work for [AreaTrigger](../Userdata/AreaTrigger)s.  
Attempting to use an [AreaTrigger](../Userdata/AreaTrigger) in `ignoreObject` will cause an error.
:::

**Parameters:**
- `casts` (table): The table of casts to perform. See 'casts' table structure below.

**Returns:**
- `results` (table): An array of tables containing `bool` (hit) and [RaycastResult](../Userdata/RaycastResult) (result) for each cast.

```lua title="'casts' Table Structure"
{
	{
		type = "ray",					--The cast type.
		startPoint = vec3,				--The start point.
		endPoint = vec3,				--The end point.
		ignoreObject = (see list above),--The object to be ignored by the ray.
		mask = sm.physics.filter.all	--The cast filter.
	},
	{
		type = "sphere",				--The cast type.
		startPoint = vec3,				--The start point.
		endPoint = vec3,				--The end point.
		ignoreObject = (see list above),--The object to be ignored by the ray.
		radius = 5,						--The sphere radius.
		mask = sm.physics.filter.all	--The cast filter.
	},
	...									--etc.
}
```
```lua title="Returned Table Structure"
{
	{
		true,			--Whether the cast hit something or not.
		raycastResult	--The cast result data.
	},
	{
		true,			--Whether the cast hit something or not.
		raycastResult	--The cast result data.
	},
	...					--etc.
}
```

---

#### raycast

```lua
local hit, result = sm.physics.raycast(startPos, endPos, ignore, mask)
```

Performs a [ray cast](https://en.wikipedia.org/wiki/Ray_casting) between two positions.

The returned [RaycastResult](../Userdata/RaycastResult) contains information about any object intersected by the ray.

If the ray cast starts from within a shape (e.g. a Sensor), a [Body](../Userdata/Body) may be provided which the ray will not intersect.

**Parameters:**
- `startPos` ([Vec3](/Shared-Features/Userdata/Vec3)): The start position.
- `endPos` ([Vec3](/Shared-Features/Userdata/Vec3)): The end position.
- `ignore` ([Shape](../Userdata/Shape)/[Body](../Userdata/Body)/[Character](../Userdata/Character)/[Harvestable](../Userdata/Harvestable)/nil): The object to ignore. Defaults to none.
- `mask` (int, optional): The collision mask. Defaults to `sm.physics.filter.default`.

**Returns:**
- `hit` (boolean): Whether the raycast is valid or not.
- `result` ([RaycastResult](../Userdata/RaycastResult)): The raycast result data.

---

#### raycastTarget

```lua
local hit, result = sm.physics.raycastTarget(startPos, endPos, target)
```

Performs a [ray cast](https://en.wikipedia.org/wiki/Ray_casting) between two positions to find a specific target.

A target [Body](../Userdata/Body), [Character](../Userdata/Character), [Harvestable](../Userdata/Harvestable) or [AreaTrigger](../Userdata/AreaTrigger) must be provided.

The returned [RaycastResult](../Userdata/RaycastResult) contains information about any object intersected by the ray.

**Parameters:**
- `startPos` ([Vec3](/Shared-Features/Userdata/Vec3)): The start position.
- `endPos` ([Vec3](/Shared-Features/Userdata/Vec3)): The end position.
- `target` ([Body](../Userdata/Body)/[Character](../Userdata/Character)/[Harvestable](../Userdata/Harvestable)/[AreaTrigger](../Userdata/AreaTrigger)): The object be exclusively checked.

**Returns:**
- `hit` (boolean): Whether the raycast is valid or not.
- `result` ([RaycastResult](../Userdata/RaycastResult)): The raycast result data.

---

#### setGravity

```lua
sm.physics.setGravity(gravity)
```
`Server-Only`  

Sets the gravitational acceleration affecting [Shape](../Userdata/Shape)s and [Bodies](../Userdata/Body).  
Note that this does **not** affect [Character](../Userdata/Character)s.

**Parameters:**
- `gravity` (number): The gravitational value.

---

#### sphereContactCount

```lua
local count = sm.physics.sphereContactCount(worldPosition, radius, includeTerrain, includeWater)
```

Returns the number of collision objects that were found inside the given sphere.

**Parameters:**
- `worldPosition` ([Vec3](/Shared-Features/Userdata/Vec3)): The sphere position.
- `radius` (number): The sphere radius.
- `includeTerrain` (boolean, optional): Whether terrain should be included in the test. Defaults to false.
- `includeWater` (boolean, optional): Whether water should be included in the test. Defaults to false.

**Returns:**
- `count` (number): The number of objects.

---

#### spherecast

```lua
local hit, result = sm.physics.spherecast(startPos, endPos, radius, ignore, mask)
```

Performs a spherical [ray cast](https://en.wikipedia.org/wiki/Ray_casting) between two positions.

The returned [RaycastResult](../Userdata/RaycastResult) contains information about any object intersected by the ray.

A [Body](../Userdata/Body), [Harvestable](../Userdata/Harvestable), [Character](../Userdata/Character), [Shape](../Userdata/Shape) or [AreaTrigger](../Userdata/AreaTrigger) may be provided which the ray will not intersect.

**Parameters:**
- `startPos` ([Vec3](/Shared-Features/Userdata/Vec3)): The start position.
- `endPos` ([Vec3](/Shared-Features/Userdata/Vec3)): The end position.
- `radius` (number): The radius of the sphere.
- `ignore` ([Shape](../Userdata/Shape)/[Body](../Userdata/Body)/[Character](../Userdata/Character)/[Harvestable](../Userdata/Harvestable)/[AreaTrigger](../Userdata/AreaTrigger)/nil): The object to ignore. Defaults to none.
- `mask` (int, optional): The collision mask. Defaults to `sm.physics.filter.default`.

**Returns:**
- `hit` (boolean): Whether the raycast is valid or not.
- `result` ([RaycastResult](../Userdata/RaycastResult)): The raycast result data.

---
