const TheList = ({name, id, setFiltered}) => {
    const buttonHandler = () => {
        setFiltered(name)
    }
    return (
    <li key={id}> 
    country name: {name} 
        <button onClick={buttonHandler}>Select</button>
     </li> 
     
     )
  }
  export default TheList