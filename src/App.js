import './App.css';
import { useState } from 'react';
import ToDoLists from './ToDoLists';

function App() {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]); //converted to the array with [] bracket

  const itemEvent = (e) => {

    return setInputList(e.target.value);

  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];

    })

    setInputList("");

  }

  const deleteItems=(id)=>{
    //console.log("deleted !!");

    setItems((oldItems)=>{
      return oldItems.filter((element,index)=>{
        
        return index!==id;
      })
       

    })

}


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='Add a items' onChange={itemEvent} value={inputList} />
          <button onClick={listOfItems}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}
            {/* {Items.map((itemval)=>{ return <li>{itemval}</li>})} */}
            {Items.map((itemval, index) => { 
              return (
              <ToDoLists 
              id={index} 
              key={index} 
              text={itemval} 
              onSelect={deleteItems} 
            />) })}


          </ol>
        </div>
      </div>

    </>
  );
}

export default App;
