export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-red-500 text-white">
        Layout is still applicable in grouped routes! cool!
      </nav>
      {children}
    </div>
  );
}
