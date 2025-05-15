const e=`# Module 8: Modules and Packages - Lesson 2: Importing Modules (\`import\`, \`from ... import ...\`, \`as\`)

In the previous lesson, we learned that modules are files containing Python definitions and statements, which help organize and reuse code. To actually use the functions, classes, or variables defined in a module within another Python script or an interactive session, you need to **import** that module.

Python provides several ways to import modules, each with its own syntax and implications for how you access the module's contents.

**1. The \`import module_name\` Statement**

This is the most basic way to import a module. It imports the entire module, and you access its contents (attributes like functions, classes, variables) using dot notation: \`module_name.attribute_name\`.

**Syntax:**

\`\`\`python
import module_name
# or import module_name1, module_name2, ... (to import multiple modules)
\`\`\`

**Example:**

Let's assume we have a module named \`greetings.py\`:

\`\`\`python
# greetings.py

message = "Welcome to our custom greetings module!"

def say_hello(name):
    return f"Hello, {name}! {message}"

def say_goodbye(name):
    return f"Goodbye, {name}. Come back soon!"
\`\`\`

Now, in another script (e.g., \`main_app.py\` in the same directory), we can import and use \`greetings\`:

\`\`\`python
# main_app.py

import greetings  # Imports the entire greetings.py module

# Accessing attributes from the greetings module using dot notation
print(greetings.message)

hello_msg = greetings.say_hello("Alice")
print(hello_msg)

goodbye_msg = greetings.say_goodbye("Bob")
print(goodbye_msg)
\`\`\`

**Output:**
\`\`\`
Welcome to our custom greetings module!
Hello, Alice! Welcome to our custom greetings module!
Goodbye, Bob. Come back soon!
\`\`\`

**Advantages of \`import module_name\`:**
*   **Clarity**: It's very clear where the function or variable is coming from (e.g., \`greetings.say_hello\` explicitly shows it's from the \`greetings\` module).
*   **Namespace Protection**: It avoids naming collisions. If your \`main_app.py\` also had a variable named \`message\`, it would not conflict with \`greetings.message\` because they are in different namespaces.

**2. The \`from module_name import attribute_name\` Statement**

This form allows you to import specific attributes (functions, classes, variables) directly into the current script's namespace. After importing this way, you can use the attribute name directly without prefixing it with the module name.

**Syntax:**

\`\`\`python
from module_name import name1
# or from module_name import name1, name2, ...
# or from module_name import name1 as alias1, name2 as alias2, ...
\`\`\`

**Example (using \`greetings.py\` from above):**

\`\`\`python
# main_app_from_import.py

from greetings import say_hello, message # Import specific attributes
# from greetings import say_goodbye # Could also import this if needed

# Now we can use say_hello and message directly
print(message) # Accesses the imported message directly

hello_alice = say_hello("Alice") # Calls the imported say_hello directly
print(hello_alice)

# If we try to access say_goodbye without importing it or using greetings.say_goodbye,
# it would result in a NameError.
# goodbye_bob = say_goodbye("Bob") # NameError: name 'say_goodbye' is not defined

# To use say_goodbye, we would need to either import it specifically
# or import the whole module and use greetings.say_goodbye()
\`\`\`

**Advantages of \`from ... import ...\`:**
*   **Conciseness**: You can use the imported names directly, making calls shorter (e.g., \`say_hello()\` instead of \`greetings.say_hello()\`).

**Disadvantages of \`from ... import ...\`:**
*   **Namespace Pollution/Clashes**: If the imported attribute has the same name as something already defined in your current script, the imported name will overwrite the existing one (or vice-versa, depending on order, but it leads to confusion). This can make debugging harder.
*   **Reduced Clarity**: It might be less obvious where a function or variable originated if it's used without a module prefix, especially in larger files with many imports.

**3. The \`from module_name import *\` Statement (Generally Discouraged)**

This form imports **all** names (except those starting with an underscore \`_\`, unless explicitly listed in the module's \`__all__\` variable) from the specified module directly into the current script's namespace.

**Syntax:**

\`\`\`python
from module_name import *
\`\`\`

**Example (using \`greetings.py\`):**

\`\`\`python
# main_app_import_star.py

from greetings import * # Imports all names from greetings

print(message) # Directly accessible
print(say_hello("Charlie")) # Directly accessible
print(say_goodbye("David")) # Directly accessible
\`\`\`

**Why \`from ... import *\` is Generally Discouraged:**

*   **Severe Namespace Pollution**: It dumps all names from the module into your current namespace, making it very likely to cause naming conflicts with your own variables/functions or names from other modules imported this way.
*   **Reduced Readability**: It becomes very difficult to tell where a particular name came from, especially in large scripts. This makes the code harder to understand and debug.
*   **Makes Code Less Maintainable**: If the imported module changes (e.g., adds new names), those new names are automatically pulled into your namespace, potentially causing unexpected behavior or new conflicts.

**When might it be (cautiously) used?**
*   In the interactive Python interpreter for convenience during exploration.
*   Sometimes within a module that is specifically designed to re-export names from other modules (though explicit re-exporting is often better).
*   Some modules are designed to be used this way (e.g., \`tkinter\`), but this is an exception rather than the rule.

**Generally, prefer \`import module_name\` or \`from module_name import specific_name\` for better clarity and maintainability.**

**4. The \`as\` Keyword (Aliasing Imports)**

You can provide an alias (an alternative name) for an imported module or for specific imported attributes using the \`as\` keyword. This is useful for several reasons:

*   To avoid naming conflicts if the imported module/attribute has the same name as something in your script.
*   To shorten a long module name for convenience.
*   To use a more conventional or readable name.

**Syntax:**

\`\`\`python
import module_name as alias_name
from module_name import attribute_name as alias_for_attribute
\`\`\`

**Example:**

\`\`\`python
# main_app_alias.py

# Aliasing a module import
import greetings as grt

print(grt.message)
print(grt.say_hello("Eve"))

# Aliasing specific attribute imports
from greetings import say_goodbye as bye

print(bye("Frank"))

# Example with a standard library module
import math as m # Common alias for math
print(f"Pi (using alias m): {m.pi}")
print(f"Square root of 16 (using alias m): {m.sqrt(16)}")

# Example with a commonly aliased third-party library (conceptual)
# import pandas as pd
# import numpy as np
\`\`\`

**Where Python Looks for Modules (The Module Search Path)**

When you use an \`import\` statement, Python searches for the module in a specific order of directories:

1.  **The directory containing the input script** (or the current directory if running interactively).
2.  **\`PYTHONPATH\`**: A list of directory names, with the same syntax as the shell variable \`PATH\`. You can set this environment variable to include directories where your custom modules reside.
3.  **The installation-dependent default path**: This includes locations where Python's standard library modules and third-party packages are installed (e.g., \`site-packages\` directory).

You can inspect the module search path using \`sys.path\`:

\`\`\`python
import sys

print("Python's Module Search Path (sys.path):")
for path_dir in sys.path:
    print(path_dir)
\`\`\`

**Executing Modules as Scripts and the \`if __name__ == "__main__":\` Block**

As mentioned in the previous lesson, you can run a Python module file directly as a script. When you do this, the special variable \`__name__\` within that module is set to \`"__main__"\`.

This allows you to include code in your module that only runs when the module is executed as the main program, not when it's imported by another module. This is commonly used for tests, examples, or a command-line interface for the module.

\`\`\`python
# my_module_with_main.py

def my_function():
    return "This is my_function from my_module_with_main."

SOME_CONSTANT = 42

if __name__ == "__main__":
    # This block executes only when my_module_with_main.py is run directly.
    # It does NOT execute when this module is imported by another script.
    print("Running my_module_with_main.py as the main script.")
    print(f"Calling my_function(): {my_function()}")
    print(f"SOME_CONSTANT is: {SOME_CONSTANT}")
else:
    print(f"my_module_with_main.py was imported (its __name__ is \rások{__name__}").")

# --- Now, imagine another script, importer.py ---
# importer.py
# import my_module_with_main
# print("--- In importer.py ---")
# print(my_module_with_main.my_function())
# print(f"Accessing constant: {my_module_with_main.SOME_CONSTANT}")
\`\`\`
If you run \`python my_module_with_main.py\`, you'll see the output from the \`if __name__ == "__main__":\` block.
If you run \`importer.py\` (which imports \`my_module_with_main\`), you'll see the \`else\` block's print statement from \`my_module_with_main\` during the import, and then the output from \`importer.py\`.

**Conclusion**

Importing modules is how you bring external code into your current Python environment. Understanding the different import statements (\`import\`, \`from ... import\`, \`as\`) and their implications for namespaces and readability is crucial for writing well-structured and maintainable Python programs.

*   \`import module_name\` is generally preferred for clarity and namespace safety.
*   \`from module_name import specific_name\` can be convenient but use with caution regarding potential name clashes.
*   \`from module_name import *\` should usually be avoided.
*   \`as\` provides useful aliasing capabilities.

By mastering module imports, you can effectively leverage Python's standard library, third-party packages, and your own custom modules to build powerful applications.
`;export{e as default};
