import Head from "next/head";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";

export default function Login() {
  return (
    <>
      <Head>
        <title>GeroCare - Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="auth__container">
        <div className="auth__left"></div>
        <div className="auth__right">
          <Logo />

          <header className="auth__header">
            <h4 className="heading heading--4">Log In</h4>
            <p>Sign in to start your session</p>
          </header>
        </div>
      </div>
    </>
  );
}