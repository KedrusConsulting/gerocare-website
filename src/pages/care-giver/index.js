import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

import React from "react";
import Header from "@/components/Header";

const steps = [
  {
    step: 1,
    name: "Fill Caregiver request form",
    description: "Register elderly and add details of your elderly loved one.",
  },
  {
    step: 2,
    name: "Get Scheduled for Assessment",
    description:
      "Within 24 hours of submitting the form, we will schedule a visit to examine the elderly's care needs.",
  },

  {
    step: 3,
    name: "Get Matched to a caregiver",
    description: "If available in your location a caretaker is matched to you.",
  },

  {
    step: 4,
    name: "Make payment",
    description: "Payment are in one click, and its easy to make.",
  },
];

const SimpleSteps = () => {
  return (
    <section className="section section--simple-step">
      <div className="row">
        <div className="simple-step__caption">
          <h2 className="heading heading--display">
            Get Started in simple Steps
          </h2>
        </div>

        <div className="simple-step__grid simple-step__grid--4">
          {steps.map((step) => (
            <div className="simple-step__card">
              <span className="simple-step__badge">Step {step.step}</span>
              <h6 className="heading--6">{step.name}</h6>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <a href="/register" className="btn btn--main simple-step__btn">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default function CareGiver() {
  return (
    <>
      <Head>
        <title>GeroCare - Care Givers</title>
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

      <Header className={"care-giver"}>
        <div className="header__hire">
          <h1 className="heading heading--display">
            Hire a Caregiver for your elderly loved ones.
          </h1>

          <p>
            We’ll provide access to In-home care, companionship, and 24/7
            live-in services for your elderly loved ones.
          </p>

          <a href="/register" className="btn btn--main">
            Get Started
          </a>
        </div>
      </Header>

      <main>
        <section className="section section--full-bg">
          <Image
            src={require("@/assets/img/care-givers-bg.png")}
            alt="Care givers background"
          />
        </section>

        <section className="section section--key-features">
          <div className="row">
            <div className="key-features__caption">
              <h2 className="heading heading--display">Key Features</h2>
              <p>
                We work with qualified nurses and well trained non-medical
                caregivers  We ensure your Elderly loved one always have the
                care and companionship they need.
              </p>
            </div>

            <div className="key-features__grid">
              <div className="key-features__feature">
                <Image
                  src={require("@/assets/img/home-help.svg")}
                  alt="Home help icon"
                />
                <p>Home Help</p>
              </div>

              <div className="key-features__feature">
                <Image
                  src={require("@/assets/img/personal-care.svg")}
                  alt="Personal Care icon"
                />
                <p>Personal Care</p>
              </div>

              <div className="key-features__feature">
                <Image
                  src={require("@/assets/img/companionship.svg")}
                  alt="Companionship icon"
                />
                <p>Companionship</p>
              </div>
            </div>
          </div>
        </section>

        <SimpleSteps />

        <section className="section section--video">
          <div className="row">
            <div className="testimonial-video">
              <h2 className="heading heading--display">
                Don’t take our word for it
              </h2>

              <iframe
                className="testimonial__video"
                src="https://www.youtube.com/embed/dp4iW4hZkm0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
