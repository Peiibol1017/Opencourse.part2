const FilterInput = (props) =>{
    const filteredName = props.filteredName
    const filterHandler = props.filterHandler
return(
    <div>
    filter: <input value={filteredName} onChange={filterHandler}/>
    </div>
)
}

export default FilterInput