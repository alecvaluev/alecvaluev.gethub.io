# Database Systems

## Data vs Information

Data: is the raw unprocessed strings, numbers, dates, etc. that is simply stored.  
Data is raw, unorganized facts that needs to be processed. (date of birth, grade, course)

Information: reveals the meaning of data and is produced through the processing of the data 
into meaningful output, summations and categorizations. (Persons Age, Average student Age, Average student mark, Students GPA)

## File-based Systems
It refers to the way data is managed or stored before databases are used. 

On your computer - You create a series of folders and files to store the information in a way that makes sense to you.


### Data Redundancy

> Data that is stored in more than one location has inherent problems. 

### Data Repetition

> Data that is stored in one location, but repeated many times also has enherent problems. 

*The solution to both Data Redundancy and Data Repetition is centralizing the files in one location and allowing each department or request to access the data from a single central source.

## Data Anomalies

There are 3 main types of data anomalies that can occur in a database:
- Modification Anomalies
  when changing one records data leaves another records data in error.

- Insertion Anomalies
  when some poece of data or attribute is missing but when we try to insert data

- Deletion Anomalies
  the removal would result in the loss of data stored in this table.  Therefore, other independent fields may actually impact each other due to data.

## Databases

`A database` is a structure that contains logically related data in a single repository.

Through careful design and development a database can be a centralized storage facility that is accessed simulataneously by several departments and if one peice of data is updated, it is autmoatically updated everywhere as it is centralized and unique.

:::tip Benefits
- elimination of data redundancy
- elimination of data repetition
- storing great amounts of data with little to no physical space requirements
- tactical and strategic decision support
- supporting and feeding day to day business operations through production and transactions.
- ability to get more information from the same amount of data through relations
- sharing of data
- security of data to authorized users
- software independence (can restructure database without requiring updates to the software)
:::

## Database Management Systems (DBMS)

`A database management system` is a collection of programs that manages a database structure 
and controls access to the database (and ultimately the data).  The database is just one of 
those programs in the collection.

The DBMS typically has many components that:
- manages the sharing of data amongst multiple applications and/or users
- ensures data consistency
- add the ability to do ad hoc querying
- are extensions to the manufactured components to add addition and customized access and usage (A custom developed API may be an example)

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

#pic from http://dbs211.ca/courses/dbs211/Week01/index.html

| Planning	| We have an idea!  Why do we need this software, how will it help the organization?  Who will champion this project?  What are the goals or objectives of the software? |
| -- | -- |
| Analysis	| Needs analysis: What does the software need to be successful?  Should we build it?  Do we have the right team to build it?  Can we financially afford to built it?  Do we have the right technologies available? |
| Design	| Specifications, architecture, choice of languages, frameworks, diagrams, pseudo-code, scoping. |
| Implementation	| Coding the software, creating the graphics, testing the software, actually creating the product, installation and delivery. |
| Maintenance and Support	| Maintenance plan, on-going monitoring and review, what are the next steps, new versions?  Training and on-going customer support |

## Database Life Cycle

| Requirements Analysis	| What does the database need?  What information do we need later?  How is the database going to be used?  What other applications will the database support? |
| -- | -- | 
| Logical Design	| Design Specifications, Data Modeling, Entity Relationship Diagrams, Data Types, Normalization, |
| Physical Design	| Actual process of creating tables and database structure (SQL, DDL) |
| Implementation	| Inserting or importing data, installation on live server, backup systems, and more |
| Monitoring, modification, and Maintenance	| On-going backups, data archival, monitoring, additional queries as required |


## Relational Models

`Data Modeling` is simple a method of describing data or information which includes:
- the structure and format of data storage
- operations performed on data
- constraints/enforced rules

It further extends the data model by defining relationships between various data points

### Basics of the Relational Model

- data is represented by a series of two dimensional tables(`realtions`)
- row in a table represents a `single instance` of the entity
- column represents an `attribute` (or `property`) of that entity

> Each column, for each row, can only have one value in it (i.e. the values must be `atomic`).

### Schema Notation

`A Schema` represents the name of a relation (table) and its' attributes and can be written as follows:

> DEPARTMENT ( department_id, department_name, manager_id, location_id )

## Keys
 `A key` is a single attribute or a combination of attributes that will uniquely identify a specific instance, or row, in a table.

