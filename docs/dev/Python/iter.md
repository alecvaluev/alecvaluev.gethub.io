# Iterators

An iterator is an object that contains a countable number of values.

An iterator is an object that can be iterated upon, meaning that you can traverse through all the values.

Technically, in Python, an iterator is an object which implements the iterator protocol, which consist of the methods __iter__() and __next__().

```py
mytuple = ("apple", "banana", "cherry")
myit = iter(mytuple)

print(next(myit))
print(next(myit))
print(next(myit))
```

## Loop

The for loop actually creates an iterator object and executes the next() method for each loop

We can also use a for loop to iterate through an iterable object:

```py
mytuple = ("apple", "banana", "cherry")

for x in mytuple:
  print(x)
```

## Create an Iterator

To prevent the iteration to go on forever, we can use the StopIteration statement.

```py
class MyNumbers:
  def __iter__(self):
    self.a = 1
    return self

  def __next__(self):
    if self.a <= 20:
      x = self.a
      self.a += 1
      return x
    else:
      raise StopIteration

myclass = MyNumbers()
myiter = iter(myclass)

print(next(myiter))
print(next(myiter))
print(next(myiter))
print(next(myiter))
print(next(myiter))
```

## StopIteration
