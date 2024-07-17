'use client'

import { useState, useEffect } from 'react'
import { signIn, useSession } from "next-auth/react"

export default function GoogleAuthPopup() {
  const { data: session, status } = useSession()
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      setShowPopup(true)
    }
  }, [status])

  const handleSignIn = () => {
    signIn('google', { callbackUrl: '/' })
  }

  if (session) {
    return (
      <div className="fixed top-5 right-5 bg-white p-4 rounded shadow">
        <p>Logged in as: {session.user?.name}</p>
        <p>Email: {session.user?.email}</p>
      </div>
    )
  }

  if (showPopup) {
    return (
      <div className="fixed top-5 right-5 bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Sign in with Google</h2>
        <p className="mb-4">Choose an account to continue:</p>
        <button 
          onClick={handleSignIn}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sign in with Google
        </button>
      </div>
    )
  }

  return null
}