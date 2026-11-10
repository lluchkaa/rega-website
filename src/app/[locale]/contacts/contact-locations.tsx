import { ArrowUpRight, MapPin } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { buttonVariants, Card } from '@/components/uikit'
import { Link } from '@/i18n/navigation'

const ContactLocations: React.FC = async () => {
  const t = await getTranslations('Contacts')
  return (
    <section className="py-16 md:py-20" aria-labelledby="training-locations">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2
          id="training-locations"
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          {t('locationsTitle')}
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {t('locationsNote')}
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {(
          [
            {
              key: 'arena',
              coordinates: '49.776850,24.022100',
              gps: '49°46.611′ N · 24°01.326′ E',
            },
            {
              key: 'yeroshenka',
              coordinates: '49.854917,23.999650',
              gps: '49°51.295′ N · 23°59.979′ E',
            },
          ] as const
        ).map(({ key, coordinates, gps }, index) => (
          <Card key={key} className="gap-0 overflow-hidden rounded-2xl p-0">
            <div className="flex items-center justify-between border-b border-border bg-muted px-7 py-5">
              <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                {t('ground')} / 0{index + 1}
              </span>
              <MapPin className="size-5 text-primary" />
            </div>
            <div className="p-7 md:p-9">
              <h3 className="text-2xl font-semibold">{t(`${key}Title`)}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t(`${key}Address`)}
              </p>
              <p className="mt-5 font-mono text-xs text-muted-foreground">
                {gps}
              </p>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${coordinates}`}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  variant: 'outline',
                  className: 'mt-7',
                })}
              >
                {t('map')}
                <ArrowUpRight />
              </Link>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-8 rounded-xl border border-border p-7 md:flex md:items-start md:gap-12">
        <h3 className="shrink-0 text-lg font-semibold">{t('meetingTitle')}</h3>
        <div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:mt-0">
            {t('meetingPoints')}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {t('meetingNote')}
          </p>
        </div>
      </div>
    </section>
  )
}

export { ContactLocations }
