---
sidebar_position: 9
title: ScriptableObjectClass Script Template
hide_title: true
sidebar-label: 'ScriptableObjectClass Script Template'
---

Below is a template for a [ScriptableObjectClass](https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass) script, used for executing background scripts that are not attached to a physical game object.

```lua
ScriptableObject = class()

-- Constants
-- https://scrapmechanictools.com/lua/Game-Script-Environment/Constants#scriptableobjectolass

ScriptableObject.isSaveObject = false

-- Serverside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function ScriptableObject.server_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function ScriptableObject.server_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function ScriptableObject.server_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function ScriptableObject.server_onDestroy( self )

end



-- Clientside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function ScriptableObject.client_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function ScriptableObject.client_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function ScriptableObject.client_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onupdate
function ScriptableObject.client_onUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onclientdataupdate
function ScriptableObject.client_onClientDataUpdate( self, data, channel )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function ScriptableObject.client_onDestroy( self )

end
```
