# Containers
 
## Sequencial Containers
 > Elems ordered in a strict linear sequence. Individual elements are accessed by their position in this sequence.
 
### Vector
< vector>

> representing arrays that can change in size

- contiguous storage
- access using offsets 
- storage handled automatically

Compare to other seq.cont.
- efficient access
- relatively efficient adding or removing (end)
- inserting or removing (other pos.) - worse

:::warning Note
vector may allocate extra storage to accommodate for possible growth.

it may need to be reallocated in order to grow in size when new elements are inserted, which implies allocating a new array and moving all elements to it.
- amortized constant time complexity 
:::


### Array
< array> 

- fixed-size
- contiguous storage
- access using offsets
- does not keep any data other than the elem
- can be treated as tuple objects

### Deque (Double ended queue)
< deque>

- dynamic size
- not guaranteed to store all its elements in contiguous storage
- iterators

:::danger Note
access by offset can cause undefined behavious
:::

- efficient insertion and deletion (not only at its end)
- worse insertion and deletion at other pos.


### Forward List
< forward_list>

- impl. singly-linked lists
- constant time insert and erase (anywhere)
- more efficient than list 


Compare to other cont.
- better in inserting, extracting and moving elem(anywhere)
- lack direct access

### List
< list>

- impl. doubly-linked lists
- constant time insert and erase(anywhere)

Compare to other cont.
- better in inserting, extracting and moving elem(anywhere)
- lack direct access



## Container Adaptors

> classes that use an encapsulated object of a specific container class as its underlying container, providing a specific set of member functions to access its elements. 

Support operations: 
 - empty()
 - size()
 - front()
 - push_back()
 - pop_back()

### Queue
< queue>

> designed to operate in a FIFO


:::tip Underlying Container
**deque** | list
:::

### Priority Queue
< queue>

> designed such that its first element is always the greatest of the elements it contains, according to some strict weak ordering criterion.

- random access iters.

:::tip Underlying Container
**vector** | deque
:::

### Stack
< stack>

> designed to operate in a LIFO

- inserted/extracted only from one end

:::tip Underlying Container
**deque** | vector | list
:::

## Associative Containers

> store elements formed by a combination of a key value and a mapped value, following a specific order

## Map
< map>

>  key values are generally used to sort and uniquely identify the elem

grouped together in member type value_type, which is a pair type combining both:

typedef pair<const Key, T> value_type;

- impl. as binary search trees
- unique keys
- sorted
- slower than unordered_map
- direct access by key using []

## Mutlimap
< map>

:::danger Note
 Same as MAP but elements in the container can have equivalent keys
:::

## Unordered Map
< unordered_map>

- not sorted 
- unique keys
- organized into buckets depending on their hash values
- faster than map
- less efficient for range iteration through a subset of their elem

## Unordered Mutlimap
< unordered_map>

Elements with equivalent keys are grouped together in the same bucket and in such a way that an iterator (see equal_range) can iterate through all of them.



## Set
< set>

> store unique elements following a specific order

:::warning Note 
the value is itself the key, of type T
::

- each value is unique
- value cannot be modified once inside
- sorted
- slower than unordered_set 

## Multiset
< set>

:::warning Note 
the value is itself the key, of type T
::

- value cannot be modified once inside
- sorted
- impl. as binary search trees
- can have equivalent keys
- slower than unordered_multiset





## Sequence containers

| Headers |	< array>	|	< vector>	|	< deque>	|	<forward_list> |	< list> |
| -- | -- | -- | -- | -- | -- | 
| **Members**	| array	| vector	| deque	| forward_list	| list | 
| **constructor**	| implicit	| vector	| deque	| forward_list	| list | 
| **destructor**	| implicit	| ~vector	| ~deque	| ~forward_list	| ~list | 
| **operator=**	| implicit	| operator=	| operator=	| operator=	| operator= | 
| **begin**	| begin	| begin	| begin	| begin/before_begin	| begin | 
| **end**	| end	| end	| end	| end	| end | 
| **rbegin**	| rbegin	| rbegin	| rbegin	| | rbegin |
| **rend**	| rend	| rend	| rend	| | rend |
| **cbegin**	| cbegin	| cbegin	| cbegin	| cbegin/cbefore_begin	| cbegin | 
| **cend**	| cend	| cend	| cend	| cend	| cend | 
| **crbegin**	| crbegin	| crbegin	| crbegin	| 	| crbegin | 
| **crend**	| crend	| crend	| crend	| 	| crend | 
| **capacity**	| size	| size	| size	| size | 		| size | 
| **max_size**	| max_size	| max_size	| max_size	| max_size	| max_size | 
| **empty**	| empty	| empty	| empty	| empty	| empty | 
| **resize**	| | 	resize	| resize	| resize	| resize | 
| **shrink_to_fit**	| | shrink_to_fit	| shrink_to_fit | 	| | 	
| **capacity**	| | capacity | | | |  			
| **reserve**	| 	| reserve	| | | | 		
| **element access**	| front	| front	| front	| front	| front	| front | 
| **back**	| back	| back	| back	| | 	back | 
| **operator[]**	| operator[]	| operator[]	| operator[] | | | 		
| **at**	| at	| at	| at |  |  | 		
| **assign**	| | 	| assign	| assign	| assign	| assign | 
| **emplace**	| | 	| emplace	| emplace	| emplace_after	| emplace | 
| **insert**	| | 	| insert	| insert	| insert_after	| insert | 
| **erase**	| | 	| erase	erase	| erase_after	| erase | 
| **emplace_back** | 		| emplace_back	| emplace_back	| 	| emplace_back | 
| **push_back** 	| | 	push_back	| push_back	| | 	push_back | 
| **pop_back**	| | 	pop_back	| pop_back	| | 	pop_back | 
| **emplace_front**	|	| 	| emplace_front	| emplace_front	| emplace_front | 
| **push_front**	| |	| push_front	| push_front	| push_front | 
| **pop_front**		| |	| pop_front	| pop_front	| pop_front | 
| **clear**		| | clear	| clear	| clear	| clear | 
| **swap**	| swap	| swap	| swap	| swap	| swap | 
| **splice**	| | | | splice_after	| splice | 
| **remove** | | | | remove	| remove | 
| **remove_if** | | | | remove_if	| remove_if | 
| **unique** | | | | unique	| unique | 
| **merge**	| | | | merge	| merge | 
| **sort**	| | | | sort	| sort | 
| **reverse**	| | | | reverse	| reverse | 
| **get_allocator**	| | get_allocator	| get_allocator	| get_allocator	| get_allocator | 
| **data**	| data	| data | | | | 	


