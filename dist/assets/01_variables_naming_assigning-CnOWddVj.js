const e=`# Module 2: Variables and Data Types - Lesson 1: Variables - Naming and Assigning Values

Welcome to Module 2! Now that you have a basic understanding of Python syntax and how to run simple programs, we're going to explore one of the most fundamental concepts in programming: **variables**. Variables are essential for storing, managing, and manipulating data in your programs.

**What is a Variable?**

Think of a variable as a named container or a labeled box in the computer's memory where you can store a piece of information (data). This information can be a number, text, or more complex types of data that we'll cover later. The key idea is that the information stored in a variable can *vary* or change during the execution of a program, hence the name "variable."

Instead of directly using a raw piece of data every time you need it, you can assign it to a variable with a meaningful name. Then, you can use that name to refer to the data throughout your code. This makes your programs much more readable, understandable, and flexible.

**Assigning Values to Variables**

In Python, you create a variable and assign a value to it using the **assignment operator**, which is the equals sign (\`=\`). The syntax is straightforward:

\`variable_name = value\`

Let's look at some examples:

\`\`\`python
# Assigning an integer (whole number) to a variable
student_age = 25

# Assigning a string (text) to a variable
student_name = "Maria"

# Assigning a float (number with a decimal point) to a variable
course_price = 99.99

# You can then use these variables, for example, with the print() function:
print(student_name)  # Output: Maria
print(student_age)   # Output: 25
print(course_price)  # Output: 99.99
\`\`\`

When Python sees a line like \`student_age = 25\`, it does the following:
1.  It takes the value on the right side of the \`=\` (which is \`25\`).
2.  It creates a space in memory to store this value.
3.  It associates the name on the left side of the \`=\` (which is \`student_age\`) with this memory location.

From this point on, whenever Python encounters \`student_age\` in your code, it will substitute it with the value \`25\` (or whatever value \`student_age\` currently holds).

**Dynamic Typing**

One of Python's convenient features is **dynamic typing**. This means you don't need to explicitly declare the type of a variable before you assign a value to it (unlike in statically-typed languages like Java or C++ where you might say \`int age;\`). Python automatically determines the data type of the variable based on the value you assign.

\`\`\`python
my_variable = 100       # my_variable is now an integer
print(my_variable)

my_variable = "Hello Python"  # Now, my_variable holds a string. Its type has changed.
print(my_variable)
\`\`\`
In the example above, \`my_variable\` first stored an integer and then later stored a string. Python handles this change in type seamlessly.

**Rules and Conventions for Naming Variables**

Choosing good variable names is crucial for writing readable and maintainable code. Python has some rules and widely followed conventions for naming variables:

**Rules (must be followed):**

1.  **Allowed Characters:** Variable names can only contain letters (a-z, A-Z), numbers (0-9), and the underscore character (\`_\`).
2.  **Cannot Start with a Number:** A variable name cannot begin with a number. For example, \`1st_place\` is invalid, but \`first_place\` or \`place_1\` is valid.
3.  **No Spaces:** Variable names cannot contain spaces. Use underscores to separate words if needed (e.g., \`user_input\` instead of \`user input\`).
4.  **Case-Sensitive:** Python is case-sensitive, so \`myVariable\`, \`myvariable\`, and \`MYVARIABLE\` are treated as three distinct variables.
5.  **Cannot be Keywords:** You cannot use Python's reserved keywords as variable names. Keywords are words that have special meaning in Python (e.g., \`if\`, \`else\`, \`for\`, \`while\`, \`def\`, \`class\`, \`True\`, \`False\`, \`None\`). If you try to use a keyword as a variable name, you'll get a syntax error.
    You can see a list of Python keywords by running:
    \`\`\`python
    import keyword
    print(keyword.kwlist)
    \`\`\`

**Conventions (should be followed for good style - PEP 8):**

1.  **Use Descriptive Names:** Choose names that clearly indicate what the variable represents. \`user_name\` is much better than \`un\` or \`x\` if the variable stores a user's name.
2.  **Snake Case for Multi-Word Names:** For variable names consisting of multiple words, the convention in Python is to use \`snake_case\`. This means all letters are lowercase, and words are separated by underscores.
    *   Examples: \`first_name\`, \`item_count\`, \`total_amount\`.
3.  **Avoid Single Letter Names (Usually):** While single-letter names like \`i\`, \`j\`, \`k\` are common for loop counters, or \`x\`, \`y\`, \`z\` for coordinates, try to use more descriptive names for most other variables.
4.  **Be Consistent:** Stick to a consistent naming style throughout your project.

Let's see some valid and invalid variable names:

\`\`\`python
# Valid variable names
name = "Alice"
age = 30
user_email_address = "alice@example.com"
_internal_value = 100  # Starting with an underscore is often a convention for internal use
MAX_CONNECTIONS = 5    # All caps is often used for constants (values that don't change)

# Invalid variable names
# 2nd_attempt = "failed"  # Cannot start with a number
# user-name = "bob"       # Cannot contain hyphens (use underscores)
# class = "Python101"     # 'class' is a keyword
# user name = "Charlie"   # Cannot contain spaces
\`\`\`

**Reassigning Variables**

You can change the value stored in a variable by simply assigning a new value to it:

\`\`\`python
count = 10
print(count)  # Output: 10

count = count + 5  # Take the current value of count (10), add 5, and store the result (15) back into count
print(count)  # Output: 15

count = "Finished counting" # You can even change the type of data stored
print(count) # Output: Finished counting
\`\`\`

**Multiple Assignment**

Python allows you to assign values to multiple variables in a single line, which can be quite handy:

\`\`\`python
# Assigning the same value to multiple variables
x = y = z = 0
print(x)  # Output: 0
print(y)  # Output: 0
print(z)  # Output: 0

# Assigning different values to different variables
a, b, c = 5, 10, "hello"
print(a)  # Output: 5
print(b)  # Output: 10
print(c)  # Output: hello
\`\`\`
For the second type of multiple assignment (\`a, b, c = 5, 10, "hello"\`), the number of variables on the left must match the number of values on the right.

**In Summary**

Variables are fundamental building blocks in Python. They act as named placeholders for data.
*   You create them using the assignment operator (\`=\`).
*   Python is dynamically typed, so you don't declare variable types.
*   Follow the naming rules (letters, numbers, underscores; not starting with a number; no keywords) and conventions (descriptive names, snake_case) for clarity.
*   Variables can be reassigned new values, even of different types.

Understanding how to use variables effectively is key to writing any non-trivial Python program. In the next lesson, we'll dive deeper into the different types of data that variables can hold.
`;export{e as default};
