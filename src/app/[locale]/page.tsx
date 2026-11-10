import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { Hero, SchoolStory, TrainingPaths } from '@/app/[locale]/home'
import { ContactCta } from '@/components/site'

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Home')
  return { title: t('metaTitle'), description: t('description') }
}

const HomePage: React.FC = () => (
  <main id="main" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
    <Hero />
    <TrainingPaths />
    <SchoolStory />
    <ContactCta />
  </main>
)

export default HomePage
