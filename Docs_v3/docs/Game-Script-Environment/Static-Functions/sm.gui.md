---
sidebar_position: 22
title: sm.gui
hide_title: true
sidebar-label: 'sm.gui'
---

## sm.gui

The GUI library provides various utility functions for handling user interfaces.  
This library can only be used on the [client](/lua/#client).

### Functions

#### chatMessage

```lua
sm.gui.chatMessage(message)
```

Adds a message into the in-game chat window.

:::info note
The message is not sent to other players.
:::

**Parameters:**
- `message` (string): The message.

---

#### createAmmunitionContainerGui

```lua
local gui = sm.gui.createAmmunitionContainerGui(destroyOnClose)
```
`Client-Only`  

Creates an ammunition container GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createBagIconGui

```lua
local gui = sm.gui.createBagIconGui(destroyOnClose)
```
`Client-Only`  

Creates a bag icon GUI.

:::caution warning
This function is deprecated. Do not use!

Use [createWorldIconGui](#createworldicongui) instead.
:::

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createBatteryContainerGui

```lua
local gui = sm.gui.createBatteryContainerGui(destroyOnClose)
```
`Client-Only`  

Creates a battery container GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createBeaconIconGui

```lua
local gui = sm.gui.createBeaconIconGui(destroyOnClose)
```
`Client-Only`  

Creates a beacon icon GUI.

:::caution warning
This function is deprecated. Do not use!

Use [createWorldIconGui](#createworldicongui) instead.
:::

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createChallengeHUDGui

```lua
local gui = sm.gui.createChallengeHUDGui(destroyOnClose)
```
`Client-Only`  

Creates a challenge mode HUD GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createChallengeMessageGui

```lua
local gui = sm.gui.createChallengeMessageGui(destroyOnClose)
```
`Client-Only`  

Creates a challenge mode message GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createCharacterCustomizationGui

```lua
local gui = sm.gui.createCharacterCustomizationGui(destroyOnClose)
```
`Client-Only`  

Creates a character customization GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createChemicalContainerGui

```lua
local gui = sm.gui.createChemicalContainerGui(destroyOnClose)
```
`Client-Only`  

Creates a chemical container GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createContainerGui

```lua
local gui = sm.gui.createContainerGui(destroyOnClose)
```
`Client-Only`  

Creates a container GUI, for showing two containers.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createCraftBotGui

```lua
local gui = sm.gui.createCraftBotGui(destroyOnClose)
```
`Client-Only`  

Creates a craftbot GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createDressBotGui

```lua
local gui = sm.gui.createDressBotGui(destroyOnClose)
```
`Client-Only`  

Creates a dressbot GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createEngineGui

```lua
local gui = sm.gui.createEngineGui(destroyOnClose)
```
`Client-Only`  

Creates an engine GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createFertilizerContainerGui

```lua
local gui = sm.gui.createFertilizerContainerGui(destroyOnClose)
```
`Client-Only`  

Creates a fertilizer container GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createGasContainerGui

```lua
local gui = sm.gui.createGasContainerGui(destroyOnClose)
```
`Client-Only`  

Creates a gas container GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createGuiFromLayout

```lua
local gui = sm.gui.createGuiFromLayout( layout, destroyOnClose, settings )
```
`Client-Only`  

Creates a custom GUI from a layout file, with optional settings.

:::info note
When creating and opening multiple GUIs, the order of creation decides which GUI is opened.  
A newer GUI can be opened "above" an older one, but an older GUI cannot be opened over a newer one.
:::

:::caution warning
Attempting to load a layout file containing a widget with no type string will cause a game crash.
:::

**Parameters:**
- `layout` (string): The file path to the gui layout file.
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.
- `settings` (table, optional): Table with GUI settings, see table structure below.

```lua title="'settings' Table Structure"
{
	isHud = false,			--Whether the GUI is a HUD GUI or not.
	isInteractive = false,	--Whether the GUI can be interacted with or not.
	needsCursor = false,	--Whether the GUI "captures" the mouse or not.
	hidesHotbar = false,	--Whether the hotbar is hidden when the GUI is open or not.
	isOverlapped = false,	--?
	backgroundAlpha = 1.0,	--The transparency of the GUI background. 1 = opaque, 0 = transparent
}
```

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createHideoutGui

```lua
local gui = sm.gui.createHideoutGui(destroyOnClose)
```
`Client-Only`  

Creates a hideout trader GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createLogbookGui

```lua
local gui = sm.gui.createLogbookGui(destroyOnClose)
```
`Client-Only`  

Creates a logbook GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createMechanicStationGui

```lua
local gui = sm.gui.createMechanicStationGui(destroyOnClose)
```
`Client-Only`  

Creates a mechanic station GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createNameTagGui

```lua
local gui = sm.gui.createNameTagGui(destroyOnClose)
```
`Client-Only`  

Creates an in-world name tag GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createQuestTrackerGui

```lua
local gui = sm.gui.createQuestTrackerGui(destroyOnClose)
```
`Client-Only`  

Creates a quest tracker GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createSeatGui

```lua
local gui = sm.gui.createSeatGui(destroyOnClose)
```
`Client-Only`  

Creates a seat GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createSeatUpgradeGui

```lua
local gui = sm.gui.createSeatUpgradeGui(destroyOnClose)
```
`Client-Only`  

Creates a seat upgrade GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createSeedContainerGui

```lua
local gui = sm.gui.createSeedContainerGui(destroyOnClose)
```
`Client-Only`  

Creates a seed container GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createSteeringBearingGui

```lua
local gui = sm.gui.createSteeringBearingGui(destroyOnClose)
```
`Client-Only`  

Creates a steering bearing GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createSurvivalHudGui

```lua
local gui = sm.gui.createSurvivalHudGui(destroyOnClose)
```
`Client-Only`  

Creates a survival mode HUD GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createWaterContainerGui

```lua
local gui = sm.gui.createWaterContainerGui(destroyOnClose)
```
`Client-Only`  

Creates a water container GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createWaypointIconGui

```lua
local gui = sm.gui.createWaypointIconGui(destroyOnClose)
```
`Client-Only`  

Creates a waypoint icon GUI.

:::caution warning
This function is deprecated. Do not use!

Use [createWorldIconGui](#createworldicongui) instead.
:::

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createWidget

```lua
sm.gui.createWidget()
```

:::caution warning
This function is removed and does nothing. Do not use!

Use [createGuiFromLayout](#createGuiFromLayout) instead.
:::

---

#### createWorkbenchGui

```lua
local gui = sm.gui.createWorkbenchGui(destroyOnClose)
```
`Client-Only`  

Creates a workbench GUI.

**Parameters:**
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### createWorldIconGui

```lua
local gui = sm.gui.createWorldIconGui(width, height, layout, destroyOnClose)
```
`Client-Only`  

Creates a world icon GUI from a layout file.

**Parameters:**
- `width` (int): The width.
- `height` (int): The height.
- `layout` (string, optional): The path to the layout file. Defaults to `$GAME_DATA/Gui/Layouts/Hud/Hud_WorldIcon.layout`.
- `destroyOnClose` (boolean, optional): Whether the GUI is destroyed when closed or not. Defaults to `false`.

**Returns:**
- `gui` ([GuiInterface](../Userdata/GuiInterface)): The created GUI.

---

#### displayAlertText

```lua
sm.gui.displayAlertText(text, time)
```
`Client-Only`  

Displays an alert message at the top of the screen for a set duration.

**Parameters:**
- `text` (string): The alert text.
- `time` (number, optional): The time in seconds for which the message is shown. Defaults to 4 seconds.

---

#### endFadeToBlack

```lua
sm.gui.endFadeToBlack(duration)
```
`Client-Only`  

Fades the screen back from a fade to black.

**Parameters:**
- `duration` (number): The fade-out duration.

---

#### exitToMenu

```lua
sm.gui.exitToMenu()
```
`Client-Only`  

Exits the current game and returns to the main menu.

:::info note
Can only be used in the Challenge game mode.
:::

---

#### getCurrentLanguage

```lua
local language = sm.gui.getCurrentLanguage()
```
`Client-Only`  

Returns the user's current language setting.  
See [GameClass.client_onLanguageChange](../Script-Classes/GameClass#client_onlanguagechange) for valid language names.

**Returns:**
- `language` (string): The language setting, e.g. "English".

---

#### getKeyBinding

```lua
sm.gui.getKeyBinding(action, hypertext)
```
`Client-Only`  

Returns the set binding for an action as a string.  
If `hypertext` is enabled, the function returns a formatted string that, if given to [setInteractionText](#setinteractiontext), will put the text in a highlight box or display a certain image, depending on the action.

**Parameters:**
- `action` (string): The action.
- `hypertext` (boolean, optional): Whether the string should be hypertext formatted or not. Defaults to `false`.

**Returns:**
- (string): The key bound to the action.

---

#### translateLocalizationTags

```lua
local translated = sm.gui.translateLocalizationTags(text)
```
`Client-Only`  

Translates all localization tags in a text using the current language.

**Parameters:**
- `text` (string): The text containing the tags.

**Returns:**
- `translated` (string): The translated text.

---

#### getScreenSize

```lua
local width, height = sm.gui.getScreenSize()
```
`Client-Only`  

Returns the size of the screen.

**Returns:**
- `width` (int): The screen width.
- `height` (int): The screen height.

---

#### hideGui

```lua
sm.gui.hideGui(state)
```
`Client-Only`  

Sets GUI visibility.

**Parameters:**
- `state` (boolean): Whether the GUI is hidden or not.

---

#### setCenterIcon

```lua
sm.gui.setCenterIcon(name)
```
`Client-Only`  

Set the icon displayed at the center.

**Parameters:**
- `name` (string): The icon name.

---

#### setCharacterDebugText

```lua
sm.gui.setCharacterDebugText(character, text, clear)
```
`Client-Only`  

Set a text for the character that will be displayed above its head.

**Parameters:**
- `character` ([Character](../Userdata/Character)): The character.
- `text` (string): The text to display.
- `clear` (boolean): Whether the previous text should be overwritten or not.

---

#### setInteractionText

```lua
sm.gui.setInteractionText(text1, binding1, text2, binding2, text3)
```
`Client-Only`  

Set the binding text displayed at the center.  

Using hypertext formatting (see [getKeyBinding](#getkeybinding)), the text can be highlighted in a box or an image displayed.  
This hypertext can be customized to some extent, see the examples below.

:::info note
You can display **two lines** of text by calling this function twice.  
When doing so, a **different** text needs to be set in each call.  
If the text in both calls is the same, only one line will be displayed.
:::

**Parameters:**
- `text1` (string): The leftmost segment.
- `binding1` (string): The left white segment. Optional.
- `text2` (string): The mid or end segment. Optional.
- `binding2` (string): The right white segment. Optional.
- `text3` (string): The rightmost segment. Optional.

```lua title="Example hypertext highlighting"
MyShape = class()

function MyShape.client_onUpdate(self, dt)
	--This string will display the letter 'E' inside an orange highlight box
	local string = "<p textShadow='false' bg='gui_keybinds_bg_orange' color='#66440C' spacing='9'>E</p>"
	--[[
		Parameters:
		'textShadow' - Whether the text should have a shadow applied or not.
		'bg' - The highlight box to be used. Valid are: 'gui_keybinds_bg', 'gui_keybinds_bg_orange' and 'gui_keybinds_bg_white'.
		'color' - The color of the text inside the highlight box.
		'spacing' - The space between the ends of the text and the ends of the highlight box.
		'E' - The text to display inside the box.
	]]
	sm.gui.setInteractionText(string)
end
```
```lua title="Example hypertext image"
MyShape = class()

function MyShape.client_onUpdate(self, dt)
	--This string will display an arrow pointing down.
	local string = "<img bg='gui_keybinds_bg' spacing='0'>icon_keybinds_arrow_down.png</img>"
	--[[
		Parameters:
		'bg' - The background box to be used. Valid are: 'gui_keybinds_bg', 'gui_keybinds_bg_orange' and 'gui_keybinds_bg_white'.
		'spacing' - The space between the edges of the image and the edges of the background box.
		'icon_keybinds_arrow_down.png' - The image to display. A custom image can be set using '$CONTENT_DATA/path/to/image.png'
	]]
	sm.gui.setInteractionText(string)
end
```

---

#### setProgressFraction

```lua
sm.gui.setProgressFraction(progress)
```
`Client-Only`  

Set the progress fraction filling the circle icon displayed at the center.

**Parameters:**
- `progress` (number): The number that determines how much of the circle is filled.

---

#### startFadeToBlack

```lua
sm.gui.startFadeToBlack(duration, timeout)
```
`Client-Only`  

Fades the screen to black and back after a timeout.

**Parameters:**
- `duration` (number): The animation duration.
- `timeout` (number): Time in seconds until the screen fades back.

---

#### ticksToTimeString

```lua
local timeStr = sm.gui.ticksToTimeString(ticks)
```
`Client-Only`  

Converts game ticks to a `HH:MM:SS` string representation.

**Parameters:**
- `ticks` (int): The ticks.

**Returns:**
- `time` (string): The human time formatted string.

---
