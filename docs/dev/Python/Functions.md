# Functions

```py
def my_function(fname):
  print("Hello from a function" + fname)

my_function()
```

## Arguments(args)

A parameter is the variable listed inside the parentheses in the function definition.

An argument is the value that is sent to the function when it is called.

### Num of args

1. By default, a function must be called with the correct number of arguments => error
2. Arbitraray Arguments - *args
```py
def my_function(*kids):
  print("The youngest child is " + kids[2])

my_function("Emil", "Tobias", "Linus")
```

## Keyword Arguments

send arguments with the key = value syntax

```py
def my_function(child3, child2, child1):
  print("The youngest child is " + child3)

my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")
```
:::tip Note
Keyword Arguments are often shortened to kwargs
:::

## Arbitrary Keyword Arguments - **kwargs

If you do not know how many keyword arguments that will be passed into your function.
This way the function will receive a dictionary of arguments

```py
def my_function(**kid):
  print("His last name is " + kid["lname"])

my_function(fname = "Tobias", lname = "Refsnes")
```
## Default Parameter
```py
def my_function(country = "Norway"):
  print("I am from " + country)
```

## pass Statement
## Python also accepts function recursion


## Lambda
A lambda function is a small anonymous function.

A lambda function can take any number of arguments, but can only have one expression

> lambda arguments : expression

:::tip TIP
Use lambda functions when an anonymous function is required for a short period of time
:::



