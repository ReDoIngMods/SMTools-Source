---
sidebar_position: 25
title: sm.interactable
hide_title: true
sidebar-label: 'sm.interactable'
---

## sm.interactable

**Associated object type:** [Interactable](../Userdata/Interactable)

An [Interactable](../Userdata/Interactable) shape is any placeable part that has additional functionality or abilities.  
The player can interact with an interactable shape by e.g. pressing `E` on it, or connect it to other interactables with the Connect Tool.

### Constants

#### types

An array containing the names of all possible types that an [Interactable](../Userdata/Interactable) can be.

```lua
sm.interactable.types = {
    "electricEngine",
    "gasEngine",
    "steering",
    "seat",
    "controller",
    "button",
    "lever",
    "sensor",
    "thruster",
    "radio",
    "horn",
    "tone",
    "logic",
    "timer",
    "particlePreview",
    "spring",
    "pointLight",
    "spotLight",
    "chest",
    "itemStack",
    "scripted",
    "piston",
    "simpleInteractive",
    "camera",
    "waypoint",
    "survivalThruster",
    "survivalPiston",
    "survivalSpring",
    "survivalSequence",
    "survivalSensor"
}
```

---

#### actions

A table containing all input actions that can be received by [ShapeClass.client_onAction](../Script-Classes/ShapeClass#client_onaction).

```lua
sm.interactable.actions = {
    none = 0,
    left = 1,
    right = 2,
    forward = 3,
    backward = 4,
    item0 = 5,
    item1 = 6,
    item2 = 7,
    item3 = 8,
    item4 = 9,
    item5 = 10,
    item6 = 11,
    item8 = 13,
    item7 = 12,
    item9 = 14,
    use = 15,
    jump = 16,
    exit = 17,
    attack = 18,
    create = 19,
    zoomIn = 20,
    zoomOut = 21
}
```

---

#### connectionType

A table containing standard logic connection types for interactables.

```lua
sm.interactable.connectionType = {
    none = 0,
    logic = 1,
    power = 2,
    bearing = 4,
    seated = 8,
    piston = 16,
    gasoline = 256,
    electricity = 512,
    water = 1024,
    ammo = 2048
}
```

---

#### steering

Flags used with the `steering` component.

```lua
sm.interactable.steering = {
    left = 1,
    right = 2,
    forward = 4,
    backward = 8
}
```

---
