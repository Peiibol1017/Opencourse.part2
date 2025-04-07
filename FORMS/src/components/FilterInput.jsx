const FilterInput = (props) =>{
    const filteredName = props.filteredName
    const filterHandler = props.filterHandler
return(<input value={filteredName} onChange={filterHandler}/>)}

export default FilterInput