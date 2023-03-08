import React from 'react';
import {Box, CircularProgress} from "@mui/material";


const Loading = ({show}) => {
   return (
      <Box sx={{display: show ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
         <CircularProgress size={125} style={{display:'block' }}/>
      </Box>
   );
}

export default Loading;
