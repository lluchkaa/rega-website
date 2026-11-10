import { ArrowUpRight, Check } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import {
  Badge,
  buttonVariants,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/uikit'
import { Link } from '@/i18n/navigation'

const BeginnerContent: React.FC = async () => {
  const t = await getTranslations('InitialCourse')
  return (
    <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
      <section>
        <Badge variant="secondary">{t('label')}</Badge>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight">
          {t('overview')}
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          {t('body')}
        </p>
        <h2 className="mt-10 text-xl font-semibold">{t('skills')}</h2>
        <ul className="mt-5 divide-y divide-border">
          {(['skill1', 'skill2', 'skill3', 'skill4'] as const).map((key) => (
            <li key={key} className="flex gap-4 py-4 text-sm leading-relaxed">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              {t(key)}
            </li>
          ))}
        </ul>
      </section>
      <Card className="self-start rounded-2xl [--card-spacing:--spacing(7)]">
        <CardHeader>
          <CardTitle>
            <h2 className="text-xl font-semibold">{t('format')}</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">{t('durationLabel')}</p>
          <p className="mt-2 text-2xl font-semibold">{t('duration')}</p>
          <div className="my-7 grid grid-cols-2 gap-4 border-y border-border py-6">
            <div>
              <p className="text-2xl font-semibold">{t('ownPrice')}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                {t('ownLabel')}
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold">{t('schoolPrice')}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                {t('schoolLabel')}
              </p>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {t('validity')}
          </p>
          <Link
            href="/contacts"
            className={buttonVariants({
              size: 'lg',
              className: 'mt-7 h-12 w-full',
            })}
          >
            {t('book')}
            <ArrowUpRight />
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export { BeginnerContent }
