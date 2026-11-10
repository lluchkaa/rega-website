import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { buttonVariants } from '@/components/uikit'
import { Link } from '@/i18n/navigation'

const Hero: React.FC = async () => {
  const t = await getTranslations('Home')
  return (
    <section className="pt-10 pb-14 md:pt-16 md:pb-20">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
        <div>
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            <span
              className="size-2 rounded-full bg-primary"
              aria-hidden="true"
            />
            {t('eyebrow')}
          </p>
          <h1 className="max-w-4xl text-5xl leading-[1.04] font-semibold tracking-[-0.055em] text-balance sm:text-7xl lg:text-8xl">
            {t('title')}{' '}
            <span className="text-primary">{t('titleAccent')}</span>
          </h1>
        </div>
        <div className="lg:pb-2">
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            {t('description')}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/courses"
              className={buttonVariants({ size: 'lg', className: 'h-12 px-6' })}
            >
              {t('chooseCourse')} <ArrowUpRight />
            </Link>
            <Link
              href="/free_lesson"
              className={buttonVariants({
                variant: 'outline',
                size: 'lg',
                className: 'h-12 px-6',
              })}
            >
              {t('tryLesson')}
            </Link>
          </div>
        </div>
      </div>
      <div className="relative mt-12 overflow-hidden rounded-2xl bg-secondary md:mt-16">
        <Image
          src="/images/training.jpg"
          alt={t('imageAlt')}
          width={2048}
          height={1365}
          priority
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="h-[330px] w-full object-cover sm:h-[440px] lg:h-[500px] lg:object-[50%_35%]"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-5 text-white md:right-9 md:bottom-9 md:left-9">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase">
              {t('photoEyebrow')}
            </p>
            <p className="mt-3 max-w-md text-2xl leading-tight font-medium tracking-tight sm:text-3xl">
              {t('photoCaption')}
            </p>
          </div>
          <Link
            href="#training-heading"
            aria-label={t('trainingJump')}
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform hover:translate-y-1 md:size-16"
          >
            <ArrowDownRight className="size-6 md:size-8" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export { Hero }
