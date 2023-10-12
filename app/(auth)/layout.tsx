import { Button } from '@nextui-org/button'
import Providers from '../components/provider'
import '../globals.css'
import NextSession from '../components/providers/session';

import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'Athena - Signin',
  description: 'All your results in one place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextSession>
          <Providers>
            <main className="h-screen w-screen inset-0 bg-amber-200 flex flex-col px-6">
              {children}
            </main>
          </Providers>
        </NextSession>
      </body>
    </html>
  )
}


