"use client";

import StyledComponentsRegistry from "lib/registry";
import GlobalStyles from "../../styles/global";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <h1>Layout</h1>
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
