'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import type * as React from 'react'

import { Button } from '@/components/uikit'
import { useThemeStore } from '@/stores/theme'

const ThemeSwitch: React.FC = () => {
  const t = useTranslations('Shell')
  const theme = useThemeStore((state) => state.theme)
  const changeTheme = useThemeStore((state) => state.setTheme)
  useEffect(() => {
    void useThemeStore.persist.rehydrate()
  }, [])
  useEffect(() => {
    if (theme === 'system') {
      delete document.documentElement.dataset.theme
    } else {
      document.documentElement.dataset.theme = theme
    }
  }, [theme])
  return (
    <div
      className="flex gap-0.5 rounded-full border border-border p-1"
      role="group"
      aria-label={t('theme')}
    >
      <Button
        variant={theme === 'light' ? 'secondary' : 'ghost'}
        size="icon-sm"
        aria-label={t('light')}
        aria-pressed={theme === 'light'}
        onClick={() => {
          changeTheme('light')
        }}
      >
        <Sun />
      </Button>
      <Button
        variant={theme === 'dark' ? 'secondary' : 'ghost'}
        size="icon-sm"
        aria-label={t('dark')}
        aria-pressed={theme === 'dark'}
        onClick={() => {
          changeTheme('dark')
        }}
      >
        <Moon />
      </Button>
      <Button
        variant={theme === 'system' ? 'secondary' : 'ghost'}
        size="icon-sm"
        aria-label={t('system')}
        aria-pressed={theme === 'system'}
        onClick={() => {
          changeTheme('system')
        }}
      >
        <Monitor />
      </Button>
    </div>
  )
}

export { ThemeSwitch }
