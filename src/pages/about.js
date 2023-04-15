import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Awards from "@/components/Awards";
import AboutImgSlider from "@/components/AboutImgSlider";
import Vision from "@/components/Vision";
import Story from "@/components/Story";

export default function About() {
  return (
    <>
      <Head>
        <title>GeroCare - About Us</title>
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

      <header className="header header--about">
        <div className="row">
          <div className="header__about-us">
            <h1 className="heading heading--display">
              We provide regular doctor home visits.
            </h1>
            <p>
              Our Mission is to pioneer medical inclusion by leveraging
              technology to provide access to medical care to underserved
              segments of people across Africa.
            </p>
          </div>
        </div>

        <AboutImgSlider />
      </header>

      <main>
        <Vision />
        <Story />
        <Awards />
      </main>

      <Footer />
    </>
  );
}
