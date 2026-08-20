---
sidebar_position: 4
title: sm.log
hide_title: true
sidebar-label: 'sm.log'
---

## sm.log

Used for logging information from scripts to the game log file and [developer console](/#developer-console).

### Functions

#### error

```lua
sm.log.error(...)
```

Logs an error message.  
Works the same as [print](/Globals#print), except the text is colored red and marked as an error.

**Parameters:**
- `...` (any): The data to print.

---

#### info

```lua
sm.log.info(...)
```

Logs an information message.  
Works the same as [print](/Globals#print), except the text is colored white and marked as info.

**Parameters:**
- `...` (any): The data to print.

---

#### warning

```lua
sm.log.warning(...)
```

Logs a warning message.  
Works the same as [print](/Globals#print), except the text is colored yellow and marked as a warning.

**Parameters:**
- `...` (any): The data to print.

---
