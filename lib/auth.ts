// Authentication temporarily disabled for static report pages
// Uncomment when authentication is needed

// import { betterAuth } from "better-auth";
// import { drizzleAdapter } from "better-auth/adapters/drizzle";
// import { db } from "@/db";
// import { account, session, user, verification } from "@/db/schema/auth";

// export const auth = betterAuth({
//     database: drizzleAdapter(db, {
//         provider: "pg",
//         schema: {
//             user: user,
//             account: account,
//             session: session,
//             verification: verification,
//         }
//     }),
//     emailAndPassword: {
//         enabled: true,
//     },
// });

export const auth = null as any;
