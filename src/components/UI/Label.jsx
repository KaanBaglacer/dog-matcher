import styled from "styled-components";

const Label = styled.label`
  font-weight: ${(props) => props?.fontWeight ?? 'bold'}; 
  font-size: ${(props) => props?.fontSize ?? '1.25rem'};
`;

export default Label;
