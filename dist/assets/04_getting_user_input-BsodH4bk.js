const e=`# Module 2: Variables and Data Types - Lesson 4: Getting User Input

So far, our Python programs have been working with data that we define directly in the code. However, many applications need to interact with the user, allowing them to provide information or make choices. In Python, you can get input from the user through the console using the built-in \`input()\` function.

**The \`input()\` Function**

The \`input()\` function pauses your program and waits for the user to type some text into the console and press the Enter key. The text entered by the user is then returned by the function as a **string**.

The basic syntax is:

\`variable_to_store_input = input()\`

You can also provide an optional string argument to \`input()\`, which will be displayed to the user as a prompt, guiding them on what to enter.

\`variable_to_store_input = input("Your desired prompt message: ")\`

Let's see it in action:

\`\`\`python
# Simple input without a prompt
print("Please type your name:")
user_name = input()
print(f"Hello, {user_name}!")

# Input with a prompt message
city = input("Which city do you live in? ")
print(f"Wow, {city} sounds like a nice place!")
\`\`\`

When you run this code:
1.  For the first part, "Please type your name:" will be printed. The program will then pause.
2.  You type your name (e.g., "Alice") in the console and press Enter.
3.  The \`input()\` function will return "Alice" as a string, which gets stored in the \`user_name\` variable.
4.  Then, "Hello, Alice!" will be printed.
5.  For the second part, the prompt "Which city do you live in? " will be displayed. The program pauses again.
6.  You type the city name (e.g., "London") and press Enter.
7.  "London" is stored in the \`city\` variable.
8.  Finally, "Wow, London sounds like a nice place!" is printed.

Notice the space at the end of the prompt string \`"Which city do you live in? "\`. This is a common practice to ensure that the user's typed input doesn't appear immediately next to the prompt message, making it more readable.

**Important: \`input()\` Always Returns a String**

A crucial point to remember is that the \`input()\` function **always returns the user's input as a string**, regardless of whether the user types numbers, letters, or symbols.

If you expect the user to enter a number and you want to perform mathematical operations with that input, you will need to convert the string to the appropriate numeric type (e.g., \`int\` or \`float\`) using type conversion functions.

\`\`\`python
age_str = input("How old are you? ")

# At this point, age_str is a string. For example, if the user types 25, age_str will be "25".
print(f"The type of age_str is: {type(age_str)}")

# If you try to do math with it directly, you might get an error or unexpected behavior:
# next_year_age_wrong = age_str + 1  # This would cause a TypeError: can only concatenate str (not "int") to str

# Convert the string to an integer before doing math
# It's good practice to do this in a try-except block to handle potential errors if the user doesn't enter a valid number
try:
    age_int = int(age_str)
    next_year_age = age_int + 1
    print(f"Next year, you will be {next_year_age} years old.")
except ValueError:
    print("Invalid input. Please enter a valid number for your age.")

\`\`\`

In the example above:
*   We first get the age as a string using \`input()\`.
*   We then attempt to convert \`age_str\` to an integer using \`int()\`. This is wrapped in a \`try-except\` block (which we'll cover in detail in the error handling module). This is important because if the user types something that cannot be converted to an integer (like "twenty" or "abc"), the \`int()\` function will raise a \`ValueError\`, and our program would crash without the \`try-except\` block.
*   If the conversion is successful, we can then perform mathematical operations like \`age_int + 1\`.

Similarly, if you expect a floating-point number, you would use \`float()\` for conversion:

\`\`\`python
price_str = input("Enter the price of the item: ")
try:
    price_float = float(price_str)
    price_with_tax = price_float * 1.20  # Assuming a 20% tax
    print(f"The price with tax is: {price_with_tax:.2f}") # .2f formats to 2 decimal places
except ValueError:
    print("Invalid input. Please enter a valid price (e.g., 10.99).")
\`\`\`

**Reading Multiple Inputs**

If you need to get multiple pieces of input from the user, you typically call the \`input()\` function multiple times:

\`\`\`python
first_name = input("Enter your first name: ")
last_name = input("Enter your last name: ")
print(f"Your full name is {first_name} {last_name}.")
\`\`\`

Sometimes, you might want the user to enter multiple values on a single line, perhaps separated by spaces or commas. You can achieve this by reading the whole line as a string and then using the string's \`.split()\` method:

\`\`\`python
# Get two numbers separated by a space
print("Enter two numbers separated by a space (e.g., 10 25):")
input_string = input()

parts = input_string.split() # Splits the string by spaces into a list of strings

if len(parts) == 2:
    try:
        num1_str, num2_str = parts # Unpack the list into two string variables
        num1 = int(num1_str)
        num2 = int(num2_str)
        sum_of_numbers = num1 + num2
        print(f"The numbers you entered are {num1} and {num2}.")
        print(f"Their sum is: {sum_of_numbers}")
    except ValueError:
        print("Invalid input. Please ensure you enter two valid numbers separated by a space.")
else:
    print("Invalid input. Please enter exactly two numbers separated by a space.")

\`\`\`
In this more advanced example:
1.  We get a single line of input.
2.  We use \`input_string.split()\` which, by default, splits the string at whitespace characters and returns a list of strings.
3.  We check if we got exactly two parts.
4.  We then try to convert these parts to integers.

**Practical Considerations**

*   **Clear Prompts:** Always provide clear and concise prompts so the user knows what kind of information they need to enter.
*   **Input Validation:** As shown with \`try-except\`, it's crucial to validate user input, especially when you expect specific types (like numbers) or formats. Users can and will enter unexpected data, and your program should handle this gracefully rather than crashing.
*   **User Experience:** Think about the flow of interaction. Don't ask for too much information at once. Guide the user step by step.

**Conclusion**

The \`input()\` function is your gateway to creating interactive Python programs. It allows you to fetch data directly from the user via the console. The most important takeaway is that \`input()\` always returns a string, so you'll often need to perform type conversion (e.g., to \`int\` or \`float\`) if you intend to use the input for numerical calculations. Always remember to anticipate potential errors in user input and handle them robustly. With \`input()\`, your programs can become much more dynamic and engaging!
`;export{e as default};
