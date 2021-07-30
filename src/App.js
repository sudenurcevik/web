import React, { useState } from 'react'
import Name from './components/Name'

const Filter =({person_list,pattern})=>{
  const filtered=[]
  person_list.forEach(value=> {
    console.log(value)
    if ((value.name.toLowerCase()).search(pattern)!==-1) {
      filtered.push(value)
    }
  });

  if (filtered.length!==0) {
    return(
      filtered.map(index => <Name key={index.id} person={index}/> )
    )
  }
  return ""
}

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber,setNewNumber]=useState('')
  const [pattern,setPattern]=useState('')

  const addName=(event)=>{
    event.preventDefault()
    const nameObject={
      name:newName,
      id: persons.length+1,
      number: newNumber
    }
    const nameList= persons.map(person=>person.name)
    if (nameList.includes(newName)) {
      window.alert(newName +" is already added to phonebook")
      alert(newName +" is already added to phonebook");
      
    }
    else{
      setPersons(persons.concat(nameObject))
      setNewName("")
      setNewNumber("")
    }
  }
  const handleNameChange=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange=(event)=>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handlePatternChange=(event)=>{
    console.log(event.target.value)
    setPattern(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
        <form>
          <div>
            filter shown with <input value={pattern} 
                                     onChange={handlePatternChange}/>
          </div>
        </form>
      
      <h2>Add a new person</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName}
                       onChange={handleNameChange}/>
        </div>
        <div>number: <input value={newNumber}
                            onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person=>
          <Name key={person.id} person={person}/>
          )}
      </ul>
      <ul>
        <Filter person_list={persons} pattern={pattern.toLowerCase()} />
      </ul>
      
    </div>
  )
}

export default App