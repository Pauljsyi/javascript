
def isPalindrome(s):
    """
    :type s: str
    :rtype: bool
    """
    # removes all non-alphanumeric characters and formats the string to lowercase
    new_s = "".join(c for c in s if c.isalnum()).lower()
    # lc_new_s = new_s

    print(new_s)
    left = 0
    right = len(new_s) - 1
    
    # iterate through the string from left and right side to the middle
    while left <= right:
        if new_s[left] == new_s[right]:
            left = left + 1
            right = right - 1
            # if either sides don't match we will return false
        else:
            return False
    # if iteration complete without mismatch then we return true
    return True


print(isPalindrome("A man, a plan, a canal: Panama"))