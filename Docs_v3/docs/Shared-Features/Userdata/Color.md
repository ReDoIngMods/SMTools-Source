---
sidebar_position: 1
title: Color
hide_title: true
sidebar-label: 'Color'
---

## Color

**Associated namespace:** [sm.color](../Static-Functions/sm.color)

A userdata object representing an RGBA color value.

### Member Values

#### r

`Color.r` (number): The red component value.

#### g

`Color.g` (number): The green component value.

#### b

`Color.b` (number): The blue component value.

#### a

`Color.a` (number): The alpha/transparency value.

### Operators

| Operator    | Description |
| ----------- | ----------- |
| [Color](Color) + [Color](Color) | Returns the component-wise sum of two colors. |
| [Color](Color) - [Color](Color) | Returns the component-wise difference of two colors. |
| [Color](Color) / [Color](Color) | Returns the component-wise quotient of two colors. |
| [Color](Color) / number | Returns the component-wise quotient of a color and a scalar. |
| [Color](Color) * [Color](Color) | Returns the component-wise product of two colors. |
| [Color](Color) * number | Returns the component-wise product of a color and a scalar. |
| [Color](Color) == [Color](Color) | Checks if two colors are equal. |
| tostring([Color](Color)) | Converts the color to a hex color string. |

### Member Functions

#### getHexStr

```lua
local hex = color:getHexStr()
```

Returns the color's value as a hex color string.

**Parameters:**
- `color` ([Color](color)): The color.

**Returns:**
- `hex` (string): The hex color string.
