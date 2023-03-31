import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  return <>
    <Head>
      <title>GeroCare - Blog</title>
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

    <Navigation />

    <header className="header">
      <div className="row">
        <h1 className="heading heading--1">Blog</h1>
      </div>
    </header>

    <Footer />
  </>
}