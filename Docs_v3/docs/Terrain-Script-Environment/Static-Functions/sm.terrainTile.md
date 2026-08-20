---
sidebar_position: 12
title: sm.terrainTile
hide_title: true
sidebar-label: 'sm.terrainTile'
---

## sm.terrainTile

Reads .tile file data.

## Functions

### getAssetsForCell

```lua
sm.terrainTile.getAssetsForCell( tileId, tileOffsetX, tileOffsetY, sizeLevel )
```

Returns a table of all assets in a terrain cell.

**Parameters:**
- `tileId` ([Uuid](/Shared-Features/Userdata/Uuid)): The tile id.
- `tileOffsetX` (int): The tile offset X.
- `tileOffsetY` (int): The tile offset Y.
- `sizeLevel` (int): The asset size level.

**Returns:**
- (table): A table containing the asset data. See structure below.

```lua title="Table Structure"
{
	{
		uuid = uuid,
		pos = vec3,
		rot = quat,
		colors = {
			string = color,
			...
		},
		tags = {
			string,
			...
		}
	},
	...
}
```

---

### getClutterIdxAt

```lua
sm.terrainTile.getClutterIdxAt( tileId, tileOffsetX, tileOffsetY, x, y )
```

Returns the clutter index at position (X, Y) in a tile.

**Parameters:**
- `tileId` (int): The tile id.
- `tileOffsetX` (int): The tile offset X.
- `tileOffsetY` (int): The tile offset Y.
- `x` (int): The X position.
- `y` (int): The Y position.

**Returns:**
- (number): The clutter index.

---

### getColorAt

```lua
sm.terrainTile.getColorAt( tileId, tileOffsetX, tileOffsetY, lod, x, y )
```

Returns the terrain color at position (X, Y) in a tile.

**Parameters:**
- `tileId` (int): The tile id.
- `tileOffsetX` (int): The tile offset X.
- `tileOffsetY` (int): The tile offset Y.
- `lod` (int): The level of detail.
- `x` (int): The X position.
- `y` (int): The Y position.

**Returns:**
- (number): The color R value.
- (number): The color G value.
- (number): The color B value.

---

### getContentFromPrefab

```lua
sm.terrainTile.getContentFromPrefab( prefabPath, loadFlags )
```

Returns the content of a prefab.

**Parameters:**
- `prefabPath` (string): The path to the prefab file.
- `loadFlags` (int): A mask of content to load.

**Returns:**
- [** table1 **]: A table of creations in the prefab. See structure below.
- [** table2 **]: A table of prefabs in the prefab. See structure below.
- [** table3 **]: A table of nodes in the prefab. See structure below.
- [** table4 **]: A table of assets in the prefab. See structure below.
- [** table5 **]: A table of decals in the prefab. See structure below.
- [** table6 **]: A table of harvestables in the prefab. See structure below.
- [** table7 **]: A table of kinematics in the prefab. See structure below.

```lua title="Table Contents"
--table1
{
	{
		name = string,
		pos = vec3,
		rot = quat,
		sortingIndex = int,
		tags = {
			string,
			...
		}
	},
	...
}

--table2
{
	{
		name = string,
		pos = vec3,
		rot = quat,
		scale = vec3,
		tags = {
			string,
			...
		},
		flags = int
	},
	...
}

--table3
{
	{
		pos = vec3,
		rot = quat,
		scale = vec3,
		tags = {
			string,
			...
		},
		params = table
	},
	...
}

--table4
{
	{
		uuid = uuid,
		pos = vec3,
		rot = quat,
		slopeNormal = vec3,
		colors = {
			string = color,
			...
		},
		tags = {
			string,
			...
		}
	},
	...
}

--table5
{
	{
		pos = vec3,
		rot = quat,
		scale = vec3,
		decalId = int,
		color = color,
		layer = int,
		tags = {
			string,
			...
		}
	},
	...
}

--table6
{
	{
		uuid = uuid,
		pos = vec3,
		rot = quat,
		color = color,
		params = table,
		tags = {
			string,
			...
		}
	},
	...
}

--table7
{
	{
		uuid = uuid,
		pos = vec3,
		rot = quat,
		scale = vec3,
		color = color,
		params = table,
		tags = {
			string,
			...
		}
	},
	...
}
```

---

### getCreationsForCell

```lua
sm.terrainTile.getCreationsForCell( tileId, tileOffsetX, tileOffsetY )
```

Returns a table of all creations in a terrain cell.

**Parameters:**
- `tileId` ([Uuid](/Shared-Features/Userdata/Uuid)): The tile id.
- `tileOffsetX` (int): The tile offset X.
- `tileOffsetY` (int): The tile offset Y.

**Returns:**
- (table): A table of creation data. See structure below.

```lua title="Table Structure"
{
	{
		pathOrJson = string,
		pos = vec3,
		rot = quat
	},
	...
}
```

---

### getCreatorId

```lua
sm.terrainTile.getCreatorId( path )
```

Returns the id of the tile creator.

**Parameters:**
- `path` (string): The path to the tile file.

**Returns:**
- (string): The creator's id.

---

### getDecalsForCell

