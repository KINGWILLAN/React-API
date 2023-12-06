import React, { useEffect } from "react";
import axios from "axios";
import NewsCard from "../component/NewsCard";
import { newsBaseUrl } from "../utils/helper";

// console.log(NEWS_API_KEY);

function NewsList({ category }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const getNews = async () => {
    const options = {
      //   method: "GET",
      //   url: `${newsBaseUrl}local`,
      params: {
        category: category,
        language: "en",
        country: "us",
        sort: "top",
        page: "1",
        limit: "20",
      },
      headers: {
        "X-RapidAPI-Key": NEWS_API_KEY,
        "X-RapidAPI-Host": "newsi-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.get(`${newsBaseUrl}/category`, options);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getNews();
  }, []);

  if (loading) {
    return <div className="spinner"> </div>;
  }
  console.log(data);

  return (
    <>
      {data.map((item) => (
        <NewsCard key={item._id} {...item} />
      ))}
    </>
  );
}

export default NewsList;
