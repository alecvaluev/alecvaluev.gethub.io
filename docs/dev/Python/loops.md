# Loops

## If...else

```py
a = 200
b = 33

if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
else:
  print("a is greater than b")
```

### Shorthand

```py
if a > b: print("a is greater than b")
```

### Short Hand If ... Else

```py
print("A") if a > b else print("B")
```

### Ternary Operators / Conditional Expressions
```py
print("A") if a > b else print("=") if a == b else print("B")
```

### `pass` Statement

if statements cannot be empty, but if you for some reason have an if statement with no content, put in the pass statement to avoid getting an error

```py
if b > a:
  pass
```

## While

### `break`/`continue` Statement
```py
i = 1
while i < 6:
  print(i)
  if i == 3:
    break # continue
  i += 1
```

### `else` Statement

can run a block of code once when the condition no longer is true:

```py
i = 1
while i < 6:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")
```

## For

### `break`/`continue`

```py
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
  if x == "banana":
    break #continue
```
### range()

```py
for x in range(6):
  print(x)
```

defaults to increment the sequence by 1, however it is possible to specify the increment value by adding a third parameter: range(2, 30, 3):

### `else`

```py
for x in range(6):
  print(x)
else:
  print("Finally finished!")
```

:::warning Note
The else block will NOT be executed if the loop is stopped by a break statement.
:::


### `pass`

```py
for x in [0, 1, 2]:
  pass
```
