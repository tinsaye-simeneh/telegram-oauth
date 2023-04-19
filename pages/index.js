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
        Profile(user);
      }}
      requestAccess={"write"}
      additionalClasses={"css-class-for-wrapper"}
    />
  );
}
