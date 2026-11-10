import assert from 'node:assert/strict'
import test from 'node:test'

import { ESLint } from 'eslint'

const eslint = new ESLint()

for (const { name, jsx } of [
  { name: 'raw anchors', jsx: '<a href="/en/">Home</a>' },
  { name: 'raw images', jsx: '<img src="/favicon.ico" alt="" />' },
  { name: 'native controls outside UIKit', jsx: '<button>Submit</button>' },
]) {
  test(`application UI rejects ${name}`, async () => {
    const results = await eslint.lintText(
      `import type * as React from 'react'
      const Panel: React.FC = () => ${jsx}
      export default Panel`,
      { filePath: 'src/app/[locale]/page.tsx' },
    )
    assert.ok(
      results.some(({ messages }) =>
        messages.some(({ ruleId }) => ruleId === 'no-restricted-syntax'),
      ),
    )
  })
}

test('application UI rejects pointer-only interaction on noninteractive elements', async () => {
  const results = await eslint.lintText(
    `import type * as React from 'react'
    const Panel: React.FC = () => <div onClick={() => undefined}>Click</div>
    export default Panel`,
    { filePath: 'src/app/[locale]/page.tsx' },
  )
  const rules = results.flatMap(({ messages }) =>
    messages.map(({ ruleId }) => ruleId),
  )
  assert.ok(rules.includes('jsx-a11y/click-events-have-key-events'))
  assert.ok(rules.includes('jsx-a11y/no-static-element-interactions'))
})
