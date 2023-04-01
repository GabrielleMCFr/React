// CONSIST IN BREAKING DOWN A REDUCER TO LITTLE REDUCERS TO ASSIGN THEM AT THEIR OWN STATE SLICE (prop) AND CALL THEM WITH A ROOT REDUCER
// In the reducer composition pattern, the same steps are taken by the rootReducer for each slice reducer:
// 1 call the slice reducer with its slice of the state and the action as arguments
// 2 store the returned slice of state in a new object that is ultimately returned by the rootReducer()
import { createStore } from 'redux';
import allRecipesData from './data.js';

// Action Creators
////////////////////////////////////////

const addRecipe = (recipe) => {
  return { 
    type: 'favoriteRecipes/addRecipe', 
    payload: recipe 
  };
}

const removeRecipe = (recipe) => {
  return { 
    type: 'favoriteRecipes/removeRecipe', 
    payload: recipe 
  };
}

const setSearchTerm = (term) => {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  }
}

const clearSearchTerm = () => {
  return {
    type: 'searchTerm/clearSearchTerm'
  }; 
}

const loadData = () => {
  return { 
    type: 'allRecipes/loadData', 
    payload: allRecipesData
  }; 
}

// Reducers
////////////////////////////////////////

const initialAllRecipes = [];
const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
  switch(action.type) {
    case 'allRecipes/loadData':
      return action.payload
    default:
      return allRecipes;
  }
}

const initialSearchTerm = '';
const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
  switch(action.type) {
    case 'searchTerm/setSearchTerm':
      return action.payload;
    case 'searchTerm/clearSearchTerm':
      return '';
    default: 
      return searchTerm;
  }
}


// Create the initial state for this reducer.
const initialFavoriteRecipes = []
const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
  switch(action.type) {
    
    // Add action.type cases here.
    case ('favoriteRecipes/addRecipe'): 
      return [...favoriteRecipes, action.payload]
    case ('favoriteRecipes/removeRecipe'):
      return favoriteRecipes.filter(element => element.id !== action.payload.id)
    // Don't forget to set the default case!
    default:
      return favoriteRecipes
  }
}


const rootReducer = (state = {}, action) => {
  const nextState = {
    allRecipes: allRecipesReducer(state.allRecipes, action),
    searchTerm: searchTermReducer(state.searchTerm, action),
    // Add in the favoriteRecipes slice using the 
    // favoriteRecipesReducer function. 
    favoriteRecipes: favoriteRecipesReducer(state.favoriteRecipes, action)
  } 
  return nextState;
}

const store = createStore(rootReducer);

