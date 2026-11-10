import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { SiteFooter, SiteHeader } from '@/components/site'
import { Link } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

import '@/styles/globals.css'

export const dynamicParams = false

export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }))

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> => {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  const t = await getTranslations({ locale, namespace: 'Home' })
  return { title: 'REGA', description: t('description') }
}

type Props = { children: React.ReactNode }

const LocaleLayout: React.FC<Props> = async ({ children }) => {
  const locale = await getLocale()
  const t = await getTranslations('Shell')
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Link
            href="#main"
            className="sr-only z-50 rounded bg-primary px-5 py-3 text-primary-foreground focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
          >
            {t('skip')}
          </Link>
          <SiteHeader />
          {children}
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
