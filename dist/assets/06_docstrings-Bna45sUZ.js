const e=`# Module 7: Functions - Lesson 6: Docstrings

Throughout our exploration of functions, we've briefly mentioned and used **docstrings**. Docstrings (documentation strings) are an integral part of writing good Python code. They provide a convenient way to document what your functions (and also modules, classes, and methods) do, how to use them, and what they return.

**What is a Docstring?**

A docstring is a string literal that occurs as the **first statement** in a module, function, class, or method definition. It is used to explain the purpose and usage of the defined object.

*   It is enclosed in triple quotes (either \`"""This is a docstring"""\` or \`'''This is a docstring'''\`). Triple quotes are used because docstrings can span multiple lines.
*   It becomes the \`__doc__\` special attribute of that object.
*   It is accessible at runtime and is used by tools like \`help()\`, IDEs, and documentation generators (e.g., Sphinx) to provide information about your code.

**Why are Docstrings Important?**

1.  **Documentation**: They are the primary way to document your code. Good docstrings make your code understandable to others and to your future self.
2.  **Readability**: They explain the *what* and *why* of a piece of code, not just the *how*.
3.  **Usability**: Tools can extract docstrings to generate help texts or API documentation, making your functions easier for others to use.
4.  **Maintainability**: Clear documentation helps in maintaining and updating code over time.

**How to Write Docstrings for Functions**

There are conventions for writing good docstrings, notably outlined in PEP 257 (Docstring Conventions).

**1. Single-Line Docstrings:**

For very simple functions, a single-line docstring is often sufficient. It should be a concise summary of the function's purpose and should fit on one line.

*   The triple quotes should be on the same line.
*   There should be no blank line before or after the docstring.
*   It should end with a period.

\`\`\`python
def add(a, b):
    """Return the sum of a and b."""
    return a + b

def say_hello(name):
    """Print a simple greeting to the given name."""
    print(f"Hello, {name}!")
\`\`\`

**2. Multi-Line Docstrings:**

For more complex functions, a multi-line docstring is necessary. It consists of:

*   A **summary line** (like a single-line docstring), which may be on the same line as the opening triple quotes or on the next line.
*   A **blank line** following the summary line.
*   More **detailed explanatory text** describing the function's arguments, return values, side effects, exceptions raised, restrictions on when it can be called, etc.

\`\`\`python
import math

def calculate_circle_area(radius):
    """Calculate the area of a circle given its radius.

    This function takes the radius of a circle as input and returns its area,
    calculated using the formula: area = pi * radius^2.

    Args:
        radius (float or int): The radius of the circle. Must be non-negative.

    Returns:
        float: The calculated area of the circle.
        Returns None if the radius is negative, along with a printed warning.

    Raises:
        TypeError: If the radius is not a number.
    """
    if not isinstance(radius, (int, float)):
        raise TypeError("Radius must be a number.")
    if radius < 0:
        print("Warning: Radius cannot be negative. Returning None.")
        return None
    return math.pi * radius * radius
\`\`\`

**Common Sections in Multi-Line Docstrings (especially for functions):**

*   **Summary Line**: A concise overview.
*   **Arguments Section (\`Args:\`, \`Parameters:\`)**: List each parameter, its type (optional but helpful), and a description of what it represents.
    \`\`\`
    Args:
        param1 (type): Description of param1.
        param2 (type): Description of param2.
    \`\`\`
*   **Returns Section (\`Returns:\`, \`Yields:\`)**: Describe the type and meaning of the value(s) returned by the function. If the function returns multiple values (e.g., as a tuple), describe each.
    \`\`\`
    Returns:
        return_type: Description of the returned value.
        (If multiple values, e.g., for a tuple return)
        tuple (type1, type2): Description of what the tuple contains.
            type1: Description of the first element.
            type2: Description of the second element.
    \`\`\`
*   **Raises Section (\`Raises:\`)**: List any exceptions that the function might explicitly raise under certain conditions.
    \`\`\`
    Raises:
        ExceptionType: Explanation of when this exception is raised.
    \`\`\`
*   **Other Sections**: You might also include sections like \`Example:\`, \`Examples:\`, \`Note:\`, \`See Also:\`, etc., as needed.

There are different docstring formats (e.g., Google style, NumPy style, reStructuredText style). The example above is a common general style. Consistency within a project is key.

**Accessing Docstrings**

You can access the docstring of a function (or other documented object) in a few ways:

1.  **Using the \`help()\` function:**
    \`\`\`python
    help(calculate_circle_area)
    # This will print a formatted version of the docstring.
    \`\`\`

2.  **Using the \`__doc__\` attribute:**
    Every object with a docstring has a \`__doc__\` attribute that holds the raw docstring string.
    \`\`\`python
    print(calculate_circle_area.__doc__)
    # This will print the raw string, including newlines and indentation.
    \`\`\`

**Example with \`help()\` and \`__doc__\`:**

\`\`\`python
def power(base, exponent):
    """Raise base to the power of exponent.

    Args:
        base (int or float): The base number.
        exponent (int or float): The exponent.

    Returns:
        int or float: The result of base raised to the exponent.
    """
    return base ** exponent

# Using help()
help(power)

print("\\n------------------\\n")

# Using __doc__
print(power.__doc__)
\`\`\`

**Docstrings vs. Comments**

It's important to distinguish docstrings from regular comments (\`#\`):

*   **Docstrings (\`"""..."""\`)**: Are for documenting the *purpose and usage* of a function, class, module, or method. They are accessible at runtime via the \`__doc__\` attribute and are used by documentation tools. They explain *what* the code does from an external perspective (how to use it).

*   **Comments (\`# ...\`)**: Are for explaining *how* a particular piece of code works internally, clarifying complex logic, or leaving notes for developers. They are ignored by the Python interpreter and are not accessible at runtime in the same way docstrings are.

\`\`\`python
def get_average(numbers_list): # This is a comment explaining a quick thought
    """Calculate the average of a list of numbers.

    Args:
        numbers_list (list of int or float): A list of numbers.

    Returns:
        float: The average of the numbers, or 0 if the list is empty.
    """
    if not numbers_list: # Check if the list is empty to avoid DivisionByZeroError
        return 0
    # Calculate sum and then divide by the count of numbers
    total_sum = sum(numbers_list)
    count = len(numbers_list)
    average = total_sum / count
    return average
\`\`\`
In this example, the triple-quoted string is the docstring. The lines starting with \`#\` are comments.

**Best Practices for Writing Docstrings:**

*   **Write them for all public modules, functions, classes, and methods.**
*   **Keep the summary line concise and informative.**
*   **Use clear and unambiguous language.**
*   **Describe what the function *does*, not *how* it does it (unless the how is critical to its usage).**
*   **Document all parameters, return values, and any exceptions raised.**
*   **Keep docstrings up-to-date as the code changes.**
*   **Follow a consistent style (e.g., PEP 257, Google style, NumPy style) within your project.**

**Conclusion**

Docstrings are a vital part of writing professional, maintainable, and usable Python code. They serve as the primary form of documentation for your functions and other code objects, making it easier for others (and your future self) to understand and use your code effectively. By cultivating the habit of writing clear and comprehensive docstrings, you significantly improve the quality and longevity of your software projects. This concludes our core lessons on functions in Module 7. We've covered defining and calling functions, arguments and parameters, return values, variable scope, lambda functions, and now, the importance of docstrings.
`;export{e as default};
