import { grey, red } from "@mui/material/colors";
import theme from "./theme";

export const dialogPaper = {
    borderRadius: 15, 
    height: '90vh'
};

export const dialogLeftContainer = {
    marginLeft: '3%', 
    display: 'flex', 
    flexDirection: 'column', 
    width: '94%', 
    height: '80%', 
    overflow: 'scroll'
};

export const leftSection1 = {
    display: 'flex', 
    flexDirection: 'column'
};

export const companyData = {
    display: 'flex', 
    flexDirection: 'row'
};

export const companyData2 = {
    display: 'flex', 
    flexDirection: 'column', 
    width: '10%', 
    alignItems: 'center', 
    marginTop: 1
};

export const divider1 = {
    border: 2, 
    borderColor: 'divider', 
    marginTop: 1, 
    maxHeight: '78%'
};

export const companyRightBox = {
    display: 'flex', 
    flexDirection: 'column', 
    marginTop: 1, 
    width: '90%'
};

export const leftTopBarConatiner = {
    width: '93%', 
    height: '20%', 
    display: 'flex', 
    flexDirection: 'column', 
    margin: 'auto'
};

export const leftTopBarLine1 = {
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center'
};

export const line1Item1 = {
    display: 'flex', 
    alignItems: 'center'
};

export const avatarGroup  = {
    '& .MuiAvatar-root': { 
        width: 32, 
        height: 32, 
        fontSize: 18, 
        backgroundColor: theme.palette.primary.main
    },
};

export const line1Item2 = {
    diplay: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center'
};

export const line1Button = {
    color: grey[600], 
    fontSize: 16
};

export const line2Typo = {
    color: grey[600], 
    marginLeft: '0.2rem'
};

export const leftTopBarLine2 = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'left'
};

export const middleChip = {
    marginLeft: 1, 
    marginRight: 1,
};

export const selectVendors = {
    fontSize: 14, 
    color: grey[600]
};

export const accordion = {
    marginTop: '1vh', 
    marginBottom: '1vh'
};

export const accordionSummury = {
    backgroundColor: '#F6F8FA',
    borderRadius: '10px', 
    maxHeight: 40,
};

export const accTypoBox = { 
    textTransform: 'capitalize', 
    m: 1 
};

export const accChildrenBox = {
    marginLeft: '9%', 
    marginBottom: '2%'
};

export const accTypo = {
    fontWeight: 'bold'
};

export const dialogActionsContainer = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'start'
};

export const dialogActionsDivider = {
    marginLeft: '10px', 
    marginRight: '10px'
};

export const dialogContent = {
    width: '100%', 
    height: '80%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
};

export const dialogFoorter = {
    height: '10%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between'
};

export const dialogFooterTypo = {
    marginLeft: '20px'
};

export const dialogfooterButtons = {
    display: 'flex', 
    justifyContent: 'space-between', 
    width: '200px', 
    marginRight: '20px'
};

export const buttonRadius = {
    borderRadius: '10px'
};

export const dialogLeft = {
    width: '48%', 
    height: '100%'
};

export const phaseMenuContainer = {
    width: '95%', 
    margin: 'auto'
};

export const dialogRight = {
    width: '48%', 
    height: '100%', 
    overflow: 'scroll'
};

export const dialogTabBar = { 
    flexGrow: 1, 
    bgcolor: 'background.paper', 
    display: 'flex', 
    width: '4%', 
    height: '100%'
};

export const tabBarTabs = {
    '& .MuiTab-root.Mui-selected': {
        color: red[400] 
    }
};

export const tabIndicator = {
    sx: {
        left: '0px', 
        background: red[300]
    }
};

export const tabTypo = {
    width: '100%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'left'
};

export const dialogTopBar = {
    width: '97%', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginLeft: '2%', 
    marginTop: '1%', 
    marginBottom: '1%'
};



