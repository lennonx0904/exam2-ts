import "./style.scss";

const StoreCard = () => {
  return (
    <div className="card-container">
      <img src="http://placeimg.com/640/480/any" alt="" />

      <div className="main">
        <div className="title">title: New Kiana</div>
        <p className="description">
          description: But they HAVE their tails in their mouths--and they're
          all over with William the Conqueror.' For, with all their simple
          sorrows, and find a pleasure in all directions, 'just like a wild
          beast.
        </p>
        <div className="tag-row">
          <div className="tag">tag1: Poochyena </div>
          <div className="tag">tag2: Honchkrow </div>
        </div>
      </div>

      <div className="info">
        <div className="time">time: 05:15 - 23:00</div>
        <div className="phone">+2604430964574</div>
        <div className="address">address: 489 Oma Turnpike</div>
      </div>
    </div>
  );
};

export default StoreCard;
