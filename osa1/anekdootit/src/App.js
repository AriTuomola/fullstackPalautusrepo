import { useState } from 'react'

const Header = ({text}) => <h2>{text}</h2>

const Anecdote = ({anecdotes, selected}) => <>{anecdotes[selected]}</>

const VoteAmount = ({points, selected}) => <>has {points[selected]} votes</>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>


const Buttons = ({setSelected, setPoints, anecdotes, selected, points}) => {
  
  const setTheSelected = () => {
    setSelected((Math.floor(Math.random()*anecdotes.length)))
  }

  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <Button handleClick={vote} text='vote'/>
      <Button handleClick={setTheSelected} text='next anecdote' />
    </div>
  )
}

const MostVotes = ({points, anecdotes}) => {
  if (Math.max(...points) === 0) {
    return (
      <div>
      <p>No votes</p>
      </div>
    )

  }
    return (
      <div>
        <Header text={'Anecdote with most votes'}/>
        <p>{(anecdotes[points.indexOf(Math.max(...points))])} <br></br> has {(Math.max(...points))} votes</p>
      </div>
    )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  console.log(points)
  console.log(Math.max(...points))
  console.log(anecdotes[points.indexOf(Math.max(...points))])

  return (
    <>
      <Header text={'Anecdote of the day'}/>
      <Anecdote anecdotes={anecdotes} selected={selected} /><br></br>
      <VoteAmount points={points} selected={selected}/><br></br>
      <Buttons selected={selected} setSelected={setSelected} setPoints={setPoints} anecdotes={anecdotes} points={points}/>
      <MostVotes points={points} anecdotes={anecdotes}/>
    </>
  )
}

export default App
