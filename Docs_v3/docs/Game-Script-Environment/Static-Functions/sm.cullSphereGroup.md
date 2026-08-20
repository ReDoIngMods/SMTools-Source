---
sidebar_position: 16
title: sm.cullSphereGroup
hide_title: true
sidebar-label: 'sm.cullSphereGroup'
---

## sm.cullSphereGroup

**Associated object type:** [CullSphereGroup](../Userdata/CullSphereGroup)

A [CullSphereGroup](../Userdata/CullSphereGroup) is a collection of spheres that can be used to, for example,
query for objects that have entered or exited a given area around a world position.  
One application of this is loading and unloading particle effects as the player gets closer/further away, to save on game performance.

### Functions

#### newCullSphereGroup

```lua
local group = sm.cullSphereGroup.newCullSphereGroup()
```

Creates a new sphere group.  
Note that all spheres added to one group are fully separate from those in other groups.  
Any spheres in one group will not be detected by any other group, and vice versa.

**Returns:**
- ([CullSphereGroup](../Userdata/CullSphereGroup)): The created sphere group.

---
