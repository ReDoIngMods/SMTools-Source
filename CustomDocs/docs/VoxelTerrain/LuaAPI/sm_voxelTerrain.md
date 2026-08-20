---
sidebar_position: 4
title: sm.voxelTerrain
hide_title: true
---

<br></br>

## sm.voxelTerrain

The **voxelTerrain** library contains most of the VoxelTerrain DLL's custom Lua API.  
This library is only available in the **game script environment**.

It provides various features to e.g. **query the terrain system for information** (e.g. voxel material and density),  
**dynamically modify the terrain** in various ways, such as **erasing terrain in various shapes** (cylinder, box, etc.),  
**changing/"painting" terrain materials** and even **spawning previously erased terrain back in!**  

Additionally, it also provides functions to **import and voxelize OBJ mesh files at runtime**, as well as  
**exporting/importing voxel terrain chunks** at runtime - either as raw, modifiable data (Lua table) or  
in a compressed and serialized format, for e.g. storing in a JSON file.  

There are also functions for **restricting voxel terrain interaction** to a certain extent, for example  
preventing terrain from being destroyed or new terrain from being added in specific areas of the world.

**For extra constants and other functions, make sure to check the [Shared Features](/VoxelTerrain/LuaAPI/SharedFeatures) documentation!**

:::info note
Most of the functions here simply do nothing if used on a world where `World.enableVoxelTerrain` was set to `false`.  

