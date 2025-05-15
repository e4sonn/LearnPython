const e=`# Module 9: Object-Oriented Programming (OOP) Basics - Lesson 2: Defining Classes (\`class\` keyword)

In the previous lesson, we introduced the core concepts of Object-Oriented Programming (OOP), with **classes** being the fundamental building blocks. A class serves as a blueprint for creating objects. Now, let's learn how to define classes in Python using the \`class\` keyword.

**The \`class\` Keyword**

In Python, you define a class using the \`class\` keyword, followed by the class name and a colon. The body of the class (containing attributes and methods) is indented below the class definition line.

**Syntax:**

\`\`\`python
class ClassName:
    # Class body: attributes and methods go here
    # (Docstring for the class should be the first statement)
    statement1
    statement2
    ...
\`\`\`

**Naming Conventions for Classes:**

By convention (PEP 8 style guide), class names in Python should use **CapWords** (also known as PascalCase or UpperCamelCase). This means each word in the name starts with a capital letter, and there are no underscores (e.g., \`MyClass\`, \`ElectricCar\`, \`UserProfile\`).

**A Simple Empty Class**

You can define a class with no attributes or methods using the \`pass\` statement as a placeholder in its body. While not very useful on its own, it's syntactically correct.

\`\`\`python
class Dog:
    """A simple class representing a dog."""
    pass # Indicates an empty block

# Now you can create instances (objects) of this Dog class
my_pet = Dog()       # my_pet is an object of the Dog class
another_pet = Dog()  # another_pet is another distinct Dog object

print(type(my_pet))    # Output: <class '__main__.Dog'> (or similar, depending on context)
print(my_pet)          # Output: <__main__.Dog object at 0x...> (memory address)
\`\`\`
Even this empty class allows us to create distinct objects. \`my_pet\` and \`another_pet\` are two separate instances of the \`Dog\` class.

**Defining Attributes within a Class**

Attributes are variables that store data associated with a class or its instances (objects).

**1. Class Attributes (or Static Attributes)**

*   A **class attribute** is shared by all instances (objects) of the class. It is defined directly inside the class definition, usually at the top, but outside of any methods.
*   If you change the value of a class attribute, that change is reflected in all instances of the class (unless an instance has overridden it with its own instance attribute of the same name).

\`\`\`python
class Circle:
    """A class representing a circle with a class attribute for pi."""
    pi = 3.14159  # This is a class attribute, shared by all Circle objects

    def __init__(self, radius):
        self.radius = radius # This is an instance attribute (more on __init__ and self later)

    def area(self):
        # We can access the class attribute using self.pi or Circle.pi
        return Circle.pi * (self.radius ** 2)
        # return self.pi * (self.radius ** 2) # Also works

# Accessing the class attribute via the class itself
print(f"Value of pi from Circle class: {Circle.pi}")

# Creating instances
circle1 = Circle(5)
circle2 = Circle(10)

# All instances share the same class attribute 'pi'
print(f"Pi for circle1: {circle1.pi}") # Output: 3.14159
print(f"Pi for circle2: {circle2.pi}") # Output: 3.14159

print(f"Area of circle1: {circle1.area():.2f}")

# Modifying the class attribute affects all instances that haven't overridden it
Circle.pi = 3.14 # Changed the class attribute
print(f"New pi for circle1 after class modification: {circle1.pi}") # Output: 3.14
print(f"New area of circle1: {circle1.area():.2f}")
\`\`\`

**2. Instance Attributes**

*   An **instance attribute** is specific to each object (instance) created from the class. Each object has its own copy of instance attributes, and their values can differ from one object to another.
*   Instance attributes are typically defined and initialized within a special method called the **constructor**, which in Python is \`__init__()\`.

**The \`__init__()\` Method (Constructor)**

*   The \`__init__()\` method is a special method (also called a "dunder" method, for double underscores) that Python calls automatically when you create a new instance of a class.
*   Its primary purpose is to initialize the instance attributes of the new object.
*   The first parameter of \`__init__()\` (and most other instance methods) is conventionally named \`self\`. This \`self\` parameter refers to the instance being created or acted upon.

\`\`\`python
class Student:
    """Represents a student with a name and ID."""
    school_name = "Python University" # Class attribute

    def __init__(self, name, student_id):
        """Initializes a new Student object."""
        # These are instance attributes, specific to each student object
        self.name = name
        self.student_id = student_id
        self.courses = [] # Each student starts with an empty list of courses
        print(f"Student object created for {self.name} (ID: {self.student_id})")

# Creating instances of the Student class
# When we call Student(...), Python automatically calls __init__ with the instance as 'self'
student_alice = Student("Alice Wonderland", "S1001")
student_bob = Student("Bob The Builder", "S1002")

# Accessing instance attributes
print(f"{student_alice.name} (ID: {student_alice.student_id}) attends {Student.school_name}")
print(f"{student_bob.name} (ID: {student_bob.student_id}) also attends {student_bob.school_name}") # Can access class attr via instance too

# Instance attributes are distinct for each object
student_alice.courses.append("Introduction to Python")
student_bob.courses.append("Data Structures")

print(f"Alice's courses: {student_alice.courses}") # Output: ["Introduction to Python"]
print(f"Bob's courses: {student_bob.courses}")     # Output: ["Data Structures"]
\`\`\`

**The \`self\` Parameter**

*   \`self\` is a conventional name for the first parameter of instance methods in a class, including \`__init__()\`.
*   It refers to the **instance itself**. When you call a method on an object (e.g., \`my_object.my_method(arg1, arg2)\`), Python automatically passes the object \`my_object\` as the first argument to the method (which corresponds to \`self\`).
*   Inside an instance method, you use \`self\` to access the instance's attributes (e.g., \`self.attribute_name\`) and other instance methods (e.g., \`self.another_method()\`).

You don't explicitly pass a value for \`self\` when calling methods on an instance; Python handles it for you.

**Defining Methods in a Class**

Methods are functions defined inside a class. They define the behaviors or actions that objects of the class can perform.

*   **Instance Methods**: These are the most common type of method. They operate on an instance of the class and have \`self\` as their first parameter, allowing them to access and modify instance attributes.

\`\`\`python
class Car:
    """A simple class representing a car."""
    def __init__(self, make, model, year, color="Black"):
        self.make = make
        self.model = model
        self.year = year
        self.color = color
        self.is_engine_on = False
        self.speed = 0

    # Instance method to display car information
    def display_info(self):
        """Prints the car's details."""
        print(f"--- Car Details ---")
        print(f"Make: {self.make}")
        print(f"Model: {self.model}")
        print(f"Year: {self.year}")
        print(f"Color: {self.color}")
        print(f"Engine Status: {'On' if self.is_engine_on else 'Off'}")
        print(f"Current Speed: {self.speed} mph")

    # Instance method to start the engine
    def start_engine(self):
        """Starts the car's engine."""
        if not self.is_engine_on:
            self.is_engine_on = True
            print(f"The {self.make} {self.model}'s engine has started.")
        else:
            print(f"The engine is already running.")

    # Instance method to stop the engine
    def stop_engine(self):
        """Stops the car's engine."""
        if self.is_engine_on:
            self.is_engine_on = False
            self.speed = 0 # Car stops when engine is off
            print(f"The {self.make} {self.model}'s engine has stopped.")
        else:
            print(f"The engine is already off.")

    # Instance method to accelerate
    def accelerate(self, amount):
        """Accelerates the car if the engine is on."""
        if self.is_engine_on:
            if amount > 0:
                self.speed += amount
                print(f"Accelerating. Current speed: {self.speed} mph.")
            else:
                print("Acceleration amount must be positive.")
        else:
            print("Cannot accelerate, engine is off.")

# Creating a Car object
my_car = Car("Toyota", "Camry", 2021, "Red")

# Calling instance methods
my_car.display_info()
my_car.start_engine()
my_car.accelerate(30)
my_car.accelerate(20)
my_car.display_info()
my_car.stop_engine()
my_car.display_info()
\`\`\`

**Docstrings for Classes and Methods**

Just like functions, classes and their methods should have docstrings as the first statement in their definition to explain their purpose and usage.

\`\`\`python
class Rectangle:
    """Represents a rectangle with a given width and height."""
    def __init__(self, width, height):
        """Initializes a Rectangle with specified width and height.

        Args:
            width (float or int): The width of the rectangle.
            height (float or int): The height of the rectangle.
        """
        self.width = width
        self.height = height

    def calculate_area(self):
        """Calculates and returns the area of the rectangle."""
        return self.width * self.height

    def calculate_perimeter(self):
        """Calculates and returns the perimeter of the rectangle."""
        return 2 * (self.width + self.height)
\`\`\`

**Conclusion**

Defining classes is the first step in Object-Oriented Programming in Python. The \`class\` keyword is used to create a blueprint.

Key takeaways:
*   Classes are defined using \`class ClassName: ...\`.
*   **Class attributes** are shared by all instances.
*   **Instance attributes** are specific to each object and are typically initialized in the \`__init__(self, ...)\` constructor method.
*   \`self\` refers to the instance of the class and is the first parameter of instance methods.
*   **Instance methods** define the behaviors of objects.

By defining classes, you can create custom data types that encapsulate both data (attributes) and behavior (methods), leading to more organized and modular code. In the next lessons, we will explore creating objects, working more with attributes and methods, and other OOP concepts like inheritance and encapsulation.
`;export{e as default};
