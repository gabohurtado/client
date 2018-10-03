import {createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'

// Reducers index
import rootReducers from './reducers/'
import thunk from 'redux-thunk'

const initialState={}


const store = createStore(
    rootReducers,
    initialState,
    compose(
        applyMiddleware(logger, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store