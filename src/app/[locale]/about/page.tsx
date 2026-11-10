import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { AboutApproach } from '@/app/[locale]/about/about-approach'
import { ContactCta, PageIntro } from '@/components/site'

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('About')
  return { title: `${t('title')} | REGA`, description: t('description') }
}

const AboutPage: React.FC = async () => {
  const t = await getTranslations('About')
  return (
    <main id="main" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <PageIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />
      <AboutApproach />
      <div className="mt-16">
        <ContactCta />
      </div>
    </main>
  )
}

export default AboutPage
