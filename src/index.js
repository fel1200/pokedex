import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//Para usar el reducer, ponemos los siguientes tres import:
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import {applyMiddleware, compose, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import {logger} from './middleware'

const root = ReactDOM.createRoot(document.getElementById('root'));

//Para usar thunk y es un compose alternativo
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Solo le mandamos logger aunque también le podríamos mandar también featuring
//const composedEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//    applyMiddleware(logger, featuring));
const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

//La parte de windows aquí es para usarlo con la extensión de chrome
const store = createStore(pokemonsReducer, composedEnhancers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

