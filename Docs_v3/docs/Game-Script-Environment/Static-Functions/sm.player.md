---
sidebar_position: 38
title: sm.player
hide_title: true
sidebar-label: 'sm.player'
---

## sm.player

**Associated object type:** [Player](../Userdata/Player)

A [Player](../Userdata/Player) represents a user playing the game.  
Every player controls a [Character](../Userdata/Character) in the world.

### Functions

#### getAllPlayers

```lua
local players = sm.player.getAllPlayers()
```

Returns an array of all [Player](../Userdata/Player)s that are currently in the game.  
The order of the entries is defined by the order in which these players joined the game.

:::info note
When loading a world, there is a small period of time (a few ticks) during which this function  
will return an empty table (no players in the world yet)!

Because of this, it is ** not recommended ** to rely on this function returning a player  
when using it in a script's `server_onCreate` or `client_onCreate` callback.
:::

**Returns:**
- `players` (table): The table of players.

---
