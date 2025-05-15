const e=`# Module 6: Data Structures - Lesson 3: Dictionaries - Creating, Accessing, Modifying, Methods

After exploring lists and tuples, we now move to another extremely versatile and widely used Python data structure: **dictionaries**. Dictionaries are used to store data values in **key-value pairs**. Unlike sequences (lists, tuples, strings) which are indexed by a range of numbers, dictionaries are indexed by unique **keys**.

**What is a Dictionary?**

A dictionary in Python is an **unordered** (in Python versions before 3.7; **ordered** in Python 3.7+) and **mutable** collection of items, where each item is a key-value pair.

*   **Unordered/Ordered**: Historically, dictionaries did not maintain the insertion order of items. However, since Python 3.7, dictionaries remember the order in which items were inserted. For versions 3.6 and earlier, you should not rely on item order.
*   **Mutable**: You can change a dictionary after it has been created: add new key-value pairs, remove existing ones, or modify the values associated with keys.
*   **Key-Value Pairs**: Each entry in a dictionary consists of a unique key and its corresponding value. The key is used to look up the value.
*   **Keys must be Immutable and Unique**: Keys within a dictionary must be unique. If you try to add a key that already exists, the old value associated with that key will be overwritten. Keys must also be of an immutable type (e.g., strings, numbers, tuples containing only immutable elements). Lists cannot be used as dictionary keys because they are mutable.
*   **Values can be Anything**: Values in a dictionary can be of any data type (numbers, strings, lists, other dictionaries, etc.) and do not need to be unique.

Dictionaries are defined by enclosing comma-separated key-value pairs within curly braces \`{}\`. Each key is separated from its value by a colon \`:\`.

**Creating Dictionaries**

Here are various ways to create dictionaries:

\`\`\`python
# 1. Creating an empty dictionary
empty_dict1 = {}
empty_dict2 = dict() # Using the dict() constructor

print(f"Empty dictionary 1: {empty_dict1}, type: {type(empty_dict1)}")
print(f"Empty dictionary 2: {empty_dict2}, type: {type(empty_dict2)}")

# 2. Creating a dictionary with initial key-value pairs
student_info = {
    "name": "Alice Wonderland",
    "age": 21,
    "major": "Computer Science",
    "is_enrolled": True,
    101: "Student ID"
}
print(f"Student info dictionary: {student_info}")

# 3. Creating a dictionary using the dict() constructor with keyword arguments
# (Keys must be valid variable names in this case, and are automatically strings)
person = dict(name="Bob", age=30, city="New York")
print(f"Person dictionary (from kwargs): {person}")

# 4. Creating a dictionary from a list of key-value tuples (or other iterables of pairs)
item_pairs = [("fruit", "apple"), ("color", "red"), ("quantity", 5)]
dict_from_pairs = dict(item_pairs)
print(f"Dictionary from pairs: {dict_from_pairs}")

# 5. Using dictionary comprehension (more advanced, covered later)
# squares = {x: x*x for x in range(5)}
# print(f"Squares dictionary: {squares}")
\`\`\`

**Accessing Values in a Dictionary**

You access the value associated with a key by using the key inside square brackets \`[]\`, similar to indexing in lists, but using the key instead of a numerical index.

\`\`\`python
student = {"name": "Carlos", "id": "S123", "courses": ["Math", "Physics"]}

# Accessing the value associated with the key "name"
student_name = student["name"]
print(f"Student Name: {student_name}") # Output: Carlos

# Accessing the list of courses
student_courses = student["courses"]
print(f"Student Courses: {student_courses}") # Output: ["Math", "Physics"]

# If you try to access a key that does not exist, Python will raise a KeyError.
# print(student["age"]) # This would cause a KeyError

# Using the .get() method to access values (safer for non-existent keys)
# .get(key, default_value) returns the value for key if key is in the dictionary,
# else returns default_value. If default_value is not given, it defaults to None.
student_age = student.get("age")
print(f"Student Age (using .get()): {student_age}") # Output: None (key "age" doesn't exist)

student_major = student.get("major", "Undeclared")
print(f"Student Major (using .get() with default): {student_major}") # Output: Undeclared
\`\`\`
Using \`my_dict.get(key, default)\` is often preferred over \`my_dict[key]\` when you are not sure if a key exists, as it avoids \`KeyError\` exceptions.

**Modifying Dictionaries (Mutability)**

Dictionaries are mutable, so you can change them after creation.

*   **Adding a new key-value pair:** If the key does not exist, assigning a value to it will add a new pair.
    \`\`\`python
    contact = {"name": "Diana", "phone": "555-1234"}
    print(f"Original contact: {contact}")

    contact["email"] = "diana@example.com" # Add a new key "email"
    print(f"Contact after adding email: {contact}")
    # Output: {"name": "Diana", "phone": "555-1234", "email": "diana@example.com"}
    \`\`\`

*   **Updating an existing key-value pair:** If the key already exists, assigning a value to it will overwrite the old value.
    \`\`\`python
    contact["phone"] = "555-5678" # Update the value for the existing key "phone"
    print(f"Contact after updating phone: {contact}")
    # Output: {"name": "Diana", "phone": "555-5678", "email": "diana@example.com"}
    \`\`\`

*   **Using the \`update()\` method:** This method can add multiple key-value pairs from another dictionary or an iterable of key-value pairs. If keys already exist, their values are updated.
    \`\`\`python
    user_profile = {"username": "eve_g", "status": "active"}
    new_info = {"status": "online", "last_login": "2024-05-15"}

    user_profile.update(new_info)
    print(f"User profile after update: {user_profile}")
    # Output: {"username": "eve_g", "status": "online", "last_login": "2024-05-15"}
    \`\`\`

**Removing Key-Value Pairs**

*   **Using the \`pop(key, default_value)\` method**: Removes the key-value pair specified by \`key\` and **returns its value**. If the key is not found, it raises a \`KeyError\`, unless a \`default_value\` is provided, in which case that default is returned (and no error is raised).
    \`\`\`python
    settings = {"theme": "dark", "fontSize": 12, "showTips": True}
    removed_value = settings.pop("fontSize")
    print(f"Removed fontSize value: {removed_value}, Settings now: {settings}")
    # Output: Removed fontSize value: 12, Settings now: {"theme": "dark", "showTips": True}

    # Trying to pop a non-existent key without default raises KeyError
    # settings.pop("language") # KeyError

    # Popping a non-existent key with a default value
    lang = settings.pop("language", "en")
    print(f"Language (defaulted): {lang}, Settings now: {settings}")
    # Output: Language (defaulted): en, Settings now: {"theme": "dark", "showTips": True}
    \`\`\`

*   **Using the \`popitem()\` method**: Removes and returns an **arbitrary (key, value) pair** from the dictionary as a tuple. In Python 3.7+, \`popitem()\` removes and returns the *last inserted* key-value pair (LIFO - Last In, First Out). Raises a \`KeyError\` if the dictionary is empty.
    \`\`\`python
    config = {"host": "server1", "port": 80, "timeout": 30}
    last_item = config.popitem()
    print(f"Popped item: {last_item}, Config now: {config}")
    # Output (Python 3.7+): Popped item: ("timeout", 30), Config now: {"host": "server1", "port": 80}
    \`\`\`

*   **Using the \`del\` keyword**: Removes a key-value pair specified by \`del my_dict[key]\`. Raises a \`KeyError\` if the key is not found.
    \`\`\`python
    inventory = {"apples": 10, "bananas": 15, "cherries": 5}
    del inventory["bananas"]
    print(f"Inventory after deleting bananas: {inventory}")
    # Output: {"apples": 10, "cherries": 5}
    # del inventory["oranges"] # KeyError
    \`\`\`

*   **Using the \`clear()\` method**: Removes all key-value pairs from the dictionary, making it empty.
    \`\`\`python
    data_to_clear = {"a": 1, "b": 2}
    data_to_clear.clear()
    print(f"Data after clear: {data_to_clear}") # Output: {}
    \`\`\`

**Common Dictionary Methods**

Dictionaries have several useful methods for working with their keys, values, and items.

*   **\`keys()\`**: Returns a **view object** that displays a list of all the keys in the dictionary. View objects are dynamic; if the dictionary changes, the view reflects these changes.
    \`\`\`python
    product_prices = {"laptop": 1200, "mouse": 25, "keyboard": 75}
    all_keys = product_prices.keys()
    print(f"Keys: {all_keys}") # Output: dict_keys(["laptop", "mouse", "keyboard"])
    # You can iterate over it or convert to a list:
    # for key in all_keys: print(key)
    # list_of_keys = list(all_keys)
    \`\`\`

*   **\`values()\`**: Returns a **view object** that displays a list of all the values in the dictionary.
    \`\`\`python
    all_values = product_prices.values()
    print(f"Values: {all_values}") # Output: dict_values([1200, 25, 75])
    \`\`\`

*   **\`items()\`**: Returns a **view object** that displays a list of a dictionary's key-value tuple pairs.
    \`\`\`python
    all_items = product_prices.items()
    print(f"Items (key-value pairs): {all_items}")
    # Output: dict_items([("laptop", 1200), ("mouse", 25), ("keyboard", 75)])

    # Often used in loops to iterate over keys and values simultaneously:
    for key, value in product_prices.items():
        print(f"Product: {key}, Price: \${value}")
    \`\`\`

*   **\`get(key, default=None)\`**: (Already discussed) Returns the value for \`key\` if \`key\` is in the dictionary, else \`default\`.

*   **\`setdefault(key, default=None)\`**: If \`key\` is in the dictionary, returns its value. If not, inserts \`key\` with a value of \`default\` and returns \`default\`. \`default\` defaults to \`None\`.
    \`\`\`python
    word_counts = {"hello": 5, "world": 3}
    count_python = word_counts.setdefault("python", 0) # "python" not in dict, so it's added with value 0
    print(f"Count of python: {count_python}, Dictionary: {word_counts}")
    # Output: Count of python: 0, Dictionary: {"hello": 5, "world": 3, "python": 0}

    count_hello = word_counts.setdefault("hello", 0) # "hello" is in dict, its value (5) is returned
    print(f"Count of hello: {count_hello}, Dictionary: {word_counts}")
    # Output: Count of hello: 5, Dictionary: {"hello": 5, "world": 3, "python": 0}
    \`\`\`

*   **\`copy()\`**: Returns a **shallow copy** of the dictionary.
    \`\`\`python
    original_dict = {"a": [1, 2], "b": 20}
    copied_dict = original_dict.copy()
    print(f"Original is Copied? {original_dict is copied_dict}") # False

    # Modifying a mutable value (like a list) in the copied dict WILL affect the original
    copied_dict["a"].append(3)
    print(f"Original after mod copy: {original_dict}") # Output: {"a": [1, 2, 3], "b": 20}
    print(f"Copied dict: {copied_dict}")             # Output: {"a": [1, 2, 3], "b": 20}
    \`\`\`
    For a deep copy, use \`copy.deepcopy()\`.

**Iterating Through Dictionaries**

*   Iterating directly over a dictionary loops through its keys:
    \`for key in my_dict:\`
*   Iterating over values: \`for value in my_dict.values():\`
*   Iterating over key-value pairs: \`for key, value in my_dict.items():\` (most common for full access).

**Dictionary Comprehensions (Brief Mention)**

Similar to list comprehensions, Python supports dictionary comprehensions for creating dictionaries concisely:

\`\`\`python
numbers = [1, 2, 3, 4]
squares_dict = {x: x**2 for x in numbers}
print(f"Squares dictionary: {squares_dict}") # Output: {1: 1, 2: 4, 3: 9, 4: 16}
\`\`\`

**Conclusion**

Dictionaries are a powerful and fundamental data structure in Python, offering an efficient way to store and retrieve data using key-value pairs. Their mutability allows for dynamic data management, and their rich set of methods provides extensive functionality for adding, removing, updating, and querying data. Understanding how to use dictionaries effectively is crucial for many programming tasks, from simple data organization to building complex applications and data processing pipelines. Remember the importance of immutable and unique keys, and leverage methods like \`.get()\`, \`.keys()\`, \`.values()\`, and \`.items()\` for robust and readable code.
`;export{e as default};
