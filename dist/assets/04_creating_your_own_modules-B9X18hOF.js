const e=`# Module 8: Modules and Packages - Lesson 4: Creating Your Own Modules

We've seen how to use Python's built-in modules and modules from the standard library. A crucial part of developing larger Python applications is learning how to create your **own modules**. This allows you to organize your project's code into logical, reusable components, making your codebase cleaner, more maintainable, and easier to collaborate on.

**What is Creating Your Own Module?**

Creating your own module is surprisingly simple: **any Python file (\`.py\`) can be a module.**

When you write Python code (functions, classes, variables) in a file, say \`my_utils.py\`, that file automatically becomes a module named \`my_utils\`. You can then import this \`my_utils\` module into other Python scripts or into the interactive interpreter, just like you import standard library modules.

**Steps to Create and Use Your Own Module**

1.  **Create a Python File**: Write your Python code (functions, classes, variables) in a new file and save it with a \`.py\` extension. For example, \`string_utilities.py\`.
2.  **Define Your Content**: Populate this file with the definitions you want to include in your module.
3.  **Save the Module File**: Ensure the file is saved in a location where Python can find it. This typically means:
    *   In the **same directory** as the script that will import it.
    *   In a directory that is part of Python's **module search path** (e.g., a directory listed in the \`PYTHONPATH\` environment variable, or a directory within your project that you've configured your environment to recognize).
4.  **Import and Use**: In another Python script, use the \`import\` statement to load your module and then access its contents using dot notation.

**Example: Creating a Simple Module**

Let's create a module named \`text_analyzer.py\` that contains a few functions for analyzing text.

**Step 1 & 2: Create and Define \`text_analyzer.py\`**

\`\`\`python
# text_analyzer.py (This is our custom module file)

"""A simple module for basic text analysis functions."""

VERSION = "1.0"

def count_words(text_string):
    """Counts the number of words in a given string."""
    if not isinstance(text_string, str):
        return 0
    words = text_string.split()
    return len(words)

def count_characters(text_string, include_spaces=True):
    """Counts the number of characters in a given string.

    Args:
        text_string (str): The string to analyze.
        include_spaces (bool): If True, spaces are counted. 
                               If False, spaces are not counted.
    Returns:
        int: The number of characters.
    """
    if not isinstance(text_string, str):
        return 0
    if not include_spaces:
        text_string = text_string.replace(" ", "")
    return len(text_string)

def find_uppercase_ratio(text_string):
    """Calculates the ratio of uppercase letters to total letters."""
    if not isinstance(text_string, str) or not text_string:
        return 0.0
    
    uppercase_count = 0
    letter_count = 0
    for char in text_string:
        if char.isalpha():
            letter_count += 1
            if char.isupper():
                uppercase_count += 1
    
    if letter_count == 0:
        return 0.0
    return uppercase_count / letter_count

# Example usage (only runs if this script is executed directly)
if __name__ == "__main__":
    print(f"Text Analyzer Module Version: {VERSION}")
    sample_text = "Hello World! This is Python Programming."
    
    print(f"\\nAnalyzing text: \rások{sample_text}"")
    print(f"Word count: {count_words(sample_text)}")
    print(f"Character count (with spaces): {count_characters(sample_text)}")
    print(f"Character count (without spaces): {count_characters(sample_text, include_spaces=False)}")
    print(f"Uppercase ratio: {find_uppercase_ratio(sample_text):.2f}")
\`\`\`

**Step 3: Save \`text_analyzer.py\`**

Save this file. For this example, let's assume you save it in a directory, and you will create your main script in the *same directory*.

**Step 4: Import and Use in Another Script**

Now, create another Python script, say \`main_program.py\`, in the **same directory** as \`text_analyzer.py\`.

\`\`\`python
# main_program.py

# Import our custom module
import text_analyzer

# We can also import specific functions if preferred
# from text_analyzer import count_words, VERSION

print("--- Running Main Program ---")

my_sentence = "Python Modules Are Cool and Reusable."

# Using functions from the text_analyzer module
num_words = text_analyzer.count_words(my_sentence)
print(f"The sentence '\rások{my_sentence}" has {num_words} words.")

num_chars_no_space = text_analyzer.count_characters(my_sentence, include_spaces=False)
print(f"Number of characters (no spaces): {num_chars_no_space}")

ratio_upper = text_analyzer.find_uppercase_ratio(my_sentence)
print(f"Ratio of uppercase letters: {ratio_upper:.2f}")

# Accessing a variable from the module
print(f"Using Text Analyzer Module Version: {text_analyzer.VERSION}")

# If we had used 'from text_analyzer import count_words, VERSION':
# print(f"Word count (direct import): {count_words(my_sentence)}")
# print(f"Version (direct import): {VERSION}")
\`\`\`

**Running \`main_program.py\` would produce output like:**

\`\`\`
--- Running Main Program ---
The sentence 'Python Modules Are Cool and Reusable.' has 6 words.
Number of characters (no spaces): 30
Ratio of uppercase letters: 0.20
Using Text Analyzer Module Version: 1.0
\`\`\`

**Organizing Your Project with Modules**

As projects grow, you might create many modules. It's common to organize these modules into directories (which can then become packages, as we'll see in the next lesson).

For example, a project structure might look like:

\`\`\`
my_project/
├── main_app.py             # Main application script
├── utils/                  # Directory for utility modules
│   ├── __init__.py         # Makes 'utils' a package (more on this later)
│   ├── string_utils.py
│   └── math_utils.py
└── data_processing/        # Directory for data processing modules
    ├── __init__.py
    ├── loader.py
    └── processor.py
\`\`\`

In this structure, \`string_utils.py\` and \`math_utils.py\` are modules within the \`utils\` directory (which acts as a package).

**Best Practices for Creating Modules**

1.  **Cohesion**: Group related functions, classes, and data together in a module. A module should ideally have a single, well-defined purpose.
2.  **Descriptive Naming**: Choose clear and descriptive names for your module files (e.g., \`database_connector.py\` instead of \`db.py\` or \`stuff.py\`).
3.  **Docstrings**: Include a module-level docstring at the top of your module file to explain its purpose and how to use it. Also, document all public functions and classes within the module.
4.  **Use \`if __name__ == "__main__":\`**: If you want to include test code or example usage within your module file, place it inside an \`if __name__ == "__main__":\` block. This ensures the test code only runs when the module is executed directly and not when it's imported.
5.  **Avoid Excessive Global Variables**: Minimize the use of global variables within modules that are intended to be modified by importers. It's generally better to expose functionality through functions and classes.
6.  **Consider the Public API**: Think about which functions, classes, and variables in your module are intended for external use (the module's public API) and which are internal implementation details. While Python doesn't have strict private/public keywords like some languages, a common convention is to prefix internal names with a single underscore (e.g., \`_internal_helper_function\`). Names starting with a double underscore (e.g., \`__mangled_name\`) undergo name mangling.

**Modules and Namespaces**

Remember that each imported module creates its own namespace. When you use \`import my_module\`, you access its contents via \`my_module.attribute\`. This is crucial for avoiding name collisions between different modules or between a module and your main script.

If you use \`from my_module import my_function\`, then \`my_function\` is brought directly into the current namespace. While convenient, this increases the risk of name clashes if \`my_function\` has the same name as another function or variable in the current scope.

**Conclusion**

Creating your own modules is a fundamental step towards writing organized, reusable, and maintainable Python code. By simply saving your Python code in \`.py\` files, you can create modules that encapsulate specific functionalities. These modules can then be imported and used in other parts of your project or even in different projects. This modular approach is key to managing the complexity of larger software systems. In the next lesson, we will build upon this by looking at **packages**, which are a way to structure a collection of related modules.
`;export{e as default};
