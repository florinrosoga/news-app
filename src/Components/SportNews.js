import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function SportNews() {
  var [articles, setArticles] = useState([]);
  useEffect(() => {
    async function getData() {
      var response = await fetch(
        "https://newsapi.org/v2/everything?q=sport&language=en&pagesize=4&sortBy=publishedAt&apiKey=14621d806ef243c2a772655987f6ca71"
      );
      var data = await response.json();
      console.log(data);
      setArticles(data.articles || []);
    }
    getData();
  }, []);

  return (
    <div>
      <div className="w3l-searchblock w3l-homeblock1 py-5">
        <div className="container py-lg-4 py-md-3">
          <div className="most-recent">
            <div className="title-align mb-4">
              <h3 className="title-left">Sport News</h3>
              <Link to="/SportNews" className="more-posts">
                {" "}
                View more posts <span className="fas fa-arrow-right"></span>
              </Link>
            </div>
            <div className="row">
              {articles.map((item) => {
                return (
                  <div className="col-lg-3 col-md-6 item">
                    <div className="card">
                      <div className="card-header p-0 position-relative">
                        <a href="#blog-single">
                          <img
                            className="card-img-bottom d-block radius-image"
                            src={item.urlToImage}
                            alt="Card  cap"
                          />
                        </a>
                        <div className="post-pos">
                          <a href="#reciepe" className="receipe blue">
                            Learn more
                          </a>
                        </div>
                      </div>
                      <div className="card-body p-0 blog-details">
                        <a href="#blog-single" className="blog-desc">
                          {item.title}
                        </a>
                        <p>{item.description}</p>
                        <span className="post-date">
                          <span className="fa fa-clock-o"></span>{" "}
                          {item.publishedAt}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
