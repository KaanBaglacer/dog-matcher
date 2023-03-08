import styled from "styled-components";

const Card = styled.div`
  width: ${(props) => props?.width ?? '500px'};
  height: ${(props) => props?.height ?? '500px'};
  border-radius: 4px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  color: rebeccapurple;
  padding: 20px;
  margin: 20px;
  
  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
  
`;

export default Card;
