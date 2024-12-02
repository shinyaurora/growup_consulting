"use server"

import LandingIntro from "@/components/landing/intro";
import LandingService from "@/components/landing/service";
import { FC, Fragment } from "react";

const LandingPage: FC = () => {
  return (
    <Fragment>
      <LandingIntro />
      <LandingService />
    </Fragment>
  )
}

export default LandingPage;