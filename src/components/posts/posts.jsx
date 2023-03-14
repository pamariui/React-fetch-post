import React from 'react'
import './style.css'

const Posts = ({children}) => {
  return (
    <div className='posts-container'>
        {children}
    </div>
  )
}

export default Posts;