---
sidebar_position: 5
title: BuilderGuide
hide_title: true
sidebar-label: 'BuilderGuide'
---

## BuilderGuide

**Associated namespace:** [sm.builderGuide](../Static-Functions/sm.builderGuide)

A userdata object representing a **builder guide**.

**Values:**

- `id` [** int **]  

	- `Get`: The id of the guide.


**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `BuilderGuide` == `BuilderGuide` | Checks if two instances of `BuilderGuide` refer to the same `BuilderGuide`. |

## Functions

### destroy

```lua
builderGuide:destroy()
```

Destroys the guide.

**Parameters:**
- `builderGuide` ([BuilderGuide](../Userdata/BuilderGuide)): The guide.

---

### getCurrentStageIndex

```lua
builderGuide:getCurrentStageIndex()
```

Returns the stage index of the guide.

**Parameters:**
- `builderGuide` ([BuilderGuide](../Userdata/BuilderGuide)): The guide.

**Returns:**
- (int): The stage index.

---

### getId

```lua
builderGuide:getId()
```

Returns the id of the guide.

**Parameters:**
- `builderGuide` ([BuilderGuide](../Userdata/BuilderGuide)): The guide.

**Returns:**
- (int): The guide's id.

---

### isComplete

```lua
builderGuide:isComplete()
```

Returns the completion status of the guide.

**Parameters:**
- `builderGuide` ([BuilderGuide](../Userdata/BuilderGuide)): The guide.

**Returns:**
- (boolean): The guide's completion status.

---

### update

```lua
builderGuide:update()
```

Updates the state of the guide.  
Should be called whenever the root [Shape](../Userdata/Shape) of the builder guide has changed.

**Parameters:**
- `builderGuide` ([BuilderGuide](../Userdata/BuilderGuide)): The guide.

---



