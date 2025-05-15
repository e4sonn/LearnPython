const e=`# Module 6: Data Structures - Lesson 2: Tuples - Creating, Accessing, Immutability

Following our exploration of lists, we now turn to another fundamental sequence type in Python: **tuples**. Tuples share some similarities with lists, but they have one crucial distinguishing feature: they are **immutable**. This means that once a tuple is created, its contents cannot be changed.

**What is a Tuple?**

A tuple is an **ordered** and **immutable** collection of items. Like lists, tuples can hold items of various data types.

*   **Ordered**: The items in a tuple are stored in a specific sequence, and this order is maintained. Each item has an index.
*   **Immutable**: This is the key difference from lists. You cannot add, remove, or modify items in a tuple after it has been created. Any operation that seems to modify a tuple actually creates a new tuple.
*   **Collection of Items**: Tuples can contain numbers, strings, Booleans, and even other tuples or lists.

Tuples are typically defined by enclosing a comma-separated sequence of items within parentheses \`()\`.

**Creating Tuples**

Here are ways to create tuples:

\`\`\`python
# 1. Creating an empty tuple
empty_tuple1 = ()
empty_tuple2 = tuple() # Using the tuple() constructor

print(f"Empty tuple 1: {empty_tuple1}, type: {type(empty_tuple1)}")
print(f"Empty tuple 2: {empty_tuple2}, type: {type(empty_tuple2)}")

# 2. Creating a tuple with items
numbers_tuple = (1, 2, 3, 4, 5)
names_tuple = ("Alice", "Bob", "Charlie")
mixed_tuple = (10, "Hello", 3.14, True)

print(f"Numbers tuple: {numbers_tuple}")
print(f"Names tuple: {names_tuple}")
print(f"Mixed tuple: {mixed_tuple}")

# 3. Creating a tuple with a single item - requires a trailing comma!
# Without the comma, Python interprets (42) as just the integer 42 enclosed in parentheses for precedence.
single_item_tuple = (42,) # The comma makes it a tuple
not_a_tuple = (42)      # This is just the integer 42

print(f"Single item tuple: {single_item_tuple}, type: {type(single_item_tuple)}")
print(f"Not a tuple (integer): {not_a_tuple}, type: {type(not_a_tuple)}")

# 4. Creating a tuple without parentheses (Tuple Packing)
# If you assign a comma-separated sequence of values to a variable without brackets or parentheses,
# Python automatically creates a tuple.
packed_tuple = 100, "Python", False # This creates a tuple
print(f"Packed tuple: {packed_tuple}, type: {type(packed_tuple)}")

# 5. Creating a tuple from other iterables using the tuple() constructor
string_to_tuple = tuple("Python") # Converts a string into a tuple of characters
print(f"Tuple from string 'Python': {string_to_tuple}") # Output: ("P", "y", "t", "h", "o", "n")

list_to_tuple = tuple([10, 20, 30]) # Converts a list into a tuple
print(f"Tuple from list [10, 20, 30]: {list_to_tuple}") # Output: (10, 20, 30)
\`\`\`

**Accessing Items in a Tuple (Indexing and Slicing)**

Since tuples are ordered sequences, you can access their items using indexing and slicing, just like with lists and strings.

*   **Indexing**: Access individual items using their zero-based index in square brackets \`[]\`.
    \`\`\`python
    my_colors = ("red", "green", "blue", "yellow")
    # Indices:     0       1        2        3

    first_color = my_colors[0]
    print(f"First color: {first_color}") # Output: red

    # Negative indexing
    last_color = my_colors[-1]
    print(f"Last color: {last_color}")   # Output: yellow
    \`\`\`

*   **Slicing**: Extract a portion (a sub-tuple) using \`my_tuple[start:stop:step]\`.
    A slice of a tuple always creates a **new tuple object**.
    \`\`\`python
    digits = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

    sub_tuple1 = digits[2:5]
    print(f"digits[2:5]: {sub_tuple1}") # Output: (2, 3, 4)

    sub_tuple2 = digits[:3]
    print(f"digits[:3]: {sub_tuple2}")  # Output: (0, 1, 2)

    sub_tuple3 = digits[6:]
    print(f"digits[6:]: {sub_tuple3}")  # Output: (6, 7, 8, 9)

    reversed_digits_tuple = digits[::-1]
    print(f"Reversed digits tuple: {reversed_digits_tuple}") # Output: (9, 8, 7, 6, 5, 4, 3, 2, 1, 0)
    \`\`\`

**Immutability of Tuples**

This is the defining characteristic of tuples. Once a tuple is created, you **cannot change its contents**. You cannot reassign an item at a specific index, nor can you add or remove items from the tuple itself.

\`\`\`python
point = (10, 20)

# Attempting to change an item will raise a TypeError:
# point[0] = 15  # This would cause: TypeError: 'tuple' object does not support item assignment

# Attempting to append or remove items will also fail (tuples don't have .append() or .remove() methods)
# point.append(30) # AttributeError: 'tuple' object has no attribute 'append'
\`\`\`

If you need a modified version of a tuple, you must create a new tuple. For example, by concatenating tuples or by converting the tuple to a list, modifying the list, and then converting it back to a tuple (though this is less common and often indicates a list might have been a better choice initially).

\`\`\`python
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)

# Concatenation creates a new tuple
combined_tuple = tuple1 + tuple2
print(f"Combined tuple: {combined_tuple}") # Output: (1, 2, 3, 4, 5, 6)

# Repetition also creates a new tuple
repeated_tuple = (0, 1) * 3
print(f"Repeated tuple: {repeated_tuple}") # Output: (0, 1, 0, 1, 0, 1)
\`\`\`

**Important Note on Mutability of Items within a Tuple:**

While a tuple itself is immutable (you can't change which objects it contains or their order), if a tuple contains a **mutable object** (like a list), that mutable object *can* still be changed in-place.

\`\`\`python
nested_tuple = (1, 2, ["a", "b"])
print(f"Original nested tuple: {nested_tuple}")

# We cannot change what nested_tuple[2] refers to:
# nested_tuple[2] = ["x", "y"] # This would be a TypeError

# But we CAN modify the list that nested_tuple[2] refers to:
nested_tuple[2].append("c")
print(f"Modified nested tuple: {nested_tuple}") # Output: (1, 2, ["a", "b", "c"])

nested_tuple[2][0] = "Z"
print(f"Further modified nested tuple: {nested_tuple}") # Output: (1, 2, ["Z", "b", "c"])
\`\`\`
This is a subtle but important point: the tuple's immutability applies to the references it holds to objects, not necessarily to the internal state of those objects if they are mutable.

**Tuple Methods**

Because tuples are immutable, they have very few built-in methods compared to lists. The main ones are:

*   **\`count(item)\`**: Returns the number of times \`item\` appears in the tuple.
    \`\`\`python
    grades_tuple = ("A", "B", "A", "C", "A", "B")
    count_of_A = grades_tuple.count("A")
    print(f"Number of 'A' grades in tuple: {count_of_A}") # Output: 3
    \`\`\`

*   **\`index(item, start=0, end=len(tuple))\`**: Returns the index of the **first occurrence** of \`item\` in the tuple. Raises a \`ValueError\` if the item is not found. Optional \`start\` and \`end\` arguments can specify a sub-section to search.
    \`\`\`python
    data_tuple = (10, 20, 30, 20, 40, 20)
    idx_of_20 = data_tuple.index(20)
    print(f"Index of first 20 in tuple: {idx_of_20}") # Output: 1
    \`\`\`

**Why Use Tuples?**

Given that lists are more flexible due to their mutability, why would you choose to use tuples?

1.  **Immutability for Data Integrity**: If you have a collection of items that should not change throughout the life of your program, using a tuple provides a guarantee against accidental modification. This makes your code safer and can help prevent bugs.
    *   Example: Coordinates \`(x, y)\`, RGB color values \`(red, green, blue)\`, fixed configuration settings.

2.  **Performance (Slight Advantage)**: Tuples can be slightly more memory-efficient and faster to iterate over than lists in some CPython implementations, though this difference is often negligible for most applications. The primary reason is usually not performance but immutability.

3.  **Dictionary Keys**: Because tuples are immutable (and hashable, provided all their elements are also hashable), they can be used as keys in dictionaries. Lists, being mutable, cannot be used as dictionary keys.
    \`\`\`python
    # Using a tuple as a dictionary key
    location_data = {}
    point1 = (34.0522, -118.2437) # Los Angeles coordinates
    location_data[point1] = "Los Angeles"

    point2 = (40.7128, -74.0060) # New York coordinates
    location_data[point2] = "New York"

    print(f"Data for LA: {location_data[(34.0522, -118.2437)]}")

    # list_key = [1, 2]
    # my_dict = {list_key: "value"} # This would raise a TypeError: unhashable type: 'list'
    \`\`\`

4.  **Returning Multiple Values from Functions**: Functions in Python can easily return multiple values by returning them as a tuple (often done implicitly via tuple packing).
    \`\`\`python
    def get_user_info():
        name = "Alice"
        age = 30
        city = "Wonderland"
        return name, age, city # This returns a tuple: ("Alice", 30, "Wonderland")

    user_data = get_user_info()
    print(f"User data tuple: {user_data}")
    print(f"Name: {user_data[0]}, Age: {user_data[1]}, City: {user_data[2]}")
    \`\`\`

5.  **Sequence Unpacking**: Tuples (and lists) are excellent for sequence unpacking, where you assign elements of a sequence to multiple variables at once.
    \`\`\`python
    coordinates = (100, 200)
    x, y = coordinates # Unpacking the tuple
    print(f"x: {x}, y: {y}") # Output: x: 100, y: 200
    \`\`\`

**Tuple Packing and Unpacking**

*   **Packing**: When you create a tuple by assigning comma-separated values without explicit parentheses (e.g., \`my_tuple = 1, 2, "a"\`), it's called tuple packing.
*   **Unpacking**: When you assign a tuple (or list) to a comma-separated list of variables (e.g., \`a, b, c = my_tuple\`), it's called sequence unpacking. The number of variables on the left must match the number of items in the sequence.

**Conclusion**

Tuples are an important immutable sequence type in Python. They provide a way to store ordered collections of items that are guaranteed not to change after creation. This immutability makes them suitable for representing fixed collections of data, using as dictionary keys, and ensuring data integrity. While they have fewer methods than lists due to their immutability, their characteristics make them a valuable tool in a Python programmer's toolkit, often used in conjunction with lists and other data structures.
`;export{e as default};
