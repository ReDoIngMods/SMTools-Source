
ScriptableObject = class()

-- Constants
-- https://scrapmechanictools.com/lua/Game-Script-Environment/Constants#scriptableobjectclass

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
