import React from 'react'

const styles = {
  true: { backgroundColor: "#9ca3ae"},
  false: { backgroundColor: "#f7f8f9" },
}

const styleText = {
  true: {textDecoration: "line-through",  fontStyle: "italic"}
}

export default function List( {listItem, removeItem, chooseItem}) {
  // let checked = false;
  console.log({listItem});
  return (
    <div className="todo-list" >
      {listItem.map((item, idx) => {
        const {itemName} = item;
        return (
          <div key={idx} className="todo-item" style={{...styles[item.isCompleted] }}>
            <div className="todo-item-name" style={{...styleText[item.isCompleted] }}>
              {itemName}
              
            </div>
            <div className="todo-item-action">
                <div>
                  {/* eslint-disable-next-line  */}
                  <a className="removeButton" onClick = {() => removeItem(idx)} >X</a>
                </div>
                <div>
                  <input type="checkbox" checked = {item.isCompleted} onChange={() => chooseItem(idx)}/>
                </div>
            </div>
          </div>
        );
        
      })}
      
    </div>
    
  );
}
