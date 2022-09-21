# Relational Database Design

High-level conceptual data models provide concepts for presenting data in ways that are close to the way people perceive 
data. A typical example is the entity relationship model, which uses main concepts like 
entities, attributes and relationships.

## Record-based Logical Data Models

Three well-known data models of this type:
- relational model

represents data as relations, or tables

- network model

represents data as record types. This model also represents a limited type of one to many relationship called a set type

- hierarchical model

represents data as a hierarchical tree structure. Each branch of the hierarchy represents a number of related records.

## Relational Models

It was introduced by E. F. Codd in 1970. Currently, it is the most widely used data model.

`Data Modeling` is simple a method of describing data or information which includes:
- the structure and format of data storage
- operations performed on data (SQL)
- constraints/enforced rules

It further extends the data model by defining relationships between various data points

:::tip Meaning
The relational data model describes the world as “a collection of inter-related relations (or tables).”
:::

### Basics of the Relational Model

A database is composed of multiple tables and each table holds the data.

- data is represented by a series of two dimensional tables(`realtions/tables/files`)
- `row/record/tuple` in a table represents a `single instance` of the entity
- `column/field` represents an `attribute/property` of that entity

> Each column, for each row, can only have one value in it (i.e. the values must be `atomic`).

`A domain` is the original sets of atomic values used to model data. 

In summary, a domain is a set of acceptable values that a column is allowed to contain.

> domain of Shift has the set of all possible days: {Mon, Tue, Wed…})
>
> domain of Marital Status has a set of possibilities: Married, Single, Divorced

The `degree` is the number of attributes in a table

Properties of a Table:
- has a distinct name
- each row is distinct
- entries in columns are atomic
- entries in columns are from the same domain based on their data type
- operations combining different data types are disallowed.
- each attribute has a distinct name.
- sequence of columns is insignificant.
- sequence of rows is insignificant.

:::danger Terminology Key
| Formal Terms (Codd) | Alternative 1 | Alternative 2 |
| -- | -- | -- |
| Relation | Table | File |
| Tuple | Row | Record |
| Attribute | Column | Field |
:::

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

| Type | Ex |
| -- | -- |
| 1-to-many (1-∞)	| These relationships are the most common type of relationship and means that in one direction, there can be only one value per row of the child table, but in the other direction, there can many rows in the child table that reference a single row in the parent table. |
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

4 major types of tables in common databases:

| Table | Desc |
| -- | -- |
| Data Table	| The purpose is to store raw data for later querying, analyzing and manipulating.  The majority of tables in a database are of this type |
| Lookup Table	| The purpose is to centralize data to avoid repeated data groups.  A common use - to populate a dropdown list on a website or user interface.,  Often lookup tables are parent tables in relationships. Examples: Provinces, Countries, Colours | 
| Junction/Bridge Table	| A third table created between two tables to simulate a many-to-many relationship through two opposite 1-to-many relationships.  Junction or Bridge tables can often contain data as well, based on the dependencies between the data and the two parent primary keys. | 
| Temporary Table	| A table that has limited lifetime in a database.  Often these table lack referential integrity, are not manually manipulated, break several fundamental database design rules, but has a very distinct purpose in a database.  These purposes could include:
- moving data from one table to another or importing data from an external source
- migrating an old database design to a new database design
- the static storage of query results to minimize repeated processing required for complex calculations. (Often used for feeding high traffic websites or mobile applications) | 


:::danger Key Terms
:::details 

**hierarchical model**: represents data as a hierarchical tree structure
**instance**: a record within a table

**network model**: represents data as record types

**relation**: another term for table

**relational model**: represents data as relations or tables

**set type**: a limited type of one to many relationship


**atomic value**: each value in the domain is indivisible as far as the relational model is concernedattribute: principle storage unit in a database

**degree**: number of attributes in a table

**domain**: the original sets of atomic values used to model data; a set of acceptable values that a column is allowed to contain

**record**: contains fields that are related; see tuple

**relation**: a subset of the Cartesian product of a list of domains characterized by a name; the technical term for table or file

**structured query language (SQL)**: the standard database access language

**tuple**: a technical term for row or record


alternate key: all candidate keys not chosen as the primary keycandidate key: a simple or composite key that is unique (no two rows in a table may have the same value) and minimal (every column is necessary)
characteristic entities: entities that provide more information about another table

composite attributes: attributes that consist of a hierarchy of attributes

composite key: composed of two or more attributes, but it must be minimal

dependent entities: these entities depend on other tables for their meaning

derived attributes: attributes that contain values calculated from other attributes

derived entities: see dependent entities

EID: employee identification (ID)

entity: a thing or object in the real world with an independent existence that can be differentiated from other objects

entity relationship (ER) data model: also called an ER schema, are represented by ER diagrams. These are well suited to data modelling for use with databases.

entity relationship schema: see entity relationship data model

entity set:a collection of entities of an entity type at a point of time

entity type: a collection of similar entities

foreign key (FK): an attribute in a table that references the primary key in another table OR it can be null

independent entity: as the building blocks of a database, these entities are what other tables are based on

kernel: see independent entity

key: an attribute or group of attributes whose values can be used to uniquely identify an individual entity in an entity set

multivalued attributes: attributes that have a set of values for each entity

n-ary: multiple tables in a relationship

null: a special symbol, independent of data type, which means either unknown or inapplicable; it does not mean zero or blank

recursive relationship: see unary relationship

relationships: the associations or interactions between entities; used to connect related information between tables

relationship strength:  based on how the primary key of a related entity is defined

secondary key an attribute used strictly for retrieval purposes 

simple attributes: drawn from the atomic value domains

single-valued attributes: see simple attributes

stored attribute: saved physically to the database

ternary relationship: a relationship type that involves many to many relationships between three tables.

unary relationship: one in which a relationship exists between occurrences of the same entity set.
:::
