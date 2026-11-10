import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { BeginnerContent } from '@/app/[locale]/initial_course/beginner-content'
import { ContactCta, PageIntro } from '@/components/site'
import { Link } from '@/i18n/navigation'

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('InitialCourse')
  return { title: `${t('title')} | REGA`, description: t('description') }
}

const InitialCoursePage: React.FC = async () => {
  const t = await getTranslations('InitialCourse')
  return (
    <main id="main" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <PageIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />
      <BeginnerContent />
      <div className="my-12">
        <Link href="/courses" className="text-sm font-semibold text-primary">
          ← {t('back')}
        </Link>
      </div>
      <ContactCta />
    </main>
  )
}

export default InitialCoursePage
