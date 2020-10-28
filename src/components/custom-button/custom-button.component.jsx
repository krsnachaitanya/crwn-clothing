import styled, { css } from "styled-components";

const CustomButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: 1px solid rgba(0, 0, 0, 0);
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  ${({ isGoogleSignIn }) =>
    isGoogleSignIn &&
    css`
      background-color: #4285f4;

      &:hover {
        background-color: #357ae8;
        color: white;
        border: 1px solid #4285f4;
      }
    `}
`;

const InvertedButton = styled(CustomButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export { InvertedButton };
export default CustomButton;
