import React, { useEffect, useState,lazy,Suspense } from 'react'
// import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'

function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')
  const Youtube=lazy(()=>import('react-youtube'))

  
  useEffect(()=>{
    console.log(props.url)
    axios.request(props.url).then((response)=>{
      setMovies(response.data.results)
      console.log("movie list",response.data.results);
      
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos`).then((response)=>{
      console.log("response",response);
      if(response.data.results.length!==0){
        setUrlId(response.data.results[1])
      }else{
        console.log("array empty");
      }
      
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
        {movies.map((obj,index)=>
          
          <img key={index} onClick={()=>handleClick(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.poster_path}`} alt="poster" />
        )}
        

    
        </div>
        <Suspense fallback={<div><h1>Loading...</h1></div>}>
        {urlId && <Youtube videoId={urlId.key} opts={opts}/>}   

        </Suspense>
      
    </div>
  )
}

export default RowPost
