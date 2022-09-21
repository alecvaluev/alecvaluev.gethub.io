import{_ as e,o as t,c as o,f as a}from"./app.f1b9fe22.js";const r="/images/cs/bst3.png",n={},i=a('<h1 id="trees" tabindex="-1"><a class="header-anchor" href="#trees" aria-hidden="true">#</a> Trees</h1><p>Trees are typically implemented using a Node/link data structure like that of a linked list.</p><blockquote><p>It has the ability to classify data and separate it reducing the overhead of search.</p></blockquote><h2 id="terminology" tabindex="-1"><a class="header-anchor" href="#terminology" aria-hidden="true">#</a> Terminology</h2><ul><li><code>Node</code>: the thing that store the data within the tree . (each circle in the above diagram is a node)</li><li><code>Root Node</code>: the top most node from which all other nodes come from. A is the root node of the tree.</li><li><code>Subtree</code>: Some portion of the entire tree, includes a node (the root of the subtree) and every node that goes downwards from there. A is the root of the entire tree. B is the root of the subtree containing B,D,E and F</li><li><code>Empty trees</code>: A tree with no nodes</li><li><code>Leaf Node</code>: A node with only empty subtrees (no children) Ex. D,E,F,I,J,and G are all leaf nodes</li><li><code>Children</code>: the nodes that is directly 1 link down from a node is that node&#39;s child node. Ex. B is the child of A. I is the child of H</li><li><code>Parent</code> the node that is directly 1 link up from a node. Ex. A is parent of B. H is the parent of I</li><li><code>Sibling</code>: All nodes that have the same parent node are siblings Ex. E and F are siblings of D but H is not</li><li><code>Ancestor</code>: All nodes that can be reached by moving only in an upward direction in the tree. Ex. C, A and H are all ancestors of I but G and B are not.</li><li><code>Descendants</code> or <code>Successors</code> of a node are nodes that can be reached by only going down in the tree. Ex. Descendants of C are G,H,I and J</li><li><code>Depth</code>: Distance from root node of tree. Root node is at depth 0. B and C are at depth 1. Nodes at depth 2 are D,E,F,G and H. Nodes at depth 3 are I and J</li><li><code>Height</code>: Total number of nodes from root to furthest leaf. Our tree has a height of 4.</li><li><code>Path</code>: Set of branches taken to connect an ancestor of a node to the node. Usually described by the set of nodes encountered along the path.</li><li><code>Binary tree</code>: A binary tree is a tree where every node has 2 subtrees that are also binary trees. The subtrees may be empty. Each node has a left child and a right child. Our tree is NOT a binary tree because B has 3 children.</li></ul><h2 id="binary-search-tree-bst" tabindex="-1"><a class="header-anchor" href="#binary-search-tree-bst" aria-hidden="true">#</a> Binary Search Tree (BST)</h2><p>Binary trees where all values in the left subtree &lt; in the right subtree.</p><p><img src="'+r+'" alt="binary-tree"></p>',8),d=[i];function s(h,c){return t(),o("div",null,d)}const f=e(n,[["render",s],["__file","Trees.html.vue"]]);export{f as default};