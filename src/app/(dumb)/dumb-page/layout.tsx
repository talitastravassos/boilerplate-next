"use client";

import StyledComponentsRegistry from "lib/registry";
import GlobalStyles from "../../../../styles/global";
import { Container } from "../../../../styles/styles";

//custom layout da dumb page
export default function DumbLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <h1>Dumb Layout</h1>
          <Container>{children}</Container>
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
