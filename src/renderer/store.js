import { configureStore, createReducer } from 'redux-starter-kit'

const initialState = {
  counter: 0
}

const reducer = createReducer(initialState, {
  'TEST': state => {
    state.counter = state.counter + 1
  }
})

const store = configureStore({
  reducer
})

setInterval(() => {
  store.dispatch({ type: 'TEST'})
}, 1000)

export default store