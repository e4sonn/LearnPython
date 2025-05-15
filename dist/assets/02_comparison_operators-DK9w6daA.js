const e=`# Module 3: Operators - Lesson 2: Comparison Operators

In the previous lesson, we explored arithmetic operators that perform mathematical calculations. Now, we turn our attention to another crucial set of operators: **comparison operators**. These operators are used to compare two values (operands) and determine the relationship between them. The result of a comparison operation is always a Boolean value: either \`True\` or \`False\`.

Comparison operators are the foundation of decision-making in Python programs. They are extensively used in conditional statements (like \`if\` statements) and loops (like \`while\` loops) to control the flow of execution based on whether certain conditions are met.

Python supports the following comparison operators:

1.  **Equal to (\`==\`)**: Checks if the values of two operands are equal.
    *   Do not confuse this with the single equals sign (\`=\`), which is the assignment operator used for assigning values to variables.
    \`\`\`python
    x = 10
    y = 5
    z = 10

    print(f"{x} == {y}: {x == y}")  # Output: 10 == 5: False
    print(f"{x} == {z}: {x == z}")  # Output: 10 == 10: True

    str1 = "hello"
    str2 = "Hello"
    str3 = "hello"

    print(f"\\"{str1}\\" == \\"{str2}\\": {str1 == str2}") # Output: "hello" == "Hello": False (strings are case-sensitive)
    print(f"\\"{str1}\\" == \\"{str3}\\": {str1 == str3}") # Output: "hello" == "hello": True

    list1 = [1, 2, 3]
    list2 = [1, 2, 3]
    list3 = [3, 2, 1]
    print(f"{list1} == {list2}: {list1 == list2}") # Output: [1, 2, 3] == [1, 2, 3]: True (compares content and order)
    print(f"{list1} == {list3}: {list1 == list3}") # Output: [1, 2, 3] == [3, 2, 1]: False
    \`\`\`

2.  **Not equal to (\`!=\`)**: Checks if the values of two operands are not equal.
    \`\`\`python
    x = 10
    y = 5
    z = 10

    print(f"{x} != {y}: {x != y}")  # Output: 10 != 5: True
    print(f"{x} != {z}: {x != z}")  # Output: 10 != 10: False

    str1 = "Python"
    str2 = "Java"
    print(f"\\"{str1}\\" != \\"{str2}\\": {str1 != str2}") # Output: "Python" != "Java": True
    \`\`\`

3.  **Greater than (\`>\`)**: Checks if the value of the left operand is greater than the value of the right operand.
    \`\`\`python
    a = 15
    b = 10

    print(f"{a} > {b}: {a > b}")    # Output: 15 > 10: True
    print(f"{b} > {a}: {b > a}")    # Output: 10 > 15: False
    print(f"{a} > 15: {a > 15}")  # Output: 15 > 15: False

    # For strings, comparison is lexicographical (dictionary order)
    # Uppercase letters are considered "smaller" than lowercase letters based on their ASCII/Unicode values.
    print(f"\\"apple\\" > \\"banana\\": {"apple" > "banana"}") # Output: "apple" > "banana": False
    print(f"\\"zebra\\" > \\"apple\\": {"zebra" > "apple"}")   # Output: "zebra" > "apple": True
    print(f"\\"Apple\\" > \\"apple\\": {"Apple" > "apple"}")   # Output: "Apple" > "apple": False (A is smaller than a)
    \`\`\`

4.  **Less than (\`<\`)**: Checks if the value of the left operand is less than the value of the right operand.
    \`\`\`python
    a = 15
    b = 10

    print(f"{a} < {b}: {a < b}")    # Output: 15 < 10: False
    print(f"{b} < {a}: {b < a}")    # Output: 10 < 15: True
    print(f"{a} < 15: {a < 15}")  # Output: 15 < 15: False

    print(f"\\"cat\\" < \\"dog\\": {"cat" < "dog"}") # Output: "cat" < "dog": True
    \`\`\`

5.  **Greater than or equal to (\`>=\`)**: Checks if the value of the left operand is greater than or equal to the value of the right operand.
    \`\`\`python
    p = 20
    q = 20
    r = 25

    print(f"{p} >= {q}: {p >= q}")  # Output: 20 >= 20: True
    print(f"{r} >= {p}: {r >= p}")  # Output: 25 >= 20: True
    print(f"{p} >= {r}: {p >= r}")  # Output: 20 >= 25: False
    \`\`\`

6.  **Less than or equal to (\`<=\`)**: Checks if the value of the left operand is less than or equal to the value of the right operand.
    \`\`\`python
    p = 20
    q = 20
    r = 25

    print(f"{p} <= {q}: {p <= q}")  # Output: 20 <= 20: True
    print(f"{p} <= {r}: {p <= r}")  # Output: 20 <= 25: True
    print(f"{r} <= {p}: {r <= p}")  # Output: 25 <= 20: False
    \`\`\`

**Comparing Different Types**

Generally, comparing values of different, incompatible types using operators like \`<\`, \`>\`, \`<=\`, \`>=\` will result in a \`TypeError\` in Python 3. For example, you cannot directly compare a number with a string using these operators.

\`\`\`python
# print(10 > "hello")  # This would raise a TypeError
# print("apple" < 5)   # This would raise a TypeError
\`\`\`

However, the equality (\`==\`) and inequality (\`!=\`) operators can often compare different types. They will typically return \`False\` if the types are different and incompatible, because an integer \`10\` is not considered equal to the string \`"10"\`.

\`\`\`python
print(f"10 == \\"10\\": {10 == "10"}")   # Output: 10 == "10": False
print(f"10 != \\"10\\": {10 != "10"}")   # Output: 10 != "10": True
print(f"True == 1: {True == 1}")     # Output: True == 1: True (Booleans are a subtype of integers, True is 1, False is 0)
print(f"False == 0: {False == 0}")    # Output: False == 0: True
print(f"True == \\"True\\": {True == "True"}") # Output: True == "True": False
\`\`\`

**Chaining Comparison Operators**

Python allows for a neat feature called **chaining comparison operators**. This lets you write more natural-looking comparisons for ranges.

For example, to check if a variable \`age\` is between 18 and 65 (inclusive), you might mathematically write \`18 <= age <= 65\`. Python allows this directly:

\`\`\`python
age = 30

# Chained comparison
is_working_age = 18 <= age <= 65
print(f"Is {age} a working age? {is_working_age}") # Output: Is 30 a working age? True

# This is equivalent to:
is_working_age_expanded = (age >= 18) and (age <= 65)
print(f"Expanded check: {is_working_age_expanded}") # Output: Expanded check: True

value = 7
is_in_range = 5 < value < 10 # Checks if value is greater than 5 AND less than 10
print(f"Is {value} between 5 and 10? {is_in_range}") # Output: Is 7 between 5 and 10? True

# Example that would be False
another_value = 12
is_still_in_range = 5 < another_value < 10
print(f"Is {another_value} between 5 and 10? {is_still_in_range}") # Output: Is 12 between 5 and 10? False
\`\`\`
Chained comparisons are evaluated from left to right. For \`a < b < c\`, Python effectively checks \`(a < b) and (b < c)\`. It is more readable and often more efficient than writing out the \`and\` explicitly.

**Use in Conditional Logic**

The primary use of comparison operators is to form conditions that control the behavior of your program. For instance:

\`\`\`python
temperature = 25

if temperature > 20:
    print("It's a warm day!")
else:
    print("It might be a bit cool.")

user_input = input("Enter 'yes' or 'no': ")
if user_input == "yes":
    print("You chose yes.")
elif user_input == "no":
    print("You chose no.")
else:
    print("Invalid input.")
\`\`\`
We will explore \`if\`, \`elif\`, and \`else\` statements in detail in the module on control flow.

**Conclusion**

Comparison operators (\`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`) are essential tools in Python for evaluating conditions and making decisions. They always return a Boolean value (\`True\` or \`False\`), which can then be used to direct the logic of your programs. Understanding how they work with different data types and how to chain them will allow you to write expressive and effective conditional logic. These operators, combined with logical operators (which we will cover next), form the core of controlling program flow.
`;export{e as default};
