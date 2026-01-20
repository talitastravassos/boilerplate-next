"use client";

import Link from "next/link";
import React from "react";

interface DumbProps {
  title: string;
}

const Dumb: React.FC<DumbProps> = ({ title }) => {
  return (
    <div>
      <h1 style={{ margin: "1rem 0" }}>{title}</h1>
      <Link href="/">Main Page</Link>
    </div>
  );
};

export default Dumb;
