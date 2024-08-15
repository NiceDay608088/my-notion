import React, { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const AuthLayout = ({ children }: Prop) => {
  return <>{children}</>;
};

export default AuthLayout;
