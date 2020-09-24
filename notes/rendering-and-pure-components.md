# Rendering and Pure components

The reactivity that libraries such as React or Vue brings to templating whether it is with JSX or `<template>` also brings a lot of computing to common used components such as UI blocks or generally anything that is just rendered without having to maintain a state on its own.

Where, in Vue, most of the magic comes in bundled by default in each component, in React your components starts from nothing else than a function that returns JSX.

In Vue, when you use "functional" components, you say to Vue that you will setup each part of a component structure yourself (data-binding, events, rendering...).

In React, when you use "Pure components", you simply say to React that you will handle this component rendering logic yourself, or use the default data comparison offered by React.

This is where the approach concerning "Functional components" and "Pure components" differs in Vue and in React.

## Pure components

In React, if you want to create a "Pure component" you have to use [`React.memo`](https://fr.reactjs.org/docs/react-api.html#reactmemo) if you are using function components, or [`React.PureComponent`](https://fr.reactjs.org/docs/react-api.html#reactpurecomponent) if you are using class components.

The only difference between a regular component and a pure component is that a pure component does not implement the shouldComponentUpdate method by default, meaning any change to that component context will trigger a new render.

By using `React.memo` or `React.PureComponent`, your component will, on each trial of a render by React, compare the state and props of this component and check if it is different. If it's not, it will skip the re-rendering and preserve the original component.

## Immutability

As this behaviour implies that React has to check quite a lot of data on each render trials, it will obviously not be efficient on complex data structure.

It implies that Pure component data should also - in a vast majority of case - be immutable.

This means that if you want to change data passed to those components, you have to replace the entire reference passed instead of trying to mutate data inside of it.

If you want to add an item inside an array, you have to use this syntax:

```javascript
passedArray = [...passedArray, newItem]
```

Instead of this syntax:

```javascript
array.push(newItem)
```

It is the same for objects, where it is preferable to use this syntax:

```javascript
passedObject = {
  ...passedObject,
  keyToUpdate: 'new Value',
}
```
