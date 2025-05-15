const n=`# Module 5: Control Flow - Loops - Lesson 4: Loop Control Statements (\`break\`, \`continue\`, \`pass\`)

We've learned how to create \`for\` and \`while\` loops to repeat blocks of code. Sometimes, however, we need more fine-grained control over the execution of a loop. Python provides several **loop control statements** that allow us to alter the normal flow of a loop: \`break\`, \`continue\`, and \`pass\`.

These statements can help us exit a loop prematurely, skip parts of an iteration, or act as placeholders.

**1. The \`break\` Statement**

The \`break\` statement is used to **terminate the current loop (either \`for\` or \`while\`) prematurely**. As soon as \`break\` is encountered inside a loop, the loop stops immediately, and the program execution resumes at the very next statement following the loop block.

\`break\` is typically used within a conditional (\`if\`) statement inside the loop to exit when a specific condition is met.

**Syntax:**

\`\`\`python
# Inside a for or while loop
if condition_to_break:
    break
\`\`\`

**Examples of \`break\`:**

*   **Breaking out of a \`for\` loop:**
    \`\`\`python
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    search_value = 6
    found = False

    print(f"Searching for {search_value} in the list:")
    for num in numbers:
        print(f"Checking {num}...")
        if num == search_value:
            found = True
            print(f"{search_value} found!")
            break  # Exit the loop immediately once the value is found
        # This part is skipped for iterations after break is hit
        print(f"{num} is not what we are looking for.")

    if found:
        print("Search successful.")
    else:
        print(f"{search_value} was not found in the list.")

    # Output:
    # Searching for 6 in the list:
    # Checking 1...
    # 1 is not what we are looking for.
    # Checking 2...
    # 2 is not what we are looking for.
    # Checking 3...
    # 3 is not what we are looking for.
    # Checking 4...
    # 4 is not what we are looking for.
    # Checking 5...
    # 5 is not what we are looking for.
    # Checking 6...
    # 6 found!
    # Search successful.
    \`\`\`
    Without \`break\`, the loop would continue to check 7, 8, 9, and 10 even after finding 6.

*   **Breaking out of a \`while\` loop (e.g., an intentional \`while True\` loop):**
    \`while True:\` creates an infinite loop. \`break\` is essential to provide an exit condition.
    \`\`\`python
    print("\\nType commands, or 'exit' to quit.")
    while True:  # This loop will run indefinitely until a break statement is encountered
        command = input("> ").lower()
        if command == "hello":
            print("Hello to you too!")
        elif command == "time":
            # In a real app, you'd get the current time here
            print("Current time is (imagine current time here).")
        elif command == "exit":
            print("Exiting command loop...")
            break  # Terminate the while loop
        else:
            print(f"Unknown command: {command}")

    print("Command loop finished.")
    \`\`\`

If \`break\` is used inside nested loops, it only terminates the **innermost** loop it is currently in.

**2. The \`continue\` Statement**

The \`continue\` statement is used to **skip the rest of the current iteration of a loop** and immediately proceed to the **next iteration**.

*   In a \`for\` loop, \`continue\` jumps to the next item in the sequence.
*   In a \`while\` loop, \`continue\` jumps back to the evaluation of the \`while\` loop's condition.

\`continue\` is also typically used within a conditional statement.

**Syntax:**

\`\`\`python
# Inside a for or while loop
if condition_to_skip_iteration:
    continue
# Code here in the loop body will be skipped for the current iteration if continue is executed
\`\`\`

**Examples of \`continue\`:**

*   **Skipping an iteration in a \`for\` loop (e.g., processing only even numbers):**
    \`\`\`python
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    print("\\nProcessing only even numbers from the list:")
    for num in numbers:
        if num % 2 != 0:  # If the number is odd
            continue      # Skip the rest of this iteration and go to the next number
        # This part only executes for even numbers
        print(f"Processing even number: {num}")

    # Output:
    # Processing only even numbers from the list:
    # Processing even number: 2
    # Processing even number: 4
    # Processing even number: 6
    # Processing even number: 8
    # Processing even number: 10
    \`\`\`

*   **Skipping an iteration in a \`while\` loop:**
    \`\`\`python
    count = 0
    print("\\nPrinting numbers from 0 to 6, skipping 3 and 5:")
    while count < 7:
        count += 1 # Increment first to avoid infinite loop if continue is hit before increment
        if count == 3 or count == 5:
            print(f"(Skipping {count})")
            continue # Skip the print(count) for 3 and 5
        print(count)

    # Output:
    # Printing numbers from 0 to 6, skipping 3 and 5:
    # 1
    # 2
    # (Skipping 3)
    # 4
    # (Skipping 5)
    # 6
    # 7
    \`\`\`
    **Caution with \`continue\` in \`while\` loops:** Ensure that the variables controlling the loop's condition are updated appropriately *before* the \`continue\` statement if necessary, to avoid accidentally creating an infinite loop.

**3. The \`pass\` Statement**

The \`pass\` statement is a null operation; nothing happens when it executes. It is used as a **placeholder** where syntactically some code is required, but you haven't written it yet or don't want any code to execute there.

This is useful in situations like:

*   Defining empty functions or classes that you plan to implement later.
*   As a placeholder in an \`if\`, \`elif\`, or \`else\` block where you haven't decided on the logic yet.
*   In an empty loop body (though this is less common).

**Syntax:**

\`\`\`python
pass
\`\`\`

**Examples of \`pass\`:**

\`\`\`python
# Placeholder in an if statement
value = 10
if value > 5:
    pass  # TODO: Implement logic for when value is greater than 5
else:
    print("Value is not greater than 5.")

# Placeholder for an empty function definition
def my_future_function():
    pass # Will implement this later

my_future_function() # Calling it does nothing, but no error

# Placeholder for an empty class definition
class MyFutureClass:
    pass # Will add attributes and methods later

# Using pass in a loop (less common, but valid)
for i in range(3):
    # Maybe some complex condition to do nothing for certain i
    if i == 1:
        pass # Do nothing specifically for i == 1
    else:
        print(f"Processing i = {i}")
\`\`\`
Without \`pass\`, if Python expects an indented block (e.g., after an \`if condition:\` or \`def function_name():\`) and finds nothing or just a comment, it will raise an \`IndentationError\`.

**\`else\` Clause with Loops (Less Common, but Exists)**

Python loops (\`for\` and \`while\`) can also have an optional \`else\` clause. This \`else\` block is executed only if the loop terminates **normally** (i.e., not by a \`break\` statement).

*   For a \`for\` loop, the \`else\` block executes after all items in the iterable have been processed.
*   For a \`while\` loop, the \`else\` block executes when the loop's condition becomes \`False\`.

\`\`\`python
# else with a for loop
print("\\nSearching for a non-existent value with for-else:")
my_numbers = [1, 3, 5, 7]
search_for = 4
for num in my_numbers:
    if num == search_for:
        print(f"{search_for} found in the list.")
        break
else: # Executed if the loop completed without a 'break'
    print(f"{search_for} was not found in the list.")
# Output: 4 was not found in the list.

# else with a while loop
print("\\nCountdown with while-else:")
countdown = 3
while countdown > 0:
    print(countdown)
    countdown -= 1
    # if countdown == 1: break # If we uncomment this, the else block won't run
else: # Executed because the while condition (countdown > 0) became False
    print("Liftoff! (Loop completed normally)")
# Output:
# 3
# 2
# 1
# Liftoff! (Loop completed normally)
\`\`\`
While the \`else\` clause on loops is a unique Python feature, it's not always the most intuitive for programmers coming from other languages. Its use is somewhat niche, often for search loops where you need to know if the search completed without finding the item.

**Conclusion**

Loop control statements (\`break\`, \`continue\`, \`pass\`) provide essential mechanisms for managing the execution flow within \`for\` and \`while\` loops.
*   \`break\` allows for an early exit from a loop.
*   \`continue\` skips the current iteration and proceeds to the next.
*   \`pass\` acts as a null operation, a placeholder for future code.

Understanding these statements, along with the less common \`else\` clause for loops, empowers you to write more sophisticated and controlled looping structures in your Python programs.
`;export{n as default};
