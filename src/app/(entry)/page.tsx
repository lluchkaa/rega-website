import Link from 'next/link'
import type * as React from 'react'

import { buttonVariants } from '@/components/uikit'

const LanguagePage: React.FC = () => (
  <main className="mx-auto flex min-h-svh max-w-xl flex-col items-center justify-center gap-6 px-6">
    <h1 className="text-4xl font-semibold tracking-tight">REGA</h1>
    <nav aria-label="Language / Мова" className="flex gap-3">
      <Link
        href="/en/"
        hrefLang="en"
        lang="en"
        className={buttonVariants({ variant: 'outline' })}
      >
        English
      </Link>
      <Link
        href="/uk/"
        hrefLang="uk"
        lang="uk"
        className={buttonVariants({ variant: 'outline' })}
      >
        Українська
      </Link>
    </nav>
  </main>
)

export default LanguagePage
