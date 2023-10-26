import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

export async function getAnecdotes() {
  const response = await axios.get(baseUrl);
  return response.data;
}

export async function createAnecdote(content) {
  const response = await axios.post(baseUrl, { content, votes: 0 });
  return response.data;
}

export async function vote(anecdote) {
  const obj = { ...anecdote, votes: anecdote.votes + 1 };
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, obj);
  return response.data;
}
