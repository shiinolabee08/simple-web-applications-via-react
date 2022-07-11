### Simple To-do list
A simple To-do list application built by React version 17.

### How to install?
Just run command <code>npm install</code>

### How to run?
Just run command <code>npm run start</code>

### How to test?
I used <strong>Jest</strong> testing framework for unit testing.

## Benefits of using <strong>Jest</strong> and can give value are the ff:
<ul>
  <li>Fast and Safe: By ensuring your tests have a unique global state, Jest can reliably run tests in parallel. To make things quick, Jest runs previously failed tests first and re-organizes runs based on how long test files take.</li>
  <li>Code coverage: Generate code coverage by adding the flag --coverage. No additional setup needed. Jest can collect code coverage information from entire projects, including untested files.</li>
  <li>Easy Mocking: JEST makes use of a custom resolver for imports in your tests making it simple to mock any object outside of your test's scope.</li>
  <li>Great Exceptions: Tests fail — when they do, Jest provides a rich context of why.</li>
</ul>

## Best practices of unit testing
<ul>
  <li>Use 'describe' and 'it' keywords appropriately in tests</li>
  <li>Rendering — You can categorize the tests like rendering components in a parent component. Examples: How many text boxes rendered?, Whether some element is rendered under some condition? etc.</li>
  <li>Interactions — You can categorize the tests which help to check the interactions in UI. Examples: onClick method of a button, onChange method, state changes etc.</li>
  <li>Lifecycle Method Calls — You can categorize tests which help to know whether a particular lifecycle method is called. Examples: To test componentDidMount method and associated state changes etc.</li>
</ul>