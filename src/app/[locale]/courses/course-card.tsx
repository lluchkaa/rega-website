import { ArrowUpRight } from 'lucide-react'
import type * as React from 'react'

import { Card, CardContent } from '@/components/uikit'
import { Link } from '@/i18n/navigation'

type Props = { title: string; description: string; href: string; label: string }

const CourseCard: React.FC<Props> = ({ title, description, href, label }) => (
  <Card className="rounded-2xl [--card-spacing:--spacing(6)]">
    <CardContent className="flex h-full flex-col">
      <h3 className="text-xl font-semibold tracking-tight">
        <Link
          href={href}
          className="inline-flex w-full items-start justify-between gap-4 hover:text-primary"
        >
          {title}
          <ArrowUpRight
            className="mt-0.5 size-5 shrink-0 text-primary"
            aria-hidden="true"
          />
        </Link>
      </h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <p className="mt-6 border-t border-border pt-4 text-xs font-medium text-primary">
        {label}
      </p>
    </CardContent>
  </Card>
)

export { CourseCard }
