import React from 'react';

const ToDoLists = (props) => {

    //const [first, setfirst] = useState(second);

   

    return (
        <>
            <div className="todo_style">
                {/* <i class="fas fa-trash-alt"></i> */}
                <i className="fas fa-times" aria-hidden="true" onClick={()=>{
                    props.onSelect(props.id)
                }}/>
                <li>{props.text}</li>
            </div>
        </>

    );
};

export default ToDoLists;
