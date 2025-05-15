const t=`# Module 3: Operators - Lesson 6: Identity Operators

In our ongoing exploration of Python operators, we now arrive at **identity operators**. These operators are used to compare the memory locations of two objects, essentially checking if two variables refer to the exact same object in memory, not just if they have the same value.

This is a key distinction from comparison operators like \`==\` (equal to), which compare the *values* of the operands. Identity operators, on the other hand, are concerned with whether the operands are *the same instance*.

Python has two identity operators: \`is\` and \`is not\`.

**1. \`is\` Operator**

The \`is\` operator evaluates to \`True\` if both variables on its left and right sides point to the exact same object in memory. Otherwise, it evaluates to \`False\`.

**Syntax:** \`object1 is object2\`

**Examples:**

\`\`\`python
# Example with lists (mutable objects)
list_a = [1, 2, 3]
list_b = [1, 2, 3]
list_c = list_a

# Comparing values using ==
print(f"list_a == list_b: {list_a == list_b}")  # Output: list_a == list_b: True (values are the same)
print(f"list_a == list_c: {list_a == list_c}")  # Output: list_a == list_c: True (values are the same)

# Comparing identity using is
print(f"list_a is list_b: {list_a is list_b}")  # Output: list_a is list_b: False
                                            # list_a and list_b are two different list objects in memory,
                                            # even though their contents are identical.

print(f"list_a is list_c: {list_a is list_c}")  # Output: list_a is list_c: True
                                            # list_c was assigned to list_a, so they both point to
                                            # the same list object in memory.

# Modifying list_a will also affect list_c because they are the same object
list_a.append(4)
print(f"After modifying list_a, list_a: {list_a}") # Output: [1, 2, 3, 4]
print(f"After modifying list_a, list_c: {list_c}") # Output: [1, 2, 3, 4]
print(f"After modifying list_a, list_b: {list_b}") # Output: [1, 2, 3] (list_b is independent)
\`\`\`

**Behavior with Immutable Types (like small integers and strings - CPython specific)**

For certain immutable types, Python (specifically the CPython implementation) often optimizes memory usage by having multiple variables that hold the same immutable value point to the same object. This is particularly true for small integers (typically -5 to 256) and short strings that are "interned".

\`\`\`python
# Small integers
a = 100
b = 100
print(f"For small integers: a = {a}, b = {b}")
print(f"a == b: {a == b}") # Output: True
print(f"a is b: {a is b}") # Output: True (CPython often reuses objects for small integers)

c = 257
d = 257
print(f"For larger integers: c = {c}, d = {d}")
print(f"c == d: {c == d}") # Output: True
print(f"c is d: {c is d}") # Output: False (CPython may or may not reuse objects for larger integers)
                         # This behavior can vary and should not be relied upon for correctness.

# Strings (interning)
str_x = "hello"
str_y = "hello"
print(f"For interned strings: str_x = \rások{str_x}", str_y = \rások{str_y}"")
print(f"str_x == str_y: {str_x == str_y}") # Output: True
print(f"str_x is str_y: {str_x is str_y}") # Output: True (CPython often interns short strings)

str_p = "a long string that is not interned by default"
str_q = "a long string that is not interned by default"
print(f"str_p == str_q: {str_p == str_q}") # Output: True
print(f"str_p is str_q: {str_p is str_q}") # Output: False (likely, unless explicitly interned or due to other optimizations)
\`\`\`

**Important Note:** While these optimizations for immutable types exist, you should **generally not rely on \`is\` to check for equality of immutable values like numbers or strings.** Use \`==\` for value comparison. The \`is\` operator is primarily intended for checking object identity, especially when dealing with mutable objects or when you specifically need to know if two variables reference the exact same instance.

**2. \`is not\` Operator**

The \`is not\` operator is the logical opposite of \`is\`. It evaluates to \`True\` if both variables on its left and right sides point to **different** objects in memory. If they point to the same object, it evaluates to \`False\`.

**Syntax:** \`object1 is not object2\`

**Examples:**

\`\`\`python
list_x = ["a", "b"]
list_y = ["a", "b"]
list_z = list_x

# Comparing values
print(f"list_x == list_y: {list_x == list_y}") # Output: True

# Comparing identity
print(f"list_x is not list_y: {list_x is not list_y}") # Output: True (they are different objects)
print(f"list_x is not list_z: {list_x is not list_z}") # Output: False (they are the same object)

num1 = 500
num2 = 500
print(f"num1 is not num2 (for larger integers): {num1 is not num2}") # Output: True (likely different objects)
\`\`\`

**When to Use Identity Operators (\`is\`, \`is not\`)**

1.  **Checking for \`None\`:** The most common and idiomatic use of \`is\` and \`is not\` is to check if a variable is \`None\`. \`None\` is a singleton object (there is only one instance of \`None\` in a Python program). Therefore, you should always use \`is None\` or \`is not None\` rather than \`== None\` or \`!= None\`.

    \`\`\`python
    my_value = None

    if my_value is None:
        print("my_value is indeed None.")
    else:
        print("my_value is not None.")

    another_value = "Hello"
    if another_value is not None:
        print("another_value holds something other than None.")
    \`\`\`
    While \`another_value == None\` might work, \`is None\` is preferred for style and because it directly checks for the \`None\` object identity.

2.  **Comparing with Singleton Objects:** Besides \`None\`, \`True\` and \`False\` are also singleton objects. So, \`variable is True\` or \`variable is False\` can be used, though often just \`if variable:\` or \`if not variable:\` is more Pythonic for Booleans.

3.  **Explicit Object Identity Checks:** When you specifically need to determine if two variables refer to the exact same mutable object in memory, particularly if you want to know if changes to one will affect the other.

    \`\`\`python
    original_list = [10, 20]
    copied_list = original_list[:] # Creates a shallow copy (different object, same values)
    alias_list = original_list     # Creates an alias (same object)

    print(f"original_list is copied_list: {original_list is copied_list}") # Output: False
    print(f"original_list is alias_list: {original_list is alias_list}")   # Output: True
    \`\`\`

**\`is\` vs. \`==\` Summary**

*   **\`==\` (Equality Operator):**
    *   Compares the **values** of two operands.
    *   Returns \`True\` if the values are equal, \`False\` otherwise.
    *   This is what you use most of the time when you want to know if two things are "the same" in terms of their content.

*   **\`is\` (Identity Operator):**
    *   Compares the **identity** (memory location) of two operands.
    *   Returns \`True\` if both operands refer to the exact same object instance, \`False\` otherwise.
    *   Primarily used for checking against \`None\` or when you need to be sure you are dealing with the same instance of a mutable object.

**Conclusion**

Identity operators (\`is\` and \`is not\`) provide a way to check if two variables refer to the very same object in memory. They are distinct from equality operators (\`==\`, \`!=\`) which compare values. The most crucial and common use case for identity operators is checking for \`None\`. While Python has some internal optimizations for immutable types that might make \`is\` return \`True\` for identical values, this behavior is implementation-dependent and should not be relied upon for comparing values like numbers or strings; use \`==\` for that purpose. Understanding the difference between identity and equality is key to avoiding subtle bugs and writing clear, Pythonic code.
`;export{t as default};
