import React, { useRef, useState } from 'react'

const Todo = () => {
  const [arr, setArray] = useState([])
  const [input, setInput] = useState("")
  // const [visibleList, setVisibleList] = useState(null)
  const inputRef = useRef(null);
  const handleInput = (e)=> {
    setInput(e.target.value)
  }
  const handleArray = () => {
    setArray([...arr, input]);
    setInput("")
    inputRef.current.focus();
  }
  const handleRemove = (index) => {
    const updatedArray = arr.filter((_, i) => i !== index);
    setArray(updatedArray);
  }
  
  return (
    <div>
      <input type="text" name="" id="" onChange={(e) => handleInput(e)} value={input} ref={inputRef} />
      <button onClick={handleArray}>upDate</button>
      <div>
        <ul>
          {
            arr.map((item,index)=> {
              return  (<li key={index}>
                        <div className="">
                          <p>{item}</p>
                          <button onClick={()=>handleRemove(index)}>X</button>
                        </div>
                        </li>)
              
            })
          }
          
        </ul>
      </div>
    </div>
  )
}

export default Todo
// (visibleList !== index && (
//   <li key={index}>
//   <div className="">
//     <p>{item}</p>
//     <button onClick={()=>handleRemove(index)}>X</button>
//   </div>
//   </li>
// )
// )