import React from "react";
import {IconContext} from "react-icons";
import PropTypes from "prop-types";

const IconWrapper = ({attr, children, className, color, size, style}) => {

   IconWrapper.propTypes = {
      color: PropTypes.string,
      className: PropTypes.string,
      size: PropTypes.string,
      style: PropTypes.any,
      attr: PropTypes.string,
      title: PropTypes.string
   }

   return <IconContext.Provider
      value={{color: color, style: style, attr: attr, size: size, className: className}}>
      {children}
   </IconContext.Provider>
}

export default IconWrapper;
