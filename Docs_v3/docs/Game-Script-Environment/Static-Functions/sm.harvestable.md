---
sidebar_position: 24
title: sm.harvestable
hide_title: true
sidebar-label: 'sm.harvestable'
---

## sm.harvestable

**Associated object type:** [Harvestable](../Userdata/Harvestable)

A [Harvestable](../Userdata/Harvestable) is a static game object, usually representing things that can be harvested, such as trees or planted crops.  
This library provides methods for creating and interacting with them.

### Functions

#### create

```lua
local hvs = sm.harvestable.create(uuid, position, rotation, slopeNormal)
```
`Server-Only`  

Creates a new [Harvestable](../Userdata/Harvestable).

:::info note
For naming consistency reasons, [createHarvestable](#createharvestable) was added after this one.  
While both functions do the same thing, [createHarvestable](#createharvestable) should be preferred due to this.
:::

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The UUID of the harvestable.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The harvestable's world position.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat)): The harvestable's world rotation. Defaults to `sm.quat.identity()`.
- `slopeNormal` ([Vec3](/Shared-Features/Userdata/Vec3)): The harvestable's slope normal, for "skew" and "rotate" slope settings. Defaults to Z axis.

**Returns:**
- `hvs` ([Harvestable](../Userdata/Harvestable)): The created harvestable.

---

#### createHarvestable

```lua
sm.harvestable.createHarvestable(uuid, position, rotation, slopeNormal)
```
`Server-Only`  

Creates a new [Harvestable](../Userdata/Harvestable).

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The UUID of the harvestable.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The harvestable's world position.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat)): The harvestable's world rotation. Defaults to `sm.quat.identity()`.
- `slopeNormal` ([Vec3](/Shared-Features/Userdata/Vec3)): The harvestable's slope normal, for "skew" and "rotate" slope settings. Defaults to Z axis.

**Returns:**
- `hvs` ([Harvestable](../Userdata/Harvestable)): The created harvestable.

---
