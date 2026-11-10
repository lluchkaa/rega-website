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
import type { CourseCopy } from '@/content/courses'
import { Link } from '@/i18n/navigation'

type Props = { content: CourseCopy; free: boolean }

const CourseContent: React.FC<Props> = async ({ content, free }) => {
  const t = await getTranslations('CourseDetail')
  return (
    <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
      <section aria-labelledby="audience-heading">
        <Badge variant="secondary">{t('practice')}</Badge>
        <h2
          id="audience-heading"
          className="mt-6 text-3xl font-semibold tracking-tight"
        >
          {t('audience')}
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          {content.audience}
        </p>
        <h2 className="mt-10 text-xl font-semibold">{t('skills')}</h2>
        <ul className="mt-5 divide-y divide-border">
          {content.skills.map((skill) => (
            <li key={skill} className="flex gap-4 py-4 text-sm leading-relaxed">
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-primary"
              />
              {skill}
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
          <p className="text-xs text-muted-foreground">{t('duration')}</p>
          <p className="mt-2 text-2xl font-semibold">{content.duration}</p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {content.format}
          </p>
          <div className="my-7 border-y border-border py-6">
            <h3 className="font-semibold">{free ? t('free') : t('price')}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {free ? t('freeNote') : t('priceNote')}
            </p>
          </div>
          <Link
            href="/contacts"
            className={buttonVariants({ size: 'lg', className: 'h-12 w-full' })}
          >
            {t('book')}
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <Link
            href="/gifts"
            className="mt-5 block text-center text-sm font-semibold text-primary"
          >
            {t('gift')}
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export { CourseContent }
