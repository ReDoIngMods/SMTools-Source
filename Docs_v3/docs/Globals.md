---
sidebar_position: 2
title: Globals
hide_title: true
sidebar-label: 'Globals'
---

## Global Lua Namespace

The following functions and libraries exist in the global namespace and are available in all environments.

### Functions

#### class

```lua
ClassTable = class(base)
```

Creates a new [script class](/#script-classes) table.

**Parameters:**
- `base` (table, optional): The base class table to inherit from.

**Returns:**
- `ClassTable` (table): The created script class table.

```lua title="Internal source code of the class function"
function class(super)

	local klass = {}

	-- Copy members from super.
	if super then
		for k,v in pairs(super) do
			klass[k] = v
		end
	end

	local meta = {}

	-- Emulate constructor syntax.
	-- Triggers when a value is called like a function.
	meta.__call = function(self, ...)
		local instance = setmetatable({}, self)

		return instance
	end

	-- Emulate classes using prototyping.
	setmetatable(klass, meta)
	klass.__index = klass

	return klass
end
```

---

#### dofile

```lua
dofile(filepath)
```

Loads the given Lua script file and executes it in the current [environment](/#lua-instances--environments).  
In case of errors, the errors are propagated to the calling function.

:::info note
For security reasons, only Lua source code can be loaded.  
Loading precompiled binary bytecode is prohibited.

The given file path must use the [content path key](/../modding_help/Filepaths) system.  
Relative paths such as `file.lua` or `../file.lua` are supported, as long as the final path remains inside the current content directory.
:::

**Parameters:**
- `filepath` (string): The file path or name of the file to load.

---

#### print

```lua
print(...)
```

Prints the given data to the [developer console](/#developer-console). This is useful for debugging.

:::info note
If the game is running with the `-dev` launch option, any output will also be added to the game's log file.
:::

**Parameters:**
- `...` (any): Any number of values to print to the console.

---

#### type

```lua
local typeName = type(value)
```

Returns the type name of a value as a string.  
This includes standard Lua types and userdata types specific to this API.  
Note that standard Lua type names are all-lowercase, while API-specific userdata types use PascalCase.

**Parameters:**
- `value` (any): The value to get the type name of.

**Returns:**
- `typeName` (string): The type name of the value.

---

### Standard Libraries

Listed below are all available default Lua libraries.

For documentation of these libraries, see the [Lua 5.1 Reference Manual](https://www.lua.org/manual/5.1/manual.html) and [LuaJIT Extensions](http://luajit.org/extensions.html).

#### string
```lua
string.byte
string.char
string.find
string.format
string.gmatch
string.gsub
string.len
string.lower
string.match
string.rep
string.reverse
string.sub
string.upper
```

---

#### table
```lua
table.insert
table.maxn
table.remove
table.sort
table.concat
```

---

#### math
```lua
math.abs
math.acos
math.asin
math.atan
math.atan2
math.ceil
math.cos
math.cosh
math.deg
math.exp
math.floor
math.fmod
math.frexp
math.huge
math.ldexp
math.log
math.log10
math.max
math.min
math.modf
math.pi
math.pow
math.rad
math.random
math.sin
math.sinh
math.sqrt
math.tan
math.tanh

-- Note: Only available in the terrain script environment!
math.randomseed
```

---

#### bit
```lua
bit.tobit
bit.tohex
bit.bnot
bit.band
bit.bor
bit.bxor
bit.lshift
bit.rshift
bit.arshift
bit.rol
bit.ror
bit.bswap
```

---

#### os
```lua
os.clock
os.difftime
os.time
```

---

#### other
```lua
assert
error
ipairs
next
pairs
pcall
select
tonumber
tostring
unpack
_VERSION
xpcall
gcinfo
```

---
