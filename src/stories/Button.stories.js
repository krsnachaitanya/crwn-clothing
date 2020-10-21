import React from "react";
import CustomButton from "../components/custom-button/custom-button.component";

export default {
  title: "Components/CustomButton",
  component: CustomButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <CustomButton {...args} />;

export const SignIn = Template.bind({});
SignIn.args = {
  children: "SignIn",
};

export const GoogleSignIn = Template.bind({});
GoogleSignIn.args = { isGoogleSignIn: true, children: "sign in with google" };
