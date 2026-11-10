import { cn } from 'cn'
import { ArrowUpRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { buttonVariants } from '@/components/uikit'
import { Link } from '@/i18n/navigation'

const ContactCta: React.FC = async () => {
  const t = await getTranslations('Shell')
  return (
    <section className="relative overflow-hidden rounded-2xl bg-foreground px-7 py-12 text-background md:px-12 md:py-16">
      <div
        className="absolute -top-20 -right-10 size-72 rounded-full border-[40px] border-accent/20"
        aria-hidden="true"
      />
      <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-xs tracking-widest uppercase">
            {t('nextStep')}
          </p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            {t('ctaTitle')}
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed opacity-75">
            {t('ctaDescription')}
          </p>
        </div>
        <Link
          href="tel:+380984441240"
          className={cn(
            buttonVariants({ size: 'lg' }),
            'h-12 bg-accent px-6 text-accent-foreground hover:bg-accent/90',
          )}
        >
          {t('call')}
          <ArrowUpRight />
        </Link>
      </div>
    </section>
  )
}

export { ContactCta }
