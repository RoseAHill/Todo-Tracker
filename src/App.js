/* src/App.js */
import React, { useState } from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'

import List from './components/list/ListHandler'

import './App.css'

import awsExports from "./aws-exports"
Amplify.configure(awsExports)


const App = () => {
  const [todos, setTodos] = useState([])

  return (
    <div className='content'>
      <List todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default withAuthenticator(App)