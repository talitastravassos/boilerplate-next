"use client";

import { LinkButton } from "components/LinkButton";

// export const metadata: Metadata = {
//   title: "Dumb Page - Next Boilerplate",
// };

const DumbPage = () => {
  return (
    <div style={{ margin: "1rem" }}>
      <h1 style={{ margin: "1rem 0" }}>DumbPage</h1>
      <LinkButton href="/">Home</LinkButton>
    </div>
  );
};

export default DumbPage;
