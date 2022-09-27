# Boyer-Moore Majority Voting Algorithm

One of the popular optimal algorithms which is used to find the majority element 
among the given elements that have **more than N/2** occurrences.

This algorithm works on the fact that if an element occurs more than N/2 times, it means that the remaining elements other than this would definitely be less than N/2. So let us check the proceeding of the algorithm.

> First, choose a candidate from the given set of elements if it is the same as the candidate element, increase the votes. Otherwise, decrease the votes if votes become 0, select another new element as the new candidate.

:::tip Complexity
Time O(1)
Space O(1)
:::