## Associative containers
| Headers	| < set>	| | < map>	| | <unordered_set>	| | <unordered_map> | |  
| -- | -- | -- | -- | -- | -- | -- | -- | -- |
| **Members**	| set	| multiset	| map	| multimap	| unordered_set	| unordered_multiset	| unordered_map	| unordered_multimap | 
| **constructor**	| set	| multiset	| map	multimap	| unordered_set	| unordered_multiset	| unordered_map	| unordered_multimap | 
| **destructor**	| ~set	| ~multiset	| ~map	| ~multimap	| ~unordered_set	| ~unordered_multiset	| ~unordered_map	| ~unordered_multimap | 
| **assignment**	| operator=	| operator=	| operator=	| operator=	| operator=	| operator=	| operator=	| operator= | 
| **begin**	| begin	| begin	| begin	| begin	| begin	| begin	| begin	| begin | 
| **end**	| end	| end	| end	| end	| end	| end	| end	| end | 
| **rbegin**	| rbegin	| rbegin	| rbegin	| rbegin | | | | | 				
| **rend**	| rend	| rend	| rend	| rend | | | | | 				
| **cbegin**	| cbegin	| cbegin	| cbegin	| cbegin	| cbegin	| cbegin	| cbegin	| cbegin | 
| **cend**	| cend	| cend	| cend	| cend	| cend	| cend	| cend	| cend | 
| **crbegin**	| crbegin	| crbegin	| crbegin	| crbegin | | | | | 				
| **crend**	| crend	| crend	| crend	| crend |  | | | | 				
| **capacity**	| size	| size	| size	| size	| size	| size	| size	| size	| size | 
| **max_size**	| max_size	| max_size	| max_size	| max_size	| max_size	| max_size	| max_size	| max_size | 
| **empty**	| empty	| empty	| empty	| empty	| empty	| empty	| empty	| empty | 
| **reserve**	| | | | | reserve	| reserve	| reserve	| reserve | 
| **at** | | | at | | | | at | 	
| **operator[]**	| | | operator[] | | | | operator[]	| 
| **emplace**	| emplace	| emplace	| emplace	| emplace	| emplace	| emplace	| emplace	| emplace | 
| **emplace_hint**	| emplace_hint	| emplace_hint	| emplace_hint	| emplace_hint	| emplace_hint	| emplace_hint	| emplace_hint	| emplace_hint | 
| **insert**	| insert	| insert	| insert	| insert	| insert	| insert	| insert	| insert | 
| **erase**	| erase	| erase	| erase	| erase	| erase	| erase	| erase	| erase | 
| **clear**	| clear	| clear	| clear	| clear	| clear	| clear	| clear	| clear | 
| **swap**	| swap	| swap	| swap	| swap	| swap	| swap	| swap	| swap | 
| **count**	| count	| count	| count	| count	| count	| count	| count	| count | 
| **find**	| find	| find	| find	| find	| find	| find	| find	| find | 
| **equal_range**	| equal_range	| equal_range	| equal_range	| equal_range	| equal_range	| equal_range	| equal_range	| equal_range | 
| **lower_bound**	| lower_bound	| lower_bound	| lower_bound	| lower_bound | | | | | 				
| **upper_bound**	| upper_bound	| upper_bound	| upper_bound	| upper_bound | | | | | 				
| **get_allocator**	| get_allocator	| get_allocator	| get_allocator	| get_allocator	| get_allocator	| get_allocator	| get_allocator	| get_allocator | 
| **key_comp**	| key_comp	| key_comp	| key_comp	| key_comp | | | | | 				
| **value_comp**	| value_comp	| value_comp	| value_comp	| value_comp | | | | | 				
| **key_eq** | | | | | key_eq	| key_eq	| key_eq	| key_eq | 
| **hash_function** | | | | | hash_function	| hash_function	| hash_function	| hash_function | 
| **buckets	bucket** | | | | | bucket	| bucket	| bucket	| bucket | 
| **bucket_count** | | | | | bucket_count	| bucket_count	| bucket_count	| bucket_count | 
| **bucket_size** | | | | | bucket_size	|	bucket_size	|	bucket_size	|	bucket_size | 
| **max_bucket_count** | | | | | max_bucket_count	|	max_bucket_count	|	max_bucket_count	|	max_bucket_count | 
| **rehash** | | | | | rehash	|	rehash	|	rehash	|	rehash | 
| **load_factor** | | | | | load_factor	|	load_factor	|	load_factor	|	load_factor | 
| **max_load_factor** | | | | | max_load_factor |	max_load_factor	|	max_load_factor	|	max_load_factor |
  
