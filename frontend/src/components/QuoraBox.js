import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/QuoraBox.css'

function QuoraBox() {
  return (
    <div className='quoraBox'>
      <div className='quoraBox__info'>
        <Avatar/>
      </div>
      <div className='quoraBox__quora'><p>What is your question?</p></div>
    </div>
  )
}

export default QuoraBox
