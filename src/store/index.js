// import thunk from 'redux-thunk'
// import { createStore, applyMiddleware, compose } from 'redux'
// import reducer from './reducer'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk),
//     // other store enhancers if any
//     );

// const store = createStore(
//     reducer, 
//     enhancer
// )

// export default store


import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import todoSagas from './sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
    );

const store = createStore(
    reducer, 
    enhancer
)

sagaMiddleware.run(todoSagas)

export default store