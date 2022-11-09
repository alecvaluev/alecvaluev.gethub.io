# Class Relationships

## Composition

> -is a has-a relationship between classes.  It implements complete ownership.  The composer object is responsible for destroying its component object(s) at or before its own destruction.  A composition is **incomplete** without its components. 

Design-wise, composition is more flexible (less coupled) than inheritance.  Updates to the component class need not affect the composer class.  However, member functions added to the component class require forwarding member functions in the composer class. 

```cpp

```
## Aggregation

> -is a composition that does not manage the creation or destruction of the objects that it uses.  The responsibility for creating and destroying the objects lies outside the aggregator type.  The aggregator is **complete** whether or not any of the objects that it uses exist.  The objects used survive the destruction of the aggregator. 

Design-wise, aggregation is more flexible (less coupled) than composition.  Updates to any aggregatee type do not interfere with the design of the aggregator type.  Member functions added to the aggregatee type do not require forwarding member functions in the aggregator type. 


## Association

> -is a service relationship.  It does not involve any ownership of one type by another.  Each type is independent and complete without the related type. 

Association is the least coupled relationship between classes.  Member functions in an association do not require forwarding member functions in the related type. 

Consider the relationship between a course and a room in a college.  The course uses the room and the room is booked for the course for a certain period.  , but both exist independently of one another. 



Simpification
:::Tip
`Aggregation` implies a relationship where the child can exist independently of the parent. 

Example: Class (parent) and Student (child). Delete the Class and the Students still exist.

`Composition` implies a relationship where the child cannot exist independent of the parent. 

Example: House (parent) and Room (child). Rooms don't exist separate to a House.
:::
