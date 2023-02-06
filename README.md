# A counter app with a Custom hook and UseReducer hook

This project was built with [Create React App](https://github.com/facebook/create-react-app).

MY PROJECT LINK [CounterApp](myexamproject-c24gifelh-lilbobb.vercel.app)


##INTRODUCTION
A counter app is a simple tool that allows users to keep track of a numerical value. this counter app focuses on 4 different functions: increment, decrement, reset, and setting the value using both the custom hook and useReducer hook.

I will be leading you through the steps used in building the counter app with custom hook and useReducer hook.

This counter app will be built with React.

##HEADINGS
Custom hook counter

Reducer hook counter

Errorboundary

Test Error Boundary

404 not found page.

##Custom hook counter
A custom hook counter app is a small application that allows users to increment, decrement, reset, and set a value. The app is implemented using React Hooks, which allows for the use of state and other React features in functional components.

Here are the specific requirements and functionality for the app:

The app will display a single value on the screen, which starts at 0.

The app will have four buttons: "Increment," "Decrement," "Reset," and "Set Value."

The "Increment" button will increase the value on the screen by 1 when clicked.

The "Decrement" button will decrease the value on the screen by 1 when clicked.

The "Reset" button should set the value on the screen back to 0 when clicked.

The "Set Value" button will have an input that allows the user to enter a new value, and set the value on the screen to the entered value when the user confirms.

The app should use a custom hook called "custom counter" to manage the state of the value on the screen.

The custom hook should have the ability to increment, decrement, reset and set value and should export a single state variable and a set of functions to update it.

Below is the code for the above functionality.

import { useState } from 'react';

function useCounter() { const [count, setCount] = useState(0);

function increment() { setCount(count + 1); }

function decrement() { setCount(count - 1); }

function reset() { setCount(0); }

function setValue(value) { setCount(value); }

return { count, increment, decrement, reset, setValue }; }

export default useCounter;

##UseReducer hook counter
A custom counter app that uses the useReducer hook is a small application that allows users to increment, decrement, set value, and reset a value. The app is implemented using React Hooks, which allows for the use of state and other React features in functional components.

Here are the specific requirements and functionality for the app:

The app will display a single value on the screen, which starts at 0.

The app will have four buttons: "Increment," "Decrement," "Set Value," and "Reset."

The "Increment" button will increase the value on the screen by 1 when clicked.

The "Decrement" button will decrease the value on the screen by 1 when clicked.

The "Set Value" button opens a prompt that allows the user to enter a value, and set the value on the screen to the entered value when the user confirms.

The "Reset" button will set the value on the screen back to 0 when clicked.

The app will use the useReducer hook to manage the state of the value on the screen.

The state should be represented by an object with a single count field, which holds the current value.

The useReducer should take two arguments, the first one is the reducer function and the second is the initial state.

useReducer is very powerful and can handle more complex state management than useState and when your component's state is complex, or you have a lot of state updates or want to share state between two components.

##ErrorBoundary
An error boundary is a component in React that is designed to catch JavaScript errors anywhere in its child component tree, log those errors, and display a fallback UI. This allows your application to continue running in a degraded mode rather than crashing entirely.

here is an example of an errorboundary

class ErrorBoundary extends React.Component { constructor(props) { super(props); this.state = { hasError: false }; }

static getDerivedStateFromError(error) {

// Update state so the next render will show the fallback UI. return { hasError: true }; }

componentDidCatch(error, errorInfo) {

// You can also log the error to an error reporting service console.log(error, errorInfo); }

render() {

if (this.state.hasError) {

// You can render any custom fallback UI return

##Something went wrong.
return this.props.children; } }

You can use this component to wrap any component that you want to protect with an error boundary:

<ErrorBoundary>

<MyComponent />

</ErrorBoundary>

In testing, you can test that the component renders the fallback UI when an error is thrown. You can throw an error in lifecycle methods or event handlers, or you can use a library like act() from react-test-renderer to simulate an error.

Here's an example of how you could test the error boundary component above using jest and react-testing-library

##Test Error Boundary
In testing, you can test that the component renders the fallback UI when an error is thrown. You can throw an error in lifecycle methods or event handlers, or you can use a library like act() from react-test-renderer to simulate an error.

Here's an example of how you could test the error boundary component above using jest and react-testing-library

import { render, fireEvent } from 'react-testing-library';

import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {

it('catches errors and renders fallback UI', () => {

const ErrorComponent = () => {

throw new Error('test error');

return null; };

const { container, getByText } = render( );

expect(container).toHaveTextContent('Something went wrong.'); expect(getByText('Something went wrong.')).toBeInTheDocument(); }); });

##404 not found page.
In a React application, you can create a "404 Not Found" page by using React Router to handle route not found errors. First, you'll need to install React Router if you haven't already done so by running the following command

npm install react-router-dom

Once you have React Router installed, you can create a new component that will represent your 404 page. For example, you could create a new file called NotFoundPage.js and define a new component called NotFoundPage:

import React from 'react';

const NotFoundPage = () => {

return (

<div>

<h1>404 - Not Found</h1>

<p>The page you requested could not be found.</p>

</div> );

};

export default NotFoundPage;

404 - Not Found
The page you requested could not be found.

export default NotFoundPage;

Then, in your App.js file, you can use React Router's Switch component to render the NotFoundPage component when the current route does not match any of the other routes:

##CONCLUSION
In conclusion, a counter app is a small application that allows users to increment, decrement, set value and reset a value. There are multiple ways to implement a counter app in React, using either the useState or useReducer hook. Both methods have their own advantages and disadvantages, and the choice between the two depends on the complexity of the application's state management.

The useState hook is the simplest way to manage state in a functional component, and it's suitable for small or simple apps. It allows you to keep a piece of state and a function to update that state.

On the other hand, the useReducer hook is more powerful and can handle more complex state management than useState and when your component's state is complex, or you have a lot of state updates or want to share state between two components. It allows you to manage state with a reducer function that updates the state based on the current state and an action.

In addition, to prevent the application from crashing when an error occurs, it's good practice to use an error boundary component to catch JavaScript errors anywhere in the child component tree and to display a fallback UI.

Overall, a counter app is a simple application that can be used to learn and explore the basic features of React. It serves as a foundation for building more complex applications and provides a good starting point to understand the basics of state management and error handling in React.

##ATTRIBUTES
When building a counter app, there are several attributes to consider in order to create a user-friendly and functional application. Some of these attributes include:

#User Interface (UI): The UI should be simple and intuitive, making it easy for the user to understand and interact with the app. The counter value should be prominently displayed and the buttons for incrementing, decrementing, setting value and resetting the counter should be clearly labeled and easy to access.

#Responsiveness: The app should be responsive and work well on different screen sizes and devices. This means that the layout should adapt to the screen size, and the buttons and other controls should be easy to tap or click with fingers or a mouse.

#Accessibility: The app should be accessible to users with disabilities, including those using assistive technologies such as screen readers. This means that the app should have appropriate alternative text for images, proper semantic markup and support keyboard navigation.

State management: The app should be able to keep track of the counter value and the state should be easy to update and manage. Depending on the complexity of the app, this can be done either with useState or useReducer hook.

#Error handling: The app should handle and display errors in a user-friendly way, this is achieved by implementing an error boundary component. This component catches errors thrown anywhere in the component tree and displays a fallback UI.

#Testability: The app should be easy to test, you should be able to test the state management, error handling and the user interface. This will ensure that the app is stable and easy to maintain.

By considering these attributes, you can create a counter app that is easy to use, responsive, accessible, and maintainable. It will provide a solid foundation for building more complex applications and help you understand the basics of state management and error handling in React.
# myexamproject
