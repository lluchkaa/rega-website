import type * as React from 'react'

type Props = { eyebrow: string; title: string; description: string }

const PageIntro: React.FC<Props> = ({ eyebrow, title, description }) => (
  <div className="max-w-3xl py-12 md:py-20">
    <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
      <span className="h-px w-8 bg-primary" />
      {eyebrow}
    </p>
    <h1 className="text-4xl leading-[1.06] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
      {title}
    </h1>
    <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
      {description}
    </p>
  </div>
)

export { PageIntro }
