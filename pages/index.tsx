import Head from "next/head";
import { TLoginButton, TLoginButtonSize } from "react-telegram-auth";
import { useState } from "react";
import Profile from "./Profile";

export default function Home() {
  const [user, setUser] = useState(null);
  const firstName2 = "first_name";
  return (
    <TLoginButton
      botName="TGoauthbot"
      buttonSize={TLoginButtonSize.Medium}
      lang="en"
      usePic={false}
      cornerRadius={20}
      onAuthCallback={(user) => {
        console.log(user);
        return <Profile firstName={firstName2} />;
      }}
      requestAccess={"write"}
    />
  );
}
