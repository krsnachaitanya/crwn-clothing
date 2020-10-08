import React from "react";
import "./custom-button.styles.scss";

function CustomButton({
  children,
  isGoogleSignIn,
  providerLogo,
  ...otherProps
}) {
  return (
    <button
      className={`${isGoogleSignIn ? "google__signin" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
