import axios from "axios";

const api1 = axios.create({
  baseURL: 'https://raw.githubusercontent.com/luannsr12/ddi-json-flag/main/'
})

export default api1