import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { themeStorage } from '@/stores/persistence/theme'

type Theme = 'light' | 'dark' | 'system'
type ThemeState = { theme: Theme; setTheme: (theme: Theme) => void }

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => {
        set({ theme })
      },
    }),
    {
      name: 'rega-theme',
      storage: createJSONStorage(() => themeStorage),
      skipHydration: true,
      partialize: ({ theme }) => ({ theme }),
      merge: (persisted, current) => {
        const candidate =
          persisted && typeof persisted === 'object' && 'theme' in persisted
            ? persisted.theme
            : undefined
        return {
          ...current,
          theme:
            candidate === 'light' || candidate === 'dark'
              ? candidate
              : 'system',
        }
      },
    },
  ),
)
