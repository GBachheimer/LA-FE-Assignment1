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
import WorkspaceIcon from '../resources/svg/menuIcons/WorkspaceIcon';
import FilesIcon from '../resources/svg/menuIcons/FilesIcon';
import DatabaseIcon from '../resources/svg/menuIcons/DatabaseIcon';
import ArrowsIcon from '../resources/svg/menuIcons/ArrowsIcon';
import RobotIcon from '../resources/svg/menuIcons/RobotIcon';
import TreeIcon from '../resources/svg/menuIcons/TreeIcon';
import FAQIcon from '../resources/svg/menuIcons/FAQIcon';
import ConectionsIcon from '../resources/svg/menuIcons/ConectionsIcon';

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

export const users = [
    {project: "VOD-153", name: "Uncle Sam", email: "bla@gmail.com", phone: "+234234234234", randomId: "12311312213", supervizor: "the", date: "24/01/2023"},
    {project: "VOD-153", name: "asd Sam", email: "bla@gmail.com", phone: "+234234234234", randomId: "12311312213", supervizor: "wheels", date: "24/01/2023"},
    {project: "VOD-153", name: "asddsads Sam", email: "bla@gmail.com", phone: "+234234234234", randomId: "12311312213", supervizor: "on", date: "24/01/2023"},
    {project: "VOD-153", name: "zxczxcz Sam", email: "bla@gmail.com", phone: "+234234234234", randomId: "12311312213", supervizor: "the", date: "24/01/2023"},
    {project: "VOD-153", name: "qweqwe Sam", email: "bla@gmail.com", phone: "+234234234234", randomId: "12311312213", supervizor: "bus", date: "24/01/2023"},
    {project: "VOD-153", name: "Untyuytucle Sam", email: "bla@gmail.com", phone: "+234234234234", randomId: "12311312213", supervizor: "goes", date: "24/01/2023"},
    {project: "VOD-153", name: "ghj Sam", email: "bla@gmail.com", phone: "+234234234234", randomId: "12311312213", supervizor: "round", date: "24/01/2023"},
    {project: "VOD-153", name: "bnnv Sam", email: "bla@gmail.com", phone: "+234234234234", randomId: "12311312213", supervizor: "and", date: "24/01/2023"},
    {project: "VOD-153", name: "iop Sam", email: "bla@gmail.com", phone: "+234234234234", randomId: "12311312213", supervizor: "round", date: "24/01/2023"}
];

export const info = ["wow", "what", "an", "accordion", "mind", "your", "business"];

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