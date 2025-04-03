const Course = ({course}) => {
    return (
        <>
        <h1>Web development curriculum</h1>
        <Header course ={course}/>
        <Content course ={course}/>
        </>
    )
}
const Header = ({course}) =>{
    const tittle = course.name
return (
    <h2 key={course.id}>{tittle}</h2>
)
}
const Content =({course}) =>{
const part= course.parts
const listparts = part.map(parts => 
    <li key={parts.id}>
       {parts.name} {parts.exercises}
       </li> 
   )
const totalexercises = part.reduce((sum, ex) => sum + ex.exercises, 0 )
   
return(
    <>
    <ul>
{listparts}
    </ul>
    <b>total of {totalexercises} exercises</b>
    </>
)
}
export default Course