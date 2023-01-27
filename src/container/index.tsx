import { Navbar, Banner } from "components";
import StoreSection from "./storeSection";
import EventAndNewsSection from "./eventAndNews";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <StoreSection />
      <EventAndNewsSection />
    </>
  );
};

export default MainPage;
