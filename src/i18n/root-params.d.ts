// Next 16.4's type generator normalizes (entry)/layout to `/` and treats it as
// an ancestor of [locale]/layout, omitting this accessor. The runtime loader
// walks the filesystem correctly. Remove when Next generates the signature.
declare module 'next/root-params' {
  export function locale(): Promise<string | undefined>
}
