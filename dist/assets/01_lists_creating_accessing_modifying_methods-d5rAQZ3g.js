const e=`# Module 6: Data Structures - Lesson 1: Lists - Creating, Accessing, Modifying, Methods

Welcome to Module 6, where we will explore Python's powerful built-in **data structures**. Data structures are ways of organizing and storing data so that it can be accessed and worked with efficiently. We've already encountered some simple data types like numbers, strings, and Booleans. Now, we'll dive into more complex structures that can hold collections of these types.

Our first focus in this module is on **lists**. Lists are one of the most versatile and commonly used data structures in Python.

**What is a List?**

A list in Python is an **ordered** and **mutable** collection of items. Let's break down these terms:

*   **Ordered**: The items in a list are stored in a specific sequence, and this order is maintained. Each item has an index, just like characters in a string.
*   **Mutable**: This means that you can change a list after it has been created. You can add new items, remove existing items, or modify the items already in the list.
*   **Collection of Items**: A list can hold items of various data types, including numbers, strings, Booleans, and even other lists (creating a list of lists or a 2D list).

Lists are defined by enclosing a comma-separated sequence of items within square brackets \`[]\`.

**Creating Lists**

Here are several ways to create lists:

\`\`\`python
# 1. Creating an empty list
empty_list1 = []
empty_list2 = list() # Using the list() constructor

print(f"Empty list 1: {empty_list1}, type: {type(empty_list1)}")
print(f"Empty list 2: {empty_list2}, type: {type(empty_list2)}")

# 2. Creating a list with items of the same type
numbers = [1, 2, 3, 4, 5]
names = ["Alice", "Bob", "Charlie"]

print(f"Numbers list: {numbers}")
print(f"Names list: {names}")

# 3. Creating a list with mixed data types
mixed_data_list = [10, "Hello", 3.14159, True, None]
print(f"Mixed data list: {mixed_data_list}")

# 4. Creating a list from other iterables using the list() constructor
string_to_list = list("Python") # Converts a string into a list of characters
print(f"List from string 'Python': {string_to_list}") # Output: ['P', 'y', 't', 'h', 'o', 'n']

tuple_to_list = list((10, 20, 30)) # Converts a tuple into a list
print(f"List from tuple (10, 20, 30): {tuple_to_list}") # Output: [10, 20, 30]

range_to_list = list(range(5)) # Converts a range object to a list
print(f"List from range(5): {range_to_list}") # Output: [0, 1, 2, 3, 4]
\`\`\`

**Accessing Items in a List (Indexing)**

Since lists are ordered, you can access individual items using their index, enclosed in square brackets \`[]\`. Python lists are zero-indexed, meaning the first item is at index \`0\`, the second at index \`1\`, and so on.

\`\`\`python
my_fruits = ["apple", "banana", "cherry", "date", "elderberry"]
# Indices:      0        1         2        3          4
# Neg Indices: -5       -4        -3       -2         -1

first_fruit = my_fruits[0]
print(f"First fruit: {first_fruit}")  # Output: apple

third_fruit = my_fruits[2]
print(f"Third fruit: {third_fruit}")  # Output: cherry

# Negative indexing is also supported (counts from the end)
last_fruit = my_fruits[-1]
print(f"Last fruit: {last_fruit}")    # Output: elderberry

second_last_fruit = my_fruits[-2]
print(f"Second last fruit: {second_last_fruit}") # Output: date

# Accessing an index out of range will raise an IndexError
# print(my_fruits[10]) # This would cause an IndexError
\`\`\`

**Slicing Lists**

Slicing allows you to extract a portion (a sub-list) of a list. The syntax is \`my_list[start:stop:step]\`, similar to string slicing.

*   \`start\`: The index where the slice begins (inclusive). Defaults to \`0\`.
*   \`stop\`: The index where the slice ends (exclusive). Defaults to the end of the list.
*   \`step\`: The increment. Defaults to \`1\`.

A slice always creates a **new list object**.

\`\`\`python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Get items from index 2 up to (but not including) index 5
sub_list1 = numbers[2:5]
print(f"numbers[2:5]: {sub_list1}")  # Output: [2, 3, 4]

# Get items from the beginning up to index 3
sub_list2 = numbers[:3]
print(f"numbers[:3]: {sub_list2}")   # Output: [0, 1, 2]

# Get items from index 6 to the end
sub_list3 = numbers[6:]
print(f"numbers[6:]: {sub_list3}")   # Output: [6, 7, 8, 9]

# Get every second item from the list
sub_list4 = numbers[::2]
print(f"numbers[::2]: {sub_list4}")  # Output: [0, 2, 4, 6, 8]

# Create a shallow copy of the entire list
list_copy = numbers[:] # or numbers.copy() or list(numbers)
print(f"Copy of numbers: {list_copy}")
print(f"Are numbers and list_copy the same object? {numbers is list_copy}") # Output: False

# Reverse a list using slicing (creates a new reversed list)
reversed_numbers = numbers[::-1]
print(f"Reversed numbers: {reversed_numbers}") # Output: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
\`\`\`

**Modifying Lists (Mutability)**

Because lists are mutable, you can change their content after they are created.

*   **Changing an item at a specific index:**
    \`\`\`python
    colors = ["red", "green", "blue"]
    print(f"Original colors: {colors}")

    colors[1] = "yellow" # Change the item at index 1
    print(f"Modified colors: {colors}") # Output: ['red', 'yellow', 'blue']
    \`\`\`

*   **Modifying a slice:** You can replace a slice of a list with items from another iterable.
    \`\`\`python
    letters = ['a', 'b', 'c', 'd', 'e', 'f']
    print(f"Original letters: {letters}")

    letters[1:3] = ['X', 'Y', 'Z'] # Replace items at index 1 and 2 with 'X', 'Y', 'Z'
    print(f"Modified letters: {letters}") # Output: ['a', 'X', 'Y', 'Z', 'd', 'e', 'f']
                                       # The length of the list can change.

    letters[1:4] = [] # Delete items from index 1 up to 3 by assigning an empty list
    print(f"Letters after deleting slice: {letters}") # Output: ['a', 'd', 'e', 'f']
    \`\`\`

**Common List Methods**

Lists have many useful built-in methods that allow you to manipulate them. Methods are called using dot notation: \`my_list.method_name(arguments)\`.

*   **\`append(item)\`**: Adds \`item\` to the very end of the list. Modifies the list in-place.
    \`\`\`python
    my_pets = ["cat", "dog"]
    my_pets.append("hamster")
    print(f"Pets after append: {my_pets}") # Output: ['cat', 'dog', 'hamster']
    \`\`\`

*   **\`insert(index, item)\`**: Inserts \`item\` at the specified \`index\`. Items at and after that index are shifted to the right. Modifies the list in-place.
    \`\`\`python
    my_numbers = [10, 20, 40, 50]
    my_numbers.insert(2, 30) # Insert 30 at index 2
    print(f"Numbers after insert: {my_numbers}") # Output: [10, 20, 30, 40, 50]
    \`\`\`

*   **\`extend(iterable)\`**: Appends all items from an \`iterable\` (like another list, tuple, or string) to the end of the list. Modifies the list in-place. This is different from \`append()\` which would add the iterable itself as a single nested element.
    \`\`\`python
    list1 = [1, 2, 3]
    list2 = [4, 5, 6]
    list1.extend(list2)
    print(f"list1 after extend with list2: {list1}") # Output: [1, 2, 3, 4, 5, 6]

    # Compare with append:
    # list_a = [1, 2, 3]
    # list_b = [4, 5, 6]
    # list_a.append(list_b)
    # print(list_a) # Output: [1, 2, 3, [4, 5, 6]]
    \`\`\`
    You can achieve a similar result to \`extend\` using the \`+\` operator for concatenation, but \`+\` creates a new list, while \`extend\` modifies the original list in-place.
    \`list1 = list1 + list2\` # Creates a new list

*   **\`remove(item)\`**: Removes the **first occurrence** of \`item\` from the list. Raises a \`ValueError\` if the item is not found. Modifies the list in-place.
    \`\`\`python
    letters = ['a', 'b', 'c', 'b', 'd']
    letters.remove('b') # Removes the first 'b'
    print(f"Letters after remove 'b': {letters}") # Output: ['a', 'c', 'b', 'd']
    # letters.remove('z') # This would cause a ValueError
    \`\`\`

*   **\`pop(index=-1)\`**: Removes and **returns** the item at the specified \`index\`. If no index is provided, it removes and returns the last item (behaves like a stack). Raises an \`IndexError\` if the list is empty or the index is out of range. Modifies the list in-place.
    \`\`\`python
    elements = [10, 20, 30, 40, 50]
    popped_item_end = elements.pop() # Removes and returns 50
    print(f"Popped from end: {popped_item_end}, List now: {elements}") # Output: 50, [10, 20, 30, 40]

    popped_item_index = elements.pop(1) # Removes and returns item at index 1 (which is 20)
    print(f"Popped from index 1: {popped_item_index}, List now: {elements}") # Output: 20, [10, 30, 40]
    \`\`\`

*   **\`clear()\`**: Removes all items from the list, making it empty. Modifies the list in-place.
    \`\`\`python
    items_to_clear = [1, 2, 3]
    items_to_clear.clear()
    print(f"List after clear: {items_to_clear}") # Output: []
    \`\`\`

*   **\`index(item, start=0, end=len(list))\`**: Returns the index of the **first occurrence** of \`item\` in the list. You can optionally specify \`start\` and \`end\` indices to search within a sub-section of the list. Raises a \`ValueError\` if the item is not found.
    \`\`\`python
    data = [10, 20, 30, 20, 40, 20]
    idx_of_20 = data.index(20)
    print(f"Index of first 20: {idx_of_20}") # Output: 1

    idx_of_20_after_pos2 = data.index(20, 2) # Start searching from index 2
    print(f"Index of 20 after index 2: {idx_of_20_after_pos2}") # Output: 3
    \`\`\`

*   **\`count(item)\`**: Returns the number of times \`item\` appears in the list.
    \`\`\`python
    grades = ['A', 'B', 'A', 'C', 'A', 'B']
    count_of_A = grades.count('A')
    print(f"Number of 'A' grades: {count_of_A}") # Output: 3
    \`\`\`

*   **\`sort(key=None, reverse=False)\`**: Sorts the items of the list **in-place**. By default, it sorts in ascending order. You can sort in descending order by setting \`reverse=True\`. The \`key\` argument can be used to specify a function to be called on each list element prior to making comparisons (for custom sorting).
    \`\`\`python
    numbers_to_sort = [5, 1, 4, 2, 8, 0]
    numbers_to_sort.sort()
    print(f"Sorted numbers (ascending): {numbers_to_sort}") # Output: [0, 1, 2, 4, 5, 8]

    numbers_to_sort.sort(reverse=True)
    print(f"Sorted numbers (descending): {numbers_to_sort}") # Output: [8, 5, 4, 2, 1, 0]

    words = ["banana", "Apple", "cherry"]
    words.sort() # Sorts based on ASCII/Unicode, so 'Apple' comes before 'banana'
    print(f"Sorted words (default): {words}") # Output: ['Apple', 'banana', 'cherry']

    words.sort(key=str.lower) # Sorts based on lowercase version of strings
    print(f"Sorted words (case-insensitive): {words}") # Output: ['Apple', 'banana', 'cherry'] (order might change based on original casing if lowercase versions are same)
    \`\`\`

*   **\`reverse()\`**: Reverses the order of elements in the list **in-place**.
    \`\`\`python
    my_sequence = [1, "two", 3.0]
    my_sequence.reverse()
    print(f"Reversed sequence: {my_sequence}") # Output: [3.0, 'two', 1]
    \`\`\`

*   **\`copy()\`**: Returns a **shallow copy** of the list. This is equivalent to \`my_list[:]\` or \`list(my_list)\`.
    \`\`\`python
    original_list = [1, [2, 3], 4]
    copied_list = original_list.copy()

    print(f"Original: {original_list}, Copied: {copied_list}")
    print(f"Original is Copied? {original_list is copied_list}") # False (different objects)

    # Modifying the copied list doesn't affect the original (for top-level items)
    copied_list.append(5)
    print(f"After mod copy: Original: {original_list}, Copied: {copied_list}")

    # For shallow copies, if the list contains mutable objects (like other lists),
    # modifying those nested objects in the copy WILL affect the original.
    copied_list[1].append(99)
    print(f"After mod nested in copy: Original: {original_list}, Copied: {copied_list}")
    # Output: Original: [1, [2, 3, 99], 4], Copied: [1, [2, 3, 99], 4, 5]
    \`\`\`
    For a **deep copy** (where nested mutable objects are also copied independently), you need to use the \`copy.deepcopy()\` function from the \`copy\` module.

**Other List-Related Functions**

*   \`len(list)\`: Returns the number of items in the list.
*   \`min(list)\`: Returns the minimum item in a list of comparable items.
*   \`max(list)\`: Returns the maximum item in a list of comparable items.
*   \`sum(list)\`: Returns the sum of items in a list (items must be numeric).
*   \`sorted(iterable, key=None, reverse=False)\`: This is a built-in function (not a list method) that returns a **new sorted list** from the items in an iterable, without modifying the original iterable. This is often preferred over \`list.sort()\` if you need to keep the original list intact.

\`\`\`python
scores = [88, 92, 75, 100, 85]
print(f"Number of scores: {len(scores)}")
print(f"Minimum score: {min(scores)}")
print(f"Maximum score: {max(scores)}")
print(f"Sum of scores: {sum(scores)}")

unsorted_items = [3, 1, 4, 1, 5, 9, 2, 6]
new_sorted_list = sorted(unsorted_items)
print(f"Original items: {unsorted_items}")
print(f"New sorted list: {new_sorted_list}")
\`\`\`

**Conclusion**

Lists are a cornerstone of Python programming due to their flexibility and rich set of functionalities. They allow you to store ordered collections of diverse items, access them by index, slice them, and modify them in-place. The numerous built-in methods provide powerful tools for adding, removing, searching, sorting, and otherwise manipulating list content. Understanding how to effectively use lists and their methods is crucial for tackling a wide array of programming problems, from simple data storage to complex algorithmic tasks. In the next lessons, we will explore other important data structures like tuples, dictionaries, and sets, and see how they compare and contrast with lists.
`;export{e as default};
