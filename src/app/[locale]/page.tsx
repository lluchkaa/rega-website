import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { buttonVariants } from '@/components/uikit'
import { Link } from '@/i18n/navigation'

const HomePage: React.FC = async () => {
  const t = await getTranslations('Home')
  return (
    <main className="mx-auto flex min-h-svh max-w-xl flex-col items-center justify-center gap-6 px-6 text-center">
      <Image src="/favicon.ico" alt="" width={48} height={48} />
      <h1 className="text-4xl font-semibold tracking-tight">REGA</h1>
      <p className="text-muted-foreground">{t('description')}</p>
      <nav aria-label={t('language')} className="flex gap-3">
        <Link
          href="/"
          locale="en"
          hrefLang="en"
          lang="en"
          className={buttonVariants({ variant: 'outline' })}
        >
          English
        </Link>
        <Link
          href="/"
          locale="uk"
          hrefLang="uk"
          lang="uk"
          className={buttonVariants({ variant: 'outline' })}
        >
          Українська
        </Link>
      </nav>
    </main>
  )
}

export default HomePage
