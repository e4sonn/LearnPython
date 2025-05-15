const e=`# Module 4: Control Flow - Conditional Statements - Lesson 4: Nested \`if\` Statements

We've learned about \`if\`, \`if-else\`, and \`if-elif-else\` statements, which allow us to control the flow of our programs based on various conditions. Sometimes, however, the logic we need to implement is more complex, requiring us to make a decision based on one condition, and then, if that condition is met, make further decisions based on other conditions. This is where **nested \`if\` statements** come into play.

**What are Nested \`if\` Statements?**

A nested \`if\` statement is simply an \`if\` (or \`elif\` or \`else\`) statement that is placed inside another \`if\` (or \`elif\` or \`else\`) statement. This allows for a hierarchical decision-making process.

The inner \`if\` statement is only evaluated if the condition of the outer \`if\` statement (or the relevant \`elif\` block) is \`True\`.

**Syntax of Nested \`if\` Statements**

The syntax follows the standard \`if\` statement rules, with the key being the indentation. The inner \`if\` statement and its block are indented further relative to the outer \`if\` statement's block.

\`\`\`python
if outer_condition1:
    # Code block for outer_condition1 being True
    print("Outer condition 1 is True.")

    if inner_condition1_A:
        # Code block for inner_condition1_A being True (given outer_condition1 was True)
        print("Inner condition 1.A is True.")
    elif inner_condition1_B:
        # Code block for inner_condition1_B being True (given outer_condition1 was True and inner_condition1_A was False)
        print("Inner condition 1.B is True.")
    else:
        # Code block if no inner conditions under outer_condition1 were True
        print("All inner conditions under outer_condition1 were False.")

elif outer_condition2:
    # Code block for outer_condition2 being True (given outer_condition1 was False)
    print("Outer condition 2 is True.")

    if inner_condition2_A:
        print("Inner condition 2.A is True.")
    else:
        print("Inner condition 2.A is False.")
else:
    # Code block if neither outer_condition1 nor outer_condition2 were True
    print("All outer conditions were False.")

# Code here executes after the entire nested structure
\`\`\`

Each level of nesting requires an additional level of indentation. You can nest \`if\`, \`if-else\`, or \`if-elif-else\` structures within each other to any depth, although excessively deep nesting (more than 2-3 levels) can make code hard to read and maintain.

**How Nested \`if\` Statements Work**

1.  The outer \`if\` (or \`elif\`) condition is evaluated first.
2.  If the outer condition is \`True\`, the code block associated with it begins to execute.
3.  If this block contains another \`if\` statement (the inner \`if\`), then the inner condition is evaluated.
4.  Based on the result of the inner condition, the appropriate inner block of code is executed (or skipped).
5.  If the outer condition is \`False\`, the entire block of code associated with it, including any nested \`if\` statements, is skipped. The program then moves to the next \`elif\` or \`else\` in the outer structure, or continues after the entire structure if there are no more outer conditions to check.

**Examples of Nested \`if\` Statements**

Let's consider some scenarios where nested \`if\` statements are useful:

\`\`\`python
# Example 1: Qualifying for a loan
income = 50000  # Annual income
credit_score = 720
has_stable_job = True

if has_stable_job:
    print("Applicant has a stable job. Checking income and credit score...")
    if income >= 40000:
        print("Income requirement met.")
        if credit_score >= 700:
            print("Credit score is excellent. Loan approved!")
        elif credit_score >= 650:
            print("Credit score is good. Loan approved with standard rates.")
        else:
            print("Credit score is below minimum. Loan application pending further review or denied.")
    else:
        print(f"Income of \${income} is below the minimum requirement of $40000. Loan denied.")
else:
    print("Applicant does not have a stable job. Loan denied.")

# If income = 50000, credit_score = 720, has_stable_job = True:
# Output:
# Applicant has a stable job. Checking income and credit score...
# Income requirement met.
# Credit score is excellent. Loan approved!
\`\`\`
In this loan qualification example, we first check for a stable job. Only if that's true do we proceed to check income, and only if income is sufficient do we check the credit score.

\`\`\`python
# Example 2: Choosing an activity based on weather and day
weather = "sunny"
day_of_week = "Saturday"

if weather == "sunny":
    print("It's sunny!")
    if day_of_week == "Saturday" or day_of_week == "Sunday":
        print("Perfect for a picnic in the park!")
    else:
        print("Maybe a nice walk during your lunch break?")
elif weather == "rainy":
    print("It's rainy.")
    if day_of_week == "Saturday" or day_of_week == "Sunday":
        print("Good day for a movie marathon at home.")
    else:
        print("Don't forget your umbrella if you go out!")
else:
    print(f"Weather is {weather}. Plan accordingly.")
\`\`\`
Here, the inner decision (picnic/walk or movie/umbrella) depends on the outer condition (weather).

**Readability and Alternatives**

While nested \`if\` statements are powerful, they can sometimes make code difficult to read if the nesting goes too deep or the conditions become overly complex. Here are a few things to keep in mind:

1.  **Limit Nesting Depth:** Try to avoid nesting \`if\` statements more than two or three levels deep. Deeply nested code is often a sign that the logic could be simplified or refactored.

2.  **Use Compound Conditions:** Sometimes, you can avoid nesting by using logical operators (\`and\`, \`or\`) to create more complex conditions in a single \`if\` or \`elif\` statement.

    For instance, part of the loan example could be rewritten:
    \`\`\`python
    # Alternative using 'and' for the first part of the loan example
    if has_stable_job and income >= 40000 and credit_score >= 700:
        print("Loan approved with excellent terms!")
    elif has_stable_job and income >= 40000 and credit_score >= 650:
        print("Loan approved with standard rates.")
    # ... and so on
    \`\`\`
    This can be clearer if the conditions are closely related. However, if there are distinct actions or print statements at each level of the original nested structure, then nesting might still be more appropriate to represent that step-by-step logic.

3.  **Refactor into Functions:** If a nested block of \`if\` statements becomes too complex, consider extracting parts of the logic into separate functions. This can break down the problem into smaller, more manageable pieces.

    \`\`\`python
    def check_financial_details(income, credit_score):
        if income >= 40000:
            print("Income requirement met.")
            if credit_score >= 700:
                print("Credit score is excellent. Loan approved!")
            elif credit_score >= 650:
                print("Credit score is good. Loan approved with standard rates.")
            else:
                print("Credit score is below minimum. Loan application pending further review or denied.")
        else:
            print(f"Income of \${income} is below the minimum requirement of $40000. Loan denied.")

    # Main logic
    if has_stable_job:
        print("Applicant has a stable job. Checking income and credit score...")
        check_financial_details(income, credit_score)
    else:
        print("Applicant does not have a stable job. Loan denied.")
    \`\`\`
    This functional decomposition can significantly improve readability.

**Conclusion**

Nested \`if\` statements allow for more granular control over program flow by creating a hierarchy of conditional checks. They are useful when a decision depends on the outcome of a prior decision. While powerful, it's important to use them judiciously to maintain code readability. Consider alternatives like compound conditions or refactoring into functions if nesting becomes too deep or complex. Understanding nested conditionals is another step towards writing programs that can handle intricate logic and respond appropriately to a variety of situations.
`;export{e as default};
