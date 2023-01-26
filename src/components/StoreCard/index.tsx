import { Icon } from "assets";
import "./style.scss";

const StoreCard = () => {
  return (
    <div className="store-card-container">
      <img src="http://placeimg.com/640/480/any" alt="" />
      <div className="text-block">
        <div className="main">
          <div className="title">title: New Kiana</div>
          <p className="description">
            description: But they HAVE their tails in their mouths--and they're
            all over with William the Conqueror.' For, with all their simple
            sorrows, and find a pleasure in all directions, 'just like a wild
            beast.
          </p>
          <div className="tag-row">
            <div className="tag">Poochyena </div>
            <div className="tag">Honchkrow </div>
          </div>
        </div>

        <div className="info">
          <div className="time">
            <img src={Icon.time} className="" alt="time" />
            <p className="time">05:15-23:00</p>
          </div>
          <div className="phone">
            <img src={Icon.phone} className="" alt="location" />
            <p>+2604430964574</p>
          </div>
          <div className="address">
            <img src={Icon.location} className="" alt="location" />
            <p>489 Oma Turnpike</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
