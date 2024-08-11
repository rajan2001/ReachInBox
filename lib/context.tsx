'use client'
import { useSearchParams } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const TokenContext = createContext('');

export const Context = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string>("")
    const searchParams = useSearchParams();
    const t: any = searchParams.get("token");




    useEffect(() => {
        const localToken = localStorage.getItem('token');

        if (localToken === null) {
            window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000"
            localStorage.setItem('token', t);
            setToken(t)
        }
        else {
            setToken(localToken)
        }
    }, [])

    return (
        <TokenContext.Provider value={token}>
            {children}
        </TokenContext.Provider>
    );
}

