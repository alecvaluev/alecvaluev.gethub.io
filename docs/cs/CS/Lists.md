# Lists

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

## Linked List
Data structure that stores a collection of objects in a **sequential** manner.  Each item is stored in a node.  Each node consists of a single piece of data and at least one pointer to another node. 

![singly-linked-list](/images/cs/linkedlist.png)

## Typical Operations
* push_front - add an item to the front of the linked list
* push_back - add an item to the back of the linked list
* pop_front - remove the frontmost item from the linked list
* pop_back - remove the backmost item from the linked list
* insert - given a point within the list insert an item just before that point
* erase - remove a node at a specific point within the list
* erase(a,b) - erases all nodes between a and b
* traversals - some operation that applies to every node in the list

## Iterators
 - allow you to traverse a container class without actually knowing what the underlying container actually is or how that container may be implemented.

Iterators should support the following functionalities at minimum:
 - first  - set iterator to refer to the first item in a container
 - next - sets iterator to the next item in the container
 - isDone - returns true if iterator is not refering to anything
 - currentItem - returns the current piece of data

::: danger Be Cautious
An iterator is NOT a Node pointer.  An iterator essentially hides the fact that there are even nodes within our linked list.  It simply provides access to a set of data stored within a container in a uniform manner.
:::

## Implementation
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

## Sentinels
Sentinel nodes are nodes that exist at the front and back of a linked list.  These nodes always exist from the time the linked list is created to the time it is destroyed.  They do not hold any data.  The purpose for their existence is to eliminate most of the special cases when writing functions.

![sentinesl](/images/cs/sentinelempty.png)
