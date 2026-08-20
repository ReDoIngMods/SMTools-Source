---
sidebar_position: 10
title: sm.challenge
hide_title: true
sidebar-label: 'sm.challenge'
---

## sm.challenge

The challenge library contains functions used by Challenge Mode.

:::info note
Most functions in this library do not function outside of challenge mode.  
`sm.challenge.resolveContentPath` is not restricted but will crash the game if used outside of challenge mode.
:::

### Functions

#### getCompletionTime

```lua
local time = sm.challenge.getCompletionTime(level)
```
`Server-Only`  

Returns the challenge completion time.

**Parameters:**
- `level` ([Uuid](/Shared-Features/Userdata/Uuid)): The level UUID.

**Returns:**
- `time` (number): The completion time.

---

#### getSaveData

```lua
local data = sm.challenge.getSaveData(level)
```
`Server-Only`  

Returns the challenge level save data.

**Parameters:**
- `level` ([Uuid](/Shared-Features/Userdata/Uuid)): The level UUID.

**Returns:**
- `data` (table): The save data.

---

#### hasStarted

```lua
local hasStarted = sm.challenge.hasStarted()
```
`Server-Only`  

Returns whether the challenge has started.

**Returns:**
- `hasStarted` (boolean): Whether the challenge has started or not.

---

#### isMasterMechanicTrial

```lua
local isMMT = sm.challenge.isMasterMechanicTrial()
```
`Client-Only`  

Returns whether the challenge is part of the built-in "Master Mechanic Trials" pack.

**Returns:**
- `isMMT` (boolean): The content pack status.

---

#### levelCompleted

```lua
sm.challenge.levelCompleted(level, time, save)
```
`Server-Only`  

Completes a challenge level and saves progression.

**Parameters:**
- `level` ([Uuid](/Shared-Features/Userdata/Uuid)): The level UUID.
- `time` (number): The completion time.
- `save` (any): Save data.

---

#### resolveContentPath

```lua
local resolved = sm.challenge.resolveContentPath(path)
```
`Server-Only`  

Resolves a path containing `$CONTENT_DATA` to path that can be accessed in the main scripting environment.

**Parameters:**
- `path` (string): The unresolved path.

**Returns:**
- `resolved` (string): The resolved path.

---

#### start

```lua
sm.challenge.start()
```
`Server-Only`  

Starts the challenge.

---

#### stop

```lua
sm.challenge.stop()
```
`Server-Only`  

Stops the challenge.

---

#### takePicture

```lua
sm.challenge.takePicture(width, height, rotation)
```
`Server-Only`  

Takes a picture of the challenge level with a custom resolution.

**Parameters:**
- `width` (int, optional): The preview width. Defaults to `1920`.
- `height` (int, optional): The preview height. Defaults to `1080`.
- `rotation` (int, optional): The rotation step. Defaults to `0`.

---

#### takePicturesForMenu

```lua
sm.challenge.takePicturesForMenu(rotation)
```
`Server-Only`  

Takes pictures of the challenge level to use as icon and preview.

**Parameters:**
- `rotation` (int, optional): The rotation step. Defaults to `0`.

---
