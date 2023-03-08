import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: ${props => props?.width ?? '150px' };
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0062cc;
  }
`;

export default Button;
