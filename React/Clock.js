import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  componentDidMount() {
    const oneSecond = 1000;
setInterval(() => {
  this.setState({ date: new Date() });
}, oneSecond);
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));





/* and if we want to toggle it (with unmouting it): 

import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }

  // stop the clock when it unmounts, else memory leak (clean up a side effect)
  componentWillUnmount() {
    clearInterval(this.intervalID)
  }
}


// WITH ANOTHER TOGGLE TO PRECISE MODE USING COMPONENTDIDUPDATE:
import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  startInterval() {
    let delay;
    if (this.props.isPrecise) {
      delay = 100
    }
    else {
      delay = 1000
    }
    this.intervalID = setInterval(() => {
  this.setState({ date: new Date() });
}, delay);
  }

  render() {
    return (
      <div>
        {this.props.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}
      </div>
    );
  }
  componentDidMount() {
    this.startInterval();
  }
  componentDidUpdate(prevProps) {
    if (this.props.isPrecise === prevProps.isPrecise) {
      return;
    }

    clearInterval(this.intervalID);

    this.startInterval()
    
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}
*/
