const n=`# Module 7: Functions - Lesson 1: Defining and Calling Functions

Welcome to Module 7, where we delve into one of the most powerful concepts in programming: **functions**. Functions are reusable blocks of code that perform a specific task. They help organize code, make it more readable, reduce repetition, and allow for easier debugging and maintenance.

Instead of writing the same sequence of instructions multiple times in your program, you can define it once as a function and then "call" that function whenever you need to perform that task.

**What is a Function?**

A function is a named sequence of statements that performs a computation. You give a function a name, and then you can call that name to run the statements within the function.

Key characteristics and benefits of functions:

*   **Modularity**: Functions break down complex problems into smaller, manageable pieces.
*   **Reusability**: Write code once and use it many times by calling the function.
*   **Readability**: Well-named functions make code easier to understand because the function name can describe its purpose.
*   **Abstraction**: Functions hide the details of how a task is performed, allowing you to focus on what the function does rather than how it does it.
*   **Maintainability**: If you need to change how a specific task is done, you only need to update the code in one place (the function definition).

**Defining a Function**

In Python, you define a function using the \`def\` keyword, followed by the function name, a pair of parentheses \`()\`, and a colon \`:\`. The code block within the function must be indented.

**Syntax:**

\`\`\`python
def function_name():  # Function header
    # Indented block of code (function body)
    statement1
    statement2
    # ... more statements ...
    # Optionally, a function can return a value using the \`return\` statement
\`\`\`

Let's break down the components:

1.  **\`def\` Keyword**: This signals the start of a function definition.
2.  **\`function_name\`**: This is the name you give to your function. It should follow Python's naming conventions (usually lowercase with words separated by underscores, e.g., \`calculate_area\`, \`print_greeting\`). The name should be descriptive of what the function does.
3.  **Parentheses \`()\`**: These are required after the function name. Later, we will see how to put parameters (inputs) inside these parentheses.
4.  **Colon (\`:\`)**: This marks the end of the function header and the beginning of the function body.
5.  **Indented Code Block (Function Body)**: This is the sequence of statements that make up the function. All statements in the body must be indented consistently.

**Example of Defining a Simple Function:**

\`\`\`python
# Define a function that prints a greeting message
def greet_user():
    print("Hello, welcome to our program!")
    print("We hope you have a great experience.")

# Define a function that prints a farewell message
def say_goodbye():
    message = "Thank you for using the program. Goodbye!"
    print(message)
\`\`\`
Defining a function does not execute it. It just tells Python what the function \`greet_user\` (or \`say_goodbye\`) does when it *is* called.

**Calling a Function**

Once a function is defined, you can **call** it (or invoke it) by using its name followed by parentheses \`()\`.

**Syntax:**

\`\`\`python
function_name()
\`\`\`

When you call a function, the Python interpreter executes the statements in the function's body.

**Example of Calling Functions:**

\`\`\`python
# Define the functions first (as above)
def greet_user():
    print("Hello, welcome to our program!")
    print("We hope you have a great experience.")

def say_goodbye():
    message = "Thank you for using the program. Goodbye!"
    print(message)

# Now, let's call the functions
print("Program starting...")

greet_user()  # This will execute the code inside the greet_user function

print("Doing some work in the program...")
# Imagine more program logic here

say_goodbye() # This will execute the code inside the say_goodbye function

print("Program finished.")
\`\`\`

**Output of the above code:**

\`\`\`
Program starting...
Hello, welcome to our program!
We hope you have a great experience.
Doing some work in the program...
Thank you for using the program. Goodbye!
Program finished.
\`\`\`

**The Flow of Execution**

When a program with functions runs:

1.  Python reads the function definitions. It learns what each function does but doesn't execute their bodies yet.
2.  Execution starts from the first statement outside any function definition.
3.  When a function call is encountered (e.g., \`greet_user()\`), the program temporarily jumps to the first line inside that function's body.
4.  The statements in the function body are executed sequentially.
5.  Once all statements in the function body are executed (or a \`return\` statement is hit, which we'll cover later), the program execution jumps back to the point where the function was called and continues from there.

**Docstrings (Documentation Strings)**

It's a good practice to include a documentation string (docstring) as the first statement in a function's body. A docstring is a string literal enclosed in triple quotes (\`"""docstring goes here"""\` or \`'''docstring goes here'''\`) that explains what the function does.

Docstrings are used by documentation tools and can be accessed at runtime using the \`help()\` function or the \`__doc__\` attribute of the function.

\`\`\`python
def calculate_square_area(side_length):
    """Calculate the area of a square given its side length.

    Args:
        side_length (float or int): The length of one side of the square.

    Returns:
        float or int: The calculated area of the square.
    """
    # (Implementation of this function will be shown when we discuss parameters and return values)
    pass # Placeholder for now

help(calculate_square_area) # This will print the docstring
print(calculate_square_area.__doc__) # This also prints the docstring
\`\`\`
Even for simple functions without parameters yet, a docstring is good practice:

\`\`\`python
def display_menu():
    """Prints the main menu options to the console."""
    print("--- Main Menu ---")
    print("1. Start New Game")
    print("2. Load Game")
    print("3. Options")
    print("4. Exit")

# Calling the function
display_menu()
\`\`\`

**Why Define Functions?**

Let's consider a scenario without functions:

\`\`\`python
# Without functions - repetitive code
print("--- Task 1 --- ")
print("Initializing system...")
print("Performing step A...")
print("Performing step B...")
print("System check complete.")

print("\\n--- Task 2 --- ")
print("Initializing system...")
print("Performing step A...")
print("Performing step B...")
print("System check complete.")
\`\`\`

Now, with a function:

\`\`\`python
def perform_system_check():
    """Initializes the system and performs standard checks."""
    print("Initializing system...")
    print("Performing step A...")
    print("Performing step B...")
    print("System check complete.")

print("--- Task 1 --- ")
perform_system_check() # Call the function

print("\\n--- Task 2 --- ")
perform_system_check() # Call the function again
\`\`\`
This version is shorter, easier to read, and if you need to change how the system check works (e.g., add a "Performing step C"), you only need to modify the \`perform_system_check\` function once.

**Conclusion**

Defining and calling functions is a fundamental skill in Python programming. Functions allow you to encapsulate blocks of code, give them meaningful names, and reuse them throughout your program. This leads to more organized, readable, and maintainable code. So far, we've looked at functions that don't take any input (parameters) and don't explicitly return any output. In the next lessons, we will explore how to make functions more versatile by adding parameters to accept input and using \`return\` statements to send output back to the caller.
`;export{n as default};
