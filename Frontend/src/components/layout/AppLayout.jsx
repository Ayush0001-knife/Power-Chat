import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Title from "../shared/Title";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title title="My-Chat" subscription="Welcome to my app!" />
        <Header />
        <WrappedComponent {...props} />
        <Footer />
      </>
    );
  };
};

export default AppLayout;
