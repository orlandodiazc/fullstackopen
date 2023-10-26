import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

async function getAll() {
	const response = await axios.get(baseUrl)
	return response.data
}

async function createNew(content) {
	const response = await axios.post(baseUrl, { content, votes: 0 })
	return response.data
}

async function vote(id, votes) {
	const response = await axios.patch(`${baseUrl}/${id}`, { votes })
	return response
}

export default { getAll, createNew, vote }
