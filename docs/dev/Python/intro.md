# Python

- interpreted language - code can be executed as soon as it is written
- uses indentation
- created by Guido van Rossum - 1991

## Executing

```
C:> python hello.py
```

## Print

```py
print("Hello")
```

### Multiple Data

By default - text in a new line, separate them using commas

```py
print(50, 1000, 3.142, "Hello World")
```
on the same line use end=" " - The value of end is appended to the output

```py
print("Hello", end=" ") 
```

## Comments

> # signle line
> 
> """multiple lines"""

## Vars
variables:
- mutable
- do not need to be declared
- can change type

### Casting

```py
x = str(3) # int(), float()
```
### Get the type

type(x)

### Naming Convention
- must start with a letter or the underscore character
- case sensitive
- cannot start with a number
- only alpha-numeric characters and underscores
- no spaces


### Many Values tp Multiple Vars

:::warning Note
Make sure the number of variables matches the number of values
:::

```py
x, y, z = "Orange", "Banana", "Cherry"
```

### Unpack a Collection

> Unoacking -  extracting the values into variables from a collection of values in a list, tuple etc

```py
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
```

## Global Vars

> created outside of a function

- If you create a variable with the same name inside a function, this variable will be local, and can only be used inside the function


### `global` keyword

- To create a global variable inside a function, you can use the global keyword.
- if you want to change a global variable inside a function.

```py
def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)
```


## Data Types
built-in by default, in these categories:
Text Type:	str
Numeric Types:	int, float, complex
Sequence Types:	list, tuple, range
Mapping Type:	dict
Set Types:	set, frozenset
Boolean Type:	bool
Binary Types:	bytes, bytearray, memoryview
None Type:	NoneType

### Numbers

- int (unlimited len)
- float (can also be scientific numbers with an "e" to indicate the power of 1 35e3/12E4)
- complex (written with a "j" as the imaginary part - x = 3+5j)

Conversions: int(), float(), complex()

:::warning Note
cannot convert complex numbers into another number type
:::

### Random

```py
import random

print(random.randrange(1, 10)) # between  1 - 9
```

## String

> 'a', "a", '''a''', """a"""

Strings in Python are arrays of bytes representing unicode characters

:::warning Note
Python does not have a character data type, a single character is simply a string with a length of 1.
:::

```py
a = "Hello, World!"
print(a[1]) #e
```
### Looping

```py
for x in "banana":
  print(x)
```

### Length

> len()

### Check String

if a certain phrase or character is present in a str

> in / not in

```py
print("free" in txt)

# or in if 
# if "free" in txt:
```

### Slicing
[start : end], not including end

### Slice From the Start/To the End

Leave out the start idx - [:5]

Leave out the end idx - [2:]

### Negative Idx
to slice from the end
```py
b = "Hello, World!"
print(b[-5:-2]) #orl
```

### Stirng Methods
they return new value

