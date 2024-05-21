const Course = ({ course }) => {
    return (
      <div>
          <Header course={course} />
        <ul>
          <Content parts={course.parts} />
        </ul>
          <Total  parts={course.parts} />
      </div>
    )
  }

  const Header = ({ course }) => {
    return (
      <div>
        <h1>
          Web development curriculum
        </h1>
        <h2>
          {course.name}
        </h2>
      </div>
    )
  }
  
  const Part = ({ part, exercises }) => {
    return (
      <li>
        {part} {exercises}
      </li>
    )
  }
  
  const Content = ({ parts }) => {
      return (
        <div>
          {parts.map(part => (
            <Part key={part.id} part={part.name} exercises={part.exercises} />
          ))}
        </div>
      )
  }
  
  const Total = ({ parts }) => {
    const total = parts.reduce(( acc, part ) => acc + part.exercises, 0)  
    return (
        <div>
          <b>
            total of {total} exercises
          </b>
        </div>
      )
    }

export default Course
