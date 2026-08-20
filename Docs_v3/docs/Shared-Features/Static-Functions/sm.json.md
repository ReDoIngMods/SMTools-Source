---
sidebar_position: 3
title: sm.json
hide_title: true
sidebar-label: 'sm.json'
---

## sm.json

The JSON library is used to read/write Lua data to and from JSON files.  
It also supports converting between JSON data strings and Lua tables.

### Functions

#### fileExists

```lua
bool exists = sm.json.fileExists(path)
```

Returns whether any file *or* folder exists at the given path.

**Parameters:**
- `path` (string): The file path to check.

**Returns:**
- `exists` (boolean): Whether a file or folder exists at the given path or not.

---

#### open

```lua
local data = sm.json.open(path)
```

Opens a file and returns its content.  
The returned content can be:
- A Lua table, if the file content is JSON data
- A Lua string, if the file content is a raw string (`"something"`)
- A Lua number, if the file content is a raw number (`12345`)

**Parameters:**
- `path` (string): The file path to open.

**Returns:**
- `data` (table/string/number): The loaded file data.

---

#### parseJsonString

```lua
local data = sm.json.parseJsonString(json)
```

Parses a JSON string and returns it as a Lua table.  
The parsing behavior is the same as that of [open](#open).

**Parameters:**
- `json` (string): The JSON data to parse.

**Returns:**
- `data` (table/string/number): The parsed JSON data.

---

#### save

```lua
sm.json.save(data, path)
```

Writes Lua data to a file.  
The resulting file contents depend on the data that is written:
- A Lua table is saved as JSON data
- A Lua string is saved as a raw string (`"something"`)
- A Lua number is saved as a raw number (`12345`)

If the file does not exist, this will create a new file at the given file path.  
If the file does exist, this will overwrite the file's content.

:::caution warning
This function crashes the game if given a table with both numeric and non-numeric key values.
:::

:::caution warning
Empty tables are converted to NULL.
:::

:::caution warning
This function can produce invalid JSON output in certain cases.
:::

:::caution warning
Support for writing userdata values is very limited and should be avoided.
:::

**Parameters:**
- `data` (table/string/number): The Lua data.
- `path` (string): The path to the file.

---

#### writeJsonString

```lua
local json = sm.json.writeJsonString(data)
```

Converts a Lua table to a JSON string.

:::caution warning
This function crashes the game if given a table with both numeric and non-numeric key values.
:::

:::caution warning
Empty tables are converted to NULL.
:::

:::caution warning
This function can produce invalid JSON output in certain cases.
:::

:::caution warning
Support for writing userdata values is very limited and should be avoided.
:::

**Parameters:**
- `data` (table/string/number): The Lua data.

**Returns:**
- `json` (string): The JSON data string.

---