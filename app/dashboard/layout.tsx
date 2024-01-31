export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-black text-white">
        This is a shared navbar for dashboard segment and its children like
        /settings and /users
      </nav>
      {children}
    </div>
  );
}
