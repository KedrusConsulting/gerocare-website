import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import Header from "@/components/Header";
import FeaturedIn from "@/components/FeaturedIn";
import CTA from "@/components/CTA";
import GetStarted from "@/components/GetStarted";
import Benefits from "@/components/Benefits";
import Metrics from "@/components/Metrics";
import SplitScreen from "@/Layout/SplitScreen";
import Image from "next/image";
import Root from "@/Layout/Root";
// import "../styles/main.scss";

export default function Home() {
  return (
    <Root title={"Home"}>
      <Header className="home">
        <SplitScreen>
          <div className="header__text">
            <div className="header__text-sub">
              <Image
                src={require("@/assets/img/check-icon.svg")}
                alt={"Check icon"}
              />
              <span>Highly Preferred by over +30,009 Customers</span>
            </div>

            <h1 className="heading heading--display">
              Give your Parents the gift of a Healthy, Long Life.
            </h1>

            <p>
              Subscribe them for regular doctor home visits for under $25 per
              month
            </p>

            <div className="header__cta">
              <a href="/register" className="btn btn--main">
                Get Started
              </a>
              <a href="/login" className="btn btn--sec">
                Log In
              </a>
            </div>
          </div>

          <div className="header__img">
            <Image
              src={require("@/assets/img/hero-image-01@4x.png")}
              alt={"Hero img"}
            />
          </div>
        </SplitScreen>
      </Header>

      <main>
        <Awards />
        <Services />
        <Testimonials />
        <Solutions />
        <GetStarted />
        <Benefits />
        <Metrics />
        <FeaturedIn />
        <CTA />
      </main>
    </Root>
  );
}
