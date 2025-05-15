const e=`# Module 2: Variables and Data Types - Lesson 5: Booleans in Python

In our exploration of Python's built-in data types, we encountered Booleans (\`bool\`). While they might seem simple, representing only two values, \`True\` and \`False\`, Booleans are the bedrock of decision-making and control flow in programming. This lesson will delve deeper into what Booleans are, how they are used, and their relationship with logical operations.

**What are Booleans?**

A Boolean, named after mathematician George Boole who developed Boolean algebra, is a data type that can only have one of two possible values: \`True\` or \`False\`. These are keywords in Python and must be written with an initial capital letter.

\`\`\`python
is_learning = True
is_raining = False

print(f"Are we learning Python? {is_learning}")
print(f"Is it raining outside? {is_raining}")
print(f"The type of is_learning is: {type(is_learning)}")
\`\`\`

Booleans are fundamental because they allow programs to make choices. For example, a program might execute a certain block of code *if* a condition is \`True\`, and a different block of code (or do nothing) *if* the condition is \`False\`.

**Booleans from Comparisons**

Most often, Boolean values are not assigned directly like \`is_learning = True\`. Instead, they are the result of **comparison operations**. Comparison operators compare two values and evaluate to either \`True\` or \`False\`.

Here are Python's main comparison operators:

*   \`==\` : Equal to (checks if two values are equal)
*   \`!=\` : Not equal to (checks if two values are not equal)
*   \`>\`  : Greater than
*   \`<\`  : Less than
*   \`>=\` : Greater than or equal to
*   \`<=\` : Less than or equal to

Let's see some examples:

\`\`\`python
x = 10
y = 5

result1 = (x == y)  # Is x equal to y? (10 == 5) -> False
print(f"x == y: {result1}")

result2 = (x != y)  # Is x not equal to y? (10 != 5) -> True
print(f"x != y: {result2}")

result3 = (x > y)   # Is x greater than y? (10 > 5) -> True
print(f"x > y: {result3}")

result4 = (x < 10)  # Is x less than 10? (10 < 10) -> False
print(f"x < 10: {result4}")

result5 = (y <= 5)  # Is y less than or equal to 5? (5 <= 5) -> True
print(f"y <= 5: {result5}")

name1 = "Alice"
name2 = "alice"

name_comparison = (name1 == name2) # String comparison is case-sensitive ('Alice' == 'alice') -> False
print(f"name1 == name2: {name_comparison}")
\`\`\`

The results of these comparisons are Boolean values, which can then be stored in variables or used directly in control flow statements (like \`if\` statements, which we'll cover in Module 4).

**Logical Operators**

Logical operators (\`and\`, \`or\`, \`not\`) allow you to combine or modify Boolean expressions to create more complex conditions.

*   **\`and\` Operator**: The \`and\` operator returns \`True\` if **both** Boolean expressions on its left and right are \`True\`. Otherwise, it returns \`False\`.

    \`\`\`python
    age = 25
    has_license = True

    can_drive_legally = (age >= 18) and (has_license == True)
    # (25 >= 18) is True, (has_license == True) is True
    # True and True -> True
    print(f"Can drive legally: {can_drive_legally}") # Output: True

    is_weekend = False
    has_time = True
    can_go_to_park = is_weekend and has_time
    # False and True -> False
    print(f"Can go to park: {can_go_to_park}") # Output: False
    \`\`\`

*   **\`or\` Operator**: The \`or\` operator returns \`True\` if **at least one** of the Boolean expressions on its left or right is \`True\`. It only returns \`False\` if both expressions are \`False\`.

    \`\`\`python
    is_sunny = False
    is_warm = True

    good_weather_for_picnic = is_sunny or is_warm
    # False or True -> True
    print(f"Good weather for picnic: {good_weather_for_picnic}") # Output: True

    has_coffee = False
    has_tea = False
    can_have_hot_drink = has_coffee or has_tea
    # False or False -> False
    print(f"Can have hot drink: {can_have_hot_drink}") # Output: False
    \`\`\`

*   **\`not\` Operator**: The \`not\` operator is a unary operator (it acts on only one Boolean expression). It reverses the Boolean value. If the expression is \`True\`, \`not\` makes it \`False\`. If the expression is \`False\`, \`not\` makes it \`True\`.

    \`\`\`python
    is_raining = True
    not_raining = not is_raining
    # not True -> False
    print(f"Is it not raining? {not_raining}") # Output: False

    is_empty = False
    is_not_empty = not is_empty
    # not False -> True
    print(f"Is it not empty? {is_not_empty}") # Output: True
    \`\`\`

These logical operators can be combined to form very complex conditions:

\`\`\`python
score = 85
attendance_percent = 90
passed_project = True

# Condition to pass the course
# Must have score >= 70 AND (attendance >= 80 OR passed_project is True)

passed_course = (score >= 70) and ((attendance_percent >= 80) or (passed_project == True))
print(f"Passed the course: {passed_course}") # Output: True
\`\`\`
Parentheses \`()\` are used here to control the order of evaluation, just like in mathematical expressions.

**Truthiness and Falsiness (Boolean Context)**

In Python, it's not just the explicit \`True\` and \`False\` values that have Boolean meaning. Many other values can be evaluated in a Boolean context (e.g., when used in an \`if\` statement or as operands to logical operators). This is often referred to as "truthiness" or "falsiness."

Values that are considered **False** in a Boolean context (Falsy values):
*   The Boolean \`False\` itself.
*   The \`None\` object.
*   Zero of any numeric type: \`0\`, \`0.0\`, \`0j\`.
*   Empty sequences: \`""\` (empty string), \`[]\` (empty list), \`()\` (empty tuple).
*   Empty mappings: \`{}\` (empty dictionary).
*   Empty sets: \`set()\`.

Almost everything else is considered **True** in a Boolean context (Truthy values), including:
*   The Boolean \`True\` itself.
*   Non-zero numbers (e.g., \`1\`, \`-10\`, \`3.14\`).
*   Non-empty strings (e.g., \`"hello"\`, \`"0"\`, \`"False"\`).
*   Non-empty lists, tuples, dictionaries, and sets.

\`\`\`python
print(f"Boolean value of 0: {bool(0)}")         # Output: False
print(f"Boolean value of 100: {bool(100)}")       # Output: True
print(f"Boolean value of '': {bool('')}")         # Output: False
print(f"Boolean value of 'Hi': {bool('Hi')}")       # Output: True
print(f"Boolean value of []: {bool([])}")         # Output: False
print(f"Boolean value of [1, 2]: {bool([1, 2])}") # Output: True
print(f"Boolean value of None: {bool(None)}")       # Output: False
\`\`\`

The \`bool()\` function can be used to explicitly convert any value to its Boolean equivalent.
Understanding truthiness and falsiness is important because it allows for more concise code in conditional statements. For example, instead of writing \`if len(my_list) > 0:\`, you can often write \`if my_list:\`, because an empty list is Falsy and a non-empty list is Truthy.

**Conclusion**

Booleans (\`True\` and \`False\`) are the cornerstone of logical operations and decision-making in Python. They are most commonly generated as the result of comparison operations and can be combined using logical operators (\`and\`, \`or\`, \`not\`) to build complex conditions. Furthermore, the concept of "truthiness" and "falsiness" allows many different types of values to be evaluated in a Boolean context, leading to more expressive and concise Python code. As we move into control flow structures in later modules, the importance and utility of Booleans will become even more apparent.
`;export{e as default};
