'use client'

import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type * as React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/uikit'

const UiExamples: React.FC = () => {
  const t = useTranslations('UIKit')
  const tokens = [
    { label: t('tokenBackground'), value: 'bg-background' },
    { label: t('tokenPrimary'), value: 'bg-primary' },
    { label: t('tokenAccent'), value: 'bg-accent' },
    { label: t('tokenMuted'), value: 'bg-muted' },
    { label: t('tokenCard'), value: 'bg-card' },
  ]
  return (
    <div className="space-y-16">
      <section>
        <h2 className="mb-6 text-2xl font-semibold">{t('palette')}</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {tokens.map(({ label, value }) => (
            <div key={label}>
              <div
                className={`h-32 rounded-xl border border-border ${value}`}
              />
              <p className="mt-3 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-6 text-2xl font-semibold">{t('controls')}</h2>
        <div className="flex flex-wrap gap-4">
          <Button size="lg">
            {t('primary')}
            <ArrowUpRight />
          </Button>
          <Button variant="secondary" size="lg">
            {t('secondary')}
          </Button>
          <Button variant="outline" size="lg">
            {t('outline')}
          </Button>
          <Button disabled size="lg">
            {t('disabled')}
          </Button>
        </div>
      </section>
      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-semibold">{t('cards')}</h2>
          <Card>
            <CardHeader>
              <CardTitle>{t('cardTitle')}</CardTitle>
              <CardDescription>{t('cardDescription')}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">{t('badge')}</Badge>
            </CardContent>
          </Card>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-semibold">{t('faq')}</h2>
          <Accordion>
            <AccordionItem value="course">
              <AccordionTrigger>{t('question')}</AccordionTrigger>
              <AccordionContent>{t('answer')}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}

export { UiExamples }
