import { ArrowUpRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { buttonVariants, Card } from '@/components/uikit'
import { Link } from '@/i18n/navigation'

const GiftDetails: React.FC = async () => {
  const t = await getTranslations('Gifts')
  return (
    <div className="space-y-16 py-12 md:space-y-20 md:pb-20">
      <section className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            {t('whyEyebrow')}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            {t('whyTitle')}
          </h2>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t('whyBody')}
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className={buttonVariants({ variant: 'outline' })}
            >
              {t('explore')}
              <ArrowUpRight />
            </Link>
            <Link
              href="mailto:Rega.drivingschool@gmail.com"
              className={buttonVariants({ variant: 'ghost' })}
            >
              {t('email')}
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
      <section aria-labelledby="gift-steps">
        <h2 id="gift-steps" className="text-3xl font-semibold tracking-tight">
          {t('stepsTitle')}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {(['choose', 'discuss', 'give'] as const).map((step, index) => (
            <Card key={step} className="gap-0 rounded-2xl p-7">
              <p className="text-sm font-semibold text-primary">0{index + 1}</p>
              <h3 className="mt-8 text-xl font-semibold">
                {t(`${step}Title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(`${step}Body`)}
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          {t('terms')}
        </p>
      </section>
    </div>
  )
}

export { GiftDetails }
