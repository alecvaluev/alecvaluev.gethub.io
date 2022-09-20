# Containers Member Functions

## Sequence Containers
## Vector
- sequence containers representing arrays that can change in size.

- use contiguous storage => their elements can be accessed using offsets on regular pointers to its elements. 
- size can change dynamically (storage being handled automatically by the container).

Internally, vectors use a dynamically allocated array to store their elements. This array may need to be reallocated in order to grow in size when new elements are inserted, which implies allocating a new array and moving all elements to it. This is a relatively expensive task in terms of processing time, and thus, vectors do not reallocate each time an element is added to the container.

Instead, vector containers may allocate some extra storage to accommodate for possible growth, and thus the container may have an actual capacity greater than the storage strictly needed to contain its elements (i.e., its size). Libraries can implement different strategies for growth to balance between memory usage and reallocations, but in any case, reallocations should only happen at logarithmically growing intervals of size so that the insertion of individual elements at the end of the vector can be provided with amortized constant time complexity (see push_back).

Therefore, compared to arrays, vectors consume more memory in exchange for the ability to manage storage and grow dynamically in an efficient way.

Compared to the other dynamic sequence containers (deques, lists and forward_lists), vectors are very efficient accessing its elements (just like arrays) and relatively efficient adding or removing elements from its end. For operations that involve inserting or removing elements at positions other than the end, they perform worse than the others, and have less consistent iterators and references than lists and forward_lists.




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
  
