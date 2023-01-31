import React, { useContext } from 'react'
import { gridNumbers, mainGrid } from 'styles/pageNotFound'
import { AuthContext } from 'contexts/AuthContext'
import { handleGoBack } from 'api/handleGoBack'
import { useNavigate } from 'react-router-dom'
import { Grid, Button } from '@mui/material'
import CustomTypography from 'components/CustomTypography'
import Rect1 from 'assets/svg/shapes/NotFoundRect1'
import Rect2 from 'assets/svg/shapes/NotFoundRect2'
import Four from 'assets/svg/numbers/Four'
import Zero from 'assets/svg/numbers/Zero'

const PageNotFound = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Grid container columns = {12} spacing = {0} sx = {mainGrid}>
        <Grid container item xs = {6} sx = {gridNumbers}>
          <Four />
          <Zero />
          <Four />
          <Rect1 />
          <Rect2 />
        </Grid>
        <Grid item xs = {12}>
          <CustomTypography variant = 'h5' style = {{textAlign: 'center', marginTop: '1vh'}}>
            Page not found
          </CustomTypography>
        </Grid>
        <Grid item xs = {5} mt = {2}>
          <CustomTypography variant = 'body2' style = {{textAlign: 'center', marginTop: '1vh'}}>
            The page you are trying to reach is not available. It may have been deleted or its URL might be misspelled.
          </CustomTypography>
        </Grid>
        <Grid item xs = {12} sx = {{textAlign: 'center'}} mt = {2}>
          <Button variant = 'contained' sx = {{ marginTop: '1vh'}} onClick = {() => handleGoBack(navigate, user)}>
            Go back
          </Button>
        </Grid>
      </Grid>
  )
}

export default PageNotFound