import React from 'react'
import Button from 'react-bootstrap/Button'
import { signOut } from '../../services/authService'

const BottomButtons = () => {
  return (
    <div className="bottom-buttons">
      <Button onClick={signOut}>Log Out</Button>
    </div>
  )
}

export default BottomButtons