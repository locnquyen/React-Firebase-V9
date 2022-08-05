import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {

  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }

    if (!authToken) {
      navigate('/login')
    }



  }, [])

  const handleLogOut = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/login')
  }
  return (
    <div>
      <h1>Xin chào </h1>
      <button
        onClick={handleLogOut}
      >
        Log out
      </button>
    </div>
  )
}
