---
sidebar_position: 3
title: ShapeClass
hide_title: true
sidebar-label: 'ShapeClass'
---

## ShapeClass
A script class that is instanced for every "scripted" [Interactable Shape](../Userdata/Interactable) in the game.

An interactable part is a [Shape](../Userdata/Shape) that is usually built by the player and can be interacted with, for example a button or an engine.

### Instance Members

These members are set by the engine when instantiating the script class and are unique to each new instance of it.

#### interactable

`self.interactable` ([Interactable](../Userdata/Interactable)):  
The interactable that owns this script instance.

---

#### shape

`self.shape` ([Shape](../Userdata/Shape)):  
The physical shape that owns the interactable.  
This is the same as [Interactable.shape](../Userdata/Interactable#shape).

---

#### network

`self.network` ([Network](../Userdata/Network)):  
A network interface, for client/server instance communication.

---

#### storage

`self.storage` ([Storage](../Userdata/Storage)):  
A data storage interface, used to store persistent data into the save file.

---

#### data

`self.data` (nil/boolean/number/string/table):  
JSON data parsed from the `data` key in the `scripted` object of the shapeset entry.

---

#### params

`self.params` (any):  
Parameter set with [Interactable:setParams()](../Userdata/Interactable#setparams) when spawned from a script.

---

### Class Constants

These constants may be set in the global script class table to configure certain parts of the class.  
Note that changing these on an already-existing script instance will **not** update the settings.

#### colorNormal

`Class.colorNormal` ([Color](/Shared-Features/Userdata/Color)):  
Sets the connection point normal color.  
The connection point is shown when using the Connect Tool.  
Defaults to gray.

---

#### colorHighlight

`Class.colorHighlight` ([Color](/Shared-Features/Userdata/Color)):  
Sets the connection point highlight color.  
The highlighted connection point is shown when using the Connect Tool and selecting the interactable.  
Defaults to white.

---

#### connectionInput

`Class.connectionInput` (int):  
Sets the input logic connection type.  
See [sm.interactable.connectionType](../Static-Functions/sm.interactable#connectiontype) for details.  
Defaults to 0, no input.

---

#### connectionOutput

`Class.connectionOutput` (int):  
Sets the output logic connection type.  
See [sm.interactable.connectionType](../Static-Functions/sm.interactable#connectiontype) for details.  
Defaults to 0, no output.

---

#### maxParentCount

`Class.maxParentCount` (int):  
Sets the maximum number of allowed parent logic connections - the number of inputs.  
Defaults to 0, no parents allowed.

:::info note
Implement [client_getAvailableParentConnectionCount](#client_getavailableparentconnectioncount) to control specific types.
:::

---

#### maxChildCount

`Class.maxChildCount` (int):  
Sets the maximum number of allowed child logic connections - the number of outputs.  
Defaults to 0, no children allowed.

:::info note
Implement [client_getAvailableChildConnectionCount](#client_getavailablechildconnectioncount) to control specific types.
:::

---

#### poseWeightCount

`Class.poseWeightCount` (int):  
Sets the number of animation poses the shape's model is able to use.  
Value are integers 0-3 (defaults to 0, no poses).  
A value greater that 0 indicates that the renderable's mesh is set up to blend into `pose0`, `pose1`, `pose2`.  
This is, for example, used to move the lever on the engine.

---

### Server Callbacks

These callbacks are executed in [server context](/#server).

#### server_canErase

```lua
function ShapeClass.server_canErase(self)
	return true -- or false
end
```

Called to check if the [Shape](../Userdata/Shape) can be erased by players at this moment.

:::info note
This can be used to override restrictions (see [Shape.erasable](../Userdata/Shape#erasable)).
:::

**Parameters:**
- `self` (table): The script class instance.

**Returns:**
- boolean: Whether the shape can be erased or not.

---

#### server_onCollision

```lua
function ShapeClass.server_onCollision(self, other, position, selfPointVelocity, otherPointVelocity, normal)
end
```

Called when the [Shape](../Userdata/Shape) collides with another object.

**Parameters:**
- `self` (table): The script class instance.
- `other` ([Shape](../Userdata/Shape)/[Character](../Userdata/Character)/[Harvestable](../Userdata/Harvestable)/[Lift](../Userdata/Lift)/nil): The other object. Nil if terrain.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit world position.
- `selfPointVelocity` ([Vec3](/Shared-Features/Userdata/Vec3)): This shape's velocity at the collision hit point.
- `otherPointVelocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The other object's velocity at the collision hit point.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The collision normal between the two objects.

---

#### server_onExplosion

```lua
function ShapeClass.server_onExplosion(self, center, destructionLevel)
end
```

Called when the [Shape](../Userdata/Shape) is hit by an [explosion](../Static-Functions/sm.physics#explode).

**Parameters:**
- `self` (table): The script class instance.
- `center` ([Vec3](/Shared-Features/Userdata/Vec3)): The center position of the explosion.
- `destructionLevel` (int): The destruction level of the explosion. Corresponds to the `durability` rating of a shape.

---

#### server_onMelee

```lua
function ShapeClass.server_onMelee(self, position, attacker, damage, power, direction, normal)
end
```

Called when the [Shape](../Userdata/Shape) is hit by a [melee attack](../Static-Functions/sm.melee).

:::info note
If the attacker is destroyed before the hit lands, the attacker value will be nil.
:::

**Parameters:**
- `self` (table): The script class instance.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit world position.
- `attacker` ([Player](../Userdata/Player)/[Unit](../Userdata/Unit)/nil): The source/owner of the attack.
- `damage` (int): The attack's damage value.
- `power` (number): The physical impact strength of the hit.
- `direction` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction of the attack.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit point normal vector.

---

#### server_onProjectile

```lua
function ShapeClass.server_onProjectile(self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid)
end
```

Called when the [Shape](../Userdata/Shape) is hit by a [projectile](../Static-Functions/sm.projectile).

:::info note
If the shooter is destroyed before the projectile hits, the shooter value will be nil.
:::

**Parameters:**
- `self` (table): The script class instance.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The projectile hit world position.
- `airTime` (number): The time, in seconds, that the projectile spent flying before the hit.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The impact velocity of the projectile.
- `projectileName` (string): The name of the projectile (legacy, use uuid instead).
- `shooter` ([Player](../Userdata/Player)/[Unit](../Userdata/Unit)/[Shape](../Userdata/Shape)/[Harvestable](../Userdata/Harvestable)/nil): The source/owner of the projectile.
- `damage` (int): The projectile's damage value.
- `customData` (any): Custom data defined with the `custom*` functions in [sm.projectile](../Static-Functions/sm.projectile).
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit point normal vector.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The UUID of the projectile.

---

#### server_onSledgehammer

```lua
function ShapeClass.server_onSledgehammer(self)
end
```

:::caution deprecated
Do not use.  
Use [onMelee](#server_onmelee) instead.
:::

---

#### server_onUnload

```lua
function ShapeClass.server_onUnload(self)
end
```

Called when the [Shape](../Userdata/Shape) is unloaded from the world due to its surrounding terrain being unloaded.  
This happens when no [Player](../Userdata/Player)'s [Character](../Userdata/Character) is close enough to it.

:::info note
A creation, consisting of one or more [bodies](../Userdata/Body), consisting of one or more [shapes](../Userdata/Shape) joined together with [joints](../Userdata/Joint), are always unloaded at the same time.
:::

**Parameters:**
- `self` (table): The script class instance.

---

### Client Callbacks

These callbacks are executed in [client context](/#client).

#### client_canCarry

```lua
function ShapeClass.client_canCarry(self)
	return true -- or false
end
```

Called to check if the [Shape](../Userdata/Shape) must be carried instead of put in the inventory.

:::info note
Shapes with the `carryItem` attribute are always carried.
:::

**Parameters:**
- `self` (table): The script class instance.

**Returns:**
- boolean: Whether the shape must be carried or not.

---

#### client_canErase

```lua
function ShapeClass.client_canErase(self)
	return true -- or false
end
```

Called to check if the [Shape](../Userdata/Shape) can be erased by players at this moment.

:::info note
This can be used to override restrictions (see [Shape.erasable](../Userdata/Shape#erasable)).
:::

**Parameters:**
- `self` (table): The script class instance.

**Returns:**
- boolean: Whether the shape can be erased or not.

---

#### client_canInteract

```lua
function ShapeClass.client_canInteract( self, character )
	return true -- or false
end
```

Called to check whether the [Interactable](../Userdata/Interactable) can be interacted with at this moment.

:::info note
This callback can also be used to change the interaction text shown to the player using [sm.gui.setInteractionText()](../Static-Functions/sm.gui#setinteractiontext) (defaults to `E Use`).

This can be used to override restrictions (See [Shape.usable](../Userdata/Shape#usable)).
:::

**Parameters:**
- `self` (table): The script class instance.
- `character` ([Character](../Userdata/Character)): The character of the player that is looking at the shape.

**Returns:**
- boolean: Whether the shape can be interacted with or not.

---

#### client_onInteract

```lua
function ShapeClass.client_onInteract(self, character, state)
end
```

Called when a [Player](../Userdata/Player) is interacting with the [Interactable](../Userdata/Interactable) by pressing the `Use` input (default: `E`) or pressing `0 - 9` if the [Interactable](../Userdata/Interactable) is connected to a seat (See: [Interactable:pressSeatInteractable()](../Userdata/Interactable#pressseatinteractable)).

:::info note
If this method is defined, the player will see the `Use` interaction text when looking at the Shape.
:::

```lua title="Example Usage"
-- Example of interaction
function MySwitch.client_onInteract(self, character, state)
	if state then
		self.network:sendToServer('sv_n_toggle')
	end
end

function MySwitch.sv_n_toggle(self)
	-- Toggle on and off
	self.interactable.active = not self.interactable.active
end
```

**Parameters:**
- `self` (table): The script class instance.
- `character` ([Character](../Userdata/Character)): The interacting player's character.
- `state` (boolean): The interaction state (`true` = pressed, `false` = released).

---

#### client_canInteractThroughJoint

```lua
function ShapeClass.client_canInteractThroughJoint(self, character)
	return true -- or false
end
```

Called to check whether the [Interactable](../Userdata/Interactable) can be interacted with through a child [Joint](../Userdata/Joint) at this moment.

:::info note
This callback can also be used to change the interaction text shown to the player using [sm.gui.setInteractionText()](../Static-Functions/sm.gui#setinteractiontext) (defaults to `E Use`).
:::

**Parameters:**
- `self` (table): The script class instance.
- `character` ([Character](../Userdata/Character)): The character of the player that is looking at the joint.

**Returns:**
- boolean: Whether the shape can be interacted with or not.

---

#### client_onInteractThroughJoint

```lua
function ShapeClass.client_onInteractThroughJoint(self, character, state, joint)
end
```

Called when a [Player](../Userdata/Player) is interacting with the [Interactable](../Userdata/Interactable) through a connected [Joint](../Userdata/Joint).

**Parameters:**
- `self` (table): The script class instance.
- `character` ([Character](../Userdata/Character)): The tinkering player's character.
- `state` (boolean): The interaction state. Always `true` here.
- `joint` ([Joint](../Userdata/Joint)): The joint that the player interacted through.

---

#### client_canTinker

```lua
function ShapeClass.client_canTinker(self, character)
	return true -- or false
end
```

Called to check whether the [Interactable](../Userdata/Interactable) can be tinkered with at this moment.

:::info note
Tinkering usually means opening the upgrade menu for seats.
:::

**Parameters:**
- `self` (table): The script class instance.
- `character` ([Character](../Userdata/Character)): The character of the player that is looking at the shape.

**Returns:**
- boolean: Whether the shape can be tinkered with or not.

---

#### client_onTinker

```lua
function ShapeClass.client_onTinker(self, character, state)
end
```

Called when a [Player](../Userdata/Player) is interacting with the [Interactable](../Userdata/Interactable) by pressing the `Tinker` input (default: `U`).

:::info note
Tinkering usually means opening the upgrade menu for seats.
:::

**Parameters:**
- `self` (table): The script class instance.
- `character` ([Character](../Userdata/Character)): The tinkering player's character.
- `state` (boolean): The interaction state (`true` = pressed, `false` = released).

---

#### client_onAction

```lua
function ShapeClass.client_onAction(self, action, state)
	return true --or false
end
```

Called when the [Interactable](../Userdata/Interactable) receives input from a [Player](../Userdata/Player) with the [Character](../Userdata/Character) locked to the [Interactable](../Userdata/Interactable).

When a [Character](../Userdata/Character) is seated in an [Interactable](../Userdata/Interactable) [Shape](../Userdata/Shape) with a `seat` component, the [Character](../Userdata/Character) is also considered locked to the [Interactable](../Userdata/Interactable).

Details about the `action` value are in [sm.interactable.actions](../Static-Functions/sm.interactable#actions).

If the return value is `true`, the action is "consumed", e.g. if `W` is pressed, the player does **not** move forwards.  
If the return value is `false`, the action is **not** consumed, e.g. if `W` is pressed, the player also moves forwards.

**Parameters:**
- `self` (table): The script class instance.
- `action` (int): The action ID.
- `state` (boolean): The action state (`true` = begin, `false` = end).

**Returns:**
- boolean: Whether the action is consumed or not.

---

#### client_onCollision

```lua
function ShapeClass.client_onCollision(self, other, position, selfPointVelocity, otherPointVelocity, normal)
end
```

Called when the [Shape](../Userdata/Shape) collides with another object.

**Parameters:**
- `self` (table): The script class instance.
- `other` ([Shape](../Userdata/Shape)/[Character](../Userdata/Character)/[Harvestable](../Userdata/Harvestable)/[Lift](../Userdata/Lift)/nil): The other object. Nil if terrain.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit world position.
- `selfPointVelocity` ([Vec3](/Shared-Features/Userdata/Vec3)): This shape's velocity at the collision hit point.
- `otherPointVelocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The other object's velocity at the collision hit point.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The collision normal between the two objects.

---

#### client_onMelee

```lua
function ShapeClass.client_onMelee(self, position, attacker, damage, power, direction, normal)
end
```

Called when the [Shape](../Userdata/Shape) is hit by a [melee attack](../Static-Functions/sm.melee).

:::info note
If the attacker is destroyed before the hit lands, the attacker value will be nil.
:::

**Parameters:**
- `self` (table): The script class instance.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit world position.
- `attacker` ([Player](../Userdata/Player)/nil): The source/owner of the attack.
- `damage` (int): The attack's damage value.
- `power` (number): The physical impact strength of the hit.
- `direction` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction of the attack.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit point normal vector.

---

#### client_onProjectile

```lua
function ShapeClass.client_onProjectile(self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid)
end
```

Called when the [Shape](../Userdata/Shape) is hit by a [projectile](../Static-Functions/sm.projectile).

:::info note
If the shooter is destroyed before the projectile hits, the shooter value will be nil.
:::

**Parameters:**
- `self` (table): The script class instance.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The projectile hit world position.
- `airTime` (number): The time, in seconds, that the projectile spent flying before the hit.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The impact velocity of the projectile.
- `projectileName` (string): The name of the projectile (legacy, use uuid instead).
- `shooter` ([Player](../Userdata/Player)/[Shape](../Userdata/Shape)/[Harvestable](../Userdata/Harvestable)/nil): The source/owner of the projectile.
- `damage` (int): The projectile's damage value.
- `customData` (any): Custom data defined with the `custom*` functions in [sm.projectile](../Static-Functions/sm.projectile).
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The hit point normal vector.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The UUID of the projectile.

---

#### client_getAvailableParentConnectionCount

```lua
function ShapeClass.client_getAvailableParentConnectionCount(self, connectionType)
	return int -- The number of available connections.
end
```

Called to check how many more parent (input) connections with the given [connectionType](../Static-Functions/sm.interactable#connectiontype) the [Interactable](../Userdata/Interactable) will accept.  
Return 1 or more to allow a connection of this type.

See [sm.interactable.connectionType](../Static-Functions/sm.interactable#connectiontype) for details about the connection type.

:::info note
The [maxParentCount](#maxparentcount) constant must be 1 or more for this callback to be called.
:::

```lua title="Example Usage"
-- Example of implementation where logic and power shares the same slot but electricity counts as separate

local connectionType = sm.interactable.connectionType

MyShape = class()
MyShape.maxParentCount = 2
MyShape.connectionInput = connectionType.logic + connectionType.power + connectionType.electricity

function MyShape.client_getAvailableParentConnectionCount(self, connectionType)
	if bit.band(connectionType, bit.bor(connectionType.logic, connectionType.power)) ~= 0 then
		return 1 - #self:getParents(bit.bor(connectionType.logic, connectionType.power))
	end
	if bit.band(connectionType, connectionType.electricity) ~= 0 then
		return 1 - #self:getParents(connectionType.electricity)
	end
	return 0
end
```

**Parameters:**
- `self` (table): The script class instance.
- `connectionType` (int): The connection type flags.

**Returns:**
- int: The number of available connections.

---

#### client_getAvailableChildConnectionCount

```lua
function ShapeClass.client_getAvailableChildConnectionCount(self, connectionType)
	return int -- The number of available connections.
end
```

Called to check how many more child (output) connections with the given [connectionType](../Static-Functions/sm.interactable#connectiontype) the [Interactable](../Userdata/Interactable) will accept.  
Return 1 or more to allow a connection of this type.

See [sm.interactable.connectionType](../Static-Functions/sm.interactable#connectiontype) for details about the connection type.

:::info note
The [maxChildCount](#maxchildcount) constant must be 1 or more for this callback to be called.
:::

```lua title="Example Usage"
-- Example of implementation that accepts 10 logic connections and 1 power connection

local connectionType = sm.interactable.connectionType

MyShape = class()
MyShape.maxChildCount = 11
MyShape.connectionOutput = connectionType.logic + connectionType.power

function MyIteractable.client_getAvailableChildConnectionCount(self, connectionType)
	if bit.band(connectionType, connectionType.logic) ~= 0 then
		return 10 - #self:getParents(connectionType.logic)
	end
	if bit.band(connectionType, connectionType.power) ~= 0 then
		return 1 - #self:getParents(connectionType.power)
	end
	return 0
end
```

**Parameters:**
- `self` (table): The script class instance.
- `connectionType` (int): The connection type flags.

**Returns:**
- int: The number of available connections.

---