| Type | Desc |
| -- | -- |
| Candidate Key	| an attr or combination of attr that could potentially be used to uniquely identify an single instance, or row, in a table |
| Primary Key	| an attr or combination of attr that has been chosen to uniquely identify a single instance, or row, in a table.  |
| Composite Key	| A composite key is the case where multiple attributes make up a candidate or primary key.  The uniqueness comes from the unique combination of values.  Each single attribute can have repeat values, but there can be no repeats in the combination of values from all attributes that are part of the composite key. |
| Surrogate Key	| Is an artificially added field, or attribute, that is added to replace the existing fields from being the primary key.  This occurs most often in 2 cases: 1) when multiple composite fields are chosen, in order to simplify the interaction with the database and 2) when there is not a field, or attribute, available to be a Primary Key |
| Foreign Key	| A foreign key is a constraint applied to a table defining the relationship between two tables (see next section). |

:::danger Fundamental Rule
table must have one, and only one, primary key. Remember that a composite key is a single key made up of more than one field.
:::


## Relationships

When multiple tables, or entities, are being used, there is often attributes in each table the relates the two tables together

### Relationship Types

| 1-to-many (1-∞)	| These relationships are the most common type of relationship and means that in one direction, there can be only one value per row of the child table, but in the other direction, there can many rows in the child table that reference a single row in the parent table. |
| -- | -- |
| 1-to-1 (1-1)	| These relationships are used to reference multiple attributes of a row, determined by the primary key, where different attributes have varying levels of completeness (i..e they have a value or not).  When investigating the relationship from both directions, there can not be more than one related row in either table.  An example follows. |
| many-to-many (∞-∞)	| Many-to-Many, also noted M:M or M:N, relationships are a special circumstance where there could be more than one reference to each row of the other table, in both directions.  If the league was to decide that a player could play on more than one team, then the design of the tables has to change, but then we would have the scenario where each team could have more than one player and each player could play on more than one team. |

## Referential Integrity
> it helps prevent errors in the data

`Referential Integrity` ensures that values entered into child table attributes already exist in the parent table.  Additionally, referential integrity prevents records in a parent table to be deleted if it is currently being referenced from a child table.


`An orphan record` is a child value that does not have an associated parent.

### Cascading

It's a feature for helping automate the process and simplify the steps needed to allow these changes to occur

Types of cascading:

1. Cascade Updates

 If the primary key of the parent record changes for any reason, then the child records that reference the parent value would be automatically updated to match the change.
 
 :::warning Warning
 This feature is generally safe to include when the parent value is a **primary key** (a single field), as the uniqueness feature would maintain the unique reference between tables.  However, in cases of a **composite primary key**, the uniqueness comes only from the combination of values and therefore it is possible that records could overlap and mixed together where they should not be.
 :::
 
2. Cascade Deletes

Cascade deletes are the most dangerous version of cascading.  If a parent record is deleted, then all child records that refer to the parent record will also be deleted.

:::warning Warning
If there are multiple relationships in a database, one relationship can not override another.
1. cascade deletes - allowed - then both player 123 and the associated coaching position would also be deleted.
2. cascade deletes - not allowed - then the coaching position would prevent player 123 from being deleted, and because player 123 can not be deleted, team 22 (the Hornets) also can not be deleted, regardless of cascade deletes enabled on that relationship.
:::


## Table types

4 major typesof tables in common databases:
| Data Table	| The purpose is to store raw data for later querying, analyzing and manipulating.  The majority of tables in a database are of this type.
Examples: students, employees, orders, products |
| -- | -- |
| Lookup Table	| The purpose is to centralize data to avoid repeated data groups.  A common use of a lookup table is to populate a dropdown list on a website or user interface.,  Often lookup tables are parent tables in relationships.
Examples: Provinces, Countries, Colours, Manufacturers, Gender, Transmission Type | 
| Junction/Bridge Table	| A third table created between two tables to simulate a many-to-many relationship through two opposite 1-to-many relationships.  Junction or Bridge tables can often contain data as well, based on the dependencies between the data and the two parent primary keys. | 
| Temporary Table	| A table that has limited lifetime in a database.  Often these table lack referential integrity, are not manually manipulated, break several fundamental database design rules, but has a very distinct purpose in a database.  These purposes could include:
- moving data from one table to another or importing data from an external source
- migrating an old database design to a new database design
- the static storage of query results to minimize repeated processing required for complex calculations. (Often used for feeding high traffic websites or mobile applications) | 
