---
sidebar_position: 4
title: sm.body
hide_title: true
sidebar-label: 'sm.body'
---

## sm.body

**Associated object type:** [Body](../Userdata/Body)

A [Body](../Userdata/Body) is a collection of [Shape](../Userdata/Shape)s that are attached together.  
Multiple bodies can be attached together using [Joint](../Userdata/Joint)s such as the bearing.

### Functions

#### createBody

```lua
local body = sm.body.createBody(position, rotation, isDynamic)
```
`Server-Only`  

Creates a new, empty, [Body](../Userdata/Body).

**Parameters:**
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The world position of the body.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat), optional): The rotation of the body. Defaults to [identity](/Shared-Features/Static-Functions/sm.quat#identity).
- `isDynamic` (boolean, optional): Whether the body is dynamic or static. Defaults to `true`.

**Returns:**
- `body` ([Body](../Userdata/Body)): The created body.

---

#### getAllBodies

```lua
local bodies = sm.body.getAllBodies()
```
`Server-Only`  

Returns an array of all [Bodies](../Userdata/Body) in the world.

**Returns:**
- `bodies` (table): The array of bodies.

---

#### getCreationsFromBodies

```lua
local creations = sm.body.getCreationsFromBodies(bodies)
```

Returns an array of arrays containing bodies grouped by creation.

A creation includes all bodies connected by [Joint](../Userdata/Joint)s, etc.

**Parameters:**
- `bodies` (table): The array of bodies to get the creations of.

**Returns:**
- `creations` (table): The array of arrays of bodies, grouped by creation.

---
