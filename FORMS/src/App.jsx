import { useState } from 'react'
import './App.css'
import FilteredNames from './components/FilterNames'
import AddNewName from './components/AddContacts'
import FilterInput from './components/FilterInput'

const App = () => {
const [persons, newPersons] = useState ([
  {name: 'Arto Hellas', id:'Arto Hellas', number:'346346346'},
  {name: 'pedro piique', id:'pedro piique', number:'5329056096'},
  {name: 'el amo de todo', id:'el amo de todo', number:'123123123'}
])
const [newName, setNewName] = useState ('')
const [newNumber, setNewNumber] = useState('')
const [filteredName, showFilteredName] = useState('')

const addNameHandler = (event) =>{
  setNewName(event.target.value)
}

const addNumberHandler = (event) =>{
  setNewNumber(event.target.value)
}

const filterHandler = (event) =>{
  showFilteredName(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterInput filterHandler={filterHandler} filteredName={filteredName}/>
      <h3>Add a new contact</h3>
      <AddNewName persons={persons} newName={newName} newNumber={newNumber} addNameHandler={addNameHandler} addNumberHandler={addNumberHandler} newPersons={newPersons} setNewName={setNewName} setNewNumber={setNewNumber}/>
      <h3>numbers</h3>
      <FilteredNames persons={persons} filteredName={filteredName}/>
    </div>
  )
}

export default App
