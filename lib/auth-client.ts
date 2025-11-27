// Auth client temporarily disabled for static report pages

// import { createAuthClient } from "better-auth/react";
// export const authClient = createAuthClient();
// export const { signIn, signOut, signUp, useSession } = authClient;

export const authClient = null as any;
export const signIn = () => {};
export const signOut = () => {};
export const signUp = () => {};
export const useSession = () => ({ data: null, isPending: false });
