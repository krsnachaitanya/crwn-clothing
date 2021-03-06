import styled from "styled-components";

export const CheckoutPageWrapper = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }
  .test-warning {
    text-align: center;
    margin: 40px 0 20px 0;
    font-size: 24px;
    color: red;
  }
  button {
    margin: 30px 0 0 auto;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  /* justify-content: space-between; */
  border-bottom: 1px solid darkgrey;

  .header__block {
    text-transform: capitalize;
    width: calc(100% / 4);

    &:last-child {
      width: 42px;
    }
  }
`;
