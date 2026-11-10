'use client'

import { useLocale } from 'next-intl'
import type * as React from 'react'

import { Link, usePathname } from '@/i18n/navigation'

const LocaleSwitch: React.FC = () => {
  const pathname = usePathname()
  const locale = useLocale()
  return (
    <nav
      className="flex items-center gap-2 text-xs font-semibold"
      aria-label="Language / Мова"
    >
      <Link
        href={pathname}
        locale="uk"
        hrefLang="uk"
        lang="uk"
        aria-label="Українська"
        aria-current={locale === 'uk' ? 'page' : undefined}
        className="aria-[current=page]:text-primary"
      >
        UA
      </Link>
      <span className="text-border" aria-hidden="true">
        /
      </span>
      <Link
        href={pathname}
        locale="en"
        hrefLang="en"
        lang="en"
        aria-label="English"
        aria-current={locale === 'en' ? 'page' : undefined}
        className="aria-[current=page]:text-primary"
      >
        EN
      </Link>
    </nav>
  )
}

export { LocaleSwitch }
