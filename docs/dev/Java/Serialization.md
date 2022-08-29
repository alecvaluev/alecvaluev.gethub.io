# Serialization

`Serialization` describes the process of taking an object’s state and transforming it into a stream of bytes.

To serialize an object, its fields and their types are stored in the form of bytes. These bytes are then able to be written to memory, a file, a database, or sent over a network with all the information necessary to recreate the object.

`Deserialization` as the name suggests, does the opposite of serialization and converts a stream of bytes back into an object.

Using both serialization and deserialization gives us the flexibility to persist our objects and get them back when needed.

Important details to note:
- The stream of bytes created by serialization only includes the member variables of an object and not its methods.
- Deserialization creates a **copy** of the original object. It shares the same state but is an entirely new object in memory.

The `Serializable` interface is a marker interface and requires no methods to be implemented.

it is important for the implementing class to provide a serialVersionUID:
```java
public class Person implements Serializable {
  private String name;
  private int age;
  private static final long serialVersionUID = 1L; 
} 
```
> a static final long type number, acts as an identifier for the JVM to choose the proper class to convert a stream of bytes back into an object

Our serializable class can get a serialVersionUID in one of the following ways:

- the JVM define one for you (not ideal, depending on the JVM, you’ll get a different value!  may cause deserialization to fail.)
- have your IDE generate one for you (better than the first one but you’ll need to ensure that your IDE has this feature.)
- define the serialVersionUID explicitly

## Serializing Objects to a File

To use `FileOutputStream` and `ObjectOutputStream` to serialize objects to a file.

```java
public class Person implements Serializable {
  private String name;
  private int age;
  private static final long serialVersionUID = 1L; 
 
  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }  
 
  public static void main(String[] args) throws FileNotFoundException, IOException{
    Person michael = new Person("Michael", 26);
    Person peter = new Person("Peter", 37);
 
    FileOutputStream fileOutputStream = new FileOutputStream("persons.txt");
    ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
 
    objectOutputStream.writeObject(michael);
    objectOutputStream.writeObject(peter);    
  }
} 
```
## Deserializing an Object to a File

To use `FileInputStream` and `ObjectInputStream` to deserialize objects from a file.
```java
public class Person implements Serializable {
  public static void main(String[] args) throws FileNotFoundException, IOException, ClassNotFoundException {
 
    FileInputStream fileInputStream = new FileInputStream("persons.txt");
    ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
 
    Person michaelCopy = (Person) objectInputStream.readObject();
    Person peterCopy = (Person) objectInputStream.readObject();
  }
}
```
> to note that deserialization creates a copy of the original object.
  
 The JVM ensures it deserializes the object using the correct class file by comparing the serialVersionUID in the class file with the one in the serialized object. If a match is not found an `InvalidClassException` is thrown. Also, readObject() throws a `ClassNotFoundException` when the class of the serialized object cannot be found.

### Serializable Fields, `transient` keyword

`static` and `transient` fields are not serializable.

The JVM serializes all fields in an object, even those marked private and final.

A field marked as transient will have its value ignored during serialization and instead receive the default value for that type of field.
```java
public class Person implements Serializable {
  private String name;
  private int age;
  private static int numberOfPeople = 10;
  private transient int yearBorn; //after deserialization will get 0 as default value  
} 
```
transient and static fields:

- The deserialize (copy) object will not get the default value for a static field (in our example the value 0), it will instead receive the current value of the static field since program execution since static fields belong to the class and not the object.
- A constructor is not called during deserialization for the deserialized type object. Object fields are set using reflection.
- A constructor is only called for the first non-serializable class in the parent hierarchy of the deserialized object.

## Serializing Associated Fields
Most of the time our serializable classes will have a combination of reference and primitives types.

In order for reference types to be serializable, they must also implement the Serializable interface, which the String class does. If the reference type did not implement `Serializable` then we would get a `NotSerializableException` thrown.

## Custom Serialization
we can by implementing the methods readObject() and writeObject() in our class
```java
public class DateOfBirth {
  private int month;
  private int day;
  private int year;
 
  // constructors and getters
}
 
public class Person implements Serializable {
  private String name;
  private DateOfBirth dateOfBirth;
 
  private void writeObject(java.io.ObjectOutputStream stream) throws IOException{
    stream.writeObject(this.name);
    stream.writeInt(this.dateOfBirth.getMonth());
    stream.writeInt(this.dateOfBirth.getDay());
    stream.writeInt(this.dateOfBirth.getYear());
  }
 
  private void readObject(java.io.ObjectInputStream stream) throws IOException, ClassNotFoundException{
    this.name = (String) stream.readObject();
    int month = (int) stream.readInt();
    int day = (int) stream.readInt();
    int year = (int) stream.readInt();
    this.dateOfBirth = new DateOfBirth(month, day, year);
  }    
}
```
Most times the default process of serialization is enough as long as all references implement Serializable. The implementation of readObject() and writeObject() is especially useful when you have a reference field that does not or cannot implement Serializable.
