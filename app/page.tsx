"use server"

import LandingIntro from "@/components/landing/intro";
import { FC, Fragment } from "react";

const LandingPage: FC = () => {
  return (
    <Fragment>
      <LandingIntro />
    </Fragment>
  )
}

export default LandingPage;