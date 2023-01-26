import { StoreCard, EventCard, NewsCard, Navbar } from "components";

import "./style.scss";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <StoreCard />
      <EventCard />
      <NewsCard />
    </>
  );
};

export default MainPage;
