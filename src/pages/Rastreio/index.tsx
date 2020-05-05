import React from 'react'

// @ts-ignore
import { ContentHeaderV1 } from 'drmanhattan-foundation'

interface IContentHeaderBreadcrumb {
  text: string
  to?: string
}

const Rastreio: React.FC = () => {

  const breadcrumb: IContentHeaderBreadcrumb[] = [
    { text: 'Inicio' },
    { text: 'Dashboards' },
    { text: 'Frete' },
    { text: 'Rastreio' }
  ]

  const title = 'Rastreio'

  return (
    <>
      <ContentHeaderV1 title={title} breadcrumb={breadcrumb} />

      <h1>Página para operações de finanças</h1>
    </>
  )
}

export default Rastreio
