const e=`# Module 11: Error and Exception Handling - Lesson 1: Understanding Errors (Syntax, Runtime, Logical)

Welcome to Module 11, where we will dive into the crucial topic of error and exception handling in Python. No matter how careful you are as a programmer, errors are an inevitable part of software development. Understanding the different types of errors and learning how to handle them gracefully is essential for writing robust, reliable, and user-friendly programs.

In this first lesson, we will categorize and understand the common types of errors you might encounter: syntax errors, runtime errors (exceptions), and logical errors.

**What are Errors in Programming?**

An error is a mistake or an unexpected condition in a program that prevents it from running correctly or producing the intended output. Python, like other programming languages, has mechanisms to report and deal with various kinds of errors.

**1. Syntax Errors (Parsing Errors)**

Syntax errors are mistakes in the use of the Python language itself. They occur when the Python interpreter encounters code that violates the grammatical rules of the language. The interpreter cannot understand or parse code with syntax errors, so the program will not even begin to run (or, in an interactive session, the offending line won't be accepted).

*   **Detection**: Syntax errors are detected by the Python parser *before* the program starts executing any of its logic.
*   **Consequence**: The program fails to start, and Python usually points to the location where the error was detected, often with a \`SyntaxError\` message and a caret (\`^\`) indicating the problematic part of the line.

**Common Causes of Syntax Errors:**

*   **Misspelled keywords**: e.g., \`whle\` instead of \`while\`, \`defne\` instead of \`def\`.
*   **Missing colons**: Forgetting the colon at the end of \`if\`, \`for\`, \`def\`, \`class\` statements (e.g., \`if x > 5\` instead of \`if x > 5:\`).
*   **Mismatched parentheses, brackets, or quotes**: e.g., \`print("Hello"\` (missing closing parenthesis), \`my_list = [1, 2, 3\` (missing closing bracket).
*   **Incorrect indentation**: Python relies on indentation to define code blocks. Inconsistent or incorrect indentation leads to \`IndentationError\` or \`TabError\`, which are subtypes of \`SyntaxError\`.
*   **Invalid variable names**: e.g., \`my-variable = 10\` (hyphens not allowed), \`2_value = 20\` (cannot start with a number).
*   **Using operators incorrectly**: e.g., \`x = 5 +\` (incomplete expression).

**Example of Syntax Errors:**

\`\`\`python
# Syntax Error: Missing colon
# def my_function()
#     print("Hello")

# Syntax Error: Misspelled keyword
# prin("This will not work")

# Syntax Error: Mismatched parenthesis
# result = (5 + 3 * 2

# IndentationError (a type of SyntaxError)
# def another_function():
# print("Incorrect indentation") # This line should be indented
\`\`\`
When you try to run a script with these errors, Python will stop and report them:

\`\`\`
  File "<stdin>", line 1
    def my_function()
                     ^
SyntaxError: expected ":"
\`\`\`

**Fixing Syntax Errors**: Carefully review the error message and the indicated line. Check for typos, missing punctuation, and correct indentation according to Python's rules.

**2. Runtime Errors (Exceptions)**

Runtime errors, also known as **exceptions**, occur *while the program is running* (during execution). These errors happen when the Python interpreter encounters a situation that it cannot handle, even if the syntax of the code is correct. When a runtime error occurs, Python creates an **exception object** that contains information about the error.

If an exception is not handled by the program (using \`try...except\` blocks, which we will cover later), the program will terminate and print a **traceback**, which shows the sequence of calls that led to the error and the type of exception raised.

**Common Types of Runtime Errors (Exceptions):**

*   **\`TypeError\`**: Occurs when an operation or function is applied to an object of an inappropriate type. e.g., \`"hello" + 5\` (cannot concatenate string and integer directly), \`len(123)\` (integer has no length).
*   **\`NameError\`**: Raised when a local or global name (variable, function, class) is not found. This usually means you tried to use a variable before assigning a value to it, or you misspelled its name. e.g., \`print(my_undefined_variable)\`.
*   **\`ValueError\`**: Occurs when a built-in operation or function receives an argument that has the right type but an inappropriate value. e.g., \`int("abc")\` (cannot convert "abc" to an integer), \`math.sqrt(-1)\` (cannot take square root of a negative number with \`math.sqrt\`).
*   **\`IndexError\`**: Raised when a sequence subscript (index) is out of range. e.g., \`my_list = [1, 2, 3]; print(my_list[3])\` (valid indices are 0, 1, 2).
*   **\`KeyError\`**: Occurs when a dictionary key is not found. e.g., \`my_dict = {"a": 1}; print(my_dict["b"])\`.
*   **\`FileNotFoundError\`**: Raised when trying to open a file that does not exist (in read mode). e.g., \`open("non_existent_file.txt", "r")\`.
*   **\`ZeroDivisionError\`**: Occurs when attempting to divide a number by zero. e.g., \`result = 10 / 0\`.
*   **\`AttributeError\`**: Raised when an attribute reference or assignment fails. This often happens when you try to access a method or attribute that doesn't exist for an object. e.g., \`my_list = [1,2]; my_list.appendd(3)\` (misspelled \`append\`).
*   **\`IOError\` / \`OSError\`**: General input/output errors, such as disk full, file permissions issues, etc.

**Example of a Runtime Error:**

\`\`\`python
# Runtime Error: TypeError
# result = "Age: " + 25 
# print(result)

# Runtime Error: ZeroDivisionError
# numerator = 100
# denominator = 0
# quotient = numerator / denominator
# print(quotient)

# Runtime Error: IndexError
# numbers = [10, 20, 30]
# print(numbers[5])
\`\`\`
If you run the \`ZeroDivisionError\` example, you might see a traceback like this:
\`\`\`
Traceback (most recent call last):
  File "my_script.py", line 3, in <module>
    quotient = numerator / denominator
ZeroDivisionError: division by zero
\`\`\`
**Handling Runtime Errors**: These errors can often be anticipated and handled using \`try...except\` blocks, allowing the program to recover gracefully or provide a more informative message instead of crashing.

**3. Logical Errors**

Logical errors are the most subtle and often the hardest type of error to detect and fix. A program with a logical error will run without crashing (no syntax errors, no unhandled runtime errors), but it will produce **incorrect or unexpected results**.

*   **Detection**: Logical errors are not detected by the Python interpreter. The code is syntactically correct and executes without raising exceptions, but the underlying algorithm or logic is flawed.
*   **Consequence**: The program produces the wrong output, or behaves in an unintended way.

**Common Causes of Logical Errors:**

*   **Incorrect algorithm implementation**: The steps to solve the problem are not correctly translated into code.
*   **Flawed conditions in \`if\` statements or loops**: e.g., using \`>\` instead of \`>=\` leading to off-by-one errors, incorrect boolean logic (\`and\`/\`or\`).
*   **Off-by-one errors**: Loops iterating one too many or one too few times.
*   **Incorrect calculations**: Using the wrong formula or mathematical operation.
*   **Misunderstanding requirements**: The program works as coded, but the code doesn't reflect what was actually needed.
*   **Using the wrong variable**: Accidentally using one variable when another was intended.

**Example of a Logical Error:**

\`\`\`python
# Logical Error: Calculating average incorrectly
def calculate_average(numbers):
    if not numbers: # Correctly handles empty list
        return 0
    # Incorrect: sum(numbers) / (len(numbers) - 1) # Should be len(numbers)
    # This would cause a ZeroDivisionError if len(numbers) is 1, or wrong average otherwise
    return sum(numbers) / len(numbers) # Corrected version

# Example of a logical error in a condition
# Intention: give a discount if price is 100 or more
price = 100
discount = 0
# if price > 100: # Logical error: should be price >= 100
if price >= 100: # Corrected condition
    discount = 0.10 * price
print(f"Price: {price}, Discount: {discount}")
# With price > 100, discount would be 0 for price = 100, which is wrong.
\`\`\`
**Fixing Logical Errors**: This requires careful debugging, testing with various inputs, and tracing the program's execution (e.g., using \`print()\` statements, a debugger tool) to understand why the output is incorrect. You need to analyze the program's logic step by step.

**Summary Table of Error Types**

| Feature         | Syntax Error                                  | Runtime Error (Exception)                     | Logical Error                                     |
|-----------------|-----------------------------------------------|-----------------------------------------------|---------------------------------------------------|
| **When Occurs** | During parsing (before execution)             | During execution (while program is running)   | During execution (program runs to completion)     |
| **Detected By** | Python interpreter (parser)                   | Python interpreter (runtime system)           | Programmer (through testing and debugging)        |
| **Program Runs?**| No, program fails to start                    | Program starts, but terminates if unhandled   | Yes, program runs but produces incorrect output   |
| **Example**     | \`if x > 5\` (missing colon)                    | \`10 / 0\` (ZeroDivisionError)                  | Calculating area as \`length + width\` instead of \`length * width\` |
| **Indication**  | \`SyntaxError\` message, often with a caret \`^\` | Traceback with exception type and message     | Incorrect output, unexpected behavior             |

**Why Understanding Error Types Matters**

Knowing the type of error you are dealing with helps you diagnose and fix it more efficiently:
*   **Syntax errors** require you to fix the code structure.
*   **Runtime errors** often require you to add error handling (like \`try...except\`) or to fix issues related to data values or resource availability.
*   **Logical errors** require a deeper analysis of your program's logic and algorithm.

In the upcoming lessons, we will focus primarily on handling runtime errors (exceptions) using Python's exception handling mechanisms, as this is key to building resilient applications.

**Conclusion**

Errors are a natural part of programming. By understanding the distinctions between syntax errors (parsing issues), runtime errors (exceptions during execution), and logical errors (flaws in program logic), you can approach debugging and error resolution more effectively. While syntax errors prevent your code from running and logical errors lead to incorrect results, runtime errors (exceptions) are unique in that Python provides a structured way to anticipate and manage them, which will be the focus of our next lessons.
`;export{e as default};
