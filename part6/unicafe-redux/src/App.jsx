import { setBad, setGood, setOk, reset, store } from './store'

function App() {
	return (
		<>
			<h2>Give feedback</h2>
			<Button handleClick={setGood}>Good</Button>
			<Button handleClick={setOk}>Ok</Button>
			<Button handleClick={setBad}>Bad</Button>
			<Button handleClick={reset}>Reset</Button>
			<Statistics
				good={store.getState().good}
				neutral={store.getState().ok}
				bad={store.getState().bad}
			/>
		</>
	)
}

function Button({ handleClick, children }) {
	return <button onClick={handleClick}>{children}</button>
}

function StatisticsLine({ text, value }) {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	)
}

function Statistics({ good, neutral, bad }) {
	const totalFeedback = good + neutral + bad
	const isTotalZero = totalFeedback === 0
	return (
		<>
			<h2>Statistics</h2>
			{!isTotalZero ? (
				<table>
					<tbody>
						<StatisticsLine text="Good" value={good} />
						<StatisticsLine text="Neutral" value={neutral} />
						<StatisticsLine text="Bad" value={bad} />
						<StatisticsLine text="All" value={totalFeedback} />
						<StatisticsLine text="Average" value={(good - bad) / totalFeedback} />
						<StatisticsLine text="Positive" value={(good / totalFeedback) * 100} />
					</tbody>
				</table>
			) : (
				'No feedback given'
			)}
		</>
	)
}

export default App
