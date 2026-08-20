---
sidebar_position: 3
title: Terrain Generation Callbacks
hide_title: true
sidebar-label: 'Terrain Generation Callbacks'
---

<br></br>

## Terrain Generation Callbacks

The terrain generator uses various callbacks to fetch or generate terrain data. <br></br>
When certain data is fetched, certain callbacks are called and their return value(s) set(s) the data. <br></br>
These callbacks are documented below. <br></br>

---

### Init

```lua
function Init( world, generatorIndex )
	--code here
	return nil
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>world</code> [<strong> ??? </strong>]: ----.
- <code>generatorIndex</code> [<strong> ??? </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>nil</code> [<strong> nil </strong>]: ----.

---

### Create

```lua
function Create( xMin, xMax, yMin, yMax, seed, data )
	--code here
	return nil
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>xMin</code> [<strong> ??? </strong>]: ----.
- <code>xMax</code> [<strong> ??? </strong>]: ----.
- <code>yMin</code> [<strong> ??? </strong>]: ----.
- <code>yMax</code> [<strong> ??? </strong>]: ----.
- <code>seed</code> [<strong> ??? </strong>]: ----.
- <code>data</code> [<strong> ??? </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>nil</code> [<strong> nil </strong>]: ----.

---

### Load

```lua
function Load()
	--code here
	return boolean
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>nil</code> [<strong> nil </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>boolean</code> [<strong> boolean </strong>]: ----.

---

### GetHeightAt

```lua
function GetHeightAt( number, number, number )
	--code here
	return number
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

---

### GetMaterialAt

```lua
function GetMaterialAt( number, number, number )
	--code here
	return number, number, number, number, number, number, number, number
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

---

### GetColorAt

```lua
function GetColorAt( number, number, number )
	--code here
	return number, number, number
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

---

### GetTagsForCell

```lua
function GetTagsForCell( number, number )
	--code here
	return table
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>table</code> [<strong> table </strong>]: ----.

---

### GetVoxelTerrainForCell

```lua
function GetVoxelTerrainForCell( number, number )
	--code here
	return ???
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>???</code> [<strong> ??? </strong>]: ???.

---

### GetTilePath

```lua
function GetTilePath( uuid )
	--code here
	return string
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> Uuid </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>string</code> [<strong> string </strong>]: ----.

---

### GetKinematicsForCell

```lua
function GetKinematicsForCell( number, number, number )
	--code here
	return table
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>table</code> [<strong> table </strong>]: ----.

---

### GetNodesForCell

```lua
function GetNodesForCell( number, number )
	--code here
	return table
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>table</code> [<strong> table </strong>]: ----.

---

### GetDecalsForCell

```lua
function GetDecalsForCell( number, number )
	--code here
	return table
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>table</code> [<strong> table </strong>]: ----.

---

### GetCreationsForCell

```lua
function GetCreationsForCell( number, number )
	--code here
	return table
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>table</code> [<strong> table </strong>]: ----.

---

### GetEffectMaterialAt

```lua
function GetEffectMaterialAt( number, number )
	--code here
	return string
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>string</code> [<strong> string </strong>]: ----.

---

### GetClutterIdxAt

```lua
function GetClutterIdxAt( number, number )
	--code here
	return number
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

---

### PrepareCell

```lua
function PrepareCell( number, number, number )
	--code here
	return nil
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>nil</code> [<strong> nil </strong>]: ----.

---

### GetAssetsForCell

```lua
function GetAssetsForCell( number, number, number )
	--code here
	return table
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>table</code> [<strong> table </strong>]: ----.

---

### GetHarvestablesForCell

```lua
function GetHarvestablesForCell( number, number, number )
	--code here
	return table
end
```

Not documented yet

<strong>Arguments:</strong> <br></br>

- <code>number</code> [<strong> number </strong>]: ----.

<strong>Returns:</strong> <br></br>

- <code>table</code> [<strong> table </strong>]: ----.

---










