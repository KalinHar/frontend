import React from 'react'
import { DataGrid, GridActionsCellItem, GridColumns, GridRowId } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '@mui/material'

import { useBootcampersList } from 'common/hooks/bootcampers'
import { useRouter } from 'next/router'
import { endpoints } from 'common/api-endpoints'

const editBtn = (
  <Button size="small" variant="outlined">
    Edit
  </Button>
)

const columns: GridColumns = [
  { field: 'id', headerName: 'ID', hide: true },
  {
    field: 'firstName',
    headerName: 'First Name',
    editable: true,
    width: 260,
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    editable: true,
    width: 260,
  },
  {
    field: 'edit',
    type: 'actions',
    // getActions: (params) => [<GridActionsCellItem icon={editBtn} label="Edit" />],
  },
  {
    field: 'delete',
    type: 'actions',

    /*
    getActions: (params) => [
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        onClick={() => console.log(params.id, params)}
        // onClick={endpoints.bootcamp.deleteBootcamper(params.id)}
      />,
    ],
    */
  },
]

export default function BootcampersGrid() {
  const { data } = useBootcampersList()
  const router = useRouter()

  return (
    <DataGrid
      rows={data || []}
      columns={columns}
      pageSize={4}
      autoHeight
      autoPageSize
      // checkboxSelection
      // disableSelectionOnClick
      // onRowClick={(row) => {
      //   const id = row.getValue(row.id, 'id')
      //   if (typeof id !== 'string') return
      //   router.push(routes.admin.bootcamp.view(id))
      // }}
    />
  )
}
