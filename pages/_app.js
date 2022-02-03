import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import {
  linkResolver,
  repositoryName as repositoryName,
} from '../prismic.config'
import { PrismicPreview } from '@prismicio/next'

import 'styles/main.scss'

export default function App({ Component, pageProps }) {
  return (
    <PrismicPreview repositoryName={repositoryName}>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href} {...props}>
            <a className={props.className ? props.className : ''}>{children}</a>
          </Link>
        )}
      >
        <Component {...pageProps} />
      </PrismicProvider>
    </PrismicPreview>
  )
}
