import React from 'react';
import ReactDOM from 'react-dom';
import {Cv} from './cv'
import './index.css'

function Hi() {
  return (
    <Cv />
  )

}

ReactDOM.render(<Hi/>, document.querySelector('#root'));