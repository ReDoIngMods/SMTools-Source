---
sidebar_position: 3
title: Uuid
hide_title: true
sidebar-label: 'Uuid'
---

## Uuid

**Associated namespace:** [sm.uuid](../Static-Functions/sm.uuid)

A userdata object representing a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).

### Operators

| Operator    | Description |
| ----------- | ----------- |
| [Uuid](Uuid) == [Uuid](Uuid) | Checks if two UUIDs are equal. |
| tostring([Uuid](Uuid)) | Converts the UUID to a UUID string. |

### Member Functions

#### isNil

```lua
local isNil = uuid:isNil()
```

Checks if the given UUID is a nil UUID (`00000000-0000-0000-0000-000000000000`).

**Parameters:**
- `uuid` ([Uuid](Uuid)): The UUID.

**Returns:**
- `isNil` (boolean): Whether the UUID is nil or not.

---
