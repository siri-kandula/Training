Project folder:
Public/index.html: The main html file that serves as the entry point for the app.
Src/index.js: the javascript entry point for the react app where the DOM is rendered.
Src/App.js: The main component that serves as the root of the component tree
Src/components: A folder to store reusable components.
1.	Components: core building blocks of a react application
They help to create reusable block of code
Example: App.js
import React from 'react'
import './App.css'
const Welcome =()=> <h1 className="message">Hello Siri</h1>
function App(){
  return (
    <div className="App">
      <Welcome />
    </div>
  )
}
export default App;
App.css:
.message{
  color:blue;
  background-color: aquamarine;
  font-size: 40px;
  text-align: center;
  width:30%;
  margin-left: 80px;
}


For moving text:
@keyframes moveText {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}

.message {
  color: rgb(204, 0, 255);
  background-color: yellow;
  font-size: 40px;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 30%;
  margin: 40px auto;
  margin-left: 80px;
  animation: moveText 2s infinite alternate ease-in-out;
}

//vs code
App.js:
import React from 'react'
import './App.css'
import Welcome from'./Welcome'

const App=()=>{
  return (
    <div style={{textAlign:'center',color:'red'}}>
      <Welcome name=" Siri" greeting=" Hello"/>
      <Welcome name=" Harshini" greeting="Hi"/>
    </div>
  )
}

// const Welcome =()=> <h1 className="message">Hello Siri</h1>
// function App(){
//   return (
//     <div className="App">
//       <Welcome />
//     </div>
//   )
// }
export default App;

App.css:
/* .message{
  color:rgb(204, 0, 255);
  background-color: yellow;
  font-size: 40px;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0);
  width:30%;
  margin: 40px auto;
  margin-left: 80px;
} */

Welcome.js:
import React from 'react';
const Welcome=(props)=>{
    const{name,greeting}=props;
return(
    <h1 className='message'>
        {greeting},{name}
    </h1>
)
}
export default Welcome;

