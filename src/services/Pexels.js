const Pexels = {
  _baseUrl: () => {
    return 'https://api.pexels.com/v1'
  },
  _httpRequest: async (endpoint, method = 'GET') => {
    return await fetch(`${Pexels._baseUrl()}/${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: '563492ad6f91700001000001812d662150af4f7eba09057efe034d75'
      }
    })
  },
  getPhotos: async (endpoint, page = 1, perPage = 10, query = null) => {
    endpoint = `${endpoint}?page=${page}&per_page=${perPage}`
    if (query) {
      endpoint += `&${query}`
    }
    
    try {
      const response = await Pexels._httpRequest(endpoint)
      const json = await response.json()
      return json
    } catch (err) {
      return null
    }
  },
  getCuratedPhotos: async (page = 1, perPage = 10) => {
    return await Pexels.getPhotos('curated', page, perPage)
  },
  searchPhotos: async (query, page = 1, perPage = 10) => {
    return await Pexels.getPhotos('search', page, perPage, `query=${query}`)
  },
  getPhotoById: async (id) => {
    try {
      const response = await Pexels._httpRequest(`photos/${id}`)
      const json = await response.json()
      return json
    } catch (err) {
      return null
    }
  }
}

export default Pexels
