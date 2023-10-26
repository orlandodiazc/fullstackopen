import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAnecdotes, vote } from "./requests";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useSetNotification } from "./NotificationContext";

const App = () => {
  const queryClient = useQueryClient();
  const setNotification = useSetNotification();
  const voteMutation = useMutation(vote, {
    onSuccess: (updatedAnecdote) => {
      setNotification(`Upvoted ${updatedAnecdote.content}`, 5);
      queryClient.setQueryData("anecdotes", (prev) => {
        return prev.map((anecdote) => {
          if (updatedAnecdote.id !== anecdote.id) return anecdote;
          return { ...anecdote, votes: updatedAnecdote.votes };
        });
      });
    },
  });
  const result = useQuery("anecdotes", getAnecdotes, {
    retry: false,
  });

  const handleVote = (anecdote) => {
    voteMutation.mutate(anecdote);
  };

  if (result.isLoading) return <span>Loading data...</span>;
  if (result.isError)
    return <span>Anecdote service not available, server issues</span>;
  const anecdotes = result.data;
  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes} votes
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
