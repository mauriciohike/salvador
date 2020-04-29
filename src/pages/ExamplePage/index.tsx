import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

// @ts-ignore
import { ContentHeaderV1 } from 'drmanhattan-foundation'

import { VehiclesContext } from '../../store/Vehicles'
import { setVehicle } from '../../store/Vehicles/actions'

import { Layout, Card, Col, Row } from 'antd'
import Table from './Table'

const Content = Layout

interface IContentHeaderBreadcrumb {
  text: string
  to?: string
}

const ExamplePage: React.FC = () => {
  const { dispatch } = useContext(VehiclesContext)

  const breadcrumb: IContentHeaderBreadcrumb[] = [
    { text: 'Inicio' },
    { text: 'Dashboard', to: '/dashboard' },
    { text: 'Cadastro de veículo', to: '/transporter/example-page' },
  ]

  const title = 'Cadastro de veículo'

  useEffect(() => {
    setVehicle(dispatch, { name: 'Monza 2000' })
    setVehicle(dispatch, { name: 'Opala' })
    setVehicle(dispatch, { name: 'Maverick' })
    setVehicle(dispatch, { name: 'Ferrari' })
  }, [])

  // const [hasPermission] = usePermission();

  // if (hasPermission()) {
  //   redirect('/404');
  // }

  /* {hasPermission(['financial', 'attendance']) === true
        ? <h1>Exemplo!!!</h1>
        : null
      } */

  return (
    <>
      <ContentHeaderV1 title={title} breadcrumb={breadcrumb} />

      <Link to="/dashboard">Ir para Dashboard (estado global da minha aplicação!)</Link>

      <Row gutter={24}>
        <Col span={6}>
          <Card title="Veículos" bordered={false}>
            130
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Motoristas" bordered={false}>
            400
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Parceiros" bordered={false}>
            250
          </Card>
        </Col>
        <Col span={6}>
          <Card title="A Pagar" bordered={false}>
            R$ 30.00.00,00
          </Card>
        </Col>
      </Row>

      <Content
        style={{
          background: '#fff',
          margin: '1rem 0',
          padding: '1rem',
        }}
      >
        <Table />
      </Content>
    </>
  )
}

export default ExamplePage
