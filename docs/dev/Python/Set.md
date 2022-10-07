# Set

- unordered
- unchangeable(cannot change the items after the set has been created)
- unindexed
- do not allow duplicate

:::warning Note
Set items are unchangeable, but you can remove items and add new items.
:::

```py
thisset = {"apple", "banana", "cherry"}
```

## len()

## Set Items

```py
set1 = {"apple", "banana", "cherry"}
set2 = {1, 5, 7, 9, 3}
set3 = {True, False, False}
set4 = {"abc", 34, True, 40, "male"}
```

## type()

> < class 'set'>

## constructor
```py
thisset = set(("apple", "banana", "cherry")) # note the double round-brackets
print(thisset)
```

## Access Items

> value `in` thisset

## Adding

> add()
```py
thisset = {"apple", "banana", "cherry"}
thisset.add("orange")
```

Add items from another set
```py
thisset = {"apple", "banana", "cherry"}
tropical = {"pineapple", "mango", "papaya"}

thisset.update(tropical)
```

:::tip Note
update() method does not have to be a set, it can be any iterable object (tuples, lists, dictionaries etc.)
:::

## Removing

1. remove()

```py
thisset = {"apple", "banana", "cherry"}
thisset.remove("banana")
print(thisset)
```
:::warning Note
If the item to remove does not exist, remove() will raise an error.
:::

2. discard()

```py
thisset.discard("banana")
```
:::warning Note
If the item to remove does not exist, discard() will NOT raise an error.
:::

3. pop() - del last
4. clear() - empties the set

```py
thisset = {"apple", "banana", "cherry"}
thisset.clear()
print(thisset)
```

5. del -  delete the set completely
```py
del thisset
```

## Join Two Sets
> both will exclude any duplicate items.

1. union - ret. new set
```py
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}

set3 = set1.union(set2)
print(set3)
```

2. update
```py
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}

set1.update(set2)
print(set1)
```

### Keep ONLY the Duplicates
1. intersection_update() - present in both

```py
x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}

x.intersection_update(y)

print(x)
```

2. intersection() - new set, present in both

### Keep All, But NOT the Duplicates

1. symmetric_difference_update() - are NOT present in both
2. symmetric_difference() -  a new set, NOT present in both

## Set Methods
[Set methods](https://www.w3schools.com/python/python_sets_methods.asp)
