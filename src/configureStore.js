import LogRocket from 'logrocket';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export default function configureStore(preloadedState, history) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        LogRocket.reduxMiddleware(), // for LogRocket redux context
        // ... other middlewares ...
      ),
    ),
  );

  return store;
}
