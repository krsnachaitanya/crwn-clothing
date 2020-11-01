import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { CheckoutHeader, CheckoutPageWrapper } from "./checkout.styled";

function CheckoutPage({ cartItems, total }) {
  return (
    <CheckoutPageWrapper>
      <CheckoutHeader>
        <div className="header__block">
          <span>Prouct</span>
        </div>
        <div className="header__block">
          <span>Description</span>
        </div>
        <div className="header__block">
          <span>Quantity</span>
        </div>
        <div className="header__block">
          <span>Price</span>
        </div>
        <div className="header__block">
          <span>Remove</span>
        </div>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem id={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">Total: ${total}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/26 - cvv: 123
      </div>
      <StripeCheckoutButton price={total} />
    </CheckoutPageWrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
