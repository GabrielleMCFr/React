// 1 : install axios npm install axios

import "./App.css";
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
    const [fact, setFact] = useState("");
    const fetchFact = () => {
    axios.get("https://catfact.ninja/fact").then((response) => {
    setFact(response.data.fact)
    });
    }
useEffect(() => {
  fetchFact()
}, []);
return (
    <div className="App">
    <h2>Press the button for a random cat fact!</h2>
    <hr />
    <button>Get Cat fact</button>
    <p>{fact}</p>
    </div>
);
}
export default App;


/* 
OR WITH CLASSES:

import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}


WITH POST AND CLASSES:
import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}


// WITH POST AND HOOKS
useEffect(() => {
    // POST request using axios inside useEffect React hook
    const article = { title: 'React Hooks POST Request Example' };
    axios.post('https://reqres.in/api/articles', article)
        .then(response => setArticleId(response.data.id));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);



// CLASSES WITH ASYNC
async componentDidMount() {
    // POST request using axios with async/await
    const article = { title: 'React POST Request Example' };
    const response = await axios.post('https://reqres.in/api/articles', article);
    this.setState({ articleId: response.data.id });
}

// POST WITH ERROR HANDLING
componentDidMount() {
    // POST request using axios with error handling
    const article = { title: 'React POST Request Example' };
    axios.post('https://reqres.in/invalid-url', article)
        .then(response => this.setState({ articleId: response.data.id }))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
}
*/