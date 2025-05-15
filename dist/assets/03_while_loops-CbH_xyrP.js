const e=`# Module 5: Control Flow - Loops - Lesson 3: \`while\` Loops

We've explored \`for\` loops, which are excellent for iterating over a known sequence of items. Now, let's turn our attention to Python's other major looping construct: the **\`while\` loop**. A \`while\` loop is used to repeatedly execute a block of code as long as a specified condition remains \`True\`.

This makes \`while\` loops ideal for situations where you don't know in advance how many times you need to loop, or when the loop's continuation depends on some changing state or external input.

**What is a \`while\` Loop?**

A \`while\` loop continuously executes a block of statements as long as its controlling Boolean condition evaluates to \`True\`. When the condition becomes \`False\`, the loop terminates, and the program execution continues with the statement immediately following the loop block.

**Syntax of the \`while\` Loop**

The basic syntax is:

\`\`\`python
while condition:
    # Block of code to execute as long as the condition is True
    # This block MUST be indented
    statement1
    statement2
    # ... more statements ...
    # IMPORTANT: Something inside the loop should eventually make the condition False,
    # otherwise, it will be an infinite loop.

# Code here is outside the while loop and executes after the loop has finished
\`\`\`

Key components:

1.  **\`while\` Keyword**: The loop begins with the keyword \`while\`.
2.  **\`condition\`**: This is a Boolean expression that is evaluated before each iteration of the loop. If it's \`True\`, the loop body executes. If it's \`False\`, the loop terminates.
3.  **Colon (\`:\`)**: The condition is followed by a colon, indicating the start of the loop's code block.
4.  **Indented Code Block**: The lines of code that are executed repeatedly as long as the \`condition\` is \`True\`. This block must be consistently indented.

**How it Works**

1.  The \`condition\` is evaluated.
2.  If the \`condition\` is \`True\`:
    a.  The indented block of code (the loop body) is executed.
    b.  After the block finishes, the program goes back to step 1 to re-evaluate the \`condition\`.
3.  If the \`condition\` is \`False\` (either initially or after some iterations), the loop terminates, and the program skips the loop body and continues with the next statement after the loop.

**Crucial Aspect: Loop Termination**

It is vital that something within the body of the \`while\` loop eventually causes the \`condition\` to become \`False\`. If the condition always remains \`True\`, the loop will run forever, creating an **infinite loop**. Infinite loops can freeze your program or consume excessive resources.

**Examples of \`while\` Loops**

*   **Simple Counter:**
    \`\`\`python
    count = 0
    print("Counting up to 4 using a while loop:")
    while count < 5:  # Condition: loop as long as count is less than 5
        print(f"Count is: {count}")
        count = count + 1  # Increment count - this eventually makes the condition False
                         # Shorthand: count += 1

    print("Loop finished.")
    print(f"Final count is: {count}") # Output will be 5

    # Output:
    # Counting up to 4 using a while loop:
    # Count is: 0
    # Count is: 1
    # Count is: 2
    # Count is: 3
    # Count is: 4
    # Loop finished.
    # Final count is: 5
    \`\`\`
    In this example, \`count += 1\` is essential. Without it, \`count\` would always be \`0\`, \`count < 5\` would always be \`True\`, and the loop would never end.

*   **Waiting for User Input to meet a condition:**
    \`\`\`python
    user_input = ""
    while user_input.lower() != "quit":
        user_input = input("Enter some text (type 'quit' to exit): ")
        if user_input.lower() != "quit":
            print(f"You entered: {user_input}")

    print("Exiting program. Goodbye!")
    \`\`\`
    This loop continues to ask for input until the user types "quit" (case-insensitive).

*   **Processing items until a condition is met (e.g., a game loop):**
    \`\`\`python
    # Simplified game example
    player_health = 100
    monsters_defeated = 0

    while player_health > 0 and monsters_defeated < 5: # Loop while player is alive AND not all monsters defeated
        print(f"\\nPlayer health: {player_health}, Monsters defeated: {monsters_defeated}")
        action = input("Do you want to (a)ttack or (r)un? ").lower()

        if action == 'a':
            print("You attack a monster!")
            monsters_defeated += 1
            player_health -= 10 # Player takes some damage
            print("Monster defeated! But you took 10 damage.")
        elif action == 'r':
            print("You try to run but stumble, taking 5 damage.")
            player_health -= 5
        else:
            print("Invalid action. Monster gets a free hit! You take 15 damage.")
            player_health -= 15

        if player_health <= 0:
            print("\\nGame Over! Your health reached 0.")
        elif monsters_defeated >= 5:
            print("\\nCongratulations! You defeated all monsters!")

    print("Game loop ended.")
    \`\`\`

**Infinite Loops (and how to stop them)**

An infinite loop occurs when the \`while\` loop's condition never becomes \`False\`.

\`\`\`python
# Example of an INTENTIONAL infinite loop (often used with a 'break' statement, covered next)
# while True:
#     print("This will print forever if not stopped!")
#     # In a real scenario, there would be a condition inside to 'break' out.
\`\`\`
If you accidentally run an infinite loop in your terminal or IDE, you can usually stop it by pressing \`Ctrl+C\` (on most systems). This sends an interrupt signal to the Python interpreter.

**\`for\` Loops vs. \`while\` Loops**

When should you use a \`for\` loop versus a \`while\` loop?

*   **\`for\` loop**: Use when you know the number of iterations in advance or when you are iterating over a specific sequence (list, string, tuple, range, etc.). It's generally preferred for iterating over collections.
    *   "Iterate 10 times."
    *   "For each item in this list..."

*   **\`while\` loop**: Use when the number of iterations is not known beforehand and depends on a condition being met or a state changing.
    *   "Keep asking for input until the user types 'exit'."
    *   "Simulate the game as long as the player is alive."
    *   "Read data from a sensor until a certain value is detected."

Sometimes, you can achieve similar results with both, but one might be more natural or readable for a given problem.

**Conclusion**

The \`while\` loop provides a flexible way to execute a block of code repeatedly as long as a condition remains \`True\`. It's essential for scenarios where the iteration count is not predetermined. The most critical aspect of using \`while\` loops is ensuring that the loop's condition will eventually become \`False\` to avoid infinite loops. In the next lessons, we'll explore loop control statements like \`break\` and \`continue\`, which give us even more fine-grained control over loop execution, including how to safely exit from \`while True:\` loops.
`;export{e as default};
