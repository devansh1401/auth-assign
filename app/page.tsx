
// 'use client'

// import { useSession, signOut } from 'next-auth/react'
// import GoogleSignInButton from '../components/GoogleSignInButton'

// export default function Home() {
//   const { data: session, status } = useSession()

//   if (status === 'loading') {
//     return <p>Loading...</p>
//   }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       {session ? (
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4">Welcome, {session.user?.name}!</h1>
//           <p className="text-xl mb-4">Your email is: {session.user?.email}</p>
//           <button
//             onClick={() => signOut({ callbackUrl: '/' })}
//             className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Log out
//           </button>
//         </div>
//       ) : (
//         <div>
//           <h1 className="text-4xl font-bold mb-4">Welcome to My Auth App</h1>
//           <GoogleSignInButton />
//         </div>
//       )}
//     </main>
//   )
// }
'use client'

import GoogleSignInButton from '../components/GoogleSignInButton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold mb-4">Welcome to My Auth App</h1>
        <GoogleSignInButton />
      </div>
    </main>
  )
}