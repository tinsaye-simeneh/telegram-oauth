import Head from "next/head";
import { TLoginButton, TLoginButtonSize } from "react-telegram-auth";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <Profile firstName={user.first_name} />
      ) : (
        <div>
          <Head>
            <title>Telegram Login</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <h1 className="title">Telegram Login</h1>
            <TLoginButton
              botName="TGoauthbot"
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
