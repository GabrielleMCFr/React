import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}



class List extends React.Component {
    render() {
      let titleText = `Favorite ${this.props.type}`;
      if (this.props.children instanceof Array) {
          titleText += 's';
      }
      return (
        <div>
          <h1>{titleText}</h1>
          <ul>{this.props.children}</ul>
        </div>
      );
    }
  }


  ReactDOM.render(
    <App />, 
    document.getElementById('app')
  );
  