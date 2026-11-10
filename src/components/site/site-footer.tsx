import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { Link } from '@/i18n/navigation'

const SiteFooter: React.FC = async () => {
  const t = await getTranslations('Shell')
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[2fr_1fr_1fr] lg:px-8">
        <div>
          <Link
            href="/"
            className="text-4xl font-black tracking-[-0.09em] italic"
          >
            REGA<span className="text-accent">.</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t('footerDescription')}
          </p>
        </div>
        <nav
          aria-label={t('navigation')}
          className="flex flex-col items-start gap-3 text-sm"
        >
          <Link href="/courses">{t('courses')}</Link>
          <Link href="/gifts">{t('gifts')}</Link>
          <Link href="/about">{t('about')}</Link>
          <Link href="/contacts">{t('contacts')}</Link>
        </nav>
        <div className="flex flex-col items-start gap-3 text-sm">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            {t('contactUs')}
          </p>
          <Link href="tel:+380984441240" className="text-lg font-semibold">
            +38 098 444 12 40
          </Link>
          <Link
            href="mailto:Rega.drivingschool@gmail.com"
            className="break-all text-muted-foreground"
          >
            Rega.drivingschool@gmail.com
          </Link>
          <p>{t('city')}</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 border-t border-border px-5 py-5 text-xs text-muted-foreground lg:px-8">
        <p>
          © {new Date().getFullYear()} REGA. {t('rights')}
        </p>
        <Link href="/uikit">{t('designSystem')}</Link>
      </div>
    </footer>
  )
}

export { SiteFooter }
