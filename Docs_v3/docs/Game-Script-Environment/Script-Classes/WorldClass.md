---
sidebar_position: 9
title: WorldClass
hide_title: true
sidebar-label: 'WorldClass'
---

## WorldClass

A world class is instanced for every [World](../Userdata/World) in the game.

A [World](../Userdata/World) represents the virtual 3D space in which the game takes place.  
It contains things such as terrain and simulates the physics environment in which other game objects may exist.

The class can receive events sent with [sm.event.sendToWorld](../Static-Functions/sm.event).

### Instance Members

These members are set by the engine when instantiating the script class and are unique to each new instance of it.

#### world

`self.world` ([World](../Userdata/World)):  
The world that owns this script instance.

---

#### network

`self.network` ([Network](../Userdata/Network)):  
A network interface, for client/server instance communication.

---

#### storage

`self.storage` ([Storage](../Userdata/Storage)):  
A data storage interface, used to store persistent data into the save file.

---

#### data

`self.data` (nil/boolean/number/string/table):  
Parameter passed to [sm.world.createWorld](../Static-Functions/sm.world#createworld).

---

### Class Constants

These constants may be set in the global script class table to configure certain parts of the class.  
Note that changing these on an already-existing script instance will **not** update the settings.

#### cellMinX

`WorldClass.cellMinX` (int):  
Sets the minimum terrain cell index that will be generated in the X axis.  
Defaults to `0`.

---

#### cellMaxX

`WorldClass.cellMaxX` (int):  
Sets the maximum terrain cell index that will be generated in the X axis.  
Defaults to `0`.

---

#### cellMinY

`WorldClass.cellMinY` (int):  
Sets the minimum terrain cell index that will be generated in the Y axis.  
Defaults to `0`.

---

#### cellMaxY

`WorldClass.cellMaxY` (int):  
Sets the maximum terrain cell index that will be generated in the Y axis.  
Defaults to `0`.

---

#### enableAssets

`WorldClass.enableAssets` (boolean):  
Sets whether terrain assets will be requested from the terrain generation script.  
Defaults to `true`.

---

#### enableClutter

`WorldClass.enableClutter` (boolean):  
Sets whether terrain clutter will be requested from the terrain generation script.  
Defaults to `true`.

---

#### enableCreations

`WorldClass.enableCreations` (boolean):  
Sets whether creation blueprints will be requested from the terrain generation script.  
Defaults to `true`.

---

#### enableHarvestables

`WorldClass.enableHarvestables` (boolean):  
Sets whether harvestables will be requested from the terrain generation script.  
Defaults to `true`.

---

#### enableKinematics

`WorldClass.enableKinematics` (boolean):  
Sets whether kinematics will be requested from the terrain generation script.  
Defaults to `true`.

---

#### enableNodes

`WorldClass.enableNodes` (boolean):  
Sets whether nodes will be requested from the terrain generation script.  
Defaults to `true`.

---

#### enableSurface

`WorldClass.enableSurface` (boolean):  
Sets whether the heightmap terrain surface is enabled for this world.  
Defaults to `true`.

---

#### groundMaterialSet

`WorldClass.groundMaterialSet` (string):  
Sets the ground material set JSON file path to be used by the terrain.  
Defaults to `$GAME_DATA/Terrain/Materials/gnd_standard_materialset.json`.

---

#### isIndoor

`WorldClass.isIndoor` (boolean):  
Sets whether the world is considered to be indoors.  
An indoors world can only have one terrain cell at index `0, 0`.  
An example of an indoors world is the warehouse world found in Survival Mode.  
Defaults to `false`.

---

#### isStatic

`WorldClass.isStatic` (boolean):  
Sets whether the world's terrain surface is static or not.  
If a world is set to static, the entire terrain is loaded at once and the automatic distance-based (un)loading of cells is disabled.  
The entire world stays loaded at all times.
Defaults to `false`.

:::caution warning
Enabling this on a large or complex world can cause loss of performance or even game crashes.  
It is recommended to only enable this when necessary, and keep the world size small when doing so.
:::

---

#### renderMode

`WorldClass.renderMode` (string):  
Sets the render mode for the world.  
This affects things like the skybox, whether a sun is rendered, lighting behavior, etc.  
Valid options are `outdoor`, `challenge` and `warehouse`.  
Defaults to `outdoor`.

---

#### terrainScript

`WorldClass.terrainScript` (string):  
Sets the terrain generation script file path.

---

#### worldBorder

`WorldClass.worldBorder` (boolean):  
Sets whether an invisible border will be spawned around the world to prevent objects from falling/flying out of bounds.  
Defaults to `true`.

---

### Server Callbacks

These callbacks are executed in [server context](/#server).

#### server_onCollision

```lua
function WorldClass.server_onCollision(self, objectA, objectB, position, pointVelocityA, pointVelocityB, normal)
end
```

Called when a collision occurs in the [World](../Userdata/World).

**Parameters:**
- `self` (table): The script class instance.
- `objectA` ([Shape](../Userdata/Shape)/[Character](../Userdata/Character)/[Harvestable](../Userdata/Harvestable)/[Lift](../Userdata/Lift)/nil): The first colliding object. Nil if terrain.
- `objectB` ([Shape](../Userdata/Shape)/[Character](../Userdata/Character)/[Harvestable](../Userdata/Harvestable)/[Lift](../Userdata/Lift)/nil): The second colliding object. Nil if terrain.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The collision point world position.
- `pointVelocityA` ([Vec3](/Shared-Features/Userdata/Vec3)): The first object's velocity at the collision hit point.
- `pointVelocityB` ([Vec3](/Shared-Features/Userdata/Vec3)): The second object's velocity at the collision hit point.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The collision normal between the two objects.

---

#### server_onCellCreated

```lua
function WorldClass.server_onCellCreated(self, x, y)
end
```

Called when a terrain cell is loaded and feature complete for the first time.

:::info note
[Interactable](../Userdata/Interactable)s created by terrain scripts should be processed here using [sm.cell.getInteractablesByTag](../Static-Functions/sm.cell#getinteractablesbytag) and [sm.cell.getInteractablesByUuid](../Static-Functions/sm.cell#getinteractablesbyuuid),
as they are only accessible for 1 tick after being created.
:::

**Parameters:**
- `self` (table): The script class instance.
- `x` (int): The cell index in the X axis.
- `y` (int): The cell index in the Y axis.

---

#### server_onCellLoaded

```lua
function WorldClass.server_onCellLoaded(self, x, y)
end
```

Called when a terrain cell is loaded and feature complete, but has been before.

**Parameters:**
- `self` (table): The script class instance.
- `x` (int): The cell index in the X axis.
- `y` (int): The cell index in the Y axis.

---

#### server_onCellUnloaded

```lua
function WorldClass.server_onCellUnloaded(self, x, y)
end
```

Called when a terrain cell is no longer feature complete.

**Parameters:**
- `self` (table): The script class instance.
- `x` (int): The cell index in the X axis.
- `y` (int): The cell index in the Y axis.

---

#### server_onInteractableCreated

```lua
function WorldClass.server_onInteractableCreated(self, interactable)
end
```

Called when an [Interactable](../Userdata/Interactable) [Shape](../Userdata/Shape) is created in the [World](../Userdata/World).

**Parameters:**
- `self` (table): The script class instance.
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable of the created shape.

---

#### server_onInteractableDestroyed

```lua
function WorldClass.server_onInteractableDestroyed(self, interactable)
end
```

Called when an [Interactable](../Userdata/Interactable) [Shape](../Userdata/Shape) is destroyed in the [World](../Userdata/World).

**Parameters:**
- `self` (table): The script class instance.
- `interactable` ([Interactable](../Userdata/Interactable)): The interactable of the destroyed shape.

---

#### server_onProjectile

```lua
function WorldClass.server_onProjectile(self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, target, uuid)
end
```

Called when a projectile hits something in the [World](../Userdata/World).

:::info note
If the shooter is destroyed before the projectile hits, the shooter value will be nil.
:::

**Parameters:**
- `self` (table): The script class instance.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The projectile hit world position.
- `airTime` (number): The time, in seconds, that the projectile spent flying before the hit.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The impact velocity of the projectile.
- `projectileName` (string): The name of the projectile (legacy, use uuid instead).
- `shooter` ([Player](../Userdata/Player)/[Unit](../Userdata/Unit)/[Shape](../Userdata/Shape)/[Harvestable](../Userdata/Harvestable)/nil): The source/owner of the projectile.
- `damage` (int): The projectile's damage value.
- `customData` (any): Custom data defined with the `custom*` functions in [sm.projectile](../Static-Functions/sm.projectile).
- `target` ([Character](../Userdata/Character)/[Shape](../Userdata/Shape)/[Harvestable](../Userdata/Harvestable)/[Lift](../Userdata/Lift)/nil): The object that was hit. Nil if terrain.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit point normal vector.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The UUID of the projectile.

---

#### server_onExplosion

```lua
function WorldClass.server_onExplosion(self, center, destructionLevel)
end
```

Called when an explosion occurs in the [World](../Userdata/World).

**Parameters:**
- `self` (table): The script class instance.
- `center` ([Vec3](/Shared-Features/Userdata/Vec3)): The center position of the explosion.
- `destructionLevel` (int): The destruction level of the explosion. Corresponds to the `durability` rating of a shape.

---

#### server_onMelee

```lua
function WorldClass.server_onMelee(self, position, attacker, target, damage, power, direction, normal)
end
```

Called when a melee attack hits something in the [World](../Userdata/World).

:::info note
If the attacker is destroyed before the hit lands, the attacker value will be nil.
:::

**Parameters:**
- `self` (table): The script class instance.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit world position.
- `attacker` ([Player](../Userdata/Player)/[Unit](../Userdata/Unit)/nil): The source/owner of the attack.
- `target` ([Character](../Userdata/Character)/[Shape](../Userdata/Shape)/[Harvestable](../Userdata/Harvestable)/[Lift](../Userdata/Lift)/nil): The object that was hit. Nil if terrain.
- `damage` (int): The attack's damage value.
- `power` (number): The physical impact strength of the hit.
- `direction` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction of the attack.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit point normal vector.

---

#### server_onProjectileFire

```lua
function WorldClass.server_onProjectileFire(self, position, velocity, projectileName, shooter, uuid)
end
```

Called when a projectile is fired in the [World](../Userdata/World).

**Parameters:**
- `self` (table): The script class instance.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The position where the projectile was fired from.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The fire velocity of the projectile.
- `projectileName` (string): The name of the projectile (legacy, use uuid instead).
- `shooter` ([Player](../Userdata/Player)/[Unit](../Userdata/Unit)/[Shape](../Userdata/Shape)/[Harvestable](../Userdata/Harvestable)/nil): The source/owner of the projectile.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The UUID of the projectile.

---

### Client Callbacks

These callbacks are executed in [client context](/#client).

#### client_onCollision

```lua
function WorldClass.client_onCollision(self, objectA, objectB, position, pointVelocityA, pointVelocityB, normal)
end
```

Called when a collision occurs in the [World](../Userdata/World).

**Parameters:**
- `self` (table): The script class instance.
- `objectA` ([Shape](../Userdata/Shape)/[Character](../Userdata/Character)/[Harvestable](../Userdata/Harvestable)/[Lift](../Userdata/Lift)/nil): The first colliding object. Nil if terrain.
- `objectB` ([Shape](../Userdata/Shape)/[Character](../Userdata/Character)/[Harvestable](../Userdata/Harvestable)/[Lift](../Userdata/Lift)/nil): The second colliding object. Nil if terrain.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The collision point world position.
- `pointVelocityA` ([Vec3](/Shared-Features/Userdata/Vec3)): The first object's velocity at the collision hit point.
- `pointVelocityB` ([Vec3](/Shared-Features/Userdata/Vec3)): The second object's velocity at the collision hit point.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The collision normal between the two objects.

---

#### client_onCellLoaded

```lua
function WorldClass.client_onCellLoaded(self, x, y)
end
```

Called when a terrain cell is considered feature complete for a client.

**Parameters:**
- `self` (table): The script class instance.
- `x` (int): The cell index in the X axis.
- `y` (int): The cell index in the Y axis.

---

#### client_onCellUnloaded

```lua
function WorldClass.client_onCellUnloaded(self, x, y)
end
```

Called when a terrain cell is no longer considered feature complete for a client.

**Parameters:**
- `self` (table): The script class instance.
- `x` (int): The cell index in the X axis.
- `y` (int): The cell index in the Y axis.

---
