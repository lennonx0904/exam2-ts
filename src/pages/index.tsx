import MainPageProvider from "context";
import MainPageContainer from "container";

const MainPage = () => {
  return (
    <MainPageProvider>
      <MainPageContainer />
    </MainPageProvider>
  );
};

export default MainPage;
