const e=`# Module 9: Object-Oriented Programming (OOP) Basics - Lesson 5: Class Attributes

In the previous lesson, we focused on instance attributes, which store data unique to each object (instance) of a class. Now, we turn our attention to **class attributes**. Class attributes are variables that are shared among all instances of a class. They belong to the class itself, rather than to any particular object.

**What are Class Attributes?**

*   **Definition**: A class attribute is defined directly within the class body, outside of any instance methods (including \`__init__\`), usually at the top of the class definition.
*   **Shared**: There is only one copy of a class attribute, and it is shared by all objects created from that class. If you change the value of a class attribute, that change is reflected across all instances (unless an instance has created its own instance attribute with the same name, which would shadow the class attribute for that specific instance).
*   **Access**: Class attributes can be accessed either through the class name itself (\`ClassName.attribute_name\`) or through an instance of the class (\`my_object.attribute_name\`). However, when assigning a value via an instance (\`my_object.attribute_name = value\`), you are actually creating a new *instance attribute* with that name for \`my_object\`, which shadows the class attribute; you are not modifying the class attribute itself through the instance in this way.

**Defining and Using Class Attributes**

Let's illustrate with an example:

\`\`\`python
class Employee:
    """Represents an employee in a company."""
    # These are class attributes:
    company_name = "Tech Solutions Inc." # Shared by all employees
    num_employees = 0                    # Tracks the total number of employees created

    def __init__(self, name, employee_id, department):
        """Initializes a new Employee object."""
        self.name = name                # Instance attribute
        self.employee_id = employee_id  # Instance attribute
        self.department = department    # Instance attribute
        
        # Increment the class attribute num_employees each time an instance is created
        Employee.num_employees += 1 
        print(f"Employee {self.name} created. Total employees: {Employee.num_employees}")

    def display_info(self):
        """Displays the employee's information."""
        print(f"--- Employee ID: {self.employee_id} ---")
        print(f"Name: {self.name}")
        print(f"Department: {self.department}")
        # Accessing class attribute via the class name or self
        print(f"Company: {Employee.company_name}") 
        # print(f"Company (via self): {self.company_name}") # Also works

# Accessing class attributes before creating any instances
print(f"Company Name (before instances): {Employee.company_name}")
print(f"Number of Employees (before instances): {Employee.num_employees}")

print("\\n--- Creating Employees ---")
emp1 = Employee("Alice Smith", "E1001", "Engineering")
emp2 = Employee("Bob Johnson", "E1002", "Marketing")
emp3 = Employee("Charlie Brown", "E1003", "Engineering")

print("\\n--- Displaying Employee Info ---")
emp1.display_info()
emp2.display_info()

# Accessing class attributes after creating instances
print(f"\\nCompany Name (after instances): {Employee.company_name}")
print(f"Total Number of Employees (after instances): {Employee.num_employees}")

# All instances share the same class attribute values
print(f"Emp1's company: {emp1.company_name}")
print(f"Emp2's company: {emp2.company_name}")

# Modifying a class attribute via the class name
print("\\n--- Changing Company Name ---")
Employee.company_name = "Innovative Tech Group"

# The change is reflected in all instances that haven't overridden it
print(f"Emp1's company (after change): {emp1.company_name}")
print(f"Emp3's company (after change): {emp3.company_name}")
emp3.display_info() # Will show the new company name

print(f"Total Number of Employees (final): {Employee.num_employees}")
\`\`\`

**Key Points from the Example:**

1.  \`company_name\` and \`num_employees\` are class attributes.
2.  \`num_employees\` is used as a counter that increments every time a new \`Employee\` object is created. We modify it using \`Employee.num_employees += 1\` within \`__init__\` to ensure we are changing the class attribute itself.
3.  All instances (\`emp1\`, \`emp2\`, \`emp3\`) share the \`company_name\`. When \`Employee.company_name\` is changed, this change is visible through all instances.

**Class Attributes vs. Instance Attributes**

| Feature             | Class Attribute                                     | Instance Attribute                                       |
|---------------------|-----------------------------------------------------|----------------------------------------------------------|
| **Definition**      | Inside class, outside methods                       | Typically inside \`__init__\` using \`self.attr = value\`    |
| **Scope**           | Belongs to the class                                | Belongs to a specific instance (object)                  |
| **Sharing**         | Shared by all instances of the class                | Each instance has its own copy                           |
| **Storage**         | One copy exists (part of the class object)          | Each instance stores its own values                      |
| **Access**          | \`ClassName.attr\` or \`instance.attr\` (for reading) | \`instance.attr\`                                          |
| **Modification (General)** | Best modified via \`ClassName.attr = new_val\`      | Modified via \`instance.attr = new_val\`                   |

**Shadowing Class Attributes with Instance Attributes**

If you assign a value to an attribute name on an *instance* that has the same name as a class attribute, you create a new *instance attribute* for that specific instance. This instance attribute **shadows** (hides) the class attribute for that instance only. The class attribute itself remains unchanged and is still accessible by other instances or by the class directly.

\`\`\`python
class MyClass:
    shared_value = 100

obj1 = MyClass()
obj2 = MyClass()

print(f"Initial values: obj1.shared_value = {obj1.shared_value}, obj2.shared_value = {obj2.shared_value}, MyClass.shared_value = {MyClass.shared_value}")
# Output: obj1.shared_value = 100, obj2.shared_value = 100, MyClass.shared_value = 100

# obj1 creates its OWN instance attribute named 'shared_value'
obj1.shared_value = 200 

print(f"After obj1.shared_value = 200:")
print(f"obj1.shared_value: {obj1.shared_value}")  # Output: 200 (accesses its own instance attribute)
print(f"obj2.shared_value: {obj2.shared_value}")  # Output: 100 (still accesses the class attribute)
print(f"MyClass.shared_value: {MyClass.shared_value}") # Output: 100 (class attribute is unchanged)

# Modifying the class attribute directly
MyClass.shared_value = 300

print(f"After MyClass.shared_value = 300:")
print(f"obj1.shared_value: {obj1.shared_value}")  # Output: 200 (obj1 still has its own instance attribute)
print(f"obj2.shared_value: {obj2.shared_value}")  # Output: 300 (obj2 now sees the new class attribute value)
print(f"MyClass.shared_value: {MyClass.shared_value}") # Output: 300
\`\`\`
This behavior is important to understand. When Python looks up \`instance.attribute\`, it first checks if \`instance\` has its own attribute with that name. If not, it then looks for a class attribute with that name in the instance's class (and then its parent classes, due to inheritance).

**When to Use Class Attributes**

Class attributes are useful in several scenarios:

1.  **Storing Constants**: For values that are constant for all instances of a class (e.g., \`Circle.pi\`, default configuration values).
    \`\`\`python
    class Configuration:
        DEFAULT_TIMEOUT = 30 # seconds
        MAX_RETRIES = 3
    \`\`\`

2.  **Tracking Shared State**: For data that needs to be shared or tracked across all instances, like a counter for the number of objects created (as in the \`Employee.num_employees\` example).

3.  **Defining Default Values**: Providing default values for attributes that instances might inherit or use if they don't define their own. However, be cautious if the class attribute is a mutable type (like a list or dictionary), as all instances will share and modify the *same* mutable object, which can lead to unexpected behavior. For mutable defaults for *instance* attributes, it's better to initialize them within \`__init__\` (e.g., \`self.my_list = []\`).

    \`\`\`python
    # Example of a potentially problematic mutable class attribute (if intended as instance default)
    class BadDefaults:
        options = [] # Class attribute (shared list)

        def add_option(self, option):
            self.options.append(option) # Modifies the shared class list

    # b1 = BadDefaults()
    # b2 = BadDefaults()
    # b1.add_option("A")
    # print(b2.options) # Output: ["A"] - b2 sees b1's change because options is shared

    # Correct way for mutable instance defaults:
    class GoodDefaults:
        def __init__(self):
            self.options = [] # Instance attribute, new list for each instance

        def add_option(self, option):
            self.options.append(option)
    \`\`\`

**Modifying Class Attributes**

As shown, the standard way to modify a class attribute is by using the class name: \`ClassName.attribute_name = new_value\`.

If you try to modify a class attribute through an instance (\`instance.class_attribute = new_value\`) and that attribute is immutable (like a number or string), you will end up creating an instance attribute that shadows the class attribute for that instance, as discussed.

If the class attribute is mutable (e.g., a list), and you modify it *in-place* through an instance (e.g., \`instance.class_list_attribute.append(item)\`), you are indeed modifying the shared class attribute because both the instance and the class are referring to the same list object in memory.

\`\`\`python
class ItemList:
    shared_tags = ["general"] # Mutable class attribute

item1 = ItemList()
item2 = ItemList()

# Modifying the shared list through item1
item1.shared_tags.append("important")

print(f"item1 tags: {item1.shared_tags}") # Output: ["general", "important"]
print(f"item2 tags: {item2.shared_tags}") # Output: ["general", "important"] (sees the change)
print(f"ItemList.shared_tags: {ItemList.shared_tags}") # Output: ["general", "important"]

# However, if you reassign the attribute on an instance:
item1.shared_tags = ["private"] # item1 now has its own instance attribute 'shared_tags'

print(f"\\nAfter item1.shared_tags = ["private"]:")
print(f"item1 tags: {item1.shared_tags}") # Output: ["private"]
print(f"item2 tags: {item2.shared_tags}") # Output: ["general", "important"] (still refers to class attribute)
print(f"ItemList.shared_tags: {ItemList.shared_tags}") # Output: ["general", "important"]
\`\`\`
This distinction is subtle but crucial when working with mutable class attributes.

**Conclusion**

Class attributes provide a way to define data that is associated with a class itself, rather than with individual instances. They are shared among all instances and are useful for storing constants, tracking shared state, or providing default values.

Understanding the difference between class attributes and instance attributes, how they are accessed, and how they can be modified (or shadowed) is key to effectively using object-oriented programming in Python. In the next lesson, we will explore different types of methods beyond instance methods, such as class methods and static methods.
`;export{e as default};
