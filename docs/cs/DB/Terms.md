# DB Common Terms

## ACID

 ACID model of database design enforces data integrity through:
- **Atomicity**: Each db transaction must follow an all-or-nothing rule, meaning that if any part of the transaction 
fails, the entire transaction fails.
- **Consistency**: Each db transaction must follow all the database's defined rules; any transaction that would 
violate these rules is not allowed.
- **Isolation**: Each db transaction will occur independently of any other transaction. For example, if multiple 
transactions are submitted concurrently, the database will prevent any interference between them.
- **Durability**: Each database transaction will permanently exist despite any database failure, through backups or 
other means.

## Attribute
> is a characteristic of a database entity. An attribute - a column in a database table, which 
itself is known as an entity.

## Authentication
> Databases use **authentication** to ensure that only authorized users can access the database or certain aspects of the 
database. 

Authentication is **implemented** with usernames and passwords.

```For example, administrators might be authorized to insert or edit data, while regular employees might only view data. 
```

## BASE Model
The BASE model has been developed as an alternative to the ACID model to serve the needs of noSQL databases in which 
the data is not structured in the same way required by relational databases. Its primary tenets are:

- **Basic Availability**: The database is available and operational, backed sometimes by data replication 
distributed across several servers.
- **Soft State**: Countering the ACID model of strict consistency, this tenet states that data does not always have to 
be consistent and that any enforced consistency is the responsibility of the individual database or developer.
- **Eventual Consistency**: At some undefined future point, the database will achieve consistency.

## Constraints
A database constraint is a set of rules that define valid data. The primary constraints are:

- **UNIQUE constraints**: A field must contain a unique value in the table.
- **CHECK constraints**: A field can contain only specific data types or even specific allowable values.
- **DEFAULT constraints**: A field will contain a default value if it has no existing value to preclude a null value.
- **PRIMARY KEY Constraints**: The primary key must be unique.
- **FOREIGN KEY Constraints**: The foreign key must match an existing primary key in another table.

## Database Management System
`DBMS` is the software that manages all aspects of working with a database, from storing and securing the data to 
enforcing data integrity rules, to providing forms for data entry and manipulation. A Relational Database 
Management System implements the relational model of tables and relationships between them.

## Entity
An `entity` is a table in a database. It is described using an Entity-Relationship Diagram, which is a type of 
graphic that shows the relationships amongdatabase tables.

## Functional Dependency
A `functional dependency` constraint helps to ensure data validity, and exists when one attribute determines the 
value of another, described as A -> B which means that the value of A determines the value of B, or that B is 
functionally dependent on A. For example, a table in a university that includes records of all students might have 
a functional dependency between the student ID and the student name, i.e. the unique student ID will determine the 
value of the name.

## Index
An `index` is a data structure that helps speed database queries for large datasets. Database developers create an 
index on particular columns in a table. The index holds the column values but just pointers to the data in the rest 
of the table and can be searched efficiently and quickly.

## Key
A `key` is a database field whose purpose is to uniquely identify a record. Keys help enforce data integrity and avoid 
duplication. The main types of keys used in a database are:

- `Candidate keys`: The set of columns that can each uniquely identify a record and from which the primary key is 
chosen.
- `Primary keys`: This key uniquely identifies a record in a table. It cannot be null.
- `Foreign keys`: The key linking a record to a record in another table. A table's foreign key must exist as the 
primary key of another table.

## Normalization
To normalize a database is to design its tables (relations) and columns (attributes) in a way to ensure data 
integrity and to avoid duplication. The primary levels of normalization are First Normal Form (1NF), Second Normal 
Form (2NF), Third Normal Form (3NF), and Boyce-Codd Normal Form (BCNF).

## NoSQL
`NoSQL` is a database model developed to respond to the need for storing unstructured data such as emails, social 
media posts, video, or images. Rather than using SQL and the strict ACID model to ensure data integrity, NoSQL 
follows the less-strict BASE model. A NoSQL database schema does not use tables to store data; rather, it might 
use a key/value design or graphs.

## Null
The `value null` is frequently confused to mean none or zero; however, it actually means unknown. If a field has a 
value of null, it is a placeholder for an unknown value. Structured Query Language uses the IS NULL and IS NOT NULL 
operators to test for null values.

## Query
A database `query` is usually written in SQL and can be either a select query or an action query. A select query 
requests data from a database; an action query changes, updates, or adds data. Some databases provide drag-and-drop 
forms that hide the semantics of the query, helping people to request information without having to write valid SQL.

## Schema
A database `schema` is the design of tables, columns, relations, and constraints that make up a logically distinct 
section of a database.

## Stored Procedure
A `stored procedure` is a pre-compiled query or SQL statement shared across several different programs and users in a 
Database Management System. Stored procedures improve efficiency, help enforce data integrity, and boost 
productivity.

## Structured Query Language
`Structured Query Language` (SQL), is the most commonly used language to access data from a database. SQL branches 
into two types of syntax. The Data Manipulation Language contains the subset of SQL commands used most frequently 
and includes SELECT, INSERT, UPDATE and DELETE. The Data Definition Language creates new database objects like 
indexes and tables.

## Trigger
A `trigger` is a stored procedure set to execute given a particular event, usually a change to a table's data. For 
example, a trigger might be designed to write to a log, gather statistics, or compute a value.

## View
A database `view` is a filtered set of data displayed to the end user in order to hide data complexity and streamline 
the user experience. A view can join data from two or more tables and contains a subset of information. 
A materialized view is a view that looks and acts as if it were a table in its own right.



















