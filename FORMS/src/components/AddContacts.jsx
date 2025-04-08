import noteService from '../Services/Services'

const AddNewName = (props) =>{
    const persons = props.persons
    const newName = props.newName
    const newNumber = props.newNumber
    const addName = (event) =>{
        event.preventDefault()
        if (persons.find((personid) => personid.id == newName)){
          if(window.confirm (`${newName} is already added to phonebook, you want to replace with the new number?`)){
          const personItem={
            name: newName,
            id:newName,
            number:newNumber,
          }
          noteService
          .update(newName, personItem)
          .then(response => {
            props.newPersons (persons.map(person => person.id !== newName ? person : response.data))
            props.setNewName ('')
            props.setNewNumber('')
            props.setErrorState(false)
            props.setErrorMessage(`${newName} has been changed`)
            setTimeout(()=>{
              props.setErrorMessage(null)
            }, 5000)
          })
          .catch(e =>{
            props.setErrorState(true)
            props.setErrorMessage(`${e}`)
          setTimeout(()=>{
            props.setErrorMessage(null)
          }, 5000)
          })
        }
        else {
          props.setErrorState (true)
          props.setErrorMessage(`No changes realized`)
        setTimeout(()=>{
          props.setErrorMessage(null)
        }, 5000)}
      }
        else {
        const personItem ={
          name: newName,
          id:newName,
          number:newNumber,
        } 
        noteService
        .create(personItem)
        .then(response => {
        props.newPersons (persons.concat(response.data))
        props.setNewName ('')
        props.setNewNumber('')
        props.setErrorState(false)
        props.setErrorMessage(`${newName} has been added to phonebook`)
        setTimeout(()=>{
          props.setErrorMessage(null)
        }, 5000)
        })
        .catch(()=>{
          props.setErrorState(true)
          props.setErrorMessage(`${newName} has already been deleted from server`)
        setTimeout(()=>{
          props.setErrorMessage(null)
        }, 5000)
        })
      }
    }
return (
    <form onSubmit={addName}>
    <div>
      name:<input value={newName} onChange={props.addNameHandler} />
    </div>
    <div>
      number:<input value={newNumber} onChange={props.addNumberHandler}/>
    </div>
    <div>
      <button type='submit'>add</button>
    </div>
  </form>
)
}
export default AddNewName