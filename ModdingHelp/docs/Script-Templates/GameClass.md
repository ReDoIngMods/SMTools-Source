---
sidebar_position: 7
title: GameClass Script Template
hide_title: true
sidebar-label: 'GameClass Script Template'
---

Below is a template for a [GameClass](https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/GameClass) script, which controls the game.

```lua
Game = class()

-- Constants
-- https://scrapmechanictools.com/lua/Game-Script-Environment/Constants#gameclass

Game.defaultInventorySize = 40
Game.enableAggro = true
Game.enableAmmoConsumption = false
Game.enableFuelConsumption = false
Game.enableLimitedInventory = false
Game.enableRestrictions = false
Game.enableUpgrade = false

-- Serverside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function Game.server_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function Game.server_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function Game.server_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/GameClass#onplayerjoined
function Game.server_onPlayerJoined( self, player, newPlayer )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/GameClass#onplayerleft
function Game.server_onPlayerLeft( self, player )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/GameClass#onreset
function Game.server_onReset( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/GameClass#onrestart
function Game.server_onRestart( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/GameClass#onsavelevel
function Game.server_onSaveLevel( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/GameClass#ontestlevel
function Game.server_onTestLevel( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/GameClass#onstoptest
function Game.server_onStopTest( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function Game.server_onDestroy( self )

end



-- Clientside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function Game.client_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function Game.client_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function Game.client_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onupdate
function Game.client_onUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/GameClass#onloadingscreenlifted
function Game.client_onLoadingScreenLifted( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/GameClass#onlanguagechange
function Game.client_onLanguageChange( self, language )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onclientdataupdate
function Game.client_onClientDataUpdate( self, data, channel )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function Game.client_onDestroy( self )

end
```
