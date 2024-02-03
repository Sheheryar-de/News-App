import React, { useEffect, useState } from "react";
import "./NewsApi.css";

function NewsApi() {
  const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  const getNews = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=2b990c1a2ce84e28b4f3915c32cc1056"
      );
      const result = await response.json();
      // console.log(result);
      setData(result.articles);
    } catch (error) {
      console.log("error fetching data", error);
    }
    // } finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div>
        <h1>News of US</h1>
        <section>
          {data.map((item) => {
            return (
              <div key={item.url} className="container">
                <div>
                  <div className="header">
                    <img
                      src={item.urlToImage}
                      height="150px"
                      width="100%"
                      alt="News Thumbnail"
                    />
                    <h3>{item.title}</h3>
                  </div>
                  <hr />
                  <div className="footer">
                    <p>{item.description}</p>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
export default NewsApi;
