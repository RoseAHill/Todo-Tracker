import './BottomButtons.css'
import React from 'react'
import { ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap'
import { signOut } from '../../services/authService'
import SortingButtons from './SortingButtons'
import { AmplifyAuthContainer, AmplifySignOut } from '@aws-amplify/ui-react'

const BottomButtons = ({ setSortByIndex, sortDirection, setSortDirection }) => {
  return (
    <div className="toolbar">
    <ButtonToolbar className="bottom-buttons">
      <SortingButtons setSortByIndex={setSortByIndex} sortDirection={sortDirection} setSortDirection={setSortDirection} />
      <ButtonGroup>
        <AmplifyAuthContainer>
          <AmplifySignOut />
        </AmplifyAuthContainer>
      </ButtonGroup> 
    </ButtonToolbar>
    </div>
  )
}

export default BottomButtons