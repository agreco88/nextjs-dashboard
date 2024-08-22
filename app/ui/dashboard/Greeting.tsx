// components/Greeting.tsx
"use client";
import React from "react";
import { useSession } from "next-auth/react";

interface User {
  id: string;
  name: string;
}

interface GreetingProps {
  user: User;
}

const Greeting: React.FC<GreetingProps> = () => {
  const { data: session } = useSession();

  if (!session || !session.user) {
    return <p>Please sign in to view your dashboard.</p>;
  }

  const userData = {
    id: session.user.id,
    name: session.user.name || "User", // Assuming 'name' might be optional
  };
  return (
    <div className="p-4 bg-blue-100 rounded-md">
      <h1 className="text-xl font-semibold">Hello, {userData.name}!</h1>
      <p className="text-gray-600">Your user ID is {userData.id}</p>
    </div>
  );
};

export default Greeting;
