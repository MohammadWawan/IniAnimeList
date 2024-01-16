"use client";
import React from "react";
import { signOut, signIn, useSession } from "next-auth/react";

export default function SigninButton() {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div>
                <p>{session.user.name}</p>
                <button onClick={() => signOut()}> Sign Out</button>
            </div>
        );
    }
    return <button onClick={() => signIn()}> Sign in</button>;
}
