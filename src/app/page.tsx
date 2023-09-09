"use client";

import { LinkButton } from "components/LinkButton";
import { Main } from "components/Main";

// export const metadata: Metadata = {
//   title: "Next Boilerplate",
// };

const Home = () => {
  return (
    <div style={{ margin: "1rem" }}>
      <Main />
      <LinkButton href="/dumb-page">Dumb Page</LinkButton>
    </div>
  );
};

export default Home;
