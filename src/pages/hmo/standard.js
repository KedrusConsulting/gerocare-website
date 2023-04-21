import React from "react";
import Root from "@/Layout/Root";
import Header from "@/components/Header";
import HeroCentered from "@/components/HeroCentered";

const HMOStandard = () => {
  return (
    <Root title={"HMO Standard"}>
      <Header className={"hmo-standard"}>
        <HeroCentered>
          <h1 className="heading heading--display">
            Premium HMO Services for the Elderly.
          </h1>

          <p>
            At Gerocare, we have developed a HMO service program designed to
            enhance the health and wellness of the elderly.
          </p>
        </HeroCentered>
      </Header>
    </Root>
  );
};

export default HMOStandard;
