import { useState } from 'react'

const Header = () => (<h2>Give feedback</h2>)

const Button = (props) => {
  console.log(props, 'napin propertiesit ( eli parametrit)')
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Buttons = (props) => {
  
  const {good, setGood, bad, setBad, neutral, setNeutral, setAll, allClicks } = props

  const handleGoodClick = (props) => {
    console.log(props, 'Good napin painallus')
    setGood(good + 1)
    setAll(allClicks + 1)
  }

  const handleBadClick = (props) => {
    console.log(props, 'Bad napin painallus')
    setBad(bad + 1)
    setAll(allClicks + 1)
  }

  const handleNeutralClick = (props) => {
    console.log(props, 'Neutral napin painallus')
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
  }
  return (
    <div>
    <Button handleClick={handleGoodClick} text='Good'/>
    <Button handleClick={handleNeutralClick} text='Neutral'/>
    <Button handleClick={handleBadClick} text= 'bad'/>
    </div>
  )
}

const StatisticsLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = (props) => {

  if (props.allClicks === 0) {
    return (
      <div>
        <h2>Statistics </h2>
        <h3>No feedback given</h3>
      </div>
    )
    } else

  return (
    <>
      <h2>statistics </h2>
        <div>
          <table>
            <tbody>
              <StatisticsLine text="good" value={props.good}/>
              <StatisticsLine text="neutral" value={props.neutral}/>
              <StatisticsLine text="bad" value={props.bad}/>
              <StatisticsLine text="average" value={props.average}/>
              <StatisticsLine text="positive" value={props.positive}/>
            </tbody>
          </table>
        </div>
    </>
  )
  
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const average = (good - bad) / (good + bad + neutral)
  const positive= ((good / allClicks) *100)

  return [
    <div>
      <Header/>
      <Buttons allClicks={allClicks} setAll={setAll} good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad}/>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} average={average} positive={positive}/>
    </div>
  ]
}

export default App;
