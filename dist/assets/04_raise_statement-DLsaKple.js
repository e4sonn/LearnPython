const e=`# Module 11: Error and Exception Handling - Lesson 4: The \`raise\` Statement

So far, we have focused on handling exceptions that Python raises automatically when errors occur during runtime. However, there are situations where you might want to explicitly raise an exception in your own code. This is done using the \`raise\` statement.

**What is the \`raise\` Statement?**

The \`raise\` statement allows you to deliberately trigger an exception at any point in your program. When Python encounters a \`raise\` statement, it stops the current execution flow and starts the exception propagation process, looking for a suitable \`except\` block to handle it, just as if the exception had occurred naturally.

**Why Use the \`raise\` Statement?**

1.  **Signal Errors Based on Custom Conditions**: You can raise an exception when your code detects a condition that it considers an error, even if it wouldn't cause Python to raise an exception automatically. For example, if a function receives an argument that is of the correct type but has an invalid value according to the function's logic.
2.  **Re-raising Exceptions**: Inside an \`except\` block, you might want to catch an exception, perform some actions (like logging the error), and then re-raise the same exception (or a different one) to let a higher-level handler deal with it.
3.  **Creating Custom Error Types**: You can define your own exception classes (which we'll cover in the next lesson) and raise instances of these custom exceptions to provide more specific error information relevant to your application.
4.  **Indicating Unimplemented Features**: As a placeholder for parts of your code that are not yet implemented (e.g., raising \`NotImplementedError\`).

**Syntax of the \`raise\` Statement**

There are a few ways to use the \`raise\` statement:

1.  **\`raise ExceptionClassName\`**: Raises an instance of the specified exception class. Python will implicitly create an instance of \`ExceptionClassName\`.
    \`\`\`python
    # raise ValueError
    \`\`\`

2.  **\`raise ExceptionClassName(arguments)\`**: Raises an instance of the specified exception class, providing arguments (usually an error message string) to its constructor.
    \`\`\`python
    # raise ValueError("Invalid input value provided.")
    \`\`\`

3.  **\`raise exception_instance\`**: Raises an already existing exception object.
    \`\`\`python
    # err = ValueError("Something went wrong.")
    # raise err
    \`\`\`

4.  **\`raise\` (used alone inside an \`except\` block)**: Re-raises the exception that is currently being handled. This is useful if you want to perform some action in the \`except\` block but then let the exception continue to propagate.

**Example 1: Raising an Exception for Invalid Input**

Let's say we have a function that expects a positive number, and we want to raise a \`ValueError\` if it receives a non-positive number.

\`\`\`python
def process_positive_number(number):
    print(f"\\nProcessing number: {number}")
    if not isinstance(number, (int, float)):
        # Raise TypeError if the input is not even a number
        raise TypeError("Input must be a numeric type (int or float).")
    if number <= 0:
        # Raise ValueError for a logically invalid numeric value
        raise ValueError("The number must be positive.")
    
    # If no exception is raised, proceed with processing
    print(f"The number {number} is positive and valid.")
    # ... further processing ...
    return number * 2

# Test cases
try:
    result1 = process_positive_number(10)
    print(f"Result 1: {result1}")
    
    result2 = process_positive_number(-5) # This will raise ValueError
    print(f"Result 2: {result2}") # This line won't be reached
    
except ValueError as ve:
    print(f"Caught a ValueError: {ve}")
except TypeError as te:
    print(f"Caught a TypeError: {te}")

print("--- Another test case ---")
try:
    result3 = process_positive_number("abc") # This will raise TypeError
    print(f"Result 3: {result3}")
except (ValueError, TypeError) as e:
    print(f"Caught an error: {e} (Type: {type(e).__name__})")

print("\\nProgram continues after handling raised exceptions.")
\`\`\`

**Output:**
\`\`\`
Processing number: 10
The number 10 is positive and valid.
Result 1: 20

Processing number: -5
Caught a ValueError: The number must be positive.
--- Another test case ---

Processing number: abc
Caught an error: Input must be a numeric type (int or float). (Type: TypeError)

Program continues after handling raised exceptions.
\`\`\`
In this example, \`process_positive_number\` actively checks its input and uses \`raise\` to signal an error condition that it defines.

**Example 2: Re-raising an Exception**

Sometimes, you might want to catch an exception, log it or perform some cleanup, and then let a higher-level part of your program handle it. You can re-raise the current exception by using \`raise\` without any arguments inside an \`except\` block.

\`\`\`python
def complex_operation(data):
    try:
        # Simulate a complex operation that might fail
        print(f"\\nPerforming complex operation with: {data}")
        if not data:
            raise ValueError("Input data cannot be empty for complex operation.")
        # ... more operations ...
        result = 100 / len(data) # Potential ZeroDivisionError if data is empty (though caught by above)
                                 # or if data is a number (TypeError for len())
        print("Complex operation successful.")
        return result
        
    except ValueError as ve:
        print(f"LOG (complex_operation): A ValueError occurred - \rások{ve}".")
        # Perform some specific logging or cleanup for ValueError here
        # Then re-raise the exception to be handled by the caller
        print("Re-raising the ValueError...")
        raise # Re-raises the original ValueError
    except TypeError as te:
        print(f"LOG (complex_operation): A TypeError occurred - \rások{te}".")
        # Perhaps convert this to a more specific custom error before re-raising
        # For now, just re-raise the original TypeError
        print("Re-raising the TypeError...")
        raise

# Caller function that handles the re-raised exceptions
def main_caller():
    try:
        # complex_operation([]) # Test ValueError
        complex_operation(5)  # Test TypeError
    except ValueError as e:
        print(f"HANDLER (main_caller): Caught re-raised ValueError: {e}")
    except TypeError as e:
        print(f"HANDLER (main_caller): Caught re-raised TypeError: {e}")
    except Exception as e:
        print(f"HANDLER (main_caller): Caught some other exception: {e}")
    finally:
        print("Main caller finished.")

main_caller()
\`\`\`

**Output (if \`complex_operation(5)\` is called):**
\`\`\`
Performing complex operation with: 5
LOG (complex_operation): A TypeError occurred - object of type 'int' has no len().
Re-raising the TypeError...
HANDLER (main_caller): Caught re-raised TypeError: object of type 'int' has no len().
Main caller finished.
\`\`\`
Re-raising is useful for creating layers of error handling. A low-level function might handle specific technical details of an error (like logging), while a higher-level function handles the user-facing aspects or application-level recovery.

**Raising a Different Exception from an \`except\` Block**

Instead of re-raising the same exception, you can also raise a new, possibly different, exception from within an \`except\` block. This is often done to translate a low-level exception into a more abstract or application-specific one.

\`\`\`python
class MyAppSpecificError(Exception):
    """A custom exception for our application."""
    pass

def load_config(filepath):
    try:
        print(f"\\nLoading configuration from: {filepath}")
        with open(filepath, "r") as f:
            # ... imagine parsing logic here ...
            if "critical_setting_missing" in f.read(): # Simplified check
                raise KeyError("Critical setting is missing in the config file.")
            print("Configuration loaded successfully.")
            
    except FileNotFoundError as fnf_error:
        print(f"LOG (load_config): File not found - \rások{fnf_error}".")
        # Raise a more application-specific error
        raise MyAppSpecificError(f"Configuration file \rások{filepath}" not found. Please check the path.") from fnf_error
    except KeyError as ke_error:
        print(f"LOG (load_config): Key error during parsing - \rások{ke_error}".")
        raise MyAppSpecificError(f"Configuration error: {ke_error}") from ke_error

# Test this
try:
    # load_config("non_existent_config.cfg")
    # Create a dummy config file for the KeyError test
    with open("bad_config.cfg", "w") as f: f.write("critical_setting_missing")
    load_config("bad_config.cfg")
except MyAppSpecificError as app_err:
    print(f"CAUGHT (main): {app_err}")
    # To see the original exception that caused this, if chained:
    if app_err.__cause__:
        print(f"  Caused by: {type(app_err.__cause__).__name__} - {app_err.__cause__}")
\`\`\`

**Exception Chaining (\`raise NewException from OriginalException\`)**

When you raise a new exception from within an \`except\` block, Python 3 allows you to **chain exceptions** using the \`from\` keyword: \`raise NewException from original_exception_object\`.

This preserves the traceback of the original exception as the \`__cause__\` attribute of the new exception. This is extremely useful for debugging because it shows the root cause of the error, even if it was translated into a different exception type.

If you raise a new exception from an \`except\` block *without* using \`from\`, the original exception context is still available via the \`__context__\` attribute of the new exception (this is called implicit exception chaining). However, using \`from\` makes the chain explicit and is generally preferred when the new exception is a direct consequence of the original one.

If you want to suppress the original exception context entirely when raising a new one from an \`except\` block, you can use \`raise NewException from None\`.

**Common Built-in Exceptions to Raise**

While you can define custom exceptions, it's often appropriate to raise built-in exceptions if they accurately describe the error:

*   **\`ValueError\`**: For invalid values of arguments (right type, wrong value).
*   **\`TypeError\`**: For arguments of the wrong type.
*   **\`RuntimeError\`**: A generic error when the situation doesn't fit a more specific built-in exception.
*   **\`NotImplementedError\`**: To indicate that a method or feature is not yet implemented. This is often used in abstract base classes or interfaces.
    \`\`\`python
    def future_feature():
        raise NotImplementedError("This feature will be available in version 2.0!")
    
    # try:
    #     future_feature()
    # except NotImplementedError as nie:
    #     print(f"Feature status: {nie}")
    \`\`\`
*   **\`AssertionError\`**: Raised by the \`assert\` statement (which we haven't covered in detail, but it's used for internal self-checks during development).

**Conclusion**

The \`raise\` statement gives you the power to signal errors proactively in your code. You can raise built-in exceptions or custom ones to indicate that something has gone wrong according to your program's logic.

Key uses of \`raise\`:
*   Validating inputs and conditions.
*   Re-raising caught exceptions to allow higher-level handlers to deal with them.
*   Translating low-level exceptions into more meaningful application-specific errors, often using exception chaining with \`from\` to preserve context.

Using \`raise\` effectively, in conjunction with \`try...except\` blocks, is crucial for building robust Python applications that can identify, report, and manage errors in a structured way. In the next lesson, we will learn how to create our own custom exception classes to make error reporting even more specific and informative.
`;export{e as default};
