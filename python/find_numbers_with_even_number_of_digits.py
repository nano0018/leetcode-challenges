def count_digits(nums):
    digits = 0
    while True:
        validation = nums / 10 ** digits
        if validation >= 1:
            digits += 1
        else:
            break
    return digits


def find_numbers(numbers):
    """
    :type nums: List[int]
    :rtype: int
    """
    count_even = 0
    for number in numbers:
        number_digits = count_digits(number)
        if not number_digits % 2:
            count_even += 1
    return count_even


print(find_numbers([12, 345, 2, 6, 7896]))
