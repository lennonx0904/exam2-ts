import moment from "moment";

import { NewsProps } from "interface";
import "./style.scss";

const NewsCard = (props: NewsProps) => {
  const {
    title,
    description,
    date: { date },
  } = props;

  const releaseDate = moment(date).format("YYYY-MM-DD");

  return (
    <div className="news-card-container">
      <div className="header-row">
        <div>D&A Hostel</div>
        <div className="date">{releaseDate}</div>
      </div>

      <div className="title">{title}</div>
      <p className="description">{description}</p>
    </div>
  );
};

export default NewsCard;
