import {useState} from 'react'
const TextInput = ({onAdd}) => {
    const [text, setText] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert("Please add a task :)")
            return
        }

        onAdd({text})

        setText("")
    }
    return (
        <div id="text-input">
            <input type='text' 
            value={text} 
            onChange={(e) => 
            setText(e.target.value)}
            placeholder="Type your task here...">  
            </input>
            <button type="submit"
            onClick={onSubmit}
            value='Submit'>Submit</button>
        </div>
    )
}

export default TextInput