# Red Black Trees

> trees that are named after the way the nodes are coloured(red/black)
> 
> The height of a red black tree is at most 2 * log(n+1).

Colouring rules:
1. every node must have a colour either red or black.
2. The root node must be black
3. If a node is red, its children must be black (=> red nodes cannot have red parents)
4. Every path from root to a null node must have exactly the same number of black nodes.

## Insertion

>  bottom up insertion algorithm

1. find the correct empty tree (like bst) and insert new node as a red node.
2. working way up the tree back to parent fix the tree so that the red-black tree rules are maintained.

### Fixing nodes:
- If root becomes red, change it to black.
  - This won't break any rules because you are just adding 1 black node to every branch of the tree, the number of black nodes increase by 1 everywhere.  This can only happen as the root as it is the only node that is part of every path from root to nullleaf
- If there are two red nodes in a row:
  - Identify the following nodes:
    - upper red node as the Parent (P)
    - the lower red node as the Child (C)
    - parent of parent is Grandparent (G)
    - sibling of Parent as Parent's sibling (PS)
- if the PS is black
  - perform a rotation (look at G->P->C, if they form a straight line do a zig-zig(single) rotation, if there is a bend, do a zig-zag (double rotation)
  - after rotation exchange G's colour with the node that took over G's spot.  In otherwords
    - make which ever node  (depends if it was zigzig or zigzag rotation... it will either be P or C) that took over G's node black
    - make G red
- if the PS is red
  - exchange the colour of the grand parent with its two children. In otherwords
    - G becomes red
    - P and PS becomes black


> Example: https://catherine-leung.gitbook.io/data-strutures-and-algorithms/red-black-trees




















