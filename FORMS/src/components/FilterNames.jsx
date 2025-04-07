const FilteredNames =(props)=>{
const persons = props.persons
const filteredName = props.filteredName
const showFilteredNames = persons.filter(person => person.name.toLowerCase().indexOf(filteredName.toLowerCase()) > -1,)
return(
      <ul>
        {showFilteredNames.map(person => <li key={person.id}>{person.name} = {person.number}</li>)}
      </ul>
)
}
export default FilteredNames