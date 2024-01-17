import React from 'react'

const MainActivity = ({children}) => {
  return (
    <div className='col-lg-10 d-flex flex-column' style={{height:'100vh', padding:30}}>
      {children}
    </div>
  )
}

export default MainActivity