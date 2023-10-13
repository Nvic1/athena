import '../globals.css'

import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'Athena - Register',
  description: 'Create an account with your organizations credentials',
}

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
            <main className="h-screen w-screen inset-0 bg-gradient-to-tr from-white to-neutral-200 flex flex-col p-4">
              {children}
            </main>
      </body>
    </html>
  )
}