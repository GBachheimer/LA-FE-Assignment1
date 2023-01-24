import React from 'react'
import { List, ListItem, ListItemButton, Checkbox, IconButton, ListItemIcon, ListItemText  } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';

const MembersList = () => {

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    };

    setChecked(newChecked);
  };

  const members = ["Member one", "Member Two", "Member three", "Member Four", "Member five"];

  return (
    <List sx = {{ width: '100%', bgcolor: 'background.paper' }}>
      {members.map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <ListItem
            key = {value}
            secondaryAction = {
              <>
                <IconButton edge="center" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              </>
            }
            disablePadding
          >
            <ListItemButton role = {undefined} onClick = {handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge = "start"
                  checked = {checked.indexOf(value) !== -1}
                  tabIndex = {-1}
                  disableRipple
                  inputProps = {{ 'aria-labelledby': labelId }}
                  color = "warning"
                />
              </ListItemIcon>
              <ListItemText id = {labelId} primary = {`Line item ${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  )
}

export default MembersList