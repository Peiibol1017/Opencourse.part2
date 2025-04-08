

const Notification =({message, errorState}) =>{
const messageStyleError = {
        backgroundColor: 'lightcoral',
        fontSize: 25,
        font: 'bold',
        borderStyle: 'double',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
      }
      const messageStyleSucces = {
        backgroundColor: 'green',
        fontSize: 25,
        font: 'bold',
        borderStyle: 'double',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
      }
    if(message === null){
        return null
    }
    else if(message !== null && errorState === true)
    return (
        <div style={messageStyleError}>
        {message}
        </div>
    )
    else if (message !== null && errorState === false)
        return(
    <div style={messageStyleSucces}>
        {message}
    </div>
        )
}

export default Notification