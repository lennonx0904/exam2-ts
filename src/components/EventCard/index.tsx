import moment from "moment";

import { Icon } from "assets";
import { EventProps } from "interface";
import "./style.scss";

const EventCard = (props: EventProps) => {
  const {
    title,
    description,
    image,
    tag1,
    tag2,
    tag3,
    address,
    date: { date },
  } = props;

  const eventDate = moment(date).format("YYYY-MM-DD");
  const startTime = moment(date).format("HH:mm");
  const endTime = moment(date).add(8, "hours").format("HH:mm");

  console.log("#eventDate", eventDate);

  return (
    <div className="event-card-container">
      <img src={image} alt="" />

      <div className="text-block">
        <div className="date-row">
          <div className="date">{eventDate}</div>
        </div>

        <div className="main">
          <div className="title">{title}</div>
          <p className="description">{description}</p>
          <div className="tag-row">
            <div className="tag">{tag1}</div>
            <div className="tag">{tag2}</div>
            <div className="tag">{tag3}</div>
          </div>
        </div>

        <div className="info">
          <div>
            <img src={Icon.time} className="" alt="time" />
            <p className="time">{`${startTime}-${endTime}`}</p>
          </div>
          <div>
            <img src={Icon.location} className="" alt="location" />
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
