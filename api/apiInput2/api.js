import axios from "axios";

const api = axios.create({
  baseURL: 'https://gist.githubusercontent.com/ThadeuLuz/797b60972f74f3080b32642eb36481a5/raw'
})

export default api