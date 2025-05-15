const e=`# Module 11: Error and Exception Handling - Lesson 2: The \`try...except\` Block

In the previous lesson, we learned about different types of errors, with a focus on runtime errors, also known as exceptions. When an exception occurs and is not handled, your Python program terminates and displays a traceback. To prevent this abrupt termination and to manage errors gracefully, Python provides the \`try...except\` block.

**What is the \`try...except\` Block?**

The \`try...except\` block allows you to write code that might potentially raise an exception (the "try" part) and then define how to handle that exception if it occurs (the "except" part). This is the cornerstone of exception handling in Python.

**Basic Syntax:**

\`\`\`python
try:
    # Code that might raise an exception
    # This is the "guarded" block of code.
    # ...
except ExceptionType:
    # Code that executes if an exception of type ExceptionType (or its subclass)
    # occurs in the try block.
    # This is the "handler" block.
    # ...
\`\`\`

**How it Works:**

1.  **\`try\` Block Execution**: Python first attempts to execute the code within the \`try\` block.
2.  **No Exception**: If no exception occurs during the execution of the \`try\` block, the \`except\` block is skipped entirely, and execution continues after the \`try...except\` statement (or in the \`else\` or \`finally\` clauses, which we will cover later).
3.  **Exception Occurs**: If an exception *does* occur at any point within the \`try\` block:
    *   The rest of the code in the \`try\` block is immediately skipped.
    *   Python looks for an \`except\` clause that matches the type of exception that was raised.
    *   **Matching \`except\` Block Found**: If an \`except\` clause matches the exception type (or is a base class of the exception type), the code within that \`except\` block is executed. After the \`except\` block finishes, execution continues after the entire \`try...except\` statement (unless the \`except\` block itself raises a new exception or re-raises the current one).
    *   **No Matching \`except\` Block Found**: If no \`except\` clause matches the raised exception, the exception is considered **unhandled**. It propagates up the call stack. If it remains unhandled all the way to the top level of the program, the program terminates, and Python prints a traceback.

**Example: Handling \`ZeroDivisionError\`**

Let's try to handle the \`ZeroDivisionError\` we saw earlier:

\`\`\`python
def divide_numbers(numerator, denominator):
    try:
        print("Attempting division...")
        result = numerator / denominator
        print(f"The result of {numerator} / {denominator} is: {result}")
        return result
    except ZeroDivisionError:
        # This block executes ONLY if a ZeroDivisionError occurs in the try block
        print("Error: Cannot divide by zero!")
        print("Please provide a non-zero denominator.")
        return None # Or handle in another way, e.g., return a default value or raise a custom error

# Test cases
print("--- Test Case 1: Valid division ---")
divide_numbers(10, 2)

print("\\n--- Test Case 2: Division by zero ---")
divide_numbers(10, 0)

print("\\n--- Test Case 3: Another valid division ---")
divide_numbers(100, 5)

print("\\nProgram continues after handling the error.")
\`\`\`

**Output of the example:**

\`\`\`
--- Test Case 1: Valid division ---
Attempting division...
The result of 10 / 2 is: 5.0

--- Test Case 2: Division by zero ---
Attempting division...
Error: Cannot divide by zero!
Please provide a non-zero denominator.

--- Test Case 3: Another valid division ---
Attempting division...
The result of 100 / 5 is: 20.0

Program continues after handling the error.
\`\`\`
Notice that when \`divide_numbers(10, 0)\` was called, the \`ZeroDivisionError\` was caught by the \`except ZeroDivisionError:\` block. The error message was printed, and the program continued to execute instead of crashing.

**Example: Handling \`ValueError\` during Type Conversion**

Another common scenario is handling errors during user input conversion.

\`\`\`python
def get_integer_input(prompt_message):
    try:
        user_input_str = input(prompt_message)
        user_integer = int(user_input_str) # This line can raise ValueError
        print(f"You entered the integer: {user_integer}")
        return user_integer
    except ValueError:
        print(f"Error: Invalid input. \rások{user_input_str}" is not a valid integer.")
        print("Please enter a whole number.")
        return None

print("\\n--- Getting Integer Input ---")
num1 = get_integer_input("Enter your age: ")
if num1 is not None:
    print(f"Processing age: {num1}")

num2 = get_integer_input("Enter your favorite number: ")
if num2 is not None:
    print(f"Processing favorite number: {num2}")
\`\`\`
If the user enters "abc" when prompted for their age, the \`int("abc")\` call will raise a \`ValueError\`. The \`except ValueError:\` block will catch this, print an error message, and the function will return \`None\`.

**Catching Multiple Exceptions**

You can have multiple \`except\` clauses to handle different types of exceptions, or you can handle multiple exception types in a single \`except\` clause by providing a tuple of exception types.

**1. Multiple \`except\` Clauses (Specific Handlers First)**

When an exception occurs, Python checks the \`except\` clauses in the order they appear. The first one that matches the exception type is executed.

\`\`\`python
def process_data(data_item, index_to_access):
    try:
        print(f"\\nProcessing item: {data_item}, accessing index: {index_to_access}")
        # Potential TypeError if data_item is not a string or list
        # Potential IndexError if index_to_access is out of bounds
        # Potential ValueError if trying to convert an invalid part to int
        
        value_at_index = data_item[index_to_access]
        print(f"Value at index {index_to_access}: {value_at_index}")
        
        numeric_value = int(value_at_index) # Potential ValueError
        print(f"Numeric value: {numeric_value}")
        
    except TypeError:
        print(f"Error: The data item \rások{data_item}" does not support indexing or its type is wrong for this operation.")
    except IndexError:
        print(f"Error: Index {index_to_access} is out of bounds for data item \rások{data_item}".")
    except ValueError:
        print(f"Error: Could not convert value \rások{value_at_index}" to an integer.")
    except Exception as e: # A more general handler (catches any other Exception)
        print(f"An unexpected error occurred: {e} (Type: {type(e).__name__})")

process_data(["10", "20", "hello"], 0) # Works fine
process_data(["10", "20", "hello"], 1) # Works fine
process_data(["10", "20", "hello"], 2) # ValueError when trying int("hello")
process_data(["10", "20"], 5)        # IndexError
process_data(123, 0)                 # TypeError (int is not subscriptable)
process_data("abc", 0)               # Works for indexing, but int("a") is ValueError
\`\`\`
It is generally good practice to list more specific exception handlers before more general ones. If a general \`except Exception:\` were listed first, it would catch all exceptions, and the more specific handlers below it would never be reached.

**2. Handling Multiple Exceptions in a Single \`except\` Clause**

You can group multiple exception types in a tuple for a single handler block if the handling logic is the same.

\`\`\`python
def open_and_read_file(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            print(f"File content:\\n{content}")
            # Let's imagine a division that could go wrong
            # result = 10 / len(content) # Potential ZeroDivisionError if file is empty
            # print(f"Result of division: {result}")
            
    except (FileNotFoundError, PermissionError) as e:
        # Handles both FileNotFoundError and PermissionError with the same logic
        print(f"File access error: \rások{filepath}" could not be opened or accessed.")
        print(f"Specific error: {e} (Type: {type(e).__name__})")
    except ZeroDivisionError:
        print("Error: Cannot perform division because the file content might be empty.")
    except Exception as e:
        print(f"An unexpected error occurred while processing \rások{filepath}": {e}")

# Create a dummy file for testing
with open("testfile.txt", "w") as f: f.write("Hello world")

open_and_read_file("testfile.txt")
open_and_read_file("non_existent.txt") # FileNotFoundError
# To test PermissionError, you might need to create a file with restricted permissions manually.
\`\`\`

**Accessing the Exception Object (\`as e\`)**

Often, you want to get more information about the exception that occurred. You can do this by assigning the exception object to a variable using the \`as\` keyword in the \`except\` clause (e.g., \`except ValueError as e:\`).

The exception object \`e\` typically contains:
*   A description of the error (can be accessed by \`str(e)\` or just printing \`e\`).
*   Sometimes, arguments passed to the exception when it was raised (e.g., \`e.args\`).
*   The type of the exception can be found using \`type(e)\` or \`type(e).__name__\`.

\`\`\`python
try:
    x = int("not_a_number")
except ValueError as err_object:
    print(f"A ValueError occurred!")
    print(f"Error message: {err_object}")
    print(f"Error type: {type(err_object).__name__}")
    print(f"Error arguments: {err_object.args}")
\`\`\`

**Catching All Exceptions (Generally Discouraged without Care)**

You can use a bare \`except:\` clause or \`except Exception:\` to catch *any* exception. However, this is generally discouraged unless you have a very specific reason and know how to handle all possible situations, or if you are re-raising the exception or logging it before termination.

*   **Bare \`except:\`**: Catches *all* exceptions, including system-exiting exceptions like \`SystemExit\` or \`KeyboardInterrupt\`. This can make it hard to stop your program (e.g., with Ctrl+C).
*   **\`except Exception:\`**: Catches all exceptions that are subclasses of the base \`Exception\` class. This is usually safer than a bare \`except:\` because it won’t catch \`SystemExit\`, \`KeyboardInterrupt\`, and \`GeneratorExit\` by default.

\`\`\`python
# Example of a broad exception handler (use with caution)
try:
    # some_risky_operation()
    val = 10 / 0
except Exception as e:
    print(f"A general exception was caught: {e}")
    print("This might hide the real problem or make debugging harder.")
    # It is often better to handle specific exceptions you anticipate.
\`\`\`
If you use a broad exception handler, it's good practice to at least log the full error details or re-raise the exception after some cleanup, so you don't completely silence the error.

**Conclusion**

The \`try...except\` block is Python’s primary mechanism for handling runtime errors (exceptions). It allows you to write code that might fail and provide specific handlers for different types of exceptions.

Key takeaways:
*   Code that might raise an exception goes in the \`try\` block.
*   Code to handle a specific exception goes in an \`except ExceptionType:\` block.
*   You can have multiple \`except\` blocks for different exceptions or group them.
*   Using \`as variable_name\` in an \`except\` clause gives you access to the exception object for more details.
*   It is generally better to catch specific exceptions rather than using a broad \`except Exception:\` or bare \`except:\`, as this allows for more targeted error handling and easier debugging.

In the next lessons, we will explore additional clauses like \`else\` and \`finally\` that can be used with \`try...except\`, and how to raise your own exceptions.
`;export{e as default};
