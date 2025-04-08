const FilteredNames =({name, id, number, deleteContact})=>{
  return (
    <li key={id}>{name} {number}
    <button onClick={deleteContact}>delete</button></li>
  )}

export default FilteredNames