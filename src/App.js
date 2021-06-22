import './App.css'
import { useState } from 'react'
import Header from './components/header'
import TextInput from './components/text-input'
import Items from './components/items'

function App() {
  const [itemsList, updateItemsList] = useState([
    {
        "id": 1,
        "name": "Walk the dog",
        "complete": true
    },
    {
        "id": 2,
        "name": "Grocery shopping",
        "complete": false
    },
    {
        "id": 3,
        "name": "Finish software exploration",
        "complete": false
    },
    {
        "id": 4,
        "name": "Complete data analysis",
        "complete": false
    },
    {
        "id": 5,
        "name": "Dinner plans",
        "complete": false
    }

  ])

  //delete task item
  const deleteItem = (id) => {
    updateItemsList(itemsList.filter((item) => item.id !== id))
  }

  //toggle completed item on ItemsList
  const toggleCompleted = (id) => {
    updateItemsList( 
      itemsList.map((item) => 
        item.id === id ? { ...item, complete: 
        !item.complete } : item
      )
    )
  }

  //add a new item onto ItemsList
  const addItem = (Item) => {

    updateItemsList( (oldItemsList) => [...oldItemsList,
        {
          "id": (oldItemsList.length == 0 ? 0 : (parseInt(oldItemsList[oldItemsList.length - 1].id) + 1)),
          "name": Item.text,
          "completed": false
        }
      ] 
    )
  }
  return (
    <div className="App">
      <div className="App-console">
        <Header/>
        <TextInput onAdd={addItem}/>
        {itemsList.length > 0 ? (
          <Items itemsList={itemsList} 
          onDelete={deleteItem}
          onToggle={toggleCompleted}/>
         ) :(
           <h1 id="no-tasks-text">No tasks, woohoo!</h1>
         )}
      </div>
    </div>
  );
}

export default App;
