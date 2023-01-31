import theme from "styles/theme";

export const stringAvatar = (name) => {
    return {
      sx: {
            bgcolor: theme.palette.primary.main,
            width: 24,
            height: 24,
            fontSize: 10,
            marginRight: 2,
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
};