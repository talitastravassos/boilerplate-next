"use client";

import StyledComponentsRegistry from "lib/registry";
import GlobalStyles from "../../../styles/global";
import { Container } from "../../../styles/styles";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <h1>Main Layout</h1>
          <Container>{children}</Container>
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
