import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams();
  return (
    
    <div className="bg-slate-400 text-white p-4 m-4 text-4xl jutify-center">
      User: {id}
    </div>
    
    
  )
}

export default User
