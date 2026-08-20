---
sidebar_position: 9
title: CullSphereGroup
hide_title: true
sidebar-label: 'CullSphereGroup'
---

## CullSphereGroup

**Associated namespace:** [sm.cullSphereGroup](../Static-Functions/sm.cullSphereGroup)

A userdata object representing a **cull sphere group**.

**Values:**

- `id` [** int **]  

	- `Get`: The id of the sphere group.


**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `CullSphereGroup` == `CullSphereGroup` | Checks if two instances of `CullSphereGroup` refer to the same `CullSphereGroup`. |

## Functions

### addSphere

```lua
cullSphereGroup:addSphere( id, position, radius )
```

Adds a sphere to the sphere group, duplicate ids are ignored.

**Parameters:**
- `cullSphereGroup` ([CullSphereGroup](../Userdata/CullSphereGroup)): The sphere group.
- `id` (int): The sphere id.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The sphere position.
- `radius` (number): The sphere radius.

---

### getDelta

```lua
cullSphereGroup:getDelta( position, innerRadius, outerRadius )
```

Queries the change in overlapping spheres since the last call to getDelta.

**Parameters:**
- `cullSphereGroup` ([CullSphereGroup](../Userdata/CullSphereGroup)): The sphere group.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): Position to query sphere.
- `innerRadius` (number): Radius for the inner sphere.
- `outerRadius` (number): Radius for the outer sphere.

**Returns:**
- (table): A table of removed ids.
- (table): A table of added ids.

---

### getOverlaps

```lua
cullSphereGroup:getOverlaps( position, radius )
```

Query for overlapping spheres.

**Parameters:**
- `cullSphereGroup` ([CullSphereGroup](../Userdata/CullSphereGroup)): The sphere group.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): Position to query sphere.
- `radius` (number): Radius for the query sphere.

---

### leave

```lua
cullSphereGroup:leave()
```

Query all currently active spheres and leave them.

**Parameters:**
- `cullSphereGroup` ([CullSphereGroup](../Userdata/CullSphereGroup)): The sphere group.

**Returns:**
- (table): A table of previously active ids.

---

### removeSphere

```lua
cullSphereGroup:removeSphere( id )
```

Removes a sphere from the sphere group.

**Parameters:**
- `cullSphereGroup` ([CullSphereGroup](../Userdata/CullSphereGroup)): The sphere group.
- `id` (int): The sphere id.

---

