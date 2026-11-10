import { ArrowUpRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import type * as React from 'react'

import { LocaleSwitch } from '@/components/site/locale-switch'
import { MobileNavigation } from '@/components/site/mobile-navigation'
import { ThemeSwitch } from '@/components/site/theme-switch'
import { buttonVariants } from '@/components/uikit'
import { Link } from '@/i18n/navigation'

const SiteHeader: React.FC = async () => {
  const t = await getTranslations('Shell')
  const links = [
    { href: '/courses', label: t('courses') },
    { href: '/gifts', label: t('gifts') },
    { href: '/about', label: t('about') },
    { href: '/contacts', label: t('contacts') },
  ]
  return (
    <header className="relative z-20 border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 lg:px-8">
        <Link
          href="/"
          aria-label={t('home')}
          className="flex items-center gap-3"
        >
          <span className="text-4xl font-black tracking-[-0.09em] italic">
            REGA<span className="text-accent">.</span>
          </span>
          <span className="hidden max-w-28 border-l border-border pl-3 text-[10px] leading-tight font-semibold tracking-widest uppercase sm:block">
            {t('tagline')}
          </span>
        </Link>
        <nav
          aria-label={t('navigation')}
          className="hidden items-center gap-7 text-sm font-medium xl:flex"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LocaleSwitch />
          <span className="hidden sm:block">
            <ThemeSwitch />
          </span>
          <span className="hidden xl:block">
            <Link
              href="/free_lesson"
              className={buttonVariants({ className: 'h-10 px-4' })}
            >
              {t('trial')}
              <ArrowUpRight />
            </Link>
          </span>
        </div>
      </div>
      <MobileNavigation
        links={links}
        menu={t('menu')}
        navigation={t('navigation')}
        trial={t('trial')}
      />
    </header>
  )
}

export { SiteHeader }
