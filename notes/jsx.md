JSX
---

JSX is the templating syntax used by React.

The equivalent of this in Vue is the <template> tag from Vue components.

JSX seems to allow more things than <template> but also seem to need a lot more of care concerning the readability of the code.

Examples
---

~~~~javascript
const name = 'Josh Perez';

const element = <h1>Hello, {name}</h1>;

const elementUpperCase = <h1>Hello, {name.toUpperCase()}</h1>;
~~~~

You can put any valid JavaScript expression inside the curly braces in JSX.

~~~~javascript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
~~~~

JSX is an expression too

~~~~javascript
const element = <div tabIndex="0"></div>;

const element = <img src={user.avatarUrl}></img>;
~~~~

Both quotes and curly braces works for specifying attributes in JSX, but can't be used in the same attribute.

Since JSX is closer to JavaScript than to <template> or HTML, the usage of camelCase is highly recommended concerning attributes.

"class" becomes className.

"tabindex" becomes tabIndex.

This avoids conflicts with JavaScript keywords such as "class".

~~~~javascript
const element = <img src={user.avatarUrl} />;

const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
~~~~

JSX tags can self-close, but can also contain childrens, like regular HTML tags.

~~~~javascript
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
~~~~

These are identical.

JSX is compiled down to React.createElement() calls.

Quotes
---

> React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

> After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

> By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.
 
> Babel compiles JSX down to React.createElement() calls.
