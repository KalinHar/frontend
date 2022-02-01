import React from 'react'
import { Container } from '@mui/material'

import Layout from 'components/layout/Layout'

import BootcampersGrid from './BootcampersGrid'
import BasicInputFields from './BootcampersInputFields'

export default function BootcampersPage() {
  return (
    <Layout>
      <Container sx={{ width: 780 }}>
        <BasicInputFields />
        <BootcampersGrid />
      </Container>
    </Layout>
  )
}
