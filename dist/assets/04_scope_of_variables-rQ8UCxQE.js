const n=`# Module 7: Functions - Lesson 4: Scope of Variables (Local and Global)

When you use variables in Python, especially within and outside functions, it's crucial to understand their **scope**. The scope of a variable determines where in your program that variable is accessible and can be used. Understanding scope helps prevent naming conflicts and bugs related to variables not being found or being unintentionally modified.

Python has two main types of variable scopes that we will focus on for now: **local scope** and **global scope**.

**1. Local Scope**

A variable created **inside a function** is said to have a **local scope**. This means:

*   It can only be accessed and used *within that function* where it is defined.
*   It is created when the function is called and destroyed when the function finishes executing (returns).
*   Parameters of a function also have local scope; they are only accessible inside that function.

**Example of Local Scope:**

\`\`\`python
def my_function():
    x = 10  # x is a local variable to my_function
    message = "Hello from inside the function!" # message is also local
    print(f"Inside the function, x = {x}")
    print(f"Inside the function, message = {message}")

# Call the function
my_function()

# Attempting to access local variables outside the function will cause a NameError
# print(f"Outside the function, x = {x}") # This would raise NameError: name 'x' is not defined
# print(f"Outside the function, message = {message}") # This would also raise NameError
\`\`\`
In this example, \`x\` and \`message\` are local to \`my_function\`. They exist only when \`my_function\` is executing. Once the function completes, these variables are gone from memory (or at least, no longer accessible by those names from outside).

**Parameters also have Local Scope:**

\`\`\`python
def greet(name): # 'name' is a parameter, local to the greet function
    greeting_message = f"Hello, {name}!"
    print(greeting_message)

greet("Alice")
# print(name) # NameError: name 'name' is not defined outside the function
# print(greeting_message) # NameError: name 'greeting_message' is not defined
\`\`\`

**2. Global Scope**

A variable created **outside of any function** (typically at the top level of your script or module) is said to have a **global scope**. This means:

*   It can be accessed from anywhere in your code, both outside functions and *inside* functions (for reading its value).
*   It exists for the entire duration your program is running.

**Example of Global Scope:**

\`\`\`python
global_var = 100  # global_var is a global variable
pi_approx = 3.14159 # pi_approx is also global

def print_global_values():
    # Functions can READ global variables
    print(f"Inside the function, global_var = {global_var}")
    print(f"Inside the function, pi_approx = {pi_approx}")

def another_function():
    local_multiplier = 2
    # Accessing global_var for reading and using it in a calculation
    result = global_var * local_multiplier
    print(f"Inside another_function, global_var * {local_multiplier} = {result}")

# Calling the functions
print_global_values()
another_function()

# Accessing global variables outside functions is fine
print(f"Outside functions, global_var = {global_var}")
\`\`\`

**Modifying Global Variables from Inside a Function (\`global\` keyword)**

By default, if you assign a value to a variable name inside a function, Python assumes you are creating a **new local variable** with that name, even if a global variable with the same name already exists. This new local variable *shadows* (hides) the global variable within the function.

\`\`\`python
count = 0 # Global variable

def increment_counter_local_shadowing():
    # This creates a NEW LOCAL variable named 'count', shadowing the global 'count'.
    # It does NOT modify the global 'count'.
    count = 5 
    print(f"Inside function (local count): {count}")

increment_counter_local_shadowing()
print(f"Outside function (global count): {count}") # Output will be 0, the global count is unchanged
\`\`\`

If you want to **modify a global variable** from inside a function, you must explicitly tell Python that you are referring to the global variable using the **\`global\` keyword**.

**Syntax for \`global\` keyword:**

\`\`\`python
global_variable_name = initial_value

def function_that_modifies_global():
    global global_variable_name  # Declare that we are using the global variable
    global_variable_name = new_value # This now modifies the global variable
\`\`\`

**Example using \`global\` keyword:**

\`\`\`python
current_score = 0 # Global variable

def increase_score(points):
    global current_score  # Declare that we intend to modify the global 'current_score'
    current_score = current_score + points
    # Or: current_score += points
    print(f"Score increased by {points}. Current score: {current_score}")

def reset_score():
    global current_score
    current_score = 0
    print("Score has been reset.")

print(f"Initial score: {current_score}")
increase_score(10)
increase_score(5)
print(f"Final score before reset: {current_score}")
reset_score()
print(f"Score after reset: {current_score}")
\`\`\`

**Output:**
\`\`\`
Initial score: 0
Score increased by 10. Current score: 10
Score increased by 5. Current score: 15
Final score before reset: 15
Score has been reset.
Score after reset: 0
\`\`\`

**When to Use \`global\` (and When to Avoid It)**

While the \`global\` keyword allows modification of global variables, it should be used **sparingly**. Overuse of global variables can make code harder to understand, debug, and maintain because it becomes difficult to track where a variable is being changed.

It is often better practice for functions to operate on data passed to them as arguments and to return results, rather than relying on modifying global state. This makes functions more self-contained and reusable.

However, \`global\` can be appropriate for:
*   Small scripts where managing state is simple.
*   Modifying global constants or configuration settings (though true constants are usually named in ALL_CAPS and not meant to be changed after initial definition).
*   In specific design patterns where global state is managed carefully (e.g., some game states, counters in simple applications).

**LEGB Rule (Scope Resolution)**

Python has a rule for how it looks up variable names, often referred to as the **LEGB rule**: **L**ocal, **E**nclosing function locals, **G**lobal, **B**uilt-in.

1.  **Local (L)**: Python first looks for the variable name in the local scope (inside the current function).
2.  **Enclosing function locals (E)**: If not found locally, and if the current function is nested inside another function (an enclosing function), Python looks in the local scopes of all enclosing functions, from the innermost to the outermost.
3.  **Global (G)**: If the variable is not found in any local or enclosing function scopes, Python looks in the global scope (the top-level module).
4.  **Built-in (B)**: If still not found, Python checks the built-in scope, which contains names for predefined functions and constants (e.g., \`print()\`, \`len()\`, \`True\`, \`None\`).

If the name is not found in any of these scopes, a \`NameError\` is raised.

**The \`nonlocal\` Keyword (for Nested Functions)**

When you have nested functions, the \`nonlocal\` keyword allows you to modify variables that are in an enclosing function's scope (but are not global).

\`\`\`python
def outer_function():
    outer_var = "I am from outer function"

    def inner_function():
        # To modify outer_var, we need nonlocal
        nonlocal outer_var 
        outer_var = "Modified by inner function!"
        print(f"Inside inner_function, outer_var: {outer_var}")

    print(f"Before calling inner_function, outer_var: {outer_var}")
    inner_function()
    print(f"After calling inner_function, outer_var: {outer_var}")

outer_function()
\`\`\`
Without \`nonlocal outer_var\`, assigning to \`outer_var\` inside \`inner_function\` would create a new local variable \`outer_var\` within \`inner_function\`.

**Conclusion**

Understanding variable scope is fundamental to writing correct and maintainable Python code.

*   **Local variables** exist only within the function where they are defined.
*   **Global variables** are defined outside functions and can be read from anywhere.
*   To **modify a global variable** from inside a function, you must use the \`global\` keyword.
*   To **modify a variable in an enclosing function's scope** (from a nested function), use the \`nonlocal\` keyword.

While global variables have their uses, it's generally good practice to minimize their modification from within functions and instead rely on passing data through parameters and returning values. This promotes modularity and makes your functions easier to reason about.
`;export{n as default};
