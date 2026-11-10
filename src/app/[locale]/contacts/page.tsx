import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { ContactDetails } from '@/app/[locale]/contacts/contact-details'
import { ContactLocations } from '@/app/[locale]/contacts/contact-locations'
import { ContactCta, PageIntro } from '@/components/site'

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Contacts')
  return { title: `${t('title')} | REGA`, description: t('description') }
}

const ContactsPage: React.FC = async () => {
  const t = await getTranslations('Contacts')
  return (
    <main id="main" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <PageIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />
      <ContactDetails />
      <ContactLocations />
      <ContactCta />
    </main>
  )
}

export default ContactsPage
