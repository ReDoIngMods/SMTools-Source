---
sidebar_position: 5
title: PlayerClass Script Template
hide_title: true
sidebar-label: 'PlayerClass Script Template'
---

Below is a template for a [PlayerClass](https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass) script, representing a user controlling a player character.

```lua
Player = class()

-- Serverside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function Player.server_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function Player.server_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function Player.server_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/PlayerClass#onexplosion
function Player.server_onExplosion( self, center, destructionLevel )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/PlayerClass#onprojectile
function Player.server_onProjectile( self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/PlayerClass#onmelee
function Player.server_onMelee( self, position, attacker, damage, power, direction, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/PlayerClass#oncollision
function Player.server_onCollision( self, other, position, selfPointVelocity, otherPointVelocity, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/PlayerClass#oncollisioncrush
function Player.server_onCollisionCrush( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/PlayerClass#onshaperemoved
function Player.server_onShapeRemoved( self, items )
	
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/PlayerClass#oninventorychanges
function Player.server_onInventoryChanges( self, inventory, changes )
	
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function Player.server_onDestroy( self )

end



-- Clientside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function Player.client_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function Player.client_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function Player.client_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onupdate
function Player.client_onUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/PlayerClass#oninteract
function Player.client_onInteract( self, character, state )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/PlayerClass#oncancel
function Player.client_onCancel( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/PlayerClass#onreload
function Player.client_onReload( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onclientdataupdate
function Player.client_onClientDataUpdate( self, data, channel )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function Player.client_onDestroy( self )

end
```
