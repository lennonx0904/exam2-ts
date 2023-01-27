import { useContext } from "react";

import { EventCard, NewsCard } from "components";
import { MainPageContext } from "context";
import { MainPageProps } from "interface";

import "./eventAndNews.scss";

const EventAndNewsSection = () => {
  const { events, news } = useContext<MainPageProps>(MainPageContext);

  return (
    <div className="event-news-section">
      <div className="event-column">
        <div className="header">
          <p>Events</p>
          <div className="btn">More</div>
        </div>
        <div className="cards">
          {events.map((event) => {
            const { uuid } = event;
            return <EventCard key={uuid} {...event} />;
          })}
        </div>
      </div>

      <div className="column">
        <div className="header">
          <p>News & Bulletin</p>
          <div className="btn">More</div>
        </div>
        <div className="cards">
          {news.map((news) => {
            const { uuid } = news;
            return <NewsCard key={uuid} {...news} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default EventAndNewsSection;
