---
sidebar_position: 11
title: sm.terrainGeneration
hide_title: true
sidebar-label: 'sm.terrainGeneration'
---

## sm.terrainGeneration

Allows reading and writing in game storage from terrain generation scripts.

## Functions

### getTempData

```lua
sm.terrainGeneration.getTempData( key )
```

Loads temporary data stored by terrain generation.

**Parameters:**
- `key` (any): Key used to lookup the saved data.

**Returns:**
- (any): The saved data.

---

### loadGameStorage

```lua
sm.terrainGeneration.loadGameStorage( key )
```

Loads data stored by terrain generation.

**Parameters:**
- `key` (any): Key used to lookup the saved data.

**Returns:**
- (any): The saved data.

---

### saveAndSyncGameStorage

```lua
sm.terrainGeneration.saveAndSyncGameStorage( key, data )
```

Saves data produced from terrain generation and synchronizes to clients.  
Saved data can be retrieved in later game sessions and by the game lua environment. 

**Parameters:**
- `key` (any): Key used to lookup and save the data.
- `key` (any): The data to save.

---

### setGameStorageNoSave

```lua
sm.terrainGeneration.setGameStorageNoSave( key, data )
```

Sets data produced from terrain generation and synchronizes to clients.  
This data is only valid during the game session.

**Parameters:**
- `key` (any): Key used to lookup and save the data.
- `key` (any): The data to save.

---

### setTempData

```lua
sm.terrainGeneration.setTempData( key, data )
```

Sets temporary data produced from terrain generation and synchronizes to clients.

**Parameters:**
- `key` (any): Key used to lookup and save the data.
- `key` (any): The data to save.

---







