export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="bg-login container-pages">{children}</div>;
}
