import React, { useState, useEffect } from 'react';
import Pexels from '../services/Pexels';
import Photo from '../components/Photo';

function Homepage() {
  const [data, setData] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const getPhotos = async (page = 1) => {
      const perPage = 12
      let response
      if (searchQuery !== '') {
        response = await Pexels.searchPhotos(searchQuery, page, perPage)
      } else {
        response = await Pexels.getCuratedPhotos(page, perPage)
      }
      setData(response)
    }
    
    getPhotos()
  }, [searchQuery])

  const searchPhotos = async (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <React.Fragment>
      <div className="container heading">
        <h1>Pixar</h1>
        <p className="subtitle">
          Find the best images on the planet
        </p>
        <input type="text" value={searchQuery} className="search-photo" placeholder="Search something here" onChange={searchPhotos} />
      </div>
      <video src="https://storage.googleapis.com/tujju-sagara/dev%2Ffile%2F2021-10-16%2FO2x9pSgEmkQvydxkPTjHAfuJhr2B3vlDWRoMZPbmzDI3GPgbRcMSR3TPhvJGtCDzBOSz3lhXnMiR1PG6V1FkJIkgpsHu9KlkBaMaoPz5vvf77caZxgvWVNbsfWhgLTaP.mp4?generation=1634365705765994&alt=media" controls></video>
      <div className="flex">
        { data && data.photos &&
          data.photos.map(item => (
            <Photo key={item.id} id={item.id} url={item.src.large}></Photo>
          ))
        }
      </div>
    </React.Fragment>
  )
}

export default Homepage;
