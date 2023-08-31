import React, { useEffect, useState } from 'react';
import './home.css'
const Home = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(input);
        setInput(result.toString()); 
        setOutput(result);
      } catch (error) {
        setInput('Error'); 
        setOutput('');
      }
    }else if(value ==="C") {
      setInput("")
      setOutput("")
    }else if (value === '<-') {
      
      setInput(input.slice(0, -1)); 
    }
    else{
      
        setInput(input + value); // Append value to input
      
      
    }
  };

  const handleKeyDown = (event) => {
    const keyPressed = event.key;
    
    // Define an array of valid keys (numbers and operators)
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '%'];
    if (keyPressed === 'Enter') {
      event.preventDefault();
      handleButtonClick('='); // Simulate = button click on Enter
    }
    
    // Handle Backspace key
    if (keyPressed === 'Backspace') {
      event.preventDefault();
      handleButtonClick('<-'); // Simulate <- button click on Backspace
    
    }
    if (validKeys.includes(keyPressed)) {
      event.preventDefault(); // Prevent default key behavior
      
        setInput(prevInput => prevInput + keyPressed); // Simulate button click for valid keys
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);
  
  return (
    <div className="calculator">
          <div className='container'>
            <div className='inputForm'>
              
                <input className="input" type="text" value={input} readOnly />
              
            </div>
            <div className="Buttons">
              <button onClick={() => handleButtonClick('C')}>C</button>
              <button onClick={() => handleButtonClick('%')}>%</button>
              <button onClick={() => handleButtonClick('=')}>=</button>
              <button onClick={() => handleButtonClick('/')}>/</button>

              <button onClick={() => handleButtonClick('7')}>7</button>
              <button onClick={() => handleButtonClick('8')}>8</button>
              <button onClick={() => handleButtonClick('9')}>9</button>
              <button onClick={() => handleButtonClick('*')}>*</button>
            
              <button onClick={() => handleButtonClick('4')}>4</button>
              <button onClick={() => handleButtonClick('5')}>5</button>
              <button onClick={() => handleButtonClick('6')}>6</button>
              <button onClick={() => handleButtonClick('-')}>-</button>
            
              <button onClick={() => handleButtonClick('1')}>1</button>
              <button onClick={() => handleButtonClick('2')}>2</button>
              <button onClick={() => handleButtonClick('3')}>3</button>
              <button onClick={() => handleButtonClick('+')}>+</button>
            
              <button onClick={() => handleButtonClick('0')}>0</button>
              <button onClick={() => handleButtonClick('.')}>.</button>
              {/* <button onClick={() => handleButtonClick('(')}>(</button>
              <button onClick={() => handleButtonClick(')')}>)</button> */}
              <button onClick={() => handleButtonClick('<-')}>x</button>
              
            </div>
          </div>
          
    </div>
      
  );
};

export default Home;