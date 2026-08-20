---
sidebar_position: 6
title: HarvestableClass Script Template
hide_title: true
sidebar-label: 'HarvestableClass Script Template'
---

Below is a template for a [HarvestableClass](https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass) script, used for controlling harvestables such as trees and plants.

```lua
Harvestable = class()

-- Constants
-- https://scrapmechanictools.com/lua/Game-Script-Environment/Constants#harvestableclass

Harvestable.poseWeightCount = 0

-- Serverside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function Harvestable.server_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function Harvestable.server_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function Harvestable.server_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass#onreceiveupdate
function Harvestable.server_onReceiveUpdate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass#onexplosion
function Harvestable.server_onExplosion( self, center, destructionLevel )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass#onprojectile
function Harvestable.server_onProjectile( self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass#onmelee
function Harvestable.server_onMelee( self, position, attacker, damage, power, direction, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass#oncollision
function Harvestable.server_onCollision( self, other, position, selfPointVelocity, otherPointVelocity, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass#canerase
function Harvestable.server_canErase( self )

	return true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass#onremoved
function Harvestable.server_onRemoved( self, player )
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass#onunload
function Harvestable.server_onUnload( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function Harvestable.server_onDestroy( self )

end



-- Clientside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function Harvestable.client_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function Harvestable.client_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function Harvestable.client_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onupdate
function Harvestable.client_onUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass#onprojectile
function Harvestable.client_onProjectile( self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass#onmelee
function Harvestable.client_onMelee( self, position, attacker, damage, power, direction, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass#oncollision
function Harvestable.client_onCollision( self, other, position, selfPointVelocity, otherPointVelocity, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass#canerase
function Harvestable.client_canErase( self )

	return true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass#oninteract
function Harvestable.client_onInteract( self, character, state )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass#caninteract
function Harvestable.client_canInteract( self, character )

    return true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/HarvestableClass#onaction
function Harvestable.client_onAction( self, action, state )

    return true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onclientdataupdate
function Harvestable.client_onClientDataUpdate( self, data, channel )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function Harvestable.client_onDestroy( self )

end
```
