"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication
  const login = async () => {
    await gitHubSignIn();
  };

  // Sign out of Firebase
  const logout = async () => {
    await firebaseSignOut();
  };

  // Display some of the user's information
  return (
    <main className="bg-gray-800 flex min-h-screen flex-col items-center p-14">
      <div>
        {user ? (
          <div>
            <h1 className="text-white text-2xl font-bold mb-5">
              Welcome, {user.displayName}
            </h1>
            <p className="text-rose-300 hover:text-orange-500 hover:underline mb-5 text-lg">
              <Link href={`/week-10/shopping-list`}>Go to Shopping List</Link>
            </p>
            <button
              className="text-blue-300 hover:text-blue-500 hover:underline"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-white text-2xl font-bold mb-5">
              Welcome to the Shopping List App
            </h1>
            <button
              className="text-blue-300 hover:text-blue-500 hover:underline"
              onClick={login}
            >
              Login with GitHub
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
