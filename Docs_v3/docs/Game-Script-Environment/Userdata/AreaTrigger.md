---
sidebar_position: 2
title: AreaTrigger
hide_title: true
sidebar-label: 'AreaTrigger'
---

## AreaTrigger

**Associated namespace:** [sm.areaTrigger](../Static-Functions/sm.areaTrigger)

A userdata object representing an **area trigger** in the game.

**Values:**

- `id` (int)  

	- `Get`: The ID of the `AreaTrigger`.


**Operations:**

| Operation   | Description |
| ----------- | ----------- |
| `AreaTrigger` == `AreaTrigger` | Checks if two instances of `AreaTrigger` refer to the same `AreaTrigger`. |

## Functions

### bindOnEnter

```lua
AreaTrigger:bindOnEnter( callback, object = nil )
```

Binds an area trigger's `onEnter` event to a custom callback.    
The `onEnter` event is triggered when an object enters the trigger area.

**The callback receives:**
- `self` (table): The class instance.
- `trigger` ([AreaTrigger](../Userdata/AreaTrigger)): The area trigger instance.
- `results` (table): A table of objects that entered the trigger area.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.
- `callback` (string): 	The name of the Lua function to bind.
- `object` (table): The object that will receive the callback. (optional)

```lua title="Example Usage"
MyClass = class()

function MyClass.server_onCreate( self )
    local position = self.shape:getWorldPosition()
    local size = sm.vec3.new( 1, 1, 1 )

    self.myTrigger = sm.areaTrigger.createBox( size, position )
    self.myTrigger:bindOnEnter( "onEnter" )
end

function MyClass.onEnter( self, trigger, results )
    for k, object in ipairs( results ) do
        print( object, "just entered" )
    end
end
```

---

### bindOnExit

```lua
AreaTrigger:bindOnExit( callback, object = nil )
```

Binds an area trigger's `onExit` event to a custom callback.  
The `onExit` event is triggered when an object leaves the trigger area.

**The callback receives:**
- `self` (table): The class instance.
- `trigger` ([AreaTrigger](../Userdata/AreaTrigger)): The area trigger instance.
- `results` (table): A table of objects that left the trigger area.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.
- `callback` (string): 	The name of the Lua function to bind.
- `object` (table): The object that will receive the callback. (optional)

```lua title="Example Usage"
MyClass = class()

function MyClass.server_onCreate( self )
    local position = self.shape:getWorldPosition()
    local size = sm.vec3.new( 1, 1, 1 )

    self.myTrigger = sm.areaTrigger.createBox( size, position )
    self.myTrigger:bindOnExit( "onExit" )
end

function MyClass.onExit( self, trigger, results )
    for k, object in ipairs( results ) do
        print( object, "just left" )
    end
end
```

---

### bindOnStay

```lua
AreaTrigger:bindOnStay( callback, object = nil )
```

Binds an area trigger's `onStay` event to a custom callback.  
The `onStay` event is triggered every tick as long as an object is staying inside of the trigger area.

**The callback receives:**
- `self` (table): The class instance.
- `trigger` ([AreaTrigger](../Userdata/AreaTrigger)): The area trigger instance.
- `results` (table): A table of objects that are in the trigger area.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.
- `callback` (string): 	The name of the Lua function to bind.
- `object` (table): The object that will receive the callback. (optional)

```lua title="Example Usage"
MyClass = class()

function MyClass.server_onCreate( self )
    local position = self.shape:getWorldPosition()
    local size = sm.vec3.new( 1, 1, 1 )

    self.myTrigger = sm.areaTrigger.createBox( size, position )
    self.myTrigger:bindOnExit( "onStay" )
end

function MyClass.onStay( self, trigger, results )
    print( #results, "objects inside trigger area" )
end
```

---

### bindOnProjectile

```lua
AreaTrigger:bindOnProjectile( callback, object = nil )
```

Binds an area trigger's `onProjectile` event to a custom callback.  
The `onProjectile` event is triggered if a projectile collides with the trigger area.

**The callback receives:**
- `self` (table): The class instance.
- `trigger` ([AreaTrigger](../Userdata/AreaTrigger)): The area trigger instance.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The position in world space where the projectile hit the trigger.
- `airTime` (number): The time, in seconds, that the projectile spent flying before the hit.
- `velocity` ([Vec3](/Shared-Features/Userdata/Vec3)): The velocity of the projectile at impact.
- `projectileName` (string): The name of the projectile. (Legacy, use uuid instead)
- `shooter` ([Player](../Userdata/Player)/[Unit](../Userdata/Unit)/[Shape](../Userdata/Shape)/[Harvestable](../Userdata/Harvestable)/nil): The shooter. Can be a Player, Unit, Shape, Harvestable or nil if unknown.
- `damage` (int): The damage value of the projectile.
- `customData` (any): A Lua object that can be defined at shoot time using `sm.projectile.customProjectileAttack` or any other custom version.
- `normal` ([Vec3](/Shared-Features/Userdata/Vec3)): The normal at the point of impact.
- `uuid` ([Uuid](/Shared-Features/Userdata/Uuid)): The uuid of the projectile.

