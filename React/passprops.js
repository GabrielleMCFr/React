import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="lydia"/>
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

class Greeting extends React.Component {
    render() {
      return <h1>Hi there, {this.props.name}!</h1>;
    }
  }
  

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);



// or with reactdom:
class Greeting extends React.Component {
    render() {
      return <h1>Hi there, {this.props.firstName}!</h1>;
    }
  }
  
  ReactDOM.render(
    <Greeting firstName='Stiles' />, 
    document.getElementById('app')
  );