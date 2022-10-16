# NoSQL

Each NoSQL database has its own unique features. At a high level, many NoSQL databases have the following features:

- Flexible schemas
- Horizontal scaling
- Fast queries due to the data model
- Ease of use for developers

There are several reasons why NoSQL is a potential fit for situations including:

- Schema-less Data Representation - The schema does not have to be defined in advance and can change over time. The Schema is flexible.
- Development Time - Simplicity may reduce the development time greatly. There is no complex SQL queries, such as join.
- High Availability - NoSQL architecture supports data replication. There is no limits on replicas. If the main server is inaccessible, a replica server can take over automatically.
- Plan Ahead for Scalability - It scales out easily with no limit by adding more servers for distributed data.

## Types of NoSQL databases

- **Document databases** store data in documents similar to JSON (JavaScript Object Notation) objects. Each document contains pairs of fields and values. The values can typically be a variety of types including things like strings, numbers, booleans, arrays, or objects.
- **Key-value databases** are a simpler type of database where each item contains keys and values.
- **Wide-column stores** store data in tables, rows, and dynamic columns.
- **Graph databases** store data in nodes and edges. Nodes typically store information about people, places, and things, while edges store information about the relationships between the nodes.

## SQL vs NoSQL Databases

Factors that determine the advantages and drawbacks of using a NoSQL solution include:

- **Entity Schema Requirements**: The density of relationships amongst the entities and the likelihood of the schema to change over time are factors in the decision to choose one over the other. Relational databases are not easily changed but are able to better handle a great number of relationships.
- **Data Access Requirements**: Data must always be consistent or can eventually be consistent. NoSQL databases can often introduce inconsistencies that may be troublesome, where relational databases can solve this by utilizing build in concurrency rules.
- **What they can do**: What NoSQL can offer above Relational databases
- **What they can not do**: What NoSQL DBMSs cannot do that relational databases can do.


## When should NoSQL be used?

following factors lead to selecting a NoSQL database:

- Fast-paced Agile development
- Storage of structured and semi-structured data
- Huge volumes of data
- Requirements for scale-out architecture
- Modern application paradigms like microservices and real-time streaming











