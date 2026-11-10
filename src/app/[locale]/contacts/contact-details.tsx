import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { Badge, Card } from '@/components/uikit'
import { Link } from '@/i18n/navigation'

const ContactDetails: React.FC = async () => {
  const t = await getTranslations('Contacts')
  return (
    <section className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
      <Card className="gap-0 rounded-2xl p-7 md:p-10">
        <Badge variant="secondary" className="self-start">
          {t('direct')}
        </Badge>
        <h2 className="mt-6 text-2xl font-semibold">{t('contactTitle')}</h2>
        <div className="mt-8 space-y-6">
          <Link
            href="tel:+380984441240"
            className="group flex items-center justify-between gap-3 rounded-sm text-lg font-semibold tracking-tight transition-colors hover:text-primary sm:text-3xl"
          >
            <span className="flex items-center gap-3">
              <Phone className="hidden size-5 shrink-0 text-primary sm:block" />
              +38 098 444 12 40
            </span>
            <ArrowUpRight className="size-5 shrink-0" />
          </Link>
          <Link
            href="tel:+380979568617"
            className="flex items-center gap-3 rounded-sm text-lg font-medium transition-colors hover:text-primary"
          >
            <Phone className="size-4 shrink-0 text-primary" />
            +38 097 956 86 17
          </Link>
          <div className="border-t border-border pt-6">
            <p className="mb-3 text-xs tracking-widest text-muted-foreground uppercase">
              {t('write')}
            </p>
            <Link
              href="mailto:Rega.drivingschool@gmail.com"
              className="flex items-center gap-3 rounded-sm text-sm font-medium break-all transition-colors hover:text-primary sm:text-base"
            >
              <Mail className="size-5 shrink-0 text-primary" />
              Rega.drivingschool@gmail.com
            </Link>
          </div>
        </div>
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          {t('contactNote')}
        </p>
      </Card>
      <Card className="gap-0 rounded-2xl bg-muted p-7 md:p-10">
        <h2 className="text-2xl font-semibold">{t('hoursTitle')}</h2>
        <div className="mt-7 space-y-7">
          <div>
            <h3 className="font-semibold">{t('administration')}</h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">{t('weekdays')}</dt>
                <dd>09:30–18:30</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">{t('saturday')}</dt>
                <dd>09:30–14:00</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">{t('sunday')}</dt>
                <dd>{t('closed')}</dd>
              </div>
            </dl>
          </div>
          <div className="border-t border-border pt-6">
            <h3 className="font-semibold">{t('coaches')}</h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">{t('weekdays')}</dt>
                <dd>07:00–20:00</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">{t('saturday')}</dt>
                <dd>07:00–16:00</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">{t('sunday')}</dt>
                <dd className="text-right">{t('byArrangement')}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Card>
    </section>
  )
}

export { ContactDetails }
