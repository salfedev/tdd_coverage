Notes:

# When to mock?
- When you don't want to call the real implementation of a function because it may be slow or have side effects, such as sending an email or making an HTTP request
- When you want to test a code path that is hard to trigger or test otherwise (e.g. network error, disk full, exit code)
- When you want to test error handling, such as a function raising an exception
- When you want to test interactions with an external system, such as a database or API
  
# When not to mock?
- When you want to test the real implementation of a function, especially if it's a small function
- When you want to test the performance of a function, such as how long it takes to run
- When you want to test a code path that is easy to trigger or test otherwise, such as a function that returns a constant
- When you want to test interactions with an external system that you own, such as a database or API

Mocking is a powerful tool that can be used to isolate code under test. However, it can also be misused and lead to brittle tests. Use it wisely.

# Best practices for testing:
- Test behaviour, not implementation
- Test public methods, not private ones
- Test a single concept in each test method
- Use descriptive names for test methods
- Use descriptive names for test data
- Use a consistent naming convention for test methods

# Testing pitfalls:
- Testing implementation details
- Testing private methods
- Testing multiple concepts in a single test method
- Using a single test method to test multiple scenarios
- Using inconsistent naming conventions for test methods
- Using inconsistent naming conventions for test data

# Easy structure for tests:
- Arrange: set up the test, with a title that describes your intent
- Act: execute the code under test
- Assert: verify the expected results

# When to start testing?
The time when you're plotting out the design of your code is the best time to start thinking about testing. it's the perfect timing to create that test file when you're still uncertain which way you're going, the first few tests will help you make decisions about the design of your code.