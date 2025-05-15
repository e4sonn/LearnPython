const e=`# Module 10: File Input/Output (I/O) - Lesson 3: Writing to Files (\`write()\`, \`writelines()\`)

After learning how to open files and read their contents, the next essential skill in file I/O is writing data to files. Python provides methods on the file object, primarily \`write()\` and \`writelines()\`, to save information persistently.

To write to a file, you must open it in a mode that permits writing, such as:
*   \`"w"\` (Write mode): Truncates the file if it exists, then opens for writing. Creates the file if it doesn't exist.
*   \`"a"\` (Append mode): Opens for writing, with the file pointer at the end. New data is added after existing content. Creates the file if it doesn't exist.
*   \`"w+"\` (Write and Read): Truncates, allows writing and reading.
*   \`"a+"\` (Append and Read): Opens for appending and reading, pointer at the end for writing.
*   Binary modes like \`"wb"\`, \`"ab"\`, etc., for writing binary data.

Remember to always use the \`with\` statement for opening files to ensure they are automatically closed, and specify an \`encoding\` (like \`"utf-8"\`) for text files.

**1. The \`file.write(string)\` Method**

The \`write()\` method writes a given string to the file at the current file pointer position. It does **not** automatically add a newline character (\`\\n\`) at the end of the string; you must include it explicitly if you want lines to be separated.

*   **Syntax**: \`file_object.write(string_to_write)\`
*   **\`string_to_write\`**: The string data that you want to write to the file.
*   **Returns**: The number of characters written to the file.

**Example using \`write()\`:**

\`\`\`python
output_file_path = "my_output_document.txt"

# Example 1: Writing to a new file (or overwriting an existing one)
print(f"--- Writing to \rások{output_file_path}" in 'w' mode ---")
try:
    with open(output_file_path, "w", encoding="utf-8") as f_writer:
        # Writing the first line
        chars_written1 = f_writer.write("This is the first line of our document.\\n") # Explicit newline
        print(f"Characters written for line 1: {chars_written1}")
        
        # Writing the second line
        line2 = "Python file writing is useful."
        chars_written2 = f_writer.write(line2) # No newline here, next write will continue on same line
        print(f"Characters written for line 2 (no newline): {chars_written2}")
        
        # Writing a third piece of text, which will append to the second line
        f_writer.write(" And this continues it.\\n") # Adding a newline at the end
        
        # Writing numbers (must be converted to strings first)
        f_writer.write("Data point 1: " + str(100) + "\\n")
        f_writer.write(f"Data point 2: {200.5}\\n") # Using an f-string
        
    print(f"Content successfully written to \rások{output_file_path}".")

except IOError as e:
    print(f"An I/O error occurred: {e}")

# Let's verify the content by reading it back
try:
    with open(output_file_path, "r", encoding="utf-8") as f_reader:
        print("\\n--- Content of my_output_document.txt ---")
        print(f_reader.read())
except FileNotFoundError:
    print(f"Error: File \rások{output_file_path}" not found for reading.")
\`\`\`

**Output of \`my_output_document.txt\` would be:**
\`\`\`
This is the first line of our document.
Python file writing is useful. And this continues it.
Data point 1: 100
Data point 2: 200.5
\`\`\`

**Example 2: Appending to an existing file**

If you open the file in append mode (\`"a"\`), \`write()\` will add content to the end of the file without erasing existing content.

\`\`\`python
print(f"\\n--- Appending to \rások{output_file_path}" in 'a' mode ---")
try:
    with open(output_file_path, "a", encoding="utf-8") as f_appender:
        f_appender.write("\\n--- Appended Section ---\\n") # Add some separation
        f_appender.write("This line was appended to the existing file.\\n")
        f_appender.write("Appending more data is easy!\\n")
    print(f"Content successfully appended to \rások{output_file_path}".")

except IOError as e:
    print(f"An I/O error occurred during append: {e}")

# Verify the appended content
try:
    with open(output_file_path, "r", encoding="utf-8") as f_reader:
        print("\\n--- Content of my_output_document.txt after appending ---")
        print(f_reader.read())
except FileNotFoundError:
    print(f"Error: File \rások{output_file_path}" not found for reading.")
\`\`\`

**2. The \`file.writelines(list_of_strings)\` Method**

The \`writelines()\` method writes a list (or any iterable) of strings to the file. Unlike what its name might suggest, \`writelines()\` does **not** automatically add newline characters between the strings in the list. If you want each string from the list to be on a new line in the file, each string in the list must end with a newline character (\`\\n\`).

*   **Syntax**: \`file_object.writelines(iterable_of_strings)\`
*   **\`iterable_of_strings\`**: An iterable (e.g., a list, tuple) where each element is a string to be written to the file.
*   **Returns**: This method does not return any value (it returns \`None\`).

**Example using \`writelines()\`:**

\`\`\`python
lines_to_write_path = "story_lines.txt"

story_parts = [
    "Chapter 1: The Beginning\\n",
    "It was a dark and stormy night.\\n",
    "Suddenly, a mysterious figure appeared.\\n",
    "(To be continued...)\\n"
]

print(f"\\n--- Writing multiple lines with writelines() to \rások{lines_to_write_path}" ---")
try:
    with open(lines_to_write_path, "w", encoding="utf-8") as f_multi_writer:
        f_multi_writer.writelines(story_parts)
    print(f"List of strings successfully written to \rások{lines_to_write_path}".")

except IOError as e:
    print(f"An I/O error occurred: {e}")

# Verify the content
try:
    with open(lines_to_write_path, "r", encoding="utf-8") as f_reader:
        print(f"\\n--- Content of {lines_to_write_path} ---")
        print(f_reader.read())
except FileNotFoundError:
    print(f"Error: File \rások{lines_to_write_path}" not found for reading.")

# Example without newlines in the list items:
incorrect_lines = ["Line A", "Line B", "Line C"]
incorrect_output_path = "incorrect_lines.txt"

print(f"\\n--- Writing lines without explicit \\\\n using writelines() to \rások{incorrect_output_path}" ---")
try:
    with open(incorrect_output_path, "w", encoding="utf-8") as f_incorrect:
        f_incorrect.writelines(incorrect_lines)
    print(f"Incorrect lines written to \rások{incorrect_output_path}".")
except IOError as e:
    print(f"An I/O error occurred: {e}")

# Verify the incorrect content (will be on one line)
try:
    with open(incorrect_output_path, "r", encoding="utf-8") as f_reader:
        print(f"\\n--- Content of {incorrect_output_path} (notice no newlines) ---")
        print(repr(f_reader.read())) # repr() will show it as a single string
except FileNotFoundError:
    print(f"Error: File \rások{incorrect_output_path}" not found for reading.")
\`\`\`

**Important Considerations When Writing to Files:**

1.  **Data Types**: The \`write()\` and \`writelines()\` methods expect string data. If you want to write other data types (like numbers, booleans, or complex objects), you must first convert them to strings (e.g., using \`str()\`, f-strings, or other serialization methods like \`json.dump()\` for complex objects, which we might cover later).

2.  **Newline Characters (\`\\n\`)**: Remember that these methods do not automatically add newlines. You are responsible for including \`\\n\` in your strings if you want to create separate lines in the text file.

3.  **Buffering**: File output is often buffered. This means data written by \`write()\` or \`writelines()\` might not immediately appear on the disk but could be held in an in-memory buffer. The buffer is typically flushed (written to disk) when:
    *   The buffer becomes full.
    *   The file is closed (either explicitly with \`file.close()\` or automatically by the \`with\` statement).
    *   You explicitly call \`file.flush()\`.
    This is why closing files (preferably with \`with\`) is crucial to ensure all data is saved.

4.  **Error Handling**: File operations can fail for various reasons (disk full, permissions denied, etc.). Always wrap your file I/O code in \`try...except\` blocks to handle potential \`IOError\` exceptions (or more specific exceptions like \`PermissionError\`).

5.  **File Modes**: Be very careful with the file mode, especially \`"w"\` which will **truncate (erase)** an existing file. If you want to add to an existing file, use \`"a"\` (append mode).

**Flushing the Buffer with \`file.flush()\`**

If you need to ensure that data written to a file is immediately committed to the disk without closing the file (e.g., in a long-running process that logs data periodically), you can use the \`file.flush()\` method.

\`\`\`python
log_file_path = "application.log"

print(f"\\n--- Demonstrating flush() with \rások{log_file_path}" ---")
try:
    with open(log_file_path, "a", encoding="utf-8") as logger:
        logger.write("Application started.\\n")
        logger.flush() # Ensure this log entry is written immediately
        print("First log entry flushed.")
        
        # ... some time passes or some operations occur ...
        import time
        time.sleep(1) # Simulate some work
        
        logger.write("Critical event occurred!\\n")
        logger.flush() # Ensure this critical event is logged immediately
        print("Critical event log entry flushed.")
        
        logger.write("Application shutting down.\\n")
        # No explicit flush here, but the 'with' statement will flush and close.
    print(f"Log entries written and flushed to \rások{log_file_path}".")
except IOError as e:
    print(f"An I/O error occurred with logging: {e}")
\`\`\`
While \`flush()\` can be useful, relying on the automatic flush when a file is closed (especially via the \`with\` statement) is the most common and generally sufficient practice.

**Conclusion**

Writing data to files is accomplished using the \`write()\` method for single strings and \`writelines()\` for iterables of strings. Key considerations include managing newline characters, converting non-string data to strings, understanding file modes (especially \`"w"\` vs. \`"a"\`), and handling potential errors.

Always use the \`with\` statement to ensure files are properly closed and data is flushed to disk. This makes your file writing operations safer and more reliable. In the next lessons, we will explore different file modes in more detail and discuss working with various file formats.
`;export{e as default};
