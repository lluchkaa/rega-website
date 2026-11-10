import { ArrowUpRight, Bike, CarFront, Route } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { Card, CardContent } from '@/components/uikit'
import { Link } from '@/i18n/navigation'

const paths = [
  { key: 'start', href: '/initial_course', icon: CarFront, number: '01' },
  { key: 'improve', href: '/main_course', icon: Route, number: '02' },
  { key: 'moto', href: '/start_motokurse', icon: Bike, number: '03' },
] as const

const TrainingPaths: React.FC = async () => {
  const t = await getTranslations('Home')
  return (
    <section className="py-10 md:py-16" aria-labelledby="training-heading">
      <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            {t('trainingEyebrow')}
          </p>
          <h2
            id="training-heading"
            className="max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-5xl"
          >
            {t('trainingTitle')}
          </h2>
        </div>
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 self-start text-sm font-semibold text-primary md:self-auto"
        >
          {t('allCourses')} <ArrowUpRight className="size-4" />
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {paths.map(({ key, href, icon: Icon, number }) => (
          <Card key={key} className="rounded-2xl [--card-spacing:--spacing(7)]">
            <CardContent className="flex h-full flex-col">
              <div className="mb-10 flex items-center justify-between">
                <Icon
                  className="size-8 text-primary"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span
                  className="font-mono text-xs text-muted-foreground"
                  aria-hidden="true"
                >
                  {number}
                </span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">
                {t(`paths.${key}.title`)}
              </h3>
              <p className="mt-4 mb-7 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(`paths.${key}.description`)}
              </p>
              <Link
                href={href}
                className="inline-flex items-center justify-between gap-3 border-t border-border pt-5 text-sm font-semibold text-primary"
              >
                {t(`paths.${key}.link`)} <ArrowUpRight className="size-5" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export { TrainingPaths }
