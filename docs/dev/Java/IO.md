# Input and Outout

Some of the built-in classes include:

| Class |	Definition |		
| --- | --- |
| System.out	| A class that holds functions to display out in a terminal or command prompt application. |			
| Scanner	| A class used to read input passed into a Java program. |
| FileOutputStream	| A class that holds functions to convert byte data into readable text files. |			
| FileInputStream	| A class that has functions that convert input from files to byte data for a Java program to use. |

## Printing using System.out

Printing output in a Java program can be done using the following three commands: System.out.print();, System.out.println(), and System.out.printf()

### System.out.print()

Prints into the same line when a program is running
 ```java
 System.out.print("Hello ");
 System.out.print("World!");
```

``` Output
Hello World!
```

### System.out.println()
prints output to a new line:
```java
System.out.println("Hello");
System.out.println("World!");
```
```
Hello
World!
```
### System.out.printf()

Allows us to output strings that are formatted in the code using format specifiers. Format specifiers begin with the ‘%’ sign, followed by the type of variable we want to print. Some examples include %s for a string,%c for a character, and %d for an integer.
```java
String world = "World";
int day = 1;
System.out.printf("Hello %s! Today is Day: %d of your Intermediate Java course!", world, day); 
```
```
Hello World! Today is Day: 1 of your Intermediate Java course!
```

## The Scanner Class
The Scanner class is built into Java and is useful for reading input from different sources including user input, and text files.

We must import the Scanner class
```java
import java.util.Scanner;
```

Let’s begin by declaring the Scanner class as a variable that we will call input:
```java
//This is what will allow our program to read user input from the console.
Scanner input = new Scanner(System.in);
```

The Scanner class can read different types of values that can be saved into different variable types. 
| Variable | Code |
| --- | --- |
| Int	| int num = input.nextInt(); |			
| Double	| double numDouble = input.nextDouble(); |			
| Byte	| byte numByte = input.nextByte(); |			
| Boolean	| boolean isTrue = input.nextBoolean(); |			
| Long	| long numLong = input.nextLong(); |			
| Short	| short numShort = input.nextShort(); |

The Scanner class has many functions, including the ability to validate and convert variables. Some examples include:
| Code	| Function |
| --- | --- |
| input.hasNextLine()	| This function returns a boolean that validates if there is another line in the input of the defined scanner.			
| input.hasNextInt()	| This function returns a boolean that validates if there is another int in the input of the defined scanner.			
| input.useDelimiter(","):	| This function helps us specify what delimiters we want to use. A delimiter is used to separate data units. Delimiters can be especially useful when a program is required to read csv files.			
| num.toString()	| This function can be used to convert different variable types to string variables. In this example, we are converting an int to a string. |

## File Streams
`FileOutputStream` is used to output data from a program into a file on your computer, and `FileInputStream` is used to read from a file. They both read/write bytes, and have built-in functions to convert bytes to different variables.

We can import them as

```java
import java.io.*;
```

### FileInputStream

Declare your input stream

```java
//Option 1: Pass file path/name directly to FileInputStream
FileInputStream input1 = new FileInputStream("input.txt");
 
// Option 2: Use File object to pass file info to FileInputStream
// Save file path that has been passed in by the user into a string variable.
String fileName = args[0];
// Pass path to File object
File inputFile = new File(fileName);
// Pass File object to FileOutputSteam
FileInputStream input2 = new FileInputStream(inputFile);
```

Read your file

```java
// Counter variable to loop through the file
int i = 0;
// A loop to access each character
while((i = inputFile.read()) != -1) {    
  // Printing each character as it's reached
  System.out.print((char)i);    
}
```

Close the file
```java
input.close();
```

### FileOutputStream

Declare your output stream.

```java
//Option 1: Pass file path/name directly to FileOutputStream
FileOutputStream output1 = new FileOutputStream("output.txt");
 
// Option 2: Use File object to pass file info to FileOutputStream
// Save file path that has been passed in by the user into a string variable.
String fileName = args[0];
// Pass path to File object
File outputFile = new File(fileName);
// Pass File object to FileOutputSteam
FileOutputStream output2 = new FileOutputStream(outputFile);
```

Write to your file.

```java
// Declare FileOutputSteam
FileOutputStream output = new FileOutputStream("output.txt");
 
// Declare statement
String statement = "Hello World!";
 
// Convert statement to bytes.
byte[] statementBytes = statement.getBytes();
 
// Option 1:
// Write all contents to file
output.write(statementBytes);
// You can do this more succinctly using
output.write(statement.getBytes());
 
// Option 2:
// If you want to write specific bytes to a file you may choose to use the following statement
// output.write(byte[] bytes, int startingIndex, int endingIndex);
output.write(statementBytes, 0, 4);
```

Close the file.

```java
output.close();
```

## IOExceptions

`IOExceptions` are exceptions that are related to input and/or output in a program and can be classified as checked exceptions.

Some examples of when IOExceptions occur include:

- Failed attempts at trying to access a file.
- The end of a file has been reached.
- The file a program is attempting to access cannot be found.
- An input/output operation has been interrupted.

To start off we must first import the IOExceptions class into our program using 
```java
import java.io.IOException;
```

We may choose to print an error using System.out.println() or run a new instance of the program.
```java
// Declare FileOutputSteam
FileOutputStream output = new FileOutputStream("output.txt");
 
String statement = "Hello World!";
 
try {
  // Convert statement to bytes.
  byte[] statementBytes = statement.getBytes();
 
  // Write all contents to file
  output.write(statementBytes);
 
  // Close file
  output.close();
 
  } catch(IOException e) {
  // Handle exception
  System.out.println("There has been an IO exception");
  System.out.println(e);
  ```
  
  Instead of a try-catch block, we can also use the keyword throws so that the exception is handled by the program itself.
  ```java
  public class Sample {
  public static void main(String[] args) throws IOException { … }
}
  ```
