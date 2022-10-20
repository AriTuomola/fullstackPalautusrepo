
const Header = (props) => {

  console.log(props)
 
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)

  return (
    <>
      <>
        {props.part.name} {props.part.exercises}
      </>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        <Part part={props.course[0]} exercises={props.course[0]}/>
      </p>
      <p>
        <Part part={props.course[1]} exercises={props.course[1]}/>
      </p>
      <p>
        <Part part={props.course[2]} exercises={props.course[2]}/>
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.course[0].exercises + props.course[1].exercises + props.course[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
   name: ['Half Stack application development'],

   parts: [
      {
       name: 'Fundamentals of React',
       exercises: 10
     },
     {
        name: 'Using props to pass data',
       exercises: 7
      },
      {
       name : 'State of a component',
       exercises: 14
     }

    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content course={course.parts}/>
      <Total course={course.parts}/>
    </div>
  )
}

export default App;