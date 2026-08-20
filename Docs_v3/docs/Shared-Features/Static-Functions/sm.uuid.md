---
sidebar_position: 8
title: sm.uuid
hide_title: true
sidebar-label: 'sm.uuid'
---

## sm.uuid

**Associated object type:** [Uuid](/Shared-Features/Userdata/Uuid)

A [Universally Unique Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier) (**UUID**) is a 128-bit number that can guarantee uniqueness across space and time.

To generate one, use [sm.uuid.new](#new).

### Functions

#### generateNamed

```lua
local uuid = sm.uuid.generateNamed(namespace, name)
```

Generates a named (version 5) UUID.  
The namespace UUID makes sure any equal names from different namespaces do not collide.  
Provided the same namespace and name in repeated calls, the generated UUID will be the same.

**Parameters:**
- `namespace` ([Uuid](/Shared-Features/Userdata/Uuid)): A namespace UUID.
- `name` (string): A name, to generate a UUID from.

**Returns:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The created UUID.

---

#### generateRandom

```lua
local uuid = sm.uuid.generateRandom()
```

Generates a random (version 4) UUID.

**Returns:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The created UUID.

---

#### getNil

```lua
local uuid = sm.uuid.getNil()
```

Creates a nil UUID `00000000-0000-0000-0000-000000000000`.

**Returns:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The created UUID.

---

#### new

```lua
local uuid = sm.uuid.new(uuidString)
```

Creates a UUID from a string or generates a random UUID (version 4).

**Parameters:**
- `uuidStr` (string, optional): The UUID string. Defaults to random.

**Returns:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The created UUID.

---

#### isNil

```lua
local isNil = sm.uuid.isNil(uuid)
```

Checks if the given UUID is a nil UUID (`00000000-0000-0000-0000-000000000000`).  
This does the same as calling [Uuid:isNil()](/Shared-Features/Userdata/Uuid#isnil), but can have better performance in certain cases.

**Parameters:**
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The UUID.

**Returns:**
- `isNil` (boolean): Whether the UUID is nil or not.

---
