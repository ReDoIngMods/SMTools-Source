
Unit = class()

-- Constants
-- https://scrapmechanictools.com/lua/Game-Script-Environment/Constants#unitclass

Unit.isSaveObject = true

-- Serverside Callbacks

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#oncreate
function Unit.server_onCreate( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onrefresh
function Unit.server_onRefresh( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate
function Unit.server_onFixedUpdate( self, dt )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/UnitClass#onunitupdate
function Unit.server_onUnitUpdate( self, deltaTime )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/UnitClass#onprojectile
function Unit.server_onProjectile( self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/UnitClass#onexplosion
function Unit.server_onExplosion( self, center, destructionLevel )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/UnitClass#onmelee
function Unit.server_onMelee( self, position, attacker, damage, power, direction, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/UnitClass#oncollision
function Unit.server_onCollision( self, other, position, selfPointVelocity, otherPointVelocity, normal )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/UnitClass#oncollisioncrush
function Unit.server_onCollisionCrush( self )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/UnitClass#oncharacterchangedcolor
function Unit.server_onCharacterChangedColor( self, color )

end

-- https://scrapmechanictools.com/lua/Game-Script-Environment/Classes/CommonCallbacks#ondestroy
function Unit.server_onDestroy( self )

end
