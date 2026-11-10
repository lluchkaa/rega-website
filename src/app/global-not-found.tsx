import type { Metadata } from 'next'
import Link from 'next/link'
import type * as React from 'react'

import '@/styles/globals.css'

export const metadata: Metadata = { title: '404 — REGA' }

const GlobalNotFound: React.FC = () => (
  <html lang="en">
    <body>
      <main className="mx-auto flex min-h-svh max-w-xl flex-col items-center justify-center gap-6 px-6">
        <h1 className="text-4xl font-semibold">404</h1>
        <p>Page not found / Сторінку не знайдено</p>
        <Link href="/en/" lang="en">
          English
        </Link>
        <Link href="/uk/" lang="uk">
          Українська
        </Link>
      </main>
    </body>
  </html>
)

export default GlobalNotFound
