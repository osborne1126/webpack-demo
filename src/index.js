import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import registerServiceWorker from './registerServiceWorker';
/*ReactDOM.render(
    <h1>Hi, world!</h1>,
    document.getElementById('root2')
  );
*/

 /* function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);
  */

 /* class Welcome extends React.Component { 
    render() {
      return <h1>Hello, Component</h1>;
    }
  }
  
  ReactDOM.render(
    <Welcome/>,
    document.getElementById('root')
  )
  */

import Welcome from './Welcome'

ReactDOM.render(
 /* <Welcome/>, */
  <Welcome name="frank"/>,
  document.getElementById('root')
)

