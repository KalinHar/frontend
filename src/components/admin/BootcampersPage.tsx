import React from 'react'
import { Container } from '@mui/material'

import Layout from 'components/layout/Layout'

import BootcampersGrid from './BootcampersGrid'

export default function BootcampersPage() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <BootcampersGrid />
      </Container>
    </Layout>
  )
}
