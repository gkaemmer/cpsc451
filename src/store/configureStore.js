import rootReducer     from '../reducers';
import { createStore } from 'redux';

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
