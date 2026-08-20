---
sidebar_position: 1
title: ShapeClass Script Template
hide_title: true
sidebar-label: 'ShapeClass Script Template'
---

Below is a template for a [ShapeClass](https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass) script, used for controlling interactive parts.

```lua
Shape = class()

-- Constants
-- https://scrapmechanictools.com/lua/Game-Script-Environment/Constants#shapeclass

Shape.colorNormal = sm.color.new( "#00ff00" )
Shape.colorHighlight = sm.color.new( "#ff0000" )
Shape.connectionInput = sm.interactable.connectionType.none
Shape.connectionOutput = sm.interactable.connectionType.none
Shape.maxParentCount = 0
Shape.maxChildCount = 0
Shape.poseWeightCount = 0

-- Serverside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function Shape.server_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function Shape.server_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function Shape.server_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#onexplosion
function Shape.server_onExplosion( self, center, destructionLevel )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#onprojectile
function Shape.server_onProjectile( self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#onmelee
function Shape.server_onMelee( self, position, attacker, damage, power, direction, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#oncollision
function Shape.server_onCollision( self, other, position, selfPointVelocity, otherPointVelocity, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#canerase
function Shape.server_canErase( self )

	return true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#onunload
function Shape.server_onUnload( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function Shape.server_onDestroy( self )

end



-- Clientside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function Shape.client_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function Shape.client_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function Shape.client_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onupdate
function Shape.client_onUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#onprojectile
function Shape.client_onProjectile( self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#onmelee
function Shape.client_onMelee( self, position, attacker, damage, power, direction, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#oncollision
function Shape.client_onCollision( self, other, position, selfPointVelocity, otherPointVelocity, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#canerase
function Shape.client_canErase( self )

	return true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#oninteract
function Shape.client_onInteract( self, character, state )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#caninteract
function Shape.client_canInteract( self, character )

    return true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#ontinker
function Shape.client_onTinker( self, character, state )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#cantinker
function Shape.client_canTinker( self, character )

    return true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#oninteractthroughjoint
function Shape.client_onInteractThroughJoint( self, character, state, joint )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#caninteractthroughjoint
function Shape.client_canInteractThroughJoint( self, character )

    return true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#onaction
function Shape.client_onAction( self, action, state )

    return true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#cancarry
function Shape.client_canCarry( self )

    return true
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#getavailableparentconnectioncount
function Shape.client_getAvailableParentConnectionCount( self, connectionType )

    return 0
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/ShapeClass#getavailablechildconnectioncount
function Shape.client_getAvailableChildConnectionCount( self, connectionType )

    return 0
end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onclientdataupdate
function Shape.client_onClientDataUpdate( self, data, channel )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function Shape.client_onDestroy( self )

end
```
