# Kadane’s Algorithm

## Dynamic Programming

> a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of 
those subproblems just once, and storing their solutions using a memory-based data structure (array, map, etc.). So the 
next time the same sub-problem occurs, instead of recomputing its solution, one simply looks up the previously computed 
solution, thereby saving computation time.


`Kadane’s Algorithm` is an iterative dynamic programming algorithm. It calculates the maximum sum subarray ending at a particular position by 
using the maximum sum subarray ending at the previous position.

## Implementation

### Problem

Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

### Example 1:

```
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
```

### Example 2:

```
Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
```

```cpp
using namespace std;

#include <iostream>
#include <vector>

class MaxSumSubArrayOfSizeK
{
public:
    static int findMaxSumSubArray(int k, const vector<int> &arr)
    {
        int windowSum = 0, maxSum = 0;
        int windowStart = 0;
        for (int windowEnd = 0; windowEnd < arr.size(); windowEnd++)
        {
            windowSum += arr[windowEnd]; // add the next element
            // slide the window, no need to slide if we've not hit the window size of 'k'
            if (windowEnd >= k - 1)
            {
                maxSum = max(maxSum, windowSum);
                windowSum -= arr[windowStart]; // subtract the element going out
                windowStart++;                 // slide the window ahead
            }
        }

        return maxSum;
    }
};

int main(int argc, char *argv[])
{
    cout << "Maximum sum of a subarray of size K: "
         << MaxSumSubArrayOfSizeK::findMaxSumSubArray(3, vector<int>{2, 1, 5, 1, 3, 2})
         << endl;
    cout << "Maximum sum of a subarray of size K: "
         << MaxSumSubArrayOfSizeK::findMaxSumSubArray(2, vector<int>{2, 3, 4, 1, 5})
         << endl;
}
```






