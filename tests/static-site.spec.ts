import { expect, test } from '@playwright/test'

test('root chooser opens either exported language', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Українська' }).click()
  await expect(page).toHaveURL(/\/uk\/$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'uk')
  await page.goto('/')
  await page.getByRole('link', { name: 'English' }).click()
  await expect(page).toHaveURL(/\/en\/$/)
})

for (const { locale, text } of [
  { locale: 'en', text: 'Welcome to REGA.' },
  { locale: 'uk', text: 'Ласкаво просимо до REGA.' },
]) {
  test(`${locale} is translated in static HTML without JavaScript`, async ({
    browser,
  }) => {
    const context = await browser.newContext({ javaScriptEnabled: false })
    const page = await context.newPage()
    const response = await page.goto(`http://127.0.0.1:4173/${locale}/`)
    expect(response?.status()).toBe(200)
    await expect(page.locator('html')).toHaveAttribute('lang', locale)
    await expect(page.getByText(text, { exact: true })).toBeVisible()
    await expect(page).toHaveTitle('REGA')
    await context.close()
  })
}

test('language switching and reload work against static files', async ({
  page,
}) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/en/')
  await page.getByRole('link', { name: 'Українська' }).click()
  await expect(page).toHaveURL(/\/uk\/$/)
  await expect(
    page.getByText('Ласкаво просимо до REGA.', { exact: true }),
  ).toBeVisible()
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('lang', 'uk')
  await page.getByRole('link', { name: 'English' }).click()
  await expect(page).toHaveURL(/\/en\/$/)
  await expect(
    page.getByText('Welcome to REGA.', { exact: true }),
  ).toBeVisible()
  expect(errors).toEqual([])
})

test('Next Image loads without a runtime image optimizer', async ({ page }) => {
  await page.goto('/en/')
  const image = page.locator('img')
  await expect(image).toHaveAttribute('src', '/favicon.ico')
  await expect(image).toHaveJSProperty('complete', true)
  await expect
    .poll(() =>
      image.evaluate((element: HTMLImageElement) => element.naturalWidth),
    )
    .toBeGreaterThan(0)
})

test('unexported locales and paths return 404', async ({ request }) => {
  for (const path of ['/de/', '/en/missing/', '/uk/missing/']) {
    const response = await request.get(path)
    expect(response.status()).toBe(404)
  }
})
