const t=`# Module 2: Variables and Data Types - Lesson 3: Strings - Creating, Slicing, and Methods

We've been introduced to strings (\`str\`) as Python's way of handling textual data. Strings are sequences of characters and are one of the most commonly used data types. In this lesson, we'll dive deeper into how to create strings, access parts of them (slicing), and use some of their powerful built-in methods to manipulate them.

**Creating Strings**

As a reminder, you can create strings in Python by enclosing characters in:
*   Single quotes: \`'Hello, Python!'\`
*   Double quotes: \`"Python is versatile."\`
*   Triple single quotes: \`'''This is a multi-line string.'''\`
*   Triple double quotes: \`"""This also works for multi-line strings."""\`

The choice between single and double quotes is often a matter of style or convenience. If your string itself contains a single quote, you can enclose the string in double quotes, and vice-versa, without needing to escape the quote.

\`\`\`python
my_string1 = "He said, 'Python is great!'"
my_string2 = 'She replied, "Indeed it is!"'

print(my_string1)
print(my_string2)

# If you need to use the same type of quote inside the string, you can escape it with a backslash (\\)
my_string3 = 'It\\'s a sunny day.'
my_string4 = "She said, \\"Hello!\\""
print(my_string3)
print(my_string4)
\`\`\`

Triple quotes are particularly useful for strings that span multiple lines or for creating docstrings.

\`\`\`python
poem = """Roses are red,
Violets are blue,
Python is awesome,
And so are you!"""
print(poem)
\`\`\`

**Strings are Sequences: Accessing Characters (Indexing)**

Strings are ordered sequences of characters. This means each character in a string has a specific position, called an **index**. Python uses zero-based indexing, meaning the first character is at index 0, the second at index 1, and so on.

You can access individual characters in a string using square brackets \`[]\` with the index of the character you want.

\`\`\`python
language = "Python"

# P  y  t  h  o  n
# 0  1  2  3  4  5   (Positive indexing)
# -6 -5 -4 -3 -2 -1  (Negative indexing)

first_char = language[0]  # Accesses the character at index 0
print(f"First character: {first_char}")  # Output: First character: P

third_char = language[2]  # Accesses the character at index 2
print(f"Third character: {third_char}")  # Output: Third character: t
\`\`\`

Python also supports **negative indexing**, which counts from the end of the string. The last character is at index -1, the second to last at -2, and so on.

\`\`\`python
language = "Python"

last_char = language[-1]   # Accesses the last character
print(f"Last character: {last_char}")   # Output: Last character: n

second_last_char = language[-2] # Accesses the second to last character
print(f"Second to last character: {second_last_char}") # Output: Second to last character: o
\`\`\`

If you try to access an index that is out of range (e.g., \`language[10]\` for the string "Python"), Python will raise an \`IndexError\`.

**Slicing Strings**

Slicing allows you to extract a portion (a substring) of a string. The syntax for slicing is \`my_string[start:stop:step]\`:

*   \`start\`: The index where the slice begins (inclusive). If omitted, it defaults to the beginning of the string (index 0).
*   \`stop\`: The index where the slice ends (exclusive). The character at this index is *not* included in the slice. If omitted, it defaults to the end of the string.
*   \`step\`: The amount to increment the index by (the stride). If omitted, it defaults to 1.

\`\`\`python
text = "Hello, World!"

# H e l l o ,   W o r l  d  !
# 0 1 2 3 4 5 6 7 8 9 10 11 12

# Get the substring "Hello"
substring1 = text[0:5]  # Characters from index 0 up to (but not including) index 5
print(f"substring1: {substring1}")  # Output: substring1: Hello

# Get the substring "World"
substring2 = text[7:12]
print(f"substring2: {substring2}")  # Output: substring2: World

# Omitting start (from the beginning up to index 5)
substring3 = text[:5]
print(f"substring3: {substring3}")  # Output: substring3: Hello

# Omitting stop (from index 7 to the end)
substring4 = text[7:]
print(f"substring4: {substring4}")  # Output: substring4: World!

# Entire string (omitting start and stop)
substring5 = text[:]
print(f"substring5: {substring5}")  # Output: substring5: Hello, World!

# Using a step (get every second character)
alpha = "abcdefghij"
every_other = alpha[0:10:2] # or alpha[::2]
print(f"Every other: {every_other}") # Output: Every other: acegi

# Reversing a string using slicing (a common trick)
reversed_text = text[::-1]
print(f"Reversed text: {reversed_text}") # Output: Reversed text: !dlroW ,olleH
\`\`\`

Slicing always produces a new string; it doesn't modify the original string (because strings are immutable).

**String Immutability**

As mentioned before, strings in Python are **immutable**. This means that once a string object is created, its contents cannot be changed. You cannot modify a character at a specific index, nor can you append or remove characters from the original string object directly.

\`\`\`python
my_name = "Alice"
# my_name[0] = "B"  # This will cause a TypeError: 'str' object does not support item assignment
\`\`\`

If you need a modified version of a string, you create a new string based on the old one using operations like concatenation or slicing, or string methods.

\`\`\`python
greeting = "Hello"
new_greeting = greeting + " Python!" # Concatenation creates a new string
print(new_greeting) # Output: Hello Python!
print(greeting)     # Output: Hello (original string is unchanged)
\`\`\`

**Common String Methods**

Python strings come with a rich set of built-in methods that allow you to perform various operations. A method is like a function that belongs to an object (in this case, a string object). You call a method using dot notation: \`string_variable.method_name(arguments)\`.

Here are some of the most commonly used string methods:

*   \`len(string)\`: This is actually a built-in function, not a method, but it's essential for strings. It returns the length of the string (the number of characters).
    \`\`\`python
    message = "Hello"
    print(len(message))  # Output: 5
    \`\`\`

*   \`.lower()\`: Returns a new string with all characters converted to lowercase.
    \`\`\`python
    text = "PYTHON IS FUN"
    lower_text = text.lower()
    print(lower_text)  # Output: python is fun
    \`\`\`

*   \`.upper()\`: Returns a new string with all characters converted to uppercase.
    \`\`\`python
    text = "python is fun"
    upper_text = text.upper()
    print(upper_text)  # Output: PYTHON IS FUN
    \`\`\`

*   \`.strip()\`: Returns a new string with leading and trailing whitespace characters (spaces, tabs, newlines) removed.
    *   \`.lstrip()\`: Removes leading whitespace.
    *   \`.rstrip()\`: Removes trailing whitespace.
    \`\`\`python
    padded_text = "   Hello, World!   "
    stripped_text = padded_text.strip()
    print(f"'{stripped_text}'")  # Output: 'Hello, World!'
    \`\`\`

*   \`.replace(old, new)\`: Returns a new string where all occurrences of the substring \`old\` are replaced with the substring \`new\`.
    \`\`\`python
    sentence = "I like cats. Cats are cute."
    new_sentence = sentence.replace("cats", "dogs")
    print(new_sentence)  # Output: I like dogs. Dogs are cute.
    \`\`\`

*   \`.split(separator)\`: Returns a list of substrings by splitting the original string at occurrences of the \`separator\`. If no separator is specified, it splits by whitespace.
    \`\`\`python
    csv_data = "apple,banana,cherry,date"
    fruits = csv_data.split(",")
    print(fruits)  # Output: ['apple', 'banana', 'cherry', 'date']

    words_text = "This is a sentence"
    words = words_text.split()
    print(words)   # Output: ['This', 'is', 'a', 'sentence']
    \`\`\`

*   \`.join(iterable)\`: This is the opposite of \`split()\`. It takes an iterable (like a list of strings) and concatenates its elements into a single string, with the original string used as a separator between elements.
    \`\`\`python
    word_list = ["Python", "is", "powerful"]
    separator = " "
    joined_string = separator.join(word_list)
    print(joined_string)  # Output: Python is powerful

    path_parts = ["home", "user", "documents"]
    file_path = "/".join(path_parts)
    print(file_path)    # Output: home/user/documents
    \`\`\`

*   \`.startswith(prefix)\`: Returns \`True\` if the string starts with the specified \`prefix\`, otherwise \`False\`.
*   \`.endswith(suffix)\`: Returns \`True\` if the string ends with the specified \`suffix\`, otherwise \`False\`.
    \`\`\`python
    filename = "report.txt"
    print(filename.startswith("report"))  # Output: True
    print(filename.endswith(".pdf"))    # Output: False
    \`\`\`

*   \`.find(substring)\`: Returns the starting index of the first occurrence of \`substring\`. If the substring is not found, it returns \`-1\`.
*   \`.index(substring)\`: Similar to \`.find()\`, but raises a \`ValueError\` if the substring is not found.
    \`\`\`python
    text = "Hello, Python world! Python is cool."
    print(text.find("Python"))    # Output: 7 (index of the first 'P' in "Python")
    print(text.find("Java"))      # Output: -1
    # print(text.index("Java"))   # This would raise a ValueError
    \`\`\`

*   String Formatting: There are several ways to format strings, embedding variable values within them. We've already seen f-strings, which are a modern and preferred way:
    \`\`\`python
    name = "Alice"
    age = 30
    formatted_string = f"My name is {name} and I am {age} years old."
    print(formatted_string) # Output: My name is Alice and I am 30 years old.
    \`\`\`
    Older methods include the \`.format()\` method and \`%\` operator formatting, which you might encounter in older code.

This is just a selection of the many useful string methods available in Python. You can find a complete list in the official Python documentation. Experimenting with these methods is the best way to become comfortable with them.

**Conclusion**

Strings are a fundamental and versatile data type in Python. Understanding how to create them, access their parts using indexing and slicing, and manipulate them with built-in methods is essential for any Python programmer. Remember that strings are immutable, so operations that seem to modify a string actually create new string objects. As you continue your Python journey, you'll find yourself working with strings constantly, from processing user input to handling data from files and web services.
`;export{t as default};
