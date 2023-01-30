import React, { useEffect, useState } from 'react'
import { CircularProgress, Box } from '@mui/material'

const getUsers = (Component) => {
    return (props) => {
        const [users, setUsers] = useState();

        useEffect(() => {
            const fetchUsers = async () => {
                try {
                    const response = await fetch('https://jsonplaceholder.typicode.com/users');
                    const users = await response.json();
                    setUsers(users);  
                } catch (error) {
                    console.log(error);
                }
            };
            fetchUsers();
        }, []);

        if (!users) {
            return (
                <Box sx = {{width: '100%', height: '100%', textAlign: 'center'}}>
                    <CircularProgress />
                </Box>
            );
        };

        return ( <Component {...props} users = {users}/> );
    }
}

export default getUsers