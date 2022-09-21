# Database Systems

## Data vs Information

`Data`: is the raw unprocessed strings, numbers, dates, measurements, etc. that is simply stored.  
Data is raw, unorganized facts that needs to be processed. (date of birth, grade, course)

`Information`: reveals the meaning of data and is produced through the processing of the data 
into meaningful output, summations and categorizations. (Persons Age, Average student Age, Average student mark, Students GPA)

## Before the Advent of Database Systems
## File-based Systems

It refers to the way data is managed or stored before databases are used. 

One way to keep information on a computer is to store it in permanent files 
- You create a series of folders and files to store the information in a way that makes 
sense to you.

### Disadvantages of the file-based approach
### Data Redundancy

> Data that is stored in more than one location has inherent problems. 

can lead to: 
- Inconsistency in data format
- The same info being kept in several different places (files)
- Data inconsistency, a situation where various copies of the same data are conflicting, 
wastes storage space and duplicates effort

### Data Repetition

> Data that is stored in one location, but repeated many times also has enherent problems. 

*The solution to both Data Redundancy and Data Repetition is centralizing the files in one location and allowing each department or request to access the data from a single central source.

:::details More Disadvantages
### Data Isolation

> is a property that determines when and how changes made by one operation become visible to 
other concurrent users and systems. This issue occurs in a concurrency situation. 

- difficult for new applications to retrieve the appropriate data, which might be stored in various files.

### Integrity problems
 > It refers to the maintenance and assurance that the data in a database are correct and consistent.

 - Data values must satisfy certain consistency constraints that are specified in the 
application programs.
 - difficult to make changes to the application programs in order to enforce new constraints.

### Security problems
 - There are constraints regarding accessing privileges.
 - Application requirements are added to the system in an ad-hoc manner so it is difficult 
to enforce constraints

### Concurrency access

> is the ability of the database to allow multiple users access to the same record without adversely affecting transaction processing.

Typically, in a file-based system, when an application opens a file, that file is locked.

In database systems, concurrency is managed thus allowing multiple users access to the same record.

:::

## Data Anomalies

There are 3 main types of data anomalies that can occur in a database:
- **Modification Anomalies**
  
  when changing one records data leaves another records data in error.

- **Insertion Anomalies**
  
  when some poece of data or attribute is missing but when we try to insert data

- **Deletion Anomalies**
  
  the removal would result in the loss of data stored in this table.  Therefore, other independent fields may actually impact each other due to data.

## Databases

`A database` is a structure that contains logically related data in a single repository.

Through careful design and development a database can be a centralized storage facility that is accessed simulataneously by several departments and if one peice of data is updated, it is autmoatically updated everywhere as it is centralized and unique.

A database can contain many tables. 

:::tip Benefits
- elimination of data redundancy
- elimination of data repetition
- storing great amounts of data with little to no physical space requirements
- tactical and strategic decision support
- supporting and feeding day to day business operations through production and transactions.
- ability to get more information from the same amount of data through relations
- sharing of data
- security of data to authorized users (give read-only/read and write privileges)
- enforcement of integrity constraints (data type - numbers only, data uniqueness)
- data independance (the system data descriptions or data describing data (metadata) are separated from the application programs)
- software independence (can restructure database without requiring updates to the software)
- backup and recovery facilities
:::

:::details Self-describing nature of a database system

A database system is referred to as self-describing because it not only contains the 
database itself, but also metadata which defines and describes the data and relationships 
between tables in the database.

This separation of data and information about the data makes a database system totally 
different from the traditional file-based system in which the data definition is part of 
the application programs.

:::

:::details Insulation between program and data

In the database approach, the data structure is stored in the system catalogue and not in 
the programs. Therefore, one change is all that is needed to change the structure of a 
file. This insulation between the programs and data is also called program-data independence.

:::

:::details Support for multiple views of data

A view is a subset of the database, which is defined and dedicated for particular users of 
the system. Multiple users in the system might have different views of the system. Each view 
might contain only the data of interest to a user or group of users.

::: 

:::details Sharing of data and multiuser system

They allow many users to access the same database at the same time. This access is achieved 
through features called **concurrency control strategies**. It ensure that the data accessed 
are always correct and that data integrity is maintained. 

