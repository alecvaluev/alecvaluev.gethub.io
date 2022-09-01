import{_ as e,o as a,c as i,f as t}from"./app.37ba5124.js";const o="/images/cs/chaining1.png",n={},s=t('<h1 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> Table</h1><p>A Table is an <strong>unordered collection of records</strong>. Each record consists of a key-value pair. Within the same table, keys are unique. That is only one record in the table may have a certain key. Values do not have to be unique.</p><h2 id="operations" tabindex="-1"><a class="header-anchor" href="#operations" aria-hidden="true">#</a> Operations</h2><p>A table supports a subset of the following operators:</p><ul><li>initialize - Table is initialized to an empty table</li><li>isEmpty - tests if table is empty</li><li>isFull - tests if table is full</li><li>insert - add a new item with key:value to the table</li><li>delete - given a key remove the record with a matching key</li><li>update - given a key:value pair change the record in table with matching key to the value</li><li>find - given a key find the record</li><li>enumerate - process/list/count all items in the table</li></ul><h2 id="hash-tables" tabindex="-1"><a class="header-anchor" href="#hash-tables" aria-hidden="true">#</a> Hash Tables</h2><p>A hash table uses the key of each record to determine the location in an array structure. To do this, the key is passed into a hash function which will then return a numeric value based on the key.</p><h3 id="load-factor" tabindex="-1"><a class="header-anchor" href="#load-factor" aria-hidden="true">#</a> Load Factor</h3><p>The load factor denoted by the symbol \u03BB (lambda) measures the fullness of the hash table. It is calculated by the formula:</p><p><code>\u03BB = number of records intable / number of locations</code></p><h3 id="collisions" tabindex="-1"><a class="header-anchor" href="#collisions" aria-hidden="true">#</a> Collisions</h3><p>When two keys have the same hash index you have a collision. Generally speaking, collisions are unavoidable.</p><h3 id="bucketing" tabindex="-1"><a class="header-anchor" href="#bucketing" aria-hidden="true">#</a> Bucketing</h3><p>Bucketing makes the hash table a 2D array instead of a single dimensional array. Every entry in the array is big enough to hold N items</p><p>Problems:</p><ul><li>Lots of wasted space.</li><li>If N is exceeded, another strategy will need to be used</li><li>Not good for memory based implementations but doable if buckets are disk-based)</li></ul><p>For a hash table of N locations and X buckets at each location:</p><ul><li>Successful Search - O(X) worst case</li><li>Unsuccessful Search - O(X) worst case</li><li>Insertion - O(X) - assuming success, bucketing does not have good way to handle non-successful insertions.</li><li>Deletion - O(X)</li><li>Storage: O(N * X)</li></ul><h3 id="chaining" tabindex="-1"><a class="header-anchor" href="#chaining" aria-hidden="true">#</a> Chaining</h3><p>At every location (hash index) in your hash table store a linked list of items.</p><p>Chaining is a simple way of handling collisions. Instead of storing the key-value pair into the array (with capacity ) directly, chaining creates an array of linked lists, initially all empty.For each operation involving key</p><p><img src="'+o+'" alt="chaining"></p><h3 id="linear-probing" tabindex="-1"><a class="header-anchor" href="#linear-probing" aria-hidden="true">#</a> Linear Probing</h3><p>Bucketting and Chaining are examples of a <code>closed addressing</code>.</p><p><code>Closed addressing collision</code> resolution methods are methods where the hash function specifies the exact index of where the item is found. We may have multiple items at the index but you are looking at just that one index.</p><p>Linear Probing only allows one item at each element. There is no second dimension to look. Linear probing is an example of <code>open addressing</code>.</p><p><code>Open addressing collision</code> resolution methods allow an item to put in a different spot other than what the hash function dictates. Aside from linear probing, other open addressing methods include quadratic probing and double hashing.</p><p>With hash tables where collision resolution is handled via open addressing, each record actually has a set of hash indexes where they can go. If the first location at the first hash index is occupied, it goes to the second, if that is occupied it goes to the third etc.</p><p>Linear probing is the simplest method of defining &quot;next&quot; index for open address hash tables. Suppose hash(k) = i, then the next index is simply i+1, i+2, i+3, etc. You should also treat the entire table as if its round</p>',29),l=[s];function h(r,d){return a(),i("div",null,l)}const u=e(n,[["render",h],["__file","Tables.html.vue"]]);export{u as default};
