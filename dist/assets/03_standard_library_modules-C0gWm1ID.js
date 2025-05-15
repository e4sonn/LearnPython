const e=`# Module 8: Modules and Packages - Lesson 3: Standard Library Modules

Python's power and versatility are significantly enhanced by its **Standard Library**. The Standard Library is a vast collection of modules that are included with every Python installation. This means you don't need to install them separately; they are readily available for you to import and use in your programs.

These modules provide a wide array of functionalities, from mathematical operations and string manipulation to interacting with the operating system, working with dates and times, handling network connections, and much more. Learning to leverage the Standard Library effectively can save you a lot of time and effort, as it provides well-tested and efficient solutions for common programming tasks.

**What is the Python Standard Library?**

Think of the Standard Library as a toolkit that comes with Python. It contains numerous modules, each focused on a specific area of functionality. By importing these modules, you gain access to pre-written functions, classes, and constants that you can use directly.

The official Python documentation provides a comprehensive guide to all modules in the Standard Library, and it's an invaluable resource for any Python developer.

**Exploring Some Common and Useful Standard Library Modules**

Let's explore a few examples of commonly used modules from the Standard Library to get a feel for what's available.

**1. The \`math\` Module**

The \`math\` module provides access to mathematical functions defined by the C standard, as well as some Python-specific additions.

\`\`\`python
import math

# Constants
print(f"Value of pi (from math module): {math.pi}")
print(f"Value of Euler's number (e): {math.e}")

# Basic arithmetic functions
print(f"Square root of 25: {math.sqrt(25)}")
print(f"Factorial of 5 (5!): {math.factorial(5)}")
print(f"Absolute value of -10.5: {math.fabs(-10.5)}") # fabs for float absolute value

# Power and logarithmic functions
print(f"2 raised to the power of 3: {math.pow(2, 3)}")
print(f"Natural logarithm of 10: {math.log(10)}")
print(f"Base-10 logarithm of 100: {math.log10(100)}")

# Trigonometric functions (angles are in radians)
angle_radians = math.pi / 4 # 45 degrees in radians
print(f"Sine of pi/4 radians: {math.sin(angle_radians):.4f}")
print(f"Cosine of pi/4 radians: {math.cos(angle_radians):.4f}")

# Conversion functions
print(f"Convert 90 degrees to radians: {math.radians(90)}")
print(f"Convert pi radians to degrees: {math.degrees(math.pi)}")

# Ceiling and floor
print(f"Ceiling of 4.3 (smallest integer >= 4.3): {math.ceil(4.3)}")
print(f"Floor of 4.8 (largest integer <= 4.8): {math.floor(4.8)}")
\`\`\`

**2. The \`random\` Module**

The \`random\` module implements pseudo-random number generators for various distributions.

\`\`\`python
import random

# Generate a random float between 0.0 (inclusive) and 1.0 (exclusive)
print(f"Random float between 0.0 and 1.0: {random.random()}")

# Generate a random integer between a and b (inclusive)
print(f"Random integer between 1 and 10: {random.randint(1, 10)}")

# Generate a random float from a uniform distribution between a and b
print(f"Random float between 5.0 and 10.0: {random.uniform(5.0, 10.0)}")

# Choose a random element from a non-empty sequence (like a list)
my_list = ["apple", "banana", "cherry", "date"]
print(f"Random choice from list: {random.choice(my_list)}")

# Shuffle a sequence (list) in place
numbers_to_shuffle = [1, 2, 3, 4, 5]
print(f"Original list: {numbers_to_shuffle}")
random.shuffle(numbers_to_shuffle) # Modifies the list directly
print(f"Shuffled list: {numbers_to_shuffle}")

# Get a random sample of k unique elements from a population sequence
sample_population = range(1, 101) # Numbers from 1 to 100
random_sample = random.sample(sample_population, 5) # Get 5 unique random numbers
print(f"Random sample of 5 numbers from 1-100: {random_sample}")
\`\`\`

**3. The \`datetime\` Module**

The \`datetime\` module supplies classes for working with dates and times.

\`\`\`python
import datetime

# Get the current date and time
now = datetime.datetime.now()
print(f"Current date and time: {now}")

# Get the current date
today = datetime.date.today()
print(f"Current date: {today}")

# Create a specific date object
date1 = datetime.date(2024, 12, 25)
print(f"Specific date: {date1}")

# Create a specific time object
time1 = datetime.time(14, 30, 45) # 2:30:45 PM
print(f"Specific time: {time1}")

# Create a specific datetime object
datetime1 = datetime.datetime(2025, 1, 1, 10, 0, 0) # Jan 1, 2025, 10:00:00 AM
print(f"Specific datetime: {datetime1}")

# Access components of a datetime object
print(f"Year: {now.year}, Month: {now.month}, Day: {now.day}")
print(f"Hour: {now.hour}, Minute: {now.minute}, Second: {now.second}")

# Formatting dates and times into strings (strftime - string format time)
formatted_now = now.strftime("%Y-%m-%d %H:%M:%S") # YYYY-MM-DD HH:MM:SS
print(f"Formatted current datetime: {formatted_now}")

formatted_date = today.strftime("%A, %B %d, %Y") # e.g., Thursday, May 15, 2025
print(f"Formatted current date: {formatted_date}")

# Parsing strings into datetime objects (strptime - string parse time)
date_string = "2023-07-20"
date_object = datetime.datetime.strptime(date_string, "%Y-%m-%d").date()
print(f"Date object from string \rások{date_string}": {date_object}")

# Time differences (timedelta)
delta = datetime.timedelta(days=7, hours=3)
future_date = now + delta
print(f"Current datetime: {now}")
print(f"Datetime 7 days and 3 hours from now: {future_date}")
\`\`\`

**4. The \`os\` Module**

The \`os\` module provides a way of using operating system dependent functionality like reading or writing to the file system, interacting with environment variables, etc.

\`\`\`python
import os

# Get the current working directory
current_dir = os.getcwd()
print(f"Current working directory: {current_dir}")

# List files and directories in a path
print(f"Contents of current directory: {os.listdir('.')}") # '.' refers to current directory

# Create a directory (if it doesn't exist)
dir_name = "my_new_test_directory"
if not os.path.exists(dir_name):
    os.mkdir(dir_name)
    print(f"Directory \rások{dir_name}" created.")
else:
    print(f"Directory \rások{dir_name}" already exists.")

# Check if a path is a file or directory
print(f"Is \rások{dir_name}" a directory? {os.path.isdir(dir_name)}")
# To demonstrate isfile, let's create a dummy file (more on file I/O in Module 10)
# with open("dummy.txt", "w") as f: f.write("test") 
# print(f"Is 'dummy.txt' a file? {os.path.isfile('dummy.txt')}")

# Get environment variables
python_path = os.getenv("PYTHONPATH")
print(f"Value of PYTHONPATH environment variable: {python_path}") # Might be None

# Join path components intelligently (handles different OS path separators)
path_to_file = os.path.join(current_dir, "my_folder", "my_file.txt")
print(f"Constructed path: {path_to_file}")

# Remove a directory (must be empty)
# os.rmdir(dir_name) # Be careful with remove operations!
# print(f"Directory \rások{dir_name}" removed (if it was empty).")
\`\`\`
**Caution**: Be careful with \`os\` module functions that modify the file system (like \`os.mkdir\`, \`os.remove\`, \`os.rmdir\`), especially when learning.

**5. The \`sys\` Module**

The \`sys\` module provides access to some variables used or maintained by the Python interpreter and to functions that interact strongly with the interpreter.

\`\`\`python
import sys

# Get Python version information
print(f"Python version: {sys.version}")

# Get command-line arguments passed to a script
# If you run: python your_script.py arg1 arg2
# sys.argv will be ["your_script.py", "arg1", "arg2"]
print(f"Command-line arguments: {sys.argv}")

# Get the platform (OS) Python is running on
print(f"Platform: {sys.platform}") # e.g., 'linux', 'win32', 'darwin'

# Exit the Python script
# print("About to exit script...")
# sys.exit(0) # 0 usually indicates successful termination
# print("This line will not be printed if sys.exit() is called.")

# As seen before, sys.path contains the module search path
# print(f"Module search path (sys.path): {sys.path}")
\`\`\`

**How to Discover and Learn About Standard Library Modules**

*   **Official Python Documentation**: The Python Standard Library documentation (available at \`docs.python.org\`) is the definitive reference. It lists all modules and details their functions, classes, and usage.
*   **\`help()\` function**: In a Python interpreter, you can use \`help(module_name)\` (after importing the module) to get information about it. For example, \`import math; help(math)\`.
*   **\`dir()\` function**: \`dir(module_name)\` lists the names (attributes, functions, classes, etc.) defined within a module. For example, \`import random; print(dir(random))\`.
*   **Experimentation**: The best way to learn is often by trying things out in the interactive interpreter or small scripts.
*   **Books and Tutorials**: Many Python learning resources dedicate sections to common standard library modules.

**Conclusion**

The Python Standard Library is a treasure trove of pre-built functionality that significantly boosts productivity and allows developers to focus on solving specific problems rather than reinventing the wheel for common tasks. Familiarizing yourself with the key modules relevant to your work is an essential part of becoming a proficient Python programmer. While we've only scratched the surface with \`math\`, \`random\`, \`datetime\`, \`os\`, and \`sys\`, there are many more modules covering areas like data serialization (\`json\`, \`pickle\`), network communication (\`socket\`, \`http.client\`), regular expressions (\`re\`), file compression (\`zipfile\`, \`gzip\`), and concurrent execution (\`threading\`, \`multiprocessing\`).

Always check if the Standard Library provides a solution before writing custom code for common tasks or looking for third-party packages. In the next lesson, we'll discuss how to create your own modules to organize your project code.
`;export{e as default};
