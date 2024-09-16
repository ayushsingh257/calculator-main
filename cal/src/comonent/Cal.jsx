import React, { useState } from 'react';
import '../App.css'

export default function Cal() {
  const operators = ['+', '-', '*', '/'];
  const [input, setInput]= useState("")
  const [result, setResult]= useState("")
  const handleClick = (value) => {
    if (value === '=') {
      setResult(eval(input));
      setInput("")
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    }
    else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } 
    else if (operators.includes(value) && operators.includes(input.slice(-1))) {    
        setInput(input.slice(0, -1) + value);
      }
    else {
      if(result !=""){
        setResult("")
      }
      setInput(input + value);
    }
  };

  return (
    <div className='body'>
        <div className='calbox'>
            <div className='display' style={{backgroundColor:"#c5d1e8"}} >
              <div>{input}</div>
              <div>{result}</div>
            </div>
            <div className='ac' onClick={()=>handleClick('AC')}>AC</div>
            <div onClick={()=>handleClick('DEL')}>DEL</div>
            <div onClick={()=>handleClick('/')}>/</div>
            <div onClick={()=>handleClick('2')}>2</div>
            <div onClick={()=>handleClick('1')}>1</div>
            <div onClick={()=>handleClick('3')}>3</div>
            <div onClick={()=>handleClick('*')}>*</div>
            <div onClick={()=>handleClick('4')}>4</div>
            <div onClick={()=>handleClick('5')}>5</div>
            <div onClick={()=>handleClick('6')}>6</div>
            <div onClick={()=>handleClick('+')}>+</div>
            <div onClick={()=>handleClick('7')}>7</div>
            <div onClick={()=>handleClick('8')}>8</div>
            <div onClick={()=>handleClick('9')}>9</div>
            <div onClick={()=>handleClick('-')}>-</div>
            <div onClick={()=>handleClick('.')}>.</div>
            <div onClick={()=>handleClick('0')}>0</div>
            <div onClick={()=>handleClick('=')} className='last'>=</div>
        </div>
    </div>
  )
}
