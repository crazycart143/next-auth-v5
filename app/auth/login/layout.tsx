export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-red-500 text-white">
        This is a shared navbar for auth segment and its children like /login
        and /register
      </nav>
      {children}
    </div>
  );
}
