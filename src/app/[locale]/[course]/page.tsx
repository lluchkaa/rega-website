import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLocale, getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { CourseContent } from '@/app/[locale]/[course]/course-content'
import { ContactCta, PageIntro } from '@/components/site'
import { courses } from '@/content/courses'
import { Link } from '@/i18n/navigation'

export const dynamicParams = false

export const generateStaticParams = () =>
  courses.map(({ slug }) => ({ course: slug }))

type RouteParams = { params: Promise<{ course: string }> }

export const generateMetadata = async ({
  params,
}: RouteParams): Promise<Metadata> => {
  const { course } = await params
  const locale = await getLocale()
  const content = courses.find(({ slug }) => slug === course)?.[locale]
  if (!content) {
    notFound()
  }
  return { title: `${content.title} | REGA`, description: content.description }
}

type Props = RouteParams

const CoursePage: React.FC<Props> = async ({ params }) => {
  const { course } = await params
  const locale = await getLocale()
  const content = courses.find(({ slug }) => slug === course)?.[locale]
  if (!content) {
    notFound()
  }
  const t = await getTranslations('CourseDetail')
  return (
    <main id="main" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <PageIntro
        eyebrow={t('eyebrow')}
        title={content.title}
        description={content.description}
      />
      <CourseContent content={content} free={course === 'free_lesson'} />
      <div className="my-12">
        <Link href="/courses" className="text-sm font-semibold text-primary">
          ← {t('back')}
        </Link>
      </div>
      <ContactCta />
    </main>
  )
}

export default CoursePage
