import React from 'react'
import { TextField, Box } from '@mui/material';
import { ButtonBasic } from './Button';



export const Form = ({ title, setEmail, setPassword, handleAction }) => {
    return (
        <div>
            <div className="heading-container">
                <h3>
                    {title} Form
                </h3>
            </div>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="email"
                    label="Enter the Email"
                    variant="outlined"
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    id="password"
                    label="Enter the Password"
                    variant="outlined"
                    onChange={e => setPassword(e.target.value)}
                />
            </Box>

            <ButtonBasic
                title={title}
                handleAction = { handleAction}
            />
        </div>
    )
}
