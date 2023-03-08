import React, { createContext, useState } from 'react';
import Loading from './Loading';

export const LoadingContext = createContext({
   showLoading: () => {},
   hideLoading: () => {},
});

export const LoadingProvider = ({ children }) => {
   const [showLoading, setShowLoading] = useState(false);

   const showLoader = () => setShowLoading(true);
   const hideLoader = () => setShowLoading(false);

   return (
      <LoadingContext.Provider value={{ showLoading: showLoader, hideLoading: hideLoader }}>
         <Loading show={showLoading} />
         {!showLoading && children}
      </LoadingContext.Provider>
   );
};
