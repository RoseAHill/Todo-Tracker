/* src/App.js */
import './App.css'
import React, { useState } from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'

import List from './components/list/ListHandler'
import BottomButtons from './components/auth/BottomButtons'

import awsExports from "./aws-exports"
Amplify.configure(awsExports)

const App = () => {
  const [todos, setTodos] = useState([])

  return (
    <div className='content'>
      <List todos={todos} setTodos={setTodos} />
      <BottomButtons />
    </div>
  )
}

export default withAuthenticator(App)