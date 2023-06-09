import Head from "next/head";
import Navigation from "@/components/Navigation";

import Footer from "@/components/Footer";
import { useContext } from "react";
import Link from "next/link";

export default function Playground() {
  // const { open, handleOpen, handleClose } = useContext(MoadlContext);

  return (
    <>
      <Head>
        <title>GeroCare - Playground</title>
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

      {/* <Link href={"#"} onClick={handleOpen}>
        Open Modal
      </Link>

      {open && (
        <div className="modal">
          <div className="modal__container">
            <Link href={"#"} onClick={handleClose}>
              Close Modal
            </Link>
          </div>
        </div>
      )} */}

      <Footer />

      {/* <header className="header">
      <div className="row">
        <h1 className="heading heading--1">Log In</h1>
      </div>
    </header> */}
    </>
  );
}
