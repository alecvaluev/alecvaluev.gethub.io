# Database Application Development

## Application Development and Design

The process of developing software applications are typically developed in multiple tiers.

These **Tiers** typically include:
1. Presentation / User Interface / View Layer
2. Business Logic / Application Logic / Controller Layer
3. Resource Management / Data Access / Model Layer

### Model Layer
- often design to include software that represents the structure of the database and the DML statements and routines needed to manipulate the data, both reading and writing.

(through creating a series of classes)

### Business Logic Layer
- the middle layer that takes input from the user interface and translates it according to business rules and application rules to forward it to the database layer for storage or retrieval. 

The layer  is kept separate from the data access and user interface layer such that changes can be made to the business rules with little or no impact on the other layers

### View/User Layer
- a web site, mobile application or a windows application. Access between the user interface according and the business layer can be controlled through user access and role management and if often accessed through an API (Application Programming Interface).


## Design Methods

Some of the approaches to database driven applications include:

:::details Bottom-up or database-first approach
> developing the database first

Pros
- ability to automate the code writing process through code generation
- data access can almost be completely automated
- fewer iterations and smaller development timelines

Cons
- difficult for clients to work with & often results in a long period of time near the start of the project where the client is not involved and would not see any progress
- a relationship breakdown between client and vendor
- limitations in the design of the design of the user interface due to code already being written
:::

:::details Top-Down or UI-first approach
> the design of the user interface first

Pros
- early engagement with the client => more info and commun. about software requirements
- better user-interface design
- focuses on final goals
- Addresses: functional issues - operations are supported and non-functional issues as performance and availability

Cons
- can lead to increased development time 
- heavy engagement with the client
- client often believes the project is near completion, and gets impatient as the remainder of the application
- system has to be developed entirely from scratch with little code generation or rapid application development techniques available

:::

:::details Inside-Out or Code-First approach
> focuses on the database access or model layer first built based upon the data requirements gathering process
> 
> allows developer to create the required classes, properties and methods first and then generate the database from the code

Pros
- works well for a team with strong developers, and can give the developers a deep understanding of all the code

Const
- an incomplete database design and many criteria and database features missing

:::

:::details Outside-In or Client Centric approach
> uses the requirements gathering results and simultaneously designs both the database and user interface layers. Then as both ends are developed, they will work inwards towards the business logic layer.

Pros
- balances the client interactive parts of the development with those parts where very little client interaction is involved.

Const
- reiterating the design of both the user interface and data access layers because of considerations determined through the middle or business logic tiers

:::


