import { Navbar, Banner } from "components";
import StoreSection from "./StoreSection";
import EventAndNewsSection from "./EventAndNewsSection";

import "./style.scss";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <StoreSection />
      <EventAndNewsSection />
    </>
  );
};

export default MainPage;
