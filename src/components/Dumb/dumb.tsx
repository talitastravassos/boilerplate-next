"use client";

import { LinkButton } from "components/LinkButton";
import React from "react";

interface DumbProps {
  title: string;
}

const Dumb: React.FC<DumbProps> = ({ title }) => {
  return (
    <div>
      <h1 style={{ margin: "1rem 0" }}>{title}</h1>
      <LinkButton href="/">Main Page</LinkButton>
    </div>
  );
};

export default Dumb;
