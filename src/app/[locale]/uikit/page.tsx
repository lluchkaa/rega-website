import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { UiExamples } from '@/app/[locale]/uikit-examples'
import { PageIntro } from '@/components/site'

export const metadata: Metadata = {
  title: 'UI kit | REGA',
  robots: { index: false, follow: false },
}

const UiKitPage: React.FC = async () => {
  const t = await getTranslations('UIKit')
  return (
    <main id="main" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <PageIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />
      <UiExamples />
    </main>
  )
}

export default UiKitPage
