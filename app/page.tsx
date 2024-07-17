// import GoogleSignInButton from '../components/GoogleSignInButton'

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1 className="text-4xl font-bold">Welcome to My Auth App</h1>
//       <GoogleSignInButton />
//     </main>
//   )
// }

'use client'

import { useSession } from 'next-auth/react'
import GoogleSignInButton from '../components/GoogleSignInButton'

export default function Home() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? (
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome, {session.user?.name}!</h1>
          <p className="text-xl">Your email is: {session.user?.email}</p>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to My Auth App</h1>
          <GoogleSignInButton />
        </div>
      )}
    </main>
  )
}