# Coding Patterns
[14 Patters to Ace](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed)

1. Sliding Window

When to use:
- The problem input is a linear data structure such as a linked list, array, or string
- You’re asked to find the longest/shortest substring, subarray, or a desired value

Problem patterns:
- Maximum sum subarray of size ‘K’ (easy)
- Longest substring with ‘K’ distinct characters (medium)
- String anagrams (hard)

2. Two Pointers or Iterators

Two Pointers is a pattern where two pointers iterate through the data structure in tandem until one or both of the 
pointers hit a certain condition.Two Pointers is often useful when searching pairs in a sorted array or linked 
list

When to use:

- It will feature problems where you deal with sorted arrays (or Linked Lists) and need to find a set of elements 
that fulfill certain constraints
- The set of elements in the array is a pair, a triplet, or even a subarray

Problem patterns:

- Squaring a sorted array (easy)
- Triplets that sum to zero (medium)
- Comparing strings that contain backspaces (medium)

3. Fast and Slow pointers (Hare & Tortoise algorithm)

is a pointer algorithm that uses two pointers which move through the array (or sequence/linked list) at different 
speeds. This approach is quite useful when dealing with cyclic linked lists or arrays.

How do you identify when to use the Fast and Slow pattern?

- The problem will deal with a loop in a linked list or array
- When you need to know the position of a certain element or the overall length of the linked list.

When should I use it over the Two Pointer method mentioned above?
- There are some cases where you shouldn’t use the Two Pointer approach such as in a singly linked list where you 
can’t move in a backwards direction. An example of when to use the Fast and Slow pattern is when you’re trying to 
determine if a linked list is a palindrome.

Problem patterns:

- Linked List Cycle (easy)
- Palindrome Linked List (medium)
- Cycle in a Circular Array (hard)

4. Merge Intervals

pattern is an efficient technique to deal with overlapping intervals. In a lot of problems involving intervals, you 
either need to find overlapping intervals or merge intervals if they overlap.

### The pattern works like this:

Given two intervals (‘a’ and ‘b’), there will be six different ways the two intervals can relate to each other:

recognizing these six cases will help you help you solve a wide range of problems from inserting intervals to optimizing interval merges.

When to use:

- If you’re asked to produce a list with only mutually exclusive intervals
- If you hear the term “overlapping intervals”.

Problem patterns:

- Intervals Intersection (medium)
- Maximum CPU Load (hard)


5. Cyclic sort

pattern iterates over the array one number at a time, and if the current number you are iterating is not at the 
correct index, you swap it with the number at its correct index. 

How do I identify this pattern?

- They will be problems involving a sorted array with numbers in a given range
- If the problem asks you to find the missing/duplicate/smallest number in an sorted/rotated array

Problems featuring cyclic sort pattern:

- Find the Missing Number (easy)
- Find the Smallest Missing Positive Number (medium)

6. In-place reversal of linked list

This pattern reverses one node at a time starting with one variable (current) pointing to the head of the linked 
list, and one variable (previous) will point to the previous node that you have processed. In a lock-step manner, 
you will reverse the current node by pointing it to the previous before moving on to the next node. Also, you will 
update the variable “previous” to always point to the previous node that you have processed.

How do I identify when to use this pattern:

- If you’re asked to reverse a linked list without using extra memory

Problems featuring in-place reversal of linked list pattern:

- Reverse a Sub-list (medium)
- Reverse every K-element Sub-list (medium)

7. Tree BFS

This pattern is based on the Breadth First Search (BFS) technique to traverse a tree and uses a queue to keep track of all the nodes of a level before jumping onto the next level.

works by pushing the root node to the queue and then continually iterating until the queue is empty. For each iteration, we remove the node at the head of the queue and “visit” that node. After removing each node from the queue, we also insert all of its children into the queue.

How to identify the Tree BFS pattern:

- If you’re asked to traverse a tree in a level-by-level fashion (or level order traversal)

Problems featuring Tree BFS pattern:

- Binary Tree Level Order Traversal (easy)
- Zigzag Traversal (medium)

8. Tree DFS

You can use recursion (or a stack for the iterative approach) to keep track of all the previous (parent) nodes while traversing.

The Tree DFS pattern works by starting at the root of the tree, if the node is not a leaf you need to do three things:

  1. Decide whether to process the current node now (pre-order), or between processing two children (in-order) or after processing both children (post-order).
  2. Make two recursive calls for both the children of the current node to process them.

How to identify the Tree DFS pattern:

- If you’re asked to traverse a tree with in-order, preorder, or postorder DFS
- If the problem requires searching for something where the node is closer to a leaf

Problems featuring Tree DFS pattern:

- Sum of Path Numbers (medium)
- All Paths for a Sum (medium)

9. Two heaps
