import axios from 'axios'

const instance = axios.create({
  baseURL: "http://localhost:4000/store/v1"
})


export default instance;