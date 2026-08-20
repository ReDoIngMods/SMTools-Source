---
sidebar_position: 11
title: GuiInterface
hide_title: true
sidebar-label: 'GuiInterface'
---

## GuiInterface

A userdata object representing a **GUI interface**.

A **GUI interface** is an adapter between a script and a GUI.

Can only be used on the [client](/lua/#client)

**Values:**

- `id` [** number **]  

	- `Get`: The id of the effect.


**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `GuiInterface` == `GuiInterface` | Checks if two instances of `GuiInterface` refer to the same `GuiInterface`. |

## Functions

### addGridItem

```lua
guiInterface:addGridItem( gridName, item )
```
`Client-Only`  

Adds an item to a grid.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `gridName` (string): The name of the grid.
- `item` (table): The item.

---

### addGridItemsFromFile

```lua
guiInterface:addGridItemsFromFile( gridName, jsonPath, additionalData )
```
`Client-Only`  

Adds an item to a grid from a JSON file.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `gridName` (string): The name of the grid.
- `jsonPath` (string): The path to the JSON file.
- `additionalData` (table): Additional data (optional).

---

### addListItem

```lua
guiInterface:addListItem( listName, itemName, data )
```
`Client-Only`  

Appends an item to a list.

:::info note
Lists are currently not implemented for custom GUI layouts and do not work.
:::

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `listName` (string): The name of the list.
- `itemName` (string): The name of the item.
- `data` (table): Table of data to store.

---

### addToPickupDisplay

```lua
guiInterface:addToPickupDisplay( uuid, amount )
```
`Client-Only`  

Adds a block, part or tool to the item pickup display in the bottom right corner.

:::info note
This function only works on a **[Survival HUD](/Game-Script-Environment/Static-Functions/sm.gui#createsurvivalhudgui)** GUI!
:::

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The SurvivalHud guiInterface.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The uuid of the item that was picked up. Must be a block, part or tool.
- `amount` (number): The amount of the item that was picked up.

---

### clearGrid

```lua
guiInterface:clearGrid( gridName )
```
`Client-Only`  

Clears a grid.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `gridName` (string): The name of the grid.

---

### clearList

```lua
guiInterface:clearList( listName )
```
`Client-Only`  

Clears a list.

:::info note
Lists are currently not implemented for custom GUI layouts and do not work.
:::

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `listName` (string): The name of the list.

---

### close

```lua
guiInterface:close()
```
`Client-Only`  

Closes the GUI.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.

---

### createDropDown

```lua
guiInterface:createDropDown( widgetName, functionName, options )
```
`Client-Only`  

Creates a dropdown menu at the specified widget.

:::info note
The given callback function is also called when [setSelectedDropDownItem](#setselecteddropdownitem) is used!
:::

**The callback receives:**
- `self` (table): The class instance.
- `option` (string): The option that was selected in the dropdown.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `widgetName` (string): The name of the widget.
- `functionName` (string): The name of the callback function.
- `options` (table): The options in the dropdown menu.

---

### createGridFromJson

```lua
guiInterface:createGridFromJson( gridName, data )
```
`Client-Only`  

Creates a grid from a table.

**Valid grid types are:**  

- `processGrid`
- `materialGrid`
- `itemGrid`

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `gridName` (string): The name of the grid.
- `data` (table): The grid data (see table below).

```lua title="Grid Data Table Structure"
{
	type = string,
	layout = string,
	itemTop = ???,
	itemLeft = ???,
	itemWidth = int,
	itemHeight = int,
	itemCount = int
}
```

---

### createHorizontalSlider

```lua
guiInterface:createHorizontalSlider( widget, range, value, callback, enableNumbers )
```
`Client-Only`  

Creates a horizontal slider with the specified widget.

**The callback receives:**
- `self` (table): The class instance.
- `newPos` (number): The new position of the slider.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `widget` (string): The name of the widget.
- `range` (number): The slider range.
- `value` (number): The slider position.
- `callback` (string): The name of the callback function to be called when the user interacts with the slider.
- `enableNumbers` (boolean): Whether the slider should have numbers on it or not. Defaults to false.

---

### createVerticalSlider

```lua
guiInterface:createVerticalSlider( widget, range, value, callback )
```
`Client-Only`  

Creates a vertical slider with the specified widget.

**The callback receives:**
- `self` (table): The class instance.
- `newPos` (number): The new position of the slider.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `widget` (string): The name of the widget.
- `range` (number): The slider range.
- `value` (number): The slider position.
- `callback` (string): The name of the callback function to be called when the user interacts with the slider.

---

### destroy

```lua
guiInterface:destroy()
```
`Client-Only`  

Destroys the guiInterface object.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.

---

### isActive

```lua
guiInterface:isActive()
```
`Client-Only`  

Returns whether the GUI is currently open.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.

**Returns:**
- (boolean): Whether the GUI is open or not.

---

### open

```lua
guiInterface:open()
```
`Client-Only`  

Opens the GUI.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.

---

### playEffect

```lua
guiInterface:playEffect( widget, effect, restart )
```
`Client-Only`  

Plays an effect at a widget.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `widget` (string): The name of the widget.
- `effect` (string): The name of the effect.
- `restart` (boolean): Whether the effect should restart or not.

---

### playGridEffect

```lua
guiInterface:playGridEffect( gridName, index, effectName, restart )
```
`Client-Only`  

Plays an effect at a widget inside a grid.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `gridName` (string): The name of the grid.
- `index` (number): The index of the grid.
- `effectName` (string): The name of the effect.
- `restart` (boolean): Whether the effect should restart or not.

---

### setButtonCallback

```lua
guiInterface:setButtonCallback( button, callback )
```
`Client-Only`  

Binds a Lua callback to a button widget.
The callback is called when the button widget is clicked.

**The callback receives:**
- `self` (table): The class instance.
- `name` (string): The name of the button that was clicked.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `button` (string): The name of the button widget.
- `callback` (string): The name of the callback function.

---

### setButtonState

```lua
guiInterface:setButtonState( button, state )
```
`Client-Only`  

Sets the state of a button widget.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `button` (string): The name of the button widget.
- `state` (boolean): The state to set.

---

### setColor

```lua
guiInterface:setColor( widget, color )
```
`Client-Only`  

Sets the color of a widget.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `widget` (string): The name of the widget.
- `color` ([Color](/Shared-Features/Userdata/Color)): The color to set.

---

### setContainer

```lua
guiInterface:setContainer( gridName, container )
```
`Client-Only`  

Sets a container to a grid.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `gridName` (string): The name of the grid.
- `container` ([Container](../Userdata/Container)): The container.

---

### setContainers

```lua
guiInterface:setContainers( gridName, containers )
```
`Client-Only`  

Sets multiple containers to a grid.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `gridName` (string): The name of the grid.
- `container` (table): The table of containers.

---

### setData

```lua
guiInterface:setData( widget, data )
```
`Client-Only`  

Sets data to a widget.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `widget` (string): The name of the widget.
- `data` (table): The data.

---

### setFadeRange

```lua
guiInterface:setFadeRange( range )
```
`Client-Only`  

Sets the fade range for a world GUI.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `range` (number): The fade range.

---

### setFocus

```lua
guiInterface:setFocus( widget )
```
`Client-Only`  

Sets a widget to receive key focus.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `widget` (string): The name of the widget.

---

### setGridButtonCallback

```lua
guiInterface:setGridButtonCallback( buttonName, callback )
```
`Client-Only`  

Sets a callback to be called when a button inside a grid is pressed

Binds a Lua callback to a button widget inside a grid.
The callback is called when the button widget is clicked.

**The callback receives:**
- `self` (table): The class instance.
- `buttonName` (string): The name of the button that was clicked.
- `index` (number): The grid index of the button.
- `itemData` (table): Data set to the grid item using `setGridItem`.
- `gridName` (string): The name of the grid containing the button.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `buttonName` (string): The name of the button widget.
- `callback` (string): The name of the callback function.

---

### setGridItem

```lua
guiInterface:setGridItem( gridName, index, item )
```
`Client-Only`  

Sets an item in a grid.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `gridName` (string): The name of the grid.
- `index` (number): The item index.
- `item` (table): The item.

---

### setGridItemChangedCallback

```lua
guiInterface:setGridItemChangedCallback( gridName, callback )
```
`Client-Only`  

Sets a callback to be called when a grid item is changed.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `gridName` (string): The name of the grid.
- `callback` (string): The name of the callback function.

---

### setGridMouseFocusCallback

```lua
guiInterface:setGridMouseFocusCallback( widgetName, callbackName, gridName )
```
`Client-Only`  

Sets a callback on a widget in a grid, to be called whenever the mouse focus of that widget changes.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `widgetName` (string): The name of the widget in the grid.
- `callbackName` (string): The name of the callback method to call on the script instance that is setting the callback (self).
- `gridName` (string): The name of the grid (e.g. the name passed to createGridFromJson). Omitting this argument is equivalent to passing an empty string, but this may result in the callback not working properly.

**Note:** No errors or warnings are generated if the grid or widget names are incorrect, which can make debugging difficult.

**Callback Signature:**  

```lua
callback(self, widgetName, gridIndex, gridItemData, isHoverInto, gridName)
```

**Callback Arguments:**  

- `self` (table): The script instance.
- `widgetName` (string): The name of the widget whose mouse focus has changed.
- `gridIndex` (int): The index of the widget in the grid.
- `gridItemData` (table): The data table that was set to the widget with `setGridItem`.
- `isHoverInto` (boolean): True if the mouse was moved into the widget, false if it was moved out.
- `gridName` (string): The name of the grid containing the widget.

---

### setGridSize

```lua
guiInterface:setGridSize( gridName, size )
```
`Client-Only`  

Sets the size of a grid.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `gridName` (string): The name of the grid.
- `size` (number): The size.

---

### setHost

```lua
guiInterface:setHost( host, bone )
```
`Client-Only`  

Sets the host for a world gui.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `host` ([Shape](../Userdata/Shape)/[Character](../Userdata/Character)): The GUI host.
- `bone` (string): The animation bone to attach to. Optional.

---

### setIconImage

```lua
guiInterface:setIconImage( ItemBox, uuid )
```
`Client-Only`  

Sets the icon image to a shape from a uuid.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `ItemBox` (string): The name of the ItemBox widget.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The item uuid.

---

### setImage

```lua
guiInterface:setImage( ImageBox, image )
```
`Client-Only`  

Sets the image of an imagebox.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `ImageBox` (string): The name of the ImageBox widget.
- `image` (string): The path to the image file.

---

### setItemIcon

```lua
guiInterface:setItemIcon( ImageBox, itemResource, itemGroup, itemName )
```
`Client-Only`  

Sets the resource, group and item name on an ImageBox widget

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `ImageBox` (string): The name of the ImageBox widget.
- `itemResource` (string): The item resource.
- `itemGroup` (string): The item group.
- `itemName` (string): The item name.

---

### setListSelectionCallback

```lua
guiInterface:setListSelectionCallback( listName, callback )
```
`Client-Only`  

Sets a callback to be called when a list selection is changed.

:::info note
Lists are currently not implemented for custom GUI layouts and do not work.
:::

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `listName` (string): The name of the list.
- `callback` (string): The name of the callback function.

---

### setMaxRenderDistance

```lua
guiInterface:setMaxRenderDistance( distance )
```
`Client-Only`  

Sets the maximum render distance for a world GUI.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `distance` (number): The max render distance.

---

### setMeshPreview

```lua
guiInterface:setMeshPreview( widgetName, uuid )
```
`Client-Only`  

Sets a mesh preview to display an item from uuid.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `widgetName` (string): The name of the widget.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The uuid of the item to display.

---

### setOnCloseCallback

```lua
guiInterface:setOnCloseCallback( callback )
```
`Client-Only`  

Sets a callback to be called when the GUI is closed.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `callback` (string): The name of the callback function.

---

### setRequireLineOfSight

```lua
guiInterface:setRequireLineOfSight( state )
```
`Client-Only`  

Sets if a world GUI requires line of sight to be visible.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `state` (boolean): Whether the GUI requires line of sight or not.

---

### setSelectedDropDownItem

```lua
guiInterface:setSelectedDropDownItem( name, item )
```
`Client-Only`  

Selects an option in a dropdown menu.

:::caution warning
Using this function will also trigger the given dropdown's callback function.  
If used wrong, this can create an infinite loop!
:::

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `name` (string): The name of the dropdown menu's host widget.
- `item` (string): The dropdown item to select.

---

### setSelectedListItem

```lua
guiInterface:setSelectedListItem( listName, itemName )
```
`Client-Only`  

Selects an item in a list.

:::info note
Lists are currently not implemented for custom GUI layouts and do not work.
:::

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `listName` (string): The name of the list.
- `itemName` (string): The name of the item.

---

### setSliderCallback

```lua
guiInterface:setSliderCallback( sliderName, callback )
```
`Client-Only`  

Sets a callback to be called when the slider is moved.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `sliderName` (string): The name of the slider.
- `callback` (string): The name of the callback function.

---

### setSliderData

```lua
guiInterface:setSliderData( sliderName, range, position )
```
`Client-Only`  

Sets the position and range of a slider.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `sliderName` (string): The name of the slider.
- `range` (number): The range of the slider.
- `position` (number): The position of the slider.

---

### setSliderPosition

```lua
guiInterface:setSliderPosition( sliderName, position )
```
`Client-Only`  

Sets the position of a slider.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `sliderName` (string): The name of the slider.
- `position` (number): The position of the slider.

---

### setSliderRange

```lua
guiInterface:setSliderRange( sliderName, range )
```
`Client-Only`  

Sets the range of a slider.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `sliderName` (string): The name of the slider.
- `range` (number): The range of the slider.

---

### setSliderRangeLimit

```lua
guiInterface:setSliderRangeLimit( sliderName, limit )
```
`Client-Only`  

Sets the range limit of a slider.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `sliderName` (string): The name of the slider.
- `limit` (number): The range limit of the slider.

---

### setText

```lua
guiInterface:setText( widget, text )
```
`Client-Only`  

Sets text on a widget that supports it.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `widget` (string): The name of the widget.
- `text` (string): The text to set.

---

### setTextAcceptedCallback

```lua
guiInterface:setTextAcceptedCallback( editBoxName, callback )
```
`Client-Only`  

Sets a callback to be called when a user submits  
text into an EditBox widget.

**The callback receives:**
- `self` (table): The class instance.
- `name` (string): The name of the TextBox that the text was entered into.
- `text` (string): The text that was submitted.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `editBoxName` (string): The name of the EditBox.
- `callback` (string): The name of the callback function.

---

### setTextChangedCallback

```lua
guiInterface:setTextChangedCallback( editBoxName, callback )
```
`Client-Only`  

Sets a callback to be called when the text in an EditBox widget changes.

**The callback receives:**
- `self` (table): The class instance.
- `name` (string): The name of the TextBox that the text was entered into.
- `text` (string): The new text in the TextBox.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `editBoxName` (string): The name of the EditBox.
- `callback` (string): The name of the callback function.

---

### setVisible

```lua
guiInterface:setVisible( widget, state )
```
`Client-Only`  

Sets whether a widget is visible or not.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `widget` (string): The name of the widget.
- `state` (boolean): Whether the widget is visible or not.

---

### setWorldPosition

```lua
guiInterface:setWorldPosition( pos, world )
```
`Client-Only`  

Sets the world position for a world GUI.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `pos` ([Vec3](/Shared-Features/Userdata/Vec3)): The position.
- `world` ([World](../Userdata/World)): The world, defaults to same as the script.

---

### stopEffect

```lua
guiInterface:stopEffect( widget, effect, immediate )
```
`Client-Only`  

Stops an effect playing at a widget.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `widget` (string): The name of the widget.
- `effect` (string): The name of the effect.
- `immediate` (boolean): Whether the effect should stop immediately or not.

---

### stopGridEffect

```lua
guiInterface:stopGridEffect( gridName, index, effectName )
```
`Client-Only`  

Stops an effect playing inside a grid.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `gridName` (string): The name of the grid.
- `index` (number): The grid index.
- `effect` (string): The name of the effect.

---

### trackQuest

```lua
guiInterface:trackQuest( name, title, mainQuest, questTasks )
```
`Client-Only`  

Adds a quest to the quest tracker.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `name` (string): The name of the quest.
- `title` (string): The quest title to be displayed in the tracker.
- `mainQuest` (boolean): Whether the quest is a main quest (displayed on top in the tracker) or not.
- `questTasks` (table): The table of quest tasks to display in the log task. See structure below.

```lua title="questTasks Table Structure"
{
	name = string,
	text = string,
	count = number,
	target = number,
	complete = bool
}
```

---

### untrackQuest

```lua
guiInterface:untrackQuest( name )
```
`Client-Only`  

Removes a quest from the quest tracker.

**Parameters:**
- `guiInterface` ([GuiInterface](../Userdata/GuiInterface)): The guiInterface.
- `name` (string): The name of the quest.

---
