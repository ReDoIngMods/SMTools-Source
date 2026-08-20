---
sidebar_position: 10
title: ScriptableObjectClass
hide_title: true
sidebar-label: 'ScriptableObjectClass'
---

## ScriptableObjectClass

A script class that does not represent any particular game object.

This object may exist "in" a [World](../Userdata/World), or not.  
If it is not in a world, its script cannot use world-dependent functions, such as [sm.physics](../Static-Functions/sm.physics).

Like other game objects, the scriptable object is automatically synchronized to all clients.

The class can receive events sent with [sm.event.sendToScriptableObject](../Static-Functions/sm.event#sendtoscriptableobject).

### Instance Members

These members are set by the engine when instantiating the script class and are unique to each new instance of it.

#### scriptableObject

`self.scriptableObject` ([ScriptableObject](../Userdata/ScriptableObject)):  
The world that owns this script instance.

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
JSON data parsed from the object's JSON file entry.

---

#### params

`self.params` (any):  
Parameter passed to [sm.scriptableObject.createScriptableObject](../Static-Functions/sm.scriptableObject#createscriptableobject).

---

### Class Constants

These constants may be set in the global script class table to configure certain parts of the class.  
Note that changing these on an already-existing script instance will **not** update the settings.

#### isSaveObject

`ScriptableObjectClass.isSaveObject` (boolean):  
Sets whether this [ScriptableObject](../Userdata/ScriptableObject) is saved to the save file database or not (default: `false`).  
If enabled, the [ScriptableObject](../Userdata/ScriptableObject) is recreated when loading a world.  
If disabled, the [ScriptableObject](../Userdata/ScriptableObject) is temporary and must be explicitly recreated upon a world reload.

:::info note
If disabled, [self.storage](#storage) cannot be used.
:::

---

### Callbacks

This class does not implement any special callbacks.  
See [Shared Server Callbacks](SharedServerCallbacks) and [Shared Client Callbacks](SharedServerCallbacks) for the available callbacks.

---
