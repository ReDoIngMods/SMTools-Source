---
sidebar_position: 52
title: sm.world
hide_title: true
sidebar-label: 'sm.world'
---

## sm.world

**Associated object type:** [World](../Userdata/World)

The world API handles the creation and destruction of [World](../Userdata/World)s.

A [World](../Userdata/World) contains the terrain and simulates the physics environment in which other game objects can exist.

### Constants

#### ids

Predefined special world IDs.

```lua
sm.world.ids = {
    anyWorld = 65535,
    noWorld = 65534
}
```

### Functions

#### createWorld

```lua
local world = sm.world.createWorld(filename, classname, terrainParams, seed)
```
`Server-Only`  

Creates a new [World](../Userdata/World).  
This can only be used from the [Game Script Class](../Script-Classes/GameClass).

**Parameters:**
- `filename` (string): The path to the world script file.
- `classname` (string): The name of the world script class name.
- `terrainParams` (any): Any extra terrain parameters. Optional.
- `seed` (int): The world seed. Defaults to 0.

**Returns:**
- `world` ([World](../Userdata/World)): The created world.

---

#### getCurrentWorld

```lua
local world = sm.world.getCurrentWorld()
```

Gets the [World](../Userdata/World) that the calling script is executing in.

**Returns:**
- `world` ([World](../Userdata/World)): The current script world.

---

#### getDirtySpheres

```lua
local spheres = sm.world.getDirtySpheres(position, radius)
```

Returns an array of tables representing spheres where something has changed in the world.  
The optional position and radius parameters will construct a sphere, which is used as a filter to only show results that intersect that sphere.

**Parameters:**
- `position` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The position of the query sphere.
- `radius` (number, optional): The size of the query sphere.

**Returns:**
- `spheres` (table): A table containing tables of changed spheres. See structure below.

```lua title="Table Structure"
{
	{
		center = Vec3,	--The sphere's position
		radius = number	--The sphere's size.
	}
}
```

---

#### getLegacyCreativeWorld

```lua
local world = sm.world.getLegacyCreativeWorld()
```
`Server-Only`  

Gets a previously saved creative world.

**Returns:**
- `world` ([World](../Userdata/World)): The world (id 0) if it exists in the database or nil.

---

#### loadWorld

```lua
local loaded = sm.world.loadWorld(world)
```
`Server-Only`  

Loads a previously created world.  
This can only be used from the [Game Script Class](../Script-Classes/GameClass).

**Parameters:**
- `world` ([World](../Userdata/World)): The world.

**Returns:**
- `loaded` (boolean): Whether the world was loaded successfully or not.

---
