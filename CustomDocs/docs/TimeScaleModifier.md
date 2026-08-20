---
title: TimeScaleModifier
hide_title: true
---

<br></br>

Documentation for the [TimeScaleModifier](https://github.com/crackx02/SM-TimeScaleModifier) DLL mod's Lua and C APIs.

## Lua API

### sm.timeScale

The global `sm.timeScale` table contains the Lua API functions of the mod, which are documented below.

### getMin

```lua
local min = sm.timeScale.getMin()
```

Returns the minimum value of the time scale multiplier slider in the in-game settings GUI.  
As of the time of writing, this is always `0.0`.

<strong>Returns:</strong> <br></br>

- `min` (number): The minimum range value.

### getMax

```lua
local max = sm.timeScale.getMax()
```

Returns the maximum value of the time scale multiplier slider in the in-game settings GUI.  
As of the time of writing, this is always `20.0`.

<strong>Returns:</strong> <br></br>

- `max` (number): The maximum range value.

### get

```lua
local multi = sm.timeScale.get()
```

Returns the current time scale multiplier value.  
Note: While the `getMin` and `getMax` functions may suggest a limit, no actual limit is enforced in the API - the returned value may be outside of the min/max range!

<strong>Returns:</strong> <br></br>

- `multi` (number): The current time scale multiplier.

### set

```lua
sm.timeScale.set(multi)
```

Sets the current time scale multiplier value.  
Note: While the `getMin` and `getMax` functions may suggest a limit, no actual limit is enforced in the API.  
However, setting a value outside of the min/max range will log a warning message in the developer console.

<strong>Parameters:</strong> <br></br>

- `multi` (number): The time scale multiplier.



## C API

The mod also provides a C API to be used by other DLLs.

This API can be accessed by getting its function pointers using functions such as `GetProcAddress`.

The C API functions are documented below.

### TS_GetMin

```cpp
float TS_GetMin();
```

Returns the minimum value of the time scale multiplier slider in the in-game settings GUI.  
As of the time of writing, this is always `0.0f`.

<strong>Returns:</strong> <br></br>

- `float`: The minimum range value.

### TS_GetMax

```cpp
float TS_GetMax();
```

Returns the maximum value of the time scale multiplier slider in the in-game settings GUI.  
As of the time of writing, this is always `20.0f`.

<strong>Returns:</strong> <br></br>

- `float`: The maximum range value.

### TS_Get

```cpp
float TS_Get();
```

Returns the current time scale multiplier value.  
Note: While the `getMin` and `getMax` functions may suggest a limit, no actual limit is enforced in the API - the returned value may be outside of the min/max range!

<strong>Returns:</strong> <br></br>

- `float`: The current time scale multiplier.

### TS_Set

```cpp
void TS_Set(float multi);
```

Sets the current time scale multiplier value.  
Note: While the `getMin` and `getMax` functions may suggest a limit, no actual limit is enforced in the API.  
However, setting a value outside of the min/max range will log a warning message in the developer console.

<strong>Parameters:</strong> <br></br>

- `multi` (float): The time scale multiplier.
