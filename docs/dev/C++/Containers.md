# Containers

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
