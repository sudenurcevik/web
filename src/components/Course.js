import React from 'react'

const Display= ({indices}) =>{
    const temp = indices.parts.map(p=>p.exercises)
    const total = temp.reduce((s,p)=>s+p)
    return(
        <div>
            <h2>{indices.name}</h2>
                {indices.parts.map(parts=><li key= {parts.id}> { parts.name } {parts.exercises}  </li>)}
                <h3>total of {total} exercises</h3>
        </div>
    )
}
const Course = ({ course }) => {
    return (
    <div>
        <h1>Web development curriculum</h1>
        {course.map(section=> <Display indices={section}/>)}
    </div>
  )
}
export default Course