---
sidebar_position: 3
title: sm.audio
hide_title: true
sidebar-label: 'sm.audio'
---

## sm.audio

The audio library is used to play sound effects in the game.

:::info note
This library only produces sound for the local [client](/#client).  
This is useful for small sound effects such as GUI button sounds.

For more information about sound and particle effects that affect all players, see [sm.effect](../Static-Functions/sm.effect).
:::

:::caution warning
Direct audio use is deprecated, use an audio [Effect](../Userdata/Effect) instead.
:::

### Constants

#### soundList

An array containing all sound effects that can be played with this library.

```lua
sm.audio.soundList = {   
    "Ambient - Birds",
    "Ambient - Challenge",
    "Ambient - Field",
    "Blueprint - Build",
    "Blueprint - Camera",
    "Blueprint - Close",
    "Blueprint - Delete",
    "Blueprint - Open",
    "Blueprint - Save",
    "Blueprint - Select",
    "Blueprint - Share",
    "Brake",
    "Button off",
    "Button on",
    "Challenge - Fall",
    "Challenge - Start",
    "Challenge - Supervisor generic",
    "Character crouch",
    "Character get up",
    "Character hit",
    "Character jump",
    "Character land",
    "Character movement",
    "Character movement crouched",
    "Character wind",
    "Collision - Debris",
    "Collision - Multiple",
    "Collision - Rolling",
    "Collision - Single",
    "Collision - Sliding",
    "Collision - Vehicle",
    "ConnectTool",
    "ConnectTool - Equip",
    "ConnectTool - Idle",
    "ConnectTool - Released",
    "ConnectTool - Rotate",
    "ConnectTool - Selected",
    "ConnectTool - Unequip",
    "Construction - Block attached to joint",
    "Construction - Block placed",
    "Construction - Resize",
    "Dancebass",
    "Dancedrum",
    "Dancepad",
    "Dancevoice",
    "Destruction - Block destroyed",
    "Destruction - Resize",
    "ElectricEngine",
    "GUI Backpack closed",
    "GUI Backpack opened",
    "GUI Inventory highlight",
    "GUI Item drag",
    "GUI Item released",
    "GUI Quickbar highlight",
    "GUI Shape rotate",
    "Gas Explosion",
    "Gas Leak",
    "GasEngine",
    "Handbook - Close",
    "Handbook - Equip",
    "Handbook - Highlight",
    "Handbook - Open",
    "Handbook - Turn page",
    "Handbook - Unequip",
    "Horn",
    "Lever off",
    "Lever on",
    "Lift - Pickup object",
    "Lift placed",
    "Lift usage",
    "Music",
    "PaintTool - Close",
    "PaintTool - ColorPick",
    "PaintTool - Equip",
    "PaintTool - Erase",
    "PaintTool - Open",
    "PaintTool - Paint",
    "PaintTool - Reload",
    "PaintTool - Unequip",
    "Phaser",
    "Piston",
    "PotatoRifle - Equip",
    "PotatoRifle - NoAmmo",
    "PotatoRifle - Reload",
    "PotatoRifle - Shoot",
    "PotatoRifle - Unequip",
    "Radio",
    "RaftShark",
    "Retrobass",
    "Retrodrum",
    "Retrofmblip",
    "Retrovoice",
    "Retrowildblip",
    "Reverb - Challenge",
    "Reverb - Field",
    "Seat seated",
    "Seat unseated",
    "Sensor off",
    "Sensor on",
    "SequenceController",
    "SequenceController change rotation",
    "Sledgehammer - Equip",
    "Sledgehammer - Swing",
    "Sledgehammer - Unequip",
    "Suspension",
    "Thruster",
    "Thruster dust",
    "Toilet seated",
    "Toilet unseated",
    "Weapon - Hit",
    "WeldTool - Case 1",
    "WeldTool - Case 2",
    "WeldTool - Equip",
    "WeldTool - Error",
    "WeldTool - Sparks",
    "WeldTool - Unequip",
    "WeldTool - Weld"
}
```

---

### Functions

#### play

```lua
sm.audio.play(sound, position)
```
`Client-Only`  

Plays a sound.

If a position is specified, the sound will play at the given coordinates in the world.  
Otherwise, the sound will play normally.

For a list of available sounds to play, see [sm.audio.soundList](#soundlist).

**Parameters:**
- `sound` (string): The name of the sound.
- `position` ([Vec3](/Shared-Features/Userdata/Vec3), optional): The world position of the sound.

---
