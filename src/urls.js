


// export const Originals=`discover/tv?api_key=${API_KEY}&with_networks=213`
export const originals={
    method: 'GET',
    url: 'discover/movie',
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc'
    },
  };

export const action={
    method:"GET",
    url:`discover/movie`,
    params:{
        with_genres:28
    }
}

export const comedy={
    method:"GET",
    url:`discover/movie`,
    params:{
        with_genres:35
    }
}