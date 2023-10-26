import { createStore } from 'redux'
import counterReducer from './reducer'

const store = createStore(counterReducer)

const setGood = () => {
	store.dispatch({
		type: 'GOOD',
	})
}

const setOk = () => {
	store.dispatch({
		type: 'OK',
	})
}

const setBad = () => {
	store.dispatch({
		type: 'BAD',
	})
}

const reset = () => {
	store.dispatch({
		type: 'ZERO',
	})
}

export { setGood, setOk, setBad, reset, store }
