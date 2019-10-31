import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../CustomButton/custom-button.component'

import './actions.styles.scss'

const Actions = ({ match }) => {
  console.log(match, "actions props")

  return (
    <div className="actions-container">
      <p className="actions">What do you want to do?</p>
      <div className="buttons-container">

        {
          match.url === "/my-books" ?
            null
            :
            <Link to="/my-books"><CustomButton>My Books</CustomButton></Link>
        }

        <CustomButton>My profile</CustomButton>
      </div>
    </div>
  )
}





export default Actions