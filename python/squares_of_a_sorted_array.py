def sorted_squares(nums):
    squares = []
    for number in nums:
        squares.append(pow(number, 2))
    squares.sort()
    return squares

print(sorted_squares([-4,-1,0,3,10]))
