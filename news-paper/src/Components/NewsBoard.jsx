import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]); // re-fetch when category changes ✅

  return (
    <div className="text-center mt-4 px-3">
      <h2>
        Latest <span className="badge bg-danger text-light">{category.toUpperCase()}</span> News
      </h2>

      <div
        className="mt-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <h5 className="text-secondary mt-4">Loading News...</h5>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
