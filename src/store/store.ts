import { createStore, applyMiddleware, Store, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import { rootSaga } from "./root-saga";
import Types from "Types";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const enhancer = compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

function configureStore(initialState?: Types.RootState) {
  const store: Store<Types.RootState, Types.RootAction> = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
