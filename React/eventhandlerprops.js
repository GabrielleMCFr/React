import React from 'react';
import ReactDOM from 'react-dom';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick}/>;
  }
}

class Button extends React.Component {
    render() {
      return (
        <button onClick={this.props.onClick}>
          Click me!
        </button>
      );
    }
  }

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);