const n=`# Module 3: Operators - Lesson 1: Arithmetic Operators

Welcome to Module 3, where we will explore the various operators Python offers. Operators are special symbols or keywords that perform operations on values and variables, known as operands. In this first lesson, we'll focus on **arithmetic operators**, which are used to perform mathematical calculations like addition, subtraction, multiplication, and division.

Arithmetic operations are fundamental to almost any programming task, whether you're calculating scores, processing financial data, or working with scientific formulas.

Python supports the following arithmetic operators:

1.  **Addition (\`+\`)**: Adds two operands.
    \`\`\`python
    num1 = 10
    num2 = 5
    sum_result = num1 + num2
    print(f"{num1} + {num2} = {sum_result}")  # Output: 10 + 5 = 15

    float1 = 7.5
    float2 = 2.5
    sum_float = float1 + float2
    print(f"{float1} + {float2} = {sum_float}") # Output: 7.5 + 2.5 = 10.0

    # Addition can also be used for string concatenation (joining strings)
    str1 = "Hello, "
    str2 = "World!"
    greeting = str1 + str2
    print(greeting)  # Output: Hello, World!
    \`\`\`

2.  **Subtraction (\`-\`)**: Subtracts the second operand from the first.
    \`\`\`python
    num1 = 10
    num2 = 5
    difference = num1 - num2
    print(f"{num1} - {num2} = {difference}")  # Output: 10 - 5 = 5

    balance = 100.75
    withdrawal = 20.25
    new_balance = balance - withdrawal
    print(f"New balance: {new_balance}") # Output: New balance: 80.5
    \`\`\`

3.  **Multiplication (\`*\`)**: Multiplies two operands.
    \`\`\`python
    num1 = 10
    num2 = 5
    product = num1 * num2
    print(f"{num1} * {num2} = {product}")  # Output: 10 * 5 = 50

    quantity = 3
    price_per_item = 15.50
    total_cost = quantity * price_per_item
    print(f"Total cost: {total_cost}") # Output: Total cost: 46.5

    # Multiplication can also be used for string repetition
    separator_line = "-" * 20 # Repeats the string "-" 20 times
    print(separator_line) # Output: --------------------
    \`\`\`

4.  **Division (\`/\`)**: Divides the first operand by the second. In Python 3, this operator always performs **float division**, meaning the result will always be a float, even if the division is exact.
    \`\`\`python
    num1 = 10
    num2 = 5
    quotient_float = num1 / num2
    print(f"{num1} / {num2} = {quotient_float}")  # Output: 10 / 5 = 2.0 (a float)

    num3 = 7
    num4 = 2
    result_float = num3 / num4
    print(f"{num3} / {num4} = {result_float}")  # Output: 7 / 2 = 3.5 (a float)

    # Division by zero will raise a ZeroDivisionError
    # print(10 / 0) # This would cause an error
    \`\`\`

5.  **Floor Division (\`//\`)**: Divides the first operand by the second and returns the quotient as an integer, discarding the fractional part (i.e., it rounds down to the nearest whole number).
    \`\`\`python
    num1 = 10
    num2 = 3
    floor_quotient = num1 // num2
    print(f"{num1} // {num2} = {floor_quotient}")  # Output: 10 // 3 = 3 (3.33... rounded down)

    num3 = 7
    num4 = 2
    result_floor = num3 // num4
    print(f"{num3} // {num4} = {result_floor}")  # Output: 7 // 2 = 3 (3.5 rounded down)

    num5 = -7
    num6 = 2
    result_neg_floor = num5 // num6 # For negative numbers, rounds towards negative infinity
    print(f"{num5} // {num6} = {result_neg_floor}") # Output: -7 // 2 = -4 (-3.5 rounded down to -4)

    num7 = 10
    num8 = 5
    exact_floor = num7 // num8
    print(f"{num7} // {num8} = {exact_floor}") # Output: 10 // 5 = 2 (integer result)
    \`\`\`

6.  **Modulus (\`%\`)**: Returns the remainder of the division of the first operand by the second.
    This operator is very useful for tasks like checking if a number is even or odd, or for cycling through a sequence of values.
    \`\`\`python
    num1 = 10
    num2 = 3
    remainder = num1 % num2
    print(f"{num1} % {num2} = {remainder}")  # Output: 10 % 3 = 1 (10 divided by 3 is 3 with a remainder of 1)

    num3 = 7
    num4 = 2
    remainder_even_odd = num3 % num4
    print(f"{num3} % {num4} = {remainder_even_odd}") # Output: 7 % 2 = 1 (7 is odd)

    num5 = 10
    num6 = 2
    remainder_is_zero = num5 % num6
    print(f"{num5} % {num6} = {remainder_is_zero}") # Output: 10 % 2 = 0 (10 is even)

    # The sign of the result of modulus matches the sign of the divisor
    print(f"-10 % 3 = {-10 % 3}") # Output: -10 % 3 = 2
    print(f"10 % -3 = {10 % -3}") # Output: 10 % -3 = -2
    \`\`\`

7.  **Exponentiation (\`**\`)**: Raises the first operand to the power of the second operand.
    \`\`\`python
    base = 2
    exponent = 3
    power_result = base ** exponent  # 2 to the power of 3 (2*2*2)
    print(f"{base} ** {exponent} = {power_result}")  # Output: 2 ** 3 = 8

    num = 5
    square = num ** 2
    print(f"Square of {num} is {square}") # Output: Square of 5 is 25

    # Can be used for roots as well (e.g., square root is power of 0.5)
    number_for_sqrt = 16
    square_root = number_for_sqrt ** 0.5
    print(f"Square root of {number_for_sqrt} is {square_root}") # Output: Square root of 16 is 4.0
    \`\`\`

**Order of Operations (Operator Precedence)**

When an expression contains multiple arithmetic operators, Python follows a specific order of operations, similar to standard mathematics. This is often remembered by the acronym PEMDAS/BODMAS:

1.  **P**arentheses \`()\`
2.  **E**xponentiation \`**\`
3.  **M**ultiplication \`*\`, **D**ivision \`/\`, Floor Division \`//\`, **M**odulus \`%\` (these have equal precedence and are evaluated from left to right)
4.  **A**ddition \`+\`, **S**ubtraction \`-\` (these have equal precedence and are evaluated from left to right)

\`\`\`python
# Example of operator precedence
result1 = 10 + 5 * 2  # Multiplication (5 * 2 = 10) is done before addition (10 + 10)
print(f"10 + 5 * 2 = {result1}")  # Output: 10 + 5 * 2 = 20

result2 = (10 + 5) * 2 # Parentheses change the order: (10 + 5 = 15) first, then multiplication (15 * 2)
print(f"(10 + 5) * 2 = {result2}") # Output: (10 + 5) * 2 = 30

result3 = 2 ** 3 * 4 # Exponentiation (2 ** 3 = 8) first, then multiplication (8 * 4)
print(f"2 ** 3 * 4 = {result3}") # Output: 2 ** 3 * 4 = 32

result4 = 100 / 10 * 2 # Division and Multiplication have same precedence, evaluated left to right
                       # (100 / 10 = 10.0) then (10.0 * 2 = 20.0)
print(f"100 / 10 * 2 = {result4}") # Output: 100 / 10 * 2 = 20.0
\`\`\`

When in doubt, or to make your expressions clearer, it is always a good idea to use parentheses \`()\` to explicitly define the order of operations.

**Augmented Assignment Operators**

Python provides shorthand operators, known as augmented assignment operators, for performing an arithmetic operation and an assignment in one step. These can make your code more concise.

*   \`+=\` (Add and assign): \`x += y\` is equivalent to \`x = x + y\`
*   \`-=\` (Subtract and assign): \`x -= y\` is equivalent to \`x = x - y\`
*   \`*=\` (Multiply and assign): \`x *= y\` is equivalent to \`x = x * y\`
*   \`/=\` (Divide and assign): \`x /= y\` is equivalent to \`x = x / y\`
*   \`//=\` (Floor divide and assign): \`x //= y\` is equivalent to \`x = x // y\`
*   \`%=\` (Modulus and assign): \`x %= y\` is equivalent to \`x = x % y\`
*   \`**=\` (Exponentiate and assign): \`x **= y\` is equivalent to \`x = x ** y\`

\`\`\`python
count = 10
count += 5  # count is now 10 + 5 = 15
print(f"Count after += 5: {count}")

total = 100
total -= 20 # total is now 100 - 20 = 80
print(f"Total after -= 20: {total}")

value = 3
value *= 4  # value is now 3 * 4 = 12
print(f"Value after *= 4: {value}")
\`\`\`

**Conclusion**

Arithmetic operators are the workhorses for numerical computation in Python. Understanding how each operator works (\`+\`, \`-\`, \`*\`, \`/\`, \`//\`, \`%\`, \`**\`), their order of precedence, and how to use augmented assignment operators will allow you to perform a wide range of calculations effectively. As you progress, you'll combine these operators with variables and control structures to build complex and useful programs.
`;export{n as default};
