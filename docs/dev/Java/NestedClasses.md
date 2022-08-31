# Nested Classes

A nested class is a class that can be found within another class. The process of a class being enclosed in another is known as encapsulation.

There are two main types of nested classes: 
- non-static (also known as inner) nested classes
- static nested classes

## Non-static (inner)
Can have access to both static and non-static members of the class that it is declared within.

```java
class Outer {
  String outer;
  // Assign values using constructor
  public Outer(String name) {
    this.outer = name;
  }
 
  // private method
  private String getName() {
    return this.outer;
  }
 
  // Non-static nested class
  class Inner {
    String inner;
    String outer;
    public String getOuter() {
      // Instantiate outer class to use its method
      outer = Outer.this.getName();
    }
  }
}
```
In order to reference a non-static nested class outside its scope, a programmer would have to also reference its encompassing class.

```java
  Outer outer = new Outer();
  Outer.Inner inner = outer.new Inner();
```

## Static
Can only access other static members of their encompassing class and don’t have access to non-static members
 ```java
class Outer {
  String outer;
  static String typeStatic = "static String type";
  String typeGeneric = "generic String type";
 
  // Assign values using constructor
  public Outer(String name) {
    this.outer = name;
  }
 
  // private method
  private String getName() {
    return this.outer;
  }
 
  // static nested class
  static class Inner {
    String inner;
    String outer;
 
    void printTypeMethod() {
      // Can access static member of outer class
      System.out.println("Type of member = " + typeStatic);
    }
  }
}
```
To instantiate a static nested class, you are not required to first instantiate its enclosing class.
```java
Outer.Inner staticNested = new Outer.Inner();
```

## Shadowing
Shadowing allows for the overlapping scopes of members with the same name and type to exist in both a nested class and the enclosing class simultaneously.
```java
class Outer {
  String name = "Outer";
 
  // Nested inner class
  class Inner {
    String name = "Inner";
 
    public void printTypeMethod() {
      System.out.println(name);
      System.out.println(Outer.this.name);
    }
  }
}
```
