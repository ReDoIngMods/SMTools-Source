---
sidebar_position: 8
title: Container
hide_title: true
sidebar-label: 'Container'
---

## Container

**Associated namespace:** [sm.container](../Static-Functions/sm.container)

A userdata object representing a **container** in the game.

**Values:**

- `allowCollect` [** bool **]  

	- `Get`: (Server-Only) Whether the container can collect items.
	- `Set`: (Server-Only) Sets whether the container can collect items or not.


- `allowSpend` [** bool **]  

	- `Get`: (Server-Only) Whether the container can spend items.
	- `Set`: (Server-Only) Sets whether the container can spend items or not.


- `id` [** int **]  

	- `Get`: The id of the container.


- `size` [** int **]  

	- `Get`: The number of slots in the container.


**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `Container` == `Container` | Checks if two instances of `Container` refer to the same `Container`. |

## Functions

### canCollect

```lua
container:canCollect( itemUuid, quantity )
```

Checks if [sm.container.collect](../Static-Functions/sm.container#collect) is allowed using the same parameters.

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.
- `itemUuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The uuid of the item.
- `quantity` (int): The number of items.

**Returns:**
- (boolean): Whether the container can collect the item(s) or not.

---

### canSpend

```lua
container:canSpend( itemUuid, quantity )
```

Checks if [sm.container.spend](../Static-Functions/sm.container#spend) is allowed using the same parameters.

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.
- `itemUuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The uuid of the item.
- `quantity` (int): The number of items.

**Returns:**
- (boolean): Whether the container can spend the item(s) or not.

---

### getAllowCollect

```lua
container:getAllowCollect()
```
`Server-Only`  

Returns whether the container can collect items.

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.

**Returns:**
- (boolean): Whether the container can collect items or not.

---

### getAllowSpend

```lua
container:getAllowSpend()
```
`Server-Only`  

Returns whether the container can spend items.

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.

**Returns:**
- (boolean): Whether the container can spend items or not.

---

### getItem

```lua
container:getItem( slot )
```

Returns a table containing item uuid, quantity (and instance id for tools) at the given slot.

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.
- `slot` (int): The slot.

**Returns:**
- (table): The table containing item information (see table content below).

**Table Content:**  

- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.
- `instance` (int): The instance ID, if the item is a tool.
- `quantity` (int): The item amount.

---

### getMaxStackSize

```lua
container:getMaxStackSize()
```

Returns the max stack size in the container.

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.

**Returns:**
- (int): The container's max stack size.

---

### getSize

```lua
container:getSize()
```

Returns the number of slots in a container.

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.

**Returns:**
- (int): The size.

---

### hasChanged

```lua
container:hasChanged( tick )
```

Returns true if the given tick is lower than the tick the container was last changed.

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.
- `tick` (int): The tick.

**Returns:**
- (boolean): Whether the container has changed or not.

---

### isEmpty

```lua
container:isEmpty()
```

Returns true if the container is empty.

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.

**Returns:**
- (boolean): Whether the container is empty or not.

---

### setAllowCollect

```lua
container:setAllowCollect( state )
```
`Server-Only`  

Sets whether the container can collect items.

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.
- `state` (boolean): Whether the container can collect items or not.

---

### setAllowSpend

```lua
container:setAllowSpend( state )
```
`Server-Only`  

Sets whether the container can spend items.

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.
- `state` (boolean): Whether the container can spend items or not.

---

### setFilters

```lua
container:setFilters( filter )
```
`Server-Only`  

Sets item filters.

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.
- `filter` (table): The table of allowed item uuids.

---

### setItem

```lua
container:setItem( slot, itemUuid, quantity, instance )
```
`Server-Only`  

Sets the number of items stacked in a given container slot.

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.
- `slot` (table): The slot.
- `itemUuid` (table): The uuid of the item.
- `quantity` (table): The number of items.
- `instance` (table): The instance id, if the item is a tool. (Optional)

**Returns:**
- (boolean): Whether the action was successful or not.

---



