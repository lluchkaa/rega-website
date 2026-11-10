import type { StateStorage } from 'zustand/middleware'

const fallback = new Map<string, string>()

export const themeStorage: StateStorage = {
  getItem: (name) => {
    try {
      return window.localStorage.getItem(name)
    } catch {
      return fallback.get(name) ?? null
    }
  },
  setItem: (name, value) => {
    fallback.set(name, value)
    try {
      window.localStorage.setItem(name, value)
    } catch {
      /* Theme choices still work in memory when storage is unavailable. */
    }
  },
  removeItem: (name) => {
    fallback.delete(name)
    try {
      window.localStorage.removeItem(name)
    } catch {
      /* Storage may be unavailable. */
    }
  },
}
