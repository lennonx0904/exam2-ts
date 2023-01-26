import { Navbar, Banner, StoreCard, EventCard, NewsCard } from "components";
import StoreSection from "./StoreSection";

import "./style.scss";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <StoreSection />
      {/* <StoreCard />
      <EventCard />
      <NewsCard /> */}
    </>
  );
};

export default MainPage;