[See All Methods](https://www.w3schools.com/python/python_strings_methods.asp)

- .upper()
- .lower()
- .strip()
- .replace('a', 'b')
- .split(',')

### String Concatenation

> use +

:::warning Note
cannot combine strings and numbers
:::

BUT by using the format() method!

```py
age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))

quantity = 3
itemno = 567
price = 49.95
myorder = "I want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))
```

You can use index numbers {0}

```py
myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
print(myorder.format(quantity, itemno, price))
```

### Escape Chars
| Code	| Result	|
| -- | -- |
| \'	| Single Quote	| 
| \\	| Backslash	| 
| \n	| New Line	| 
| \r	| Carriage Return | 	
| \t	| Tab	| 
| \b	| Backspace	| 
| \f	| Form Feed	| 
| \ooo	| Octal value	| 
| \xhh	| Hex value | 


## Booleans

> True/False

### Evaluation

`True` if it has some sort of content

`False` - empty values, such as (), [], {}, "", the number 0, and the value None

> bool()

:::warning Note
One more value, or object in this case, evaluates to False, and that is if you have an object that is made from a class with a __len__ function that returns 0 or False

```py
class myclass():
  def __len__(self):
    return 0

myobj = myclass()
print(bool(myobj))
```
:::

## Operations
### Arithmetic

> + - * % ** 
>
> /(div to float),   //(floor div)

### Assignment

> = += -= *= /= %= //= **= 
>
> &= |= ^= >>= >>=

### Comparison

> == != > < >= <=

### Logical

> and or not

### Identity
used to compare the objects, not if they are equal, but if they are actually the same object, with the same memory location

> is, is not

### Membership
used to test if a sequence is presented in an object

> in, not in

### Bitwise

> & | ^ ~ << >>


## Lists
> store multiple items in a single variable

- ordered (new items will be placed at the end of the list)
- changeable
- allow duplicates
- can contain one or different data types

```py
mylist = ["apple", "banana", "cherry"]
```

### Length
 
> len()

### types()
> < class 'list'>

### Constructor

```py
thislist = list(("apple", "banana", "cherry")) # note the double round-brackets
print(thislist)
```

### Access

> `[0]`, `[2:5]` #pos or neg, range

> `in` to check if present in a list

### Change Item

refer to the index number:
```py
thislist = ["apple", "banana", "cherry"]
thislist[1] = "blackcurrant"
print(thislist)
```

change a range
```py
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist[1:3] = ["blackcurrant", "watermelon"]
print(thislist)
```

:::warning Note
- If you insert more items than you replace, the new items will be inserted where you specified, and the remaining items will move accordingly

- If you insert less items than you replace, the new items will be inserted where you specified, and the remaining items will move accordingly

```py
thislist = ["apple", "banana", "cherry"]
thislist[1:2] = ["blackcurrant", "watermelon"]
print(thislist)
```

### Insert Items
> .insert(idx, item)

> .append(item)

To append elements from another list to the current

You can add any iterable object (tuples, sets, dictionaries etc.).

> list1.extend(list2)

### Remove Item

> .remover(item)

removes the specified index

> .pop(1) #no idx removes the last

The del keyword also removes the specified index:

> del thelist[0]

can also delete the list completely.

> del thelist

clear tge list

> .clear()

### Loop
- loop through items

```py
thislist = ["apple", "banana", "cherry"]
for x in thislist:
  print(x)
```

- loop through icdex nums

```py
thislist = ["apple", "banana", "cherry"]
for i in range(len(thislist)):
  print(thislist[i])
```

- while

```py
thislist = ["apple", "banana", "cherry"]
i = 0
while i < len(thislist):
  print(thislist[i])
  i = i + 1
```
- List Comprehension
```py 
thislist = ["apple", "banana", "cherry"]
[print(x) for x in thislist]
```

### List Comprehension

> shorter syntax when you want to create a new list based on the values of an existing list.

> newlist = [expression for item in iterable if condition == True]

```py
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x for x in fruits if "a" in x]
```

```py
newlist = [x if x != "banana" else "orange" for x in fruits]
```

### Sort List
Alphanumerically, ascending, by default

> .sort() 

Descending

```py
hislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort(reverse = True)
print(thislist)
```

### Customize Sort
by using the keyword argument key = function.

```py
def myfunc(n):
  return abs(n - 50)

thislist = [100, 50, 65, 82, 23]
thislist.sort(key = myfunc)
print(thislist)
```

### Case Insensitive

By default the sort() method is case sensitive, resulting in all capital letters being sorted before lower case letters

So if you want a case-insensitive sort function, use str.lower as a key function

```py
thislist = ["banana", "Orange", "Kiwi", "cherry"]
thislist.sort(key = str.lower)
print(thislist)
```

### Reverse Order

> .reverse()

### Copy a List

:::warning Note
You cannot copy a list simply by typing list2 = list1, because: list2 will only be a reference to list1, and changes made in list1 will automatically also be made in list2.
:::

```py
mylist = thislist.copy()
```

Another way to make a copy is to use the built-in method list().

```py
mylist = list(thislist)
```

### Join Lists
- `+`
  > list3 = list1 + list2
- by appending all the items one by one 
```py
for x in list2:
  list1.append(x)
```

- extend()
  > list1.extend(list2)


### List Methods

[See All Methods](https://www.w3schools.com/python/python_lists_methods.asp)













