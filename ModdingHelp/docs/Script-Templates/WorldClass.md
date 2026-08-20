---
sidebar_position: 8
title: WorldClass Script Template
hide_title: true
sidebar-label: 'WorldClass Script Template'
---

Below is a template for a [WorldClass](https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass) script, which controls a game world.

```lua
World = class()

-- Constants
-- https://scrapmechanictools.com/lua/Game-Script-Environment/Constants#worldclass

World.cellMaxX = 0
World.cellMaxY = 0
World.cellMinX = 0
World.cellMinY = 0
World.enableAssets = true
World.enableClutter = true
World.enableCreations = true
World.enableHarvestables = true
World.enableKinematics = true
World.enableNodes = true
World.enableSurface = true
World.groundMaterialSet = "$GAME_DATA/Terrain/Materials/gnd_standard_materialset.json"
World.isIndoor = false
World.isStatic = false
World.renderMode = "outdoor"
World.terrainScript = "$PATH/to/your/terrain.lua"
World.worldBorder = true

-- Serverside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function World.server_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function World.server_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function World.server_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass#onexplosion
function World.server_onExplosion( self, center, destructionLevel )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass#onprojectile
function World.server_onProjectile( self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, target, uuid )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass#onprojectilefire
function World.server_onProjectileFire( self, position, velocity, projectileName, shooter, uuid )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass#onmelee
function World.server_onMelee( self, position, attacker, target, damage, power, direction, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass#oncollision
function World.server_onCollision( self, objectA, objectB, position, pointVelocityA, pointVelocityB, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass#oncellcreated
function World.server_onCellCreated( self, x, y )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass#oncellloaded
function World.server_onCellLoaded( self, x, y )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass#oncellunloaded
function World.server_onCellUnloaded( self, x, y )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass#oninteractablecreated
function World.server_onInteractableCreated( self, interactable )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass#oninteractabledestroyed
function World.server_onInteractableDestroyed( self, interactable )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function World.server_onDestroy( self )

end



-- Clientside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function World.client_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function World.client_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function World.client_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onupdate
function World.client_onUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass#oncellloaded
function World.client_onCellLoaded( self, x, y )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/WorldClass#oncellunloaded
function World.client_onCellUnloaded( self, x, y )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function World.client_onDestroy( self )

end
```
