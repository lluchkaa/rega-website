'use client'

import { ArrowUpRight, Menu } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type * as React from 'react'

import { ThemeSwitch } from '@/components/site/theme-switch'
import { buttonVariants } from '@/components/uikit'
import { Link, usePathname } from '@/i18n/navigation'

type Props = {
  links: { href: string; label: string }[]
  menu: string
  navigation: string
  trial: string
}

const MobileNavigation: React.FC<Props> = ({
  links,
  menu,
  navigation,
  trial,
}) => {
  const details = useRef<HTMLDetailsElement>(null)
  const pathname = usePathname()
  useEffect(() => {
    if (details.current) {
      details.current.open = false
    }
  }, [pathname])
  return (
    <details ref={details} className="border-t border-border xl:hidden">
      <summary className="flex items-center gap-2 px-5 py-3 text-sm font-semibold">
        <Menu className="size-4" />
        {menu}
      </summary>
      <div className="flex flex-col gap-5 border-t border-border px-5 py-6">
        <nav aria-label={navigation} className="flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <ThemeSwitch />
        <Link href="/free_lesson" className={buttonVariants({ size: 'lg' })}>
          {trial}
          <ArrowUpRight />
        </Link>
      </div>
    </details>
  )
}

export { MobileNavigation }
