# -*- coding: utf-8 -*-
'''
Write a function:
def smallestPositiveInteger(A)

Given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.
'''


def smallestPositiveInteger(A):
    sorted_A = sorted(A)

    for i in range(len(sorted_A) - 1):
        if (sorted_A[0] != 1):
            return 1
        diff = sorted_A[i + 1] - sorted_A[i]
        if (diff > 1 and sorted_A[i] > 0):
            return sorted_A[i] + 1

    if (sorted_A[-1] > 0):
        return sorted_A[-1] + 1

    return 1


A = [-1, -3, -2]
# 1
print(smallestPositiveInteger(A))
