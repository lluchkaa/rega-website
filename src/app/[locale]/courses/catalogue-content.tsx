import { ArrowUpRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { CourseCard } from '@/app/[locale]/courses/course-card'
import { Badge, buttonVariants } from '@/components/uikit'
import { Link } from '@/i18n/navigation'

const groups = [
  {
    key: 'car',
    courses: [
      { key: 'licence', href: '/start-level' },
      { key: 'beginner', href: '/initial_course' },
      { key: 'junior', href: '/teenage_course' },
      { key: 'main', href: '/main_course' },
      { key: 'professional', href: '/professional_courses' },
      { key: 'winter', href: '/winter_course' },
      { key: 'parking', href: '/training-parking-and-maneures' },
      { key: 'sport', href: '/individual_trainings' },
    ],
  },
  {
    key: 'moto',
    courses: [
      { key: 'motoBeginner', href: '/start_motokurse' },
      { key: 'motoCity', href: '/motorcycles_learning' },
      { key: 'motoProfessional', href: '/professional-motorcycle-course' },
      { key: 'motoClub', href: '/motosektsiya' },
    ],
  },
  {
    key: 'more',
    courses: [
      { key: 'trial', href: '/free_lesson' },
      { key: 'corporate', href: '/corporate' },
      { key: 'assessment', href: '/drivers_test' },
      { key: 'circuit', href: '/carpathian-ring' },
    ],
  },
] as const

const CatalogueContent: React.FC = async () => {
  const t = await getTranslations('Catalogue')
  return (
    <div>
      <nav
        aria-label={t('jumpLabel')}
        className="mb-12 flex flex-wrap gap-3 border-y border-border py-5"
      >
        {groups.map(({ key }) => (
          <Link
            key={key}
            href={`#${key}`}
            className={buttonVariants({
              variant: 'outline',
              className: 'rounded-full',
            })}
          >
            {t(`groups.${key}.title`)}
          </Link>
        ))}
      </nav>
      <div className="space-y-16 md:space-y-20">
        {groups.map(({ key, courses }) => (
          <section
            key={key}
            id={key}
            className="scroll-mt-28"
            aria-labelledby={`${key}-heading`}
          >
            <div className="mb-7 grid gap-4 md:grid-cols-2 md:items-end md:gap-12">
              <div>
                <Badge variant="secondary" className="mb-4">
                  {t(`groups.${key}.eyebrow`)}
                </Badge>
                <h2
                  id={`${key}-heading`}
                  className="text-3xl font-semibold tracking-tight md:text-4xl"
                >
                  {t(`groups.${key}.title`)}
                </h2>
              </div>
              <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                {t(`groups.${key}.description`)}
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map(({ key: course, href }) => (
                <CourseCard
                  key={course}
                  href={href}
                  title={t(`courses.${course}.title`)}
                  description={t(`courses.${course}.description`)}
                  label={t(`courses.${course}.label`)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="my-16 flex flex-col justify-between gap-6 rounded-2xl bg-secondary p-7 md:flex-row md:items-center md:p-10">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            {t('helpTitle')}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {t('helpDescription')}
          </p>
        </div>
        <Link
          href="/free_lesson"
          className={buttonVariants({
            size: 'lg',
            className: 'h-12 shrink-0 self-start md:self-auto',
          })}
        >
          {t('helpLink')} <ArrowUpRight />
        </Link>
      </section>
    </div>
  )
}

export { CatalogueContent }
