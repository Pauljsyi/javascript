from collections import deque

def find_max_sliding_window(nums, window_size):
    # your code will replace this placeholder return statement
    # print(nums, window_size)
    result = []
    window = deque()

    for i in range(window_size):
        while window and nums[i] >= nums[window[-1]]:
            window.pop()
        window.append(i)
    
    result.append(nums[window[0]])

    for i in range(window_size, len(nums)):
        while window and nums[i] >= nums[window[-1]]:
            window.pop()
    
        if window and window[0] <= (i - window_size):
            window.popleft()

        window.append(i)
        result.append(nums[window[0]])
    return result



print(find_max_sliding_window([1,2,3,4,5,6,7,8,9,10] , 3))
print(find_max_sliding_window([10, 9, 8, 7, 6, 5, 4, 3, 2, 1] , 3))
print(find_max_sliding_window([10, 10, 10, 10, 10, 10, 10, 10, 10, 10] , 3))
print(find_max_sliding_window([1, 5, 8, 10, 10, 10, 12, 14, 15, 19, 19, 19, 17, 14, 13, 12, 12, 12, 14, 18, 22, 26, 26, 26, 28, 29, 30] , 3))
print(find_max_sliding_window([10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67] , 3))
print(find_max_sliding_window([4, 5, 6, 1, 2, 3] , 3))