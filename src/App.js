import React from "react";
// components
import Navbar from "./components/Navbar";
// items
import cartItems from "./cart-items";
// redux stuff
import { combineReducers, createStore } from 'redux'
import { initState, reducer } from "./redux/counter/reducer";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import Movie from "./components/Movie";
import { movieReducer } from "./redux/movie/movieReducer";
import { connect } from "react-redux";
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  counter: reducer,
  movies: movieReducer
})
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)


function App() {
  // cart setup

  return (
    <main>
      <Provider store={store}>
        <Navbar />
        <Movie />
      </Provider>
    </main>
  );
}

export default (App);
