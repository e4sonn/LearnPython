const e=`# Module 10: File Input/Output (I/O) - Lesson 1: Opening and Closing Files (\`open()\`, \`close()\`)

Welcome to Module 10, where we will explore how Python programs can interact with files on your computer. File Input/Output (I/O) is a fundamental aspect of most applications, allowing them to read data from files (input) and write data to files (output). This is essential for data persistence, configuration management, logging, and many other tasks.

In this first lesson, we will focus on the basics: how to open files to establish a connection for reading or writing, and how to properly close them once you are done.

**What is File I/O?**

File I/O refers to the process of transferring data between your program and files stored on a storage device (like a hard drive, SSD, or USB drive). Files can store various types of data, such as plain text, CSV data, JSON, images, and more.

*   **Input**: Reading data *from* a file into your program.
*   **Output**: Writing data *from* your program *to* a file.

**The \`open()\` Built-in Function**

In Python, the primary way to interact with a file is by using the built-in \`open()\` function. This function opens a file and returns a **file object** (also known as a file handle), which provides methods for reading from or writing to the file.

**Syntax of \`open()\`:**

\`\`\`python
file_object = open(file_path, mode, encoding=None)
\`\`\`

Let's break down the parameters:

1.  **\`file_path\` (string)**: This is the path to the file you want to open. It can be:
    *   A **relative path**: Relative to the current working directory of your script (e.g., \`"my_document.txt"\`, \`"data/input.csv"\`).
    *   An **absolute path**: The full path from the root of the file system (e.g., \`"/home/user/documents/report.txt"\` on Linux/macOS, or \`"C:\\Users\\User\\Documents\\report.txt"\` on Windows).
    It's important to handle path separators correctly, especially for cross-platform compatibility. The \`os.path.join()\` function is often useful for constructing paths.

2.  **\`mode\` (string)**: This is an optional string that specifies the mode in which the file is opened. The mode determines what operations you can perform on the file (e.g., read, write, append) and how the file is handled if it doesn't exist.

    Common modes include:

    *   **\`'r'\` (Read - Default)**:
        *   Opens the file for reading only.
        *   The file pointer is placed at the beginning of the file.
        *   If the file does not exist, it raises a \`FileNotFoundError\`.

    *   **\`'w'\` (Write)**:
        *   Opens the file for writing only.
        *   If the file exists, its **contents are truncated** (erased) before writing new content.
        *   If the file does not exist, it **creates a new file**.

    *   **\`'a'\` (Append)**:
        *   Opens the file for appending only.
        *   The file pointer is placed at the end of the file if it exists.
        *   New data written to the file is added to the end.
        *   If the file does not exist, it **creates a new file**.

    *   **\`'r+'\` (Read and Write)**:
        *   Opens the file for both reading and writing.
        *   The file pointer is at the beginning of the file.
        *   If the file does not exist, it raises a \`FileNotFoundError\`.

    *   **\`'w+'\` (Write and Read)**:
        *   Opens the file for both writing and reading.
        *   Truncates the file if it exists.
        *   Creates a new file if it doesn't exist.

    *   **\`'a+'\` (Append and Read)**:
        *   Opens the file for both appending and reading.
        *   File pointer is at the end for writing, but reading can occur from any position (after seeking).
        *   Creates a new file if it doesn't exist.

    You can also append \`'b'\` to the mode string for **binary mode** (e.g., \`'rb'\` for reading binary files like images or executables, \`'wb'\` for writing binary files). If \`'b'\` is not specified, the file is opened in **text mode** (default), which involves encoding/decoding of text.

3.  **\`encoding\` (string)**: This is an optional argument that specifies the encoding to be used for text files. It's highly recommended to specify an encoding, especially for cross-platform and international applications.
    *   Common encodings include \`"utf-8"\` (very common and recommended for general text), \`"ascii"\`, \`"latin-1"\`.
    *   If \`encoding\` is not specified, the default encoding depends on your operating system and Python configuration, which can lead to inconsistencies.
    *   This parameter is ignored for files opened in binary mode.

**Example: Opening a File for Writing and Reading**

\`\`\`python
# Let's create a sample text file
file_path = "example.txt"

# --- Writing to a file --- 
# Open in write mode (	runcate if exists, create if not)
try:
    # It's good practice to specify encoding for text files
    file_writer = open(file_path, mode="w", encoding="utf-8")
    print(f"File \rások{file_path}" opened in write mode.")
    
    # Write some content (more on writing methods in the next lesson)
    file_writer.write("Hello, Python File I/O!\\n")
    file_writer.write("This is the second line.\\n")
    file_writer.write("And a third line with some numbers: 12345.\\n")
    
    print("Content written to the file.")

except IOError as e:
    print(f"An error occurred during file writing: {e}")
finally:
    # It is CRUCIAL to close the file after you are done with it
    if 'file_writer' in locals() and not file_writer.closed:
        file_writer.close()
        print(f"File \rások{file_path}" closed after writing.")

# --- Reading from the file --- 
# Open the same file in read mode
try:
    file_reader = open(file_path, mode="r", encoding="utf-8")
    print(f"\\nFile \rások{file_path}" opened in read mode.")
    
    # Read content (more on reading methods in the next lesson)
    content = file_reader.read()
    print("\\nContent read from the file:")
    print(content)

except FileNotFoundError:
    print(f"Error: The file \rások{file_path}" was not found.")
except IOError as e:
    print(f"An error occurred during file reading: {e}")
finally:
    if 'file_reader' in locals() and not file_reader.closed:
        file_reader.close()
        print(f"File \rások{file_path}" closed after reading.")
\`\`\`

**The Importance of Closing Files: \`file_object.close()\`**

When you are finished reading from or writing to a file, you **must close it** using the \`close()\` method of the file object (e.g., \`file_object.close()\`).

**Why is closing files so important?**

1.  **Flushing Buffers**: When you write to a file, the data might not be written to the disk immediately. Instead, it might be stored in an internal buffer in memory for efficiency. Closing the file ensures that any buffered data is **flushed** (written) to the disk.
    If you don't close a file after writing, some or all of your data might be lost if the program terminates unexpectedly.

2.  **Releasing System Resources**: Opening a file consumes system resources (like file descriptors). Operating systems have a limit on the number of files a program can have open simultaneously. If you open many files without closing them, your program might eventually run out of these resources and fail.

3.  **Allowing Other Programs Access**: On some operating systems, an open file might be locked, preventing other programs (or even other parts of your own program) from accessing it until it's closed.

4.  **Ensuring Data Integrity**: For some file types or operations, closing the file finalizes its structure or metadata.

**The \`try...finally\` Block for Guaranteed Closing**

Because errors can occur during file operations (e.g., disk full, permissions issues), it's crucial to ensure that \`file.close()\` is called even if an exception happens. The \`try...finally\` block is the standard way to guarantee this:

\`\`\`python
try:
    f = open("mydata.txt", "w", encoding="utf-8")
    # Perform file operations (write, read, etc.)
    f.write("Some important data.\\n")
    # ... potentially more operations that could raise an error ...
except IOError as e:
    print(f"An I/O error occurred: {e}")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
finally:
    # This block is ALWAYS executed, whether an exception occurred or not.
    if 'f' in locals() and not f.closed:
        print("Closing file in finally block.")
        f.close()
    else:
        print("File was not opened or already closed.")
\`\`\`
This pattern ensures that if the file \`f\` was successfully opened, its \`close()\` method will be called, regardless of what happens in the \`try\` block.

**Checking if a File is Closed**

File objects have a \`closed\` attribute, which is a boolean indicating whether the file is closed.

\`\`\`python
f = open("temp.txt", "w")
print(f"Is file closed initially? {f.closed}") # Output: False
f.close()
print(f"Is file closed after calling close()? {f.closed}") # Output: True
\`\`\`

**The \`with\` Statement (Context Manager) - The Preferred Way**

While \`try...finally\` works, Python provides a more elegant and concise way to ensure files are automatically closed: the **\`with\` statement** (also known as a context manager).

The \`with\` statement handles the opening and, more importantly, the **automatic closing** of the file, even if errors occur within the \`with\` block.

**Syntax:**

\`\`\`python
with open(file_path, mode, encoding=None) as file_variable_name:
    # Perform operations on file_variable_name here
    # ...
# Once the 'with' block is exited (normally or due to an error),
# the file is AUTOMATICALLY closed.
\`\`\`

**Example using \`with\`:**

\`\`\`python
file_path_with = "example_with.txt"

# Writing using 'with'
try:
    with open(file_path_with, "w", encoding="utf-8") as f_writer:
        print(f"\\nFile \rások{file_path_with}" opened with 'with' for writing.")
        f_writer.write("This was written using the 'with' statement.\\n")
        f_writer.write("It ensures the file is closed automatically.\\n")
        # If an error occurs here, f_writer will still be closed.
    print(f"Finished writing. File \rások{file_path_with}" is now automatically closed.")
    # print(f"Is f_writer closed? {f_writer.closed}") # This would be True

except IOError as e:
    print(f"An error occurred during writing with 'with': {e}")

# Reading using 'with'
try:
    with open(file_path_with, "r", encoding="utf-8") as f_reader:
        print(f"\\nFile \rások{file_path_with}" opened with 'with' for reading.")
        content_with = f_reader.read()
        print("\\nContent read using 'with':")
        print(content_with)
    print(f"Finished reading. File \rások{file_path_with}" is now automatically closed.")

except FileNotFoundError:
    print(f"Error: The file \rások{file_path_with}" was not found.")
except IOError as e:
    print(f"An error occurred during reading with 'with': {e}")
\`\`\`

**Why \`with\` is Preferred:**

*   **Automatic Closing**: You don't need to explicitly call \`file.close()\`. Python guarantees it will be called.
*   **Cleaner Code**: It's more concise and readable than \`try...finally\` for file operations.
*   **Error Handling**: It correctly handles closing the file even if exceptions occur within the block.

**It is strongly recommended to always use the \`with\` statement when working with files in Python.**

**Conclusion**

Opening and closing files are the first essential steps in file I/O. The \`open()\` function is used to establish a connection to a file, specifying the path and mode. It's crucial to always close files using \`file.close()\` to ensure data is saved and resources are released.

The \`with\` statement provides the best practice for file handling in Python, as it automatically manages the closing of the file, making your code safer and cleaner. In the next lessons, we will explore the various methods available on file objects for reading data from and writing data to files.
`;export{e as default};
