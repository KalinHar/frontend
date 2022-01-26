import React from 'react'
import { DataGrid, GridColumns } from '@mui/x-data-grid'

import { useBootcampersList } from 'common/hooks/bootcampers'
import { useRouter } from 'next/router'
import { routes } from 'common/routes'

const columns: GridColumns = [
  { field: 'id', headerName: 'ID', hide: true },
  {
    field: 'firstName',
    headerName: 'First Name',
    width: 200,
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    width: 200,
  },
]

export default function BootcampersGrid() {
  const { data } = useBootcampersList()
  const router = useRouter()
  console.log(data)

  return (
    <DataGrid
      rows={data || []}
      columns={columns}
      pageSize={5}
      autoHeight
      autoPageSize
      // checkboxSelection
      // disableSelectionOnClick
      onRowClick={(row) => {
        const id = row.getValue(row.id, 'id')
        if (typeof id !== 'string') return
        router.push(routes.admin.bootcamp.view(id))
      }}
    />
  )
}
