const e=`# Module 5: Control Flow - Loops - Lesson 5: Nested Loops

We've explored \`for\` and \`while\` loops, which allow us to repeat blocks of code. Just as \`if\` statements can be nested within each other, loops can also be nested. A **nested loop** is a loop that is placed inside another loop.

The outer loop executes, and for each iteration of the outer loop, the inner loop executes completely.

**What are Nested Loops?**

When you have one loop running inside another, the inner loop will complete all its iterations for each single iteration of the outer loop. This structure is useful for working with multi-dimensional data structures (like a list of lists, representing a grid or matrix), generating combinations, or when you need to perform a repetitive task for each item of another repetitive task.

**Syntax of Nested Loops**

The syntax is straightforward: an inner loop is simply part of the code block of an outer loop, following the usual indentation rules.

\`\`\`python
# Nested for loops
for outer_variable in outer_iterable:
    # Code in the outer loop, executed for each item in outer_iterable
    statement_outer_loop_begin

    for inner_variable in inner_iterable:
        # Code in the inner loop, executed completely for EACH iteration of the outer loop
        statement_inner_loop

    statement_outer_loop_end

# Nested while loops (less common but possible)
while outer_condition:
    # Code in outer while loop
    statement_outer_while_begin

    while inner_condition:
        # Code in inner while loop
        statement_inner_while
        # Ensure inner_condition eventually becomes False

    statement_outer_while_end
    # Ensure outer_condition eventually becomes False
\`\`\`

You can also mix loop types, for example, a \`for\` loop inside a \`while\` loop, or vice versa.

**How Nested Loops Work**

1.  The outer loop begins its first iteration. The \`outer_variable\` is assigned the first item from \`outer_iterable\`.
2.  The statements in the outer loop before the inner loop are executed.
3.  The inner loop then starts. The \`inner_variable\` is assigned the first item from \`inner_iterable\`.
4.  The body of the inner loop executes.
5.  The inner loop continues, iterating through all items in \`inner_iterable\` until it completes.
6.  Once the inner loop finishes, the remaining statements in the outer loop's body (after the inner loop) are executed.
7.  The outer loop then begins its second iteration. The \`outer_variable\` is assigned the second item from \`outer_iterable\`.
8.  The inner loop starts again from the beginning and completes all its iterations for this second iteration of the outer loop.
9.  This process repeats until the outer loop has iterated through all its items.

**Examples of Nested Loops**

*   **Iterating through a 2D List (List of Lists - like a grid or matrix):**
    \`\`\`python
    matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    print("Elements of the matrix:")
    for row in matrix:  # Outer loop iterates through each list (row) in the matrix
        print(f"Processing row: {row}")
        for element in row:  # Inner loop iterates through each element in the current row
            print(f"  Element: {element}")
        print("--- End of row ---")

    # Output:
    # Elements of the matrix:
    # Processing row: [1, 2, 3]
    #   Element: 1
    #   Element: 2
    #   Element: 3
    # --- End of row ---
    # Processing row: [4, 5, 6]
    #   Element: 4
    #   Element: 5
    #   Element: 6
    # --- End of row ---
    # Processing row: [7, 8, 9]
    #   Element: 7
    #   Element: 8
    #   Element: 9
    # --- End of row ---
    \`\`\`

*   **Generating Pairs or Combinations:**
    \`\`\`python
    adj = ["red", "big", "tasty"]
    fruits = ["apple", "banana", "cherry"]

    print("\\nPossible combinations:")
    for adjective in adj:       # Outer loop
        for fruit_item in fruits: # Inner loop
            print(f"{adjective} {fruit_item}")

    # Output:
    # Possible combinations:
    # red apple
    # red banana
    # red cherry
    # big apple
    # big banana
    # big cherry
    # tasty apple
    # tasty banana
    # tasty cherry
    \`\`\`

*   **Creating a Multiplication Table:**
    \`\`\`python
    print("\\nMultiplication Table (1 to 3):")
    for i in range(1, 4):  # Outer loop for rows (numbers 1, 2, 3)
        print(f"Table for {i}:")
        for j in range(1, 11): # Inner loop for columns (multipliers 1 to 10)
            print(f"  {i} * {j} = {i * j}")
        if i < 3:
             print("----------") # Separator
    \`\`\`

**\`break\` and \`continue\` in Nested Loops**

When \`break\` or \`continue\` is used inside a nested loop structure:

*   \`break\` will terminate only the **innermost loop** where it is encountered. The outer loop will continue its iterations.
*   \`continue\` will skip the current iteration of the **innermost loop** and proceed to its next iteration.

\`\`\`python
print("\\nBreak in nested loop:")
for i in range(1, 4): # Outer loop (1, 2, 3)
    print(f"Outer loop iteration: i = {i}")
    for j in range(1, 4): # Inner loop (1, 2, 3)
        if i == 2 and j == 2:
            print("  Breaking inner loop at j = 2 when i = 2")
            break # This breaks only the inner loop
        print(f"    Inner loop iteration: j = {j}")
    print("  Inner loop finished for current i.")

# Output for Break:
# Outer loop iteration: i = 1
#     Inner loop iteration: j = 1
#     Inner loop iteration: j = 2
#     Inner loop iteration: j = 3
#   Inner loop finished for current i.
# Outer loop iteration: i = 2
#     Inner loop iteration: j = 1
#   Breaking inner loop at j = 2 when i = 2
#   Inner loop finished for current i.
# Outer loop iteration: i = 3
#     Inner loop iteration: j = 1
#     Inner loop iteration: j = 2
#     Inner loop iteration: j = 3
#   Inner loop finished for current i.
\`\`\`
If you need to break out of an outer loop from within an inner loop, you often have to use a flag variable or refactor the code (e.g., by putting the loops in a function and using \`return\`).

**Performance Considerations**

Nested loops can significantly increase the number of operations performed. If the outer loop runs N times and the inner loop runs M times for each outer iteration, the total number of times the inner loop's body executes is N * M.

For example, if both loops iterate 100 times, the inner block executes 100 * 100 = 10,000 times. If they iterate 1000 times, it's 1,000,000 times.

While necessary for many tasks, be mindful of the potential performance impact of deeply nested loops or loops iterating over very large collections. Always consider if there might be a more efficient algorithm, especially if you notice your program running slowly.

**Readability**

Similar to nested \`if\` statements, deeply nested loops (e.g., more than 2 or 3 levels) can make code hard to read and understand. If you find yourself with very deep nesting, consider:

*   **Breaking down the problem:** Can parts of the inner logic be moved into a separate function?
*   **Alternative data structures or algorithms:** Sometimes, a different approach can eliminate the need for deep nesting.

**Conclusion**

Nested loops are a powerful construct that allows you to iterate through multi-level structures or perform operations that require iterating within iterations. They are commonly used for tasks like processing grids, generating combinations, and when the logic naturally involves an inner repetitive task for each step of an outer repetitive task. While very useful, always pay attention to readability and potential performance implications, especially with multiple levels of nesting or large datasets. Understanding how \`break\` and \`continue\` behave within nested structures is also key to controlling their flow effectively.
`;export{e as default};
