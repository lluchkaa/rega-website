import { notFound } from 'next/navigation'
import * as rootParams from 'next/root-params'
import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'

import { routing } from '@/i18n/routing'
import en from '@/messages/en.json'
import uk from '@/messages/uk.json'

export default getRequestConfig(async ({ locale: override }) => {
  const locale = override ?? (await rootParams.locale())
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  return {
    locale,
    messages: locale === 'uk' ? uk : en,
    timeZone: 'Europe/Kyiv',
  }
})
