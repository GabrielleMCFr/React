import React, { useEffect, useState } from "react"

const App = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;


/* fetch :
fetch("https://catfact.ninja/fact")
  .then(response => response.json())
  .then(data => // handle data)
  .catch(err => // handle error)

PUT REQUEST WITH HOOKS AND ERROR HANDLING:
useEffect(() => {
    // PUT request using fetch with error handling
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React Hooks PUT Request Example' })
    };
    fetch('https://jsonplaceholder.typicode.com/invalid-url', requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            setPostId(data.id);
        })
        .catch(error => {
            setErrorMessage(error);
            console.error('There was an error!', error);
        });
}, []);


==========================================================


WITH CLASSES:
componentDidMount() {
    // Simple PUT request with a JSON body using fetch
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React PUT Request Example' })
    };
    fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
}

*/