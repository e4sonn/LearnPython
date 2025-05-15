const e=`# Module 7: Functions - Lesson 3: Return Values (\`return\` statement)

So far, our functions have performed actions, like printing output to the console. However, functions can also compute a result and send that result **back** to the part of the program that called them. This is achieved using the **\`return\` statement**.

Being able to return values makes functions much more powerful, as they can produce data that can be stored in variables, used in expressions, or passed as arguments to other functions.

**What is a \`return\` Statement?**

The \`return\` statement is used inside a function to exit the function and optionally pass a value back to the caller.

**Syntax:**

\`\`\`python
def function_name(parameters):
    # Function body
    # ... calculations or operations ...
    value_to_return = some_expression
    return value_to_return  # Exits the function and sends back value_to_return

    # Any code here after the return statement in this block will NOT be executed
    print("This line will never be reached if the return above is executed.")
\`\`\`

Key points about \`return\`:

1.  When a \`return\` statement is executed, the function terminates immediately.
2.  The value specified after the \`return\` keyword is sent back to the caller.
3.  A function can have multiple \`return\` statements (e.g., in different branches of an \`if-elif-else\` structure), but only one will be executed during a single call to the function (the first one encountered).
4.  If a function does not have an explicit \`return\` statement, or if it has a \`return\` statement without an expression (i.e., just \`return\`), it implicitly returns a special value called \`None\`.

**Functions that Return a Single Value**

Many functions are designed to compute and return a single result.

\`\`\`python
# Function to calculate the square of a number
def calculate_square(number):
    """Calculates and returns the square of a given number."""
    square_result = number * number
    return square_result

# Calling the function and storing the returned value
result1 = calculate_square(5)  # The value returned by calculate_square(5) is assigned to result1
print(f"The square of 5 is: {result1}") # Output: 25

result2 = calculate_square(10)
print(f"The square of 10 is: {result2}") # Output: 100

# The returned value can be used directly in expressions
area = calculate_square(3.5) * 2 # (3.5*3.5) * 2
print(f"Double the area of a square with side 3.5: {area}")

# Function to create a formatted greeting string
def format_greeting(name):
    """Creates and returns a formatted greeting string."""
    return f"Hello, {name}! Welcome to the system."

greeting_alice = format_greeting("Alice")
print(greeting_alice)

print(format_greeting("Bob")) # Print the returned string directly
\`\`\`

**Functions that Return \`None\` Implicitly**

If a function doesn’t have a \`return\` statement, or if its \`return\` statement has no expression, it automatically returns \`None\`.

\`\`\`python
def print_message(message):
    """Prints a message to the console. Does not explicitly return anything."""
    print(message)
    # No explicit return statement here

output = print_message("This is a test message.") # The function prints the message
print(f"The value returned by print_message is: {output}") # Output: None


def simple_return():
    """A function with a bare return statement."""
    print("About to return...")
    return # Returns None

result_none = simple_return()
print(f"The value returned by simple_return is: {result_none}") # Output: None
\`\`\`
Functions that primarily perform actions (like printing or modifying global state) and don’t need to send back a computed result often return \`None\` implicitly. These are sometimes called "procedures" in other programming languages.

**Functions that Return Multiple Values (as a Tuple)**

Python functions can return multiple values. This is typically done by returning them as a **tuple**. If you list multiple values after the \`return\` keyword, separated by commas, Python automatically packs them into a tuple.

\`\`\`python
def get_circle_properties(radius):
    """Calculates and returns the area and circumference of a circle."""
    import math # Using the math module for pi
    area = math.pi * radius ** 2
    circumference = 2 * math.pi * radius
    return area, circumference # Returns two values, packed as a tuple

# Calling the function and unpacking the returned tuple
circle_radius = 5
circle_area, circle_circum = get_circle_properties(circle_radius)

print(f"For a circle with radius {circle_radius}:")
print(f"- Area: {circle_area:.2f}")
print(f"- Circumference: {circle_circum:.2f}")

# You can also receive the returned tuple as a single variable
properties_tuple = get_circle_properties(7)
print(f"\\nProperties tuple for radius 7: {properties_tuple}")
print(f"Area from tuple: {properties_tuple[0]:.2f}")
print(f"Circumference from tuple: {properties_tuple[1]:.2f}")
\`\`\`
This feature of returning multiple values (which are then often unpacked) is very convenient in Python.

**Using \`return\` for Early Exit**

A \`return\` statement immediately terminates the function. This can be useful for exiting a function early if a certain condition is met, avoiding further unnecessary computation or checks.

\`\`\`python
def find_element(data_list, target):
    """Finds the first occurrence of a target in a list.
    Returns the index if found, otherwise returns None.
    """
    for index, item in enumerate(data_list):
        if item == target:
            print(f"Target \rások{target}" found at index {index}.")
            return index  # Exit immediately once the target is found
    
    # This part is only reached if the loop completes without finding the target
    print(f"Target \rások{target}" not found in the list.")
    return None

my_numbers = [10, 20, 30, 40, 50]

index_of_30 = find_element(my_numbers, 30)
if index_of_30 is not None:
    print(f"The index of 30 is indeed {index_of_30}.")

print("---")
index_of_99 = find_element(my_numbers, 99)
if index_of_99 is None:
    print("As expected, 99 was not found.")
\`\`\`
In \`find_element\`, if the \`target\` is found, the function returns its \`index\` and stops searching. If the loop finishes without finding the \`target\`, the function then returns \`None\` after the loop.

**Conditional \`return\` Statements**

You can have \`return\` statements inside conditional blocks (\`if\`, \`elif\`, \`else\`). The function will return the value from the first \`return\` statement it encounters.

\`\`\`python
def get_grade_description(grade_letter):
    """Returns a description based on a letter grade."""
    if grade_letter == "A":
        return "Excellent work!"
    elif grade_letter == "B":
        return "Good job."
    elif grade_letter == "C":
        return "Satisfactory."
    elif grade_letter == "D":
        return "Needs improvement."
    elif grade_letter == "F":
        return "Failed. Please see instructor."
    else:
        return "Invalid grade letter entered."

print(f"\\nDescription for grade 'A': {get_grade_description('A')}")
print(f"Description for grade 'C': {get_grade_description('C')}")
print(f"Description for grade 'X': {get_grade_description('X')}")
\`\`\`

**Scope of Returned Values**

The value returned by a function can be used in the scope where the function was called. It can be assigned to a variable, printed, used in an expression, or passed to another function.

\`\`\`python
def get_user_age():
    # In a real app, this might get input or read from a database
    return 30 

def can_vote(age):
    if age >= 18:
        return True
    else:
        return False

# Get age from one function
user_current_age = get_user_age()

# Pass the returned age to another function
if can_vote(user_current_age):
    print(f"A person aged {user_current_age} can vote.")
else:
    print(f"A person aged {user_current_age} cannot vote.")
\`\`\`

**Conclusion**

The \`return\` statement is crucial for making functions that compute and provide results back to the caller. It allows functions to be more than just sequences of actions; they become building blocks that can produce data to be used elsewhere in your program.

Key takeaways:
*   \`return\` exits a function and sends a value back.
*   Functions can return single values, multiple values (as tuples), or \`None\` (explicitly or implicitly).
*   \`return\` can be used for early termination of a function.
*   The returned value can be captured in a variable or used directly.

Mastering the use of \`return\` statements is essential for writing effective and modular Python code. In the upcoming lessons, we will continue to build on our understanding of functions by exploring variable scope, lambda functions, and more.
`;export{e as default};
