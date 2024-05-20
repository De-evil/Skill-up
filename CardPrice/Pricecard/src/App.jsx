import React from 'react'
import './index.css';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';


export default  function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <Left />
        </div>
        <div className="col-lg-4">
          <Middle />
        </div>
        <div className="col-lg-4">
          <Right />
        </div>
      </div>
    </div>
  );
}
