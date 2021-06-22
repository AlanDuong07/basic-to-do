import { FaTimes } from 'react-icons/fa'
const item = ({item, onDelete, onToggle}) => {
    return (
        <li className={`list-item ${item.complete ? 
        "completed-text" : ""}`}> 
            <button onClick={() => onToggle(item.id)} 
            className={`list-button ${item.complete ? 
            "completed-button" : ""}`}> </button>
            <h1>{item.name}</h1> 
            <FaTimes id="delete-button" onClick={() => onDelete(item.id)} style={{color: 'black', cursor: 'pointer' }} /> 
        </li>
    )
}

export default item
