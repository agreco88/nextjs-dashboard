import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import type { User } from "@/app/lib/definitions";
import bcrypt from "bcrypt";

// getUser function:
// Purpose: This function queries the database for a user with a specific email address.
// Logic:
// It uses the sql utility to execute a SQL query to find the user.
// If the query is successful, it returns the first user found (user.rows[0]).
// If there's an error during the query, it logs the error and throws a new error.
async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

// Exporting the auth-related methods from NextAuth
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    // authorize method
    // Validation:
    // It uses zod to validate the email and password. The email must be in a valid email format, and the password must be at least 6 characters long.
    // Authentication:
    // If the validation is successful, it proceeds to find the user in the database by calling getUser.
    // If the user exists, it compares the provided password with the stored hashed password using bcrypt.
    // If the password matches, it returns the user object, which effectively logs the user in.
    // Failure:
    // If the credentials are invalid (either due to validation failure, the user not being found, or password mismatch), it returns null, meaning the login attempt fails.
    Credentials({
      async authorize(credentials) {
        // Validate the credentials using zod
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        // If validation is successful, proceed with authentication
        if (parsedCredentials.success) {
          console.log(parsedCredentials);
          const { email, password } = parsedCredentials.data;

          // Fetch the user from the database
          const user = await getUser(email);
          console.log(user);
          if (!user) return null;

          // Compare the provided password with the stored hashed password
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;
        }

        // If credentials are invalid, return null
        return null;
      },
    }),
  ],
});
