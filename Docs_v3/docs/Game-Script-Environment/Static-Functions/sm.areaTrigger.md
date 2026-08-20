---
sidebar_position: 2
title: sm.areaTrigger
hide_title: true
sidebar-label: 'sm.areaTrigger'
---

## sm.areaTrigger

**Associated object type:** [AreaTrigger](../Userdata/AreaTrigger)

An [AreaTrigger](../Userdata/AreaTrigger) is an invisible collider in the world that can trigger events when objects move in or out of it.  
This allows a script to, for instance, detect when a character enters a door or count the number of shapes that are in a room.

### Constants

#### filter

Filters are used to specify what object types an area trigger is able to detect.  
If an area trigger is created with a filter, it will only react to objects of that type.  
Filters can be combined by adding them.  

:::info note
In order to detect other [AreaTrigger](../Userdata/AreaTrigger)s, **both** triggers must have the `areaTrigger` filter enabled!
:::

```lua
sm.areaTrigger.filter = {
    dynamicBody = 1,
    staticBody = 2,
    character = 4,
    areaTrigger = 8,
    harvestable = 512,
    lift = 1024,
    voxelTerrain = 32768,
    all = 34319
}
```

---

### Functions

#### createAttachedBox

```lua
local trigger = sm.areaTrigger.createAttachedBox(host, size, position, rotation, filter, data)
```

Creates a new box-shaped [AreaTrigger](../Userdata/AreaTrigger) with a given size that stays attached to an [Interactable](../Userdata/Interactable).

If a filter is specified, the trigger area will only be able to detects objects of that certain type.

