const e=`# Module 5: Control Flow - Loops - Lesson 1: \`for\` Loops (Iterating Over Sequences)

Welcome to Module 5, where we shift our focus from making decisions (conditional statements) to performing repetitive tasks efficiently using **loops**. Loops are a fundamental control flow structure that allows you to execute a block of code multiple times. This is incredibly useful for processing collections of data, automating repetitive actions, and much more.

Python provides two main types of loops: \`for\` loops and \`while\` loops. In this lesson, we will concentrate on the **\`for\` loop**, which is primarily used for iterating over a sequence (like a list, tuple, string, or range) or other iterable objects.

**What is a \`for\` Loop?**

A \`for\` loop in Python is used to iterate over the items of any sequence or iterable object in the order that they appear. For each item in the sequence, the \`for\` loop executes a block of code.

**Syntax of the \`for\` Loop**

The basic syntax of a \`for\` loop is:

\`\`\`python
for item_variable in iterable_object:
    # Block of code to execute for each item
    # This block MUST be indented
    statement1
    statement2
    # ... more statements ...

# Code here is outside the for loop and executes after the loop has finished
\`\`\`

Let's break down the components:

1.  **\`for\` Keyword**: The loop begins with the keyword \`for\`.
2.  **\`item_variable\`**: This is a variable that takes on the value of the current item in the sequence during each iteration of the loop. You can choose any valid variable name for this (e.g., \`fruit\`, \`number\`, \`char\`, \`i\`).
3.  **\`in\` Keyword**: The \`in\` keyword is used to link the \`item_variable\` with the \`iterable_object\`.
4.  **\`iterable_object\`**: This is the sequence or collection you want to iterate over. Common examples include lists, tuples, strings, \`range\` objects, and even dictionaries (which iterate over keys by default).
5.  **Colon (\`:\`)**: The line ends with a colon, signifying the start of the loop's code block.
6.  **Indented Code Block**: The lines of code that are to be executed for each item in the \`iterable_object\`. This block must be indented consistently.

**How it Works**

1.  The \`for\` loop starts by taking the first item from the \`iterable_object\` and assigning it to the \`item_variable\`.
2.  The indented code block (the body of the loop) is then executed with \`item_variable\` holding the value of that first item.
3.  After the block is executed, the loop takes the next item from the \`iterable_object\`, assigns it to \`item_variable\`, and executes the block again.
4.  This process repeats for every item in the \`iterable_object\`.
5.  Once all items in the \`iterable_object\` have been processed, the loop terminates, and the program continues with the statement immediately following the loop block (if any).

**Examples of \`for\` Loops**

*   **Iterating over a List:**
    \`\`\`python
    fruits = ["apple", "banana", "cherry", "date"]

    print("Available fruits:")
    for fruit in fruits:  # In each iteration, 'fruit' will hold one item from the 'fruits' list
        print(f"- {fruit.capitalize()}")

    # Output:
    # Available fruits:
    # - Apple
    # - Banana
    # - Cherry
    # - Date
    \`\`\`

*   **Iterating over a String:** A string is a sequence of characters.
    \`\`\`python
    message = "Python"

    print("Characters in the message:")
    for character in message:
        print(character)

    # Output:
    # Characters in the message:
    # P
    # y
    # t
    # h
    # o
    # n
    \`\`\`

*   **Iterating over a Tuple:**
    \`\`\`python
    coordinates = (10, 20, 30)

    print("Coordinate values:")
    for coord_value in coordinates:
        print(coord_value)

    # Output:
    # Coordinate values:
    # 10
    # 20
    # 30
    \`\`\`

*   **Iterating with \`range()\`:** The \`range()\` function is commonly used with \`for\` loops to execute a block of code a specific number of times or to iterate over a sequence of numbers. We will cover \`range()\` in more detail in the next lesson, but here's a quick peek:
    \`\`\`python
    print("Counting from 0 to 4:")
    for i in range(5):  # range(5) generates numbers 0, 1, 2, 3, 4
        print(i)

    # Output:
    # Counting from 0 to 4:
    # 0
    # 1
    # 2
    # 3
    # 4
    \`\`\`

**Using the Item Variable Inside the Loop**

The \`item_variable\` (like \`fruit\`, \`character\`, \`i\` in the examples) is what makes \`for\` loops so powerful. Inside the loop block, you can use this variable to access and work with the current item from the sequence.

\`\`\`python
numbers = [1, 2, 3, 4, 5]
sum_of_numbers = 0

for num in numbers:
    sum_of_numbers = sum_of_numbers + num  # Add the current number to the sum
    # Or using augmented assignment: sum_of_numbers += num

print(f"The sum of numbers in the list is: {sum_of_numbers}") # Output: 15


# Processing each item
words = ["cat", "dog", "elephant"]
for word in words:
    print(f"The word \rások{word}" has {len(word)} letters and starts with \rások{word[0]}".")

# Output:
# The word "cat" has 3 letters and starts with "c".
# The word "dog" has 3 letters and starts with "d".
# The word "elephant" has 8 letters and starts with "e".
\`\`\`

**Iterating Over Dictionaries**

When you iterate over a dictionary directly using a \`for\` loop, you iterate over its **keys** by default.

\`\`\`python
student_scores = {"Alice": 90, "Bob": 75, "Charlie": 88}

print("Student names (keys):")
for student_name in student_scores:
    print(student_name)

# Output:
# Student names (keys):
# Alice
# Bob
# Charlie

# To access values, you can use the key inside the loop:
print("\\nStudent scores:")
for student_name in student_scores:
    score = student_scores[student_name]
    print(f"{student_name}: {score}")

# Output:
# Student scores:
# Alice: 90
# Bob: 75
# Charlie: 88

# Alternatively, you can iterate over .values() or .items():
print("\\nJust the scores (values):")
for score_value in student_scores.values():
    print(score_value)

print("\\nStudent and score (items - key-value pairs as tuples):")
for name, score_val in student_scores.items(): # .items() returns (key, value) tuples
    print(f"{name} scored {score_val}")
\`\`\`

**Important Considerations**

1.  **Indentation is Key**: Just like with \`if\` statements, the block of code within a \`for\` loop must be consistently indented. Python uses this indentation to determine which statements are part of the loop.
2.  **Modifying the Sequence During Iteration (Generally Avoid)**: Modifying a list or dictionary (e.g., adding or removing items) while you are iterating over it can lead to unexpected behavior or errors. If you need to modify a collection based on its elements, it's often safer to iterate over a copy of it or to build a new collection.

**Conclusion**

The \`for\` loop is a powerful and versatile construct in Python for iterating over items in sequences like lists, strings, tuples, and other iterable objects. It allows you to systematically process each item in a collection, making it indispensable for tasks involving data processing, repetition, and automation. By understanding its syntax and how the item variable works, you can write concise and effective code to handle a wide variety of repetitive tasks. In the next lesson, we will explore the \`range()\` function in more detail, as it is a very common companion to \`for\` loops.
`;export{e as default};
