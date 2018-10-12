import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
// import LoginSignal from './services/auto-login'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const signal = new LoginSignal()

// Redux Store
export const store = createStore(reducers, {}, composeEnhancers(
  applyMiddleware(thunk.withExtraArgument())
))

// signal.setReduxStore(store)

// signal.fire()
// signal.s3init()

// module.exports.signal = signal;
