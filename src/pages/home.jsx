import React, { useEffect, useState } from 'react';
import './home.css'
const Home = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value,value2) => {
    if (value === '=') {
      try {
      console.log(input)
      let inputToEvaluate = input.replace(/^[+*/%]*0*/, '').replace(/[+*/%]+$/, '');
        console.log(inputToEvaluate)
        const parts = inputToEvaluate.split(/([+\-*/%])/);
      console.log(parts)
      const processedParts = [];
      
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (i % 2 === 0) {
          // Process numeric parts (even indices)
          const numericPart = Number(part);
          if (!isNaN(numericPart)) {
            processedParts.push(numericPart.toString());
            // console.log(processedParts)
          }
        } else {
          // Process operator parts (odd indices)
          processedParts.push(part);
          // console.log(processedParts)
        }
      }
      
      // Join the processed parts back together
      const newJointString = processedParts.join('');
        console.log(newJointString)
        const result = eval(newJointString);
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
      if (input === '' && (value === '*' || value === '/')) {
        // Prevent '*' or '/' as the first character
        return;
      }
      if (isOperator(value)) {
        // Check if the last character is an operator, and prevent adding another operator
        if (isOperator(input.charAt(input.length - 1))) {
          return;
        }
      }
        setInput(prevInput => prevInput + value); 
      
    }
  };
  
  const isOperator= (char) => {
    const operators = ['+', '-', '*', '/', '%'];
    console.log(operators.includes(char));
    return operators.includes(char)
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
    if (keyPressed === 'Escape') {
      // Clear the input when the Escape key is pressed
      setInput('');
      return;
    }
    if (input === '' && (keyPressed === '*' || keyPressed === '/')) {
      // Prevent '*' or '/' as the first character
      return;
    }
    if (validKeys.includes(keyPressed)) {
      event.preventDefault(); // Prevent default key behavior
      // if (isOperator(keyPressed)) {
      //   // Check if the last character is an operator, and prevent adding another operator
      //   if (isOperator(input.charAt(input.length - 1))) {
      //     return;
      //   }
      // }
      if (isOperator(keyPressed)) {
        // Check if the last character is an operator, and prevent adding another operator
        if (isOperator(input.charAt(input.length - 1))) {
          return;
        }
      }
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
              
                <input className="input" type="text" value={input}/>
              
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
              <button onClick={()=> handleButtonClick('00')}>00</button>
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