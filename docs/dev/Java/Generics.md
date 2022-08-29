# Generics
 `<>` is used to define generic classes, interfaces, or methods by specifying a type parameter..
 
Creating references to them
```java
Box<String> myStringBox = new Box<>("Apple");
````
> By convention common type parameters include E (Elements), K (Key), N (Number), T (Type), V (Value), and S (or U or V) for multiple type parameters.

we cannot use primitive types (int, double, boolean, etc) as arguments to generic type parameters.

for objects of primitive types we can use wrapper classes

...pic of wrapper classes
```java
Box<Integer> intBox = new Box<>(56);
```

Autoboxing allows wrapper classes to take primitive values and convert them to their corresponding wrapper object by automatically calling the valueOf() method.
```java
Integer a = 56;  // Autoboxing, automatic call to `valueOf()`
Box<Integer> intBox1 = new Box<>(a);
Box<Integer> intBox2 = new Box<>(56);  // Autoboxing, automatic call to `valueOf()`
Box<Integer> intBox3 = new Box<>(Integer.valueOf(56));
```

We can also take the wrapper object and convert it back to its primitive value using one of the wrapper object’s Value() methods. This process is also automated for us and is known as unboxing
```java
Integer a = 56;
int aPrimitive1 = a.intValue();  // Return primitive `int` value from `Integer` object
int aPrimitive2 = a;  // Unboxing, automatic call to `intValue()`
```

## Interfaces
A generic interface can be implemented by a generic class and its generic type parameter can be used as the argument to the interface type parameter.
```java
public interface Replacer<T> {
  void replace(T data);
}

public class Box <T> implements Replacer<T> {
  private T data;
 
  @ Override
  void replace(T data) {
    this.data = data; 
  }
}
```
We can also have a non-generic class implement a generic interface by specifying the type argument to the interface.

```java
public class StringBag implements Replacer<String> {
  private String data;
 
  @ Override
  void replace(String data) {
    this.data = data; 
  }
}
```

Now let’s create interface type references similarly to how we created generic class references
```java
Replacer<Integer> boxReplacer = new Box<>();  // Using generic `Box` implementation
Replacer<String> bagReplacer = new StringBag();  // Using non-generic `StringBag` implementation
```

## Generic Methods

> It’s important to note that generic methods need to include the type parameter,

```java
public class StringBox {
  private String data;
 
  public <T> boolean isString(T item) {
    return item instanceof String; 
  }
}

StringBox box = new StringBox();
box.isString(5); // Returns false
```


## Raw Types
 `Raw type` means not providing a type argument to a generic class or interface
 
> must be avoided
> - `Incompatible` type errors when retrieving data from raw types
> -  potential runtime `ClassCastException`

```java
Box box = new Box<>("My String");  // Raw type box
String s2 = (String) box.getData();  // No incompatible type error
String s1 = box.getData();  // Incompatible type error
```

## Upper Bounds
It limits the type parameter to a parent type or any of its child types. 

### Classes and Interfaces
```java
//we can use with Integer, Double.. but not String - error
public class Box <T extends Number> {
  private T data; 
}
```

### Upper Bounds to Generic Methods
```java
public static <T extends Number> boolean isZero(T data) {
  return data.equals(0);
}
```

### Multiple Bounds

> any upper bound that is a class, must come first followed by any interfaces

```java
public class Box <T extends Number & Comparable<T>> {
  private T data; 
}
```

## Wildcard
`?` Wildcards are used to define unknown types.

```java
public class Util {
  public static void printBag(Bag<?> bag ) {
    System.out.println(bag.toString()); 
  }
}
Bag<String> myBag1 = new Bag("Hello");
Bag<Integer> myBag2 = new Bag(23);
Util.printBag(myBag1);  // Hello
Util.printBag(myBag2);  // 23
```
 the wildcard version is simpler.
 
 ## Wildcard Lower Bounds
 A lower bound wildcard restricts the wildcard to a class or interface and any of its parent types.
 ```java
public class Util {
  public static void getBag(Bag<? super Integer> bag ) {
    return bag;
  }
}
```
Some important things:
- They cannot be used with generic type parameters, only wildcards.
- A wildcard cannot have both a lower bound and upper bound.

