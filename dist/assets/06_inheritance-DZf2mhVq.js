const e=`# Module 9: Object-Oriented Programming (OOP) Basics - Lesson 6: Inheritance (Basic Concept and Syntax)

One of the most powerful features of Object-Oriented Programming (OOP) is **inheritance**. Inheritance allows you to create new classes (called **subclasses** or **derived classes**) that reuse, extend, and modify the behavior defined in existing classes (called **superclasses**, **base classes**, or **parent classes**).

This mechanism promotes code reusability and helps create a logical hierarchy of classes, often modeling an "is-a" relationship (e.g., a \`Dog\` is an \`Animal\`, a \`Sedan\` is a \`Car\`).

**What is Inheritance?**

Inheritance is the process by which one class takes on the attributes and methods of another class. The new class (subclass) inherits these members from the existing class (superclass).

*   **Code Reusability**: Instead of writing the same code in multiple classes, you can define common attributes and methods in a superclass, and all its subclasses will automatically have them.
*   **Extensibility**: Subclasses can add new attributes and methods that are specific to them, extending the functionality of the superclass.
*   **Specialization/Overriding**: Subclasses can also modify or **override** methods inherited from the superclass to provide a more specialized behavior for their specific type.

**Syntax for Inheritance in Python**

To make a class inherit from another class, you specify the superclass name in parentheses after the subclass name in its definition:

\`\`\`python
class SuperclassName:
    # Attributes and methods of the superclass
    pass

class SubclassName(SuperclassName):
    # Subclass inherits attributes and methods from SuperclassName
    # It can also add its own attributes and methods, or override inherited ones.
    pass
\`\`\`

**Example: A Basic Animal Hierarchy**

Let's create a simple hierarchy of animals to demonstrate inheritance.

**1. Define the Superclass (Base Class): \`Animal\`**

\`\`\`python
class Animal:
    """Represents a generic animal."""
    def __init__(self, name, species, age):
        """Initializes a new Animal object."""
        self.name = name
        self.species = species
        self.age = age
        print(f"Animal object \rások{self.name}" of species \rások{self.species}" created.")

    def eat(self, food="food"):
        """Makes the animal eat."""
        print(f"{self.name} the {self.species} is eating {food}.")

    def sleep(self):
        """Makes the animal sleep."""
        print(f"{self.name} the {self.species} is sleeping. Zzz...")

    def make_sound(self):
        """Makes a generic animal sound."""
        print(f"{self.name} the {self.species} makes a generic sound.")

# Create an instance of the base class
generic_animal = Animal("Creature", "Unknown", 1)
generic_animal.eat("berries")
generic_animal.make_sound()
\`\`\`

**2. Define Subclasses that Inherit from \`Animal\`**

Now, let's create more specific animal types like \`Dog\` and \`Cat\` that inherit from \`Animal\`.

\`\`\`python
class Dog(Animal): # Dog inherits from Animal
    """Represents a dog, which is a type of Animal."""
    def __init__(self, name, age, breed):
        """Initializes a new Dog object."""
        # Call the __init__ method of the superclass (Animal)
        # to initialize common attributes (name, species, age).
        # We explicitly set species to "Dog" for this subclass.
        super().__init__(name, species="Dog", age=age) 
        self.breed = breed # Add an attribute specific to Dog
        print(f"Dog object \rások{self.name}" of breed \rások{self.breed}" also created.")

    # Override the make_sound method from the Animal class
    def make_sound(self):
        """Makes the dog bark."""
        print(f"{self.name} the Dog barks: Woof! Woof!")

    # Add a new method specific to Dog
    def fetch(self, item="ball"):
        """Makes the dog fetch an item."""
        print(f"{self.name} the Dog fetches the {item}!")

class Cat(Animal): # Cat inherits from Animal
    """Represents a cat, which is a type of Animal."""
    def __init__(self, name, age, color):
        super().__init__(name, species="Cat", age=age)
        self.color = color # Attribute specific to Cat
        print(f"Cat object \rások{self.name}" of color \rások{self.color}" also created.")

    # Override make_sound
    def make_sound(self):
        print(f"{self.name} the Cat meows: Meow!")

    # New method for Cat
    def purr(self):
        print(f"{self.name} the Cat is purring... Prrr...")

# --- Creating and Using Subclass Objects ---
print("\\n--- Creating a Dog ---")
dog_buddy = Dog("Buddy", 3, "Golden Retriever")

print("\\n--- Creating a Cat ---")
cat_whiskers = Cat("Whiskers", 5, "Gray")

print("\\n--- Dog Actions ---")
dog_buddy.eat("dog food")  # Inherited from Animal
dog_buddy.sleep()        # Inherited from Animal
dog_buddy.make_sound()   # Overridden in Dog
dog_buddy.fetch("stick")  # Specific to Dog

print("\\n--- Cat Actions ---")
cat_whiskers.eat("fish")     # Inherited from Animal
cat_whiskers.make_sound()  # Overridden in Cat
cat_whiskers.purr()        # Specific to Cat
\`\`\`

**Key Concepts Demonstrated:**

1.  **Inheriting Attributes and Methods**: \`Dog\` and \`Cat\` objects can use the \`eat()\` and \`sleep()\` methods defined in the \`Animal\` class because they inherit them.

2.  **The \`super()\` Function**: Inside the \`__init__\` method of a subclass, \`super().__init__(...)\` is used to call the \`__init__\` method of the superclass. This is crucial for ensuring that the initialization logic defined in the superclass (like setting \`self.name\`, \`self.species\`, \`self.age\`) is executed for the subclass instance as well. \`super()\` provides a way to access methods of a parent class from within a child class.

3.  **Adding New Attributes and Methods**: Subclasses can define their own attributes (e.g., \`Dog\` has \`self.breed\`, \`Cat\` has \`self.color\`) and methods (e.g., \`Dog\` has \`fetch()\`, \`Cat\` has \`purr()\`) that are not present in the superclass.

4.  **Method Overriding**: Both \`Dog\` and \`Cat\` provide their own specific implementation of the \`make_sound()\` method. When \`dog_buddy.make_sound()\` is called, the \`Dog\` class's version is executed, not the \`Animal\` class's version. This is called **method overriding**. The subclass provides a specialized version of a method that is already defined in its superclass.

**The "is-a" Relationship**

Inheritance models an "is-a" relationship. A \`Dog\` **is an** \`Animal\`. A \`Cat\` **is an** \`Animal\`. This means that an object of a subclass can be treated as an object of its superclass type in many contexts (this relates to polymorphism, which we touched on earlier).

\`\`\`python
def describe_animal(animal_instance):
    # This function expects an Animal object (or any object that behaves like one)
    print(f"\\nDescribing: {animal_instance.name} the {animal_instance.species}")
    animal_instance.make_sound() # Calls the specific version for Dog or Cat

describe_animal(generic_animal)
describe_animal(dog_buddy) # A Dog object can be passed where an Animal is expected
describe_animal(cat_whiskers) # A Cat object can also be passed
\`\`\`

**Benefits of Inheritance**

*   **Reduces Code Duplication**: Common code is written once in the superclass.
*   **Improves Code Organization**: Creates a clear hierarchy and relationship between classes.
*   **Enhances Readability**: Makes it easier to understand the structure and capabilities of different classes.
*   **Facilitates Maintenance**: Changes to common functionality can be made in one place (the superclass).
*   **Supports Polymorphism**: Allows objects of different subclasses to be treated uniformly through their common superclass interface.

**Things to Consider with Inheritance**

*   **Complexity**: Deep or overly complex inheritance hierarchies can sometimes become hard to manage and understand.
*   **Tight Coupling**: Subclasses are tightly coupled to their superclasses. Changes in a superclass can potentially affect all its subclasses.
*   **"is-a" vs. "has-a"**: Inheritance is appropriate for "is-a" relationships. For "has-a" relationships (e.g., a \`Car\` **has an** \`Engine\`), **composition** (where a class contains an instance of another class as an attribute) is often a better design choice.

**Python and Multiple Inheritance (Brief Mention)**

Python also supports **multiple inheritance**, where a class can inherit from more than one superclass:

\`\`\`python
class A:
    def method_a(self):
        print("Method A")

class B:
    def method_b(self):
        print("Method B")

class C(A, B): # Inherits from both A and B
    pass

obj_c = C()
obj_c.method_a() # Accesses method from A
obj_c.method_b() # Accesses method from B
\`\`\`
Multiple inheritance can be powerful but also introduces complexity, particularly regarding how methods are resolved if multiple parent classes define a method with the same name (this is handled by Python's Method Resolution Order or MRO). It should be used judiciously.

**Conclusion**

Inheritance is a cornerstone of OOP that allows for the creation of hierarchical class structures, promoting code reuse and specialization. By defining superclasses with common attributes and methods, and then creating subclasses that inherit and extend this functionality, you can build more organized, maintainable, and flexible software.

Understanding how to define subclasses, use \`super()\` to call parent class methods (especially \`__init__\`), override methods, and add new functionality is key to leveraging the power of inheritance in Python. In the next lesson, we will explore encapsulation in more detail, focusing on how Python handles access control for attributes.
`;export{e as default};
