import Head from "next/head";
import { TLoginButton, TLoginButtonSize } from "react-telegram-auth";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <div>
          <h1>Hello {user.first_name}</h1>
          <p>Welcome to the Telegram Login Demo.</p>
        </div>
      ) : (
        <div>
          <main>
            <h1 className="title">Telegram Login</h1>
            <h2> who the hell are you?</h2>
          </main>
        </div>
      )}
    </div>
  );
}
