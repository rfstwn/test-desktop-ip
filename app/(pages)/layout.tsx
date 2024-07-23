"use client";

import { useContext } from "react";
import { IdentityContext } from "../identity-provider";
import Footer from "../components/Footer";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const channelName = useContext(IdentityContext);

    return (
        <div className="bg-pages container-pages">
            <div className={`flex flex-col justify-between min-h-screen`}>
                {children}
                <Footer />
            </div>
        </div>
    );
}
