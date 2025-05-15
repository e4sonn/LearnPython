const e=`# Module 2: Variables and Data Types - Lesson 2: Built-in Data Types

In the previous lesson, we learned about variables and how they store data. Now, let's explore the different kinds of data that Python can handle. These are known as **data types**. Python has several built-in data types that are fundamental to programming. Understanding these types is crucial because the type of data determines what operations you can perform on it and how it's stored in memory.

Python is dynamically typed, meaning you don't have to explicitly declare the data type of a variable. Python infers it from the value assigned. Let's look at the most common built-in data types:

**1. Numeric Types**

Numeric types represent numbers. Python supports several numeric types:

*   **Integers (\`int\`)**: These are whole numbers, positive or negative, without any decimal point. Examples include \`-5\`, \`0\`, \`100\`, \`987654321\`.
    \`\`\`python
    count = 10
    temperature = -4
    population = 7800000000

    print(type(count))  # Output: <class 'int'>
    \`\`\`
    The \`type()\` function is a handy built-in function that tells you the data type of a variable or a value.

*   **Floating-Point Numbers (\`float\`)**: These are numbers that have a decimal point, or are expressed in exponential notation (e.g., \`2.5e2\` which is 2.5 x 10<sup>2</sup> = 250.0). Floats represent real numbers. Examples include \`3.14\`, \`-0.001\`, \`2.0\`, \`1.23E4\`.
    \`\`\`python
    pi_value = 3.14159
    price = 19.99
    scientific_notation = 6.022e23  # Avogadro's number

    print(type(price))  # Output: <class 'float'>
    \`\`\`
    It's important to note that floating-point arithmetic can sometimes have small precision issues due to the way computers represent these numbers internally. For most common applications, this is not a problem, but it's something to be aware of for high-precision calculations.

*   **Complex Numbers (\`complex\`)**: Python also supports complex numbers, which are numbers with a real and an imaginary part (e.g., \`3 + 4j\`, where \`j\` is the imaginary unit). While less commonly used in general programming, they are essential in certain scientific and engineering fields.
    \`\`\`python
    complex_num = 2 + 5j
    another_complex = complex(7, -1) # Using the complex() constructor

    print(type(complex_num))      # Output: <class 'complex'>
    print(complex_num.real)       # Output: 2.0 (real part)
    print(complex_num.imag)       # Output: 5.0 (imaginary part)
    \`\`\`

**2. Text Type: Strings (\`str\`)**

Strings are used to represent textual data. A string is a sequence of characters. You can create strings by enclosing characters in either single quotes (\`'...'\`) or double quotes (\`"..."\`). Triple quotes (\`'''...'''\` or \`"""..."""\`) can be used for multi-line strings or for docstrings.

\`\`\`python
message = "Hello, Python learners!"
single_quoted_string = 'Python is fun.'
empty_string = ""

multi_line_message = """This is a string
that spans across
multiple lines."""

print(type(message))  # Output: <class 'str'>
print(multi_line_message)
\`\`\`

Strings are **immutable**, which means once a string is created, it cannot be changed. Any operation that appears to modify a string (like concatenation or slicing) actually creates a new string. We'll explore string methods and operations in more detail in a dedicated lesson.

**3. Boolean Type (\`bool\`)**

The Boolean data type represents one of two values: \`True\` or \`False\`. Booleans are fundamental for logical operations and control flow (e.g., in \`if\` statements and \`while\` loops to make decisions).

Note that \`True\` and \`False\` are keywords in Python and must be capitalized.

\`\`\`python
is_active = True
has_permission = False

print(type(is_active))  # Output: <class 'bool'>

# Booleans are often the result of comparisons:
result = (10 > 5)  # 10 > 5 is True
print(result)      # Output: True
print(type(result))# Output: <class 'bool'>
\`\`\`
Internally, \`True\` is represented as \`1\` and \`False\` as \`0\`.

**4. Sequence Types**

Sequence types represent ordered collections of items. The main built-in sequence types are lists, tuples, and range objects.

*   **Lists (\`list\`)**: A list is a versatile, ordered, and **mutable** collection of items. This means you can change a list after it's created (add, remove, or modify items). Lists are defined by enclosing comma-separated items in square brackets \`[]\`. List items can be of different data types.
    \`\`\`python
    numbers = [1, 2, 3, 4, 5]
mixed_list = [10, "hello", 3.14, True]
empty_list = []

    print(type(numbers))     # Output: <class 'list'>
    print(mixed_list[1])     # Output: hello (accessing an item by index)
    mixed_list[0] = 20       # Modifying an item
    print(mixed_list)        # Output: [20, 'hello', 3.14, True]
    \`\`\`

*   **Tuples (\`tuple\`)**: A tuple is an ordered and **immutable** collection of items. Once a tuple is created, you cannot change its contents. Tuples are defined by enclosing comma-separated items in parentheses \`()\`. (Parentheses are sometimes optional if the context is clear).
    \`\`\`python
    coordinates = (10.0, 20.5)
    rgb_color = (255, 0, 128)
    single_item_tuple = (42,) # Note the trailing comma for a single-item tuple

    print(type(coordinates)) # Output: <class 'tuple'>
    print(rgb_color[0])      # Output: 255
    # rgb_color[0] = 100     # This would cause a TypeError because tuples are immutable
    \`\`\`
    Tuples are often used for fixed collections of items, like coordinates or RGB color values, where you want to ensure the data doesn't accidentally change.

*   **Range (\`range\`)**: A range object represents an immutable sequence of numbers and is commonly used for looping a specific number of times in \`for\` loops. We'll see more of \`range()\` when we discuss loops.
    \`\`\`python
    sequence_of_numbers = range(5) # Represents numbers 0, 1, 2, 3, 4
    print(type(sequence_of_numbers)) # Output: <class 'range'>
    for num in sequence_of_numbers:
        print(num) # Prints 0, 1, 2, 3, 4 each on a new line
    \`\`\`

**5. Mapping Type: Dictionaries (\`dict\`)**

A dictionary is an unordered (in Python versions before 3.7, ordered in 3.7+) collection of **key-value pairs**. Dictionaries are mutable. They are defined using curly braces \`{}\` with keys and values separated by a colon (\`:\`), and pairs separated by commas.
Keys in a dictionary must be unique and immutable (e.g., strings, numbers, or tuples can be keys, but lists cannot).

\`\`\`python
student_info = {
    "name": "Alice",
    "age": 21,
    "major": "Computer Science",
    "is_enrolled": True
}
empty_dict = {}

print(type(student_info))  # Output: <class 'dict'>
print(student_info["name"]) # Output: Alice (accessing value by key)
student_info["age"] = 22    # Modifying a value
student_info["year"] = "Junior" # Adding a new key-value pair
print(student_info)
\`\`\`
Dictionaries are very useful for storing data that has a clear label or identifier for each piece of information.

**6. Set Types (\`set\`, \`frozenset\`)**

*   **Sets (\`set\`)**: A set is an unordered collection of **unique** items. Sets are mutable. They are defined by enclosing comma-separated items in curly braces \`{}\` or by using the \`set()\` constructor. If you put duplicate items into a set, only one instance will be kept.
    \`\`\`python
    unique_numbers = {1, 2, 3, 4, 4, 5, 2}
    print(unique_numbers)       # Output: {1, 2, 3, 4, 5} (duplicates removed, order may vary)
    print(type(unique_numbers)) # Output: <class 'set'>

    empty_set = set() # To create an empty set, use set(), not {} ({} creates an empty dictionary)
    \`\`\`
    Sets are useful for membership testing, removing duplicates from a sequence, and performing mathematical set operations like union, intersection, difference, etc.

*   **Frozen Sets (\`frozenset\`)**: A frozenset is an immutable version of a set. Once created, you cannot add or remove items. Frozensets can be used as dictionary keys if needed (since they are immutable and hashable).
    \`\`\`python
    frozen_colors = frozenset(["red", "green", "blue"])
    print(type(frozen_colors)) # Output: <class 'frozenset'>
    # frozen_colors.add("yellow") # This would cause an AttributeError
    \`\`\`

**7. The None Type (\`NoneType\`)**

The \`NoneType\` has a single value: \`None\`. \`None\` is a special constant in Python that represents the absence of a value or a null value. It's often used to indicate that a variable doesn't have a meaningful value yet or that a function doesn't return anything explicitly.

\`\`\`python
result = None
print(result)        # Output: None
print(type(result))  # Output: <class 'NoneType'>

def my_function_that_returns_nothing():
    x = 10 # does something but doesn't return

output = my_function_that_returns_nothing()
print(output) # Output: None
\`\`\`

**Type Conversion (Casting)**

Sometimes you need to convert a value from one data type to another. This is called type conversion or type casting. Python provides built-in functions for this:
*   \`int()\`: Converts to an integer.
*   \`float()\`: Converts to a float.
*   \`str()\`: Converts to a string.
*   \`list()\`: Converts to a list.
*   \`tuple()\`: Converts to a tuple.
*   \`set()\`: Converts to a set.
*   \`dict()\`: Converts to a dictionary (requires an appropriate structure).
*   \`bool()\`: Converts to a boolean (most values are \`True\`, except for \`False\`, \`None\`, \`0\`, empty sequences/mappings).

\`\`\`python
num_str = "123"
num_int = int(num_str)
print(num_int)         # Output: 123
print(type(num_int))   # Output: <class 'int'>

value = 0
is_true = bool(value)
print(is_true)       # Output: False

another_value = "Hello"
is_also_true = bool(another_value)
print(is_also_true)  # Output: True
\`\`\`
Be careful with type conversions, as some conversions might not be possible (e.g., \`int("hello")\` will raise a \`ValueError\`).

**Conclusion**

Python's built-in data types provide the foundation for representing and working with all kinds of information. We've covered numeric types (int, float, complex), text (str), booleans (bool), sequences (list, tuple, range), mappings (dict), sets (set, frozenset), and the special \`NoneType\`. As you progress, you'll become very familiar with these types and learn how to use them effectively to build powerful programs. In the upcoming lessons, we'll explore some of these data types, like strings, lists, and dictionaries, in much greater detail.
`;export{e as default};
