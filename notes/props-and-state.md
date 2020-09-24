# Props and state

As any component based frontend framework today, React allows us to nest components inside each others.

This implies that whenever a component has a state, it might need to share this state with his childrens.

The opposite is also true, childrens components might want to share data with their parents.

## State

Any component can have a state; declared in the constructor using `this.state` if you are using [Class Components](https://fr.reactjs.org/docs/react-component.html), or with useState using [React Hooks](https://fr.reactjs.org/docs/hooks-intro.html).

The state is the data inside the component.

If you want to update the state, you have to use the [setState](https://reactjs.org/docs/react-component.html#setstate) function, given by your component structure.

setState has to been seen as a chain of enqueued changes to the component state, which will each trigger a render. Each change is not applied immediatly.

## Props

Props are used to pass anything between components.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="Sara" />
```

Props are written as attributes in JSX, and are passed inside a single object called "props".

Props props are read-only, meaning that a component must never modify its own props directly.

Consequently, any React function component can be considered as a pure function.

## Data flow

Commonly in component based apps, we need to make components communicate between each others.

To do so in React, we are using only props and callbacks.

You have to identify every component that is using some parts of a common state, and wrap them into a common owner component.

To pass data from a children component to a parent one, you need to pass the children a prop containing a function allowing you to mutate the state of the parent.

In Vue, you might be used to v-model, which implements in a really simple way a two-way data binding, using a single attribute and events called from the children component.

v-model does not exist in React, making you closer to how your application really works, and also making it more explicit. Even though it requires a little more code.

## Quotes

> props (short for “properties”) and state are both plain JavaScript objects.
> props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).
> React is all about one-way data flow down the component hierarchy.
> Think of setState() as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.
