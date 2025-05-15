const e=`# Module 1: Introduction to Python - Lesson 4: Your First Python Program (Hello, World!)

Alright, with your Python environment set up (or an online interpreter ready), it's time for that exciting moment: writing and running your very first Python program! By tradition, the first program many people write in a new language is one that simply displays the message "Hello, World!" on the screen. It's a simple way to verify that your setup is working and to get a feel for the basic syntax of the language.

Let's get to it!

**The \`print()\` Function**

In Python, to display output on the screen (also known as the console or terminal), we use a built-in function called \`print()\`.
A function in programming is like a mini-program or a command that performs a specific task. The \`print()\` function's task is to take whatever you give it (inside the parentheses) and show it as output.

**Writing the Code**

Open your chosen code editor (like VS Code), a simple text editor, or an online Python interpreter. If you're using a local setup with a code editor:

1.  Create a new file. It's a good practice to save Python files with a \`.py\` extension. For example, you could name this file \`hello.py\`.
2.  Type the following line of code into the file:

\`\`\`python
print("Hello, World!")
\`\`\`

Let's break this down:
*   \`print\`: This is the name of the function we are calling.
*   \`()\`: The parentheses are used to pass information (called arguments) to the function. In this case, the information we're passing is the text we want to display.
*   \`"Hello, World!"\`: This is the argument we are passing to the \`print()\` function. It's a **string** of text. In Python, strings are sequences of characters enclosed in either single quotes (\`'\`) or double quotes (\`"\`). Here, we've used double quotes. The \`print()\` function will display this exact text.

**Running Your Program**

The way you run your Python program depends on how you've set up your environment:

*   **Using an Online Interpreter:**
    *   Most online interpreters have a "Run" button. Simply click it, and you should see "Hello, World!" displayed in an output area on the webpage.

*   **Using a Local Setup (Code Editor and Terminal/Command Prompt):**
    1.  Save the file (e.g., as \`hello.py\`) in a directory you can easily navigate to (for example, a \`python_projects\` folder on your Desktop).
    2.  Open your terminal (on macOS/Linux) or Command Prompt (on Windows).
    3.  Navigate to the directory where you saved your file. You can use the \`cd\` (change directory) command. For example, if you saved it in \`Desktop/python_projects\`, you might type:
        \`\`\`bash
        cd Desktop/python_projects
        \`\`\`
    4.  Once you are in the correct directory, type the following command and press Enter:
        \`\`\`bash
        python hello.py
        \`\`\`
        (If \`python\` doesn't work, try \`python3 hello.py\`, especially on macOS or Linux where \`python\` might point to an older version).

*   **Using an IDE (like PyCharm or VS Code with Python extension):**
    *   Most IDEs have a built-in way to run Python files. Often, you can right-click on the file name in the project explorer and select "Run Python File in Terminal" or a similar option. There's usually also a green play button icon in the toolbar.

**The Output**

If everything is set up correctly and you've typed the code accurately, you should see the following output displayed on your screen or in the output panel:

\`\`\`
Hello, World!
\`\`\`

Congratulations! You've just written and executed your first Python program. It might seem like a small step, but it's a fundamental one. You've learned how to instruct the computer to display information, which is a core part of many programs.

**Experiment a Little!**

Now that you have the basic structure, try modifying the program:
*   Change the message inside the quotes. For example: \`print("Python is fun!")\`
*   Try using single quotes instead of double quotes: \`print('This also works.')\`
*   Add another \`print()\` statement on a new line to display multiple messages:
    \`\`\`python
    print("Hello, World!")
    print("I am learning Python.")
    \`\`\`
    Run the program again to see the results. Each \`print()\` statement will typically output on a new line.

This simple "Hello, World!" program demonstrates the ease with which you can get started with Python. In the next lessons, we'll build upon this foundation, exploring Python's syntax, how to store information in variables, and much more.
`;export{e as default};
