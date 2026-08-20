---
sidebar_position: 2
title: ToolClass Script Template
hide_title: true
sidebar-label: 'ToolClass Script Template'
---

Below is a template for a [ToolClass](https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ToolClass) script, used for controlling handheld tools.

```lua
Tool = class()

-- Serverside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function Tool.server_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function Tool.server_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function Tool.server_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function Tool.server_onDestroy( self )

end



-- Clientside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function Tool.client_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function Tool.client_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function Tool.client_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onupdate
function Tool.client_onUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ToolClass#onequip
function Tool.client_onEquip( self, animate )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ToolClass#onunequip
function Tool.client_onUnequip( self, animate )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ToolClass#onequippedupdate
function Tool.client_onEquippedUpdate( self, primaryState, secondaryState, forceBuild )

    return true, true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ToolClass#ontoggle
function Tool.client_onToggle( self, backwards )

    return true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ToolClass#onreload
function Tool.client_onReload( self )

    return true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ToolClass#canequip
function Tool.client_canEquip( self )

    return true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ToolClass#equipwhileseated
function Tool.client_equipWhileSeated( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onclientdataupdate
function Tool.client_onClientDataUpdate( self, data, channel )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function Tool.client_onDestroy( self )

end
```
