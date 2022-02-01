import React from 'react'
import { useTranslation } from 'next-i18next'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function BasicInputFields() {
  return (
    <Box
      component="form"
      sx={{
        p: 1,
        border: '1px solid grey',
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <TextField sx={{ height: 5 }} id="outlined-basic" label="First Name" variant="outlined" />
      <TextField id="outlined-basic" label="LastName" variant="outlined" />
      <Button size="small" variant="contained">
        Add
      </Button>
    </Box>
  )
}
