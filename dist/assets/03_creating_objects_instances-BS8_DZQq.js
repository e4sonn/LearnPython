const e=`# Module 9: Object-Oriented Programming (OOP) Basics - Lesson 3: Creating Objects (Instances)

Once you have defined a class (the blueprint), the next step in Object-Oriented Programming is to create **objects** from that class. An object is a concrete instance of a class, representing a specific entity with its own set of attribute values, while sharing the structure and behaviors (methods) defined by the class.

Creating objects is also known as **instantiation**.

**How to Create an Object (Instantiate a Class)**

In Python, you create an object by calling the class name as if it were a function, followed by parentheses \`()\`.

**Syntax:**

\`\`\`python
object_variable = ClassName(arguments_for___init__)
\`\`\`

Let's break this down:

1.  **\`ClassName\`**: This is the name of the class you want to instantiate.
2.  **\`()\`**: The parentheses are essential. If the class's \`__init__\` method (the constructor) expects arguments (other than \`self\`), you must provide those arguments within these parentheses.
3.  **\`object_variable\`**: This is the variable that will hold a reference to the newly created object in memory.

When you call \`ClassName(...)\`:
*   Python first creates a new, empty object of that class type.
*   Then, Python automatically calls the class's \`__init__(self, ...)\` method. The newly created object is passed as the \`self\` argument to \`__init__\`, and any arguments you provided in the parentheses are passed as the subsequent arguments to \`__init__\`.
*   The \`__init__\` method then typically initializes the instance attributes of this new object (\`self\`).
*   Finally, the \`ClassName(...)\` call returns the newly created and initialized object, which is then assigned to \`object_variable\`.

**Example: Creating Objects from a Simple Class**

Let's use a \`Dog\` class we might have defined previously:

\`\`\`python
class Dog:
    """Represents a dog with a name and breed."""
    # Class attribute
    species = "Canis familiaris"

    def __init__(self, name, breed, age):
        """Initializes a new Dog object."""
        self.name = name      # Instance attribute
        self.breed = breed    # Instance attribute
        self.age = age        # Instance attribute
        self.is_sitting = False
        print(f"Dog object \rások{self.name}" created!")

    def bark(self):
        """Makes the dog bark."""
        return f"{self.name} says: Woof! Woof!"

    def sit(self):
        """Commands the dog to sit."""
        if not self.is_sitting:
            self.is_sitting = True
            print(f"{self.name} is now sitting.")
        else:
            print(f"{self.name} is already sitting.")

    def stand(self):
        """Commands the dog to stand."""
        if self.is_sitting:
            self.is_sitting = False
            print(f"{self.name} is now standing.")
        else:
            print(f"{self.name} is already standing.")

# --- Creating Dog Objects ---

# Instantiate the first Dog object
# When Dog("Buddy", "Golden Retriever", 3) is called:
# 1. A new Dog object is created.
# 2. __init__(new_dog_object, "Buddy", "Golden Retriever", 3) is called.
#    - self.name becomes "Buddy"
#    - self.breed becomes "Golden Retriever"
#    - self.age becomes 3
# 3. The new_dog_object is returned and assigned to dog1.
dog1 = Dog("Buddy", "Golden Retriever", 3)

# Instantiate a second Dog object
dog2 = Dog("Lucy", "Poodle", 5)

# Instantiate a third Dog object
dog3 = Dog("Max", "German Shepherd", 2)

print("\\n--- Interacting with Dog Objects ---")

# Each object is distinct and has its own attributes
print(f"{dog1.name} is a {dog1.age}-year-old {dog1.breed}.")
print(f"{dog2.name} is a {dog2.age}-year-old {dog2.breed}.")

# All objects share class attributes
print(f"{dog1.name} belongs to the species: {dog1.species}") # Accessing class attribute via instance
print(f"{dog2.name} also belongs to: {Dog.species}")       # Accessing class attribute via class

# Calling methods on objects
print(dog1.bark())
print(dog2.bark())

dog1.sit()
dog2.stand() # Lucy is already standing by default
dog2.sit()
dog1.stand()

# Verify their states are independent
print(f"Is Buddy ({dog1.name}) sitting? {dog1.is_sitting}")
print(f"Is Lucy ({dog2.name}) sitting? {dog2.is_sitting}")
\`\`\`

**Output of the example:**

\`\`\`
Dog object Buddy created!
Dog object Lucy created!
Dog object Max created!

--- Interacting with Dog Objects ---
Buddy is a 3-year-old Golden Retriever.
Lucy is a 5-year-old Poodle.
Buddy belongs to the species: Canis familiaris
Lucy also belongs to: Canis familiaris
Buddy says: Woof! Woof!
Lucy says: Woof! Woof!
Buddy is now sitting.
Lucy is already standing.
Lucy is now sitting.
Buddy is now standing.
Is Buddy (Buddy) sitting? False
Is Lucy (Lucy) sitting? True
\`\`\`

**Key Observations from the Example:**

1.  **Constructor Call**: \`Dog("Buddy", "Golden Retriever", 3)\` is the instantiation call. The arguments provided here are passed to the \`__init__\` method (after \`self\`).
2.  **Distinct Objects**: \`dog1\`, \`dog2\`, and \`dog3\` are separate objects in memory. Modifying an attribute or state of \`dog1\` (like \`dog1.is_sitting\`) does not affect \`dog2\` or \`dog3\`.
3.  **Accessing Attributes**: You access an object's instance attributes using dot notation: \`object_variable.attribute_name\` (e.g., \`dog1.name\`).
4.  **Calling Methods**: You call an object's instance methods using dot notation: \`object_variable.method_name(arguments)\` (e.g., \`dog1.bark()\`, \`dog1.sit()\`). Python automatically passes the object \`dog1\` as the \`self\` argument to these methods.

**Objects Without an Explicit \`__init__\` Method**

If a class definition does not include an \`__init__\` method, Python provides a default one that does nothing. You can still create instances of such a class, but they won't have any instance attributes pre-initialized by a custom constructor.

\`\`\`python
class EmptyBox:
    """A class with no explicit __init__ method."""
    pass

box1 = EmptyBox() # Creates an instance using the default __init__

# You can add attributes to an instance dynamically (though generally less common for initial setup)
box1.color = "red"
box1.size = "large"

print(f"Box1 color: {box1.color}, Box1 size: {box1.size}")

box2 = EmptyBox()
# print(box2.color) # This would raise an AttributeError because box2 doesn't have a color attribute yet
\`\`\`
While dynamic attribute assignment is possible, it's usually better practice to define and initialize all expected instance attributes within the \`__init__\` method for clarity and consistency.

**The \`type()\` of an Object**

The \`type()\` built-in function can be used to determine the class (type) of an object.

\`\`\`python
print(f"Type of dog1: {type(dog1)}") # Output: <class '__main__.Dog'>
print(f"Type of box1: {type(box1)}") # Output: <class '__main__.EmptyBox'>
\`\`\`
This confirms that \`dog1\` is an object of the \`Dog\` class.

**Objects are First-Class Citizens in Python**

This means that objects (instances of classes) can be:
*   Assigned to variables (e.g., \`my_dog = Dog(...)\`).
*   Passed as arguments to functions.
*   Returned from functions.
*   Stored in data structures like lists and dictionaries.

\`\`\`python
def process_dog_object(any_dog_object):
    print(f"Processing dog: {any_dog_object.name}")
    print(any_dog_object.bark())

process_dog_object(dog1)

dog_kennel = [dog1, dog2, dog3]
for dog_in_kennel in dog_kennel:
    print(f"In kennel: {dog_in_kennel.name} the {dog_in_kennel.breed}")
\`\`\`

**Conclusion**

Creating objects (instances) is the process of bringing your class blueprints to life. By calling the class name with appropriate arguments for its \`__init__\` constructor, you create distinct objects in memory, each with its own set of instance attributes but sharing the methods and class attributes defined by the class.

Understanding how to instantiate classes and interact with the resulting objects by accessing their attributes and calling their methods is fundamental to working with Object-Oriented Programming in Python. In the next lessons, we will delve deeper into instance attributes, class attributes, and the various types of methods you can define within a class.
`;export{e as default};
