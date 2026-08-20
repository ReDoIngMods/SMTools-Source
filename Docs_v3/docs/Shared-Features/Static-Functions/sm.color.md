---
sidebar_position: 2
title: sm.color
hide_title: true
sidebar-label: 'sm.color'
---

## sm.color

**Associated object type:** [Color](../Userdata/Color)

A color is represented using a red, green, blue and alpha component.  
Colors are prominently used for blocks and parts that are colored by the Paint Tool.

To create one, use [sm.color.new](#new). It is possible to use hex `0xRRGGBBAA`, RGBA `0.5, 0.5, 0.5, 1.0` or strings `"RRGGBBAA"`.

### Functions

#### new

```lua
local color = sm.color.new(r_hex_string, g, b, a)
```

Creates a new color object.

**Parameters:**
- `r_hex_string` (number/hexInt/string): The red value if using RGBA or a hex integer/color string if not.
- `g` (number): The green value, if using RGBA.
- `b` (number): The blue value if using RGBA.
- `a` (number, optional): The alpha (transparency) value if using RGBA.

**Returns:**
- `color` ([Color](../Userdata/Color)): The created color object.

---

#### getR

```lua
local r = sm.color.getR(color)
```

Returns the red component of the given color object.  
This does the same as accessing [Color.r](../Userdata/Color#r), but can have better performance in certain cases.

**Parameters:**
- `color` ([Color](../Userdata/Color)): The color.

**Returns:**
- `r` (number): The red component value.

---

#### getG

```lua
local g = sm.color.getG(color)
```

Returns the green component of the given color object.  
This does the same as accessing [Color.g](../Userdata/Color#g), but can have better performance in certain cases.

**Parameters:**
- `color` ([Color](../Userdata/Color)): The color.

**Returns:**
- `g` (number): The green component value.

---

#### getB

```lua
local b = sm.color.getB(color)
```

Returns the blue component of the given color object.  
This does the same as accessing [Color.b](../Userdata/Color#b), but can have better performance in certain cases.

**Parameters:**
- `color` ([Color](../Userdata/Color)): The color.

**Returns:**
- `b` (number): The blue component value.

---

#### getA

```lua
local a = sm.color.getA(color)
```

Returns the alpha/transparency component of the given color object.  
This does the same as accessing [Color.a](../Userdata/Color#a), but can have better performance in certain cases.

**Parameters:**
- `color` ([Color](../Userdata/Color)): The color.

**Returns:**
- `a` (number): The alpha component value.

---

#### setR

```lua
sm.color.setR(color, r)
```

Sets the red component of the given color object.  
This does the same as setting [Color.r](../Userdata/Color#r), but can have better performance in certain cases.

**Parameters:**
- `color` ([Color](../Userdata/Color)): The color.
- `r` (number): The red component value.

---

#### setG

```lua
sm.color.setG(color, g)
```

Sets the green component of the given color object.  
This does the same as setting [Color.g](../Userdata/Color#g), but can have better performance in certain cases.

**Parameters:**
- `color` ([Color](../Userdata/Color)): The color.
- `g` (number): The green component value.

---

#### setB

```lua
sm.color.setB(color, b)
```

Sets the blue component of the given color object.  
This does the same as setting [Color.b](../Userdata/Color#b), but can have better performance in certain cases.

**Parameters:**
- `color` ([Color](../Userdata/Color)): The color.
- `b` (number): The blue component value.

---

#### setA

```lua
sm.color.setA(color, a)
```

Sets the alpha/transparency component of the given color object.  
This does the same as setting [Color.a](../Userdata/Color#a), but can have better performance in certain cases.

**Parameters:**
- `color` ([Color](../Userdata/Color)): The color.
- `a` (number): The alpha component value.

---
