const e=`# Module 9: Object-Oriented Programming (OOP) Basics - Lesson 4: Instance Attributes and Methods

In our previous lessons on OOP, we learned how to define classes and create objects (instances) from them. We also touched upon attributes and methods, particularly the \`__init__\` method for initializing instance attributes. This lesson will delve deeper into **instance attributes** and **instance methods**, which are fundamental to defining the state and behavior of individual objects.

**What are Instance Attributes?**

**Instance attributes** are variables that belong to a specific instance of a class. Each object created from the class has its own distinct copy of these attributes, and the values of these attributes can differ from one object to another. They represent the unique state or data of an individual object.

*   **Definition**: Instance attributes are typically defined and initialized within the \`__init__()\` constructor method of a class. Inside \`__init__()\` (and other instance methods), you use \`self.attribute_name = value\` to create and assign a value to an instance attribute.
*   **Access**: They are accessed using dot notation on an instance: \`my_object.attribute_name\`.
*   **Uniqueness**: Each object maintains its own values for its instance attributes. Changing an instance attribute for one object does not affect any other object of the same class.

**Revisiting \`__init__()\` and Instance Attributes**

The \`__init__()\` method is the primary place to establish the initial state of an object by setting its instance attributes.

\`\`\`python
class Book:
    """Represents a book with a title, author, and ISBN."""
    def __init__(self, title, author, isbn, pages):
        """Initializes a new Book object."""
        # These are instance attributes:
        self.title = title
        self.author = author
        self.isbn = isbn
        self.pages = pages
        self.current_page = 1 # Default initial state for an instance attribute
        self.is_open = False    # Another default state

        print(f"Book created: \rások{self.title}" by {self.author}")

# Creating instances of Book
book1 = Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "978-0345391803", 224)
book2 = Book("1984", "George Orwell", "978-0451524935", 328)

# Accessing and printing instance attributes
print(f"\\n--- Book 1 Details ---")
print(f"Title: {book1.title}")
print(f"Author: {book1.author}")
print(f"ISBN: {book1.isbn}")
print(f"Pages: {book1.pages}")
print(f"Currently on page: {book1.current_page}")
print(f"Is the book open? {book1.is_open}")

print(f"\\n--- Book 2 Details ---")
print(f"Title: {book2.title}") # Different value from book1.title
print(f"Author: {book2.author}")

# Modifying an instance attribute for one object does not affect the other
book1.current_page = 50
book1.is_open = True

print(f"\\n--- Book 1 Updated ---")
print(f"Book 1 current page: {book1.current_page}") # Changed to 50
print(f"Book 1 is open: {book1.is_open}")       # Changed to True

print(f"\\n--- Book 2 Unchanged ---")
print(f"Book 2 current page: {book2.current_page}") # Still 1 (its own distinct attribute)
print(f"Book 2 is open: {book2.is_open}")       # Still False
\`\`\`
In this example, \`title\`, \`author\`, \`isbn\`, \`pages\`, \`current_page\`, and \`is_open\` are all instance attributes. Each \`Book\` object (\`book1\`, \`book2\`) has its own set of these attributes.

**What are Instance Methods?**

**Instance methods** are functions defined inside a class that operate on instances (objects) of that class. They define the behaviors or actions that an object can perform. The defining characteristic of an instance method is that its first parameter is always \`self\`, which refers to the instance calling the method.

*   **Definition**: Defined like regular functions within the class body, but with \`self\` as the first parameter.
*   **Purpose**: To access or modify the instance attributes of the object (\`self\`), or to perform some action related to the object's state.
*   **Calling**: You call an instance method on an object using dot notation: \`my_object.method_name(arguments)\`.

**Defining and Using Instance Methods**

Let's extend our \`Book\` class with some instance methods:

\`\`\`python
class Book:
    """Represents a book with a title, author, and ISBN."""
    def __init__(self, title, author, isbn, pages):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.pages = pages
        self.current_page = 1
        self.is_open = False
        print(f"Book created: \rások{self.title}" by {self.author}")

    # Instance method to open the book
    def open_book(self):
        """Opens the book if it is closed."""
        if not self.is_open:
            self.is_open = True
            print(f"\\"\rások{self.title}\\" has been opened.")
        else:
            print(f"\\"\rások{self.title}\\" is already open.")

    # Instance method to close the book
    def close_book(self):
        """Closes the book if it is open."""
        if self.is_open:
            self.is_open = False
            print(f"\\"\rások{self.title}\\" has been closed.")
        else:
            print(f"\\"\rások{self.title}\\" is already closed.")

    # Instance method to turn a page
    def turn_page(self, num_pages=1):
        """Turns a specified number of pages if the book is open."""
        if self.is_open:
            if self.current_page + num_pages <= self.pages and self.current_page + num_pages > 0:
                self.current_page += num_pages
                print(f"Turned {num_pages} page(s). Now on page {self.current_page} of \rások{self.title}".")
            elif self.current_page + num_pages > self.pages:
                print(f"Cannot turn {num_pages} page(s). Reached the end of the book (page {self.pages}).")
                self.current_page = self.pages # Go to last page
            else: # Trying to turn back past page 1
                print(f"Cannot turn back {abs(num_pages)} page(s). Already at or before page 1.")
                self.current_page = 1 # Go to first page
        else:
            print(f"Cannot turn pages. \rások{self.title}" is closed.")

    # Instance method to get book status
    def get_status(self):
        """Returns a string describing the book's current status."""
        status = f"Book: \rások{self.title}" by {self.author}\\n"
        status += f"Status: {"Open" if self.is_open else "Closed"}\\n"
        if self.is_open:
            status += f"Currently on page: {self.current_page}/{self.pages}\\n"
        return status

# Creating Book objects
book_a = Book("Pride and Prejudice", "Jane Austen", "978-0141439518", 432)
book_b = Book("Moby Dick", "Herman Melville", "978-0142437247", 654)

# Interacting with book_a using its instance methods
print("\\n--- Interacting with Book A ---")
print(book_a.get_status())
book_a.open_book()
book_a.turn_page(10)
book_a.turn_page(500) # Try to turn past the end
print(book_a.get_status())
book_a.close_book()
book_a.turn_page() # Try to turn page while closed

# Interacting with book_b
print("\\n--- Interacting with Book B ---")
book_b.open_book()
book_b.turn_page(25)
print(book_b.get_status())
\`\`\`

**The \`self\` Parameter in Detail**

*   When you call an instance method like \`book_a.open_book()\`, Python automatically passes the object \`book_a\` as the first argument to the \`open_book\` method. This first argument is received by the \`self\` parameter inside the method definition.
*   \`self\` is just a conventional name. You could technically name it something else (e.g., \`this\`, \`instance\`), but \`self\` is the universally accepted convention in Python, and you should always use it for clarity and consistency.
*   Within an instance method, \`self\` is used to:
    *   Access instance attributes: \`self.attribute_name\`
    *   Modify instance attributes: \`self.attribute_name = new_value\`
    *   Call other instance methods of the same object: \`self.other_method()\`

**Relationship Between \`__init__\` and Other Instance Methods**

*   \`__init__\` is special because it's called automatically during object creation. Its primary role is to set up the initial instance attributes.
*   Other instance methods are called explicitly on an object after it has been created. They use the instance attributes (often set up by \`__init__\`) to perform their tasks or modify the object's state.

**Attributes Can Be Any Data Type**

Instance attributes can hold values of any Python data type: numbers, strings, booleans, lists, dictionaries, or even other objects.

\`\`\`python
class Playlist:
    def __init__(self, name):
        self.name = name
        self.songs = [] # Instance attribute that is a list
        self.is_playing = False
        self.current_song_index = -1

    def add_song(self, song_title, artist):
        # song could be a simple string, or another object e.g., Song class instance
        self.songs.append({"title": song_title, "artist": artist})
        print(f"Added \rások{song_title}" to playlist \rások{self.name}".")

    def list_songs(self):
        if not self.songs:
            print(f"Playlist \rások{self.name}" is empty.")
            return
        print(f"\\nSongs in playlist \rások{self.name}":")
        for i, song in enumerate(self.songs):
            print(f"{i+1}. {song['title']} - {song['artist']}")

my_playlist = Playlist("Chill Vibes")
my_playlist.add_song("Weightless", "Marconi Union")
my_playlist.add_song("Clair de Lune", "Claude Debussy")
my_playlist.list_songs()
\`\`\`

**Conclusion**

Instance attributes and instance methods are the heart of object-oriented programming in Python. Instance attributes define the unique data or state of each object, while instance methods define the behaviors or operations that each object can perform, often interacting with its own attributes.

*   Instance attributes are typically created in \`__init__(self, ...)\` using \`self.attribute = value\`.
*   Instance methods always take \`self\` as their first parameter, allowing them to access and manipulate the object's attributes and call its other methods.

By combining instance attributes and methods, you can create well-defined, self-contained objects that model entities from your problem domain effectively. In the next lesson, we will contrast instance attributes with class attributes and explore other types of methods.
`;export{e as default};
