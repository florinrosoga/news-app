import React from "react";
import {useEffect, useState} from "react";
import next from "../images/next.png";
import previous from "../images/previous.png";

export default function ViewNews(props) {
  var [articles, setArticles] = useState([]);
  var [pageNum, setPageNum] = useState(1);
  var [totalPages, setTotalpages] = useState(0);

  useEffect(() => {
    async function getData() {
      var response = await fetch(
        `https://newsapi.org/v2/everything?q=${props.title}&pageSize=16&page=${pageNum}&language=en&sortBy=publishedAt&apiKey=14621d806ef243c2a772655987f6ca71`
      );
      var data = await response.json();
      console.log(data);
      setArticles(data.articles);
      setTotalpages(Math.round(data.totalResults / 16));
    }
    getData();
  }, [props.title, pageNum]);
  return (
    <div>
      <div className="w3l-searchblock w3l-homeblock1 py-5">
        <div className="container py-lg-4 py-md-3">
          <div className="most-recent">
            <div className="title-align mb-4">
              <h3 className="title-left">{props.headerName}</h3>
            </div>
            <div className="row">
              {articles.map((item) => {
                return (
                  <div className="col-lg-3 col-md-6 item">
                    <div className="card">
                      <div className="card-header p-0 position-relative">
                        <a href={item.url} target="_blank" rel="noreferrer">
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
                        <a
                          href={item.url}
                          className="blog-desc"
                          target="_blank"
                          rel="noreferrer">
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
      <div className="pagination-container">
        {pageNum !== 1 ? (
          <>
            {" "}
            <img
              src={previous}
              alt="prev"
              onClick={() => setPageNum(pageNum - 1)}
            />
          </>
        ) : null}

        <p>
          {pageNum} of {totalPages}
        </p>
        {pageNum !== totalPages ? (
          <>
            <img
              src={next}
              alt="next"
              onClick={() => setPageNum(pageNum + 1)}
            />
          </>
        ) : null}
      </div>
    </div>
  );
}
