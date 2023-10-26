import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

export default function AnecdoteForm() {
	const dispatch = useDispatch()
	function submitAnecdote(ev) {
		ev.preventDefault()
		const content = ev.target[0].value
		dispatch(createAnecdote(content))
		dispatch(setNotification(`Anecdote: ${content} has been added`, 5))
		ev.target[0].value = ''
	}
	return (
		<form onSubmit={submitAnecdote}>
			<div>
				<input />
			</div>
			<button type="submit">create</button>
		</form>
	)
}
