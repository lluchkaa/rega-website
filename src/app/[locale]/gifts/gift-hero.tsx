import { ArrowUpRight, Gift } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { PageIntro } from '@/components/site'
import { Badge, buttonVariants } from '@/components/uikit'
import { Link } from '@/i18n/navigation'

const GiftHero: React.FC = async () => {
  const t = await getTranslations('Gifts')
  return (
    <section className="grid items-center gap-4 pb-12 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-20">
      <div>
        <PageIntro
          eyebrow={t('eyebrow')}
          title={t('title')}
          description={t('description')}
        />
        <Link
          href="tel:+380984441240"
          className={buttonVariants({ size: 'lg', className: 'h-12' })}
        >
          {t('order')}
          <ArrowUpRight />
        </Link>
        <p className="mt-4 text-sm text-muted-foreground">{t('orderNote')}</p>
      </div>
      <div className="relative isolate my-6 flex min-h-80 items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted p-6 sm:min-h-96 sm:p-12">
        <div
          aria-hidden="true"
          className="absolute -right-16 -bottom-32 size-96 rounded-full border-[36px] border-primary/10"
        />
        <div className="relative w-full max-w-md -rotate-3 overflow-hidden rounded-xl bg-foreground p-7 text-background shadow-2xl sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <span className="text-3xl font-black tracking-tight">
              REGA<span className="text-accent">.</span>
            </span>
            <Gift className="size-7 text-accent" aria-hidden="true" />
          </div>
          <p className="mt-12 text-xs tracking-[0.18em] uppercase opacity-70">
            {t('certificateLabel')}
          </p>
          <p className="mt-3 max-w-64 text-2xl leading-tight font-semibold sm:text-4xl">
            {t('certificateTitle')}
          </p>
          <div className="mt-9 flex flex-wrap items-end justify-between gap-3 border-t border-background/20 pt-5">
            <span className="max-w-40 text-xs leading-relaxed opacity-70">
              {t('certificateFooter')}
            </span>
            <Badge className="shrink-0 bg-accent text-accent-foreground">
              {t('certificateBadge')}
            </Badge>
          </div>
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 h-1 w-1/3 bg-accent"
          />
        </div>
      </div>
    </section>
  )
}

export { GiftHero }
