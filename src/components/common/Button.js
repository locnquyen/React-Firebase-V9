import React from 'react'
import { Button } from '@mui/material';

export const ButtonBasic = ({ title, handleAction }) => {
  return (
    <Button
      variant="contained"
      onClick={handleAction}
    >
      {title}
    </Button>
  )
}
