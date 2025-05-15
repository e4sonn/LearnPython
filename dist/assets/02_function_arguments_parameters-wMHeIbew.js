const e=`# Module 7: Functions - Lesson 2: Function Arguments and Parameters

In the previous lesson, we learned how to define and call simple functions. Those functions performed a fixed task every time they were called. However, to make functions truly versatile, we need a way to pass information **into** them so they can operate on different data or behave differently based on the input.

This is achieved using **parameters** in the function definition and **arguments** when calling the function.

**What are Parameters and Arguments?**

*   **Parameters (or Formal Parameters)**: These are variables listed inside the parentheses \`()\` in a function definition. They act as placeholders for the values that will be passed into the function when it is called. Think of them as local variables within the function whose initial values are provided by the caller.

*   **Arguments (or Actual Parameters)**: These are the actual values or expressions that are passed to the function when it is called. These values are assigned to the corresponding parameters in the function definition.

**Defining Functions with Parameters**

When defining a function that accepts input, you list the parameter names, separated by commas, within the parentheses.

**Syntax:**

\`\`\`python
def function_name(parameter1, parameter2, ...):
    # Function body uses parameter1, parameter2, etc.
    statement1
    # ...
\`\`\`

**Example of Defining a Function with Parameters:**

\`\`\`python
# Define a function that greets a specific person
def greet_person(name):  # 'name' is a parameter
    """Greets a person with the given name."""
    print(f"Hello, {name}! Welcome.")

# Define a function that adds two numbers
def add_numbers(num1, num2): # 'num1' and 'num2' are parameters
    """Adds two numbers and prints the sum."""
    total = num1 + num2
    print(f"The sum of {num1} and {num2} is {total}.")
\`\`\`
Inside the \`greet_person\` function, \`name\` will hold the value passed when the function is called. Similarly, in \`add_numbers\`, \`num1\` and \`num2\` will hold the values of the two numbers to be added.

**Calling Functions with Arguments**

When you call a function that has parameters, you must provide arguments for those parameters. The arguments are placed within the parentheses of the function call, in the same order as the parameters are defined (for positional arguments, which we are using here).

**Syntax:**

\`\`\`python
function_name(argument1, argument2, ...)
\`\`\`

**Example of Calling Functions with Arguments:**

\`\`\`python
# Calling greet_person with different arguments
greet_person("Alice")   # "Alice" is the argument for the 'name' parameter
greet_person("Bob")     # "Bob" is the argument

# Calling add_numbers with different arguments
add_numbers(5, 3)       # 5 is argument for num1, 3 is argument for num2
add_numbers(100, 250)

my_friend_name = "Charlie"
greet_person(my_friend_name) # A variable can also be an argument

value1 = 10
value2 = 20
add_numbers(value1, value2)
\`\`\`

**Output of the above calls:**

\`\`\`
Hello, Alice! Welcome.
Hello, Bob! Welcome.
The sum of 5 and 3 is 8.
The sum of 100 and 250 is 350.
Hello, Charlie! Welcome.
The sum of 10 and 20 is 30.
\`\`\`

**Types of Arguments**

Python offers several ways to pass arguments to functions:

**1. Positional Arguments**

These are the most common type. Arguments are matched to parameters based on their position.
The first argument is assigned to the first parameter, the second to the second, and so on.

\`\`\`python
def describe_pet(animal_type, pet_name):
    """Displays information about a pet."""
    print(f"I have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name.capitalize()}.")

# Positional arguments: "dog" maps to animal_type, "buddy" maps to pet_name
describe_pet("dog", "buddy")

# If you mix up the order, the meaning changes:
describe_pet("Whiskers", "cat") # Prints: I have a Whiskers. My Whiskers's name is Cat.
\`\`\`
If the number of arguments does not match the number of parameters, Python will raise a \`TypeError\`.

**2. Keyword Arguments**

You can also pass arguments using the name of the parameter, followed by an equals sign (\`=\`) and the value. These are called keyword arguments.

When you use keyword arguments, the order in which you pass them does not matter, as Python matches them based on the parameter name.

\`\`\`python
describe_pet(animal_type="hamster", pet_name="Harry") # Using keyword arguments
describe_pet(pet_name="Goldie", animal_type="fish")   # Order doesn't matter for keyword arguments

# You can mix positional and keyword arguments.
# However, positional arguments must come BEFORE any keyword arguments.
describe_pet("parrot", pet_name="Polly") # Correct: positional then keyword

# describe_pet(animal_type="rabbit", "Bugs") # Incorrect: positional argument after keyword argument (SyntaxError)
# describe_pet(pet_name="Shadow", "horse") # Incorrect: positional argument after keyword argument
\`\`\`

**3. Default Argument Values**

You can provide a default value for a parameter in the function definition. If an argument for that parameter is not provided when the function is called, the default value is used.

Parameters with default values must come *after* any parameters without default values in the function definition.

\`\`\`python
def greet(name, greeting="Hello"):
    """Greets a person with an optional custom greeting."""
    print(f"{greeting}, {name}!")

greet("Alice")  # Uses default greeting: Hello, Alice!
greet("Bob", "Hi there") # Overrides default greeting: Hi there, Bob!

# Example with multiple default arguments
def create_user_profile(username, email, is_active=True, theme="light"):
    """Creates a user profile with some default settings."""
    print(f"\\nCreating profile for: {username}")
    print(f"Email: {email}")
    print(f"Active: {is_active}")
    print(f"Theme: {theme}")

create_user_profile("john_doe", "john@example.com")
create_user_profile("jane_doe", "jane@example.com", theme="dark")
create_user_profile("guest_user", "guest@example.com", is_active=False, theme="blue")

# Common Pitfall: Using mutable default values (like lists or dictionaries)
# Default values are evaluated only ONCE when the function is defined, not each time it's called.
# This can lead to unexpected behavior if a mutable default is modified.

def add_to_list(item, my_list=[]): # Problematic default value
    my_list.append(item)
    print(my_list)

add_to_list(1) # Output: [1]
add_to_list(2) # Output: [1, 2] (my_list is the same list object from the previous call)
add_to_list(3) # Output: [1, 2, 3]

# The correct way to handle mutable defaults is often to use None as the default
# and create the mutable object inside the function if needed:
def add_to_list_corrected(item, my_list=None):
    if my_list is None:
        my_list = [] # Create a new list each time if none is provided
    my_list.append(item)
    print(my_list)

print("\\nCorrected list addition:")
add_to_list_corrected(1)
add_to_list_corrected(2)
add_to_list_corrected(3, [10, 20]) # Providing our own list
add_to_list_corrected(4) # Starts with a new empty list
\`\`\`

**4. Arbitrary Number of Arguments (\`*args\` and \`**kwargs\`)**

Sometimes, you might want a function to accept a variable number of arguments.

*   **\`*args\` (Arbitrary Positional Arguments)**: If you prefix a parameter name with an asterisk (\`*\`), it collects any extra positional arguments passed to the function into a **tuple**.
The name \`args\` is a convention; you can use other names (e.g., \`*numbers\`).

    \`\`\`python
    def print_all_arguments(*args):
        """Prints all positional arguments passed to it."""
        print(f"Arguments received (as a tuple): {args}")
        for i, arg in enumerate(args):
            print(f"Argument {i+1}: {arg}")

    print_all_arguments(1, "hello", True, 3.14)
    print_all_arguments("apple", "banana")
    print_all_arguments() # Called with no extra positional arguments, args will be an empty tuple

    def sum_all_numbers(*numbers):
        """Calculates the sum of all numbers passed as arguments."""
        total = 0
        for num in numbers:
            total += num
        print(f"The sum is: {total}")

    sum_all_numbers(1, 2, 3)
    sum_all_numbers(10, 20, 30, 40, 50)
    \`\`\`
    \`*args\` must come after any regular positional parameters.

*   **\`**kwargs\` (Arbitrary Keyword Arguments)**: If you prefix a parameter name with two asterisks (\`**\`), it collects any extra keyword arguments passed to the function into a **dictionary**.
The name \`kwargs\` (for keyword arguments) is a convention.

    \`\`\`python
    def print_all_keyword_arguments(**kwargs):
        """Prints all keyword arguments passed to it."""
        print(f"Keyword arguments received (as a dictionary): {kwargs}")
        for key, value in kwargs.items():
            print(f"Key: {key}, Value: {value}")

    print_all_keyword_arguments(name="Alice", age=30, city="New York")
    print_all_keyword_arguments(item="laptop", price=1200.00, in_stock=True)
    print_all_keyword_arguments()
    \`\`\`
    \`**kwargs\` must come after \`*args\` (if present) and any regular parameters.

**Order of Parameters in Function Definition**

When defining a function, the parameters must be in the following order:

1.  Standard positional parameters.
2.  \`*args\` (for arbitrary positional arguments).
3.  Keyword-only parameters (parameters that can *only* be passed as keyword arguments, placed after \`*args\` or a bare \`*\`).
4.  \`**kwargs\` (for arbitrary keyword arguments).

\`\`\`python
def complex_function(pos1, pos2, default_param="default", *args, keyword_only1, keyword_only2="val2", **kwargs):
    """Demonstrates the order of different parameter types."""
    print(f"pos1: {pos1}")
    print(f"pos2: {pos2}")
    print(f"default_param: {default_param}")
    print(f"args: {args}")
    print(f"keyword_only1: {keyword_only1}")
    print(f"keyword_only2: {keyword_only2}")
    print(f"kwargs: {kwargs}")

# Example call
complex_function(1, 2, "custom_default", 10, 20, 30, 
                 keyword_only1="value_for_kwo1", 
                 extra_kwarg1="extra1", extra_kwarg2="extra2")

complex_function(1, 2, keyword_only1="another_val") # Uses defaults for default_param and keyword_only2
\`\`\`
Keyword-only arguments are useful when you want to make it clear that certain parameters should be passed by name, improving readability, especially for functions with many parameters.

**Unpacking Arguments**

You can also use \`*\` and \`**\` when *calling* a function to unpack iterables (like lists or tuples) into positional arguments, or dictionaries into keyword arguments.

\`\`\`python
def add(a, b, c):
    return a + b + c

my_numbers_list = [1, 2, 3]
result = add(*my_numbers_list) # Unpacks the list into add(1, 2, 3)
print(f"\\nResult of add(*[1,2,3]): {result}")

def print_info(name, age, city):
    print(f"Name: {name}, Age: {age}, City: {city}")

my_info_dict = {"name": "David", "age": 25, "city": "London"}
print_info(**my_info_dict) # Unpacks the dictionary into print_info(name="David", age=25, city="London")
\`\`\`

**Conclusion**

Parameters and arguments are fundamental to creating flexible and reusable functions. Python provides a rich set of features for defining how functions receive input:

*   **Positional arguments** for basic ordered input.
*   **Keyword arguments** for clarity and order-independence.
*   **Default argument values** for optional parameters.
*   **\`*args\`** to accept an arbitrary number of positional arguments.
*   **\`**kwargs\`** to accept an arbitrary number of keyword arguments.

Understanding these different types of arguments and how to use them effectively will greatly enhance your ability to write powerful and adaptable Python functions. In the next lesson, we will explore how functions can send information *back* to the caller using \`return\` statements.
`;export{e as default};
