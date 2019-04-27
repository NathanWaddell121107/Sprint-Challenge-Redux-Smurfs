1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map, ForEach, Every.
.map()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store is an object that contains all of the state of the current full application, you can only manipulate this through actions.
Reducers modify the new state from what the Action is doing to the current state. They work to bring the Actions together with the Store.
Actions send data from the application to the Store. Actions will be dispatched to the reducer, which in turn updates our state based off of what the Action tells it to do.

The Store is known as a 'single source of truth' because it contains the full state of the application in one object tree. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global (eg. Store) and Component state is local within that specific component. This means application state can be passed through the full application
while component state can only be passed to children through props.

1.  What is middleware?

Middleware is a way to interact with actions already dispatched before they are in the Store's Reducer.
it is code you can put in the middle of receiving a request and generating a response.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows us to change the flow of action to reducer from synchronous to asynchronous.
This allows us to make API calls from the Action creators.


1.  Which `react-redux` method links up our `components` with our `redux store`?
applyMiddleware()
