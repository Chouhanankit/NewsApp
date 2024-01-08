import React, { useContext } from 'react'
import defaultimage from "../assets/defaultimage.png";

function NewsCard({ news }) {

  const { title, description, urlToImage, publishedAt, url, author } = news;

  return (
    <>
    
      <div className="card mb-3 mt-3 p-2" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={urlToImage ? urlToImage : defaultimage} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">Auther : {author}</small></p>
              <span className='d-flex justify-content-between align-item-center'>
                <p className="card-text"><small className="text-body-secondary">Last updated {new Date(publishedAt).toLocaleTimeString("en-IN")} <br />{new Date(publishedAt).toDateString("en-IN")}</small></p>
                <a href={url} className='btn btn-sm btn-primary m-3'>View News</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsCard