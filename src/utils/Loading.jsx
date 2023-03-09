import React from 'react';
import {Box, CircularProgress} from "@mui/material";
import {useSelector} from "react-redux";


const Loading = ({show}) => {
   return (
      <Box sx={{display: show ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
         <CircularProgress size={125} style={{display:'block' }}/>
      </Box>
   );
}

export const LoadingProvider = ({ children }) => {
   const showLoader = useSelector(state => state.ui.loading);

   return (
      <>
         <Loading show={showLoader} />
         {!showLoader && children}
      </>
   );
};

export default Loading;
