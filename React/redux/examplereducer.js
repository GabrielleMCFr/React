const initialState = {
    filter: 'SHOW_INCOMPLETE',
    todos: [
      { id: 0, text: 'learn redux', completed: false },
      { id: 1, text: 'build a redux app', completed: true },
      { id: 2, text: 'do a dance', completed: false },
    ]
  };
   
  const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        // When a 'filter/setFilter' action is received, it spreads the old state‘s contents (...state) into a new object before updating the filter property with the new filter from action.payload.
      case 'filter/setFilter':
        return {
          ...state,
          filter: action.payload
        };
        // When a 'todos/addTodo' action is received, it does the same except this time, since state.todos is a mutable array, its contents are also spread into a new array, with the new todo from action.payload added to the end.
      case 'todos/addTodo': 
        return {
          ...state,
          todos: [...state.todos, action.payload]
        } ;
        // When a 'todos/toggleTodo action is received, it uses the .map() method to create a copy of the state.todos array. Additionally, the todo being toggled is found using action.payload.id and it is spread into a new object and updated.
        // It should be clarified that the state.todos.map() method only makes a “shallow” copy of the array, meaning the objects inside share the same references as the originals. Therefore, mutations to the objects within the copy will affect the objects within the original. For now, we can make do with this solution, but you will learn how to bypass this issue in a later lesson on the Redux Toolkit.
      case 'todos/toggleTodo':
        return {
          ...state,
          todos: state.todos.map(todo => {
            return (todo.id === action.payload.id) ? 
              { ...todo, completed: !todo.completed } : 
              todo;
          })
        }
      default:
        return state;
    }
  };