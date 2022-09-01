# Algorithms and Data Structures

Data structures and algorithms looks at how data for computer programs can best be represented and processed.

## Algorithms Analysis

The two main resources to consider are `time` and `memory`. The resource to optimize for depends on the application and the computing system.

what we really care about is the growth rate of resource consumption with respect to the data size.

### Time Resource
One way that we can measure the amount of time required by an algorithm is to measure how many operations it performs.  
When doing this, we make the assumption that every operation has the same time cost. 

### Memory Resource
This is not calculated by operation count, but we can still make a calculation on this based on variable declarations, dynamically allocated memory etc.  

### Growth Rates
It is about understanding the growth in resource consumption as the amount of data increases

From most efficient to least efficient:
1. Constant (y = 1) 
2. Logarithmic (y = logn)
3. Linear (y = n)
4. Loglinear (y = nlogn)
5. Quadratic (y = n^2)
6. Cubic (y = n^3)
7. Exponential (y = 2^n)

### Asymptotic notation
 - are formal notational methods for stating the upper and lower bounds of a function.
 
> These are:  
> O(f(n)) - Big-O 
>
> o(f(n)) - Little-O 
>
> Ω(f(n)) - Omega
>
> Θ(f(n)) - Theta

"T(n) is O(f(n))" iff for some constants c and n0, T(n) <= cf(n) for all n >= n0 =>  f(n) describes the **upper bound** for T(n)  
"T(n) is Ω(f(n))" iff for some constants c and n0, T(n) <= cf(n) for all n <= n0 =>  f(n) describes the **lower bound** for T(n)   
"T(n) is Θ(f(n))" f(n) describes the **exact bound** for T(n)  
"T(n) is o(f(n))" f(n) describes the **upper bound** for T(n) where T(n) will **never actually be reached**

## Recursion
::: warning Runtime Stack
The runtime stack is a structure that keeps track of function calls and local variables as the program runs. Each time a function is called, it gets added to the top of the runtime stack along with variables and parameters local to that function.  Variables below it become inaccessible.  When a function returns, the function along with it's local variables are popped off the stack allowing access to its caller and its callers variables.
:::


## Lists

A list is an sequence of values. It may have properties such as being sorted/unsorted, having duplicate values or being unique.

Typically have a subset of the following operations:
initialize
add an item to the list
remove an item from the list
search
sort
iterate through all items
and more...

2 ways to implement a list, using as data structure:
1. an array 
   -  items are stored in consecutively
   - direct access to any particular item 
   - grow can be expensive
   - insertion/removal anywhere except the end requires shifting
2. a linked list 
   - stores data in nodes
   - easy to grow and shrink
   - contiguous memory is not required
   -  cannot be searched using binary search
   -  insertion/removal is efficient and runs in constant time.

### Linked List
Data structure that stores a collection of objects in a **sequential** manner.  Each item is stored in a node.  Each node consists of a single piece of data and at least one pointer to another node. 

![singly-linked-list](/images/cs/linkedlist.png)

### Typical Operations
* push_front - add an item to the front of the linked list
* push_back - add an item to the back of the linked list
* pop_front - remove the frontmost item from the linked list
* pop_back - remove the backmost item from the linked list
* insert - given a point within the list insert an item just before that point
* erase - remove a node at a specific point within the list
* erase(a,b) - erases all nodes between a and b
* traversals - some operation that applies to every node in the list

### Iterators
 - allow you to traverse a container class without actually knowing what the underlying container actually is or how that container may be implemented.

Iterators should support the following functionalities at minimum:
 - first  - set iterator to refer to the first item in a container
 - next - sets iterator to the next item in the container
 - isDone - returns true if iterator is not refering to anything
 - currentItem - returns the current piece of data

::: danger Be Cautious
An iterator is NOT a Node pointer.  An iterator essentially hides the fact that there are even nodes within our linked list.  It simply provides access to a set of data stored within a container in a uniform manner.
:::

### Implementation
 - Nodes & Contructor
