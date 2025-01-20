import axios from 'axios'

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
  return axios
}

export default setToken

<!-- Updated: 2024-03-08T18:15:00.312077 -->

<!-- Updated: 2024-04-24T15:11:00.312077 -->

<!-- Updated: 2024-06-28T11:34:00.312077 -->

<!-- Updated: 2024-07-23T11:08:00.312077 -->

<!-- Updated: 2024-10-15T14:49:00.312077 -->
