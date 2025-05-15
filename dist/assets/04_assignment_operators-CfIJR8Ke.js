const e=`# Module 3: Operators - Lesson 4: Assignment Operators

We've already encountered the most basic assignment operator, the equals sign (\`=\`), which is used to assign a value to a variable (e.g., \`x = 10\`). Python, however, offers a range of **augmented assignment operators** (also known as compound assignment operators). These operators provide a concise way to perform an arithmetic or bitwise operation on a variable and then assign the result back to the same variable.

Using augmented assignment operators can make your code shorter, more readable, and sometimes slightly more efficient.

**The Basic Assignment Operator (\`=\`)**

Let's quickly recap the simple assignment operator:

\`\`\`python
my_variable = 100
name = "Python"
pi_approx = 3.14

# The value on the right is assigned to the variable on the left.
\`\`\`

**Augmented Assignment Operators**

Augmented assignment operators combine an arithmetic (or bitwise, which we'll cover later) operator with the assignment operator. The general form is \`variable op= value\`, which is typically equivalent to \`variable = variable op value\`.

Here are the common arithmetic augmented assignment operators:

1.  **Add and Assign (\`+=\`)**
    \`x += y\` is equivalent to \`x = x + y\`

    \`\`\`python
    count = 5
    print(f"Initial count: {count}")

    count += 3  # Equivalent to count = count + 3
    print(f"Count after += 3: {count}")  # Output: Count after += 3: 8

    total_score = 150.5
    bonus = 20.0
    total_score += bonus # total_score = 150.5 + 20.0
    print(f"Total score after bonus: {total_score}") # Output: Total score after bonus: 170.5

    message = "Hello"
    message += ", World!" # String concatenation: message = message + ", World!"
    print(message) # Output: Hello, World!
    \`\`\`

2.  **Subtract and Assign (\`-=\`)**
    \`x -= y\` is equivalent to \`x = x - y\`

    \`\`\`python
    balance = 1000
    print(f"Initial balance: {balance}")

    withdrawal = 250
    balance -= withdrawal  # Equivalent to balance = balance - withdrawal
    print(f"Balance after -= 250: {balance}")  # Output: Balance after -= 250: 750
    \`\`\`

3.  **Multiply and Assign (\`*=\`)**
    \`x *= y\` is equivalent to \`x = x * y\`

    \`\`\`python
    quantity = 10
    print(f"Initial quantity: {quantity}")

    quantity *= 2  # Equivalent to quantity = quantity * 2
    print(f"Quantity after *= 2: {quantity}")  # Output: Quantity after *= 2: 20

    text_pattern = "abc"
    text_pattern *= 3 # String repetition: text_pattern = text_pattern * 3
    print(text_pattern) # Output: abcabcabc
    \`\`\`

4.  **Divide and Assign (\`/=\`)**
    \`x /= y\` is equivalent to \`x = x / y\`. Remember that \`/\` always results in a float.

    \`\`\`python
    amount = 50.0
    print(f"Initial amount: {amount}")

    amount /= 4  # Equivalent to amount = amount / 4
    print(f"Amount after /= 4: {amount}")  # Output: Amount after /= 4: 12.5

    value = 10
    value /= 2 # value will become 5.0 (a float)
    print(f"Value after /= 2: {value}, type: {type(value)}") # Output: Value after /= 2: 5.0, type: <class 'float'>
    \`\`\`

5.  **Floor Divide and Assign (\`//=\`)**
    \`x //= y\` is equivalent to \`x = x // y\`. This performs floor division and assigns the integer result.

    \`\`\`python
    items = 25
    box_capacity = 4
    print(f"Initial items: {items}")

    items //= box_capacity  # Equivalent to items = items // box_capacity (how many full boxes)
    print(f"Full boxes (items after //= {box_capacity}): {items}")  # Output: Full boxes (items after //= 4): 6
    \`\`\`

6.  **Modulus and Assign (\`%=\`)**
    \`x %= y\` is equivalent to \`x = x % y\`. This assigns the remainder of the division.

    \`\`\`python
    total_items = 25
    items_per_group = 4
    print(f"Initial total items: {total_items}")

    total_items %= items_per_group  # Equivalent to total_items = total_items % items_per_group (items remaining)
    print(f"Items remaining (total_items after %= {items_per_group}): {total_items}")  # Output: Items remaining (total_items after %= 4): 1
    \`\`\`

7.  **Exponentiate and Assign (\`**=\`)**
    \`x **= y\` is equivalent to \`x = x ** y\`. This raises \`x\` to the power of \`y\` and assigns the result back to \`x\`.

    \`\`\`python
    number = 2
    print(f"Initial number: {number}")

    number **= 4  # Equivalent to number = number ** 4 (2 to the power of 4)
    print(f"Number after **= 4: {number}")  # Output: Number after **= 4: 16
    \`\`\`

**Why Use Augmented Assignment Operators?**

*   **Conciseness:** They make your code shorter and often easier to read, as they clearly express the intent of modifying a variable in place.
    *   \`counter = counter + 1\` becomes \`counter += 1\`.
*   **Readability:** For those familiar with them, they can improve readability by reducing redundancy. The variable name is only mentioned once.
*   **Potential for Optimization (Minor):** In some cases, especially with mutable objects (like lists, which we'll cover later), augmented assignment operators can be more efficient. For immutable types like numbers and strings, the performance difference is usually negligible, but the primary benefit is still conciseness and readability.
    For example, with lists:
    \`\`\`python
    my_list = [1, 2]
    # my_list = my_list + [3, 4] # This creates a new list and reassigns my_list
    # print(id(my_list)) # Get memory address

    my_list += [3, 4] # This modifies the list in-place (for list's +=)
    # print(id(my_list)) # Memory address might be the same, indicating in-place modification
    print(my_list) # Output: [1, 2, 3, 4]
    \`\`\`
    While the \`+=\` operator for numbers creates a new number object and rebinds the variable, for mutable types like lists, \`+=\` (which calls the \`__iadd__\` special method) often modifies the object in-place if possible.

**Important Note on Immutability**

It's crucial to remember that for immutable types like numbers (int, float) and strings, augmented assignment operators still result in the creation of a new object. The variable name is then rebound to this new object. The original object is unchanged (and may be garbage collected if no other references to it exist).

\`\`\`python
x = 10
print(f"Initial x: {x}, id: {id(x)}")
x += 5 # x becomes 15. A new integer object 15 is created.
print(f"After x += 5: {x}, id: {id(x)}") # id(x) will likely be different
\`\`\`
The \`id()\` function returns the unique identifier (memory address) of an object. You'll see it change for immutable types when an augmented assignment occurs.

**Conclusion**

Assignment operators, particularly the augmented assignment operators (\`+=\`, \`-=\`, \`*=\`, \`/=\`, \`//=\`, \`%=\`, \`**=\`), are convenient tools for writing more concise and often more readable Python code. They allow you to perform an operation and assign the result back to the same variable in a single step. While their behavior with mutable and immutable types differs slightly at a lower level, their syntactic sugar is beneficial in many common programming scenarios, especially when incrementing counters, accumulating totals, or modifying variables based on their current value.
`;export{e as default};
