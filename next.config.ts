import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

import './src/env'

const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: { globalNotFound: true },
}

export default createNextIntlPlugin()(config)
