import React, { useContext } from 'react'
import { Grid, Button, Box } from '@mui/material'
import Four from '../../resources/svg/numbers/Four'
import Zero from '../../resources/svg/numbers/Zero'
import Rect1 from '../../resources/svg/shapes/NotFoundRect1'
import Rect2 from '../../resources/svg/shapes/NotFoundRect2'
import CustomTypography from '../../components/CustomTypography'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (user) {
      navigate("/workspace");
    } else {
      navigate("/login");
    };
  }

  return (
    <Grid container columns = {12} spacing = {0} justifyContent = "center" alignItems = "center">
        <Grid container item direction = "row" justifyContent = "center" alignItems = "center" xs = {6} sx = {{height: "300px", position: "relative"}} mt = {12} >
          <Four />
          <Zero />
          <Four />
          <Rect1 />
          <Rect2 />
        </Grid>
        <Grid item xs = {12}>
          <CustomTypography variant = "h5" style = {{textAlign: "center", marginTop: "1vh"}}>
            Page not found
          </CustomTypography>
        </Grid>
        <Grid item xs = {5} mt = {2}>
          <CustomTypography variant = "body2" style = {{textAlign: "center", marginTop: "1vh"}}>
            The page you are trying to reach is not available. It may have been deleted or its URL might be misspelled.
          </CustomTypography>
        </Grid>
        <Grid item xs = {12} sx = {{textAlign: "center"}} mt = {2}>
          <Button variant = "contained" sx = {{ marginTop: "1vh"}} onClick = {handleGoBack}>Go back</Button>
        </Grid>
      </Grid>
  )
}

export default PageNotFound