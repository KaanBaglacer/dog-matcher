import styled from "styled-components";

const Input = styled.input`
  height: ${(props) => props?.height ?? '30px'};
  width: ${(props) => props.width ? props.width : '200px'};
  border-radius: 6px;
  border: 1px solid mediumpurple;
  padding: 5px 10px;
  outline: none;

  &:focus-visible {
    border: 2px solid purple;
  }

  &[type="submit"] {
    width: ${props => props?.width ?? '80px' };
    height: ${(props) => props?.height ?? '40px'};
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;

    &:hover {
      background-color: #0062cc;
    }
  }
`

export default Input;
