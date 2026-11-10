import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { GiftDetails } from '@/app/[locale]/gifts/gift-details'
import { GiftHero } from '@/app/[locale]/gifts/gift-hero'
import { ContactCta } from '@/components/site'

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Gifts')
  return { title: `${t('title')} | REGA`, description: t('description') }
}

const GiftsPage: React.FC = () => (
  <main id="main" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
    <GiftHero />
    <GiftDetails />
    <ContactCta />
  </main>
)

export default GiftsPage
