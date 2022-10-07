# Classes

> Python is an object oriented programming language.

```py
class MyClass:
  x = 5

  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = MyClass()
print(p1.x)
```
:::tip Note
The self parameter is a reference to the current instance of the class, and is used to access variables that belong to the class.

It does not have to be named self , you can call it whatever you like, but it has to be the first parameter of any function in the class:
:::

## __init__()

> executed when the class is being initiated


## __str__() 

> controls what should be returned when the class object is represented as a string

## Modify Props
You can modify properties on objects like this:
```py
p1.age = 40
```
## Delete prop
```py
del p1.age
```

## Delete Object
```py
del p1
```

## pass Statement

## Inheritance

Parent class is the class being inherited from, also called base class.

Child class is the class that inherits from another class, also called derived class

## Create Child

```py
class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)  # or use can call directly Person.__init__(self, fname, lname)
    self.graduationyear = 2019
```





