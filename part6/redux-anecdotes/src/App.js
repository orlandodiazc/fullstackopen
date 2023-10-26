import { useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { updateFilterQuery } from './reducers/filterReducer'
import Notification from './components/Notification'

const App = () => {
	const dispatch = useDispatch()
	return (
		<div>
			<h2>Anecdotes</h2>
			<Notification />
			<form>
				<label>
					Filter:{' '}
					<input
						type="text"
						onChange={(ev) => dispatch(updateFilterQuery(ev.target.value))}
					></input>
				</label>
			</form>
			<AnecdoteList />
			<h2>create new</h2>
			<AnecdoteForm />
		</div>
	)
}

export default App
