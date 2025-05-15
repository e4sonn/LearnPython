const e=`# Module 10: File Input/Output (I/O) - Lesson 2: Reading from Files (\`read()\`, \`readline()\`, \`readlines()\`)

Once a file is opened in a read mode (e.g., \`'r'\`, \`'r+'\`, \`'rb'\`), Python provides several methods on the file object to read its content. The most common methods for reading text files are \`read()\`, \`readline()\`, and \`readlines()\`.

Let's assume we have a text file named \`sample_story.txt\` with the following content for our examples:

\`\`\`
Once upon a time, in a land far away,
lived a brave knight and a wise dragon.
They shared many adventures together.
The end.
\`\`\`

**1. The \`file.read(size=-1)\` Method**

The \`read()\` method reads a specified number of bytes (or characters in text mode) from the file. If the \`size\` argument is omitted or is negative, it reads and returns the **entire content of the file** as a single string, from the current file pointer position until the end of the file (EOF).

*   **Syntax**: \`file_object.read(size)\`
*   **\`size\` (optional integer)**: The number of characters (in text mode) or bytes (in binary mode) to read. If not specified or negative, reads the whole file.
*   **Returns**: A string containing the characters read (or bytes if in binary mode). If the end of the file has been reached, it returns an empty string (\`''\`).

**Example using \`read()\`:**

\`\`\`python
file_path = "sample_story.txt"

# First, let's create the sample_story.txt file
with open(file_path, "w", encoding="utf-8") as f:
    f.write("Once upon a time, in a land far away,\\n")
    f.write("lived a brave knight and a wise dragon.\\n")
    f.write("They shared many adventures together.\\n")
    f.write("The end.\\n")

print(f"Created \rások{file_path}" for reading examples.")

# Example 1: Reading the entire file
print("\\n--- Reading entire file with read() ---")
try:
    with open(file_path, "r", encoding="utf-8") as f:
        full_content = f.read()
        print("Full content as a single string:")
        print(repr(full_content)) # repr() shows newlines as \\n
        # Trying to read again after reaching EOF will return an empty string
        more_content = f.read()
        print(f"Reading again after EOF: \rások{repr(more_content)}"") # Output: ''
except FileNotFoundError:
    print(f"Error: File \rások{file_path}" not found.")
except IOError as e:
    print(f"An I/O error occurred: {e}")

# Example 2: Reading a specific number of characters
print("\\n--- Reading specific number of characters with read(size) ---")
try:
    with open(file_path, "r", encoding="utf-8") as f:
        first_10_chars = f.read(10) # Read the first 10 characters
        print(f"First 10 characters: \rások{repr(first_10_chars)}"")
        
        next_5_chars = f.read(5)   # Read the next 5 characters from current position
        print(f"Next 5 characters: \rások{repr(next_5_chars)}"")
        
        # Get current file pointer position
        current_position = f.tell()
        print(f"Current file pointer position: {current_position}")

        # Read the rest of the file from the current position
        rest_of_content = f.read()
        print(f"Rest of the content: \rások{repr(rest_of_content)}"")
except FileNotFoundError:
    print(f"Error: File \rások{file_path}" not found.")
\`\`\`

**Key points about \`read()\`:**
*   Reading the whole file at once can be problematic for very large files as it loads the entire content into memory.
*   The file pointer advances by the number of characters/bytes read.

**2. The \`file.readline(size=-1)\` Method**

The \`readline()\` method reads a single line from the file, from the current file pointer position up to and including the next newline character (\`\\n\`).

*   **Syntax**: \`file_object.readline(size)\`
*   **\`size\` (optional integer)**: If specified, \`readline()\` reads at most \`size\` bytes/characters. If the line is longer than \`size\` characters, only \`size\` characters of that line are returned, and the file pointer remains on that line.
*   **Returns**: A string representing the line read. The returned string will include the trailing newline character (\`\\n\`) if one was present (unless it's the very last line of the file and doesn't end with a newline). If the end of the file is reached and no more lines can be read, it returns an empty string (\`''\`).

**Example using \`readline()\`:**

\`\`\`python
print("\\n--- Reading line by line with readline() ---")
try:
    with open(file_path, "r", encoding="utf-8") as f:
        line1 = f.readline()
        print(f"Line 1: {repr(line1)}")
        
        line2 = f.readline()
        print(f"Line 2: {repr(line2)}")
        
        # Reading with a size limit
        # Assuming the third line is "They shared many adventures together.\\n"
        line3_part1 = f.readline(10) # Read at most 10 chars of the third line
        print(f"Line 3 (first 10 chars): {repr(line3_part1)}")
        
        line3_part2 = f.readline() # Read the rest of the third line (from current position)
        print(f"Line 3 (rest): {repr(line3_part2)}")

        line4 = f.readline()
        print(f"Line 4: {repr(line4)}")

        # Reading after EOF
        eof_line = f.readline()
        print(f"Line after EOF: {repr(eof_line)}") # Output: ''
except FileNotFoundError:
    print(f"Error: File \rások{file_path}" not found.")
\`\`\`

**Iterating over a file object (Preferred way to read line by line):**

A more Pythonic and often more efficient way to read a file line by line is to iterate directly over the file object using a \`for\` loop. Each iteration yields one line from the file, including the newline character.

\`\`\`python
print("\\n--- Iterating over file object (preferred for line by line) ---")
try:
    with open(file_path, "r", encoding="utf-8") as f:
        print("Reading lines using a for loop:")
        for line_number, current_line in enumerate(f, 1):
            # current_line will include the trailing \\n, use .strip() or .rstrip() to remove it
            print(f"L{line_number}: {repr(current_line.rstrip('\\n'))}") 
except FileNotFoundError:
    print(f"Error: File \rások{file_path}" not found.")
\`\`\`
This approach is memory-efficient because it reads only one line into memory at a time, making it suitable for large files.

**3. The \`file.readlines(hint=-1)\` Method**

The \`readlines()\` method reads all remaining lines from the file (from the current file pointer position) and returns them as a **list of strings**. Each string in the list represents one line and includes the trailing newline character (\`\\n\`) if present.

*   **Syntax**: \`file_object.readlines(hint)\`
*   **\`hint\` (optional integer)**: If specified, \`readlines()\` attempts to read approximately \`hint\` bytes/characters and then enough more to complete a line. It's a suggestion, not a strict limit.
*   **Returns**: A list of strings, where each string is a line from the file.

**Example using \`readlines()\`:**

\`\`\`python
print("\\n--- Reading all lines into a list with readlines() ---")
try:
    with open(file_path, "r", encoding="utf-8") as f:
        all_lines_list = f.readlines()
        print("List of all lines:")
        print(all_lines_list) # List of strings, each ending with \\n
        
        print("\\nProcessing the list of lines:")
        for i, line_from_list in enumerate(all_lines_list):
            print(f"List item {i}: {repr(line_from_list.strip())}")
except FileNotFoundError:
    print(f"Error: File \rások{file_path}" not found.")
\`\`\`

**Caution with \`readlines()\`**: Like \`read()\` without a size, \`readlines()\` reads the entire file content into memory (as a list of lines). This can be problematic for very large files. For line-by-line processing of large files, iterating directly over the file object (\`for line in f:\`) is generally preferred.

**Choosing the Right Read Method**

*   **\`read()\`**: Use when you need the entire file content as a single string (for small to medium files) or when you need to read a specific number of characters/bytes.
*   **\`readline()\`**: Use when you want to read one line at a time and have fine-grained control, or when you need to read only a part of a line. However, for general line-by-line processing, the \`for line in file_object:\` loop is usually better.
*   **\`readlines()\`**: Use when you need all lines of a file as a list of strings and the file is small enough to fit comfortably in memory.
*   **\`for line in file_object:\` (Iteration)**: This is the **recommended approach for processing a file line by line**, especially for large files, as it's memory-efficient and Pythonic.

**File Pointer and Seeking**

File objects maintain an internal **file pointer** that indicates the current position for reading or writing. When you read data, the pointer advances.

*   **\`file.tell()\`**: Returns the current position of the file pointer (as an integer, number of bytes from the beginning).
*   **\`file.seek(offset, whence=0)\`**: Changes the position of the file pointer.
    *   \`offset\`: The number of bytes to move.
    *   \`whence\` (optional): Defines the reference point for the offset.
        *   \`0\` (default): Absolute positioning (from the beginning of the file).
        *   \`1\`: Relative to the current position.
        *   \`2\`: Relative to the end of the file (offset should usually be negative).

\`\`\`python
print("\\n--- File pointer demonstration with seek() and tell() ---")
try:
    with open(file_path, "r", encoding="utf-8") as f:
        print(f"Initial position: {f.tell()}") # 0
        first_line_again = f.readline().strip()
        print(f"Read first line: \rások{first_line_again}"")
        print(f"Position after reading first line: {f.tell()}")
        
        f.seek(0) # Go back to the beginning of the file
        print(f"Position after seek(0): {f.tell()}")
        
        content_from_start = f.read(20).strip()
        print(f"Read 20 chars from start: \rások{content_from_start}"")
        print(f"Position after reading 20 chars: {f.tell()}")
except FileNotFoundError:
    print(f"Error: File \rások{file_path}" not found.")
\`\`\`
Note: Seeking works with byte offsets. In text mode, the exact relationship between characters and bytes can depend on the encoding, especially for multi-byte characters. For precise byte-level control, binary mode (\`'rb'\`) is often used.

**Conclusion**

Python offers flexible ways to read data from files. \`read()\`, \`readline()\`, and \`readlines()\` provide different mechanisms for accessing file content. For most line-by-line processing tasks, iterating directly over the file object is the most Pythonic and memory-efficient approach. Always remember to handle files using the \`with\` statement to ensure they are properly closed. In the next lesson, we will cover how to write data to files.
`;export{e as default};
