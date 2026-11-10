import Link from 'next/link'
import type * as React from 'react'

import { buttonVariants } from '@/components/uikit'

const LanguagePage: React.FC = () => (
  <main className="relative mx-auto flex min-h-svh max-w-2xl flex-col items-center justify-center gap-8 overflow-hidden px-6 py-20 text-center">
    <div aria-hidden="true" className="absolute top-0 h-1 w-24 bg-accent" />
    <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
      Lviv · Drivers & bikers school
    </p>
    <h1 className="text-8xl font-black tracking-[-0.09em] italic">
      REGA<span className="text-accent">.</span>
    </h1>
    <p className="max-w-md text-xl leading-relaxed text-muted-foreground">
      Впевненість починається тут.
      <br />
      Your road to confidence starts here.
    </p>
    <nav
      aria-label="Language / Мова"
      className="flex flex-wrap justify-center gap-3"
    >
      <Link
        href="/en/"
        hrefLang="en"
        lang="en"
        className={buttonVariants({
          variant: 'outline',
          className: 'h-12 px-7',
        })}
      >
        English
      </Link>
      <Link
        href="/uk/"
        hrefLang="uk"
        lang="uk"
        className={buttonVariants({ className: 'h-12 px-7' })}
      >
        Українська
      </Link>
    </nav>
  </main>
)

export default LanguagePage
