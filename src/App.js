import { React, useEffect, useState } from 'react';

import './App.css';

import HelloButton from './HelloWorld/HelloButton';
import HelloInputText from './HelloWorld/HelloInputText';
import HelloDanger from './HelloWorld/HelloDanger';
import HelloTypewriter from './HelloWorld/HelloTypewriter';
import HelloInLineStyle from './HelloWorld/HelloInLineStyle';
import HelloStyleConditional from './HelloWorld/HelloStyleConditional';
const helloText = 'Hello World!';

function HelloWorldFunction() {
  return (
      <h1>{helloText}</h1>
  );
}

const HelloWorldEfect = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  if (!isLoaded) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return children;
};



const App = () => (
  <div>
    {/* 1 - usando componente de classe + button */}
    <div className='hello_container'><HelloButton text = {helloText} /></div>

    {/* 2 - usando componente de funcao + input text */}
    <div className='hello_container'><HelloInputText text = {helloText} /></div>

    {/* 3 - usando componente de funcao + css */}
    <div className='hello_container'><HelloDanger text = {helloText} /></div>

    {/* 4 - usando componente de funcao + css com efeitos */}
    <div className='hello_container'><HelloTypewriter text = {helloText} /></div>

    {/* 5 - usando componente de classe + estilo in line */}
    <div className='hello_container'><HelloInLineStyle text = {helloText} /></div>
      
    { /*  6 - usando uma funcao */}
    <div className='hello_container'><HelloWorldFunction /></div>

    { /* 7 - usando uma funcao com efeitos */}
    <div className='hello_container'><HelloWorldEfect>{helloText}</HelloWorldEfect></div>
    
    {/* 8 - usando componente de funcao + estilo condicional #1 */}
    <div className='hello_container'><HelloStyleConditional text = {helloText} result = "error" /></div>
   
     {/* 9 - usando componente de funcao + estilo condicional #2 */}
     <div className='hello_container'><HelloStyleConditional text = {helloText} result = "success" /></div>
    
     {/* 10 - sem uso de componente  */}
     <div className='hello_container'><h3> {helloText} </h3></div>
    
  </div>

);



export default App;
