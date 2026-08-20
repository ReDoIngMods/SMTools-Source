---
sidebar_position: 5
title: sm.noise
hide_title: true
sidebar-label: 'sm.noise'
---

## sm.noise

The noise library contains methods related to random number and noise generation.  
These are commonly used in terrain generation, but have other uses as well.

### Functions

#### floatNoise2d

```lua
local value = sm.noise.floatNoise2d(x, y, seed)
```

A 2D number noise function.  
This is a classic [Value Noise](https://en.wikipedia.org/wiki/Value_noise) implementation.

**Parameters:**
- `x` (number): The X value.
- `y` (number): The Y value.
- `seed` (int): The seed.

**Returns:**
- `value` (number): The generated noise value.

---

#### gunSpread

```lua
local dir = sm.noise.gunSpread(direction, spreadAngle)
```

Returns a directional vector with a random spread given by a [normal distribution](#randomnormaldistribution).

**Parameters:**
- `direction` ([Vec3](/Shared-Features/Userdata/Vec3)): The direction.
- `spreadAngle` (number): The maximum spread angle in degrees.

**Returns:**
- `dir` ([Vec3](/Shared-Features/Userdata/Vec3)): The spread direction.

---

#### intNoise2d

```lua
local value = sm.noise.intNoise2d(x, y, seed)
```

A 2D integer noise function.  
Note that this is more of a simple hashing function rather than true noise.  
This has the advantage of better performance, at the cost of lower noise quality.

**Parameters:**
- `x` (int): The X value.
- `y` (int): The Y value.
- `seed` (int): The seed.

**Returns:**
- `value` (int): The generated noise value.

---

#### octaveNoise2d

```lua
local value = sm.noise.octaveNoise2d(x, y, octaves, seed)
```

A 2D Octave Noise function.  
This works by layering several noise values on top of each other with reduced scale and different seeds in each layer.  
This is functionally equivalent to the following Lua code:

```lua
local OctaveSeeds = {
	0xD3491, 0x1B313C4F, 0x8713E4, 0x90A4C2,
	0x20C9D74D, 0x112480, 0x1046A, 0xF182B8C,
	0x4E34D62, 0x33030409, 0x3186919E, 0x32C98386,
	0x37AAE6EB, 0x2CDC7201, 0x942A2, 0x1561CBB1
}

function OctaveNoise2D(x, y, octaves, seed)
	assert(type(x) == "number", "'x' must be a number!")
	assert(type(y) == "number", "'y' must be a number!")
	assert(type(octaves) == "number" and math.floor(octaves) == octaves, "'octaves' must be an integer!")
	assert(type(seed) == "number" and math.floor(seed) == seed, "'seed' must be an integer!")

	local multiplier = 1.0
	local noiseTotal = 0.0
	if octaves > 0 then
		local oct = 0
		while oct < octaves do
			local seedIndex = oct < 15 and oct or 15
			local noise = sm.noise.floatNoise2d(
				(1.0 / multiplier) * x, (1.0 / multiplier) * y,
				OctaveSeeds[seedIndex - 1] + seed
			)

			oct = oct + 1
			noise = noise * multiplier
			multiplier = multiplier + multiplier
			noiseTotal = noiseTotal + noise
		end
	end
	return noiseTotal / (multiplier - 1.0)
end
```

:::caution warning
If `octaves` is zero, a NaN value is generated!
:::

**Parameters:**
- `x` (number): The X value.
- `y` (number): The Y value.
- `octaves` (int): The number of octaves.
- `seed` (int): The seed.

**Returns:**
- `value` (number): The generated noise value.

---

#### perlinNoise2d

```lua
local value = sm.noise.perlinNoise2d(x, y, seed)
```

A 2D [Perlin Noise](https://en.wikipedia.org/wiki/Perlin_noise) function.

**Parameters:**
- `x` (number): The X value.
- `y` (number): The Y value.
- `seed` (int): The seed.

**Returns:**
- `value` (number): The generated noise value.

---

#### randomNormalDistribution

```lua
local value = sm.noise.randomNormalDistribution(mean, deviation)
```

Returns a random number according to the [random normal distribution](https://en.wikipedia.org/wiki/Normal_distribution).

Values near the `mean` are the most likely.

Standard `deviation` affects the dispersion of generated values from the mean.

**Parameters:**
- `mean` (number): The mean.
- `deviation` (number): The deviation.

**Returns:**
- `value` (number): The random number.

---

#### randomRange

```lua
local value = sm.noise.randomRange(min, max)
```

Returns a random number N such that `a <= N <= b`.  
This is functionally equivalent to the following Lua code:

```lua
function RandomRange(min, max)
	local RAND_MAX = 32767
	local oneDivMax = 3.051851e-05 -- 1.0 / RAND_MAX
	local rnd = math.random(0, RAND_MAX)
	return rnd * (max - min) * oneDivMax + min
end
```

**Parameters:**
- `min` (number): The lower bound.
- `max` (number): The upper bound.

**Returns:**
- `value` (number): The random number.

---

#### simplexNoise1d

```lua
local value = sm.noise.simplexNoise1d(x)
```

A 1D [Simplex Noise](https://en.wikipedia.org/wiki/Simplex_noise) function.

**Parameters:**
- `x` (number): The X value.

**Returns:**
- `value` (number): The generated noise value.

---

#### simplexNoise2d

```lua
local value = sm.noise.simplexNoise2d(x, y)
```

A 2D [Simplex Noise](https://en.wikipedia.org/wiki/Simplex_noise) function.

**Parameters:**
- `x` (number): The X value.
- `y` (number): The Y value.

**Returns:**
- `value` (number): The generated noise value.

---
