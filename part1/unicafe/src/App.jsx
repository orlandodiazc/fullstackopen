import { useState } from 'react'


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <>
      <h2>Give feedback</h2>
      <Button handleClick={() => setGood(good+1)}>Good</Button>
      <Button handleClick={() => setNeutral(neutral+1)}>Neutral</Button>
      <Button handleClick={() => setBad(bad+1)}>Bad</Button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

function Button({handleClick, children}) {
  return <button onClick={handleClick}>{children}</button>
}

function StatisticsLine({text, value}){
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

function Statistics({good, neutral, bad}) {
  const totalFeedback = good + neutral + bad 
  const isTotalZero = totalFeedback === 0
  return (
  <>
    <h2>Statistics</h2>
    { !isTotalZero ? 
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
    : 'No feedback given'
    }
  </>
  )
}

export default App
