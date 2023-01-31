export const handleSelectAllClick = (event, users, setSelected) => {
    if (event.target.checked) {
        const newSelected = users.map((n) => n.name);
        setSelected(newSelected);
        return;
    }
    setSelected([]);
  };

export const handleClick = (name, selected, setSelected) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    switch (selectedIndex) {
        case -1:
            newSelected = newSelected.concat(selected, name);
            break;
        case 0:
            newSelected = newSelected.concat(selected.slice(1));
            break;
        case selected.length - 1:
            newSelected = newSelected.concat(selected.slice(0, -1));
            break;
        case (selectedIndex > 0):
            newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
            );
            break;
        default: return;
    };
    setSelected(newSelected);
  };