import { ArrowUpRight } from 'lucide-react'
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

const AboutApproach: React.FC = async () => {
  const t = await getTranslations('About')
  return (
    <div>
      <section
        className="grid gap-8 border-y border-border py-10 md:grid-cols-2 md:gap-20"
        aria-labelledby="story-heading"
      >
        <div>
          <Badge variant="secondary">{t('origin')}</Badge>
          <h2
            id="story-heading"
            className="mt-5 text-3xl font-semibold tracking-tight"
          >
            {t('storyTitle')}
          </h2>
        </div>
        <div className="space-y-5 leading-relaxed text-muted-foreground">
          <p>{t('storyBody')}</p>
          <p>{t('storyPurpose')}</p>
        </div>
      </section>
      <section className="py-12" aria-labelledby="approach-heading">
        <h2
          id="approach-heading"
          className="text-3xl font-semibold tracking-tight"
        >
          {t('approachTitle')}
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {(['individual', 'practice', 'progress'] as const).map(
            (key, index) => (
              <Card key={key} className="rounded-2xl">
                <CardHeader>
                  <p className="mb-4 text-sm font-semibold text-primary">
                    0{index + 1}
                  </p>
                  <CardTitle>
                    <h3 className="text-xl font-semibold">
                      {t(`${key}Title`)}
                    </h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(`${key}Body`)}
                  </p>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </section>
      <section
        className="flex flex-col justify-between gap-7 rounded-2xl bg-secondary p-7 md:flex-row md:items-center md:p-10"
        aria-labelledby="try-heading"
      >
        <div>
          <h2 id="try-heading" className="text-2xl font-semibold">
            {t('tryTitle')}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {t('tryBody')}
          </p>
        </div>
        <Link
          href="/free_lesson"
          className={buttonVariants({ size: 'lg', className: 'h-12 shrink-0' })}
        >
          {t('tryLink')}
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>
    </div>
  )
}

export { AboutApproach }
