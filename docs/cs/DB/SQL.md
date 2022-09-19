# SQL

`SQL` stands for `Structured Query Language` SQL lets you access and manipulate databases.

SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987

 SQL can:
- execute queries against a database
- retrieve data 
- insert records
- update records
- delete records
- create new databases
- create new tables in a database
- create stored procedures in a database
- create views in a database
- set permissions on tables, procedures, and views

:::danger SAME BUT DIFFERENT
SQL is a Standard - BUT.... Although SQL is an ANSI/ISO standard, there are different versions of the SQL language. However, they all DBMSs support at least the major commands (such as SELECT, UPDATE, DELETE, INSERT, CREATE) in a similar manner.  It should also be noted that most of the DBMSs also have their own proprietary extensions in addition to the SQL standard!
:::


## Sub-Categories of SQL

| DML	| Data Manipulation Language	| used to query/change the data stored in the database.  DML common statements include SELECT, INSERT, UPDATE, and DELETE.  They only **impact rows** of data in the tables.  These commands are about "What" data is stored in the database.
| -- | -- | -- |
| DDL	| Data Definition Language	| used to create/modify the structure of the database.  "How" is data stored in the database?  They only **impact tables and columns** and **other stored objects** in the database.  The main statements included in DDL are CREATE, CREATE OR REPLACE, and ALTER.
| TCL	| Transaction Control Language	| TCL is a subset of statements that assist in controlling one or more SQL DML statements that need to either completely succeed or entirely fail.  A transaction must be complete or not happen at all.  Common commands include BEGIN, COMMIT, SAVEPOINT and ROLLBACK
| PL/SQL	| Procedural Language extensions to SQL	| PL/SQL is an advanced compiled procedural language extension to SQL that allows for complex processes to be performed on data or databases.  PL/SQL contains many of the operations that we would find in most programming languages, such as loops, functions, variables, conditional statements, etc.

## SELECT statement

used to retrieve data from a database and is most ofter referred to as a Query.
### Order of Execution
:::tip Oracle and MS SQL
SELECT <column1>, <column2>, <columnN>
FROM <tablename>
WHERE <one or more comparison expressions>
ORDER BY <field list comma separated>;

SELECT and FROM - required,  
  WHERE and ORDER BY - optional.
:::

Get all columns
  
:::tip Oracle and MS SQL
  SELECT * FROM <tablename>;
:::
  
### Order of Execution
  
1. FROM
2. WHERE
3. SELECT
4. ORDER BY

:::warning NOTE
  - SQL code is not case sensitive
  - column and table names must be contained inside double quotes ( " ) if there is a space in the name
  - columns are output in the same order as listed in the SELECT
  - although we almost always include a semi-colon ( ; ) at the end of each statement, it is only required if there is another statement in the same file afterwards.
:::
  
:::tip STYLE DUIDE
- Keywords are entered in upper case
- User defined words are entered in lower case
- Carriage returns are used before each of the main components of an SQL statement
:::

 ## Dual Table (Oracle ONLY)
 
 built in table for outputing something that is **not in a table**
 
 :::warning Oracle
 SELECT * FROM dual;
 
 SELECT 2 * 7 AS number FROM dual
 :::
 
 > used most when dealing with dates, especially when dates are relative to the current date: today, yesterday, tomorrow, next Monday, next week, last week, this year, etc.
