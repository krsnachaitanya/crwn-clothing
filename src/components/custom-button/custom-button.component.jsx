import styled from "styled-components";

const CustomButton = styled.button(
  ({ isGoogleSignIn }) => `
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: ${isGoogleSignIn ? "#4285f4" : "black"};
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: 1px solid rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    background-color: ${isGoogleSignIn ? "#357ae8" : "white"};
    color: ${isGoogleSignIn ? "white" : "black"};
    border: 1px solid;
    border-color: ${isGoogleSignIn ? "#4285f4" : "black"};
  }
`
);

export default CustomButton;
