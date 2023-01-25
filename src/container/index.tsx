import { StoreCard, EventCard, NewsCard } from "components";

import "./style.scss";

const MainPage = () => {
  return (
    <div>
      <StoreCard />
      <EventCard />
      <NewsCard />
    </div>
  );
};

export default MainPage;
