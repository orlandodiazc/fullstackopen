import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	filteredData: [],
	query: '',
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		updateFilterQuery(state, action) {
			state.query = action.payload
		},
	},
})

export const { updateFilterQuery } = filterSlice.actions
export default filterSlice.reducer