Similarly, the `create*At` family of functions also do nothing if the world position given to them lies inside of a  
[Terrain Restriction Area](/VoxelTerrain/LuaAPI/Userdata#restrictionarea) that was configured to block the desired action (e.g. terrain placement).  

Do note that, for performance reasons, this check only applies to the **position** - **not** the **bounds** of the shape.  
As such, when spawning e.g. a large sphere, it may still affect a restricted area by reaching into it, as long as its  
center point lies outside of said area.

Also, **any functions which directly interact with the terrain system (e.g. [createBoxAt](#createboxat)) cannot be used in  
the [WorldClass::onCreate](https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate) callback!**  
This is due to a quirk in the game's own systems, which was discovered only after the DLL was already finished and fixing it would 
have required rewriting major parts of the API internals.  
This does **not** apply to the [terrain restriction](#setglobalrestrictions) APIs, which should work just fine in this context.
:::

:::caution warning
**Spawning/generating voxel terrain chunks from the game script environment using this library  
*at the same time* as the terrain script is still generating terrain has NOT been tested and will  
very likely result in unwanted behavior, errors or broken terrain.**

To avoid this, **only use the `sm.voxelTerrain` voxel APIs after the terrain script has fully finished generating  
or on chunks in cells which were already processed by it** (as the terrain script will never touch a chunk twice).

**This warning does not apply to the [terrain restriction](#setglobalrestrictions) APIs, as these do not interact directly with the terrain.**
:::

## Constants

### versionString

```lua
local v = sm.voxelTerrain.versionString
```

A string containing the current version of the VoxelTerrain DLL.

---



### versionInt

```lua
local v = sm.voxelTerrain.versionInt
```

The current version of the VoxelTerrain DLL, stored as a 32-bit integer.

---



### restrictionFlags

```lua
sm.voxelTerrain.restrictionFlags = {
	terrainPlacement = 0x1,
	terrainRemoval = 0x2,
	voxelMaterialChange = 0x4,
	shapeConstruction = 0x8,
	all = 0xF,
	override = 0x80
}
```

Restriction flags are used with the [terrain restriction system](#setglobalrestrictions).  
These flags are used to control how the player and other objects can interact with the voxel terrain system.  

Note: This documentation uses both `"restrictions"` and `"permissions"` to refer to these flags.  
If the term `"permissions"` is used, (e.g. something "requires permission"), this means that the mentioned flag must **not** be set in the given context.

`terrainPlacement`: Controls whether extra terrain can be added to the world or not (density increase).  
`terrainRemoval`: Controls whether terrain may be removed from the world or not (density decrease).  
`voxelMaterialChange`: Controls whether the material ID of the terrain may be changed or not.  
`shapeConstruction`: Controls whether the player is allowed to attach blocks/parts to the voxel terrain or not.  
`all`: All other flags combined, excluding the `override` flag.  
`override`: Force all flags combined with this to be set, even if a "later" restriction area does not set these flags.

:::info note
It is only possible to force-*set* extra flags - it is not possible to force-*un-set* a flag using the `override` flag.

Also, due to how the game works, the restriction system contains some client/server-dependent behavior.

Mainly, **the `terrainPlacement`, `terrainRemoval` and `voxelMaterialChange` restrictions only function on the host/server**,
while **the `shapeConstruction` flag only works on the client!**

This is important to keep in mind, as e.g. setting a terrain modification restriction on the *client* will simply  
result in the restriction not applying, as the terrain modification logic happens on the *server*.

Similarly, setting the `shapeConstruction` flag on the *server* will work **only for the host player**, but  
not for any *remote* players, as the player building logic happens on the *client*.

Additionally, some Lua API functions such as `createShape` or `importChunk` will always ignore any restrictions.
:::

---



### applyMode

```lua
sm.voxelTerrain.applyMode = {
	applyDensity = 0x1,
	applyMaterial = 0x2,
	removeAny = 0x4,
	removeMaterial = 0x8,
	default = 0x3
}
```

SDF apply flags for the `create*At` family of functions.  
These flags control the way in which those functions interact with the terrain system.  
The flags can be combined by simply adding them together using Lua's `+` math operator.

For permission flags, see [restriction flags](#restrictionflags).

Note that the permissions logic only applies if there actually is a [RestrictionArea](/VoxelTerrain/LuaAPI/Userdata#restrictionarea) occupying the space  
in which the SDF will be spawned and/or global restriction flags were set.  
If neither of those are the case, all permissions are enabled by default.

`applyDensity`: Adds only voxel density, leaves material IDs unchanged. Requires the `terrainPlacement` permission.  
`applyMaterial`: Changes only the material of voxels, leaving density unchanged. Requires the `voxelMaterialChange` permission.  
`removeAny`: Removes density, leaving material IDs unchanged. Requires the `terrainRemoval` permission.  
`removeMaterial`: Removes only density from voxels with the given material. Requires the `terrainRemoval` permission.  
`default`: Default behavior. Equals `applyDensity` + `applyMaterial`.

:::info note
When combining these flags, their required permissions combine as well!  
For example, if `applyDensity` and `applyMaterial` are combined, this now  
requires both the `terrainPlacement` **and** `voxelMaterialChange` permissions.
:::

---



## Functions

### getClosestVoxel

```lua
local voxelPos, material, density = sm.voxelTerrain.getClosestVoxel(worldPosition, [world])
```

Queries the terrain system for the information of the voxel that is closest to the given world position.  
If there is no voxel data available (e.g. if the queried position is outside of the world), this returns `nil`.

**Parameters:**
- `worldPosition` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The world position to query.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to perform the query in. Defaults to current script world.

**Returns:**
- `voxelPos` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The world position of the closest voxel.
- `material` (integer): The material ID of the voxel (0/1/2). This is an index into the [voxel material set](/VoxelTerrain/MaterialSet#material-set).
- `density` (integer): The density of the voxel (0 - 63).

---



### getVoxelsAt

```lua
local v0, v1, v2, v3, v4, v5, v6, v7 = sm.voxelTerrain.getVoxelsAt(worldPosition, [world])
```

Queries the terrain system for the eight voxels (corners of a grid cube) that surround the given world position.  
If there is no voxel data available (e.g. if the queried position is outside of the world), this returns `nil`.

The returned voxels are computed using offsets in the following order, where an offset of `0` refers to the voxel  
who's world position is closest to `-inf` and a non-zero value is the offset from that voxel in the given axis.

```
{0, 0, 0}
{1, 0, 0}
{0, 1, 0}
{1, 1, 0}
{0, 0, 1}
{1, 0, 1}
{0, 1, 1}
{1, 1, 1}
```

```lua title="Returned Array Format"
{
	[1] = Vec3,		-- The voxel's world position.
	[2] = integer,	-- The voxel's material ID.
	[3] = integer	-- The voxel's density.
}
```

**Parameters:**
- `worldPosition` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The world position to query.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to perform the query in. Defaults to current script world.

**Returns:**
- `v0 .. v7` (table): The arrays containing the data of the voxels. See array structure above.

---



### getVoxelsInSphere

```lua
local voxels = sm.voxelTerrain.getVoxelsInSphere(centerPosition, radius, [world])
```

Queries the terrain system for all voxels inside of a sphere shape at the given position and radius.  
If there is no voxel data available (e.g. if the queried position is outside of the world), this returns an empty table.

```lua title="Voxel Array Element Structure"
{
	[1] = Vec3,			-- The voxel's world position.
	[2] = number,		-- The squared(!) distance from the sphere center to the voxel.
	[3] = material,		-- The voxel's material ID.
	[4] = density		-- The voxel's density.
}
```

**Parameters:**
- `centerPosition` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The center world position of the sphere.
- `radius` (number): The radius, in meters, of the sphere.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to perform the query in. Defaults to current script world.

**Returns:**
- `voxels` (table): The array of voxels that were found in the sphere. See structure above.

---



### createSphereAt

```lua
sm.voxelTerrain.createSphereAt(centerPosition, radius, [rotation], [material], [applyMode], [world])
```
`Server-Only`

Spawns voxel terrain in a sphere shape.  
Note that, since the radius is a [Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3), the sphere can be deformed by setting the axes to different sizes.

**Parameters:**
- `centerPosition` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The world position of the shape center.
- `radius` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The radius, in meters, of the sphere.
- `rotation` ([Quat](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Quat)): The rotation of the shape. Defaults to identity.
- `material` (integer): The material ID to spawn the terrain with. Defaults to 0.
- `applyMode` (integer): The [ApplyMode](#applymode) with which the SDF should be applied to the world. Defaults to `sm.voxelTerrain.applyMode.default`.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to spawn the terrain in. Defaults to current script world.

---



### createBoxAt

```lua
sm.voxelTerrain.createBoxAt(centerPosition, halfExtents, [rotation], [material], [applyMode], [world])
```
`Server-Only`

Spawns voxel terrain in a box shape.  
Note that `halfExtents` is **half** the size of the box - the distance from the box center to its face(s).

**Parameters:**
- `centerPosition` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The world position of the shape center.
- `halfExtents` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The half size, in meters, of the box.
- `rotation` ([Quat](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Quat)): The rotation of the shape. Defaults to identity.
- `material` (integer): The material ID to spawn the terrain with. Defaults to 0.
- `applyMode` (integer): The [ApplyMode](#applymode) with which the SDF should be applied to the world. Defaults to `sm.voxelTerrain.applyMode.default`.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to spawn the terrain in. Defaults to current script world.

---



### createCylinderAt

```lua
sm.voxelTerrain.createCylinderAt(centerPosition, radius, halfHeight, [rotation], [material], [applyMode], [world])
```
`Server-Only`

Spawns voxel terrain in a cylinder shape.

**Parameters:**
- `centerPosition` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The world position of the shape center.
- `radius` (number): The radius, in meters, of the cylinder.
- `halfHeight` (number): The height/length, in meters, of the cylinder.
- `rotation` ([Quat](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Quat)): The rotation of the shape. Defaults to identity.
- `material` (integer): The material ID to spawn the terrain with. Defaults to 0.
- `applyMode` (integer): The [ApplyMode](#applymode) with which the SDF should be applied to the world. Defaults to `sm.voxelTerrain.applyMode.default`.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to spawn the terrain in. Defaults to current script world.

---



### createConeAt

```lua
sm.voxelTerrain.createConeAt(apexPosition, radius, height, [rotation], [material], [applyMode], [world])
```
`Server-Only`

Spawns voxel terrain in a cone shape.

**Parameters:**
- `apexPosition` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The world position of the cone apex (tip).
- `radius` (number): The radius, in meters, of the base of the cone.
- `height` (number): The height, in meters, of the cone (distance from base to tip).
- `rotation` ([Quat](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Quat)): The rotation of the shape. Defaults to identity.
- `material` (integer): The material ID to spawn the terrain with. Defaults to 0.
- `applyMode` (integer): The [ApplyMode](#applymode) with which the SDF should be applied to the world. Defaults to `sm.voxelTerrain.applyMode.default`.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to spawn the terrain in. Defaults to current script world.

---



### createCapsuleAt

```lua
sm.voxelTerrain.createCapsuleAt(positionA, positionB, radius, [rotation], [material], [applyMode], [world])
```
`Server-Only`

Spawns voxel terrain in a capsule shape.

**Parameters:**
- `positionA` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The world position of one end of the capsule.
- `positionB` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The world position of the other end of the capsule.
- `radius` (number): The radius, in meters, of the capsule's cylinder and end spheres.
- `rotation` ([Quat](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Quat)): The rotation of the shape. Defaults to identity.
- `material` (integer): The material ID to spawn the terrain with. Defaults to 0.
- `applyMode` (integer): The [ApplyMode](#applymode) with which the SDF should be applied to the world. Defaults to `sm.voxelTerrain.applyMode.default`.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to spawn the terrain in. Defaults to current script world.

---



### createTorusAt

```lua
sm.voxelTerrain.createTorusAt(centerPosition, majorRadius, minorRadius, [rotation], [material], [applyMode], [world])
```
`Server-Only`

Spawns voxel terrain in a torus shape.

**Parameters:**
- `centerPosition` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The world position of the shape center.
- `majorRadius` (number): The major radius, in meters (distance of the center to the center of the tube).
- `minorRadius` (number): The minor radius, in meters (radius of the tube itself).
- `rotation` ([Quat](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Quat)): The rotation of the shape. Defaults to identity.
- `material` (integer): The material ID to spawn the terrain with. Defaults to 0.
- `applyMode` (integer): The [ApplyMode](#applymode) with which the SDF should be applied to the world. Defaults to `sm.voxelTerrain.applyMode.default`.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to spawn the terrain in. Defaults to current script world.

---



### iterateVoxels

```lua
sm.voxelTerrain.iterateVoxels(voxelCallback, centerPosition, halfExtents, [rotation], [createChunks], [clearEdgeVoxels], [world])
```
`Server-Only`

Iterates over all voxels in all chunks that the given bounding box overlaps with and calls the voxelCallback for each voxel.  
This function is slower than the other modification functions (Lua call overhead) but essentially allows  
for infinite customization, as the function's actual behavior is entirely defined inside the given voxel callback.

For example, it could be used to selectively erase/place/replace voxels depending on some condition,  
or simply fetch information about voxels in a more complex way that the other query functions do not allow.  
It also allows for rapid-testing custom voxel modification logic and functions.

The `createChunks` parameter sets whether new terrain chunks should be allocated if the given bounding box  
reaches into a space where there is no chunk yet (e.g. if the terrain script did not generate one there).  
If this parameter is `false`, no extra chunk will be allocated. This can lead to terrain getting cut off.

The `clearEdgeVoxels` parameter sets whether the voxels at the very edge of the world border should be  
cleared (set to zero) or not. This affects how the terrain mesh is generated; if the voxels are cleared, the mesh  
is "closed" (surface is generated along the border), where as if the voxels are not cleared, the mesh simply  
ends at the border, which can sometimes lead to lighting issues if underground.

**Parameters:**
- `voxelCallback` (function): The function to call for each voxel (see signature and docs below).
- `centerPosition` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The center world position of the bounding box.
- `halfExtents` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The half extents, in meters, of the bounding box.
- `rotation` ([Quat](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Quat)): The rotation of the bounding box. Defaults to identity.
- `createChunks` (boolean): Whether new terrain chunks should be allocated if needed. Defaults to `true`.
- `clearEdgeVoxels` (boolean): Whether world edge voxels should be cleared or not. Defaults to `true`.
- `applyMode` (integer): The [ApplyMode](#applymode) with which the SDF should be applied to the world. Defaults to `sm.voxelTerrain.applyMode.default`.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to apply the function to. Defaults to current script world.

**VoxelCallback Parameters:**
- `voxelWorldPos` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The world position of the voxel.
- `voxelLocalPos` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The local position of the voxel relative to the bounding box.
- `material` (integer): The material ID of the voxel.
- `density` (integer): The density of the voxel.

**VoxelCallback Returns:**
- `material` (integer): The new material ID of the voxel.
- `density` (integer): The new density of the voxel.

```lua title="Example Voxel Callback"
function voxelCallback(voxelWorldPos, voxelLocalPos, material, density)
	-- "erase" this voxel if it is a given material
	if material == 0 then
		density = 0
	end
	-- Must always return these
	return material, density
end
```

---



### eraseVoxelsInSphere

```lua
sm.voxelTerrain.eraseVoxelsInSphere(centerPosition, radius, strength, [world])
```
`Server-Only`

Erases voxel terrain in a sphere shape, similar to [World:terrainSphereModification](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World#terrainspheremodification) but using a different algorithm.

**Parameters:**
- `centerPosition` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The sphere center world position.
- `radius` (number): The radius, in meters, of the sphere.
- `strength` (number): The strength of the erase. Low = smooth sphere, High = very rough sphere.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world from which to erase the terrain. Defaults to current script world.

---



### reduceVoxelsInSphere

```lua
sm.voxelTerrain.reduceVoxelsInSphere(centerPosition, radius, strength, [world])
```
`Server-Only`

Reimplementation of the core logic of [World:terrainSphereModification](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World#terrainspheremodification).  
Unlike `terrainSphereModification` though, this function does not check whether the sphere overlaps  
with any geometry and instead simple erases voxels at whatever position it is being called.

**Parameters:**
- `centerPosition` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The sphere center world position.
- `radius` (number): The radius, in meters, of the sphere.
- `strength` (number): The strength of the erase. Low = smooth sphere, High = very rough sphere.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world from which to erase the terrain. Defaults to current script world.

---



### importMesh

```lua
sm.voxelTerrain.importMesh(meshPath, centerPosition, halfExtents, [rotation], [materialTexture], [material], [subtractive], [smoothingRadius], [world])
```
`Server-Only`

Loads, voxelizes and spawns a 3D mesh from a file.

A material texture can be given in order to use UV mapping to assign terrain materials to the surface voxels of the generated mesh.  
The format of the texture is simple:
- The **red** channel maps to material ID 0.
- The **green** channel maps to material ID 1.
- The **blue** channel maps to material ID 2.

Which one of the three materials is used for a given voxel is decided based on a combination of factors,  
such as voxel/vertex distance, closest texture coordinate and the actual RGB levels in the texture.

Note that the mesh and texture loaded through this function are **cached** - this means that subsequent calls  
of this function will **not** re-load the file(s) from disk but simply re-use the cached version.  
However, **a reload of this cache can be triggered using the [reloadMesh](#reloadmesh) and [reloadMeshTexture](#reloadmeshtexture) functions.**

:::info note
Currently, only meshes in OBJ format (`.obj` files) are supported by this function.  

Also, even though the game does have its own built-in mesh voxelizer, that one is tightly integrated with  
the tile editor (which the VoxelTerrain DLL does not support yet) and is lacking some advanced features,  
which is why this function uses a custom implementation instead.

Because of this however, the mesh absolutely **must** have proper, watertight, non-intersecting geometry.  
If the mesh contains "improper" geometry (e.g. a hole in the mesh), the voxelizer may misbehave and  
produce unwanted results.
:::

:::info note
The size of the mesh in the mesh file is irrelevant for this function.  
Internally, the mesh is automatically normalized and re-fitted into the given bounding box.
:::

:::info note
The voxel terrain grid does not have a lot of precision - only one voxel per meter!  
Because of this, if a spawned mesh seems to have a lack of detail, importing it with  
a greater size may fix the issue.  
If the imported mesh seems rough/un-smooth or small/thin sections are missing  
(e.g. an arm or leg), adjusting the smoothing radius can also fix this.  
If in doubt, try experimenting with the parameters or ask for help in the [Discord server](https://discord.gg/DyUxeyAJRz).
:::

**Parameters:**
- `meshPath` (string): The `$-` file path to the mesh file.
- `centerPosition` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The center position of the bounding box.
- `halfExtents` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The half extents, in meters, of the bounding box.
- `rotation` ([Quat](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Quat)): The rotation of the bounding box. Defaults to identity.
- `materialTexture` (string): The `$-` file path to an RGB texture to be used to assign terrain materials to mesh surface voxels. Defaults to none.
- `material` (integer): The material ID to be used for the terrain if no material texture is available or the voxel is not at the surface. Defaults to 0.
- `subtractive` (boolean): Whether the import will subtract from the terrain (instead of adding to it) or not. Defaults to false.
- `smoothingRadius` (number): Distance to the mesh surface within which the terrain will be smoothed.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to spawn the terrain in. Defaults to current script world.

---



### reloadMesh

```lua
sm.voxelTerrain.reloadMesh(meshPath)
```
`Server-Only`

If the given mesh file path was previously used (and thus cached) in [importMesh](#importmesh),  
this invalidates that cache, causing this mesh to be re-loaded from disk the next time it is  
used with [importMesh](#importmesh).

**Parameters:**
- `meshPath` (string): The `$-` file path to a mesh file that was previously imported.

---



### reloadMeshTexture

```lua
sm.voxelTerrain.reloadMeshTexture(texturePath)
```
`Server-Only`

If the given material texture path was previously used (and thus cached) in [importMesh](#importmesh),  
this invalidates that cache, causing this texture to be re-loaded from disk the next time it is  
used with [importMesh](#importmesh).

**Parameters:**
- `texturePath` (string): The `$-` file path to a texture file that was previously loaded.

---



### getWorldBounds

```lua
local min, max = sm.voxelTerrain.getWorldBounds([world])
```

Returns the bounding box (AABB) of the world.  
No voxel terrain can be used and/or spawned outside of these bounds.

**Parameters:**
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to query. Defaults to current script world.

**Returns:**
- `min` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The world bounds min.
- `max` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The world bounds max.

---



### getWorldChunkBounds

```lua
local min, max = sm.voxelTerrain.getWorldChunkBounds([world])
```

Returns the bounds of valid 3D voxel chunk indices for the given world.  
Voxel terrain chunks cannot be spawned at an index outside of these bounds.

**Parameters:**
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to query. Defaults to current script world.

**Returns:**
- `min` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The minimum valid 3D chunk index.
- `max` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The maximum valid 3D chunk index.

---



### exportChunk

```lua
local chunk = sm.voxelTerrain.exportChunk(chunkIndex, [world])
```

Exports a voxel terrain chunk to a Lua table containing [raw chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#raw-data).  
This chunk data can be re-imported using the [importChunk](#importchunk) function.  
If the given chunk index is invalid or there is no chunk, this returns nil.

:::info note
This data format is easy to work with and thus suitable for immediate processing.  
However, it is not very memory-efficient. Do not send it over the network or store it to a file!  
For these purposes, use [exportSerializedChunk](#exportserializedchunk) instead!

Alternatively, if required, the data can also be serialized using [serializeChunkData](/VoxelTerrain/LuaAPI/SharedFeatures#serializechunkdata).
:::

**Parameters:**
- `chunkIndex` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The 3D index of the chunk.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to export from. Defaults to current script world.

**Returns:**
- `chunk` (table): The chunk data array.

---



### importChunk

```lua
sm.voxelTerrain.importChunk(chunkIndex, data, [merge], [rotationID], [axisID], [world])
```
`Server-Only`

Imports a voxel terrain chunk from [raw chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#raw-data).

Note that this function **will** throw an error if the given chunk index is outside of valid [chunk index bounds](#getworldchunkbounds).

Also, if there is no chunk at the given index, a new one will be allocated and imported into.

**Parameters:**
- `chunkIndex` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The 3D index of the chunk.
- `data` (table): The [raw chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#raw-data) array.
- `merge` (boolean): Whether the spawned chunk should merge with existing terrain or simply override it. Defaults to false (override).
- `rotationID` (integer): Rotation index around given `axisID`. 0 = 0°, 1 = 90°, 2 = 180°, 3 = 270°. Defaults to 0.
- `axisID` (integer): Selects around which axis `rotationID` rotates the chunk. 0 = X, 1 = Y, 2 = Z. Defaults to 0.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to import the chunk into. Defaults to current script world.

---



### exportSerializedChunk

```lua
local chunk = sm.voxelTerrain.exportSerializedChunk(chunkIndex, [world])
```

Exports a voxel terrain chunk to a Lua string containing [serialized chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#serialized-data).  
This chunk data can be re-imported using the [importSerializedChunk](#importserializedchunk) function.  
If the given chunk index is invalid or there is no chunk, this returns nil.

:::info note
The serialized data is compressed and encoded and as such, not easily modifiable in Lua.  
It is, however, perfectly suited for storing to a file or sending over the network.  
If the goal is to modify the data directly within Lua though, [exportChunk](#exportchunk) should be used instead.

Alternatively, if required, the data can also be deserialized using [deserializeChunkData](/VoxelTerrain/LuaAPI/SharedFeatures#deserializechunkdata).
:::

**Parameters:**
- `chunkIndex` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The 3D index of the chunk.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to export from. Defaults to current script world.

**Returns:**
- `chunk` (string): The serialized chunk data string.

---



### importSerializedChunk

```lua
sm.voxelTerrain.importSerializedChunk(chunkIndex, data, [merge], [rotationID], [axisID], [world])
```
`Server-Only`

Imports a voxel terrain chunk from [serialized chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#serialized-data).

Note that this function **will** throw an error if the given chunk index is outside of valid [chunk index bounds](#getworldchunkbounds).

Also, if there is no chunk at the given index, a new one will be allocated and imported into.

**Parameters:**
- `chunkIndex` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The 3D index of the chunk.
- `data` (string): The [serialized chunk data](/VoxelTerrain/LuaAPI/VoxelDataFormat#serialized-data) string.
- `merge` (boolean): Whether the spawned chunk should merge with existing terrain or simply override it. Defaults to false (override).
- `rotationID` (integer): Rotation index around given `axisID`. 0 = 0°, 1 = 90°, 2 = 180°, 3 = 270°. Defaults to 0.
- `axisID` (integer): Selects around which axis `rotationID` rotates the chunk. 0 = X, 1 = Y, 2 = Z. Defaults to 0.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to import the chunk into. Defaults to current script world.

---



### isChunkEmpty

```lua
local empty = sm.voxelTerrain.isChunkEmpty(chunkIndex, [world])
```

Queries whether the chunk at the given index has a physics mesh or not.  
This can be useful for e.g. only exporting chunks which actually contain visible terrain.

**Parameters:**
- `chunkIndex` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The 3D index of the chunk.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to query. Defaults to current script world.

**Returns:**
- `empty` (boolean): Whether the chunk has a physics mesh or not.

---



### setGlobalRestrictions

```lua
sm.voxelTerrain.setGlobalRestrictions(flags, [world])
```

Sets [terrain restriction flags](#restrictionflags) that will apply globally across the whole world.

**Parameters:**
- `flags` ([RestrictionFlags](#restrictionflags)): The flags.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to set the flags in. Defaults to current script world.

---



### getGlobalRestrictions

```lua
local flags = sm.voxelTerrain.getGlobalRestrictions([world])
```

Queries the world's current global [terrain restriction flags](#restrictionflags) that were set using [setGlobalRestrictions](#setglobalrestrictions).

**Parameters:**
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to query. Defaults to current script world.

**Returns:**
- `flags` ([RestrictionFlags](#restrictionflags)): The flags.

---



### createRestrictionArea

```lua
local area = sm.voxelTerrain.createRestrictionArea(min, max, flags, [world])
```

Creates a new [RestrictionArea](/VoxelTerrain/LuaAPI/Userdata#restrictionarea).

Voxel terrain interactions inside this AABB will now be affected by the given [restriction flags](#restrictionflags).

:::info notes
The new area is created as **inactive** - to make its restrictions apply, you must enable it using e.g. [setActive](/VoxelTerrain/LuaAPI/Userdata#setactive).

If multiple areas overlap on a given spot, **only the last-created area's flags will be used**.  

To work around this, one of the areas can be chosen as "master" by setting the `override` flag on it -  
this will enforce that area's flags, even if "later" areas do not set these flags.

If multiple *override* areas overlap as well, the behavior is slightly different -  
unlike normal areas, the system does **not** use the last-created override  
area's flags but rather **combines all overlapping override flags together**.

Also note that the `override` flag **cannot un-set an already-set flag**.
:::


**Parameters:**
- `min` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The AABB min.
- `max` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The AABB max.
- `flags` ([RestrictionFlags](#restrictionflags)): The flags.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to create the area in. Defaults to current script world.

**Returns:**
- `area` ([RestrictionArea](/VoxelTerrain/LuaAPI/Userdata#restrictionarea)): The created area.

---



### getRestrictionsAt

```lua
local flags = sm.voxelTerrain.getRestrictionsAt(worldPosition, [world])
```

Queries the world for active [terrain restriction flags](#restrictionflags) at the given world position.

**Parameters:**
- `worldPosition` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The position.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to query. Defaults to current script world.

**Returns:**
- `flags` ([RestrictionFlags](#restrictionflags)): The flags at the given position.

---



### getRestrictionAreasAt

```lua
local areas = sm.voxelTerrain.getRestrictionAreasAt(worldPosition, [world])
```

Queries the world for any [restriction areas](/VoxelTerrain/LuaAPI/Userdata#restrictionarea) which overlap with the given world position.

**Parameters:**
- `worldPosition` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The position.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to query. Defaults to current script world.

**Returns:**
- `areas` (table): An array of all areas which overlap the given position.

---



### getRestrictionAreasInBounds

```lua
local areas = sm.voxelTerrain.getRestrictionInBounds(min, max, [world])
```

Queries the world for any [restriction areas](/VoxelTerrain/LuaAPI/Userdata#restrictionarea) which overlap with the given AABB.

**Parameters:**
- `min` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The AABB min.
- `max` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The AABB max.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to query. Defaults to current script world.

**Returns:**
- `areas` (table): An array of all areas which overlap the given AABB.

---



### checkRestrictionsAt

```lua
local allowed = sm.voxelTerrain.checkRestrictionsAt(worldPosition, flags, [world])
```

Checks the [restriction flags](#restrictionflags) at the given position and returns `true`  
if the given flags are **not** present in the found flags (meaning, the action is allowed there).

**Parameters:**
- `worldPosition` ([Vec3](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Vec3)): The position.
- `flags` ([RestrictionFlags](#restrictionflags)): The flags to check for.
- `world` ([World](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/World)): The world to query. Defaults to current script world.

**Returns:**
- `allowed` (boolean): Whether the given flags are allowed(disabled) at the given position or not.
