---
sidebar_position: 39
title: sm.portal
hide_title: true
sidebar-label: 'sm.portal'
---

## sm.portal

**Associated object type:** [Portal](../Userdata/Portal)

A [Portal](../Userdata/Portal) is a box-shaped trigger that can be used to teleport its contents to another location.

:::caution warning
This feature is very sensitive to "wrong" use and requires careful scripting to avoid triggering race conditions, bugs or game crashes.
:::

### Functions

#### addWorldPortalHook

```lua
sm.portal.addWorldPortalHook(world, name, portal)
```
`Server-Only`  

Adds a hook that a new world can find to hook up the other side of a portal.

**Parameters:**
- `world` ([World](../Userdata/World)): The target world.
- `name` (string): The name of the portal.
- `portal` ([Portal](../Userdata/Portal)): The portal.

---

#### createPortal

```lua
local portal = sm.portal.createPortal(size)
```
`Server-Only`  

Creates a new portal.

**Parameters:**
- `size` ([Vec3](/Shared-Features/Userdata/Vec3)): The size.

**Returns:**
- ([Portal](../Userdata/Portal)): The created portal.

---

#### destroy

```lua
sm.portal.destroy(portal)
```
`Server-Only`  

Destroys a portal.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.

---

#### popWorldPortalHook

```lua
local portal = sm.portal.popWorldPortalHook(name)
```
`Server-Only`  

Finds and pops a portal hook for this world if present.

**Parameters:**
- `name` (string): The portal name.

**Returns:**
- ([Portal](../Userdata/Portal)): The portal. Nil if nothing was found.

---
