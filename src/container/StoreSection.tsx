import { StoreCard } from "components";

import "./store.scss";

const StoreSection = () => {
  return (
    <div className="store-section">
      <div className="header">
        <p>Surrounding Store</p>
        <div className="btn">More</div>
      </div>
      <div className="cards">
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </div>
    </div>
  );
};

export default StoreSection;
