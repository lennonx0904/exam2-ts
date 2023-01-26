import { EventCard, NewsCard } from "components";

import "./eventAndNews.scss";

const EventAndNewsSection = () => {
  return (
    <div className="event-news-section">
      <div className="event-column">
        <div className="header">
          <p>Events</p>
          <div className="btn">More</div>
        </div>
        <div className="cards">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>

      <div className="column">
        <div className="header">
          <p>News & Bulletin</p>
          <div className="btn">More</div>
        </div>
        <div className="cards">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default EventAndNewsSection;
