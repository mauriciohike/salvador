import React from 'react'

// @ts-ignore
import { ContentHeaderV1 } from 'drmanhattan-foundation'

interface IContentHeaderBreadcrumb {
  text: string
  to?: string
}

const Financeiro: React.FC = () => {

  const breadcrumb: IContentHeaderBreadcrumb[] = [
    { text: 'Inicio' },
    { text: 'Financeiro' },
  ]

  const title = 'Financeiro'

  return (
    <>
      <ContentHeaderV1 title={title} breadcrumb={breadcrumb} />

      <h1>Página para operações de finanças</h1>
    </>
  )
}

export default Financeiro
