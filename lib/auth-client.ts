// Auth client temporarily disabled for static report pages

// import { createAuthClient } from "better-auth/react";
// export const authClient = createAuthClient();
// export const { signIn, signOut, signUp, useSession } = authClient;

// Type for session data
interface SessionData {
  user?: {
    id: string;
    name: string;
    email: string;
    image?: string;
  };
}

export const authClient = null;
export const signIn = () => {};
export const signOut = () => {};
export const signUp = () => {};
export const useSession = (): { data: SessionData | null; isPending: boolean } => ({ 
  data: null, 
  isPending: false 
});
