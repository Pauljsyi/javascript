def find_sum_of_three(nums, target):
    # your code will replace this placeholder return statement
    nums.sort()
    for i in range(0, len(nums) - 2):
        low = i + 1
        high = len(nums) - 1
        # print(low, high)
        while low < high: 
            triple = nums[i] + nums[low] + nums[high]
            if triple == target:
                return True
            elif triple < target:
                low += 1
            else:
                high -= 1
            
    return False




print(find_sum_of_three([1,-1,0] , -1))
print(find_sum_of_three([3,7,1,2,8,4,5] , 10))
print(find_sum_of_three([3,7,1,2,8,4,5] , 20))
print(find_sum_of_three([3,7,1,2,8,4,5] , 21))
print(find_sum_of_three([-1,2,1,-4,5,-3] , -8))
print(find_sum_of_three([-1,2,1,-4,5,-3] , 0))
print(find_sum_of_three([-1,2,1,-4,5,-3] , 7))