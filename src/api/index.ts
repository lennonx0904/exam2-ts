import axios from "axios";

const API = {
  getStores: () =>
    axios.get("https://fakerapi.it/api/v1/custom?", {
      params: {
        title: "city",
        description: "text",
        image: "image",
        date: "dateTime",
        phone: "phone",
        tag1: "pokemon",
        tag2: "pokemon",
        address: "streetAddress",
        uuid: "uuid",
      },
    }),
  getEvents: () =>
    axios.get("https://fakerapi.it/api/v1/custom?", {
      params: {
        title: "city",
        description: "text",
        image: "image",
        date: "dateTime",
        phone: "phone",
        tag1: "pokemon",
        tag2: "pokemon",
        address: "streetAddress",
        uuid: "uuid",
      },
    }),
  getNews: () =>
    axios.get("https://fakerapi.it/api/v1/custom?", {
      params: {
        title: "city",
        description: "text",
        date: "dateTime",
        uuid: "uuid",
      },
    }),
};

export default API;
