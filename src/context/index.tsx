import { useEffect, useState, createContext } from "react";
import API from "api";
import { MainPageProps } from "interface";

const DEFAULT_DATA = {
  fetching: true,
  error: null,
  stores: [],
  events: [],
  news: [],
};

export const MainPageContext = createContext<MainPageProps>(DEFAULT_DATA);

type Props = {
  children: any;
};

const MainPageProvider = (props: Props) => {
  const [fetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const [stores, setStores] = useState([]);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);

  const fetchStores = async () => {
    setIsFetching(true);

    try {
      const { data } = await API.getStores();
      // TODO: confirm how to display with RWD
      const newData = data.data.splice(0, 3);
      setStores(newData);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsFetching(false);
    }
  };

  const fetchEvents = async () => {
    setIsFetching(true);

    try {
      const { data } = await API.getEvents();
      // TODO: confirm how to display with RWD
      const newData = data.data.splice(0, 5);
      setEvents(newData);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsFetching(false);
    }
  };

  const fetchNews = async () => {
    setIsFetching(true);

    try {
      const { data } = await API.getNews();
      // TODO: confirm how to display with RWD
      const newData = data.data.splice(0, 3);
      setNews(newData);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchStores();
    fetchEvents();
    fetchNews();
  }, []);

  return (
    <MainPageContext.Provider
      value={{
        fetching,
        error,
        stores,
        events,
        news,
      }}
    >
      {props.children}
    </MainPageContext.Provider>
  );
};

export default MainPageProvider;
