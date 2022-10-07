# Modules

== code library

You can name the module file whatever you like, but it must have the file extension .py

```py
person1 = {
  "name": "John",
  "age": 36,
  "country": "Norway"
}

def greeting(name):
  print("Hello, " + name)
```

```py
import mymodule

mymodule.greeting("Jonathan")

a = = mymodule.person1["age"]
print(a)

```

## Alias

> import mymodule as mx

## dir() - to list all the function names (or variable names) in a module

```py
import platform

x = dir(platform)
print(x)
```

## import... from

You can choose to import only parts from a module, by using the from keyword.
```py
from mymodule import person1

print (person1["age"])
```



