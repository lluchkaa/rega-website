import { describe, expect, it } from 'vitest'

import { getPathname } from '@/i18n/navigation'
import en from '@/messages/en.json'
import uk from '@/messages/uk.json'

describe('localized navigation', () => {
  it.each([
    ['en', '/en'],
    ['uk', '/uk'],
  ] as const)('prefixes home links for %s', (locale, expected) => {
    expect(getPathname({ locale, href: '/' })).toBe(expected)
  })

  it('preserves paths, query parameters and fragments when switching locale', () => {
    expect(getPathname({ locale: 'uk', href: '/about?from=home#team' })).toBe(
      '/uk/about?from=home#team',
    )
  })

  it('has matching translation keys so switching language does not lose messages', () => {
    const keys = (value: object): string[] =>
      Object.entries(value)
        .flatMap(([key, entry]: [string, unknown]) =>
          typeof entry === 'object' && entry !== null
            ? keys(entry).map((nested) => `${key}.${nested}`)
            : [key],
        )
        .sort()

    expect(keys(uk)).toEqual(keys(en))
  })
})
