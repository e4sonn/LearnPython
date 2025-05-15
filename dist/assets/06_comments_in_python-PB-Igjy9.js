const e=`# Module 1: Introduction to Python - Lesson 6: Comments in Python

In our journey to understand Python's fundamentals, we've touched upon syntax and the critical role of indentation. Now, let's dedicate a lesson to a practice that significantly enhances code clarity and maintainability: writing comments.

**What are Comments?**

Comments are explanatory notes that you can add to your Python code. The Python interpreter completely ignores them; they don't affect how your program runs. So, why bother adding them? Comments are for humans! They help you (and others who might read your code) understand what the code is doing, why certain decisions were made, or how to use a particular piece of code.

Imagine coming back to a complex piece of code you wrote six months ago. Without comments, you might spend a considerable amount of time trying to decipher your own logic. Good comments act as a guide, making your code more understandable and easier to debug or modify in the future.

**Types of Comments in Python**

Python supports a few ways to include comments in your code:

1.  **Single-Line Comments (Hash Comments)**
    The most common way to write a comment in Python is by using the hash symbol (\`#\`). Anything on the line following the hash symbol is considered a comment and is ignored by the interpreter.

    \`\`\`python
    # This is a full-line comment. It explains the purpose of the code below.
    student_name = "Alex"

    age = 20  # This is an inline comment. It explains this specific line of code.

    # You can use comments to temporarily disable a line of code (commenting out):
    # print("This line will not execute")
    print("This line will execute")
    \`\`\`

    *   **Full-line comments:** These usually appear on a line by themselves and explain the code that follows or a general section of your program.
    *   **Inline comments:** These appear on the same line as a statement, typically after the code, and provide a brief explanation for that specific line. While useful, try to use them sparingly and ensure they don't make the line overly long. Often, well-named variables and clear code structure can reduce the need for many inline comments.
    *   **Commenting out code:** A very practical use of comments is to temporarily disable lines of code during testing or debugging without deleting them.

2.  **Multi-Line Comments (Using Multiple Hash Symbols)**
    If you need to write a comment that spans multiple lines, you can simply start each line with a hash symbol.

    \`\`\`python
    # This is the first line of a multi-line comment.
    # This is the second line, providing more details about
    # the complex logic implemented in the function below.
    def calculate_complex_value(x, y):
        # ... function code ...
        return x * y # Simplified for example
    \`\`\`

3.  **Multi-Line Strings as Comments (Docstrings and Block Comments)**
    Python doesn't have a dedicated syntax for multi-line block comments in the same way some other languages do (like \`/* ... */\` in C++ or Java). However, Python's multi-line strings, which are created by enclosing text in triple quotes (\`"""\` or \`'''\`), are often used for this purpose, especially for **docstrings**.

    *   **Docstrings (Documentation Strings):** A docstring is a string literal that occurs as the first statement in a module, function, class, or method definition. It is used to document what that object does. Docstrings are not technically comments ignored by the interpreter; they are accessible at runtime via the \`__doc__\` attribute of the object and are used by documentation generation tools (like Sphinx).

        \`\`\`python
        def greet(name):
            """This function greets the person passed in as a parameter."""
            print(f"Hello, {name}!")

        print(greet.__doc__)  # This will print the docstring
        \`\`\`

    *   **Using Multi-line Strings as Block Comments:** If a multi-line string is not the first statement in a function or class (i.e., not a docstring) and is not assigned to a variable, the Python interpreter will effectively ignore it like a comment. Some developers use this for longer, multi-line explanations.

        \`\`\`python
        """
        This is a multi-line block comment explaining a larger section of code.
        It can span several lines and is useful for providing a detailed overview
        before a complex algorithm or a series of operations.
        """
        # Code starts here
        a = 10
        b = 20
        result = a + b
        print(result)
        \`\`\`
        While this works, using multiple \`#\` symbols is often preferred for general multi-line comments to clearly distinguish them from docstrings, which have a specific purpose.

**Best Practices for Writing Comments**

Writing good comments is an art. Here are some tips:

*   **Comment *why*, not *what* (usually):** Your code should ideally be self-explanatory about *what* it's doing (e.g., \`customer_id = get_customer_id()\`). Comments are more valuable when they explain *why* the code is written a certain way, or clarify complex logic, or point out non-obvious decisions.
    *   Bad comment (explains the obvious): \`x = 5  # Assign 5 to x\`
    *   Good comment (explains the why): \`attempts = 3  # Allow user three attempts to log in\`

*   **Keep comments up-to-date:** An outdated comment that no longer matches the code is worse than no comment at all, as it can be misleading. When you change your code, remember to update the relevant comments.

*   **Write clear and concise comments:** Avoid overly long or cryptic comments. They should be easy to understand.

*   **Don't over-comment:** Commenting every single line is usually unnecessary and can clutter your code. Focus on parts that are complex, non-obvious, or important for understanding the overall design.

*   **Use comments for TODOs:** It's common practice to use comments to mark areas in your code that need further attention or are incomplete.
    \`\`\`python
    # TODO: Implement error handling for invalid input
    # FIXME: This calculation is sometimes off by a small margin
    \`\`\`

*   **Follow a consistent style:** If you're working in a team, agree on a commenting style. PEP 8, the Python style guide, provides some recommendations for comments.

**Conclusion**

Comments are a vital part of writing good Python code. They don't change how your program runs, but they significantly improve its readability and maintainability for human developers. By using single-line comments (\`#\`) for most explanations and docstrings (\`"""..."""\`) for documenting your functions, classes, and modules, you'll make your code more professional and easier to work with in the long run. As you write more complex programs, the value of well-placed, informative comments will become increasingly apparent.
`;export{e as default};
