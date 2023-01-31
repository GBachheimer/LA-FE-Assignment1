import React, { useMemo } from 'react'
import Process from './Process'
import getUsers from 'api/getUsers'
import MenuDrawer from 'components/MenuDrawer/MenuDrawer'

const ProcessWithUsers = () => {
    const ProcesWithUsers = useMemo(() => getUsers(Process), []);

    return (
        <MenuDrawer>
            <ProcesWithUsers />
        </MenuDrawer>
    );
}

export default ProcessWithUsers