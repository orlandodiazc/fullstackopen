import { useSelector, useDispatch } from 'react-redux'
import { vote, initializeAnecdotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useEffect } from 'react'

export default function AnecdoteList() {
	const anecdotes = useSelector((state) => state.anecdotes)
	const query = useSelector((state) => state.filter.query)
	const dispatch = useDispatch()

	const filteredAnecdotes = anecdotes.filter((anecdote) =>
		anecdote.content.toLowerCase().includes(query.toLowerCase())
	)
	const sortedAnecdotes = filteredAnecdotes.sort((a, b) => b.votes - a.votes)

	useEffect(() => {
		dispatch(initializeAnecdotes())
	}, [dispatch])

	return (
		<>
			{sortedAnecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button
							onClick={() => {
								dispatch(vote(anecdote.id))
								dispatch(setNotification(`${anecdote.content} has been upvoted`, 5))
							}}
						>
							vote
						</button>
					</div>
				</div>
			))}
		</>
	)
}
