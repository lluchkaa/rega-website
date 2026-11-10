import { ArrowUpRight, Check, Gift } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { buttonVariants } from '@/components/uikit'
import { Link } from '@/i18n/navigation'

const SchoolStory: React.FC = async () => {
  const t = await getTranslations('Home')
  return (
    <div className="py-12 md:py-20">
      <section
        className="grid gap-10 border-y border-border py-12 md:grid-cols-2 md:gap-20 md:py-16"
        aria-labelledby="school-heading"
      >
        <div>
          <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            {t('schoolEyebrow')}
          </p>
          <h2
            id="school-heading"
            className="text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl"
          >
            {t('schoolTitle')}
          </h2>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            {t('aboutLink')} <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t('schoolDescription')}
          </p>
          <ul className="mt-7 space-y-4">
            {(['practice', 'attention', 'progress'] as const).map((key) => (
              <li key={key} className="flex gap-3 text-sm leading-relaxed">
                <Check
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {t(`principles.${key}`)}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section
        className="mt-12 flex flex-col items-start justify-between gap-8 rounded-2xl bg-secondary p-7 md:flex-row md:items-center md:p-10"
        aria-labelledby="gift-heading"
      >
        <div className="flex items-start gap-5">
          <Gift
            className="mt-1 size-8 shrink-0 text-primary"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <div>
            <h2
              id="gift-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              {t('giftTitle')}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {t('giftDescription')}
            </p>
          </div>
        </div>
        <Link
          href="/gifts"
          className={buttonVariants({
            variant: 'outline',
            size: 'lg',
            className: 'h-12 shrink-0',
          })}
        >
          {t('giftLink')} <ArrowUpRight />
        </Link>
      </section>
    </div>
  )
}

export { SchoolStory }
