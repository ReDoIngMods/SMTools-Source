---
sidebar_position: 12
title: Harvestable
hide_title: true
sidebar-label: 'Harvestable'
---

## Harvestable

**Associated namespace:** [sm.harvestable](../Static-Functions/sm.harvestable)

Represents a harvestable object in the game.

**Values:**

- `clientPublicData` [** table **]  

	- `Get`: (Client-Only) The harvestable's client public data.
	- `Set`: (Client-Only) Sets the harvestable's client public data.


- `id` [** int **]  

	- `Get`: The harvestable's id.


- `initialPosition` [** vec3 **]  

	- `Get`: The harvestable's initial world position.


- `initialRotation` [** quat **]  

	- `Get`: The harvestable's initial world rotation.


- `mass` [** number **]  

	- `Get`: The harvestable's mass.


- `material` [** string **]  

	- `Get`: The harvestable's material name.


- `materialId` [** int **]  

	- `Get`: The harvestable's material id.


- `name` [** string **]  

	- `Get`: The harvestable's name.


- `publicData` [** table **]  

	- `Get`: (Server-Only) The harvestable's server public data.
	- `Set`: (Server-Only) Sets the harvestable's server public data.


- `type` [** string **]  

	- `Get`: The harvestable's type.


- `uuid` [** uuid **]  

	- `Get`: The harvestable's uuid.


- `worldPosition` [** vec3 **]  

	- `Get`: The harvestable's world position.


- `worldRotation` [** quat **]  

	- `Get`: The harvestable's world rotation.


**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `Harvestable` == `Harvestable` | Checks if two instances of `Harvestable` refer to the same `Harvestable`. |

## Functions

### destroy

```lua
harvestable:destroy()
```
`Server-Only`  

Destroys the harvestable.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

---

### getAabb

```lua
harvestable:getAabb()
```

Returns the bounds of the harvestable shape.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The max bounds.
- ([Vec3](/Shared-Features/Userdata/Vec3)): The min bounds.

---

### getClientPublicData

```lua
harvestable:getClientPublicData()
```
`Client-Only`  

Returns the harvestable's client public data.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- (table): The public data.

---

### getColor

```lua
harvestable:getColor()
```

Returns the harvestable's color.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- ([Color](/Shared-Features/Userdata/Color)): The color.

---

### getData

```lua
harvestable:getData()
```

Returns the harvestable's script data.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- (table): The script data.

---

### getId

```lua
harvestable:getId()
```

Returns the harvestable's id.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- (int): The id.

---

### getMass

```lua
harvestable:getMass()
```

Returns the harvestable's mass.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- (number): The mass.

---

### getMaterial

```lua
harvestable:getMaterial()
```

Returns the harvestable's material name.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- (string): The material name.

---

### getMaterialId

```lua
harvestable:getMaterialId()
```

Returns the harvestable's material id.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- (int): The material id.

---

### getName

```lua
harvestable:getName()
```

Returns the harvestable's name.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- (string): The name.

---

### getPoseWeight

```lua
harvestable:getPoseWeight( index )
```
`Client-Only`  

Returns the pose weight of the pose in the given index.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.
- `index` (int): The index.

**Returns:**
- (number): The pose weight.

---

### getPosition

```lua
harvestable:getPosition()
```

Returns the harvestable's world position.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The world position.

---

### getPublicData

```lua
harvestable:getPublicData()
```
`Server-Only`  

Returns the harvestable's server public data.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- (table): The public data.

---

### getRotation

```lua
harvestable:getRotation()
```

Returns the harvestable's rotation.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- ([Quat](/Shared-Features/Userdata/Quat)): The rotation.

---

### getScale

```lua
harvestable:getScale()
```

Returns the harvestable's scale.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The scale.

---

### getSeatCharacter

```lua
kinematic:getSeatCharacter()
```

Returns the [Character](../Userdata/Character) that is seated in the kinematic.

**Parameters:**
- `kinematic` ([Harvestable](../Userdata/Harvestable)): The kinematic.

**Returns:**
- ([Character](../Userdata/Character)): The character.

---

### getType

```lua
harvestable:getType()
```

Returns the harvestable's type.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- (string): The type.

---

### getUuid

```lua
harvestable:getUuid()
```

Returns the harvestable's uuid.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- ([Uuid](/Shared-Features/Userdata/Uuid)): The uuid.

---

### getUvFrameIndex

```lua
harvestable:getUvFrameIndex()
```
`Client-Only`  

Returns the harvestable's current UV animation frame.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- (int): The UV frame.

---

### getWorld

```lua
harvestable:getWorld()
```

Returns the harvestable's world.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- ([World](../Userdata/World)): The world.

---

### hasSeat

```lua
kinematic:hasSeat()
```

Returns whether the kinematic has a seat component.

**Parameters:**
- `kinematic` ([Harvestable](../Userdata/Harvestable)): The kinematic.

**Returns:**
- (boolean): Whether the kinematic has a seat component or not.

---

### isKinematic

```lua
harvestable:isKinematic()
```

Returns whether the harvestable is a kinematic.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.

**Returns:**
- (boolean): Whether the harvestable is a kinematic or not.

---

### setClientPublicData

```lua
harvestable:setClientPublicData( data )
```
`Client-Only`  

Sets the harvestable's client public data.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.
- `data` (table): The data to set.

---

### setColor

```lua
harvestable:setColor( color )
```
`Client-Only`  

Sets the harvestable's color.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.
- `color` ([Color](/Shared-Features/Userdata/Color)): The color.

---

### setParams

```lua
harvestable:setParams( data )
```
`Server-Only`  

Sets the harvestable's param data.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.
- `data` (any): The data.

---

### setPoseWeight

```lua
harvestable:setPoseWeight( index, value )
```
`Client-Only`  

Set the pose weight of the pose in the given index.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.
- `index` (int): The index.
- `value` (number): The pose weight.

---

### setPosition

```lua
kinematic:setPosition( position )
```

Set the harvestable's world position.  
Can only be used on kinematic harvestables.

**Parameters:**
- `kinematic` ([Harvestable](../Userdata/Harvestable)): The kinematic.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The world position.

---

### setPublicData

```lua
harvestable:setPublicData( data )
```
`Server-Only`  

Set the harvestable's server public data.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.
- `data` (table): The data to set.

---

### setRotation

```lua
kinematic:setRotation( rotation )
```

Set the harvestable's rotation.  
Can only be used on kinematic harvestables.

**Parameters:**
- `kinematic` ([Harvestable](../Userdata/Harvestable)): The kinematic.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat)): The rotation.

---

### setSeatCharacter

```lua
kinematic:setSeatCharacter( character )
```

Requests to seat a [Character](../Userdata/Character) in the kinematic.

**Parameters:**
- `kinematic` ([Harvestable](../Userdata/Harvestable)): The kinematic.
- `character` ([Character](../Userdata/Character)): The character.

---

### setUvFrameIndex

```lua
harvestable:setUvFrameIndex( index )
```
`Client-Only`  

Sets the UV animation frame with the given index.

**Parameters:**
- `harvestable` ([Harvestable](../Userdata/Harvestable)): The harvestable.
- `index` (int): The index.

---






