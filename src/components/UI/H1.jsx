import styled from "styled-components";

const H1= styled.h1`
  font-size: 2em;
  color: #fc0202;
  margin: ${(props) => props.margin ? props.margin : ''};
`;

export default H1;
