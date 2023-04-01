/* 
On line 1, import React from 'react' creates a JavaScript object. 
This object contains properties that are needed to make React work, such as React.createElement() and React.Component.

On line 2, import ReactDOM from 'react-dom' creates another JavaScript object. 
This object contains methods that help React interact with the DOM, such as ReactDOM.render().

On line 4, by subclassing React.Component, you create a new component class. This is not a component! 
A component class is more like a factory that produces components. When you start making components, each one will come from a component class.
Whenever you create a component class, you need to give that component class a name. That name should be written in UpperCamelCase. 
In this case, your chosen name is MyComponentClass.

In your class : 
There is only one property that you have to include in your instructions: a render method.
A render method is a property whose name is render, and whose value is a function. The term “render method” can refer to the entire property, 
or to just the function part.
A render method must contain a return statement. Usually, this return statement returns a JSX expression.

JSX elements can be either HTML-like, or component instances. JSX uses capitalization to distinguish between the two! That is the React-specific
 reason why component class names must begin with capital letters.
*/


/* EXAMPLE:
A <Parent /> is going to pass a prop to a <Child />.

That means that a <Parent /> is going to render a <Child />. Rendering is the only way for a component to pass props to another component.

Any component rendered by a different component must be included in an export statement. */

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
	<MyComponentClass />, 
	document.getElementById('app')
);



// same but with variable attributes :
const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width:  '200px'
};

class RedPanda extends React.Component {
  render() {
    return (
      <div>
        <h1>Cute Red Panda</h1>
        <img 
          src={redPanda.src}
          alt={redPanda.alt}
          width={redPanda.width} />
      </div>
    );
  }
}

ReactDOM.render(
  <RedPanda />,
  document.getElementById('app')
);


// with conditionals :
class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }

    return <h1>Today I am going to {task}!</h1>;
  }
}

ReactDOM.render(
	<TodaysPlan />,
	document.getElementById('app')
);



//with this:
class MyName extends React.Component {
	// name property goes here:
  get name() {
    return 'pouet'
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));


// with event:
class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(<Button/>, document.getElementById('app'))