:::

## Database Management Systems (DBMS)

`A database management system` is a collection of programs that manages a database structure 
and controls access to the database (and ultimately the data).  The database is just one of 
those programs in the collection. The primary goal of a DBMS is to provide an environment 
that is both convenient and efficient for users to retrieve and store information.

The DBMS typically has many components that:
- manages the sharing of data amongst multiple applications and/or users
- ensures data consistency
- add the ability to do ad hoc querying
- are extensions to the manufactured components to add addition and customized access and 
usage (A custom developed API may be an example)

## Database Design

A database design should:
- define the expected use of the database
- avoids redundant and repetitive data
- completed in association with the Software Development LifeCyle (SLDC)
- Completed using the Database Design Life Cycle (DBLC)


5 basic rules of good batabase:
1. Every Table or Entity requires `a unique identifier` to determine exact row of interest
2. `Avoid redundent` data storage
3. `Avoid repetitive` data sotrage
4. `Do not include any calculated fields`, or values that are directly derived from other fields.
5. Every cell in the database must have `atomic values` (a single value).

## Software Development Life Cycle (SDLC)
![SDLC](/images/cs/SDLC.png)
#pic from http://dbs211.ca/courses/dbs211/Week01/index.html

:::details SDLC
| Stage | Desc |
| -- | -- |
| Planning	| We have an idea!  Why do we need this software, how will it help the organization?  Who will champion this project?  What are the goals or objectives of the software? |
| Analysis	| Needs analysis: What does the software need to be successful?  Should we build it?  Do we have the right team to build it?  Can we financially afford to built it?  Do we have the right technologies available? |
| Design	| Specifications, architecture, choice of languages, frameworks, diagrams, pseudo-code, scoping. |
| Implementation	| Coding the software, creating the graphics, testing the software, actually creating the product, installation and delivery. |
| Maintenance and Support	| Maintenance plan, on-going monitoring and review, what are the next steps, new versions?  Training and on-going customer support |
:::

## Database Life Cycle

![DBLC](/images/cs/DBLC.png)


| Stage | |
| -- | -- | 
| Requirements Analysis	| What does the database need?  What information do we need later?  How is the database going to be used?  What other applications will the database support? |
| Logical Design	| Design Specifications, Data Modeling, Entity Relationship Diagrams, Data Types, Normalization, |
| Physical Design	| Actual process of creating tables and database structure (SQL, DDL) |
| Implementation	| Inserting or importing data, installation on live server, backup systems, and more |
| Monitoring, modification, and Maintenance	| On-going backups, data archival, monitoring, additional queries as required |

:::danger Key Terms
:::details 

**concurrency**: the ability of the database to allow multiple users access to the same record without adversely affecting transaction processing

**data element**: a single fact or piece of information

**data inconsistency**: a situation where various copies of the same data are conflicting

**data isolation**: a property that determines when and how changes made by one operation become visible to other concurrent users and systems

**data integrity**: refers to the maintenance and assurance that the data in a database are correct and consistent

**data redundancy**: a situation that occurs in a database when a field needs to be updated in more than one table

**database approach**: allows the management of large amounts of organizational information

**database management software**: a powerful software tool that allows you to store, manipulate and retrieve data in a variety of ways

**file-based system**: an application program designed to manipulate data files

**data elements**: facts that represent real-world information

**database**: a shared collection of related data used to support the activities of a particular organization

**database management system (DBMS)**:  a collection of programs that enables users to create and maintain databases and control all access to them

**table**: a combination of fields

**concurrency control strategies**: features of a database that allow several users access to the same data item at the same time

**data type**: determines the sort of data permitted in a field, for example numbers only

**data uniqueness**: ensures that no duplicates are entered

**database constraint**: a restriction that determines what is allowed to be entered or edited in a table

**metadata**: defines and describes the data and relationshipsbetween tables in the database

**read and write privileges**: the ability to both read and modify a file

**read-only access**: the ability to read a file but not make changes

**self-describing**: a database system is referred to as self-describing because it not only contains the database itself, but also metadatawhich defines and describes the data and relationships between tables in the database

**view**: a subset of the database
:::