```cpp
template <typename T>
class DList{
    struct Node{
        T data_;
        Node* prev_;
        Node* next_;
        Node(const T& data=T{}, Node* prev=nullptr, Node* next=nullptr){
            data_=data;
            prev_=prev;
            next_=next;
        }
    };
    Node* front_;
    Node* back_;
    
    public:
      DList(){
          front_=nullptr;
          back_=nullptr;
      }
...
};
```
 - push_front
```cpp
void push_front(const T& data){
    Node* nn = new Node(data,nullptr,front_);
    if(front_){
        front_->prev_=nn;
    }
    else{
        back_=nn;
    }
    front_=nn;
}
```

 - pop_front()
```cpp
void pop_front(){
    if(front_){
        Node* rm = front_;
        front_=front_->next_;
        if(front_==nullptr){  //if only one node exists
            back_=nullptr;
        }
        else{
            front_->prev_=nullptr;
        }
        delete rm;
    }
}
```
 - Iterators
 ```cpp
template <typename T>
class DList{
...
public:
    class const_iterator{
        friend class DList;
    protected:
        const DList* myList_;
        Node* curr_;
        const_iterator(Node* curr, const DList* theList){ 
            curr_ = curr;
            myList_=theList;
        }
    public:
        const_iterator(){
            myList_=nullptr;
            curr_=nullptr;
        }
        //prefix
        const_iterator operator++(){ 
            curr_=curr_->next_;
            return *this;
        } 
        //postfix
        const_iterator operator++(int){
            const_iterator old=*this;
            curr_=curr_->next_;
            return old;
        }
        //prefix
        const_iterator operator--(){
            if(curr_){
                curr_=curr_->prev_;
            }
            else{
                if(myList_){
                    curr_=myList->back_;
                }
            }
            return *this;
        } 
         //postfix            
        const_iterator operator--(int){
            const_iterator old=*this;
            if(curr_){
                curr_=curr_->prev_;
            }
            else{
                if(myList_){
                    curr_=myList->back_;
                }
            }
            return old;        
        } 
        const T& operator*() const{return curr_->data_;}
        bool operator==(const_iterator rhs) const{
            bool rc=false;
            if(myList_==rhs.myList_ && curr_==rhs.curr_)
                rc=true;
            return rc;
        }
		bool operator!=(const_iterator rhs) const{
		    return !(*this==rhs);
		}
    };
    class iterator:public const_iterator{
        //NOTE: the LACK OF data members here. 
        //the curr_ data member is inherited from const_iterator class
        //DO NOT redeclare or the two pointers will be out of sync and
        //potentially cause conflict.
        friend class DList;
        iterator(Node* curr,DList* theList):const_iterator(curr,theList){}
    public:
        iterator():const_iterator(){}
        iterator operator++(){
            //Some compilers will complain if you try to 
            //to access curr_ the same way as const_iterator version
            //of the code.  It will say curr_ is undeclared
            //To get pass this use this-> to access the members of
            //base class:   
            this->curr_= this->curr_->next_;
            return *this;            
        } 
        iterator operator++(int){...}  //postfix
        iterator operator--(){...}     //prefix
        iterator operator--(int){...}  //postfix
        T& operator*(){...}
        const T& operator() const{...}    
    
    };
    const_iterator cbegin() const{return const_iterator(front_,this);}
    const_iterator cend() const{return const_iterator(nullptr,this);}
    iterator begin(){return iterator(front_,this);}
    iterator end(){return iterator(nullptr,this);}
    ...
};
 ```

### Sentinels
Sentinel nodes are nodes that exist at the front and back of a linked list.  These nodes always exist from the time the linked list is created to the time it is destroyed.  They do not hold any data.  The purpose for their existence is to eliminate most of the special cases when writing functions.

![sentinesl](/images/cs/sentinelempty.png)

## Stacks and Queues
A `stack` is a kind of list where items are always added to the front and removed from the front. Thus, a stack is a First In, Last Out (FILO) structure.

`Queues` like stacks are a special kind of list. In the case of a queue, items are added to the back and removed from the front.  In other words a queue is a First In First Out (FIFO) structure. A queue is essentially a line up.

### Operations
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

### Implementaiton
> As a stack is essentially a list with a restriction on the operations of a list

2 general ways to implement a stack:
1. an array
2. a linked list

## Tables



## Sorting



## Trees



## Graphs


