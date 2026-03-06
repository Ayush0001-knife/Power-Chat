import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Title from "../shared/Title";
import Grid from "@mui/material/Grid";

const AppLayout = () => (WrappedComponent) => {
  return function Layout(props) {
    return (
      <>
        <Title title="My-Chat" subscription="Welcome to my app!" />
        <Header />

        <Grid container sx={{ height: "calc(100vh - 4rem)" }}>
          {/* Left Sidebar */}
          <Grid
            size={{ md: 3 }}
            sx={{
              display: { xs: "none", md: "block" },
              height: "100%",
            }}
          >
            First
          </Grid>

          {/* Chat Area */}
          <Grid
            size={{ xs: 12, sm: 8, md: 6 }}
            sx={{
              height: "100%",
            }}
          >
            <WrappedComponent {...props} />
          </Grid>

          {/* Right Panel */}
          <Grid
            size={{ md: 3 }}
            sx={{
              display: { xs: "none", md: "block" },
              height: "100%",
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >
            Third
          </Grid>
        </Grid>

        <Footer />
      </>
    );
  };
};

export default AppLayout;
