---
sidebar_position: 7
title: sm.builderGuide
hide_title: true
sidebar-label: 'sm.builderGuide'
---

## sm.builderGuide

**Associated object type:** [BuilderGuide](../Userdata/BuilderGuide)

A [BuilderGuide](../Userdata/BuilderGuide) is used as a tutorial to guide the player with constructing a given creation blueprint.

### Functions

#### createBuilderGuide

```lua
local guide = sm.builderGuide.createBuilderGuide(path, shape, ignoreBlockUuid)
```

Creates a [BuilderGuide](../Userdata/BuilderGuide), comparing the creation from the root [Shape](../Userdata/Shape) to the blueprint given by the path.

**Parameters:**
- `path` (string): The file path to the builder guide blueprint.
- `shape` ([Shape](../Userdata/Shape)): The root shape to compare the creation from.
- `ignoreBlockUuid` (boolean, optional): Whether block UUIDs should be ignored for stage completion. Defaults to false.

**Returns:**
- `guide` ([BuilderGuide](../Userdata/BuilderGuide)): The created guide.

---

#### destroy

```lua
sm.builderGuide.destroy(guide)
```

Destroys a [BuilderGuide](../Userdata/BuilderGuide).

**Parameters:**
- `guide` ([BuilderGuide](../Userdata/BuilderGuide)): The builder guide to destroy.

---
