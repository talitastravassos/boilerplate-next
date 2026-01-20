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
        <h1>Dumb Layout</h1>
        {children}
      </body>
    </html>
  );
}
