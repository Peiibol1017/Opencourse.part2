const AddNewName = (props) =>{
    const persons = props.persons
    const newName = props.newName
    const newNumber = props.newNumber
    const addName = (event) =>{
        event.preventDefault()
        if (persons.find((personid) => personid.id == newName)){
          window.alert (`${newName} is already added to phonebook` )
        } 
        else {
        const personItem ={
          name: newName,
          id:newName,
          number:newNumber,
        } 
        props.newPersons (persons.concat(personItem))
        props.setNewName ('')
        props.setNewNumber('')}
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