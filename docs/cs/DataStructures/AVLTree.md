# AVL Trees

An AVL tree does not create a perfectly balanced binary search trees. Instead it creates a height balanced binary search trees.

> A tree is perfectly balanced if it is empty or the number of nodes in each subtree differ by no more than 1

:::tip Time
- search through a height balanced tree is O(log n). 
- insert/delete can also be done in O(log n) time.
:::

## Height Balance

> height balance = height of right - height of left
> 
>    of node      subtree             subtree

## Insertion
:::damger Note
The adjustment must happen from the bottom up
:::

- Find the appropriate empty subtree where new value should go by comparing with values in the tree.
- Create a new node at that empty subtree.
- New node is a leaf and thus will have a height balance of 0
- go back to the parent and adjust the height balance.
- If the height balance of a node is ever more than 1 or less than -1, the subtree at that node will have to go through a rotation in order to fix the height balance. The process continues until we are back to the root.
