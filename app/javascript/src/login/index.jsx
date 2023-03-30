import React from 'react'
import ReactDOM from 'react-dom'
import Login from './loginPage';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Login />,
    document.body.appendChild(document.createElement('div')),
  )
})