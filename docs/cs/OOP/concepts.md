# OOP Concepts

The main aim of OOP is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function.

OOPs Concepts:

1. Class
2. Objects
3. Data Abstraction 
4. Encapsulation
5. Inheritance
6. Polymorphism
7. Dynamic Binding
8. Message Passing

## Class
A class is a user-defined data type. It consists of data members and member functions, which can be accessed and used by creating an instance of that class.

## Object
An Object is an instance of a Class. When a class is defined, no memory is allocated but when it is instantiated (i.e. an object is created) memory is allocated. An object has an **identity, state, and behavior**. Each object contains data and code to manipulate the data.

## Data Abstraction
Data abstraction refers to providing only essential information about the data to the outside world, hiding the background details or implementation.

## Encapsulation
Encapsulation is defined as the wrapping up of data under a single unit. It is the mechanism that binds together code and the data it manipulates. In Encapsulation, the variables or data of a class are hidden from any other class and can be accessed only through any member function of their class in which they are declared.

## Inheritance
Inheritence is the capability of a class to derive properties and characteristics from another class.

## Polymorphism
The word polymorphism means having many forms. In simple words, we can define polymorphism as the ability of a message to be displayed in more than one form.

Types: 
- run time
  - virtual function
- compile time
  - function overloading
  - operator overloading  
  
## Dynamic Binding
In dynamic binding, the code to be executed in response to the function call is decided at runtime. Dynamic binding means that the code associated with a given procedure call is not known until the time of the call at run time.

## Message Passing
It is a form of communication used in object-oriented programming as well as parallel programming. Objects communicate with one another by sending and receiving information to each other. A message for an object is a request for execution of a procedure and therefore will invoke a function in the receiving object that generates the desired results. Message passing involves specifying the name of the object, the name of the function, and the information to be sent.
