# JSX

JSX is the templating syntax used by React.

The equivalent of this in Vue is the `<template>` tag from Vue components.

JSX seems to allow more things than `<template>` but also seem to need a lot more of care concerning the readability of the code.

## Examples

```javascript
const name = 'Josh Perez'

const element = <h1>Hello, {name}</h1>

const elementUpperCase = <h1>Hello, {name.toUpperCase()}</h1>
```

You can put any valid JavaScript expression inside the curly braces in JSX.

```javascript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Hello, Stranger.</h1>
}
```

JSX is an expression too

```javascript
const element = <div tabIndex="0"></div>

const element = <img src={user.avatarUrl}></img>
```

Both quotes and curly braces works for specifying attributes in JSX, but can't be used in the same attribute.

Since JSX is closer to JavaScript than to `<template>` or HTML, the usage of camelCase is highly recommended concerning attributes.

Also,

"class" becomes "className".

"tabindex" becomes "tabIndex".

"for" becomes "htmlFor".

"readonly" becomes "readOnly".

This avoids conflicts with JavaScript keywords such as "class".

A complete list about this particular point is available on the [React DOM elements](https://reactjs.org/docs/dom-elements.html) page.

```javascript
const element = <img src={user.avatarUrl} />

const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
)
```

JSX tags can self-close, but can also contain childrens, like regular HTML tags.

```javascript
const element = <h1 className="greeting">Hello, world!</h1>
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!',
)
```

These are identical.

JSX is compiled down to React.createElement() calls.

```javascript
function render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        <textarea value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Send" />
    </form>
  )
}
```

In React, a textarea uses a value attribute instead of containing its value like in HTML.

A form using a textarea can be written very similarly to a form that uses a single-line input.

```javascript
function render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
```

React, instead of using this selected attribute, uses a value attribute on the root select tag.

This is more convenient in a controlled component because you only need to update it in one place.

This and the textarea feature has been implementend so both of select and textarea can be [React controlled components](https://reactjs.org/docs/forms.html#controlled-components) easily.

The distinction between controlled and [uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html) must be known in order to achieve implementing forms with JSX correctly.

## Quotes

> React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

> After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

> By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

> Babel compiles JSX down to React.createElement() calls.

> React treats components starting with lowercase letters as DOM tags. For example, `<div />` represents an HTML div tag, but `<Welcome />` represents a component and requires Welcome to be in scope.

> All React components must act like pure functions with respect to their props.
