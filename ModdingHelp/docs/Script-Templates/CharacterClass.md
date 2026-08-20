---
sidebar_position: 3
title: CharacterClass Script Template
hide_title: true
sidebar-label: 'CharacterClass Script Template'
---

Below is a template for a [CharacterClass](https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CharacterClass) script, used for controlling player and non-player character animations.

```lua
Character = class()

-- Serverside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function Character.server_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function Character.server_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function Character.server_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function Character.server_onDestroy( self )

end



-- Clientside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function Character.client_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function Character.client_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function Character.client_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onupdate
function Character.client_onUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CharacterClass#onprojectile
function Character.client_onProjectile(self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid)

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CharacterClass#onmelee
function Character.client_onMelee( self, position, attacker, damage, power, direction, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CharacterClass#oncollision
function Character.client_onCollision( self, other, position, selfPointVelocity, otherPointVelocity, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CharacterClass#ongraphicsloaded
function Character.client_onGraphicsLoaded( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CharacterClass#ongraphicsunloaded
function Character.client_onGraphicsUnloaded( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CharacterClass#oninteract
function Character.client_onInteract( self, character, state )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CharacterClass#caninteract
function Character.client_canInteract( self, character )

    return true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CharacterClass#onevent
function Character.client_onEvent( self, event )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onclientdataupdate
function Character.client_onClientDataUpdate( self, data, channel )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function Character.client_onDestroy( self )

end
```
