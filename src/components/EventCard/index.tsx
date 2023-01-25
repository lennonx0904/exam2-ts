import "./style.scss";

const EventCard = () => {
  return (
    <div className="event-card-container">
      <img src="http://placeimg.com/640/480/any" alt="" />

      <div className="text-block">
        <div className="date-row">
          <div className="date">2019-11-29</div>
          <div className="tag"> tag:status</div>
        </div>

        <div className="main">
          <div className="title">title: Blickchester</div>
          <p className="description">
            description: "I learn music.' 'Ah! that accounts for it,' said the
            March Hare said--' 'I didn't!' the March Hare. 'Sixteenth,' added
            the March Hare went on. 'We had the best way to explain the mistake
            it had.",
          </p>
          <div className="tag-row">
            <div className="tag">tag1: Poochyena </div>
            <div className="tag">tag2: Honchkrow </div>
            <div className="tag">tag3: Shellder </div>
          </div>
        </div>

        <div className="info">
          <div className="time">time: 05:15 - 23:00</div>
          <div className="address">address: 489 Oma Turnpike</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
