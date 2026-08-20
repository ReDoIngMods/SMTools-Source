---
sidebar_position: 17
title: Network
hide_title: true
sidebar-label: 'Network'
---

## Network

A userdata object representing a **network** object.

Network is used for sending data between scripts running on [server](/lua/#server) and [client](/lua/#client).  
This allows the server to call a function on the client with one optional argument, and vice versa.

:::info note
The network object is only accessible via `self.network` in scripted objects (see [self.network](../Script-Classes/ShapeClass#network)).
:::

:::caution warning
Network allows any Lua data to be sent between the host and other players in real-time.  
This may result in **high latency** and **lag** in multiplayer.

To avoid lag and minimize bandwidth usage, consider only sending data when necessary,  
when data has changed, and attempt to send as little amount of data as possible.
:::

:::caution warning
Due to a bug in the serializer, attempting to transfer an array table containing an empty string value,  
e.g. `{1, 2, "", 3}`, will cause the serializer to glitch out and transfer invalid data, causing errors.
:::

## Functions

### sendToClient

```lua
network:sendToClient( client, callback, data )
```
`Server-Only`  

Sends a network event from the server to a single client.  
This will run the callback method on the client with one optional argument.

**Parameters:**
- `network` ([Network](../Userdata/Network)): The network.
- `client` ([Player](../Userdata/Player)): The client player (or the host).
- `callback` (string): The name of the client function.
- `data` (any): Optional extra data to send.

---

### sendToClients

```lua
network:sendToClients( callback, data )
```
`Server-Only`  

Sends a network event from the server to all clients.  
This will run the callback method on the clients with one optional argument.

**Parameters:**
- `network` ([Network](../Userdata/Network)): The network.
- `callback` (string): The name of the client function.
- `data` (any): Optional extra data to send.

```lua title="Example Usage"
-- Example of calling client function over network
MyHorn = class()

function MyHorn.server_onMelee( self, position, attacker, damage, power, direction, normal )
	self.network:sendToClients( 'client_hit', position )
end
 
function MyHorn.client_hit( self, position )
	-- Play sound
	sm.audio.play( 'Horn', position )
end
```

---

### sendToServer

```lua
network:sendToServer( callback, data )
```
`Client-Only`  

Sends a network event from the client to the server.  
This will run the callback method on the server with one optional argument.

The callback function receives one additional argument, which is the [Player](../Userdata/Player) of the client  
that sent the event.

**Parameters:**
- `network` ([Network](../Userdata/Network)): The network.
- `callback` (string): The name of the server function.
- `data` (any): Optional extra data to send.

```lua title="Example Usage"
-- Example of calling server function over network
MySwitch = class()

function MySwitch.client_onInteract( self, char, lookAt )
	if lookAt then
		self.network:sendToServer( 'server_toggle' )
	end
end

function MySwitch.server_toggle( self )
	-- Toggle on and off
	self.interactable.active = not self.interactable.active
end
```

---

### setClientData

```lua
network:setClientData( data, channel )
```
`Server-Only`  

Sets a lua object that will automatically be synchronized to clients.

Scripts which use this feature needs to implement `client_onClientDataUpdate`.

`client_onClientDataUpdate` will be called on the client whenever the data has changed,  
including setting the data for the first time.

Channel 1 will be received before channel 2 if both are updated.

:::info note
The callback function on the client is **only** called if the  
data that is being set **has changed**.  
If the data being set is **the same**, the client callback is **not** called.
:::

**Parameters:**
- `network` ([Network](../Userdata/Network)): The network.
- `data` (any): The data to set.
- `channel` (int): The data channel (1 or 2, defaults to 1).

```lua title="Example Usage"
MyEngine = class()

function MyEngine.server_onCreate( self )
	self.network:setClientData( { "gear" = 1 } )
end

function MyEngine.client_onClientDataUpdate( self, data, channel )
	self.interactable:setPoseWeight( 0, data.gear / self.maxGears )
end
```

---











