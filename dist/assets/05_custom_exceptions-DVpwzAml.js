const e=`# Module 11: Error and Exception Handling - Lesson 5: Custom Exceptions (User-defined Exceptions)

While Python provides a rich hierarchy of built-in exceptions that cover many common error scenarios, there are times when these generic exceptions might not be specific enough to describe errors particular to your application or library. In such cases, you can create **custom exceptions** (also known as user-defined exceptions) by defining your own exception classes.

**Why Create Custom Exceptions?**

1.  **Improved Clarity and Specificity**: Custom exceptions can make your error handling code more readable and understandable. Instead of catching a generic \`ValueError\` or \`RuntimeError\`, you can catch an exception like \`InvalidUserDataError\` or \`PaymentProcessingFailedError\`, which immediately tells another developer (or your future self) what kind of problem occurred.
2.  **Granular Error Handling**: Callers of your code can choose to handle specific custom exceptions differently. For example, a \`NetworkTimeoutError\` might be handled by retrying the operation, while a \`ConfigurationNotFoundError\` might cause the program to terminate with a specific message.
3.  **Adding Extra Information**: You can add custom attributes and methods to your exception classes to carry more context-specific information about the error, beyond just an error message. For instance, an \`InvalidProductCodeError\` could store the invalid product code that was attempted.
4.  **Organizing Error Types**: For larger applications or libraries, custom exceptions help in creating a well-defined hierarchy of error types specific to your domain.

**How to Define Custom Exceptions**

Custom exceptions are created by defining new classes that inherit (directly or indirectly) from Python's base \`Exception\` class or one of its more specific subclasses (like \`ValueError\`, \`TypeError\`, etc.).

**Basic Syntax:**

\`\`\`python
class MyCustomError(Exception):
    """A base class for custom errors in my module."""
    pass # Simplest form, inherits behavior from Exception

class SpecificErrorA(MyCustomError):
    """A specific type of error related to MyCustomError."""
    def __init__(self, message, error_code=None):
        super().__init__(message) # Call the base Exception constructor with the message
        self.error_code = error_code # Add a custom attribute
        # The message is automatically stored in self.args by the base Exception class

class SpecificErrorB(MyCustomError):
    """Another specific error."""
    pass
\`\`\`

**Key Points for Defining Custom Exceptions:**

*   **Inherit from \`Exception\` (or a subclass)**: This is crucial. It ensures that your custom class behaves like an exception and can be caught by \`except\` clauses.
    *   Inheriting directly from \`Exception\` is common for general application-level errors.
    *   You might inherit from a more specific built-in exception (e.g., \`ValueError\`, \`IOError\`) if your custom error is a specialized version of that type of error. For example, \`class InvalidEmailFormatError(ValueError): pass\`.
*   **Naming Convention**: End your custom exception class names with \`Error\` (e.g., \`DataValidationError\`, \`NetworkConnectionError\`). This is a widely followed convention.
*   **Docstrings**: Include a clear docstring explaining what the exception represents.
*   **The \`__init__\` Method (Optional but Common)**:
    *   You can override the \`__init__\` method to customize how your exception is initialized, for example, to accept additional arguments that provide more context about the error.
    *   It's good practice to call \`super().__init__(message_string, ...)\` within your custom \`__init__\` to ensure the base \`Exception\` class is properly initialized. The arguments passed to \`super().__init__\` will be available in the \`args\` attribute of the exception instance.
    *   You can then add your own custom attributes (e.g., \`self.error_code = code\`).
*   **No Need for Complex Logic**: Exception classes are usually simple. Their main purpose is to exist as distinct types that can be raised and caught.

**Example: Creating and Using Custom Exceptions**

Let's imagine we are building a user registration system and want to define custom exceptions for validation errors.

\`\`\`python
# --- Define Custom Exceptions ---
class UserRegistrationError(Exception):
    """Base class for errors related to user registration."""
    pass

class InvalidUsernameError(UserRegistrationError):
    """Raised when the username is invalid (e.g., too short, invalid characters)."""
    def __init__(self, username, message="Invalid username provided."):
        self.username = username
        self.message = message
        super().__init__(f"{message} Username: \rások{username}"")

class InvalidPasswordError(UserRegistrationError):
    """Raised when the password does not meet complexity requirements."""
    def __init__(self, reason, message="Password does not meet requirements."):
        self.reason = reason
        self.message = message
        super().__init__(f"{message} Reason: {reason}")

class EmailAlreadyExistsError(UserRegistrationError):
    """Raised when a user tries to register with an email that already exists."""
    def __init__(self, email, message="This email address is already registered."):
        self.email = email
        self.message = message
        super().__init__(f"{message} Email: {email}")

# --- Function that might raise these custom exceptions ---
# (Simulated existing users database)
existing_users_db = {"test@example.com": "user123"}

def register_user(username, password, email):
    print(f"\\nAttempting to register user: {username}, email: {email}")
    
    # Username validation
    if not username or len(username) < 3:
        raise InvalidUsernameError(username, "Username must be at least 3 characters long.")
    if not username.isalnum(): # Check if all characters are alphanumeric
        raise InvalidUsernameError(username, "Username can only contain letters and numbers.")
    
    # Password validation
    if len(password) < 8:
        raise InvalidPasswordError("Password must be at least 8 characters long.")
    if not any(char.isdigit() for char in password) or not any(char.isalpha() for char in password):
        raise InvalidPasswordError("Password must contain both letters and numbers.")
        
    # Email validation (simplified)
    if email in existing_users_db:
        raise EmailAlreadyExistsError(email)
    
    # If all validations pass (simulated)
    print(f"User \rások{username}" registered successfully with email \rások{email}".")
    existing_users_db[email] = username # Add to our mock DB
    return True

# --- Handling Custom Exceptions ---
try:
    register_user("usr", "pass123", "new@example.com") # Invalid username (too short)
except InvalidUsernameError as iue:
    print(f"Registration Error: {iue}")
    print(f"Problematic username was: {iue.username}")
except InvalidPasswordError as ipe:
    print(f"Registration Error: {ipe}")
    print(f"Reason for password failure: {ipe.reason}")
except EmailAlreadyExistsError as eaee:
    print(f"Registration Error: {eaee}")
    print(f"Email that already exists: {eaee.email}")
except UserRegistrationError as ure: # Catch any other UserRegistrationError
    print(f"A general user registration error occurred: {ure}")
except Exception as e:
    print(f"An unexpected error occurred: {e}")

print("--- Second registration attempt ---")
try:
    register_user("validUser1", "short", "another@example.com") # Invalid password
except UserRegistrationError as ure:
    print(f"Registration Error: {ure}")
    if isinstance(ure, InvalidPasswordError):
        print(f"(Password specific issue: {ure.reason})")

print("--- Third registration attempt ---")
try:
    register_user("anotherUser", "ValidPass123", "test@example.com") # Email exists
except UserRegistrationError as ure:
    print(f"Registration Error: {ure}")

print("--- Fourth registration attempt (successful) ---")
try:
    register_user("GoodUser", "SecurePass99", "unique@example.com")
except UserRegistrationError as ure:
    print(f"Registration Error: {ure}")
\`\`\`

**Benefits Shown in the Example:**

*   **Clarity**: \`except InvalidUsernameError:\` is much clearer than \`except ValueError:\`. The code immediately communicates the nature of the error being handled.
*   **Specific Handling**: We can provide different user feedback or recovery logic based on the specific type of \`UserRegistrationError\` that occurred.
*   **Accessing Custom Attributes**: We can access attributes like \`iue.username\` or \`ipe.reason\` from the caught exception object to provide more detailed error messages or to use in logging.
*   **Hierarchy**: \`InvalidUsernameError\`, \`InvalidPasswordError\`, and \`EmailAlreadyExistsError\` all inherit from \`UserRegistrationError\`. This means you can have a more general \`except UserRegistrationError:\` block to catch any of these if you don't need to handle them individually, or if you want a fallback handler.

**Best Practices for Custom Exceptions:**

1.  **Be Specific but Not Too Granular**: Create custom exceptions when they genuinely represent a distinct error condition that might need to be handled differently or provides important contextual information. Avoid creating too many trivial custom exceptions.
2.  **Create a Base Custom Exception**: If you are creating several related custom exceptions for a module or application, it's good practice to create a common base class for them (like \`UserRegistrationError\` in the example). This allows users of your code to catch all your module-specific errors with a single \`except YourModuleBaseError:\` if they wish.
3.  **Provide Useful Information**: If your exception needs more context than a simple message, add attributes in the \`__init__\` method. Ensure the error message itself (passed to \`super().__init__\`) is informative.
4.  **Document Them**: Clearly document your custom exceptions, what they mean, and when they might be raised. This is crucial for anyone using your code.
5.  **Don't Suppress Built-in Exceptions Unnecessarily**: If a built-in exception like \`ValueError\` or \`TypeError\` accurately describes the error, it might be fine to let it propagate or to catch and re-raise it with more context, rather than always creating a custom one.
6.  **Consider the Caller**: Think about how the code calling your function will handle these exceptions. Will they need to differentiate between \`ErrorA\` and \`ErrorB\`? If so, separate custom exceptions are justified.

**Conclusion**

Custom exceptions are a powerful tool for making your Python programs more robust, readable, and maintainable. By defining your own exception classes that inherit from \`Exception\` or its subclasses, you can signal specific error conditions relevant to your application domain, allowing for more precise and informative error handling.

This lesson concludes our module on Error and Exception Handling. You now have the tools to understand, catch, raise, and define exceptions, which are fundamental skills for writing professional Python code.
`;export{e as default};
