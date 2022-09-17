# OOP Design Principles
Intro to the **SOLID** principles - 

> Single responsibility
>
> Open-closed
> 
> Liskov substitution,
>  
> Interface segregation 
>
> and Dependency inversion

...and other important principles for designing

## DRY (Don’t repeat yourself)
:::tip principle
don’t write duplicate code
:::
instead use Abstraction to abstract common things in one place.

If you have a **block of code** in more than two places consider making it a separate method, 
or if you use **a hard-coded value** more than one time make them public final constant. 

The benefit of this - `maintenance`.

## Encapsulate What Changes
:::tip principle
hides implementation detail, helps in maintenance
:::

:::tip Benefit
easy to test and maintain proper encapsulated code.
:::

## Single Responsibility Principle (SRP)
:::tip principle
one class should do one thing and do it well
:::
:::tip Benefit
reduces coupling between the individual component of the software and Code
:::
## Open Closed design principle (OCP)
:::tip principle
open for extension, closed for modification
:::

Ideally, if you are adding new functionality only than your code should be tested
:::tip Benefit
 already tried and tested code is not touched which means they won’t break.
 :::
## Liskov Substitution Principle (LSP)
:::tip principle
sub type must be substitutable for super type
:::
## Interface Segregation Principle (ISP)
avoid monolithic interface, reduce pain on client side

:::tip principle
The ISP requires that clients should not be forced to depend on interfaces that they do not use.
:::
## Dependency Inversion Principle (DIP)
don't ask, let framework give to you
:::tip principle
The DIP requires that high level modules should not depend on low level modules, 
both should depend on abstraction. Also, abstraction should not depend on details, 
details should depend on abstractions
:::
## Favor Composition over Inheritance
:::tip principle
code reuse without cost of inflexibility
:::
Composition allows changing the behavior of a class at run-time by setting property during run-time and by using Interfaces to compose a class we use polymorphism which provides flexibility to replace with better implementation any time.

## Programmning for Interface
:::tip Benefit
helps in maintenance, improves flexibility
:::
A programmer should always program for the interface and not for implementation this will lead to flexible code which can work with any new implementation of the interface.

In concrete words, you should use interface type on variables, return types of a method or argument type of methods in Java like using SuperClass type to store object rather using SubClass.

## Delegation principle
don't do all things by yourself, delegate it

Don’t do all stuff by yourself, delegate it to the respective class. Classical example of delegation design principle is equals() and hashCode() method in Java.

:::tip Benefit
no duplication of code and pretty easy to modify behavior.
:::
