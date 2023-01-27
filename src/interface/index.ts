export interface NewsProps {
  title: string;
  description: string;
  date: {
    date: string;
    timezone_type: 3;
    timezone: string;
  };
  uuid: string;
}

export interface EventProps extends NewsProps {
  image: string;
  tag1: string;
  tag2: string;
  tag3: string;
  address: string;
}

export interface StoreProps extends EventProps {
  phone: string;
}

export interface MainPageProps {
  fetching: boolean;
  error: any;
  stores: StoreProps[];
  events: EventProps[];
  news: NewsProps[];
}