**The callback must return:**
- (boolean): Whether the projectile should be erased or not. `true` = erase the projectile, `false` = keep the projectile.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.
- `callback` (string): 	The name of the Lua function to bind.
- `object` (table): The object that will receive the callback. (optional)

```lua title="Example Usage"
MyClass = class()

function MyClass.server_onCreate( self )
    local position = self.shape:getWorldPosition()
    local size = sm.vec3.new( 1, 1, 1 )

    self.myTrigger = sm.areaTrigger.createBox( size, position )
    self.myTrigger:bindOnProjectile( "onProjectile" )
end

function MyClass.onProjectile( self, trigger, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid )
    print( "Detected projectile!" )
	print( "Trigger:", trigger )
	print( "World Position:", position )
	print( "Time spent flying:", airTime, "seconds" )
	print( "Velocity:", velocity )
	print( "Shooter:", shooter )
	print( "Damage:", damage )

	return true	--true or false, true = the projectile stays, false = the projectile is erased
end
```

---

### getContents

```lua
AreaTrigger:getContents()
```

Gets the contents of the area trigger.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.

**Returns:**
- (table): The objects inside the trigger area.

---

### getHostInteractable

```lua
AreaTrigger:getHostInteractable()
```

Returns the attached host [interactable](../Userdata/Interactable).

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.

**Returns:**
- ([Interactable](../Userdata/Interactable)): The area trigger's host interactable.

---

### getId

```lua
AreaTrigger:getId()
```

Returns the id of the area trigger.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.

**Returns:**
- (int): The area trigger's id.

---

### getShapes

```lua
AreaTrigger:getShapes()
```

Returns the shapes inside the trigger area.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.

**Returns:**
- (table): The shapes inside the trigger area.

---

### getSize

```lua
AreaTrigger:getSize()
```

Returns the size of an area trigger.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The area trigger's size.

---

### getUserData

```lua
AreaTrigger:getUserData()
```

Returns the userdata set on the area trigger.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.

**Returns:**
- (table): The area trigger's userdata.

---

### getWorldMax

```lua
AreaTrigger:getWorldMax()
```

Returns the world max corner position of an area trigger.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The area trigger's max corner position.

---

### getWorldMin

```lua
AreaTrigger:getWorldMin()
```

Returns the world min corner position of an area trigger.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The area trigger's min corner position.

---

### getWorldPosition

```lua
AreaTrigger:getWorldPosition()
```

Returns the world position of an area trigger.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.

**Returns:**
- ([Vec3](/Shared-Features/Userdata/Vec3)): The area trigger's world position.

---

### getWorldRotation

```lua
AreaTrigger:getWorldRotation()
```

Returns the world rotation of an area trigger.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.

**Returns:**
- ([Quat](/Shared-Features/Userdata/Quat)): The area trigger's world rotation.

---

### hasVoxelTerrainContact

```lua
AreaTrigger:hasVoxelTerrainContact()
```

Returns true if the AreaTrigger is in contact with destructable terrain.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.

**Returns:**
- (boolean): Destructable terrain contact.

---

### setShapeDetection

```lua
AreaTrigger:setShapeDetection( detectShapes )
```

Shape detection is off by default.
When set to true the area trigger can calculate which shapes are inside of the
trigger area with a call to [AreaTrigger:getShapes()](#getShapes)

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.
- `detectShapes` (boolean): Whether shape detection is on or off.

---

### setSize

```lua
AreaTrigger:setSize( size )
```

Sets the new size of an area trigger.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.
- `size` ([Vec3](/Shared-Features/Userdata/Vec3)): The area trigger's new size.

---

### setWorldPosition

```lua
AreaTrigger:setWorldPosition( position )
```

Sets the new world position of an area trigger.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3)): The area trigger's new world position.

---

### setWorldRotation

```lua
AreaTrigger:setWorldRotation( rotation )
```

Sets the new world rotation of an area trigger.

**Parameters:**
- `AreaTrigger` ([AreaTrigger](../Userdata/AreaTrigger)): The AreaTrigger.
- `rotation` ([Quat](/Shared-Features/Userdata/Quat)): The area trigger's new world rotation.

---

