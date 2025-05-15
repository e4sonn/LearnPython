const e=`# Module 9: Object-Oriented Programming (OOP) Basics - Lesson 7: Encapsulation (Public, Protected, Private Attributes - Conceptual)

Encapsulation is one of the fundamental principles of Object-Oriented Programming (OOP). It refers to the bundling of data (attributes) and the methods that operate on that data within a single unit, the class. A key aspect of encapsulation is **data hiding**, which means restricting direct access to an object's internal state (its attributes) from outside the object. Instead, access and modification of this state should ideally occur through a well-defined public interface (methods).

**Why is Encapsulation Important?**

1.  **Data Integrity**: By controlling access to an object's attributes, you can prevent them from being set to invalid or inconsistent states. Methods can include validation logic before modifying attributes.
2.  **Reduced Complexity (Abstraction)**: Users of a class (other parts of your code) only need to know about its public interface (the methods they can call). They don't need to worry about the internal implementation details or how the data is stored. This simplifies how objects are used.
3.  **Increased Flexibility and Maintainability**: The internal implementation of a class can be changed without affecting the code that uses the class, as long as the public interface remains the same. For example, you could change how an attribute is stored internally, but if the getter and setter methods behave the same way, external code won't break.
4.  **Modularity**: Encapsulated objects are self-contained units, making the system more modular and easier to manage.

**Access Modifiers in Python (Conceptual)**

Unlike languages like Java or C++, Python does not have strict keywords like \`public\`, \`private\`, or \`protected\` to enforce data hiding. Instead, Python relies on **naming conventions** to indicate the intended visibility of attributes and methods.

While these conventions don't prevent access, they serve as strong hints to other developers about how an attribute or method should be used.

**1. Public Attributes and Methods**

*   **Convention**: Attributes and methods that do not start with an underscore (\`_\`) are considered **public**. They are intended to be part of the class's public interface and can be freely accessed and modified from outside the class.
*   **Example**:
    \`\`\`python
    class PublicDemo:
        def __init__(self, name):
            self.name = name  # Public attribute
            self.value = 0    # Public attribute

        def display_name(self):
            # Public method
            print(f"Name: {self.name}")

        def increment_value(self):
            # Public method
            self.value += 1
            print(f"Value incremented to: {self.value}")

    pd = PublicDemo("MyObject")
    print(pd.name)         # Accessing public attribute
    pd.name = "NewName"    # Modifying public attribute
    pd.display_name()      # Calling public method
    pd.increment_value()
    \`\`\`
    All attributes and methods we've used in previous examples (like \`Dog.name\`, \`Car.start_engine()\`) were public by this convention.

**2. Protected Attributes and Methods (by Convention)**

*   **Convention**: Attributes and methods prefixed with a **single underscore** (e.g., \`_protected_attribute\`, \`_protected_method()\`) are considered **protected**. This is a hint to developers that these members are intended for internal use within the class or by its subclasses, and should not be accessed directly from outside the class hierarchy.
*   **No Strict Enforcement**: Python does *not* prevent access to these members from outside. It's a convention that relies on the programmer's discipline.
*   **Use Case**: Often used for internal helper methods or attributes that subclasses might need to access or override, but which are not part of the stable public API of the class.

    \`\`\`python
    class ProtectedDemo:
        def __init__(self, initial_value):
            self._count = initial_value  # "Protected" attribute
            self._log_message = "Initialization complete."

        def _internal_update(self, value_change):
            # "Protected" method for internal logic
            self._count += value_change
            self._log(f"Count updated by {value_change}")

        def _log(self, message):
            # Another "protected" helper
            print(f"LOG: {message} - Current count: {self._count}")

        def increment(self, amount=1):
            # Public method that uses internal protected methods/attributes
            if amount > 0:
                self._internal_update(amount)
            else:
                self._log("Increment amount must be positive.")

        def get_count(self):
            # Public getter for the protected attribute
            return self._count

    p_demo = ProtectedDemo(10)
    p_demo.increment(5)
    print(f"Current count via getter: {p_demo.get_count()}")

    # You CAN still access protected members, but it's against convention:
    print(f"Direct access to protected _count: {p_demo._count}") 
    p_demo._count = 0 # Bypassing any logic in methods
    p_demo._internal_update(100) # Calling protected method directly
    print(f"Count after direct manipulation: {p_demo.get_count()}")
    \`\`\`
    The single underscore signals: "Handle with care if you are outside this class or its subclasses."

**3. Private Attributes and Methods (Name Mangling)**

*   **Convention**: Attributes and methods prefixed with a **double underscore** (e.g., \`__private_attribute\`, \`__private_method()\`) but without a trailing double underscore, are subject to **name mangling** by the Python interpreter.
*   **Name Mangling**: Python changes the name of such an attribute to \`_ClassName__attributeName\`. For example, if a class \`MySecret\` has an attribute \`__data\`, it gets mangled to \`_MySecret__data\`.
*   **Purpose**: This is not about creating truly private members (as they can still be accessed if you know the mangled name). Its primary purpose is to **avoid accidental name clashes** with attributes of the same name defined in subclasses. It makes it harder to unintentionally override these "private" members in a subclass.

    \`\`\`python
    class PrivateDemo:
        def __init__(self, secret_code):
            self.__secret = secret_code  # "Private" attribute (will be mangled)
            self.public_info = "This is public."

        def __internal_process(self):
            # "Private" method (will be mangled)
            print(f"Processing internal secret: {self.__secret}")
            return f"Processed: {self.__secret.upper()}"

        def reveal_processed_secret(self):
            # Public method that uses the private method and attribute
            return self.__internal_process()

    priv_demo = PrivateDemo("Omega7")
    print(priv_demo.public_info)
    print(priv_demo.reveal_processed_secret())

    # Attempting to access directly using __secret will fail:
    # print(priv_demo.__secret)  # AttributeError: 'PrivateDemo' object has no attribute '__secret'

    # Accessing via the mangled name (discouraged, but shows it's not truly private):
    print(f"Accessing mangled attribute: {priv_demo._PrivateDemo__secret}")
    # priv_demo._PrivateDemo__internal_process() # Can also call mangled method

    # Example of how it avoids clashes in subclasses:
    class SubPrivateDemo(PrivateDemo):
        def __init__(self, secret_code, sub_secret):
            super().__init__(secret_code)
            self.__secret = sub_secret # This becomes _SubPrivateDemo__secret, different from parent's

        def show_secrets(self):
            print(f"Parent's secret (via mangled name): {self._PrivateDemo__secret}")
            print(f"Subclass's own secret: {self.__secret}") # Accesses _SubPrivateDemo__secret

    sub_demo = SubPrivateDemo("Alpha1", "Beta2")
    sub_demo.show_secrets()
    \`\`\`
    The main use of double underscores is to prevent subclasses from accidentally clobbering attributes/methods intended to be internal to the superclass.

**Special Dunder Methods (e.g., \`__init__\`, \`__str__\`)**

Names with leading and trailing double underscores (e.g., \`__init__\`, \`__str__\`, \`__add__\`) are special methods or "magic methods" in Python. They have predefined meanings and are invoked by Python under specific circumstances (e.g., \`__init__\` during instantiation, \`__str__\` when \`str()\` is called on an object). You don't typically call them directly using their dunder names (e.g., you do \`str(my_object)\` not \`my_object.__str__()\`). These are not intended for privacy but are part of Python's data model.

**Achieving Encapsulation: Getters and Setters (Properties)**

Since Python doesn't have strict private attributes, a common way to achieve better encapsulation and control access to an attribute's value is by:
1.  Making the attribute "protected" (e.g., \`_value\`).
2.  Providing public **getter** methods to retrieve the attribute's value.
3.  Providing public **setter** methods to modify the attribute's value, often including validation logic.

Python's \`@property\` decorator provides an elegant way to implement getters, setters, and deleters, making attribute access look natural while still using methods behind the scenes.

\`\`\`python
class Temperature:
    def __init__(self, celsius):
        # We want to control access to celsius, so we'll use a "protected" internal attribute
        # and a property for public access.
        self.celsius = celsius # This will actually call the setter method due to @celsius.setter

    @property
    def celsius(self): # This is the getter method for celsius
        """Gets the temperature in Celsius."""
        print("Getter for celsius called")
        return self._celsius 

    @celsius.setter
    def celsius(self, value): # This is the setter method for celsius
        """Sets the temperature in Celsius, with validation."""
        print(f"Setter for celsius called with value: {value}")
        if value < -273.15: # Absolute zero
            raise ValueError("Temperature below absolute zero is not possible.")
        self._celsius = value # Store in the internal "protected" attribute

    @property
    def fahrenheit(self): # A calculated property (getter only)
        """Gets the temperature in Fahrenheit (calculated from Celsius)."""
        print("Getter for fahrenheit called")
        return (self._celsius * 9/5) + 32

# Creating an instance
temp = Temperature(25) # Setter for celsius is called during __init__ via self.celsius = celsius

# Accessing via getter
print(f"Temperature in Celsius: {temp.celsius}")
print(f"Temperature in Fahrenheit: {temp.fahrenheit}")

# Modifying via setter (with validation)
temp.celsius = 30
print(f"New Celsius: {temp.celsius}")

# Attempting to set an invalid value
try:
    temp.celsius = -300
except ValueError as e:
    print(f"Error: {e}")

# Direct access to _celsius is still possible but discouraged
# temp._celsius = -500 
# print(temp.celsius) # Getter would still work, but validation was bypassed
\`\`\`
Properties allow you to expose attributes as if they were public, but with the control and logic of methods hidden underneath.

**Conclusion**

Encapsulation in Python is achieved more by convention and programmer discipline than by strict language enforcement. Naming conventions play a crucial role:

*   **Public (e.g., \`name\`)**: Freely accessible.
*   **Protected (e.g., \`_name\`)**: Intended for internal use or by subclasses; a hint not to use directly from outside.
*   **Private (e.g., \`__name\`)**: Subject to name mangling (\`_ClassName__name\`) to avoid clashes in inheritance; not for true privacy.

Using properties (\`@property\`, \`@name.setter\`) is a Pythonic way to manage attribute access, allowing for validation and computed attributes while maintaining a clean interface. Good encapsulation leads to more robust, maintainable, and understandable object-oriented code. This lesson concludes our basic exploration of OOP concepts in Module 9.
`;export{e as default};
