const e=`# Module 6: Data Structures - Lesson 4: Sets - Creating, Properties, Methods

We have explored lists, tuples, and dictionaries. Now, we introduce another important Python data structure: **sets**. Sets are used to store collections of **unique** items, and they are particularly useful for membership testing, removing duplicates from a sequence, and performing mathematical set operations like union, intersection, difference, and symmetric difference.

**What is a Set?**

A set in Python is an **unordered** collection of **unique, immutable** items.

*   **Unordered**: Sets do not maintain any specific order of items. When you iterate over a set or print it, the items may appear in a different order than how they were inserted. (Note: This is a key difference from lists and tuples, and also from dictionaries since Python 3.7 which maintain insertion order).
*   **Unique Items**: Sets automatically enforce uniqueness. If you try to add an item that is already present in the set, the set remains unchanged (no duplicates are stored).
*   **Immutable Items**: The items (elements) within a set must be of an immutable type (e.g., numbers, strings, tuples containing only immutable elements). You cannot have mutable items like lists or other sets as elements within a set.
*   **Mutable Collection**: While the *elements* of a set must be immutable, the set itself is mutable. You can add new items to a set or remove items from it after it has been created.

Sets are defined by enclosing a comma-separated sequence of items within curly braces \`{}\`, similar to dictionaries. However, unlike dictionaries, sets only contain values (no key-value pairs).

**Creating Sets**

Here are the common ways to create sets:

\`\`\`python
# 1. Creating an empty set - IMPORTANT: {} creates an empty DICTIONARY, not an empty set.
# To create an empty set, you MUST use the set() constructor.
empty_set = set()
empty_dict = {}

print(f"Empty set: {empty_set}, type: {type(empty_set)}")
print(f"Empty dictionary: {empty_dict}, type: {type(empty_dict)}")

# 2. Creating a set with initial items
numbers_set = {1, 2, 3, 4, 5} # Order might not be preserved when printed
names_set = {"Alice", "Bob", "Charlie", "Alice"} # "Alice" will only appear once

print(f"Numbers set: {numbers_set}")
print(f"Names set (duplicates removed): {names_set}")

# 3. Creating a set from other iterables using the set() constructor
# This is a common way to remove duplicates from a list or string.
list_with_duplicates = [1, 2, 2, 3, 4, 4, 4, 5, 1]
set_from_list = set(list_with_duplicates)
print(f"Set from list (duplicates removed): {set_from_list}") # Output: {1, 2, 3, 4, 5} (order may vary)

string_to_set = set("hello_world") # Creates a set of unique characters from the string
print(f"Set from string 'hello_world': {string_to_set}") # Order of characters will vary

tuple_to_set = set((10, 20, 10, 30))
print(f"Set from tuple: {tuple_to_set}") # Output: {10, 20, 30}
\`\`\`

**Properties of Sets**

*   **No Indexing or Slicing**: Because sets are unordered, you cannot access items using numerical indices or slices like you can with lists or tuples. \`my_set[0]\` would result in a \`TypeError\`.
*   **Membership Testing is Efficient**: Checking if an item is present in a set (\`item in my_set\`) is very fast, typically an O(1) operation on average. This makes sets ideal for situations where you need to frequently check for the existence of items in a large collection.

**Modifying Sets (Mutability)**

Sets are mutable, so you can add and remove elements.

*   **\`add(item)\`**: Adds a single \`item\` to the set. If the item is already present, the set remains unchanged (no error is raised).
    \`\`\`python
    my_languages = {"Python", "Java"}
    print(f"Original languages: {my_languages}")

    my_languages.add("JavaScript")
    print(f"After adding JavaScript: {my_languages}")

    my_languages.add("Python") # Adding an existing item does nothing
    print(f"After adding Python again: {my_languages}")
    \`\`\`

*   **\`update(iterable)\`**: Adds all items from an \`iterable\` (like another set, list, or tuple) to the set. Duplicates are automatically ignored.
    \`\`\`python
    set1 = {1, 2, 3}
    set2 = {3, 4, 5}
    list_to_add = [5, 6, 1]

    set1.update(set2) # Adds elements from set2 into set1
    print(f"set1 after update with set2: {set1}") # Output: {1, 2, 3, 4, 5}

    set1.update(list_to_add) # Adds elements from list_to_add into set1
    print(f"set1 after update with list: {set1}") # Output: {1, 2, 3, 4, 5, 6}

    # You can also use the union update operator \`|=\`
    # set_a = {1, 2}
    # set_b = {2, 3}
    # set_a |= set_b # Equivalent to set_a.update(set_b)
    # print(set_a) # Output: {1, 2, 3}
    \`\`\`

**Removing Items from a Set**

*   **\`remove(item)\`**: Removes \`item\` from the set. If the item is not found in the set, it raises a \`KeyError\`.
    \`\`\`python
    active_users = {"user1", "user2", "user3"}
    active_users.remove("user2")
    print(f"Active users after removing user2: {active_users}")
    # active_users.remove("user4") # This would raise a KeyError
    \`\`\`

*   **\`discard(item)\`**: Removes \`item\` from the set if it is present. If the item is not found, \`discard()\` does **nothing** (no error is raised). This is often safer than \`remove()\` if you are not sure if the item exists.
    \`\`\`python
    pending_tasks = {"taskA", "taskB", "taskC"}
    pending_tasks.discard("taskB")
    print(f"Pending tasks after discarding taskB: {pending_tasks}")

    pending_tasks.discard("taskD") # taskD is not in the set, nothing happens
    print(f"Pending tasks after discarding non-existent taskD: {pending_tasks}")
    \`\`\`

*   **\`pop()\`**: Removes and **returns an arbitrary item** from the set. Since sets are unordered, you cannot predict which item will be removed. Raises a \`KeyError\` if the set is empty.
    \`\`\`python
    sample_set = {10, 20, 30, 40}
    popped_item = sample_set.pop()
    print(f"Popped item: {popped_item}, Set now: {sample_set}")
    # The actual popped_item will vary as sets are unordered.
    \`\`\`

*   **\`clear()\`**: Removes all items from the set, making it empty.
    \`\`\`python
    items_to_clear_set = {"x", "y", "z"}
    items_to_clear_set.clear()
    print(f"Set after clear: {items_to_clear_set}") # Output: set()
    \`\`\`

**Set Operations**

Sets support powerful mathematical operations. These operations usually return a **new set**, leaving the original sets unchanged (unless you use their in-place update versions).

Let \`s1\` and \`s2\` be two sets:

*   **Union**: \`s1.union(s2)\` or \`s1 | s2\`
    *   Returns a new set containing all items from both \`s1\` and \`s2\`.
    \`\`\`python
    s1 = {1, 2, 3, 4}
    s2 = {3, 4, 5, 6}
    union_set = s1.union(s2)
    print(f"Union of s1 and s2: {union_set}") # Output: {1, 2, 3, 4, 5, 6}
    print(f"s1 | s2: {s1 | s2}")
    \`\`\`
    In-place version: \`s1.update(s2)\` or \`s1 |= s2\`.

*   **Intersection**: \`s1.intersection(s2)\` or \`s1 & s2\`
    *   Returns a new set containing only the items that are common to both \`s1\` and \`s2\`.
    \`\`\`python
    intersection_set = s1.intersection(s2)
    print(f"Intersection of s1 and s2: {intersection_set}") # Output: {3, 4}
    print(f"s1 & s2: {s1 & s2}")
    \`\`\`
    In-place version: \`s1.intersection_update(s2)\` or \`s1 &= s2\`.

*   **Difference**: \`s1.difference(s2)\` or \`s1 - s2\`
    *   Returns a new set containing items from \`s1\` that are **not** in \`s2\`.
    \`\`\`python
    difference_s1_s2 = s1.difference(s2)
    print(f"Difference s1 - s2: {difference_s1_s2}") # Output: {1, 2}
    print(f"s1 - s2: {s1 - s2}")

    difference_s2_s1 = s2.difference(s1)
    print(f"Difference s2 - s1: {difference_s2_s1}") # Output: {5, 6}
    \`\`\`
    In-place version: \`s1.difference_update(s2)\` or \`s1 -= s2\`.

*   **Symmetric Difference**: \`s1.symmetric_difference(s2)\` or \`s1 ^ s2\`
    *   Returns a new set containing all items from both sets **except** those that are common to both. (Items in \`s1\` or \`s2\`, but not in both).
    \`\`\`python
    sym_diff_set = s1.symmetric_difference(s2)
    print(f"Symmetric difference of s1 and s2: {sym_diff_set}") # Output: {1, 2, 5, 6}
    print(f"s1 ^ s2: {s1 ^ s2}")
    \`\`\`
    In-place version: \`s1.symmetric_difference_update(s2)\` or \`s1 ^= s2\`.

**Other Set Methods and Operations**

*   **\`issubset(other_set)\`** or \`s1 <= other_set\`: Returns \`True\` if all items in \`s1\` are also in \`other_set\`.
*   **\`issuperset(other_set)\`** or \`s1 >= other_set\`: Returns \`True\` if \`s1\` contains all items from \`other_set\`.
*   **\`isdisjoint(other_set)\`**: Returns \`True\` if \`s1\` and \`other_set\` have no items in common (their intersection is empty).
    \`\`\`python
    a = {1, 2, 3}
    b = {1, 2, 3, 4, 5}
    c = {4, 5}
    d = {10, 11}

    print(f"a is subset of b? {a.issubset(b)}")     # True
    print(f"b is superset of a? {b.issuperset(a)}") # True
    print(f"a is disjoint from c? {a.isdisjoint(c)}") # True (no common elements)
    print(f"a is disjoint from d? {a.isdisjoint(d)}") # True
    print(f"b is disjoint from c? {b.isdisjoint(c)}") # False (4, 5 are common)
    \`\`\`
*   \`len(my_set)\`: Returns the number of items in the set.
*   \`item in my_set\`: Checks for membership (very efficient).
*   \`item not in my_set\`: Checks for non-membership.
*   \`copy()\`: Returns a shallow copy of the set.

**Frozensets**

Python also provides an **immutable** version of a set called \`frozenset\`. Once a \`frozenset\` is created, its elements cannot be changed (no adding or removing items). Because they are immutable and hashable, \`frozenset\` objects can be used as elements in other sets or as keys in dictionaries.

\`\`\`python
immutable_set = frozenset([1, 2, 3, 2, 1])
print(f"Frozenset: {immutable_set}") # Output: frozenset({1, 2, 3})

# immutable_set.add(4) # AttributeError: 'frozenset' object has no attribute 'add'

# Can be used as a dictionary key
dict_with_frozenset_key = {immutable_set: "This is a value"}
print(dict_with_frozenset_key)
\`\`\`

**When to Use Sets**

1.  **Removing Duplicates**: Quickly get unique items from a list or other sequence.
    \`unique_items = list(set(my_list_with_duplicates))\`
2.  **Membership Testing**: When you need to frequently check if an item exists in a collection, sets are much faster than lists for this purpose, especially for large collections.
3.  **Set Operations**: When you need to perform mathematical set operations like finding common items (intersection), all unique items (union), differences, etc.

**Conclusion**

Sets are a specialized data structure in Python designed for storing unordered collections of unique, immutable items. Their strengths lie in efficient membership testing, duplicate removal, and the ability to perform standard set-theoretic operations. While they lack the ordering and indexing of lists and tuples, their unique properties make them invaluable for specific tasks. Understanding when and how to use sets, along with their mutable (set) and immutable (frozenset) variants, adds another powerful tool to your Python programming arsenal.
`;export{e as default};
