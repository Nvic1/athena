import Providers from '../components/provider'
import '../globals.css'

import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'Athena - Signin',
  description: 'Sign in to access results',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <Providers>
            <main className="h-screen w-screen inset-0 bg-amber-200 flex flex-col px-6">
              {children}
            </main>
          </Providers>
      </body>
    </html>
  )
}


