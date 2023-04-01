/* A React component should use props to store information that can be changed, but can only be changed by a different component.

A React component should use state to store information that the component itself can change.*/

// NEVER DO THIS:
class Bad extends React.Component {
    render() {
      this.props.message = 'yo'; // NOOOOOOOOOOOOOO!!!
      return <h1>{this.props.message}</h1>;
    }
  }