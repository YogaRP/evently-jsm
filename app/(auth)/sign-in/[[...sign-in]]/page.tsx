import { SignIn } from "@clerk/nextjs";
import React, { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <SignIn />;
};

export default page;
