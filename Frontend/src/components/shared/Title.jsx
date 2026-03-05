import React from "react";
import { Helmet } from "react-helmet";

const Title = ({
  title = "Chat",
  subscription = "This is the chat APP called Poweer-Chat.",
}) => {
  return;
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={subscription} />
  </Helmet>;
};

export default Title;
