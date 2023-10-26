import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
	name: 'anecdotes',
	initialState: [],
	reducers: {
		updateVote(state, action) {
			return state.map((anecdote) => {
				if (action.payload !== anecdote.id) return anecdote
				return { ...anecdote, votes: anecdote.votes + 1 }
			})
		},
		addAnecdote(state, action) {
			state.push(action.payload)
		},
		setAnecdotes(state, action) {
			return action.payload
		},
	},
})

export const initializeAnecdotes = () => {
	return async (dispatch) => {
		const anecdotes = await anecdoteService.getAll()
		dispatch(setAnecdotes(anecdotes))
	}
}

export const createAnecdote = (content) => {
	return async (dispatch) => {
		const anecdote = await anecdoteService.createNew(content)
		dispatch(addAnecdote(anecdote))
	}
}

export const vote = (id) => {
	return async (dispatch, getState) => {
		dispatch(updateVote(id))
		const state = getState()
		const anecdote = state.anecdotes.find((anecdote) => anecdote.id === id)
		anecdoteService.vote(id, anecdote.votes)
	}
}

export const { updateVote, addAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
