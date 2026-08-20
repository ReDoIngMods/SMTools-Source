---
sidebar_position: 20
title: Portal
hide_title: true
sidebar-label: 'Portal'
---

## Portal

**Associated namespace:** [sm.portal](../Static-Functions/sm.portal)

A userdata object representing a **portal** in the game.

**Values:**

- `id` [** int **]  

	- `Get`: (Server-Only) The portal's id.


**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `Portal` == `Portal` | Checks if two instances of `Portal` refer to the same `Portal`. |

## functions

### getContentsA

```lua
portal:getContentsA()
```
`Server-Only`  

Returns the contents of opening A.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.

**Returns:**
- (table): The table of characters and bodies in opening A.

---

### getContentsB

```lua
portal:getContentsB()
```
`Server-Only`  

Returns the contents of opening B.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.

**Returns:**
- (table): The table of characters and bodies in opening B.

---

### getId

```lua
portal:getId()
```
`Server-Only`  

Returns the portal's id.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.

**Returns:**
- (int): The portal's id.

---

### getPositionA

```lua
portal:getPositionA()
```
`Server-Only`  

Returns the position of portal opening A.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The position of opening A.

---

### getPositionB

```lua
portal:getPositionB()
```
`Server-Only`  

Returns the position of portal opening B.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The position of opening B.

---

### getRotationA

```lua
portal:getRotationA()
```
`Server-Only`  

Returns the rotation of portal opening A.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.

**Returns:**
- ([Quat](/Shared-Features/Userdata/Quat)): The rotation of opening A.

---

### getRotationB

```lua
portal:getRotationB()
```
`Server-Only`  

Returns the rotation of portal opening B.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.

**Returns:**
- ([Quat](/Shared-Features/Userdata/Quat)): The rotation of opening B.

---

### getWorldA

```lua
portal:getWorldA()
```
`Server-Only`  

Returns the world of portal opening A.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.

**Returns:**
- ([World](../Userdata/World)): The world of opening A.

---

### getWorldB

```lua
portal:getWorldB()
```
`Server-Only`  

Returns the world of portal opening B.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.

**Returns:**
- ([World](../Userdata/World)): The world of opening B.

---

### hasOpeningA

```lua
portal:hasOpeningA()
```
`Server-Only`  

Returns whether the portal has an opening A.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.

**Returns:**
- (boolean): Whether the portal has an opening A or not.

---

### hasOpeningB

```lua
portal:hasOpeningB()
```
`Server-Only`  

Returns whether the portal has an opening B.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.

**Returns:**
- (boolean): Whether the portal has an opening B or not.

---

### setOpeningA

```lua
portal:setOpeningA( position, rotation )
```
`Server-Only`  

Sets the portal's opening A.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The opening position.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat)): The the opening rotation.

---

### setOpeningB

```lua
portal:setOpeningB( position, rotation )
```
`Server-Only`  

Sets the portal's opening B.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The opening position.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat)): The the opening rotation.

---

### transferAToB

```lua
portal:transferAToB()
```
`Server-Only`  

Transfers objects inside opening A to opening B.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.

**Returns:**
- (boolean): Whether the transfer was successful or not.

---

### transferBToA

```lua
portal:transferBToA()
```
`Server-Only`  

Transfers objects inside opening B to opening A.

**Parameters:**
- `portal` ([Portal](../Userdata/Portal)): The portal.

**Returns:**
- (boolean): Whether the transfer was successful or not.

---