```lua
sm.terrainTile.getDecalsForCell( id, X-offset, Y-offset )
```

Returns all decals for a cell in a tile.

**Parameters:**
- `id` ([Uuid](/Shared-Features/Userdata/Uuid)): The tile id.
- `X-offset` (int): The offset along the X axis.
- `Y-offset` (int): The offset along the Y axis.

**Returns:**
- (table): A table of decal data. See structure below.

```lua title="Table Structure"
{
	{
		pos = vec3,
		rot = quat,
		scale = vec3,
		decalId = int,
		color = color,
		layer = int,
		tags = {
			string,
			...
		}
	},
	...
}
```

---

### getHarvestablesForCell

```lua
sm.terrainTile.getHarvestablesForCell( id, X-offset, Y-offset, sizeLevel )
```

Returns all harvestables for a cell in a tile.

**Parameters:**
- `id` ([Uuid](/Shared-Features/Userdata/Uuid)): The tile id.
- `X-offset` (int): The offset along the X axis.
- `Y-offset` (int): The offset along the Y axis.
- `sizeLevel` (int): The size level of harvestables.

**Returns:**
- (table): A table of harvestable data. See structure below.

```lua title="Table Structure"
{
	{
		uuid = uuid,
		pos = vec3,
		rot = quat,
		color = color,
		params = table,
		tags = {
			string,
			...
		}
	},
	...
}
```

---

### getHeightAt

```lua
sm.terrainTile.getHeightAt( tileId, tileOffsetX, tileOffsetY, lod, x, y )
```

Returns the terrain height at position (X, Y) in a tile.

**Parameters:**
- `tileId` (int): The tile id.
- `tileOffsetX` (int): The tile offset X.
- `tileOffsetY` (int): The tile offset Y.
- `lod` (int): The level of detail.
- `x` (int): The X position.
- `y` (int): The Y position.

**Returns:**
- (number): The height.

---

### getKinematicsForCell

```lua
sm.terrainTile.getKinematicsForCell( id, X-offset, Y-offset, sizeLevel )
```

Returns all kinematics for a cell in a tile.

**Parameters:**
- `id` ([Uuid](/Shared-Features/Userdata/Uuid)): The tile id.
- `X-offset` (int): The offset along the X axis.
- `Y-offset` (int): The offset along the Y axis.
- `sizeLevel` (int): The size level of kinematics.

**Returns:**
- (table): A table of kinematics data. See structure below.

```lua title="Table Structure"
{
	{
		uuid = uuid,
		pos = vec3,
		rot = quat,
		scale = vec3,
		color = color,
		params = table,
		tags = {
			string,
			...
		}
	},
	...
}
```

---

### getMaterialAt

```lua
sm.terrainTile.getMaterialAt( tileId, tileOffsetX, tileOffsetY, lod, x, y )
```

Returns the terrain material at position (X, Y) in a tile.

**Parameters:**
- `tileId` (int): The tile id.
- `tileOffsetX` (int): The tile offset X.
- `tileOffsetY` (int): The tile offset Y.
- `lod` (int): The level of detail.
- `x` (int): The X position.
- `y` (int): The Y position.

**Returns:**
- (number): The first R value.
- (number): The first G value.
- (number): The first B value.
- (number): The first A value.
- (number): The second R value.
- (number): The second G value.
- (number): The second B value.
- (number): The second A value.

---

### getNodesForCell

```lua
sm.terrainTile.getNodesForCell( id, X-offset, Y-offset )
```

Returns all nodes for a cell in a tile.

**Parameters:**
- `id` ([Uuid](/Shared-Features/Userdata/Uuid)): The tile id.
- `X-offset` (int): The offset along the X axis.
- `Y-offset` (int): The offset along the Y axis.

**Returns:**
- (table): A table of node data. See structure below.

```lua title="Table Structure"
{
	{
		pos = vec3,
		rot = quat,
		scale = vec3,
		params = table,
		tags = {
			string,
			...
		}
	},
	...
}
```

---

### getPrefabsForCell

```lua
sm.terrainTile.getPrefabsForCell( id, X-offset, Y-offset )
```

Returns all prefabs for a cell in a tile.

**Parameters:**
- `id` ([Uuid](/Shared-Features/Userdata/Uuid)): The tile id.
- `X-offset` (int): The offset along the X axis.
- `Y-offset` (int): The offset along the Y axis.

**Returns:**
- (table): A table of prefab data. See structure below.

```lua title="Table Structure"
{
	{
		name = string,
		pos = vec3,
		rot = quat,
		scale = vec3,
		tags = {
			string,
			...
		},
		flags = int
	},
	...
}
```

---

### getSize

```lua
sm.terrainTile.getSize( path )
```

Returns the size of a tile as the number of cells along one of the axises.

**Parameters:**
- `path` (string): The path to the tile file.

**Returns:**
- (int): The size.

---

### getTileUuid

```lua
sm.terrainTile.getTileUuid( path )
```

Returns the uuid for a tile file.

**Parameters:**
- `path` (string): The path to the tile file.

**Returns:**
- ([Uuid](/Shared-Features/Userdata/Uuid)): The tile's uuid.

---