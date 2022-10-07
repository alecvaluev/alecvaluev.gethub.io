# Dictionary

> store data values in key:value pairs

 - 3.7 > ordered (the items have a defined order, and that order will not change.)
 - changeable
 - does not allow duplicates


```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict["brand"])
```

## len()
## type()
 > < class 'dict'>

## Access

1. []
2. get()

```py
x = thisdict.get("model")
```

3. keys() - return a list of all the keys
:::warning Note
The list of the keys is a view of the dictionary, meaning that any changes done to the dictionary will be reflected in the keys list.
:::

4.values()
:::warning Note
The list of the values is a view of the dictionary, meaning that any changes done to the dictionary will be reflected in the values list.
:::

5.items() - return each item in a dictionary, as tuples in a list.
:::warning Note
The returned list is a view of the items
:::

### exist
> if in

## Change Item

1. thisdict["year"] = 2018
2. thisdict.update({"year": 2020})

## Add Item

1. []

```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict["color"] = "red"
```

2. update() - if the item does not exist, the item will be added.
```py
thisdict.update({"color": "red"})
```

## Remove Items

1.pop("key")
2.popitem() - remove the last inserted item( bef. 3.7 a random item removed)
3.del thisdict["model"]

:::danger Note
can also delete the dictionary completely

`del thisdict`
:::

4.clear() - empties the dict

## Loop

> for in 
1. for x in thisdict: - all key names
2. for x in thisdict.values(): - all values
3. for x in thisdict.keys(): - through all keys
4. for x, y in thisdict.items() - keys and values

## Copy a Dict

> cannot dict2 = dict1 => it will reference

1. copy()
```py
mydict = thisdict.copy()
```

2.dict()
```py
mydict = dict(thisdict)
```

## Nested Dicts
```py
child1 = {
  "name" : "Emil",
  "year" : 2004
}
child2 = {
  "name" : "Tobias",
  "year" : 2007
}
child3 = {
  "name" : "Linus",
  "year" : 2011
}

myfamily = {
  "child1" : child1,
  "child2" : child2,
  "child3" : child3
}
```

## Methods

[Dict Methods](https://www.w3schools.com/python/python_dictionaries_methods.asp)
