import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ButtonCTA({ children }: Props) {
  return (
    <>
      <button className="cta">{children}</button>
    </>
  );
}

export default ButtonCTA;
