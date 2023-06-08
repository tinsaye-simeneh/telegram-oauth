import Head from "next/head";
import { TLoginButton, TLoginButtonSize } from "react-telegram-auth";
import { useState } from "react";
import TelegramLoginButton from "react-telegram-login";

export default function Home() {
  const [user, setUser] = useState(null);
  const handleTelegramResponse = (response) => {
    console.log(response);
  };
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
            <h1 className="title">Telegram Login</h1>{" "}
            <TelegramLoginButton
              botName="TGoauthbot"
              dataOnauth={handleTelegramResponse}
              buttonSize={TLoginButtonSize.Medium}
              lang="en"
              usePic={false}
              cornerRadius={20}
              onAuthCallback={(user) => {
                console.log(user);
                setUser(user);
              }}
              requestAccess={"write"}
            />
          </main>
        </div>
      )}
    </div>
  );
}
