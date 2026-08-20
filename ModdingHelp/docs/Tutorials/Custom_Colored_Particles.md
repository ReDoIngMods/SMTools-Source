---
sidebar_position: 4
title: Custom Colored Particles with Lua
hide_title: true
sidebar-label: 'Custom Colored Particles with Lua'
---

### Custom Colored Particles with Lua
Written by Natejoestev, you can find me in the Guild or<br></br>
Scrap Mechanic Maps on discord.<br></br>

This tutorial will show you how to make a custom particle that can be colored with the [effect class](https://scrapmechanictools.com/lua/Game-Script-Environment/Userdata/Effect).

It will replace the transparency of the particle dif texture with the given color.

The smoke effects had helped me a lot while searching for examples.<br></br>
Always look at the game files kids.

> Note that this tutorial assumes that you already know some things about <br></br>
modding SM and the particle system.

### Table of Contents

 - [Required Resources](#required-resources) - Things you need to follow this tutorial
 - [Modifying the Particle](#modifying-the-particle) - Modify the particle to allow color changing
 - [Changing color with Lua](#changing-color-with-lua) - How to change the color with Lua

### Required Resources

 - [Scrap Mechanic](https://store.steampowered.com/app/387990/)
 - *Scrap Mechanic Mod Tool* you can find for free in the steam library
 - [VS Code](https://code.visualstudio.com/) or any other code editor that can handle JSON and Lua files.
 - A particle and effect to be used (documentation uses `my_particle` and `My - Effect`)

### Modifying the Particle

> Note: I have not tested for multiple emitters, if you need help, contact me.

First, open `Engine Parameters` and make sure `Color` is checked<br></br>
and set `Color Fraction` to `1.0`.

![Image of Particle Editor](/img/ParticleEditor_enableColor.png)

Then save it with `Ctrl+s`. You can now close the editor.<br></br>

Open `/particles/my_particle.json` and add 
```json
{"control_point":[[0.0,[1.0,1.0,1.0,0.0]],[0.050,[1.0,1.0,1.0,1.0]],[0.495770,[1.0,1.0,1.0,1.0]],[1.0,[1.0,1.0,1.0,0.0]]],"guid":2,"name":"Color"}
```
to `system:emitters[0]:effects` (this should be an array).<br></br>
This adds a color effect to the emitter,<br></br>
but the reason for copying the json is because it requires specific data.
> Note: `guid`, should be the index of the chunk you added (indexing starts from 1)<br></br>
    So if there is 4 elements including the one added, you would put `4`.


### Changing color with Lua

You can set the color like this:
```lua
effect:setParameter('Color', sm.color.new(--[[Your Color]]))
```
