// all three are the same:

const handleChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  }
// and
  const handleChange = (event) => setEmail(event.target.value);

// and, with object destructuring
const handleChange = ({target}) => setEmail(target.value);