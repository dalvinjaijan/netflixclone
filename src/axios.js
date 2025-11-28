import axios from 'axios'
import { baseUrl } from './constants/constants'
const instances=axios.create({
    baseURL:baseUrl,
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2NiYWM0NDZlMDcxODhhMzEyNTM2MDhmNTU3MDFlNSIsInN1YiI6IjY2MzMzZjJlYWQ1OWI1MDEyNTZkMmJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EEiIy0cx0-1dIWuTbKpaBS-FWi55vWUcxfREuH89-fE'
      }
})

export default instances