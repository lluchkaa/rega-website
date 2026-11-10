import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { CatalogueContent } from '@/app/[locale]/courses/catalogue-content'
import { ContactCta, PageIntro } from '@/components/site'

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Catalogue')
  return { title: `${t('title')} | REGA`, description: t('description') }
}

const CoursesPage: React.FC = async () => {
  const t = await getTranslations('Catalogue')
  return (
    <main id="main" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <PageIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />
      <CatalogueContent />
      <ContactCta />
    </main>
  )
}

export default CoursesPage
