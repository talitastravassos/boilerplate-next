"use client";

import { LinkButton } from "components/LinkButton";

export const Main = () => {
  return (
    <main>
      <h1 style={{ margin: "1rem 0" }}>Main Page</h1>
      <LinkButton href="/dumb-page">Dumb Page</LinkButton>
      <LinkButton href="/regular-page">Regular Page</LinkButton>
    </main>
  );
};
