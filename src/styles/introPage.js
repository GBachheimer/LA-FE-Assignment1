import theme from 'styles/theme'

export const gridContainer = (color) => {
    return {
        textAlign: 'center', 
        height: '100vh', 
        position: 'relative', 
        overflow: 'hidden', 
        backgroundColor: color
    }
};

export const text = {
    position: 'absolute', 
    marginTop: '39%', 
    marginLeft: '25%',
    marginRight: '15%',
    zIndex: 2, 
    textAlign: 'left', 
    color: theme.palette.text.primary
};

export const box = {
    position: 'absolute', 
    width: '100%',
    height: '100%', 
    zIndex: 1
};