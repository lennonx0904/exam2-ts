import { useContext } from "react";

import { StoreCard } from "components";
import { MainPageContext } from "context";
import { MainPageProps } from "interface";
import "./style.scss";

const StoreSection = () => {
  const { stores } = useContext<MainPageProps>(MainPageContext);

  return (
    <div className="store-section">
      <div className="header">
        <p>Surrounding Store</p>
        <div className="btn">More</div>
      </div>
      <div className="cards">
        {stores.map((store) => {
          const { uuid } = store;
          return <StoreCard key={uuid} {...store} />;
        })}
      </div>
    </div>
  );
};

export default StoreSection;
