import { useState, useEffect } from 'react'
import './App.css'
import FilteredNames from './components/FilterNames'
import AddNewName from './components/AddContacts'
import FilterInput from './components/FilterInput'
import noteService from './Services/Services'
import Notification from './components/Notifications'

const App = () => {
const [persons, newPersons] = useState ([])
const [newName, setNewName] = useState ('')
const [newNumber, setNewNumber] = useState('')
const [filteredName, showFilteredName] = useState('')
const [errorMessage, setErrorMessage]= useState(null)
const [errorState, setErrorState]= useState (true)

const loadPage = () => {
noteService
.getAll()
.then(response => {
  newPersons(response.data)
})
}
useEffect (loadPage,[])

const addNameHandler = (event) =>{
  setNewName(event.target.value)
}

const addNumberHandler = (event) =>{
  setNewNumber(event.target.value)
}

const filterHandler = (event) =>{
  showFilteredName(event.target.value)
}

const deleteHandler = (personId) => {
  window.confirm(
    `delete ${personId} ?`
  )
  noteService
  .deleteContact(personId)
  .then(response => {
    setErrorState(false)
    setErrorMessage(
      `contact ${response.data.name} succesfuly deleted`
    )
    setTimeout(()=>{
  setErrorMessage(null)
}, 5000)
    loadPage()
  })
  .catch(error =>{
    setErrorState(true)
    setErrorMessage(error)
  setTimeout(()=>{
    setErrorMessage(null)
  }, 5000)
  loadPage()
  })
}
const showFilteredNames = persons.filter(person => person.name.toLowerCase().indexOf(filteredName.toLowerCase()) > -1,)
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} errorState={errorState}/>
      <FilterInput filterHandler={filterHandler} filteredName={filteredName}/>
      <h2>Add a new contact</h2>
      <AddNewName persons={persons} newName={newName} newNumber={newNumber} addNameHandler={addNameHandler} addNumberHandler={addNumberHandler} newPersons={newPersons} setNewName={setNewName} setNewNumber={setNewNumber} setErrorMessage={setErrorMessage} setErrorState={setErrorState}/>
      <h2>numbers</h2>
      <ul>  
      {showFilteredNames.map((person) => <FilteredNames key={person.id} name={person.name} number={person.number} deleteContact={() => deleteHandler(person.id)}/>)}
      </ul>
    </div>
  )
}

export default App
