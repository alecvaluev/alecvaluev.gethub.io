# Table
A Table is an **unordered collection of records**. 
Each record consists of a key-value pair. Within the same table, keys are unique. 
That is only one record in the table may have a certain key. Values do not have to be unique.

## Operations
A table supports a subset of the following operators:
- initialize - Table is initialized to an empty table
- isEmpty - tests if table is empty
- isFull - tests if table is full
- insert - add a new item with key:value to the table
- delete - given a key remove the record with a matching key
- update - given a key:value pair change the record in table with matching key to the value
- find - given a key find the record
- enumerate - process/list/count all items in the table

## Hash Tables
A hash table uses the key of each record to determine the location in an array structure. To do this, the key is passed into a hash function which will then return a numeric value based on the key.

### Load Factor
The load factor denoted by the symbol λ (lambda)  measures the fullness of the hash table. It is calculated by the formula:

`λ = number of records intable / number of locations` 

### Collisions
When two keys have the same hash index you have a collision. Generally speaking, collisions are unavoidable.

### Bucketing
Bucketing makes the hash table a 2D array instead of a single dimensional array. Every entry in the array is big enough to hold N items

Problems:
- Lots of wasted space.
- If N is exceeded, another strategy will need to be used
- Not good for memory based implementations but doable if buckets are disk-based)

For a hash table of N locations and X buckets at each location:
- Successful Search - O(X) worst case
- Unsuccessful Search - O(X) worst case
- Insertion - O(X) - assuming success, bucketing does not have good way to handle non-successful insertions.
- Deletion - O(X)
- Storage: O(N * X)

### Chaining
At every location (hash index) in your hash table store a linked list of items. 

Chaining is a simple way of handling collisions. Instead of storing the key-value pair  into the array (with capacity ) directly, chaining creates an array of linked lists, initially all empty.For each operation involving key

![chaining](/images/cs/chaining1.png)

### Linear Probing
Bucketting and Chaining are examples of a `closed addressing`.  

`Closed addressing collision` resolution methods are methods where the hash function specifies the exact index of where the item is found.  We may have multiple items at the index but you are looking at just that one index.  

Linear Probing only allows one item at each element.  There is no second dimension to look.  Linear probing is an example of `open addressing`.

`Open addressing collision` resolution methods allow an item to put in a different spot other than what the hash function dictates.  Aside from linear probing, other open addressing methods include quadratic probing and double hashing.

With hash tables where collision resolution is handled via open addressing, each record actually has a set of hash indexes where they can go.  If the first location at the first hash index is occupied, it goes to the second, if that is occupied it goes to the third etc. 

Linear probing is the simplest method of defining "next" index for open address hash tables.  Suppose hash(k) = i, then the next index is simply i+1, i+2, i+3, etc.  You should also treat the entire table as if its round

