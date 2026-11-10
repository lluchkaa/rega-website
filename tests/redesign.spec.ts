import { expect, test } from '@playwright/test'

test('theme choice survives reload and locale changes preserve the page', async ({
  page,
}) => {
  await page.goto('/en/initial_course/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Start with confidence',
  )
  await page.getByRole('button', { name: 'Dark theme', exact: true }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.getByRole('link', { name: 'Українська', exact: true }).click()
  await expect(page).toHaveURL(/\/uk\/initial_course\/$/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Почніть із впевненості',
  )
})

test('mobile navigation works by keyboard without horizontal overflow', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/en/')
  await page.getByText('Menu', { exact: true }).focus()
  await page.keyboard.press('Enter')
  await page
    .getByRole('link', { name: 'Contacts', exact: true })
    .first()
    .click()
  await expect(page).toHaveURL(/\/en\/contacts\/$/)
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true)
})

test('course is readable without JavaScript and follows system dark mode', async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    colorScheme: 'dark',
  })
  const page = await context.newPage()
  await page.goto('http://127.0.0.1:4173/en/initial_course/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Start with confidence',
  )
  await expect(page.locator('body')).toHaveCSS(
    'background-color',
    'rgb(22, 24, 23)',
  )
  await expect(
    page.getByRole('link', { name: 'Call REGA', exact: true }).first(),
  ).toHaveAttribute('href', 'tel:+380984441240')
  await context.close()
})

test('manual light overrides system dark and system choice restores it', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/en/initial_course/')
  await page.getByRole('button', { name: 'Light theme', exact: true }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await expect(page.locator('body')).toHaveCSS(
    'background-color',
    'rgb(248, 247, 244)',
  )
  await page.getByRole('button', { name: 'System theme', exact: true }).click()
  await expect(page.locator('html')).not.toHaveAttribute('data-theme')
  await expect(page.locator('body')).toHaveCSS(
    'background-color',
    'rgb(22, 24, 23)',
  )
})

test('theme controls work when storage is unavailable', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', {
      get: () => {
        throw new Error('Unavailable')
      },
    })
  })
  await page.goto('/en/initial_course/')
  const dark = page.getByRole('button', { name: 'Dark theme', exact: true })
  await dark.click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await expect(dark).toHaveAttribute('aria-pressed', 'true')
  await page.getByRole('button', { name: 'Light theme', exact: true }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
})

test('invalid saved theme falls back to system without breaking navigation', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem(
      'rega-theme',
      JSON.stringify({ state: { theme: 'invalid' }, version: 0 }),
    )
  })
  await page.goto('/en/initial_course/')
  await expect(
    page.getByRole('button', { name: 'System theme', exact: true }),
  ).toHaveAttribute('aria-pressed', 'true')
  await page.getByRole('button', { name: 'Dark theme', exact: true }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
})

test('every visible local destination resolves in both languages', async ({
  browser,
  request,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()
  const destinations = new Set<string>()
  for (const locale of ['en', 'uk']) {
    for (const path of [
      '',
      'courses/',
      'gifts/',
      'contacts/',
      'about/',
      'uikit/',
    ]) {
      const response = await page.goto(
        `http://127.0.0.1:4173/${locale}/${path}`,
      )
      expect(response?.status()).toBe(200)
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
      const hrefs = await page
        .locator('a[href]')
        .evaluateAll((links) =>
          links.map((link) => (link as HTMLAnchorElement).href),
        )
      for (const href of hrefs) {
        const url = new URL(href)
        if (url.origin === 'http://127.0.0.1:4173') {
          destinations.add(url.pathname)
        }
      }
    }
  }
  for (const path of destinations) {
    expect((await request.get(path)).status(), path).toBe(200)
  }
  await context.close()
})

test('responsive pages fit the viewport in both themes', async ({ page }) => {
  test.setTimeout(120_000)
  for (const locale of ['en', 'uk']) {
    for (const width of [320, 390, 768, 1024, 1280, 1440]) {
      await page.setViewportSize({ width, height: 1000 })
      for (const theme of ['light', 'dark'] as const) {
        await page.emulateMedia({ colorScheme: theme })
        for (const path of [
          '',
          'gifts/',
          'contacts/',
          'courses/',
          'about/',
          'uikit/',
          'initial_course/',
        ]) {
          await page.goto(`/${locale}/${path}`)
          expect(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth,
            ),
            `${locale}/${path} ${String(width)}px ${theme}`,
          ).toBe(true)
          if (path === '' && (width === 390 || width === 1440)) {
            await page.screenshot({
              path: `test-results/home-${locale}-${theme}-${String(width)}.png`,
              fullPage: true,
            })
          }
        }
      }
    }
  }
})
