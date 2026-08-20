---
sidebar_position: 1
title: sm
hide_title: true
sidebar-label: 'sm'
---

## sm

The `sm` namespace contains all API features related to Scrap Mechanic.

### Constants

#### isHost

```lua
sm.isHost = <boolean>
```

A boolean value indicating whether the current game instance is hosting the world or not.  
If false, the game instance is a client in a multiplayer session.

---

#### version

```lua
sm.version = "0.7.4.778"
```

A string value containing the current version of the game.

---

### Functions

#### exists

```lua
local exists = sm.exists(value)
```

Checks whether the given value "exists" in the game.

If the given value is a basic Lua type, this simply returns `true` if the value is non-nil.

If the value is a [reference userdata](/#userdata) however, this function checks if the actual, underlying engine object
(e.g. a referenced [Shape](/Game-Script-Environment/Userdata/Shape)) still exists in the game.  
This is useful to avoid calling API functions on already-destroyed objects (which would throw a script error).

**Parameters:**
- `value` (any): The value to check.

**Returns:**
- `exists` (boolean): Whether the given value "exists" or not.

---

#### isServerMode

```lua
local isServerContext = sm.isServerMode()
```

Returns whether the calling function is currently being executed in [server](/#server) context.  
If this is false, the function is executing in [client](/#client) context.  
Server context only occurs when [sm.isHost](#isHost) is `true`.

**Returns:**
- `isServerContext` (boolean): Whether the script is executing in server context or not.

---
