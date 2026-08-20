---
sidebar_position: 14
title: sm.container
hide_title: true
sidebar-label: 'sm.container'
---

## sm.container

**Associated object type:** [Container](../Userdata/Container).

A [Container](../Userdata/Container) keeps track of items and stores them in slots.  
Each slot holds one item type and a quantity, if the item is stackable.

### Functions

#### abortTransaction

```lua
sm.container.abortTransaction()
```
`Server-Only`  

Aborts a transaction.

---

#### beginTransaction

```lua
local success = sm.container.beginTransaction()
```
`Server-Only`  

Starts a new transaction shared across all [Container](../Userdata/Container)s.  
A transaction is a collection of all changes of container items that will be processed.

A transaction must be ended with [sm.container.endTransaction](#endTransaction).

This returns `false` if another transaction was already started.

**Returns:**
- `success` (boolean): Whether a new transaction was started or not.

---

#### collect

```lua
local amount = sm.container.collect(container, itemUuid, quantity, mustCollectAll)
```
`Server-Only`  

Adds a quantity of a given item to a [Container](../Userdata/Container).

:::info note
A transaction must be [started](#begintransaction) before using this.
:::

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.
- `itemUuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.
- `quantity` (int): The item amount.
- `mustCollectAll` (boolean, optional): Whether all items must be collected to make the transaction valid. Defaults to true.

**Returns:**
- `amount` (int): The amount of collected items.

---

#### collectToSlot

```lua
local amount = sm.container.collectToSlot(container, slot, itemUuid, quantity, mustCollectAll)
```
`Server-Only`  

Performs an [sm.container.collect](#collect) operation on a specific slot.

:::info note
A transaction must be [started](#begintransaction) before using this.
:::

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.
- `slot` (int): The slot.
- `itemUuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.
- `quantity` (int): The item amount.
- `mustCollectAll` (boolean, optional): Whether all items must be collected to make the transaction valid. Defaults to true.

**Returns:**
- `amount` (int): The amount of collected items.

---

#### endTransaction

```lua
sm.container.endTransaction()
```
`Server-Only`  

Ends a transaction.

**Returns:**
- (boolean): Whether the transaction was ended successfully or not.

---

#### getFirstItem

```lua
local item = sm.container.getFirstItem(container)
```

Returns a table containing item UUID, quantity (and instance id for tools) at the first available slot.

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.

**Returns:**
- `item` (table): The table of item data.

---

#### itemUuid

```lua
local items = sm.container.itemUuid(container)
```

Returns an array containing all item UUIDs in a [Container](../Userdata/Container).

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.

**Returns:**
- `items` (table): The array containing the item UUIDs.

---

#### moveAll

```lua
sm.container.moveAll(container, container, moveAll)
```
`Server-Only`  

Moves the content from one [Container](../Userdata/Container) to another.

:::info note
A transaction must be [started](#begintransaction) before using this.
:::

**Parameters:**
- `container` ([Container](../Userdata/Container)): The source container.
- `container` ([Container](../Userdata/Container)): The target container.
- `moveAll` (boolean): Whether all items are required to be movable.

---

#### moveAllToCarryContainer

```lua
sm.container.moveAllToCarryContainer(container, player, color)
```
`Server-Only`  

Moves the content of input [Container](../Userdata/Container) to the [Player](../Userdata/Player)'s carry container and assigns the carry item color.

:::info note
A transaction must be [started](#begintransaction) before using this.
:::

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container to assign.
- `player` ([Player](../Userdata/Player)): The player to receive the carry content and color.
- `color` ([Color](/Shared-Features/Userdata/Color)): The color to assign.

---

#### quantity

```lua
local quantities = sm.container.quantity(container)
```

Returns a table containing all item quantities in a container.

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.

**Returns:**
- `quantities` (table): The table of item quantities.

---

#### spend

```lua
local spent = sm.container.spend(container, itemUuid, quantity, mustSpendAll)
```
`Server-Only`  

Removes a quantity of a given item from a [Container](../Userdata/Container).

:::info note
A transaction must be [started](#begintransaction) before using this.
:::

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.
- `itemUuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.
- `quantity` (int): The item amount.
- `mustSpendAll` (boolean): True = Only remove items if there are enough. False = Remove as many as possible. Defaults to true.

**Returns:**
- `spent` (int): The amount of successfully removed items.

---

#### spendFromSlot

```lua
local spend = sm.container.spendFromSlot(container, slot, itemUuid, quantity, mustSpendAll)
```
`Server-Only`  

Performs an [sm.container.spend](#spend) operation on a specific slot.

:::info note
A transaction must be [started](#begintransaction) before using this.
:::

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.
- `slot` (int): The slot.
- `itemUuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.
- `quantity` (int): The item amount.
- `mustSpendAll` (boolean): True = Only remove items if there are enough. False = Remove as many as possible. Defaults to true.

**Returns:**
- `spent` (int): The amount of successfully removed items.

---

#### swap

```lua
local success = sm.container.swap(container, container, sourceSlot, targetSlot)
```
`Server-Only`  

Swaps two item slots.

:::info note
A transaction must be [started](#begintransaction) before using this.
:::

**Parameters:**
- `container` ([Container](../Userdata/Container)): The first container.
- `container` ([Container](../Userdata/Container)): The second container.
- `sourceSlot` (int): The first slot.
- `targetSlot` (int): The second slot.

**Returns:**
- (boolean): Whether the action was successful or not.

---

#### totalQuantity

```lua
local quantity = sm.container.totalQuantity(container, uuid)
```

Returns the total number of a given item UUID in a [Container](../Userdata/Container).

**Parameters:**
- `container` ([Container](../Userdata/Container)): The container.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item UUID.

**Returns:**
- `quantity` (int): The total quantity of the given item UUID.

---
