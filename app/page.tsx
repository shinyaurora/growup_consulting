"use server"

import LandingIntro from "@/components/landing/intro";
import LandingService from "@/components/landing/service";
import LandingTestominal from "@/components/landing/testominal";
import { FC, Fragment } from "react";

const LandingPage: FC = () => {
  return (
    <Fragment>
      <LandingIntro />
      <LandingService />
      <LandingTestominal />
    </Fragment>
  )
}

export default LandingPage;