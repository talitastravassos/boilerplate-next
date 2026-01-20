import "@/styles/globals.scss";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Main Layout</h1>
        {children}
      </body>
    </html>
  );
}
