# Best-sum-of-n-integers function

This is a function that sums the most approximate(lower than t)destination of the given array of distances(ls) taking into account number of cities to visit (k)

### The chooseOptimalDistance function accepts parameters:

- t(maximum sum of distances, integer > = 0),
- k(number of cities to visit, k > = 1),
- ls(list of distances, all distances are positive or zero integers, and this
  the list contains at least one item).

  The function returns the "best" sum, ie the largest possible sum k of smaller distances
  or equal to the specified limit t, if this amount exists, or if it does not exist - null.
