const n=`# Module 7: Functions - Lesson 5: Lambda Functions (Anonymous Functions)

In addition to defining functions using the \`def\` keyword, Python provides a way to create small, anonymous functions using the **\`lambda\` keyword**. These are often called **lambda functions** or **anonymous functions** because they don't have a formal name like functions defined with \`def\`.

Lambda functions are restricted to a single expression and are typically used for short, simple operations where a full function definition would be overly verbose.

**What is a Lambda Function?**

A lambda function is a small, inline function defined with the \`lambda\` keyword. It can take any number of arguments but can only have **one expression**. The expression is evaluated and returned when the lambda function is called.

**Syntax of a Lambda Function:**

\`\`\`python
lambda arguments: expression
\`\`\`

Let's break this down:

1.  **\`lambda\` Keyword**: Signals the definition of an anonymous function.
2.  **\`arguments\`**: A comma-separated list of parameters that the lambda function accepts (similar to parameters in a \`def\` function). This part is optional; a lambda function can have zero or more arguments.
3.  **Colon (\`:\`)**: Separates the arguments from the expression.
4.  **\`expression\`**: A single expression that is evaluated when the lambda function is called. The result of this expression is implicitly returned by the lambda function. You cannot have multiple statements or a block of statements in a lambda function's body.

**Key Characteristics of Lambda Functions:**

*   **Anonymous**: They don't have a name in the way \`def\` functions do (though you can assign a lambda function to a variable, which then acts like a name).
*   **Single Expression**: The body of a lambda function is limited to a single expression. It cannot contain multiple statements, loops, or complex conditional blocks (though a conditional *expression* is allowed).
*   **Implicit Return**: The result of the expression is automatically returned; you don't use the \`return\` keyword explicitly.
*   **Inline**: They are often defined right where they are needed, for example, as an argument to a higher-order function (a function that takes other functions as arguments, like \`map()\`, \`filter()\`, \`sorted()\`).

**Examples of Lambda Functions**

*   **A simple lambda function that adds two numbers:**
    \`\`\`python
    # Using a def function for comparison
    def add_def(x, y):
        return x + y

    # Equivalent lambda function
    add_lambda = lambda x, y: x + y

    result_def = add_def(5, 3)
    result_lambda = add_lambda(5, 3)

    print(f"Result from def function: {result_def}")     # Output: 8
    print(f"Result from lambda function: {result_lambda}") # Output: 8
    print(f"Type of add_lambda: {type(add_lambda)}")       # Output: <class 'function'>
    \`\`\`
    Here, \`add_lambda\` is a variable that now refers to the lambda function.

*   **Lambda function to square a number:**
    \`\`\`python
    square = lambda num: num * num
    print(f"Square of 7: {square(7)}") # Output: 49
    \`\`\`

*   **Lambda function with no arguments:**
    \`\`\`python
    get_pi = lambda: 3.14159
    print(f"Value of pi (from lambda): {get_pi()}") # Output: 3.14159
    \`\`\`

*   **Lambda function with a conditional expression:**
    A lambda function can contain a conditional expression (ternary operator: \`value_if_true if condition else value_if_false\`).
    \`\`\`python
    max_val = lambda a, b: a if a > b else b
    print(f"Max of 10 and 20: {max_val(10, 20)}") # Output: 20
    print(f"Max of 100 and 50: {max_val(100, 50)}") # Output: 100
    \`\`\`

**When to Use Lambda Functions**

Lambda functions are most commonly used in situations where you need a small, throwaway function for a short period, often as an argument to higher-order functions.

1.  **With \`map()\`**: The \`map(function, iterable)\` function applies a given \`function\` to each item of an \`iterable\` (like a list) and returns a map object (which can be converted to a list).
    \`\`\`python
    numbers = [1, 2, 3, 4, 5]

    # Using map with a lambda function to square each number
    squared_numbers = list(map(lambda x: x * x, numbers))
    print(f"Squared numbers (using map and lambda): {squared_numbers}") # Output: [1, 4, 9, 16, 25]

    # For comparison, using a def function with map
    def doubler(n):
        return n * 2
    doubled_numbers = list(map(doubler, numbers))
    print(f"Doubled numbers (using map and def): {doubled_numbers}") # Output: [2, 4, 6, 8, 10]
    \`\`\`
    Using lambda here makes the code more concise as you don't need a separate \`def\` for a simple operation.

2.  **With \`filter()\`**: The \`filter(function, iterable)\` function constructs an iterator from elements of an \`iterable\` for which a \`function\` returns true.
    \`\`\`python
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    # Using filter with a lambda function to get even numbers
    even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
    print(f"Even numbers (using filter and lambda): {even_numbers}") # Output: [2, 4, 6, 8, 10]
    \`\`\`

3.  **With \`sorted()\` (for custom sort keys)**: The \`sorted(iterable, key=function)\` function sorts an iterable. The \`key\` parameter takes a function that is called on each element to get a comparison key.
    \`\`\`python
    points = [(1, 5), (3, 2), (2, 8), (4, 1)]

    # Sort points based on the second element (y-coordinate) of each tuple
    sorted_by_y = sorted(points, key=lambda point: point[1])
    print(f"Points sorted by y-coordinate: {sorted_by_y}")
    # Output: [(4, 1), (3, 2), (1, 5), (2, 8)]

    students = [
        {"name": "Alice", "grade": 85},
        {"name": "Bob", "grade": 92},
        {"name": "Charlie", "grade": 78}
    ]
    # Sort students by grade
    sorted_students = sorted(students, key=lambda student: student["grade"])
    print(f"Students sorted by grade: {sorted_students}")
    \`\`\`

4.  **In GUI frameworks (e.g., Tkinter, Kivy)**: Often used for simple callback functions for button clicks or other events.
    \`\`\`python
    # Conceptual example for a GUI button command
    # import tkinter as tk
    # root = tk.Tk()
    # button = tk.Button(root, text="Click Me", command=lambda: print("Button clicked!"))
    # button.pack()
    # root.mainloop()
    \`\`\`

**Limitations of Lambda Functions**

*   **Single Expression Only**: They cannot contain multiple statements or complex logic that requires more than one expression.
*   **No Statements**: You cannot have assignments (\`=\`) or other statements like \`print()\` directly inside the lambda's expression part (though the expression itself can call a function that does printing, like \`lambda: print("Hi")\`). The primary purpose is to compute and return a value.
*   **No Docstrings**: Lambda functions cannot have docstrings in the traditional way \`def\` functions do.
*   **Readability**: While concise for simple tasks, overly complex lambda functions can become difficult to read. In such cases, a regular \`def\` function with a proper name and body is usually preferred for clarity.

**Lambda vs. \`def\` Functions**

| Feature         | \`lambda\` Function                      | \`def\` Function                                  |
|-----------------|----------------------------------------|-------------------------------------------------|
| **Naming**      | Anonymous (can be assigned to a var)   | Has a formal name                               |
| **Body**        | Single expression                      | Block of statements                             |
| **Statements**  | No statements (only an expression)     | Can contain multiple statements                 |
| **Return**      | Implicitly returns expression's result | Uses explicit \`return\` statement (or \`None\`)    |
| **Docstrings**  | Cannot have standard docstrings        | Can have docstrings                             |
| **Complexity**  | Best for simple, one-line operations   | Suitable for complex logic                      |
| **Use Cases**   | Often with \`map\`, \`filter\`, \`sorted\`, GUI callbacks | General-purpose functions, complex algorithms   |

**Conclusion**

Lambda functions provide a concise way to create small, anonymous functions in Python. They are particularly useful when you need a simple function for a short duration, especially as arguments to higher-order functions like \`map()\`, \`filter()\`, and \`sorted()\`. While they are limited to a single expression, this restriction encourages their use for straightforward tasks, contributing to more readable code in those specific contexts. For more complex logic or when a function needs a name and a docstring for clarity, a standard \`def\` function remains the preferred choice.
`;export{n as default};
