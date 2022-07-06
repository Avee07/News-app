import React from "react";

const NewsItem = (props) => {
  
    let { title, description, imgurl, newsUrl, publishedAt, author , source } = props;
    return (
      <>
        <div className="my-3 ">
          <div className="card mb-4 box-shadow">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: '1' , left : '88%'}}>
              {source}
            </span>
            <img
              src={
                imgurl
                  ? imgurl
                  : "https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483296.jpg"
              }
              className="card-img-top"
              alt="..."
              
            />
            <div className="card-body ">
              <h5 className="card-title">{title}</h5>

              <p className="card-text">
                Published on : {new Date(publishedAt).toGMTString()}
              </p>
              <p className="card-text">Author : {author}</p>
              <p className="card-text">{description}...</p>

              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  
}
export default NewsItem;
