import axios from "axios"


export default axios.create({
  baseURL: 'https://api.unsplash.com', 
  headers: {
    Authorization: "Client-ID 32560efc027a42b1c7f18b48b46f71cfbffc2a01f2f7891fa6af2846d4aceeb2"
  }
})