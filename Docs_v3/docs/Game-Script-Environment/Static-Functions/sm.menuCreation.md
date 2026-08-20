---
sidebar_position: 32
title: sm.menuCreation
hide_title: true
sidebar-label: 'sm.menuCreation'
---

## sm.menuCreation

The menuCreation library provides functions to load and save the creation(s) built in the game's main menu.

:::info note
These functions are only available in the main menu editing gamemode.
:::

### Functions

#### load

```lua
local data = sm.menuCreation.load()
```
`Server-Only`  

Loads the menu creation data that was previously saved using [save](#save).

**Returns:**
- `data` (bool/number/string/table/nil): The menu creation data.

---

#### save

```lua
sm.menuCreation.save(data)
```
`Server-Only`  

Saves menu creation data.

**Parameters:**
- `data` (bool/number/string/table/nil): The data to save.

---
