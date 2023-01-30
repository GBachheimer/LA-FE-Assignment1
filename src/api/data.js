import WebAssetIcon from '@mui/icons-material/WebAsset';
import ListIcon from '@mui/icons-material/List';
import WebIcon from '@mui/icons-material/Web';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MarginIcon from '@mui/icons-material/Margin';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PaletteIcon from '@mui/icons-material/Palette';
import HeightIcon from '@mui/icons-material/Height';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WorkspaceIcon from 'assets/svg/menuIcons/WorkspaceIcon';
import FilesIcon from 'assets/svg/menuIcons/FilesIcon';
import DatabaseIcon from 'assets/svg/menuIcons/DatabaseIcon';
import ArrowsIcon from 'assets/svg/menuIcons/ArrowsIcon';
import RobotIcon from 'assets/svg/menuIcons/RobotIcon';
import TreeIcon from 'assets/svg/menuIcons/TreeIcon';
import FAQIcon from 'assets/svg/menuIcons/FAQIcon';
import ConectionsIcon from 'assets/svg/menuIcons/ConectionsIcon';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import ViewColumnRoundedIcon from '@mui/icons-material/ViewColumnRounded';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import LabelIcon from '@mui/icons-material/Label';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StartIcon from '@mui/icons-material/Start';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Eye from 'assets/svg/processDialogActions/Eye';
import Folder from 'assets/svg/processDialogActions/Folder';
import Target from 'assets/svg/processDialogActions/Target';
import Link from 'assets/svg/processDialogActions/Link';
import Windows from 'assets/svg/processDialogActions/Windows';
import Delete from 'assets/svg/processDialogActions/Delete';
import Bag from 'assets/svg/processDialogMenu/Bag';
import Rows from 'assets/svg/processDialogMenu/Rows';
import Comments from 'assets/svg/processDialogMenu/Comments';
import Agrafa from 'assets/svg/processDialogMenu/Agrafa';
import MenuSpecial from 'assets/svg/processDialogMenu/MenuSpecial';

export const topBarOptions = [
    ["views", <WebAssetIcon/>], 
    ["Tables", <ListIcon/>, <ArrowDropDownIcon/>], 
    ["Columns", <WebIcon/>], 
    ["Filters", <FilterAltIcon/>], 
    ["Grouped in", <MarginIcon/>], 
    ["Orders", <UnfoldMoreIcon/>],
    ["Colors", <PaletteIcon/>],
    ["Height", <HeightIcon/>]
];

export const topBarMenu = [
    <ShoppingBagIcon sx = {{fontSize: 24}}/>,
    <SearchIcon sx = {{fontSize: 24}}/>,
    <FileOpenIcon sx = {{fontSize: 24}}/>,
    <DriveFileMoveIcon sx = {{fontSize: 24}}/>,
    <SettingsIcon sx = {{fontSize: 24}}/>
];

export const rightDrawerData = [
    {name: "Spa", icon: <BusinessCenterIcon/>}, 
    {name: "TIM", icon: <BusinessCenterIcon/>},
    {name: "Disney Plus", icon: <BusinessCenterIcon/>}
];

export const mainMenu = [
    ['Workspace', <WorkspaceIcon />], 
    ['Connections', <ConectionsIcon />], 
    ['Files', <FilesIcon />], 
    ['Database', <DatabaseIcon />], 
    ['Arrows', <ArrowsIcon />], 
    ['Robot', <RobotIcon />], 
    ['Tree', <TreeIcon />], 
    ['FAQ', <FAQIcon />],
  ];

  export const settingsOptions = [
    {"StartForm": <ListIcon fontSize = "string" sx = {{marginRight: 1}}/>}, 
    {"Stages": <KeyboardReturnRoundedIcon fontSize = "string" sx = {{marginRight: 1}}/>},
    {"Table": <ViewColumnRoundedIcon fontSize = "string" sx = {{marginRight: 1}}/>},
    {"Card": <ViewModuleIcon fontSize = "string" sx = {{marginRight: 1}}/>},
    {"Labels": <LabelIcon fontSize = "string" sx = {{marginRight: 1}}/>},
    {"Optional Fields": <InsertDriveFileIcon fontSize = "string" sx = {{marginRight: 1}}/>},
    {"Automations": <SmartToyIcon fontSize = "string" sx = {{marginRight: 1}}/>},
    {"Connections": <SettingsEthernetIcon fontSize = "string" sx = {{marginRight: 1}}/>},
    {"Members": <PeopleAltIcon fontSize = "string" sx = {{marginRight: 1}}/>},
    {"Export": <StartIcon fontSize = "string" sx = {{marginRight: 1}}/>},
    {"General": <SettingsApplicationsIcon fontSize = "string" sx = {{marginRight: 1}}/>}
  ];

  export const processDialogActions = [
    <Folder/>,
    <Target/>,
    <Link/>,
    <Windows/>,
    <Delete/>
  ];

  export const processDialogSettingsOptions = [
    <Bag/>,
    <Rows/>,
    <Comments/>,
    <Agrafa/>,
    <Link/>,
    <MenuSpecial/>
  ]