import type { Metadata } from 'next'
import type * as React from 'react'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'REGA',
  description: 'REGA — English / Українська',
}

type Props = { children: React.ReactNode }

const EntryLayout: React.FC<Props> = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
)

export default EntryLayout