See [sm.areaTrigger.filter](#filter) for more information about filters.

:::caution warning
Creating an area trigger with zero in any of the 3 `dimension` values (x, y, z) will cause a game crash!
:::

```lua title="Example Usage"
MyShape = class()

function MyShape.server_onCreate(self)
    local position = self.shape:getWorldPosition()
    local size = sm.vec3.new(1, 1, 1)

    self.myTrigger = sm.areaTrigger.createAttachedBox(self.interactable, size)
end
```

```lua title="Example with a filter"
MyShape = class()

function MyShape.server_onCreate(self)
    local position = self.shape:getWorldPosition()
    local size = sm.vec3.new(1, 1, 1)
    
    --Only detect characters
    local filter = sm.areaTrigger.filter.character

    self.myTrigger = sm.areaTrigger.createAttachedBox(self.interactable, size, nil, nil, filter)
end
```

**Parameters:**
- `host` ([Interactable](../Userdata/Interactable)): The host interactable.
- `size` ([Vec3](/Shared-Features/Userdata/Vec3)): The size of the trigger box.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The position offset. Defaults to `0, 0, 0`.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat), optional): The rotation offset. Defaults to [identity](/Shared-Features/Static-Functions/sm.quat#identity).
- `filter` (int, optional): The filter. Defaults to `dynamicBody + staticBody + character + areaTrigger + harvestable + lift`.
- `data` (any, optional): Custom data. Can be retrieved using [AreaTrigger:getUserData()](../Userdata/AreaTrigger#getuserdata).

**Returns:**
- `trigger` ([AreaTrigger](../Userdata/AreaTrigger)): The created area trigger.

---

#### createAttachedSphere

```lua
local trigger = sm.areaTrigger.createAttachedSphere(host, radius, position, rotation, filter, data)
```

Creates a new sphere-shaped [AreaTrigger](../Userdata/AreaTrigger) with a given radius that stays attached to an [Interactable](../Userdata/Interactable).

If a filter is specified, the trigger area will only be able to detects objects of that certain type.

See [sm.areaTrigger.filter](#filter) for more information about filters.

**Parameters:**
- `host` ([Interactable](../Userdata/Interactable)): The host interactable.
- `radius` (number): The radius of the sphere.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The position offset. Defaults to `0, 0, 0`.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat), optional): The rotation offset. Defaults to [identity](/Shared-Features/Static-Functions/sm.quat#identity).
- `filter` (int, optional): The filter. Defaults to `dynamicBody + staticBody + character + areaTrigger + harvestable + lift`.
- `data` (any, optional): Custom data. Can be retrieved using [AreaTrigger:getUserData()](../Userdata/AreaTrigger#getuserdata).

**Returns:**
- `trigger` ([AreaTrigger](../Userdata/AreaTrigger)): The created area trigger.

---

#### createBox

```lua
local trigger = sm.areaTrigger.createBox(size, position, rotation, filter, userdata)
```

Creates a new box-shaped [AreaTrigger](../Userdata/AreaTrigger).

If a filter is specified, the trigger area will only be able to detects objects of that certain type.

See [sm.areaTrigger.filter](#filter) for more information about filters.

:::caution warning
Creating an area trigger with zero in any of the 3 `size` values (x, y, z) will cause a game crash!
:::

**Parameters:**
- `size` ([Vec3](/Shared-Features/Userdata/Vec3)): The size of the trigger box.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The trigger position.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat), optional): The rotation. Defaults to [identity](/Shared-Features/Static-Functions/sm.quat#identity).
- `filter` (int, optional): The filter. Defaults to `dynamicBody + staticBody + character + areaTrigger + harvestable + lift`.
- `data` (any, optional): Custom data. Can be retrieved using [AreaTrigger:getUserData()](../Userdata/AreaTrigger#getuserdata).

**Returns:**
- `trigger` ([AreaTrigger](../Userdata/AreaTrigger)): The created area trigger.

---

#### createBoxWater

```lua
local trigger = sm.areaTrigger.createBoxWater(size, position, rotation, filter, userdata)
```

Creates a new box-shaped [AreaTrigger](../Userdata/AreaTrigger) that represents water, ie. certain objects cannot be placed in it.  
It also applies basic water physics to dynamic objects within it, e.g. making light objects float to the top.

If a filter is specified, the trigger area will only be able to detects objects of that certain type.

See [sm.areaTrigger.filter](#filter) for more information about filters.

:::caution warning
Creating an area trigger with zero in any of the 3 `size` values (x, y, z) will cause a game crash!
:::

**Parameters:**
- `size` ([Vec3](/Shared-Features/Userdata/Vec3)): The size of the trigger box.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The trigger position.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat), optional): The rotation. Defaults to [identity](/Shared-Features/Static-Functions/sm.quat#identity).
- `filter` (int, optional): The filter. Defaults to `dynamicBody + staticBody + character + areaTrigger + harvestable + lift`.
- `data` (any, optional): Custom data. Can be retrieved using [AreaTrigger:getUserData()](../Userdata/AreaTrigger#getuserdata).

**Returns:**
- `trigger` ([AreaTrigger](../Userdata/AreaTrigger)): The created area trigger.

---

#### createSphere

```lua
local trigger = sm.areaTrigger.createSphere(radius, position, rotation, filter, userdata)
```

Creates a new sphere-shaped [AreaTrigger](../Userdata/AreaTrigger).

If a filter is specified, the trigger area will only be able to detects objects of that certain type.

See [sm.areaTrigger.filter](#filter) for more information about filters.

**Parameters:**
- `radius` (number): The radius of the sphere.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The sphere center position.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat), optional): The rotation. Defaults to [identity](/Shared-Features/Static-Functions/sm.quat#identity).
- `filter` (int, optional): The filter. Defaults to `dynamicBody + staticBody + character + areaTrigger + harvestable + lift`.
- `data` (any, optional): Custom data. Can be retrieved using [AreaTrigger:getUserData()](../Userdata/AreaTrigger#getuserdata).

**Returns:**
- `trigger` ([AreaTrigger](../Userdata/AreaTrigger)): The created area trigger.

---

#### destroy

```lua
sm.areaTrigger.destroy(trigger)
```

Destroys an areaTrigger.

**Parameters:**
- `trigger` ([AreaTrigger](../Userdata/AreaTrigger)): The trigger to destroy.

---
