---
sidebar_position: 11
title: sm.character
hide_title: true
sidebar-label: 'sm.character'
---

## sm.character

**Associated object type:** [Character](../Userdata/Character)

A [Character](../Userdata/Character) is the physical body of a living entity in the world.  
Both [Player](../Userdata/Player)s and AI [Unit](../Userdata/Unit)s may control a character.

### Functions

#### createCharacter

```lua
local character = sm.character.createCharacter(player, world, position, yaw, pitch)
```
`Server-Only`  

Creates a new character in a world.

**Parameters:**
- `player` ([Player](../Userdata/Player)): The player controlling the character.
- `world` ([World](../Userdata/World)): The world the character is created in.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The world position of the character.
- `yaw` (number): The initial yaw of the character (Optional).
- `pitch` (number): The initial pitch of the character (Optional).

**Returns:**
- `character` ([Character](../Userdata/Character)): The created character.

---

#### preloadRenderables

```lua
sm.character.preloadRenderables(renderables)
```
`Client-Only`  

Pre-loads renderable data to be used by the character.  
This eliminates excessive loading during run time.

**Parameters:**
- `renderables` (table): The array of renderable file paths.

---
