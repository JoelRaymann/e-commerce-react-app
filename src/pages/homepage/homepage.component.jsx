import React from "react";

// Import custom components
import Directory from "../../components/directory/directory.component";

// Import styled components
import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
