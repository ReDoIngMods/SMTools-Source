---
sidebar_position: 27
title: sm.joint
hide_title: true
sidebar-label: 'sm.joint'
---

## sm.joint

**Associated object type:** [Joint](../Userdata/Joint)

A [Joint](../Userdata/Joint) is a part that can be built by a player that is used to connect bodies.

There are multiple joint types:  
- The **bearing** allows two bodies to revolve freely around each other.
- The **piston** extends and contracts to change the distance between two bodies.

### Constants

#### types

An array containing the type names of the available joints.

```lua
sm.joint.types = {
    "bearing",
    "piston"
}
```
