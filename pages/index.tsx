import Head from "next/head";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import { TLoginButton, TLoginButtonSize } from "react-telegram-auth";
import Profile from "./Profile";

export default function Home() {
  return (
    <TLoginButton
      botName="TGoauthbot"
      buttonSize={TLoginButtonSize.Medium}
      lang="en"
      usePic={false}
      cornerRadius={20}
      onAuthCallback={(user) => {
        console.log(user);
        return <Profile first_name={user.first_name} />;
      }}
      requestAccess={"write"}
    />
  );
}
