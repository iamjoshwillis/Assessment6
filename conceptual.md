### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

  -An async/await function can be used to delay the execution of a function. This is useful when using AJAX.

- What is a Promise?
  
  -In JavaScript, a Promise is an object that can have the status of Pending, Resolved, or Rejected. It's a way to implement a placeholder while the function is receving necessary information to execute, like information from axios making an HTTP request.

- What are the differences between an async function and a regular function?
  
  -An async function can await a promise to be fulfilled before executing.

- What is the difference between Node.js and Express.js?
  
  -Express is a framework very similar to Flask that runs on Node.js. Node.js is 

- What is the error-first callback pattern?
  
  -Throwing an error would happen in the "if" region, and the intention of the function will happen after the error region is passed.

- What is middleware?

  
 -This is code that runs in the middle of the request/response cycle. It's useful for logging information on every request, and authentication operations.

- What does the `next` function do?

-"next" ensures that the function makes it to the next route.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
- These variables should not be called at once because there is no way to identify any errors. If there is an error with data from one person's profile, nothing will return.