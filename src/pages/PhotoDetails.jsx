import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Pexels from '../services/Pexels';

function PhotoDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null)

  useEffect(() => {
    const getPhoto = async () => {
      const response = await Pexels.getPhotoById(id)
      setData(response)
    }

    getPhoto()
  }, [])

  return (
    <div id="photo-details">
      <div className="container heading">
        <h1>Image Detail</h1>
        <p className="subtitle">
          You can view and download this image
        </p>
      </div>
      <div className="container">
        { data &&
          <React.Fragment>
            <div className="photo-box-details">
              <img src={data.src.large} alt="" />
            </div>
            <section className="info">
              <h2>{data.photographer}</h2>
              <p>More photo please visit: <a href={data.photographer_url}>{data.photographer_url}</a></p>
              <a href={data.src.original} download>
                <button>
                  Download
                </button>
              </a>
            </section>
          </React.Fragment>
        }
      </div>
    </div>
  )
}

export default PhotoDetails;