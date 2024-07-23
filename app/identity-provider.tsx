"use client";

import { createContext } from "react";

export const IdentityContext = createContext("");

export default function IdentityProvider({ children, value }: { children: React.ReactNode; value: string }) {
    return <IdentityContext.Provider value={value}>{children}</IdentityContext.Provider>;
}
