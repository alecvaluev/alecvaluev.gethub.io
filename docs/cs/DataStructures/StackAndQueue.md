# Stacks and Queues
A `stack` is a kind of list where items are always added to the front and removed from the front. Thus, a stack is a First In, Last Out (FILO) structure.

`Queues` like stacks are a special kind of list. In the case of a queue, items are added to the back and removed from the front.  In other words a queue is a First In First Out (FIFO) structure. A queue is essentially a line up.

## Operations
Stacks and queues have the ability to do the following:
| Operation | Stack |  Queue |
| -- | -- | -- |
| add an item | push | enqueue |
| remove an item | pop | dequeue |
| access the "next" item to be removed | top | front |

:::tip Note
Stacks and Queues are NOT for general storage.  They are used to track ordering.  Any other features other than the 3 above must be secondary.  
:::

Applications of stacks and queues typically involve tracking the ordering of a set of values.  
Some examples:
 - bracket checking (stack)
 - breadthfirst tree traversals (queue)
 - infix to postfix expression (stack)
 - postfix expression calculation (stack)

## Implementaiton
> As a stack is essentially a list with a restriction on the operations of a list

2 general ways to implement a stack:
1. an array
2. a linked list
