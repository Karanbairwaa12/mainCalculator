import React, { useState } from 'react'
import './app.css'
const Game = () => {
  const [button1, setButton1] = useState(false)
  const [button2, setButton2] = useState(false)
  const [condition, setCondition] = useState(true)
  const [text, setText] = useState(false)
  const [position, setPosition] = useState({ x: 100, y:0});
  const handleForMan = ()=> {
    setButton1(!button1)
    setCondition(false)
  }
  const handleForWoman= ()=> {
    setButton2(!button2)
    setCondition(false)
  }
  const handleText = () => {
    setText(!text)
  }
  const handleHover = () => {
    const maxX = Math.min(window.innerWidth - 100, 300);
  const maxY = Math.min(window.innerHeight - 100, 300); 

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setPosition({ x: randomX, y: randomY });
  };
  const buttonStyle = {
    position: 'absolute',
    left: position.x + 'px',
    top: position.y + 'px',
  };
  return (
    <div>
      <div className='game'>
        {
          condition && (
            <div className='choseGendar'>
              <button onClick={handleForMan}>Man</button>
              <button onClick={handleForWoman}>Woman</button>
            </div>
          )
        }
        
        {
          button1 && (
            <div className='button1'>
              {
                text? (<h1>I know :) you Liar</h1>)
                  :(
                    <>
                      <h1>Are you sure you are a Boy?</h1>
                      <div className="cBtn">
                        <div className='buttonHover'> 
                          <button style={buttonStyle} onMouseEnter={handleHover} >yes</button>
                        </div>
                        
                        <button onClick={handleText}>no</button>
                      </div>
                    </>
                    
                  )
              }
              
              
            </div>
          )
        }
        {
          button2 && (
            <div className='button1'>
              {
                text? (<h1>I know :) you Liar</h1>)
                  :(
                    <>
                      <h1>Are you sure you are a Girl?</h1>
                      <div className="cBtn">
                        <div className='buttonHover'> 
                          <button style={buttonStyle} onMouseEnter={handleHover} >yes</button>
                        </div>
                        
                        <button onClick={handleText}>no</button>
                      </div>
                    </>
                    
                  )
              }
              
              
            </div>
          )
        }
        
        
      </div>
    </div>
  )
}

export default Game
