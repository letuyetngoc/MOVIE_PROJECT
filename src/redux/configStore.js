import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import CarouselReducer from './reducer/CarouselReducer'
const rootReducer = combineReducers({
    CarouselReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk))