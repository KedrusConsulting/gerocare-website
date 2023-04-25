import React from "react";
import Root from "@/Layout/Root";
import Header from "@/components/Header";
import HeroCentered from "@/components/HeroCentered";
import HMOPlan from "@/components/HMOPlan";
import Section from "@/Layout/Section";
import SplitScreen from "@/Layout/SplitScreen";
import Image from "next/image";

const HMOPlatium = () => {
  return (
    <Root title={"HMO platinum"}>
      <Header className={"hmo-platinum"}>
        <HeroCentered>
          <h1 className="heading heading--display">
            Premium HMO Services for the Elderly.
          </h1>

          <p>
            At Gerocare, we have developed a HMO service program designed to
            enhance the health and wellness of the elderly.
          </p>
        </HeroCentered>

        <HMOPlan
          plan={"Platinum Plan"}
          description={"Everything in Diamond + annual Comprehensive checkup"}
        />
      </Header>

      <Section sectionName={"plan-prices"}>
        <SplitScreen>
          <div className="plan-prices__img">
            <Image
              src={require("@/assets/img/hmo-platinum.png")}
              alt="Married couple smiling and holding each others"
            />
          </div>

          <div className="plan-prices__content">
            <div className="plan-prices__price">
              <div className="plan-prices__price--1">
                <span className="plan-prices__amt">₦360,000</span>
                <p>Price for 12 Visits Annual Plan</p>
              </div>
              <div className="plan-prices__price--2">
                <span className="plan-prices__amt">₦260,000</span>
                <p>Price for 4 Visits Annual Plan</p>
              </div>
            </div>

            <a href="/register" className="btn btn--main">
              Get Started
            </a>
          </div>
        </SplitScreen>
      </Section>
    </Root>
  );
};

export default HMOPlatium;
