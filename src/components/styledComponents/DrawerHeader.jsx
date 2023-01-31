import styled from "@emotion/styled";

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

export default DrawerHeader