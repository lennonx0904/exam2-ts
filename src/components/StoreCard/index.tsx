import moment from "moment";

import { Icon } from "assets";
import { StoreProps } from "interface";
import "./style.scss";

const StoreCard = (props: StoreProps) => {
  const {
    title,
    description,
    image,
    phone,
    tag1,
    tag2,
    tag3,
    address,
    date: { date },
  } = props;

  const startTime = moment(date).format("HH:mm");
  const endTime = moment(date).add(8, "hours").format("HH:mm");

  return (
    <div className="store-card-container">
      <img src={image} alt="" />
      <div className="text-block">
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
          <div className="time">
            <img src={Icon.time} className="" alt="time" />
            <p className="time">{`${startTime}-${endTime}`}</p>
          </div>
          <div className="phone">
            <img src={Icon.phone} className="" alt="location" />
            <p>{phone}</p>
          </div>
          <div className="address">
            <img src={Icon.location} className="" alt="location" />
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
